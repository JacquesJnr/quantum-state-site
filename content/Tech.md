---
publish: "true"
created: 2026-09-28
modified: 2026-10-06T09:44:47.726Z
published: 2026-10-06T09:44:47.726Z
up:
  - "[[mission-vision]]"
related:
collections:
---

**Built on:** [[Data Sovereignty]]

Let's start this by asking two simple questions:

### 1. Can enterprise AI be deployed on-premise or in a sovereign environment?

Yes. Modern enterprise AI platforms support public cloud, private cloud, hybrid, sovereign, and air-gapped deployment. Sovereign and on-premise options are increasingly required for regulated industries and governments under the EU AI Act, UAE PDPL, and Saudi PDPL. Vendor platforms that run only on third-party APIs cannot satisfy these rules in full.

### 2. How much do enterprise AI platforms cost?

Total cost of ownership includes platform licences, implementation, integration, change management, and operations over a typical five-year horizon. Gartner forecasts global AI software spend of $452 billion in 2026, up from $283 billion in 2025 ([Gartner, January 2026](https://www.gartner.com/en/newsroom/press-releases/2026-1-15-gartner-says-worldwide-ai-spending-will-total-2-point-5-trillion-dollars-in-2026)). Enterprise engagements are typically priced as platform plus implementation rather than per-seat.

Quantum State uses AI to turn a board's governance material into an interactive graph and evidence-backed briefs. Every technical option is judged first by one test: the customer's data stays under the customer's control.

Any enterprise AI stack has to answer four questions, as framed by [Net0](https://net0.com/blog/enterprise-ai-solutions):

1. **Which workflows and systems do the models touch?** See [What the app map asks of the technology](#what-the-app-map-asks-of-the-technology).
2. **Which models are used, and who owns the weights?** See [Model options](#model-options-where-the-ai-runs).
3. **Where does the data live, and under whose jurisdiction?** See [the sovereignty spectrum](#where-quantum-state-could-sit-on-the-sovereignty-spectrum).
4. **How are the system's outputs explained, audited and overridden?** See the models layer below, and [[Human Authority]].

## Built while the field moves

Quantum State is being built while AI changes month to month. Frontier models are released constantly, open-weight models keep closing the gap, and serving software such as [vLLM](https://github.com/vllm-project/vllm) improves with every release. New kinds of tool keep appearing: [Jev](https://docs.typesafe.ai/introduction), released by TypeSafe in September 2026, returns bounded choices and scores instead of prose.

No single expert covers ground moving this fast. A specialist in one model family, serving layer or deployment method knows one part of a stack whose parts all keep changing. The question is not only which architecture, but which tools fill each part of it.

So Quantum State looks for the best tool for each job, not a fixed industry-standard stack. That takes ongoing research, testing candidates against the work the app map describes and switching when something better appears, and it is part of what being AI-native means here. The options below are the current state of that research.

Each candidate is judged on seven points, adapted from Net0's framework:

- **Data sovereignty:** where the data sits, where the model runs, and who owns the weights
- **Deployment flexibility:** cloud, on site, air-gapped
- **Domain depth:** how well it handles governance material, in English and Arabic
- **Integration breadth:** connections to the systems customers already use
- **Governance and compliance:** fit with NIST AI RMF and ISO/IEC 42001
- **Vendor independence:** whether it can be swapped out later with the data intact; in a field this fast, as important as how good it is today
- **Total cost:** five years of licences, integration and running, not the first invoice

## What the app map asks of the technology

Each stage of the app map creates or reads data, asks something of AI, and needs an interface to show it:

| Stage                                                 | Data it creates or reads                                                 | What AI has to do                                                                     | Interface it needs                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 1. Bring in material ([[Governance Vault]])           | Sources, with an owner and permitted users each                          | Nothing yet: AI reads no source before access is set                                  | File upload, connectors to live tools and local folders, an access editor |
| 2. Connect the dots                                   | The Vault: documents, the claims inside them, and the links between them | Read every source, classify it, extract claims and map how they relate                | Progress per source, while the build carries on in the background         |
| 3. Find the territory ([[Governance Brain]])          | A filtered view of the whole graph                                       | Summarize what's new and suggest issues worth attention                               | An interactive graph with filters and search                              |
| 4. Understand the evidence                            | Source passages, highlights, insights                                    | Summarize a node, score each insight's confidence, answer questions about it          | A node panel, and a document viewer that highlights the passage           |
| 5. Gather around a question ([[Query]])               | A Query: its focus, its insights and its own graph                       | Suggest focuses and related insights, then write the Analysis                         | A Query workspace, with suggestions to accept or reject                   |
| 6. Test what could change ([[Board Simulation Room]]) | Scenario settings and versioned results                                  | Run several agents on one Query in parallel, and record where they agree and disagree | A live multi-agent view with run status and saved versions                |
| 7. Prepare the board discussion ([[Export Query]])    | An export built from the Query                                           | Draft board material with sources and uncertainty kept beside each claim              | A draft preview, a detail level, export to a portal, PDF or Word          |
| [[AI Chat]], throughout                               | Chats, their context, suggested changes                                  | Answer in the context of the current screen, propose sourced edits                    | A streaming chat, model choice, accept or reject                          |

Read across the stages, the demands fall into Net0's four layers of an enterprise AI stack:

![[x/Images/Wiki/QS Diagram - Four layers.png|Four layers of the technology, after Net0's enterprise AI stack. Applications: graph, document viewer, streamed answers. Models: background work and interactive work, with a routing layer that picks the model, checks the boundary and records who wrote what. Data platform: ingestion with permissions first; documents, claims and relationships; lineage of every insight. Infrastructure: where compute and storage sit]]

- **Infrastructure.** Where compute and storage sit: a sovereignty choice more than a performance one (see [the sovereignty spectrum](#where-quantum-state-could-sit-on-the-sovereignty-spectrum)).
- **Data platform.** Ingestion, with permissions recorded before anything is read ([[Access Before Analysis]]); then storage of documents, claims, their relationships and the lineage of every insight (source passage, confidence, model, review state), with versioned Analyses. No database supplies lineage; it has to be designed. The options are a relational database with pgvector (one store for records, permissions and semantic search), a graph database (deep multi-hop relationships), a vector store beside a system of record, or a hybrid; benchmarks decide whether the graph needs a graph database.
- **Models.** Background work (reading, classifying, mapping, scoring) runs in bulk and can queue; interactive work (chat, the Analysis, the Room's parallel agents) streams to someone waiting. A routing layer picks the model for each task, checks the data boundary before anything leaves, and records which model wrote what, so every output can be explained, audited and overridden. The director sees the choice in Scenario Setup and AI Chat.
- **Applications.** A graph usable at the size of a real Vault, a document viewer that lands on the exact passage, streamed answers, and visible background progress.

Financial data is one source among many, but how much of it a customer connects changes what Quantum State can show. That is covered in [[Business#How much financial data a customer connects|Business]].

## Model options: where the AI runs

| Route                                      | Trade-off                                                           | Running cost shape                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Closed model API                           | Fast, broad choice. Provider controls the weights and model changes | A few dollars to low hundreds a month at a small reference workload, rising with use |
| Open-weight, self-hosted (UAE or customer) | More control; the team runs, scales, secures and tests it           | Roughly $360–$505/month per non-UAE reference GPU, before redundancy                 |
| Open weights plus fine-tuning              | May help narrow tasks if a measured failure justifies it            | Self-hosting cost plus a separately quoted model training runs                       |
| Train from scratch                         | Maximum control, but becomes a separate program                     | Not priceable as an MVP line item                                                    |
| Hybrid routing                             | Different models for different tasks                                | Sum of the above plus routing and evaluation; no automatic saving                    |

These are modeled planning numbers, not quotes. Open weights run on common hardware and serving software; lock-in comes from hardware, capacity commitments and licenses. Retrieval lets a model read a customer's documents at answer time, so fine-tuning is only justified by a measured failure retrieval doesn't fix.

### Local model does the work, a frontier model makes the hard calls

Anything sent off-site has left the building, even a summary.

| Split                                                   | What crosses the boundary                     | Keeps data in the building?                                                      |
| ------------------------------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------- |
| A. Local first, hands off hard cases to frontier models | The prompt, local draft and attached passages | No, for any job handed off                                                       |
| D. Frontier model hosted in the UAE                     | The full prompt and selected evidence         | In the country, not the building                                                 |
| E. A stronger model on-site                             | Nothing                                       | Yes, but the capacity cost moves back on-site                                    |

Each handoff is a data release to be recorded. Whether a split saves money is unproven.

## Where Quantum State could sit on the sovereignty spectrum

"This data can never leave the building" is not the law by default. DIFC law lets personal data leave under an adequacy finding or a proper safeguard, so strict localization is a customer or sector choice; banks add outsourcing and supervisory duties. Outside the DIFC and other financial free zones, the UAE's federal PDPL applies. "Hosted in" and "processed in" the UAE are separate claims. For AI itself, the [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework) and [ISO/IEC 42001](https://www.iso.org/standard/81230.html) set expectations, and the EU AI Act reaches anyone serving EU customers. The task is tracing each file, prompt, log and backup through the layers above.

![Four AI deployment settings: cloud, hybrid, on-premises and air-gapped](https://enpraxis.ai/_astro/10_deployment_options.mZsGRcZT_Z1NVGay.webp)
_Four deployment settings, from cloud to air-gapped. Source: [EnPraxis AI](https://enpraxis.ai/solutions/healthcare/), © 2026 EnPraxis AI_

|                             | High end: regulated entity                             | Middle: UAE-regulated or mid-size group      | Low end: unregulated SME                              |
| --------------------------- | ------------------------------------------------------ | -------------------------------------------- | ----------------------------------------------------- |
| Data boundary               | In the building                                        | In the country                               | In the region, or per provider terms                  |
| Where it runs               | On-site appliance, or the customer's own private cloud | A UAE sovereign host                         | A shared cluster run by Quantum State, or hosted APIs |
| Hard calls                  | A stronger model on site (split E)                     | A frontier model hosted in the UAE (split D) | A frontier API with local work first (split A)        |
| What they give up           | Model capability, plus on-site cost per customer       | The literal "in the building" promise        | Control over where data is processed                  |
| What Quantum State gives up | Installing and supporting every site                   | Vendor dependency and commitments            | A weaker story for regulated buyers                   |

In practice: regional SaaS, a dedicated tenant, the customer's own cloud, on-site, disconnected, air-gapped. "Never leaves the building" starts at on-site.

![Five enterprise AI deployment models, from public cloud to air-gapped](https://framerusercontent.com/images/nUNF0Nvr5FXgLChWRs0XMC503I.png)
_Enterprise AI deployment models, from public cloud through dedicated, hybrid and sovereign to air-gapped. Source: [Net0, "Enterprise AI Solutions"](https://net0.com/blog/enterprise-ai-solutions), 23 April 2026._

The design points to the regulated end; serving the SME end too means a second cost base (see [[Business]]).

## The client: an open decision

What the director opens is still undecided (see [[Product#Form factor: an open decision|Product]]). The client is part of the data boundary: whatever it keeps on a device, such as a cached Vault or an offline [[Query]], leaves the building with the device.

| Client                             | Pairs with                                               | Adds to build and support                                                        | Effect on the data boundary                                                   |
| ---------------------------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **Web app**                        | Every level; on site it is a page on the company network | One codebase, updated once per install                                           | Nothing has to stay on the device; browser access to local folders is limited |
| **Desktop app**                    | Every level, including disconnected and air-gapped       | Builds per operating system, signed installers, updates per machine, IT approval | Material can live on a machine that travels                                   |
| **Web app with a local connector** | Every level                                              | A background service that reads files, with its own security review              | The connector's path to the Vault must meet the same boundary                 |
| **Appliance with a web interface** | On-site, disconnected, air-gapped                        | Appliance hardware and support, on top of the web app                            | Everything stays in the building, if clients store no copies                  |
| **Tablet companion**               | Any level; offline reading needs a local copy            | A second client and device management                                            | Offline copies leave with the tablet                                          |
| **Inside existing tools**          | Whatever the host's plugin platform allows               | Plugin rules set by the host vendor                                              | Content falls under the host vendor's cloud and terms                         |

## Known and unknown

**Known:**

- Moving data out of the UAE is conditional, not banned; "hosted in" and "processed in" are separate claims
- Every stage of the app map, and what it asks of data, AI and the interface

**Unknown:**

- Where on the sovereignty spectrum Quantum State sits, and what that gives up
- Which models pass citation, contradiction and abstention tests on board material, in English and Arabic
- Which financial-data levels to offer, and whether live banking triggers UAE open-finance obligations

## Still open

- Is UAE-only processing a promise, a first customer's requirement or a priced option, and does it cover support access and derived data?
- What minimum ontology and provenance model is needed before relational-versus-graph can be benchmarked?
- What counts as a "hard call" worth a frontier handoff: long synthesis, contradicting evidence, a failed citation check, or a person asking?
- Which client pairs with which deployment level, and can anything stay on a director's device without breaking the data boundary?
- Who owns the research that keeps tool choice current, how often is each part re-tested, and what makes a switch worth its cost?

## Sources

- [Net0: Enterprise AI Solutions, 2026 guide (Sofia Fominova, 23 April 2026)](https://net0.com/blog/enterprise-ai-solutions)
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [ISO/IEC 42001, AI management systems](https://www.iso.org/standard/81230.html)
- [EnPraxis AI: four AI deployment settings (cloud, hybrid, on-premises, air-gapped)](https://enpraxis.ai/solutions/healthcare/)
- [BCG: three basic GenAI platforms for the public sector](https://www.bcg.com/publications/2024/gen-ai-journey-to-scale-in-government)
- [Microsoft: data residency versus inference location in global deployments](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/not-available-in-your-region-isnt-a-dead-end-a-security-assessment-of-global-dep/4509804)
- [AWS: Bedrock cross-Region inference in Canada](https://aws.amazon.com/blogs/machine-learning/accelerate-generative-ai-innovation-in-canada-with-amazon-bedrock-cross-region-inference/)
- [AWS: private network paths for data movement in generative AI](https://aws.amazon.com/blogs/networking-and-content-delivery/private-network-for-data-movement-in-generative-ai/)
- [Infralovers: routing between local and cloud models](https://www.infralovers.com/blog/2026-01-26-ai-trends/)
- [TypeSafe Jev introduction](https://docs.typesafe.ai/introduction)
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
