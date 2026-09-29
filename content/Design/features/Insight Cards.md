---
publish: "true"
created: 2026-09-29
modified: 2026-09-29T11:18:13.606Z
published: 2026-09-29T11:18:13.606Z
up:
  - "[[Design]]"
related:
collections:
---

# Insight Cards

**Built on:** [[See the Evidence]], [[Human Authority]]

An Insight Card is a single governance finding, presented on its own: a concise statement, a confidence score and the tags that place it in a domain. It appears first as a Governance Insight Card inside the [[Node Details Panel]], and opens into full detail on the Insight Modal when Morgan selects it. The card exists to make a finding legible on its own terms, without hiding the evidence or the uncertainty behind it.

![[x/Images/App Maps/Mo-28-Sep QS App Map 2.0 S4 Understand evidence.png]]

## What it does for Morgan

Selecting a card opens the [Insight Modal](https://www.figma.com/board/WITVErwq2RH0fhCbBqVAJs?node-id=13-4298): the insight's full description and confidence score, its tags and a link to the source document, plus an actions toolbar. From here Morgan starts a new Investigation from the insight, or adds it to one already under way. Adding it to an existing Investigation opens the [Investigation Chooser](https://www.figma.com/board/WITVErwq2RH0fhCbBqVAJs?node-id=13-4300), a pick list of every Investigation in progress, so findings don't pile up without a purpose. An added notice confirms which Investigation the insight joined.

Confidence stays a separate signal from review state and strategic priority — a card can carry a high confidence score and still need human review, or a low one and still matter enough to investigate. The card never presents a finding as a settled conclusion; it presents the evidence a conclusion could be built on, and leaves the building to Morgan.

## Conditions to use it

- An insight has to exist on a node before its card can be opened.
- Adding a card to an Investigation requires at least one Investigation to already exist, or creating one from the card directly.
- Evidence that is missing, contradictory or stale should change what the card shows, though the exact treatment isn't specified yet.

## Still open

- How missing, contradictory or stale evidence changes a card's presentation isn't defined.
- Whether a single insight ever needs a dedicated view beyond the modal, or whether the modal is enough, is unresolved.
