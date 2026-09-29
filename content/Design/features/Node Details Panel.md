---
publish: "true"
created: 2026-09-29
modified: 2026-09-29T11:18:02.239Z
published: 2026-09-29T11:18:02.239Z
up:
  - "[[Design]]"
related:
collections:
---

# Node Details Panel

**Built on:** [[See the Evidence]]

The Node Details Panel is where Morgan opens a single point in the [[Governance Landscape]] graph and finds out what it actually holds. It comes before any analysis, because Morgan has to trust the pieces of evidence before he builds anything on top of them.

![[x/Images/App Maps/Mo-28-Sep QS App Map 2.0 S4 Understand evidence.png]]

## What it does for Morgan

The [Node Details Panel](https://www.figma.com/board/WITVErwq2RH0fhCbBqVAJs?node-id=13-4297) shows the source's document name and metadata alongside its insights, each carrying a summary, a confidence score and tags. A Related section lists other nodes connected by content, tags, author or domain, so Morgan can see what else a matter touches without leaving the panel. An AI Summary explains the node in plain language, and he can ask AI a question about it directly from here.

From this panel Morgan can select an insight card, which opens [[Insight Cards]] and lets him judge one finding on its own; open the source document, which opens the [[Document Viewer]]; or ask AI a question scoped to the node.

## Conditions to use it

- A node has to exist in the Governance Landscape first, with at least one insight drawn from it. A node with no insights yet isn't specified.
- Confidence scores and related nodes depend on the vault build having read the source and mapped its connections.
- Opening the source document or an insight both return to this panel, so it stays the anchor for evidence gathered around one node.

## Still open

- What the panel shows for a node with no insights yet isn't defined.
- How confidence, review state and strategic priority stay visually distinct on one panel, without collapsing into a single score, is still being worked out.
