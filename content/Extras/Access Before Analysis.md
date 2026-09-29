---
publish: "true"
created: 2026-09-29
modified: 2026-09-29T16:14:19.958Z
published: 2026-09-29T16:14:19.958Z
up:
  - "[[Design]]"
related:
collections:
---

# Access Before Analysis

Who owns a source and who may see it is settled before AI reads anything. Access is part of setup, not something added once the analysis exists. A design principle under [[Data Sovereignty]] and [[Human Authority]].

In the [[Governance Vault]], every source gets an owner and a list of permitted users on `Source access`, and `Confirm setup` shows each source as ready, or names what it still needs, before the build begins. Connect the dots starts only after that.

This rules out AI reading everything a user can technically open and sorting out permissions afterward, the pattern that leads general-purpose assistants to surface board minutes to people who shouldn't see them.

**Used by:** [[Design]], [[Tech]]. Features: [[Governance Vault]].
