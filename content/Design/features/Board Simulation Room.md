---
publish: "true"
created: 2026-09-29
modified: 2026-09-29T11:18:55.341Z
published: 2026-09-29T11:18:55.341Z
up:
  - "[[Design]]"
related:
collections:
---

# Board Simulation Room

**Built on:** [[Human Authority]], [[See the Evidence]]

The Board Simulation Room runs several AI agents in parallel against one [[Investigation]], each working from conflicting and contrasting views, to test what could change. It follows the Investigation because a scenario is only as good as the evidence gathered for it — the Room doesn't gather evidence, it tests the evidence already in hand.

![[x/Images/App Maps/Mo-28-Sep QS App Map 2.0 S6 Test.png]]

## What it does for Morgan

From the Investigation, opening the Room leads first to [Scenario Setup](https://www.figma.com/board/WITVErwq2RH0fhCbBqVAJs?node-id=13-4323), where Morgan sets the number of agents, the AI model, the scope of the run — the entire analysis, selected sections, or custom input — and any custom context or commands for the agents. Running the scenario opens the [Board Simulation Room](https://www.figma.com/board/WITVErwq2RH0fhCbBqVAJs?node-id=13-4324) itself, where the agents research the Investigation at once and their statuses and elapsed time show in a toolbar alongside the chat stream. Morgan can edit the scenario details and return to setup at any point.

Reviewing the run opens [Artifact Review](https://www.figma.com/board/WITVErwq2RH0fhCbBqVAJs?node-id=13-4325). Rather than handing Morgan ten separate agent conversations to read, the system compiles and deduplicates the parallel work into a small number of things that emerged. Opening one shows where the agents agreed, where they disagreed, their assumptions and their evidence, with each agent's original reasoning one level down for anyone who wants to check it. Morgan can save a version of the artifact before preparing it for [[Export Investigation]].

## Conditions to use it

- An Investigation with insights in its graph and a generated Analysis is the intended entry condition, though the current design draws `Open Board Simulation Room` as always available rather than gated on it.
- Running a scenario needs at least the number of agents and a model chosen; custom context and scope are optional.
- Saving a version depends on the run having produced an artifact worth keeping.

## Still open

- Whether the Room should stay open at all times or require an Investigation with insights and an Analysis first is unresolved.
- What the Room reveals that the Analysis alone cannot isn't settled — financial strategy, policy change and general strategy are candidates, not decisions.
- What happens to a simulation that fails or is stopped partway isn't specified.
