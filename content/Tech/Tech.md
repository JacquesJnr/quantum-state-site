---
publish: "true"
created: 2026-09-28
modified: 2026-09-29T11:25:47.401Z
published: 2026-09-29T11:25:47.401Z
up:
  - "[[mission-vision]]"
related:
collections:
---

# Tech

**Built on:** [[Data Sovereignty]]

Quantum State turns a board's governance material into an interactive graph, then into evidence-backed briefs, using AI. What that AI is, where it runs, and where the data sits are all still options, judged first against one principle: the customer's governance data stays under the customer's control.

## The legal question is a data-flow question

"This data can never leave the building" sounds like a fixed rule. It isn't, by default. DIFC law allows personal data to leave when an adequacy finding or a proper safeguard applies, so strict localization is a customer or sector choice layered on the law, not the law itself. A CBUAE-covered bank adds its own outsourcing and supervisory-access duties on top. And "hosted in the UAE" is not the same claim as "processed in the UAE" — availability varies by provider and feature. The practical task is tracing what happens to a file, an extract, a prompt, a log and a backup, not one blanket answer.

Whichever database Quantum State picks, evidence lineage — who said what, from which source, whether a human validated it — has to be built on purpose. No off-the-shelf database gives that for free.

## Model options: where the AI runs

| Route | Trade-off | Running cost shape |
| --- | --- | --- |
| Closed model API | Fast, broad choice. Provider controls the weights and model changes | A few dollars to low hundreds a month at a small reference workload, rising with use |
| Open-weight, self-hosted (UAE or customer) | More control; the team runs, scales, secures and tests it | Roughly $360–$505/month per non-UAE reference GPU, before redundancy |
| Open weights plus fine-tuning | May help narrow tasks if a measured failure justifies it | Self-hosting cost plus a separately quoted training run |
| Train from scratch | Maximum control, but becomes a separate program | Not priceable as an MVP line item |
| Hybrid routing | Different models for different tasks | Sum of the above plus routing and evaluation work — no automatic saving |

These are modeled planning numbers, not quotes.

Open weights don't tie a customer to one machine — they run on common hardware through common serving software (vLLM, llama.cpp, Ollama). What creates lock-in is the hardware bought, capacity commitments, per-site installation, and each model's own license. Training isn't necessarily a second large cost: retrieval lets a model read a customer's own documents at answer time with no training step; a fine-tune is justified only by a measured failure retrieval doesn't fix; training from scratch is its own separate program. Several open-weight model families, including an Arabic-English baseline, are candidates to test, none chosen — a model card's language support is a reason to test, not proof it performs.

### Where a local model runs

| Where it runs | Data stays... | Cost shape |
| --- | --- | --- |
| Appliance on-site | In the building | AED 10,499 hardware floor per unit; one unit isn't a resilient service |
| Customer's private cloud | In their cloud account | Rented GPUs; a UAE price needs a quote |
| UAE sovereign or in-country host | In the country | Provider buys the hardware; vendor quote needed |
| Shared cluster run by Quantum State | In the country, shared between customers | Illustrative floor of about $1,440–$2,020/month for four GPUs |
| Hybrid | Depends on routing | Two environments plus routing work — no automatic saving |

### Local model does the work, a frontier model makes the hard calls

One candidate split: a local model handles most of the reasoning, and a frontier model is called in only for the hardest cases. The test is literal — anything sent off-site has left the building, including a summary or a short prompt.

| Split | What crosses the boundary | Keeps data in the building? |
| --- | --- | --- |
| A. Local first, hands off hard cases | The prompt, local draft and attached passages | No, for any job handed off |
| B. Local redaction, then hand off | The remaining story and structure | No — context can still identify people, and over-redacting weakens the reasoning |
| C. Send only an abstract question | A generic question, no customer facts | Possibly — but the frontier model never sees the evidence it's reasoning about |
| D. Frontier model hosted in the UAE | The full prompt and selected evidence | In the country, not the building |
| E. A stronger model on-site | Nothing | Yes, but the capacity cost moves back on-site |

A handoff is a data release, not just a model choice — it needs a record of what was sent, why, and what came back. Whether a split saves money is unproven.

## Data layer options

- **Relational database with pgvector** — fewest moving parts, transactions, permissions, versioned records and semantic search in one store
- **Graph database** — suits deep, multi-hop relationships across entities, controls, risks and decisions
- **Vector store beside a system of record** — for large-scale semantic search, at the cost of a sync problem
- **A hybrid** of the above

Quantum State describes itself as a relational database reflected in an interactive node graph. Whether that needs a true graph database or just relational links is a question for benchmarking against actual queries, not a settled choice. This connects to [[Governance Landscape]] and [[Node Details Panel]] — every insight surfaced there needs a source and a confidence level, which is a schema decision, not a database feature.

## Financial data: what each level of access would let Quantum State show

A board's "time and money" questions need financial context, and how much of it Quantum State can honestly show depends on how far a customer will connect. This sits directly behind [[Governance Vault]]'s source setup — what a customer chooses at `Add sources` and `Source access` decides which level applies.

| Level | Board view Quantum State could honestly offer | What it costs to build | Where the data lives |
| --- | --- | --- | --- |
| 1. No financial data | Governance and strategy evidence only; affordability and runway explicitly unknown | Lowest — still needs a clear "unknown" state and disciplined AI abstention | No financial copy in Quantum State |
| 2. Historical approved records | Last approved revenue, spend, balance sheet and cash-flow trend; budget variance only if a comparable budget is also supplied | File upload, extraction, versioning, human check, access control | Can stay on-site or in an approved UAE location, customer's choice |
| 3. Regular finance-approved exports | Recurring budget-versus-actual, cash movement and anomalies since the last board pack | Import mapping, schedule, validation, failed-import handling | Moved by a controlled transfer; any cloud route needs explicit approval |
| 4. Live read-only accounting/ERP | More current ledger actuals, budget variance, receivables/payables, drill-back to source | Vendor API integration, token renewal, sync, multi-entity handling, monitoring | Crosses from the ERP into Quantum State's data plane — a SaaS ERP already sits outside the building |
| 5. Live bank-information APIs | Balance and transaction movement for consented accounts; short-horizon cash context | Licensed-provider route, enterprise consent, security and legal review, reconciliation | The bank, the UAE open-finance hub and the aggregator all handle the data — this is outside Quantum State's boundary even if the model runs on-site |

Keeping the model on-site doesn't keep bank data in the building: at level 5, the bank, the open-finance hub and the aggregator all touch it regardless. A read-only ERP connection is still a continuous copy of ledger data arriving in Quantum State. UAE open finance runs through licensed providers with explicit consent and withdrawal — Lean and Tarabut cover the UAE; Stripe Financial Connections is US-only, and read-only is a permission limit, not an exemption. The five levels aren't a ladder where higher is always better: a fresher live feed can be less board-ready than an approved pack if the period is still open.

## Where Quantum State could sit on the sovereignty spectrum

Deployment spans a spectrum from strict, single-building control to shared, provider-hosted infrastructure.

|  | High end: regulated entity | Middle: UAE-regulated or mid-size group | Low end: unregulated SME |
| --- | --- | --- | --- |
| Data boundary | In the building | In the country | In the region, or per provider terms |
| Where it runs | On-site appliance, or the customer's own private cloud | A UAE sovereign host | A shared cluster run by Quantum State, or hosted APIs |
| Hard calls | A stronger model on site (split E) | A frontier model hosted in the UAE (split D) | A frontier API with local work first (split A) |
| What they give up | Model capability, plus on-site cost per customer | The literal "in the building" promise | Control over where data is processed |
| What Quantum State gives up | Installing and supporting every site | Vendor dependency and commitments | A weaker story for regulated buyers |

The same spectrum breaks into six deployment options a buyer could choose — regional SaaS, a dedicated tenant, the customer's own cloud, on-site, disconnected, or air-gapped — trading how much Quantum State can reach in against how much the customer installs and supports. "Never leaves the building" only starts at on-site, and a frontier handoff at any level drops that boundary back down for the call.

The tension underneath: Quantum State is designed around the independent board auditor, pointing toward the regulated end. A separate go-to-market idea for Ignyte (see [[Business]]) points toward the SME end. Serving both means two cost bases, not one.

## Known and unknown

**Known:**

- The legal barrier to moving data is conditional (adequacy, safeguards, sector rules), not an absolute ban
- "Hosted in" and "processed in" the UAE are separate claims, checked per model and feature
- Evidence lineage has to be designed explicitly; no database supplies it by default
- Open-weight models run on common hardware and serving software; the lock-in risk is elsewhere
- A read-only connection still means continuous data copying, financial or otherwise

**Unknown:**

- Where on the sovereignty spectrum Quantum State positions itself, and what that gives up
- Which model families meet citation, contradiction and abstention tests on actual board material, in English and Arabic
- Whether relational storage is enough, or Morgan's actual queries need a graph database
- Whether a local-model-plus-frontier split saves money, or costs more once both models read the same evidence
- Which financial-data levels Quantum State offers, and whether live banking access triggers UAE open-finance obligations for it

## Still open

- Is UAE-only processing a promise, a first customer's requirement, or a priced option — does it cover support access and derived data?
- What minimum ontology and provenance model is needed before relational-versus-graph can be benchmarked?
- What counts as a "hard call" that justifies a frontier handoff — long synthesis, contradicting evidence, a failed citation check, or a human simply asking?

## Sources

- [DIFC Data Protection Law No. 5 of 2020](https://assets.difc.com/v1/media/edge/images/dubaiintern0078-difcexperie96c5-production-3253/media/project/difcexperiences/difc/difcwebsite/documents/laws--regulations/data-protection-law.pdf)
- [DIFC data export and sharing guidance](https://www.difc.com/business/registrars-and-commissioners/commissioner-of-data-protection/data-export-and-sharing)
- [CBUAE Outsourcing Regulation for Banks](https://www.centralbank.ae/media/vvcmsuph/2021-05-31-outsourcing-reg-final_1.pdf)
- [CBUAE AI/ML outsourcing and third-party risk](https://rulebook.centralbank.ae/en/rulebook/9-outsourcing-and-third-party-risk)
- [CBUAE Open Finance Regulation](https://rulebook.centralbank.ae/en/rulebook/introduction-and-scope-2)
- [Lean UAE bank connection permissions](https://docs.leantech.me/v2.0-UAE/docs/creating-a-bank-connection)
- [Tarabut Connect data guide](https://docs.tarabut.com/v1.0/docs/get-data-via-connect)
- [Stripe Financial Connections availability](https://support.stripe.com/questions/where-is-financial-connections-currently-available?locale=en-GB)
- [OpenAI API data controls](https://developers.openai.com/api/docs/guides/your-data)
- [OpenAI API pricing](https://developers.openai.com/api/docs/pricing)
- [Amazon Bedrock regional availability](https://docs.aws.amazon.com/bedrock/latest/userguide/models-region-compatibility.html)
- [AWS G6 UAE region GPUs](https://aws.amazon.com/about-aws/whats-new/2025/08/amazon-ec2-g6-now-available-middle-east-uae-region/)
- [Core42 AI Cloud](https://www.core42.ai/products/ai-cloud)
- [Oracle Abu Dhabi sovereign AI cluster](https://www.oracle.com/ae/news/announcement/oracle-accelerates-sovereign-ai-capabilities-with-the-launch-of-the-first-supercloud-cluster-2025-11-24/)
- [pgvector](https://github.com/pgvector/pgvector)
- [Neo4j graph concepts](https://neo4j.com/docs/getting-started/appendix/graphdb-concepts/)
- [W3C PROV-O](https://www.w3.org/TR/prov-o/)
- [vLLM supported platforms](https://github.com/vllm-project/vllm/blob/main/docs/getting_started/installation/README.md)
- [llama.cpp repository](https://github.com/ggml-org/llama.cpp)
