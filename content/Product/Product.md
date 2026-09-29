---
publish: "true"
created: 2026-09-28
modified: 2026-09-29T11:19:12.484Z
published: 2026-09-29T11:19:12.484Z
up:
  - "[[mission-vision]]"
related:
collections:
---

# Product

**Built on:** [[Human Authority]], with [[See the Evidence]].

Quantum State is a governance-intelligence product for boards. It brings a company's scattered governance material into one place, uses AI to read it and map how it connects, and helps a director carry one question from that material to something the board can discuss. AI reads, connects, analyzes and proposes; people validate, approve, accept risk and decide.

The product is designed around one person and one piece of work: an independent director working through a matter ahead of a board discussion. That journey is drawn in full as an app map, and each section below points back to a stage in it.

![[x/Images/App Maps/QS-app-map-exemplar.png]]

## The problem it addresses

Board material arrives in pieces: finance packs, audit reports, risk registers, policies, minutes, strategy papers. Each lives in its own tool or folder, and each is usually written by the people the board is meant to oversee. A director has limited time, cannot read everything, and has to decide where to look closely.

Most board tools start from the pack. They help prepare, read, summarize and minute the papers for the next meeting. Quantum State starts from the evidence underneath the pack, and keeps a finding joined to that evidence after the meeting ends.

## How it works

The journey moves through a small set of surfaces, each a stage in the app map:

- **[[Governance Vault]]** gathers material as uploaded files, connected tools or a local folder. Each source gets an owner and a list of who may use it before AI reads anything, and AI then records the documents, the claims inside them, and how they relate.
- **[[Governance Landscape]]** shows the vault as a graph: policies, decisions, reports and risks as nodes, their relationships as lines. A matter's weight often shows in its connections before it shows in any single document.
- Opening a node opens its **[[Node Details Panel]]** and **[[Insight Cards]]**, each insight carrying a confidence score and a link back to the source passage in the **[[Document Viewer]]**.
- An **[[Investigation]]** gathers insights around one board question. AI suggests a focus and drafts the Analysis; the director decides what belongs.
- The **[[Board Simulation Room]]** runs several AI agents through a scenario, and the result shows where they agree and disagree.
- **[[Export Investigation]]** drafts the board material with its sources, confidence and uncertainty kept beside each claim. The director sets the scope and detail and exports it into the board's existing tools.

**[[AI Chat]]** runs alongside every stage. It takes the context of the screen it opens from, and nothing it suggests changes an Analysis until the director accepts it.

![[x/Images/Wiki/morgans-journey-infographic.png]]

## Where AI stops

Human authority is the product's first principle: AI assists at every stage above, and never holds the board's authority at any of them.

| AI may | People must |
| --- | --- |
| Read and classify sources | Decide which sources come in, and who sees them |
| Map how evidence connects | Judge which matters deserve attention |
| Summarize, compare and flag contradictions | Validate or reject a finding |
| Suggest a focus and draft an Analysis | Decide what an Investigation contains |
| Run agents through a scenario | Weigh the outcomes and accept the risk |
| Draft board material | Approve what the board sees, and decide |

This line matches where governance guidance is heading rather than sitting apart from it. OECD principles keep informed judgment and risk oversight with the board, and NACD guidance treats AI as a matter for director competence and management accountability rather than delegation. A 2025 DFSA survey of DIFC-regulated firms found fast AI adoption running ahead of governance structure, which points the same way: oversight of AI is becoming an ordinary part of the board's job, not a transfer of the board's authority to AI or to one director.

## What makes it AI-native

AI-native describes how the product is built, not a set of AI features stitched onto a board portal. Ingestion, classification, relationship mapping, contradiction detection, confidence scoring and synthesis share one foundation and one body of evidence, together with its sources, permissions and review history. Higher technical autonomy in that foundation does not translate into higher governance authority; the human-authority line above still holds regardless of how much of the reading and connecting AI does.

## Financial data as board context

A board's decisions come down to time and money, so the board view needs some record of a company's finances. How much depends on what a company is willing to connect, and that ranges from historical statements through regular exports to live accounting and banking data. Each level shows something different and leaves something out: an accounting connection brings in actuals but usually not the budget, and bank data alone shows cash movement, not budget variance or profit. The levels, what each one lets Quantum State show, and what it costs to build are covered in [[Tech]].

## What it is not

- **A board portal.** Quantum State exports to the tools a board already uses for packs and meetings; it does not replace them.
- **A GRC system or task tracker.** It reads governance records; it does not hold or replace the systems of record that manage them.
- **A dashboard wall.** It narrows attention to a few matters and the evidence behind them, rather than surfacing everything at once.
- **An autonomous decision-maker.** See [Where AI stops](#where-ai-stops) above.

## Tradeoffs

Keeping every finding traceable to a passage, and narrowing each Investigation to one question, buys focus: analysis stays reviewable instead of sprawling across a whole pack. Permissioning sources before AI reads them settles access before anything gets analyzed. Those choices cost reach: a single Investigation moves slower than a full-pack summary, and a permission step in front of every source adds friction that a "connect everything" tool skips.

The bigger tradeoff sits in positioning. Diligent and Board Intelligence already advertise cited preparation questions, pack critique, outside perspectives, minutes and human review. The usual claims here are already taken: citations, challenge, human review and "AI-native" don't set Quantum State apart on their own. The candidate difference is how a finding lives _between_ meetings, with one interpretation staying joined to changing evidence, contradictions, review state and the decision that follows it, rather than resetting with each new pack. Nothing public shows either incumbent doing this today, but a public product page cannot prove its absence either, so the difference is a claim to test against their tools directly, not a settled fact.

Two further costs run underneath the whole design. The product is built around one persona, an independent director working a matter ahead of a board discussion; other board members, management and reviewers are not yet designed for. And the more financial data a company connects, the more Quantum State can show, and the more it must be trusted with.

## What is known and unknown

**Known**

- The journey from material to export is mapped screen by screen in the app map linked above.
- Leading board-tool vendors already publish AI features for preparing, reading, questioning and recording meeting material.
- Governance guidance from OECD, NACD and DFSA treats AI oversight as part of the board's ordinary job, not a delegation of its authority.

**Unknown**

- Whether directors recognize this journey. It is built from role research, not from interviews with practicing directors.
- Whether incumbents can already keep a finding joined to changing evidence between meetings, once tested directly rather than read off a marketing page.
- What "simulation" means in Quantum State specifically: comparing criteria and options, several AI agents researching in parallel, or a scenario with agent, model and scope controls. None of the three has been chosen.

## Still open

- What visible behavior makes "continuous" and "evidence-grounded" honest claims? A first demonstration needs to show source changes, contradictions, reviewer actions and decision history, not just cite the words.
- Can incumbents already do the candidate difference? Running the same case through Diligent, Board Intelligence and Nasdaq Boardvantage would show whether they can already track a changing cross-source finding, or whether that gap holds.
- Does a board decision come back into Quantum State? The journey above ends at export; nothing yet records what the board decided, or feeds it back into the next Investigation.

## Sources

- [Diligent Boards](https://www.diligent.com/products/boards) and [AI for Diligent Boards](https://www.diligent.com/features/boards/boards-ai) — advertised AI board-prep, minutes and review features
- [Board Intelligence products](https://www.boardintelligence.com/products) and [Board Intelligence AI/IQ](https://www.boardintelligence.com/ai) — advertised pack critique, outside perspectives and drafting
- [OECD Principles of Corporate Governance, 2023](https://www.oecd.org/en/publications/g20-oecd-principles-of-corporate-governance-2023_ed750b30-en/full-report/component-8.html) — board duties and informed judgment
- [NACD, Implementing AI Governance, 2025](https://www.nacdonline.org/all-governance/governance-resources/governance-research/director-faqs-and-essentials/implementing-ai-governance/) — AI oversight as director competence and management accountability
- [DFSA AI survey 2025](https://www.dfsa.ae/news/new-dfsa-ai-survey-generative-ai-adoption-has-nearly-tripled-within-difc-last-12-months-governance-continues-develop) — AI adoption and governance gaps among DIFC-authorized firms
- [Fathom, budget import](https://support.fathomhq.com/en/articles/2309519-import-use-budgets-in-fathom) — why an accounting connection alone doesn't give budget variance
