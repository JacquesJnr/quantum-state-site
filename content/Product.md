---
publish: "true"
created: 2026-09-28
modified: 2026-10-06T09:49:53.811Z
published: 2026-10-06T09:49:53.811Z
up:
  - "[[mission-vision]]"
related:
collections:
---

**Built on:** [[Human Authority]], with [[See the Evidence]].

Quantum State is a governance-intelligence product for boards. It brings a company's scattered governance material into one place, uses AI to read it and map how it connects, and helps a director carry one question from that material to something the board can discuss. AI reads, connects, analyzes and proposes; people validate, approve, accept risk and decide.

The product is designed around one person and one piece of work: an independent director working through a matter ahead of a board discussion. That journey is drawn in full as an app map, and each section below points back to a stage in it.

![[x/Images/App Maps/QS-app-map-exemplar.png|App map section, Understand the evidence. From the Node Details Panel (source information, governance insight card, related section), a director selects an insight card to open the Insight Modal (insight details, content and confidence score, actions toolbar), then creates an Investigation or adds the insight to an existing one through the Investigation Chooser. Opening the source document leads to the Document Viewer, where selecting a passage highlights the source the insight came from. Asking about the node starts an AI response from the node's sources]]

```button
name View the App Map
type link
action https://www.figma.com/board/WITVErwq2RH0fhCbBqVAJs
width 40
align middle center
color blue
```

## The problem it addresses

Board material arrives in pieces: finance packs, audit reports, risk registers, policies, minutes, strategy papers. Each lives in its own tool or folder, and each is usually written by the people the board is meant to oversee. The same people often decide what reaches the board and what doesn't. A director has limited time, cannot read everything, and has to decide where to look closely.

Most board tools start from the pack. They help prepare, read, summarize and minute the papers for the next meeting. Quantum State starts from the evidence underneath the pack, and keeps a finding joined to that evidence after the meeting ends.

## How it works

Quantum State works in three phases, with a contextual [[AI Chat]] available throughout:

1. **Building the Governance State:** bringing material in and turning it into a graph.
2. **Navigating the Brain:** finding what matters and checking the evidence behind it.
3. **Preparing Queries and board material:** narrowing to one question, testing it, and exporting the result.

![[x/Images/Wiki/QS Diagram - How it works.png|How it works: three phases in sequence. 1 Building the Governance State (Governance Vault, Governance Brain). 2 Navigating the Brain (Node Details Panel, Insight Cards, Document Viewer). 3 Preparing Queries and board material (Query, Board Simulation Room, Export Query). AI Chat runs alongside every stage]]

![[x/Images/Wiki/morgans-journey-infographic.png|Morgan's journey through Quantum State, from many documents to one board paper, in seven steps: 1 bring in governance material; 2 make the material usable; 3 find the important territory; 4 understand the evidence; 5 gather what matters around one question; 6 test what could change; 7 prepare the board discussion. AI Chat is available at any stage. AI surfaces, analyzes and proposes; Morgan validates and decides]]

### Building the Governance State

- **[[Governance Vault]]:** the central repository of a company's governance data. It gathers material as uploaded files, connected tools or a local folder. Each source gets an owner and a list of who may use it before AI reads anything; AI then records the documents, the claims inside them, and how they relate.
- **[[Governance Brain]]:** the Vault shown as a graph, which is where the name comes from. Policies, decisions, reports and risks are nodes, called _quanta_, and their relationships are lines. A matter's weight often shows in its connections before it shows in any single document.

### Navigating the Brain

- **[[Node Details Panel]]:** opens any quantum to show its source information, a summary of what it holds, and how it relates to other nodes in the Brain.
- **[[Insight Cards]]:** explain what a quantum means within the wider Brain. Each insight carries a confidence score and a link back to the passage it rests on.
- **[[Document Viewer]]:** shows the document or data behind a quantum and its insights, with the relevant passage highlighted.

### Preparing Queries and board material

- **[[Query]]:** gathers insights around one board question. AI suggests a focus and drafts the Analysis; the director decides what belongs. A Query is a reusable working set: it groups quanta in the director's own way, so focused context doesn't mean navigating the whole Brain each time.
- **[[Board Simulation Room]]:** runs several AI agents through a scenario, and shows where they agree and disagree.
- **[[Export Query]]:** drafts board material from the Query, with sources, confidence and uncertainty kept beside each claim. The director sets the level of detail and exports it for the rest of the board.

**[[AI Chat]]** takes the context of the screen it opens from. Nothing it suggests changes an Analysis until the director accepts it.

## What makes it AI-native

AI-native describes how the product is built, not a set of AI features stitched onto a board portal. Ingestion, classification, relationship mapping, contradiction detection, confidence scoring and synthesis share one foundation and one body of evidence, together with its sources, permissions and review history. More technical autonomy in that foundation does not mean more governance authority.

## Where AI stops

Human authority is the product's first principle: AI assists at every stage, and holds the board's authority at none of them.

| AI may                                     | People must                                     |
| ------------------------------------------ | ----------------------------------------------- |
| Read and classify sources                  | Decide which sources come in, and who sees them |
| Map how evidence connects                  | Judge which matters deserve attention           |
| Summarize, compare and flag contradictions | Validate or reject a finding                    |
| Suggest a focus and draft an Analysis      | Decide what a Query contains                    |
| Run agents through a scenario              | Weigh the outcomes and accept the risk          |
| Draft board material                       | Approve what the board sees, and decide         |

This line matches where governance guidance is heading. OECD principles keep informed judgment and risk oversight with the board, and NACD guidance treats AI as a matter of director competence and management accountability, not delegation. A 2025 DFSA survey of DIFC-regulated firms found AI adoption running ahead of governance structure. Oversight of AI is becoming an ordinary part of the board's job, not a transfer of the board's authority to AI or to one director.

## Financial data as board context

A board's decisions come down to time and money, so the board view needs some record of a company's finances. How much depends on what a company is willing to connect: historical statements, regular exports, or live accounting and banking data. Each level shows something and leaves something out. An accounting connection brings in actuals but usually not the budget; bank data alone shows cash movement, not budget variance or profit. The levels, what each lets Quantum State show, and what each costs to build are covered in [[Tech]].

![[x/Images/Wiki/QS Spectrum - Financial data.png|How much financial data connects, five levels of access: 1 no financial data; 2 historical approved records; 3 regular finance-approved exports; 4 live read-only accounting or ERP; 5 live bank-information APIs. Moving right, both what Quantum State can show and the data moved increase. Further right is not always better]]

## What it is not

- **A board portal.** Portals distribute the papers; Quantum State works on the thinking behind them, meaning Queries, findings and the evidence under them. It exports to the tools a board already uses for packs and meetings instead of replacing them. As the design moves toward a space the whole board shares, keeping that line clear is an open question. See [[Design#Where the design is heading: a space for the whole board|Design]].
- **A GRC system or task tracker.** It reads governance records; it does not replace the systems of record that manage them.
- **A dashboard wall.** It narrows attention to a few matters and the evidence behind them.
- **An autonomous decision-maker.** See [Where AI stops](#where-ai-stops).

## Form factor: an open decision

What a director actually opens, whether a browser tab, an installed app or a tablet, is not yet decided. It depends on architecture that is still unknown, and it is a decision to make with engineers rather than ahead of them.

Two choices sit underneath it, and they are independent:

- **The client:** what the director uses day to day.
- **The deployment:** where the data and the AI run, from a shared cloud to the customer's own building. The deployment levels are covered in [[Tech]].

Any client can pair with most deployments. A web app served from a machine in the customer's building keeps the data just as local as an installed app does, and an installed app can still send everything to a cloud. "Web app" does not mean "data in someone else's cloud".

| Client | What it looks like | What favors it | What counts against it |
| --- | --- | --- | --- |
| **Web app** | Opened at an address, in a browser | Nothing to install; familiar from existing board tools; the [[Governance Brain]] graph renders well in a browser | Pointing to a local folder, one of the ways material enters the [[Governance Vault]], is awkward from a browser |
| **Desktop app** | Installed on the director's computer | Local-first; local folders are natural sources; company documents stay on the machine | Company IT has to approve and support the install; sharing with the rest of the board is harder |
| **Web app with a local connector** | A browser interface, plus a small helper app that watches chosen folders and feeds them in | Keeps the ease of the browser and still reaches local folders | Two pieces to install, update and support |
| **Appliance with a web interface** | A machine on site that serves the app to the company network | Pairs with on-site deployment: the data, the AI and the interface all stay in the building | Hardware at every site, and the jump in cost and support that comes with it |
| **Tablet companion** | A second client for reading exports and browsing the Brain away from a desk | Suits reading and reviewing between meetings | A second client to build; the work inside a [[Query]] may not suit a small screen |
| **Inside existing tools** | A plugin for a board portal, Teams or Outlook | Meets directors in tools they already use; the product already exports into board tools | Gives up the Governance Brain as a place of its own |

The choice also depends on who buys and who uses the product. A company that buys it for its board, with its own IT team installing it, points toward a web app on the company's infrastructure. An independent director who brings it to several boards points toward something the director holds, with a separate Vault for each company.

## Tradeoffs

A Query distills. The Governance Vault can hold a very large body of material, and a Query narrows it into refined context around one board question: small enough to read, check and argue with, and traceable to the passages it rests on. The tradeoff is that the director chooses what to look into. A full-pack summary makes that choice on the director's behalf and touches every topic lightly; a Query goes deep on the matters the director picks, and the broad view comes from the [[Governance Brain]]. Sources work the same way: setting an owner and permitted users before AI reads anything settles access up front, a deliberate step that a "connect everything" tool leaves out.

The bigger tradeoff sits in positioning. Diligent and Board Intelligence already advertise cited preparation questions, pack critique, outside perspectives, minutes and human review, so citations, challenge, human review and "AI-native" don't set Quantum State apart on their own. The candidate difference is how a finding lives _between_ meetings: one interpretation stays joined to changing evidence, contradictions, review state and the decision that follows, instead of resetting with each new pack. Nothing public shows either incumbent doing this, but a product page cannot prove absence, so the difference is a claim to test against their tools directly. How Quantum State compares with board-software vendors and with companies solving the same problems is covered in [[Business#Competitive landscape|Business]].

Two further costs run underneath the design. The product is built around one persona; other board members, management and reviewers are not yet designed for. And the more financial data a company connects, the more Quantum State can show, and the more it must be trusted with.

## What is known and unknown

**Known**

- The journey from material to export is mapped screen by screen in the [app map](https://www.figma.com/board/WITVErwq2RH0fhCbBqVAJs).
- Leading board-tool vendors already publish AI features for preparing, reading, questioning and recording meeting material.
- OECD, NACD and DFSA guidance treats AI oversight as part of the board's ordinary job, not a delegation of its authority.

**Unknown**

- Whether directors recognize this journey. It is built from role research, not from interviews with practicing directors.
- Whether incumbents can already keep a finding joined to changing evidence between meetings, once tested directly.
- What "simulation" means in Quantum State: comparing criteria and options, several AI agents researching in parallel, or a scenario with agent, model and scope controls. None has been chosen.

## Still open

- What visible behavior makes "continuous" and "evidence-grounded" honest claims? A first demonstration needs to show source changes, contradictions, reviewer actions and decision history.
- Can incumbents already do the candidate difference? Running the same case through Diligent, Board Intelligence and Nasdaq Boardvantage would show whether that gap holds.
- What form does Quantum State take for the director: web app, desktop app, a combination, or something else? See [Form factor: an open decision](#form-factor-an-open-decision).
- An independent director often serves on more than one board. Is that one Quantum State holding a separate Vault per company, or one install per company?
- Does a board decision come back into Quantum State? The journey ends at export; nothing yet records what the board decided, or feeds it into the next Query.

## Sources

- [QS App Map 2.0](https://www.figma.com/board/WITVErwq2RH0fhCbBqVAJs): the journey this article follows
- [Diligent Boards](https://www.diligent.com/products/boards) and [AI for Diligent Boards](https://www.diligent.com/features/boards/boards-ai): advertised AI board-prep, minutes and review features
- [Board Intelligence products](https://www.boardintelligence.com/products) and [Board Intelligence AI/IQ](https://www.boardintelligence.com/ai): advertised pack critique, outside perspectives and drafting
- [OECD Principles of Corporate Governance, 2023](https://www.oecd.org/en/publications/g20-oecd-principles-of-corporate-governance-2023_ed750b30-en/full-report/component-8.html): board duties and informed judgment
- [NACD, Implementing AI Governance, 2025](https://www.nacdonline.org/all-governance/governance-resources/governance-research/director-faqs-and-essentials/implementing-ai-governance/): AI oversight as director competence and management accountability
- [DFSA AI survey 2025](https://www.dfsa.ae/news/new-dfsa-ai-survey-generative-ai-adoption-has-nearly-tripled-within-difc-last-12-months-governance-continues-develop): AI adoption and governance gaps among DIFC-authorized firms
- [Fathom, budget import](https://support.fathomhq.com/en/articles/2309519-import-use-budgets-in-fathom): why an accounting connection alone doesn't give budget variance
