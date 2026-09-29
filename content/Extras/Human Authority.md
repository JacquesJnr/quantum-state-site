---
publish: "true"
created: 2026-09-29
modified: 2026-09-29T18:29:29.301Z
published: 2026-09-29T18:29:29.301Z
up:
  - "[[Product]]"
related:
collections:
---

# Human Authority

AI surfaces, analyzes and proposes. People validate, approve, accept risk and decide. Quantum State never takes the board's authority.

Every AI output in the product stops short of a decision. An [[Insight Cards|Insight Card]] carries a claim and a confidence level, not a verdict; Morgan reads it, checks the evidence behind it, and chooses whether it belongs in his [[Query]]. The [[Board Simulation Room]] runs scenarios and drafts artifacts, but a human reviews and edits before anything moves toward the board. [[Export Query|Exporting a Query]] produces a draft for the board pack, not a finished recommendation; Morgan previews it and decides what goes out under his name.

This rules out AI that acts on its own: no auto-approval, no silent publishing, no insight that skips the review step because it scored high confidence. A finding can be well-supported and still wait for a person to accept the risk it implies. The line holds even when it slows things down, because the risk a board carries is the board's to accept, not the model's.

The rule also shapes what the interface has to show: not just a conclusion, but who is meant to act on it and what accepting it commits them to.

![[x/Images/Wiki/QS Diagram - AI may, people must.png]]

**Design principles under it:** [[The Director Decides]], [[A Candid Assistant]], [[Access Before Analysis]].

**Used by:** [[Product]], [[Design]]. Features: [[Insight Cards]], [[Board Simulation Room]], [[Export Query]].
