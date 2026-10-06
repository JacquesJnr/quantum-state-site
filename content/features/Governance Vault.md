---
publish: "true"
created: 2026-09-29
modified: 2026-10-06T09:44:47.728Z
published: 2026-10-06T09:44:47.728Z
up:
  - "[[Design]]"
related:
collections:
---

# Governance Vault

**Built on:** [[Data Sovereignty]], [[Human Authority]], [[Access Before Analysis]], [[Keep the Director Moving]]

The Governance Vault is where Morgan's governance material stops being scattered across files, folders and tools and becomes one AI-readable body of evidence. It is the first thing he builds, because nothing later in the journey — the graph, the insights, a Query — can be trusted if it isn't clear where the material came from or who is allowed to see it.

![[x/Images/App Maps/Mo-28-Sep QS App Map 2.0 S1 Bring in material.png|App map stage 1, Bring in material. Add sources (file upload or integrations list) leads, when the files are supported, to Source access, where an owner and permitted users are set for each source, then to Confirm setup, which checks each source is ready. Build my vault then creates the Governance Vault: AI reads each source, sorts it into categories and links related material. Unsupported files fail at the first step]]

## What it does for Morgan

Morgan brings material in on [Add sources](https://www.figma.com/board/WITVErwq2RH0fhCbBqVAJs?node-id=13-4286): files dropped or browsed for, and live tools the company already uses, connected in the same flow rather than as a separate step. On [Source access](https://www.figma.com/board/WITVErwq2RH0fhCbBqVAJs?node-id=13-4287) he sets an owner and permitted users for each source, before AI reads any of it. [Confirm setup](https://www.figma.com/board/WITVErwq2RH0fhCbBqVAJs?node-id=13-4288) shows each source as ready, or names what it still needs.

![[x/Images/App Maps/Mo-28-Sep QS App Map 2.0 S2 Make usable.png|App map stage 2, Connect the dots: processing shows each source's progress as AI reads it, with status per source (queued, reading, done, needs attention) and a map preview of categories and relationships forming. The director can continue into the vault while the rest updates in the background]]

Once he builds the vault, AI reads every source and sorts it into categories, mapping how the material connects. [Connect the dots](https://www.figma.com/board/WITVErwq2RH0fhCbBqVAJs?node-id=13-4292) shows each source as queued, reading, done, or needing attention, and Morgan doesn't have to wait for it to finish — he can carry on into [[Governance Brain]] while the rest completes in the background.

## Conditions to use it

- Nothing has to exist first. This is where the journey starts.
- A file that isn't a supported format fails in place, on `Add sources`, rather than blocking the rest of the setup.
- Every source needs an owner and permitted users recorded before Connect the dots begins.
- The vault keeps building after Morgan moves on; the Governance Brain can show a build still in progress.

## Still open

- Managing sources after setup — adding more, revoking access, re-syncing a live tool — isn't drawn yet.
- What happens when a live tool refuses the connection, or a source can't be read during the build, isn't specified.
