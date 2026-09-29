---
publish: "true"
created: 2026-09-28
modified: 2026-09-29T11:18:58.183Z
published: 2026-09-29T11:18:58.183Z
up:
  - "[[mission-vision]]"
related:
collections:
---

# Design

**Built on:** [[See the Evidence]], [[Human Authority]]

Governance data is complex: policies, decisions, risks and agreements scattered across documents and systems. Quantum State treats that material as its own relational graph, where each node is a piece of governance data that can be traced, analyzed and remembered, and each connection strengthens what the graph can tell a reader about how one thing relates to another. AI's part in this isn't limited to answering questions; it reasons about how the data links together, how it's presented, and how it becomes a forward-looking decision the board can act on.

Design starts from one person's path through this graph, not from a feature list: an independent director moving from scattered company material to something the board can discuss. That path is drawn as an app map, and every other design decision traces back to a stage in it.

## What an app map is

An app map is a product model drawn as a connected flow: screens, and the actions that move a user between them. It shows what the user sees, what they can do, what they put in, what the system gives back, and how the state of the experience changes.

![[x/Images/App Maps/QS-app-map-exemplar.png]]

The current app map is built from a schema, so changing a screen, an action or a state costs a prompt rather than a redraw. It runs as two rows: the main app moves left to right across seven sections, and AI Chat sits on its own row below, with no connector joining the two — drawn as a separate app, reachable from any screen that offers it.

## Morgan, the first user

![[x/Images/User Persona Design/leader-persona-card.png|372]]

Morgan Vale is the proto-persona the app map is built around: a former CFO who now serves as an independent board director and committee chair in a complex, regulated organization. His job is to help the board judge direction, performance, risk and stewardship without taking over management's work.

Three things shape what he needs from a tool:

- **He investigates selectively.** He can't know every fact, so he goes deep where a matter is material, uncertain, or beyond what the board currently understands.
- **His work comes in cycles, with interruptions.** It follows board and committee meetings, but a change in conditions can reopen a matter at any time.
- **He doesn't decide alone.** He questions, advises and votes. The board or a committee decides together, and management carries out the decision.

Morgan is a hypothesis, built from role research rather than director interviews. Quantum State plans to accommodate more personas as the product grows, but only Morgan's journey is designed and mapped today.

## The journey

The app map runs left to right in seven stages, with AI Chat as a separate flow reachable from any screen that offers it.

| Stage | What Morgan does | What AI does | Feature |
| --- | --- | --- | --- |
| 1. Bring in governance material | Uploads files, connects live tools or points to a local folder, and sets who owns and can use each source | Starts building the Governance Vault | [[Governance Vault]] |
| 2. Make the material usable | Watches the build, or carries on while it finishes | Reads the sources and maps how they connect | [[Governance Vault]] |
| 3. Find the important territory | Filters and searches the Governance Landscape graph | Shows the graph and an overview | [[Governance Landscape]] |
| 4. Understand the evidence | Opens a node, reads its insights, checks the source passage | Summarizes the node and answers questions about it | [[Node Details Panel]], [[Insight Cards]], [[Document Viewer]] |
| 5. Gather what matters around one question | Creates an Investigation, names its focus, adds or removes insights | Suggests focuses and writes the Analysis | [[Investigation]] |
| 6. Test what could change | Sets up a scenario in the Board Simulation Room and reviews what emerged | Runs several agents on the scenario and records where they agree and disagree | [[Board Simulation Room]] |
| 7. Prepare the board discussion | Chooses scope and detail, reviews the draft, exports | Drafts the board material with its evidence and uncertainty | [[Export Investigation]] |

![[x/Images/Wiki/morgans-journey-infographic.png]]

```button
name View the App Map
type link
action https://www.figma.com/board/WITVErwq2RH0fhCbBqVAJs
width 42
align middle center
color blue
```

Each stage exists because the one before it has to be trusted first: a source needs an owner before AI reads it, evidence needs a source before Morgan builds an Investigation on it, and the board sees only what survives every earlier stage. [[AI Chat]] breaks this order on purpose: it sits outside the sequence, carries the context of whatever screen opens it, and can answer a question at any stage — but nothing it suggests changes an Analysis until Morgan accepts it.

## What the map doesn't show

The map covers one run through the journey, from material to export. It leaves out on purpose:

- **Other board members.** The journey is Morgan's alone; sharing the export happens outside Quantum State.
- **Looking after sources after setup:** adding more, revoking access, re-syncing a live tool.
- **Failure states:** a tool that won't connect, a source AI can't read, a search with no results, a simulation that stops partway, an export that fails.
- **An Analysis going stale** when its evidence changes, and a way to see an earlier version of it.

These gaps matter most against the product's promise to be continuous. The map shows a single pass; a board's work repeats and interrupts itself.

[[Export Investigation|Board-ready export]] is specified further than the rest of the map: the level of detail is chosen, the draft is reviewed, and evidence, uncertainty, freshness and version identity are all kept through to the export.

## Tradeoffs

Several parts of the design are options rather than settled choices:

- **AI Chat's shape.** A dedicated chat, a compact bar, or a side panel inside the Investigation — entry points for all three exist today, and whether all three are needed stays open.
- **One graph or two.** A central graph for finding a way through all source material, and a separate graph per Investigation for curating one question, are both present; whether that split is the right one isn't tested.
- **Source intake.** Adding files and connecting systems could stay one flow, as drawn, or split into separate setup steps.

None of this resolves by picking whichever option looks cleanest on a board. Each carries a cost: more entry points for AI Chat mean more places to keep consistent; two graphs mean two things to keep in sync; one intake flow is simpler to build but folds together two different kinds of trust decision — a file Morgan owns outright, and a tool the company already uses.

## Known and unknown

- Morgan's proto-persona and the seven-stage journey are drawn from role research, not from interviews with directors. Whether directors recognize this journey, and whether they'd use a tool directly or only read its output in board papers, is untested.
- The Board Simulation Room is meant to open only once an Investigation has insights and a generated Analysis, but the map draws [[Board Simulation Room|opening it]] as always available.
- Whether an Investigation is temporary or kept, and who owns it once created, isn't settled.
- Whether a board's decision comes back into Quantum State after export isn't drawn; the map stops at export.

## Still open

- What is the smallest version of Morgan's experience that still counts as the product: scan, investigation, cited claim, contradiction, human challenge, export?
- What can AI Chat see at each entry point, and how does a suggested change to the Analysis keep an earlier version around?
- When can the Board Simulation Room actually open, and should the map show that condition instead of leaving it always available?

## Sources

- [App map board (Figma)](https://www.figma.com/board/WITVErwq2RH0fhCbBqVAJs)
