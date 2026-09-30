# A — Superposition

The mark is the system. Every surface on the site is a translucent plane, and wherever two planes overlap the overlap gets darker, just as the mark does. The black lens, where two states meet, is kept for insight: the one published branch, the current page and the current node.

## Plan

### Color (strict grayscale)

| Name | Light | Dark | Role |
|---|---|---|---|
| Ground | `#E4E4E4` | `#000000` | Page. The neutral gray of the Figma primitives canvas, so the mark sits on the ground it was drawn on. |
| State | `#868686` at 0.28 and 0.45 | `#FFFFFF` at 0.28 and 0.45 | The two circles of the mark. The same fill values are used for every overlapping plane. |
| Lens | `#000000` | `#FFFFFF` | Insight. True black, never a tinted near-black. It inverts in dark mode, as `mark-white.svg` does. |
| Plane | `rgba(255,255,255,.72)` | `rgba(255,255,255,.06)` | A sheet of acetate: cards, buttons, the operating-loop line. |
| Ink | `#262626` | `#D4D4D4` | Body text. Contrast is 11.9:1 on light and 14.2:1 on dark. |
| Quiet | `#5A5A5A` | `#9C9C9C` | Meta, "Coming soon", breadcrumbs. Contrast is 5.4:1 on light and 7.6:1 on dark. |

No accent color. Nothing in the subject calls for one: governance intelligence is about what is evidenced versus what is uncertain, and density of gray already says that. Links are marked by a translucent plane under the text, not by a hue.

### Type

- **Instrument Sans** (the wordmark's face) carries everything: headings, body and UI. Display sizes are set Regular at −0.035em, so headings read like the wordmark at scale.
  - h1: 104px at 1440, clamped down to 46px
  - Article title: 88px
  - h2: 30–40px
  - Callout statements: 21px
  - Body: 17px on 1.6 line height (20px for the product paragraph)
  - Labels: 14–15px
- **Geist Mono** for code only. No mono labels anywhere.
- Card titles scale with `cqi` container units, so "Business" never breaks mid-word (Socratica's "Maintenanc/e" bug).

### Layout

```
[■ see what matters ◆ why it matters ◆ what evidence supports it ◆ … ■]  marquee, lens glyph separators
 (mark) / Quantum State                                 [Search] [◐]
 What is
 Quantum State                                          ← 104px, left aligned
 Explore the branches / Read the product paragraph / Open the Product page
 [ Vision plane      ▓][▓ Mission plane      ]          ← the two callouts overlap by 32px
 Explore Quantum State
 [Product][Design][Tech][Business][Roadmap]            ← 5 acetate sheets, 8.5:11
 Product in One Paragraph  |  paragraph (62ch)
```

Everything is left aligned on one 1216px column. Mobile turns the cards into strips with the lens on the right.

### Principles

1. **Overlap is the only decoration.** There are no gradients, blur shadows or textures. A plane either overlaps another plane, and gets darker, or it doesn't.
2. **The lens means insight, so it is rare.** Only the published card, the current page, the active explorer item and the current graph node get the solid lens.
3. **Each branch owns an angle, not a color.** Every card draws two states on the branch's own axis: Product 50° (the mark's own axis), Design 0°, Tech 90°, Business 140° and Roadmap −28°. The angle follows the branch onto its page header.
4. **Hover is resolution.** On hover the two states move closer, the lens opens and turns 22°, and the sheet lifts off, leaving a hard translucent copy of itself behind. This takes the place of Socratica's mascot rotation.
5. **Coming soon is a state that hasn't been observed yet.** The circles sit apart, so there is no lens. On hover they drift closer but never meet. The edge is dashed and the sheet has no fill.

## Revised after checking against the brief

- **Dropped the 01–05 numbering** I first gave the cards, borrowed from Socratica's "Issue 001". The branches are not a sequence; Roadmap isn't step five.
- **Dropped the uppercase mono label voice** (marquee, breadcrumbs, subhead). It is Socratica's zine voice and a template tell. The system voice is now the brand's own two glyphs: the slash from the lockup separates links and breadcrumbs, and a small lens separates the marquee phrases.
- **Replaced a flat gray "Coming soon" card.** All five branches are unpublished, so five identical gray sheets would have been the whole grid. Each placeholder now keeps its branch's angle, and the difference between the two states is overlap (lens or no lens), not tone.
- **Replaced the drop-shadow hover.** A blurred shadow is the SaaS-card default. It is now a hard offset plane at the state gray, so lifting a card shows two layers.
- **Dark mode is designed, not inverted.** The ground is true black (I rejected `#111`, a tell) and the lens turns white, following `mark-white.svg`, instead of disappearing.
- **Rejected an accent color for links.** The brief allows one if it is argued from the subject, and I couldn't argue it.
- **Tuned the lens geometry after the first screenshots.** With the circles too close, the "lens" was almost a whole black disc. At rest the circles now sit 1.5 radii apart, a thin vesica like the mark's, and 1.15 radii apart on hover.

## Quartz theme mapping

| Token | Light | Dark |
|---|---|---|
| `light` | `#e4e4e4` | `#000000` |
| `lightgray` | `#cbcbcb` | `#2e2e2e` |
| `gray` | `#5a5a5a` | `#9c9c9c` |
| `darkgray` | `#262626` | `#d4d4d4` |
| `dark` | `#000000` | `#ffffff` |
| `secondary` | `#000000` | `#ffffff` |
| `tertiary` | `#868686` | `#868686` |
| `highlight` | `rgba(134,134,134,0.16)` | `rgba(255,255,255,0.07)` |
| `textHighlight` | `rgba(0,0,0,0.14)` | `rgba(255,255,255,0.20)` |

Fonts: header `Instrument Sans`, body `Instrument Sans`, code `Geist Mono`.

## Porting notes (Quartz 5)

- The dark toggle uses Quartz's own `saved-theme` attribute on `<html>`.
- Breadcrumb separator: set `spacerSymbol: "/"` on the Breadcrumbs component.
- The page-header lens is a `::after` with an inline SVG data URI, keyed on `body[data-slug^="Quantum-State/Product"]`, so each branch gets its angle from `custom.scss` alone with no new component. Each branch needs one light and one dark URI.
- The operating-loop line is styled with `article p:has(> strong:only-child)`, so the markdown doesn't change.
- Callouts restyle `.callout[data-callout=success|example]`. The overlap of the two home callouts needs them in one wrapper. That comes free on the home page, which is raw HTML like Socratica's, and is not needed on inner pages.
- The home page itself, meaning the marquee and the card grid, is raw HTML inside `index.md`, as Socratica does it.
