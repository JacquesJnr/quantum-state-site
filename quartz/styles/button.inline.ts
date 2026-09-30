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

document.addEventListener('nav', renderObsidianButtons)
renderObsidianButtons()
