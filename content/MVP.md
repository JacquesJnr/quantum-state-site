---
publish: "true"
title: MVP
created: 2026-10-06
modified: 2026-10-06T09:44:47.727Z
published: 2026-10-06T09:44:47.727Z
---

**Built on:** [[Product]], with [[Tech]] and [[Business]].

## What Prototyping Needs

**A validated app map / product flow**\
The app map is described as the core model for the experience, and it should be checked against how a board member or independent director would actually use the product. ([Product](https://jacquesjnr.github.io/quantum-state-site/product))

**A clear target user and use case**\
The current direction seems to focus on an independent board auditor/director working through a governance question before a board discussion. The product also appears aimed more at the regulated end of the market, where traceable evidence and defensible exports matter. ([Product](https://jacquesjnr.github.io/quantum-state-site/product), [Business](https://jacquesjnr.github.io/quantum-state-site/business))

**A decision on deployment / sovereignty**\
We need to choose whether the prototype is for on-prem/private cloud, UAE sovereign hosting, or a shared hosted model. That decision affects architecture, compliance, and cost. ([Tech](https://jacquesjnr.github.io/quantum-state-site/tech))

**Enough technical architecture to build the first workflow**\
At minimum, the prototype needs a way to ingest governance material into a graph, navigate evidence, support AI/querying, and export board-ready output. ([Product](https://jacquesjnr.github.io/quantum-state-site/product))

**Representative governance data**\
We’ll need sample board packs, policies, controls, audit/compliance artifacts, and linked documents so the evidence-first workflow can be tested properly.

**A defined compliance/security posture**\
Especially if we’re targeting regulated users, the prototype needs clear boundaries around data residency, access control, auditability, and operational security. ([Business](https://jacquesjnr.github.io/quantum-state-site/business))

**Enough tooling decisions to support the AI-native workflow**\
The tech notes say the stack is still under evaluation, so we need to choose tools/model approach based on the job, sovereignty, integration needs, and compliance constraints. ([Tech](https://jacquesjnr.github.io/quantum-state-site/tech))

## What a prototype can prove, and what it can't

An MVP tests the riskiest assumption first. For Quantum State that assumption is not technical. Graphs, retrieval and summaries are known techniques.

**The open question is whether governance material, read and connected by AI, gives a director something worth their time.**

That question only has an honest answer on real data. Synthetic board packs carry the patterns their author already expects, so they cannot surprise anyone. Real packs are long, non-chronological, inconsistent and incomplete, and those are exactly the conditions the product has to handle.

The prototype can show:

- whether the workflow in the app map makes sense to a director using it on familiar material
- whether AI summaries of a 200–400 page quarterly pack are meaningful, not merely shorter
- whether looking back across several packs surfaces anything a director would act on

It cannot show:

- whether the product is secure, scalable or compliant
- what it costs to run
- whether a buyer would pay for it

Those belong to the engineered product that follows.

## The first workflow

The prototype follows the [[Product#How it works|three phases]] of the product, cut down to their core:

1. **Bring material in.** Board packs and policies are uploaded into a [[Governance Vault]].
2. **Build the Brain.** AI reads each document, extracts claims and maps how they relate, producing the [[Governance Brain]].
3. **Look closer.** A director opens a quantum in the [[Node Details Panel]], reads its [[Insight Cards]] with their confidence scores, and checks the highlighted passage in the [[Document Viewer]].
4. **Gather a question.** Insights collect into a [[Query]] around one focus, showing where the evidence agrees, where it conflicts, and what remains unknown.
5. **Export.** The Query becomes board-ready material through [[Export Query]].

![[x/Images/Wiki/QS Diagram - How it works.png|How it works: three phases in sequence. 1 Building the Governance State (Governance Vault, Governance Brain). 2 Navigating the Brain (Node Details Panel, Insight Cards, Document Viewer). 3 Preparing Queries and board material (Query, Board Simulation Room, Export Query). AI Chat runs alongside every stage]]

The [[Board Simulation Room]] sits outside this first cut. It depends on everything above working first.

### What the prototype has to show

A working prototype has to show five main capabilities:

> [!info] Ingest fragmented governance material and build a unified state
> It should pull together scattered finance, audit, risk, compliance, strategy, policy, and governance documents into one place.

> [!info] Map relationships across the data
> The prototype should turn those materials into a connected structure where policies, decisions, risks, reports, and other items are linked.

> [!info] Let users navigate and inspect evidence
> A director should be able to explore the Brain graph, follow connections, see what matters, and open the source passages behind claims.

> [!info] Support plain-language questioning and AI analysis
> The system should let users ask questions in natural language, with AI reading, connecting, and analyzing the relevant material.

> [!info] Turn a question into board-ready output
> The prototype should show the end-to-end workflow from asking a question, testing it against the evidence, and exporting something usable for board discussion.

In short: ingest evidence, connect it, make it explorable, analyze it with AI, and package it for board use. The full list is in [[Prototype Capabilities]].

## The data

The prototype runs on one to three years of board material from a single partner company, anonymised before any AI tool reads it. The material is grouped the way a board receives it: board, audit committee, remuneration and nominations committee, financials, internal audit, and compliance. Policy documents such as compliance manuals and remuneration policies come with it. Without them there is nothing to check a claim against.

The full list, and the steps from download to consent, are in [[Prototype Data Checklist]].

```mermaid
flowchart LR
  A[Download board material] --> B[Anonymise]
  B --> C[Owner consent]
  C --> D[Build prototype]
  D --> E[Review with directors]
  E --> F[Broaden to other companies]
```

Anonymisation removes names and keeps numbers. That keeps the analysis meaningful but has a limit: a budget figure means less once nobody can tell whose budget it is. Consistent placeholders, where the same person or unit always gets the same label, keep threads traceable across packs.

## Where things stand

The prototype needs the same seven things any Quantum State build needs. For the prototype, most have a working answer. For the product, most stay open.

| Prerequisite                           | For the prototype                                                                                                                                                             | For the product                                                                                                                                                           |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A validated app map                    | [App Map 2.0](https://www.figma.com/board/WITVErwq2RH0fhCbBqVAJs) is frozen as the build reference. Changes raised during the build go to the next version, not the prototype | The next version carries AI retention rules per source, ingestion-time expectations and a full-width, collapsible overview card. Not yet tested with practicing directors |
| A target user and use case             | A sitting board director reviewing their own company's packs                                                                                                                  | Governance teams and board directors, with the concept design built around [[Design\|one independent director]]                                                           |
| A deployment and sovereignty decision  | Cloud AI tools, on anonymised data, with the owner's consent                                                                                                                  | Open: air-gapped, on-site, hybrid or cloud. See [[Tech#Where Quantum State could sit on the sovereignty spectrum\|Tech]]                                                  |
| An architecture for the first workflow | Enough to ingest, navigate, query and export, built feature by feature with separate AI agents from a product requirements document                                           | Open, including relational versus graph storage. See [[Tech#What the app map asks of the technology\|Tech]]                                                               |
| Representative governance data         | One partner company's anonymised board material                                                                                                                               | Many companies' material, in any format and order                                                                                                                         |
| A compliance and security posture      | Consent and anonymisation only                                                                                                                                                | Open: which standards to target, such as ISO/IEC 42001                                                                                                                    |
| Tooling for an AI-native workflow      | General AI coding assistants                                                                                                                                                  | Chosen per job against the seven-point test in [[Tech#Built while the field moves\|Tech]]                                                                                 |

Estimates put basic navigation at about a week, and a prototype with styling and a working graph at two and a half weeks to a month.

## Trade-offs

**Real data against synthetic data.** Real material is the only honest test, and it brings consent, anonymisation and privacy risk with it. Synthetic material is safe and proves little.

**Speed against engineering.** AI-coding a prototype is fast and cheap, and the result has no security model, architecture or protocols worth keeping. That is acceptable only because the prototype is handed to engineers rather than grown into the product. Speed also depends on the app map holding still: a map that changes mid-build means rework, which is why the prototype builds from a frozen version.

**Cloud AI against sovereignty.** The prototype sends anonymised board material to cloud language models. The product exists to keep governance data under the customer's control. The prototype sets that rule aside, for one company with its consent, so the product can later be built to keep it. That exception does not carry over to live data.

**Depth against breadth.** One company's material allows a deep test against a director who knows it well. What holds for one company may not hold for another.

**The graph against the touchscreen.** The Governance Brain is a graph, and graphs are hard to use with a finger. Directors often read on tablets and phones, which makes a list or table view a serious alternative.

## After the prototype

Once the prototype has been reviewed, it can widen to other companies, such as startups, on the same basis of consent and anonymisation. Before any real or live data is used, the work changes character:

- engineers join, and the build-or-buy question gets a real answer
- compliance standards and a deployment model are chosen
- Quantum State becomes a software project with a roadmap, change requests and a proper development life cycle

## Open questions

- **Data retention.** How can a data owner be shown that nothing they share is retained or identifiable? The answer decides whether the product can be sold at all, not just whether the prototype can run.
- **Ingestion time.** What can be promised? A benchmark such as "100 files in 45 seconds" is the form an answer needs to take. Is the product useful before ingestion finishes?
- **Base categories.** Should finance, risk, compliance, and legal and policy be fixed categories from the start, or should the AI group material by itself?
- **The starting screen.** Does every user need to begin at the Governance Brain?
- **Success.** What would a director need to see to call the prototype worth continuing: one anomaly they had missed, a faster read of the pack, or something else?

## Sources

- [QS App Map 2.0](https://www.figma.com/board/WITVErwq2RH0fhCbBqVAJs): the workflow the prototype builds
- [[Product]]: the product's phases, principles and open questions
- [[Tech]]: deployment, models, sovereignty and tool selection
- [[Business]]: the regulated-to-unregulated spectrum and the first customer
- [[Prototype Capabilities]]: the full list of what the prototype has to show
- [[Prototype Data Checklist]]: the material and the steps the prototype needs
- [ISO/IEC 42001](https://www.iso.org/standard/81230.html): the management-system standard for AI
