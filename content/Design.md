---
publish: "true"
created: 2026-09-28
modified: 2026-09-30T09:36:58.482Z
published: 2026-09-30T09:36:58.482Z
up:
  - "[[mission-vision]]"
related:
collections:
---

**Built on:** [[See the Evidence]], [[Human Authority]]

Governance data is complex: policies, decisions, risks and agreements scattered across documents and systems. Quantum State treats that material as its own relational graph - see [[Governance Brain]] - where each node is a piece of governance data that can be traced, analyzed and remembered, and each connection strengthens what the graph can tell a reader about how one thing relates to another.

AI's part in this isn't limited to answering questions; it reasons about how the data links together, how it's presented, and how it becomes a forward-looking decision the board can act on.

Design starts from one person's path through this graph, not from a feature list: an independent director moving from scattered company material to something the board can discuss. That path is drawn as an app map, and every other design decision traces back to a stage in it.

## Design principles

The first principles, [[See the Evidence]] and [[Human Authority]], break down into design principles that each screen is held to:

- **[[Present Without Bias]]:** governance data is shown as the evidence has it, never arranged to lean the director toward a conclusion. Reflected in the [[Governance Brain]].
- **[[Traceable to Quanta]]:** everything AI generates traces back to the quanta and source passages it came from. Reflected in [[Insight Cards]], the [[Document Viewer]] and AI summaries.
- **[[A Candid Assistant]]:** AI says what the evidence shows even when it's unwelcome, and shows disagreement openly. Reflected in [[AI Chat]], the [[Board Simulation Room]] and suggested insights.
- **[[Show What Isn't Known]]:** gaps, staleness and uncertainty are shown beside the findings they qualify.
- **[[The Director Decides]]:** nothing AI suggests takes effect until the director accepts it.
- **[[Access Before Analysis]]:** who owns and may see a source is settled before AI reads it.
- **[[Say Which AI Said It]]:** every claim names the model behind it, and any handoff outside the customer's boundary is visible first. Not yet on the app map.
- **[[One Question at a Time]]:** depth comes from narrowing each [[Query]] to one board question.
- **[[Keep the Director Moving]]:** long AI work runs in the background, and progress is always visible.
- **[[Findings Outlive the Meeting]]:** a finding stays joined to its evidence and to the decision that followed. Not yet on the app map.

![[x/Images/Wiki/QS Diagram - Principles.png]]

## What an app map is

An app map is a product model drawn as a connected flow: screens, and the actions that move a user between them. It shows what the user sees, what they can do, what they put in, what the system gives back, and how the state of the experience changes.

![[x/Images/App Maps/QS-app-map-exemplar.png]]

**NOTE:** App maps are drawn using a JSON schema within an agent skill - so making ammendments to it cost only one prompt to an LLM, not entire redraw.

## Morgan, the first user

![[x/Images/User Persona Design/leader-persona-card.png|372]]

Morgan Vale is the proto-persona the app map is built around: a former CFO who now serves as an independent board director and committee chair in a complex, regulated organization. His job is to help the board judge direction, performance, risk and stewardship without taking over management's work.

Four things shape what he needs from a tool:

- **He investigates selectively.** He can't know every fact, so he goes deep where a matter is material, uncertain, or beyond what the board currently understands.
- **His biases are his strength.** Allowing the **[[Governance Brain]]** to be filtered by domain - risk, legal, finance etc. - allows the board members to focus on whichever cluster of _quanta_ makes sense to them - likewise the inclusion of the AI chat allows user's to explore new areas of the control domain at their oen pace.
- **His work comes in cycles, with interruptions.** It follows board and committee meetings, but a change in conditions can reopen a matter at any time.
- **He doesn't decide alone.** He questions, advises and votes. The board or a committee decides together, and management carries out the decision.

Morgan is a hypothesis, built from role research rather than director interviews. Quantum State plans to accommodate more personas as the product grows, but only Morgan's journey is designed and mapped today.

## The journey

The app map runs left to right in seven stages, with AI Chat as a separate flow reachable from any screen that offers it.

| Stage                                      | What Morgan does                                                                                          | What AI does                                                                  | Feature                                                        |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------- |
| 1. Bring in governance material            | Uploads files, connects live tools or points to a local folder, and sets who owns and can use each source | Starts building the Governance Vault                                          | [[Governance Vault]]                                           |
| 2. Make the material usable                | Watches the build, or carries on while it finishes                                                        | Reads the sources and maps how they connect                                   | [[Governance Vault]]                                           |
| 3. Find the important territory            | Filters and searches the Governance Brain graph                                                           | Shows the whole graph or filtered clusters and an overview                    | [[Governance Brain]]                                           |
| 4. Understand the evidence                 | Opens a node, reads its insights, checks the source passage                                               | Summarizes the node and answers questions about it                            | [[Node Details Panel]], [[Insight Cards]], [[Document Viewer]] |
| 5. Gather what matters around one question | Creates a Query, names its focus, adds or removes insights                                                | Suggests focuses and writes the Analysis                                      | [[Query]]                                                      |
| 6. Test what could change                  | Sets up a scenario in the Board Simulation Room and reviews what emerged                                  | Runs several agents on the scenario and records where they agree and disagree | [[Board Simulation Room]]                                      |
| 7. Prepare the board discussion            | Chooses scope and detail, reviews the draft, exports                                                      | Drafts the board material with its evidence and uncertainty                   | [[Export Query]]                                               |

![[x/Images/Wiki/morgans-journey-infographic.png]]

```button
name View the App Map
type link
action https://www.figma.com/board/WITVErwq2RH0fhCbBqVAJs
width 45
align middle center
color blue
```

Each stage has to be trusted before the next: a source needs an owner before AI reads it, evidence needs a source before it goes into a Query, and the board sees only what survives every stage. [[AI Chat]] sits outside the sequence on purpose, carrying the context of whatever screen opens it; nothing it suggests changes an Analysis until Morgan accepts it.

## The screens

Rough designs, one screen per stage, in the wiki's visual language: only the item in focus is full black. They follow one fictional case, Meridian Group asking whether its finance-system go-live is ready, and are drafts for discussion.

**1. Bring in governance material.** Each source gets an owner before AI reads it. [[Governance Vault]]
![[x/Images/Wiki/QS Mid-fi 1 Add sources.png]]

**2. Make the material usable.** Connect the dots flags what it can't read; the Brain opens before it finishes. [[Governance Vault]]
![[x/Images/Wiki/QS Mid-fi 2 Connect the dots.png]]

**3. Find the important territory.** The whole graph, unfiltered, with suggested issues. [[Governance Brain]]
![[x/Images/Wiki/QS Mid-fi 3 Governance Brain.png]]

**4. Understand the evidence.** Insights carry confidence and source passages; a contradicting source sits alongside. [[Node Details Panel]], [[Insight Cards]], [[Document Viewer]]
![[x/Images/Wiki/QS Mid-fi 4 Understand the evidence.png]]

**5. Gather what matters around one question.** Agreement, conflict, assumptions and unknowns kept apart; AI suggests, the director decides. [[Query]]
![[x/Images/Wiki/QS Mid-fi 5 Query.png]]

**6. Test what could change.** Agents take positions; the result shows agreement, disagreement and gaps. [[Board Simulation Room]]
![[x/Images/Wiki/QS Mid-fi 6 Board Simulation Room.png]]

**7. Prepare the board discussion.** Source, confidence and freshness stay beside every claim. [[Export Query]]
![[x/Images/Wiki/QS Mid-fi 7 Export Query.png]]

**AI Chat.** Answers name their sources and model; nothing leaves for an outside model without consent. [[AI Chat]]
![[x/Images/Wiki/QS Mid-fi 8 AI Chat.png]]

## What the map doesn't show

The map covers one run through the journey, from material to export. It leaves out on purpose:

- **Other board members.** The journey is Morgan's alone; sharing the export happens outside Quantum State. See [Where the design is heading](#where-the-design-is-heading-a-space-for-the-whole-board).
- **Looking after sources after setup:** adding more, revoking access, re-syncing a live tool.
- **Failure states:** a tool that won't connect, a source AI can't read, a search with no results, a simulation that stops partway, an export that fails.
- **An Analysis going stale** when its evidence changes, and a way to see an earlier version of it.

These gaps matter most against the promise to be continuous: the map shows a single pass, while a board's work repeats and interrupts itself.

## Where the design is heading: a space for the whole board

Today's journey has one director and one partner, the AI. The design is heading toward a shared space where board members and the people around the board use the same [[Governance Brain]], share Queries and findings, and question each other's work, so understanding doesn't rest on one person's exchanges with AI.

Boards decide together. A platform used by one independent director stays a personal tool; it becomes something an organization can rely on only when the board and the roles around it take part. Only Morgan's journey is designed so far.

Nothing here is settled. It raises four questions:

- **How is this different from a board portal?** Portals already share board material, and Quantum State exports to them. One possible line: portals share the papers; Quantum State shares the thinking behind them, meaning Queries, findings and their evidence.
- **How does independent judgment survive a shared analysis?** If a whole board works from the same AI analysis, views may converge. Shared work may need to show who concluded what and keep differing views visible, the way the [[Board Simulation Room]] shows agents disagreeing.
- **Who is in the space?** Board members only, or management too? Management writes much of what the board reads, and one shared space changes that relationship.
- **What about directors on several boards?** Each board would need its own space, with its evidence kept apart.

## Tradeoffs

Several parts of the design are still options:

- **AI Chat's shape.** A dedicated chat, a compact bar and a side panel in the Query all exist; whether all three are needed is open.
- **One graph or two.** A central graph for all material and a separate graph per Query both exist; the split is untested.
- **Source intake.** Adding files and connecting systems could stay one flow, as drawn, or split into separate setup steps.

Each carries a cost: more chat entry points mean more to keep consistent, two graphs mean two things to keep in sync, and one intake flow folds together two kinds of trust decision, a file Morgan owns and a tool the company already uses.

## Known and unknown

- Whether directors recognize this journey, and whether they'd use the tool directly or only read its output in board papers, is untested.
- Whether a Query is temporary or kept, and who owns it once created, isn't settled.

## Still open

- What is the smallest version of Morgan's experience that still counts as the product: scan, query, cited claim, contradiction, human challenge, export?
- What can AI Chat see at each entry point, and how does a suggested change to the Analysis keep an earlier version around?
- When can the Board Simulation Room actually open, and should the map show that condition instead of leaving it always available?
- How do board decisions come back into Quantum State? When board material, or any board meeting, materially changes strategy, the app map offers no way to bring that back into the Vault except an upload. Is one upload path enough, leaving it to people to save the minutes into the Vault, or does the design need a dedicated way to record decisions? See [[Findings Outlive the Meeting]].

## Sources

- [App map board (Figma)](https://www.figma.com/board/WITVErwq2RH0fhCbBqVAJs)
