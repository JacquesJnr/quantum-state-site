---
publish: "true"
created: 2026-09-29
modified: 2026-09-29T16:40:20.679Z
published: 2026-09-29T16:40:20.679Z
up:
  - "[[Design]]"
related:
collections:
---

# Findings Outlive the Meeting

An interpretation doesn't reset with each board pack. A finding stays joined to its changing evidence, its contradictions, its review state and the decision that followed it, so the board's understanding carries from one meeting to the next.

The app map does not yet show this; the journey ends at [[Export Query]]. The map already saves versions of what the [[Board Simulation Room]] produces. Still to be designed: whether a [[Query]] is kept or temporary, how the board's decision comes back in, and how a finding changes when its evidence does.

This is also the candidate difference from existing board tools set out in [[Product]], which mostly work one board cycle at a time.

This rules out treating each meeting as a fresh start, and board material that loses its link to evidence once exported.

## How a decision could come back in

Today the only route is an upload. These are the options on the table; none is chosen.

| Option | How it works | What it relies on |
| --- | --- | --- |
| **Upload only** | Someone saves the minutes into the [[Governance Vault]] like any other source | People remembering, and the minutes being findable |
| **Close the Query** | After the meeting, the director records the outcome on the [[Query]] that fed it: approved, rejected, deferred, and why | One extra step, taken while memory is freshest |
| **Round-trip the export** | The exported board material comes back as a node, linked to its Query, and the decision attaches to it | The export and the decision staying connected |
| **Connect the minutes** | A live source pulls minutes from the board portal or the company secretary's system | An integration, and minutes arriving in a readable form |
| **AI flags the change** | AI notices a new source that contradicts a standing finding, such as a changed strategy, and asks someone to confirm | Contradiction detection, with people still deciding ([[The Director Decides]]) |

**Used by:** [[Design]], [[Product]]. Features: [[Query]], [[Export Query]].
