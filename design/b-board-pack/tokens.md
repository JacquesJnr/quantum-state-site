# B: Board pack, tokens and plan

The wiki is a board pack you are allowed to open. The home page is the pack's cover and binder, with the five branches as pressboard divider sheets with index tabs. Content pages are the papers behind each tab. The one bold move is **the annotated paper**: on the home page, "Product in One Paragraph" is set as a sheet, and a director's two inks mark it up once as the page loads. A yellow highlighter runs over the five "what" phrases, and a red pen rings the three product places and underlines the human-authority sentence. The marks are drawn, with no words, so no copy gets invented.

## Color

The logo stays grayscale. I add two colors, and both are inks a board director actually holds: a **red pen** (redlines, review marks, tracked changes) and a **yellow highlighter** (what a reader marks as material). Neither is decoration. Red is only for the reader's hand: links, focus, the stamp, pen marks. Yellow only ever sits behind text, as Quartz's own `textHighlight` token.

| Name | Light | Dark | Role |
|---|---|---|---|
| Desk | `#E8E9EB` | `#1C1D20` | Page background: cool binder board. Not cream. |
| Sheet | `#FFFFFF` | `#27292D` | Paper surfaces: callouts, papers, the article sheet |
| Rule | `#CFD2D6` | `#3D4046` | Sheet edges, table rules, dividers |
| Meta gray | `#686A6E` | `#8F9297` | Meta, labels. The mark's `#868686` pulled darker so small text passes 4.5:1 on the desk (4.7:1) |
| Body ink | `#303236` | `#DADBDD` | Body text (11.6:1 on sheet, 10.6:1 on desk / 11.0:1 dark) |
| Black | `#000000` | `#FFFFFF` | Headings, marquee, the mark's lens. True black, the lens's own |
| Red pen | `#B3261E` | `#FF8F84` | Links, focus rings, stamps, pen marks (6.3:1 on sheet / 6.4:1 dark) |
| Highlighter | `#FFE24D` at 75% | `#E6C300` at 38% | `textHighlight`, highlighted phrases |

Pressboard tones for the five dividers step through the mark's own densities, from the light circle down to the lens: `#DDDFE2`, `#C6C9CD`, `#A9ADB2`, `#5F6368`, `#2C2E32` (dark mode keeps the same order, offset darker). Per-branch identity is **tab position plus tone**, not hue.

## Type

- **Instrument Sans** (the wordmark's face): headings, tabs, UI, the marquee. Regular for the lockup, 600 at condensed width (`wdth` 85) for tab letters and divider titles.
- **Spectral**: body. Production Type drew it for on-screen documents (it shipped as a Google Docs face), which is exactly what a board paper is. Light 300 for the large home title and Regular 400 for reading, with 1.65 line-height because it is a serif.
- **IBM Plex Mono**: code only. Never used for labels.

Scale, from Bringhurst's classic sequence: 12 / 14 / 16 / 18 / 21 / 24 / 36 / 48 / 60. Body text is 18px Spectral and the page measure is 66ch.

## Layout

```
┌──────────────────────────────────────────────────────────────┐
│ see what matters / why it matters / what evidence supports…  │  black marquee, brand slash separators
├──────────────────────────────────────────────────────────────┤
│ [mark / Quantum State]                    Search   ◐          │
│                                                              │
│ What is Quantum State            (Spectral Light 60)         │
│ Explore the branches   Read the product paragraph   Search   │
│                                                              │
│ ┌ Vision Statement ─────────┐ ┌ Mission Statement ────────┐  │  two callout sheets
│ └───────────────────────────┘ └───────────────────────────┘  │
│                                                              │
│ Explore Quantum State                                        │
│  [A]      [B]      [C]      [D]      [E]   ← staggered tabs  │
│ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                      │  pressboard dividers, A4 ratio
│ │stamp│ │stamp│ │stamp│ │stamp│ │stamp│                      │
│ │Title│ │Title│ │Title│ │Title│ │Title│                      │
│ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘                      │
│                                                              │
│ Product in One Paragraph                                     │
│ ┃ ┌─ sheet ──────────────────────────────┐                   │  red pen sideline in the margin
│ ┃ │ …see what matters (highlighted)…      │                   │
│ ┃ │ …(Governance Vault) ringed in red…    │                   │
│ ┃ └───────────────────────────────────────┘                   │
└──────────────────────────────────────────────────────────────┘
```

On mobile the dividers become horizontal strips stacked like a binder seen side-on, with each tab sticking out to the right and stepping down the stack.

The page template is Quartz's three-column grid. The centre is a white **sheet** on the desk, and its divider tab (letter plus branch) is clipped to the sheet's top edge, so every page carries its section. The left and right sidebars sit on the desk with no sheet: they are the binder, not the paper. Text is left-aligned throughout and never justified, because board papers are ragged-right.

## Principles

1. **Everything is a physical object from the boardroom table.** Sheets, dividers, tabs, stamps, and two pens. If a device isn't something a director handles, it goes.
2. **Two inks, strict jobs.** Red is the reader's hand. Yellow is materiality. Everything else is grayscale, like the mark.
3. **Letters, not numbers.** Binder tabs are lettered A to E. The branches are a reference set, not a sequence, so there are no 01/02/03 markers.
4. **One orchestrated moment.** The pen marks draw in once when the page loads, and the marquee scrolls. Beyond those, motion only answers the reader: a divider pulls up out of the binder and its stamp re-inks when hovered or focused.
5. **"Coming soon" is a rubber stamp.** An unpublished branch is a divider with nothing filed behind it yet, stamped in red. That is honest, and it reads as something that is about to happen.

## What I revised after checking the plan against the brief

- **I dropped a handwriting font for margin notes.** My first plan had red handwritten notes in the margin. That would have meant writing copy in Jacques's voice (the brief forbids it), and handwriting fonts read as kitsch. The annotations are now drawn marks only (highlight, ring, underline, sideline) over his verbatim text.
- **I swapped numbered agenda items for lettered tabs.** I first set the branches as "Item 1 to 5" on an agenda. Product, Design, Tech, Business and Roadmap are not an order of business, so they became binder tabs A to E.
- **I dropped per-branch hues.** Copying Socratica's colored covers would have broken a grayscale mark for taste alone. Branch identity now comes from tab position and pressboard tone, stepped on the mark's own opacities. Color is spent only on the two inks.
- **The marquee separator is the brand slash.** Middots are the generic tell. The lockup already owns a divider stroke, so the marquee uses `slash.svg`.
- **I moved off cream.** A warm paper ground was my first reflex, and it is the #1 generated-page tell. Board papers are bright white bond on a cool gray binder board.
- **Mono is for code only.** The teardown's uppercase-mono label voice is Socratica's, not a board pack's. Labels are Instrument Sans in sentence case.

## Quartz token mapping

`quartz.config.yaml` → `theme.colors`, `theme.typography`:

| Token | Light | Dark | Used for here |
|---|---|---|---|
| `light` | `#E8E9EB` | `#1C1D20` | desk (page background) |
| `lightgray` | `#CFD2D6` | `#3D4046` | rules, borders, search field |
| `gray` | `#686A6E` | `#8F9297` | meta, graph nodes |
| `darkgray` | `#303236` | `#DADBDD` | body text |
| `dark` | `#000000` | `#FFFFFF` | headings |
| `secondary` | `#B3261E` | `#FF8F84` | links, page title hover, current node |
| `tertiary` | `#7E1A14` | `#FFC2BB` | link hover |
| `highlight` | `rgba(179,38,30,0.07)` | `rgba(255,143,132,0.10)` | internal link wash, hovered rows |
| `textHighlight` | `#FFE24DBF` | `#E6C30061` | `==highlights==`, search hits |

| Font slot | Family |
|---|---|
| header | Instrument Sans |
| body | Spectral |
| code | IBM Plex Mono |

The sheet (`#FFFFFF` / `#27292D`) is not one of Quartz's nine tokens. It goes in `custom.scss` as `--sheet`, applied to `.center` and to `.callout`, together with the divider tones (`--tab-a` … `--tab-e`) and `body[data-slug^="Quantum-State/Product"]` selectors that set each page's tab letter and tone.

### Callouts

A callout is a clipped insert: a white sheet with a 1px rule and a 4px black spine on the left. Its title is Instrument Sans 600, and the icon is swapped for a red pen mark per type (a tick for `success`, a bracket for `example`). The body stays in Spectral. The per-type rainbow Quartz ships with is flattened to grayscale plus red, because the callout type is already named in the title.

## Notes

- Product.md's `{write: one line - what this branch answers}` placeholder is left out of `page.html`, the same way the brief drops "Where it stands" from the home page. Its empty `## Product concept registry` heading is kept, verbatim.
- `?theme=light|dark` on either page forces the mode (used for the screenshots). The attribute is Quartz's own `saved-theme`.
- `shots/shoot.sh` re-takes the screenshots against `python -m http.server 8102`.
