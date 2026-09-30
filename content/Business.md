---
publish: "true"
created: 2026-09-28
modified: 2026-09-29T17:39:53.331Z
published: 2026-09-29T17:39:53.331Z
up:
  - "[[mission-vision]]"
related:
collections:
---

# Business

**Built on:** [[Choose Who We Serve]], [[Compare Against the Problem]]

This article covers who Quantum State serves, what a customer buys, how it reaches a first customer, and how it compares with everyone solving the same problems, not only board software. None of these choices is made; they are options with their tradeoffs, for a sponsor and outside experts to weigh.

## Who it serves

Quantum State sits on a spectrum from regulated to unregulated entities, and a place on that spectrum has to be chosen. At one end is an international, regulated entity held to the highest standard: a bank or a DIFC firm, where governance data cannot be shown to leave the building and every deployment choice gets checked against that rule. At the other end is an unregulated, private SME, where the risk is lower and a shared, hosted service is an acceptable answer.

The product as designed points toward the regulated end: it is built around the independent board auditor, a reader who needs traceable evidence and a defensible export. Serving both ends would mean two cost bases, since a high-assurance deployment and a shared low-cost one are different products.

![[x/Images/Wiki/QS Spectrum - Who it serves.png]]

### What the spectrum changes

Where a customer sits changes more than the deployment: it shapes what data they can and will provide, who buys, and what the board expects. Likely patterns, not tested ones:

|                                    | Regulated end                                                    | Unregulated end                                                             |
| ---------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Data boundary**                  | In the building, or at most in the country                       | In the region, or per provider terms                                        |
| **Financial data it can provide**  | Audited statements, a mature ERP, formal budgets                 | Management accounts, often a cloud accounting tool; budgets may be informal |
| **Financial data it will connect** | Cautious: approved records or controlled exports                 | More open to live connections, with less to connect                         |
| **Who buys**                       | Company secretary or governance sponsor, with IT and risk review | The founder or owner directly                                               |
| **What the board expects**         | A defensible trail from every claim to its source                | Speed and clarity over formal evidence                                      |

### How much financial data a customer connects

A board's questions come down to time and money, so the question to ask each buyer is: _how willing are you to connect your company's financial data to an AI-powered tool?_ The answer is a spectrum of its own, and it sets what Quantum State can show.

![[x/Images/Wiki/QS Spectrum - Financial data.png]]

| Level                  | What Quantum State could honestly show                                                    | Main risk                                                        |
| ---------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 1. None                | Governance evidence only, with money marked as unknown, never made up                     | A false sense of completeness                                    |
| 2. Historical records  | The last approved position and trends; budget variance only if the budget is supplied too | Stale periods and unaudited management accounts                  |
| 3. Regular exports     | Budget against actual and anomalies as of the latest export                               | A late export, or wrong account mapping                          |
| 4. Live ERP, read-only | Current actuals, receivables and payables, with open and closed periods labeled           | Silent sync gaps, and preliminary numbers shown as approved      |
| 5. Live banking        | Balances, cash movement and cash alerts; runway still needs forecasts from elsewhere      | Incomplete accounts, and bank figures that don't match the books |

Level 5 is not the destination: the lowest level that answers a given board question may differ from one decision to the next. No survey measures willingness at these five levels, so conversations with buyers and board members are the first evidence. What each level costs to build is covered in [[Tech]].

## What it sells

Three value outcomes sit behind the offer. None has been tested with a customer:

- **Lower preparation waste** — less recurring effort spent assembling and reconciling governance material.
- **Better leadership judgment** — faster, better-grounded attention to material issues, contradictions, and implications.
- **Audit-ready governance confidence** — visible evidence lineage, confidence rationale, review state, and human ownership.

The product principles behind the offer, in the order they're meant to matter:

- governed findings before workflow objects
- cross-source interpretation before document summarization
- evidence confidence before unexplained AI certainty
- visible uncertainty before artificial completeness
- contextual challenge before passive consumption
- human authority before autonomous governance
- decision and outcome memory before one-cycle reporting
- interoperability before suite replacement

What a customer buys first is not settled. Three options sit side by side, each with a different buyer, a different bounded proof, and a different charging model:

| Option | First buyer | Bounded pilot | Charging model |
| --- | --- | --- | --- |
| A. Query of one board question | Company secretary, governance lead, or executive sponsor | A fixed, permissioned evidence set; findings, citations, uncertainty, human review, and a board-ready export | Paid fixed-scope pilot, then a subscription |
| B. Governed-intelligence layer | Governance or risk sponsor at a regulated entity | One evidence domain or meeting cycle; read-only ingest, traceability, review gates | Discovery fee, then an annual platform fee |
| C. Human-reviewed board brief | Chair, executive, or governance team | One cycle, clearly marked human judgment, source links, a correction log | Fee per cycle or a retainer |

All three serve the regulated end. Whichever comes first is a bounded proof, not the full platform: the product as designed promises more than a first customer needs to validate.

## Reaching a first customer

Board software is sold to the organization even when directors are the users. A company secretary or governance team usually buys and carries the change, so Morgan can use Quantum State without signing the contract.

At the SME end, governance is often sold as an add-on to another job: [Carta](https://carta.com/learn/startups/private-companies/board-of-directors/board-management/) includes board meetings in its higher equity-management tiers, and [Pulley](https://site.pulley.com/pricing) includes board approvals in its Growth tier. Neither proves demand for governance intelligence on its own.

## Competitive landscape

Board software shows what directors already buy, but the hardest problems here sit mostly in other markets: AI infrastructure, banking analytics, defense software. Measuring against them is a first principle: [[Compare Against the Problem]].

![[x/Images/Wiki/QS Competitive Landscape.png]]

The axes are structural choices, not features: board portals are built around the meeting pack and sold to company secretaries; graph platforms have no model of how a board works. Each dot shows where that player's AI runs.

**Direct competitors already claim the obvious ground.** [Diligent](https://www.diligent.com/features/boards/boards-ai), [Board Intelligence](https://www.boardintelligence.com/ai), and [Nasdaq Boardvantage](https://www.nasdaq.com/articles/governance/nasdaq-boardvantage-ai-assistant) already advertise cited prep questions, pack summaries and critique, outside perspectives, minutes, and human review. Citations, challenge, and human-in-the-loop do not set Quantum State apart on their own. None of them says where its AI actually runs: Diligent's GovernAI page promises the customer's documents stay separate but names no model, host, or residency option, and [Convene](https://www.azeusconvene.com/en-sa/), strong in Saudi Arabia, offers on-premises or SAMA-compliant hosting for its portal without saying where its AI runs.

**Data sovereignty at scale is already sold, by companies outside board software.** [Cohere North](https://techcrunch.com/2025/08/06/coheres-new-ai-agent-platform-north-promises-to-keep-enterprise-data-secure/) runs on-premises, in a private cloud, or air-gapped, reportedly on as few as two GPUs, with customers including RBC. [Mistral](https://www.cloudera.com/about/news-and-blogs/press-releases/2026-09-10-cloudera-and-mistral-partner-to-bring-specialized-sovereign-intelligence-to-enterprise-data.html) sells open-weight models for on-premises use through partners. [Palantir](https://www.palantir.com/docs/foundry/architecture-center/aip-architecture) deploys to air-gapped sites through an automated update system and puts its own engineers on-site at every customer. [Core42](https://www.core42.ai/products/sovereign-public-cloud) and OpenAI's UAE residency already supply the "in the country" middle ground. The pattern across all of them: running one local model is easy, keeping many installs updated, approved, and healthy is the hard part, and it becomes part of the product itself. Data sovereignty is a requirement Quantum State has to meet, not what sets it apart.

**Connected data shown as a graph, with AI on top, is also already sold.** [Palantir's Ontology](https://www.palantir.com/docs/foundry/architecture-center/aip-architecture) models a customer's organization as connected objects with AI reasoning over them, and [Quantexa](https://www.quantexa.com/platform/decision-intelligence-platform/) resolves people, companies, and transactions into knowledge graphs for banks, on-premises capable. Both sell to regulated buyers. Nobody found sells a graph shaped for a board specifically: its policies, decisions, risks, and board papers. If a difference exists there, it would be the governance model and the board workflow, not the graph technology.

**Who has failed, and why:**

| Case                                                                                                                                               | What happened                                                                                                                                         | The lesson                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [Aleph Alpha](https://www.cnbc.com/2026/04/24/cohere-aleph-alpha-germany-ai-europe-expansion.html) (Germany, 2019–2026)                            | Pitched itself as the sovereign alternative, moved away from frontier models, lost technical staff, and agreed to be acquired by Cohere in April 2026 | Sovereignty alone doesn't carry a company                            |
| [Deloitte Australia](https://fortune.com/2025/10/07/deloitte-ai-australia-government-report-hallucinations-technology-290000-refund) (2025)        | Partly refunded a roughly AUD 440,000 government report that contained AI-invented citations and a made-up court quote                                | Output that can't be traced back to its source costs money and trust |
| [VITAL](https://en.wikipedia.org/wiki/VITAL_\(machine_learning_software\)) (2014)                                                                    | An algorithm was "appointed" to a board; a director normally has to be a natural person, so the appointment was cosmetic                              | AI can't hold board authority                                        |
| [IBM Watson Health](https://slate.com/technology/2022/01/ibm-watson-health-failure-artificial-intelligence.html) (2015–2022)                       | Over \$4 billion spent, never profitable, sold for parts                                                                                               | Promising judgment before the evidence supports it                   |
| [Microsoft 365 Copilot oversharing](https://www.computerworld.com/article/3616459/microsoft-moves-to-stop-m365-copilot-from-oversharing-data.html) | Copilot surfaces any file a user can technically open, board minutes included; many organizations delayed rollout                                     | Keeping data in the building isn't the same as keeping it safe       |

In every case the AI's output was given more authority than its evidence earned. That is the exact risk [[Human Authority]] and [[See the Evidence]] are meant to close off.

Closer to home, the [UAE Cabinet's Regulatory Intelligence Office](https://uaecabinet.ae/en/news/uae-cabinet-chaired-by-mohammed-bin-rashid-approves-launch-of-first-integrated-regulatory-intelligence-ecosystem-in-uae-government) already uses AI to track how laws affect society and to propose changes. AI-assisted governance is already familiar at government level in the UAE, a point in favor of the regulated end.

## Pricing, still unpriced

Neither Diligent nor Board Intelligence publishes AI pricing; both route buyers to a custom quote. What a customer would pay for Quantum State, at either end of the spectrum, is a modeled guess, not a tested number. It also depends on how much financial data a customer will connect (see [How much financial data a customer connects](#how-much-financial-data-a-customer-connects)).

## Known and unknown

**Known**

- Board software is sold to the organization, usually through the company secretary, even when directors are the users.
- Incumbents already advertise cited preparation, pack critique and human review, and none publishes where its AI runs.
- Data sovereignty at scale and graph-plus-AI products already exist outside board software.

**Unknown**

- Which end of the spectrum goes first, and whether both can be served without two separate products.
- What a customer would pay, for which first offer.
- Whether board buyers ask where the AI runs, or only IT and risk teams do.

## Still open

- Which regulated buyer goes first: a bank, a DIFC firm, or a large private group with a formal board?
- How willing are regulated buyers to connect financial data, and which level do they reach before the answer turns to no?
- What is the first thing actually bought: a Query, a governed-intelligence layer, or a human-reviewed brief?
- Does any vendor already combine on-site AI, a board-shaped graph, and claims traced to their source? Public pages can't prove absence; only a demo against the same case can settle it.

## Sources

- [Diligent — AI for Boards / GovernAI](https://www.diligent.com/features/boards/boards-ai)
- [Board Intelligence — AI and IQ](https://www.boardintelligence.com/ai)
- [Nasdaq Boardvantage AI Assistant](https://www.nasdaq.com/articles/governance/nasdaq-boardvantage-ai-assistant)
- [Azeus Convene — Saudi Arabia](https://www.azeusconvene.com/en-sa/)
- [Carta board-management guide](https://carta.com/learn/startups/private-companies/board-of-directors/board-management/)
- [Pulley pricing](https://site.pulley.com/pricing)
- [Cohere North](https://techcrunch.com/2025/08/06/coheres-new-ai-agent-platform-north-promises-to-keep-enterprise-data-secure/)
- [Cloudera and Mistral partnership](https://www.cloudera.com/about/news-and-blogs/press-releases/2026-09-10-cloudera-and-mistral-partner-to-bring-specialized-sovereign-intelligence-to-enterprise-data.html)
- [Palantir AIP architecture](https://www.palantir.com/docs/foundry/architecture-center/aip-architecture)
- [Core42 Sovereign Public Cloud](https://www.core42.ai/products/sovereign-public-cloud)
- [Quantexa Decision Intelligence Platform](https://www.quantexa.com/platform/decision-intelligence-platform/)
- [Cohere to acquire Aleph Alpha — CNBC](https://www.cnbc.com/2026/04/24/cohere-aleph-alpha-germany-ai-europe-expansion.html)
- [Deloitte partial refund — Fortune](https://fortune.com/2025/10/07/deloitte-ai-australia-government-report-hallucinations-technology-290000-refund)
- [VITAL (machine learning software) — Wikipedia](https://en.wikipedia.org/wiki/VITAL_\(machine_learning_software\))
- [IBM Watson Health — Slate](https://slate.com/technology/2022/01/ibm-watson-health-failure-artificial-intelligence.html)
- [Microsoft 365 Copilot oversharing — Computerworld](https://www.computerworld.com/article/3616459/microsoft-moves-to-stop-m365-copilot-from-oversharing-data.html)
- [UAE Cabinet Regulatory Intelligence Office](https://uaecabinet.ae/en/news/uae-cabinet-chaired-by-mohammed-bin-rashid-approves-launch-of-first-integrated-regulatory-intelligence-ecosystem-in-uae-government)
