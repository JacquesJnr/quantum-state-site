function renderObsidianButtons() {
  // Obsidian still parses single-dollar text as inline math with KaTeX disabled.
  // ponytail: client-side only, so popovers, RSS and page descriptions still see a code node.
  // @quartz-community/obsidian-flavored-markdown hardcodes remark-obsidian's `math: true`;
  // pass `math: false` through its options upstream, then delete this loop.
  for (const code of document.querySelectorAll('article code.math-inline')) {
    const raw = code.textContent ?? ''
    code.replaceWith(document.createTextNode(`$${raw.trim()}${raw.match(/\s+$/)?.[0] ?? ''}$`))
  }
  for (const pre of document.querySelectorAll<HTMLPreElement>('article pre[data-language="button"]')) {
    const fields = Object.fromEntries(
      (pre.textContent ?? '').split('\n').map((line) => {
        const space = line.indexOf(' ')
        return space < 0 ? ['', ''] : [line.slice(0, space), line.slice(space + 1).trim()]
      }),
    )
    if (fields.type !== 'link' || !fields.name || !fields.action) continue
    let url: URL
    try { url = new URL(fields.action, location.href) } catch { continue }
    if (!['http:', 'https:'].includes(url.protocol)) continue
    const link = document.createElement('a')
    link.className = 'qs-button'
    link.textContent = fields.name
    link.href = url.href
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    ;(pre.closest('figure') ?? pre).replaceWith(link)
  }
}

// The reader-mode toggle becomes a link home (Material Symbols "home"), keeping its toolbar slot and styling.
function readerModeToHome() {
  const home = document.querySelector<HTMLAnchorElement>('.page-title a')?.getAttribute('href')
  if (!home) return
  for (const button of document.querySelectorAll('button.readermode')) {
    const link = document.createElement('a')
    link.className = 'readermode qs-home-link'
    link.href = home
    link.setAttribute('aria-label', 'Home')
    link.innerHTML =
      '<svg viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>'
    button.replaceWith(link)
  }
}

// Image zoom: tap/click an article image to view it full screen; tap outside it or Esc to close.
function zoomDialog() {
  let dialog = document.getElementById('qs-zoom') as HTMLDialogElement | null
  if (dialog) return dialog
  dialog = document.createElement('dialog')
  dialog.id = 'qs-zoom'
  dialog.setAttribute('aria-label', 'Image viewer')
  const img = document.createElement('img')
  dialog.append(img)
  document.body.append(dialog)
  const d = dialog
  d.addEventListener('click', (e) => { if (e.target === d) d.close() })

  // Pinch-zoom and pan the image only; the page itself never zooms (touch-action: none in CSS).
  const pointers = new Map<number, { x: number; y: number }>()
  let scale = 1, tx = 0, ty = 0
  let pinch: { dist: number; scale: number } | null = null
  const apply = () => { img.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})` }
  const spread = () => {
    const [a, b] = [...pointers.values()]
    return Math.hypot(a.x - b.x, a.y - b.y)
  }
  img.addEventListener('pointerdown', (e) => {
    img.setPointerCapture(e.pointerId)
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY })
    if (pointers.size === 2) pinch = { dist: spread(), scale }
  })
  img.addEventListener('pointermove', (e) => {
    const last = pointers.get(e.pointerId)
    if (!last) return
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY })
    if (pointers.size === 2 && pinch) {
      scale = Math.min(5, Math.max(1, (pinch.scale * spread()) / pinch.dist))
    } else if (pointers.size === 1 && scale > 1) {
      tx += e.clientX - last.x
      ty += e.clientY - last.y
    }
    apply()
  })
  const release = (e: PointerEvent) => {
    pointers.delete(e.pointerId)
    if (pointers.size < 2) pinch = null
    if (scale === 1) { tx = 0; ty = 0; apply() }
  }
  img.addEventListener('pointerup', release)
  img.addEventListener('pointercancel', release)
  // iOS Safari zooms the page through its own gesture events, which touch-action doesn't always stop.
  for (const type of ['gesturestart', 'gesturechange']) d.addEventListener(type, (e) => e.preventDefault())
  d.addEventListener('close', () => {
    pointers.clear(); pinch = null; scale = 1; tx = 0; ty = 0
    img.style.transform = ''
  })
  return d
}

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement
  if (!(target instanceof HTMLImageElement)) return
  if (!target.closest('.center article') || target.closest('a, .popover, #qs-zoom')) return
  const dialog = zoomDialog()
  const img = dialog.querySelector('img')!
  img.src = target.currentSrc || target.src
  img.alt = target.alt
  if (!dialog.open) dialog.showModal()
})

// Phones: the local graph becomes a static banner under the title header; a tap opens the global graph.
const phone = window.matchMedia('(max-width: 800px)')
function graphBanner() {
  const graph = document.querySelector<HTMLElement>('.sidebar.right .graph')
  const header = document.querySelector('.center .page-header')
  if (!phone.matches || !graph || !header) return
  graph.classList.add('qs-graph-banner')
  header.after(graph)
}
document.addEventListener('click', (e) => {
  const outer = (e.target as HTMLElement).closest('.qs-graph-banner .graph-outer')
  outer?.querySelector<HTMLButtonElement>('.global-graph-icon')?.click()
})

document.addEventListener('nav', () => {
  renderObsidianButtons()
  readerModeToHome()
  graphBanner()
})
renderObsidianButtons()
readerModeToHome()
graphBanner()
