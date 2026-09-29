---
publish: "true"
created: 2026-09-29
modified: 2026-09-29T11:19:20.563Z
published: 2026-09-29T11:19:20.563Z
up:
  - "[[Design]]"
related:
collections:
---

# AI Chat

**Built on:** [[Human Authority]]

AI Chat sits outside the seven-stage journey as its own app, reachable from any screen that offers it, and takes that screen's context with it. It answers questions at any stage, but nothing it suggests changes an Analysis until Morgan accepts it.

![[x/Images/App Maps/Mo-28-Sep QS App Map 2.0 AI Chat.png]]

## What it does for Morgan

Chat opens from three points in the main journey: the AI Chat Bar on [[Governance Landscape]] for an open conversation at the vault level, "Ask about this node" on the [[Node Details Panel]] for a targeted question about one node, and the AI Chat Side Panel on [[Investigation]] for working directly on the Analysis. Each context shapes what the chat can see and what it's suited to — a quick question at the vault level reads differently from a request to change an Investigation's Analysis.

Inside [AI Chat](https://www.figma.com/board/WITVErwq2RH0fhCbBqVAJs?node-id=13-4337) itself, Morgan sends a message, adds context with an @ mention — an upload, an annotation, a node or an insight — changes the model, or interrupts a response in progress. A conversation can carry a suggested change to the Investigation's Analysis, which Morgan approves or rejects explicitly; approving is the only way it takes effect. [AI Chat List](https://www.figma.com/board/WITVErwq2RH0fhCbBqVAJs?node-id=13-4338) holds every past chat, newest first, and lets Morgan reopen, rename or delete one.

## Conditions to use it

- Chat is available from any screen that offers it; it has no entry condition of its own beyond being opened from somewhere in the main journey.
- A suggested change only reaches the Investigation's Analysis after Morgan accepts it — AI Chat can propose, never apply on its own.
- The main app and AI Chat are drawn as separate apps, with no connector between them; how a screen's context actually hands off to chat isn't specified.

## Still open

- How Morgan always knows which context the chat can currently see isn't defined.
- Starting a new chat directly from the chat list, and any version history for a suggested change once accepted, aren't drawn.
