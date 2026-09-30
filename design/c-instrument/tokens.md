# C · Instrument — tokens and plan

Direction: Quantum State as a precision instrument. The mark is read as an optic: two gray states that only resolve into a sharp black lens where they overlap. The whole wiki behaves like that lens. Things come into focus when you attend to them, and the only full-strength ink on the page is the thing in focus.

## 1. Plan

### Color

No added hue. Every value is derived from the mark itself: the fill `#868686` at the mark's two opacities (0.28 and 0.45) laid over a cool optical-bench gray, plus the lens's pure black. The argument comes from the subject, not taste. The product exists to separate signal from noise, and the mark already encodes that: translucent gray is context, black is where two sources agree. So the palette has exactly one "signal" value (ink) and the rest is glass.

| Name | Light | Dark | Role |
|---|---|---|---|
| Bench | `#F1F2F2` | `#1C1D1E` | page background (dark mode is a dark field, as in dark-field microscopy, not a tinted near-black) |
| Glass 28 | `#D6D7D7` | `#3A3B3C` | `#868686` at 0.28 over Bench: panels, hairlines, track |
| Glass 45 | `#C1C2C2` | `#505152` | `#868686` at 0.45 over Bench: rules, link underlines, ticks |
| Graphite | `#585A5B` | `#A6A8A9` | secondary text, labels (6.2:1 / 7.1:1 on Bench; 5.4:1 on a callout panel) |
| Body | `#2A2B2C` | `#D9DADA` | running text (12.6:1 / 12.1:1) |
| Ink | `#000000` | `#FFFFFF` | signal only: headings, the lens, the active item, focus rings |

Pure black and pure white are deliberate. Ink is the lens colour, so it isn't softened.

### Type

- **Instrument Sans** (the wordmark face, Google Fonts, variable `wdth 75–100`, `wght 400–700`). Headings, UI, labels. Labels use the condensed width (`wdth 80`) in sentence case, like engraving on a bezel, so the system voice comes from the brand face instead of a monospace.
- **Nunito** (Google Fonts). Body and callouts, Regular 400. It replaced Newsreader on 29 Sep, following Jacques's `home.html — light` frame in Figma (80:2).
- **Afacad** (Google Fonts). Only the hero subline "Governance Intelligence" under the wordmark, Regular 400, in Graphite. Taken from Jacques's `Index` frame in Figma (84:34), 29 Sep.
- **JetBrains Mono**: code only.

Scale (classical, Bringhurst): 13 · 15 · 18 · 21 · 24 · 36 · 48 · 72 px.

| Use | Family | Size / line | Weight | Width |
|---|---|---|---|---|
| Home H1 | Instrument Sans | 72 / 1.0 (clamp 44–72) | 500 | 100, tracking −0.025em |
| Hero subline | Afacad | 40 / auto | 400 | — |
| Article title | Instrument Sans | 48 / 1.05 | 500 | 100 |
| H2 | Instrument Sans | 24 / 1.25 | 600 | 100 |
| Card title | Instrument Sans | 24 / 1.1 | 500 | 100 |
| Label | Instrument Sans | 13–15 / 1.3 | 500 | 80 |
| Body | Nunito | 18 / 1.65 | 400 | — |
| Callout (home) | Nunito | 24 / 1.4 | 400 | — |

### Layout

Home, at 1440:

```
[■■■■ black band ········(  sharp aperture  )········ blurred phrases ■■■■]
  ◐ / Quantum State                                         [Dark mode]
                                                    .---------.
  What is Quantum                                  /  ◐ lens  \   ← hero optic,
  State                                            \   ring   /     focus pull on load
  Vision / Mission / Product in One Paragraph       '---------'
  ┌ Vision Statement ─────────┐ ┌ Mission Statement ──────────┐
  │ Nunito 24                 │ │                             │
  └───────────────────────────┘ └─────────────────────────────┘
  Explore Quantum State
  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐   five eyepieces in one row
  │ (◐) │ │ ( ) │ │ ( ) │ │ ( ) │ │ ( ) │   live = lens; soon = circles apart,
  │Prod.│ │Des. │ │Tech │ │Bus. │ │Road.│   out of focus, no lens
  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘
  Product in One Paragraph   (single 64ch column)
```

Left-aligned throughout on a 1120px measure. Cards: 5 columns → 3 under 1000px → horizontal strips under 760px (optic on the left, title on the right).

Page: stock Quartz grid (`320px auto 320px`), same class names. Left: lockup as `.page-title`, search, dark/reader toggles, explorer. Centre: breadcrumbs (slash separators from the lockup), the branch's eyepiece beside the title, meta, body. Right: graph, table of contents, backlinks.

### Principles

1. **Black is signal.** Only the thing in focus gets full ink. Everything else is glass (a gray derived from the mark).
2. **Attention focuses.** Hover and focus pull a figure into focus: the two circles converge, the lens goes solid, the blur clears and the focus ring turns. That replaces Socratica's rotate-on-hover with the same small act, done in this subject's terms.
3. **Coming soon means not yet resolved.** Unpublished branches show their two circles apart and blurred, with no lens. That is honest and on-metaphor, and they are not links.
4. **One orchestrated motion.** The page-load focus pull on the hero (optic and heading) plus the marquee. Nothing else moves unless the reader does something.
5. **Each branch has its own axis.** Grayscale can't carry section colour, so each branch owns an angle: its optic's two circles sit on a different bearing (Product 50°, the logo's own angle, then Design 122°, Tech 194°, Business 266°, Roadmap 338°: five points 72° apart on a dial). The same figure repeats small beside the title on that branch's pages.

## 2. Revisions after checking against the brief

- **Labels were going to be monospace.** That is the templated-chrome tell, and Socratica's own weak spot. They moved to Instrument Sans at condensed width, which is the brand face.
- **I had an amber "indicator light" accent** for links and focus. I cut it. The brief asks for color to be justified by the subject, and the subject's own signal colour is the lens black. Links are ink with a Glass 45 underline instead.
- **The dark mode started as a tinted near-black (`#111`).** That's another tell, and it would crush the 0.28 glass circles to nothing. It became a mid dark field (`#1C1D1E`) where both glass levels stay visible and the lens flips to white, as in `mark-white.svg`.
- **4-column cards (Socratica's grid)** left one orphan out of five. Now five in a row: the branches read as five settings of one instrument.
- **The welcome header was going to say "Welcome to Quantum State".** That would be invented copy. It now uses the note's own H1, "What is Quantum State". The subhead links are the note's own headings, separated by the lockup's slash.
- **The marquee was going to be a plain ticker.** Now the band has one sharp aperture in the middle, with the phrases blurred on either side. It's the same idea as the cards (focus), so the boldness stays in one place instead of adding a second gimmick.
- **The `{write: one line}` placeholders** in every hub note are not Jacques's prose, so cards show titles only and the page template omits that line (as with "Where it stands").

## 3. Quartz theme mapping

`quartz.config.yaml` → `theme.colors`:

| Token | Light | Dark | From |
|---|---|---|---|
| `light` | `#F1F2F2` | `#1C1D1E` | Bench |
| `lightgray` | `#D6D7D7` | `#3A3B3C` | Glass 28 |
| `gray` | `#C1C2C2` | `#505152` | Glass 45 (graph links, rules) |
| `darkgray` | `#2A2B2C` | `#D9DADA` | Body (Quartz uses darkgray for body text) |
| `dark` | `#000000` | `#FFFFFF` | Ink |
| `secondary` | `#000000` | `#FFFFFF` | Ink (links; distinguished by underline) |
| `tertiary` | `#585A5B` | `#A6A8A9` | Graphite (hover, graph visited) |
| `highlight` | `rgba(134,134,134,0.14)` | `rgba(134,134,134,0.20)` | glass wash for internal-link/code backgrounds |
| `textHighlight` | `rgba(134,134,134,0.45)` | `rgba(134,134,134,0.45)` | the mark's 0.45 glass, for `==marks==` |

`theme.typography`: `header: Instrument Sans`, `body: Nunito`, `code: JetBrains Mono`. Quartz's font loader requests only `wght`, so `custom.scss` should add the Instrument Sans `wdth` axis with its own `@import` (see the `<link>` in `page.html`).

Callouts: `.callout[data-callout]` gets `--color: var(--dark); --border: transparent; --bg: var(--highlight)` for every type. Type is carried by the icon, not by hue: success = solid lens, example = outlined lens, and the rest keep Quartz's icons in ink. All callout rules are in `page.html` under `/* callouts */`, written against Quartz's real `.callout > .callout-title > .callout-icon` DOM.

Porting notes: the home is Socratica-style raw HTML inside `index.md`. Hide the sidebars on `body[data-slug="index"]` and copy the `.marquee`, `.hero`, `.cards` rules into `custom.scss`. Per-branch angle is set by `--bearing` on the card and on `body[data-slug^="Product"]` for the page eyepiece.

## 4. Figma

Not done in this session. No Figma tools (`generate_figma_design`, `use_figma`) or `/figma:figma-use` skill were available to worker C, so nothing was placed in section `c-instrument` at x 8000 on page `71:52`. The four screenshots in `shots/` are ready to drop in as image frames, and the Tokens frame can be built from sections 1 and 3 above.
