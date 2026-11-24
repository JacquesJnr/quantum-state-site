---
publish: "true"
created: 2026-11-24
modified: 2026-11-24T14:28:16.000Z
published: 2026-11-24T14:28:16.000Z
up:
  - "[[Tech]]"
related:
  - "[[Business]]"
collections:
---

**Built on:** [[Data Sovereignty]], [[Human Authority]]

On-premise deployment runs Quantum State and its AI on hardware that serves one client, with no cloud AI service. 

The client's governance data stays under the client's control. [[Tech]] compares every route. This article covers one route: how it works, which AI models might fit, what it costs and what it asks of the client.

The client gains control of the evidence. In return, someone must patch, back up and repair a machine that a cloud provider would otherwise run.

![[x/Images/Wiki/QS Diagram - On-premise.png|What sits where in an on-premise deployment. Inside the client-controlled boundary: the browser, one server that holds the app, the AI model, the GPU, the database, the search index and the client's documents, an encrypted backup in another place, and a health check on other equipment. Outside: an open-weight model is tested, then signed as a release. The client approves each update. Training and client-opened support are optional]]

The pilot is one server. Docker keeps the app and the AI model in separate containers, so each can change without the other. The database holds findings, dates and precedence, which is the order in which sources outrank each other. A backup sits in another place, because one machine can fail.

## What On-Premises Means

"On-prem" mixes three questions: who owns the building, who owns the hardware and who operates it. The table answers the first two. The third is a separate agreement, because a client can own a server that a partner runs.

| Setup                                   | Building              | Hardware      | Name                                    |
| --------------------------------------- | --------------------- | ------------- | --------------------------------------- |
| Server at the client's site             | Client                | Client        | On-premise                              |
| Client's server in a rented data center | Third party           | Client        | Client-owned, off-premises (colocation) |
| Server supplied with the product        | Client or third party | Quantum State | Vendor-supplied appliance               |
| Reserved or shared capacity             | Provider              | Provider      | Private or public cloud                 |

[NIST](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) says private infrastructure "may exist on or off premises". Off-site hardware can stay under the client's control, but a third party then guards the building. A promise that data "never leaves the building" is true only on site.

A server inside the UAE does not settle the question. DIFC and ADGM, the financial free zones in Dubai and Abu Dhabi, have their own data rules, and [mainland UAE is not on ADGM's list of adequate jurisdictions](https://www.adgm.com/operating-in-adgm/office-of-data-protection/jurisdictions). Co-location therefore depends on the client's license and free zone.

## How it stays current

A server needs three kinds of update, from different makers and at different speeds.

![[x/Images/Wiki/QS Diagram - On-premise updates.png|The three update layers. Firmware, operating system and GPU driver: made by hardware and software vendors, installed by whoever operates the server, on a regular rhythm and fast for a security fault. Quantum State app: made by Quantum State, approved by the client, installed by the server, each release. AI model: made by the model's maker and tested by Quantum State, approved by the client, rare and tens of gigabytes]]

An app release does not depend on a new model, so the two ship separately. A GPU driver can break the model server, so driver updates are tested with the app first.

The app and model files are signed. The signature shows that a file came from Quantum State and has not changed. The files can arrive by three routes, and each client uses one.

| Route | How it works | Fits |
| --- | --- | --- |
| **Direct pull** | In an approved maintenance window, the server connects out to an approved list of addresses. Nothing connects in | A client that allows limited internet access |
| **Client mirror** | The client's own registry copies the release. [Harbor](https://goharbor.io/docs/main/administration/configuring-replication/) copies images and signatures this way | A client whose IT team inspects software first |
| **Offline bundle** | One file holds the release. [Replicated](https://docs.replicated.com/vendor/replicated-onboarding-air-gap) builds bundles like this | A server with no internet |

In normal use, the server needs no outbound connection. An update follows the same steps on every route:

1. Quantum State tests the release.
2. The client approves it.
3. The server [verifies the signature](https://docs.sigstore.dev/cosign/verifying/verify/).
4. The server takes a backup.
5. The server installs the release.

Going back means restoring that backup. [The restore replaces newer data](https://docs.gitlab.com/update/package/downgrade/), so work done after the update is lost.

Logs stay on the server by default. The client opens, limits and records each support session. Recording does not stop an authorized person from copying data, so each session is short and tied to a named person.

## Who the server is sized for

The example is a firm in the Dubai International Financial Centre (DIFC). The Dubai Financial Services Authority (DFSA) regulates the financial firms inside it. DIFC counts [1,134 regulated financial firms in June 2026](https://mediaoffice.ae/en/news/2026/july/28-07/difc-records-industry-leading-achievements-in-h1-2026).

On average they are small. [DFSA figures for September 2025](https://365343652932-web-server-storage.s3.eu-west-2.amazonaws.com/files/7717/6371/6875/DFSA_Annual_2025_-_Presentation_deck.pdf) give staff and firm counts for five types, and the last column divides one by the other.

| Firm type | Firms | Staff in DIFC | Average staff |
| --- | --- | --- | --- |
| Private banking | 28 | 1,348 | 48 |
| Brokerage | 68 | 1,136 | 17 |
| Investment management | 163 | 1,944 | 12 |
| Fund management | 113 | 862 | 8 |
| Arrangers and advisers | 222 | 1,564 | 7 |
| **All five** | **594** | **6,854** | **12** |

An average hides large firms, and headcount is not a user count. A small firm still has governance roles to fill. [DFSA rule GEN 7.5.1](https://dfsaen.thomsonreuters.com/rulebook/gen-751) requires a Senior Executive Officer, a Finance Officer, a Compliance Officer and a Money Laundering Reporting Officer, with exceptions.

The two examples below set a range. The large example takes the private banking average as an upper size. It is not a target client.

| | Average firm | Large example | Basis |
| --- | --- | --- | --- |
| Staff | 12 | 48 | DFSA figures above |
| Directors | 5 | 9 | Assumption. [One UAE insurer](https://afnic.ae/storage/pdf_uploads/investor_relations/Corporate%20Governance%20Report%202025.pdf) has nine |
| **Possible users** | **17** | **57** | Everyone has a login |
| **Questions at once** | **4** | **12** | Everyone asks every five minutes, and an answer takes one minute. Averages of 3.4 and 11.4, rounded up |
| Board material a year | 880 pages | 7,200 pages | See below |
| **Six years of it** | **5,280 pages** | **43,200 pages** | Six years is an assumption |

No DIFC page count was found, so these come from the UK. The [average board pack is 220 pages](https://www.cgi.org.uk/media/kagbmcd3/cgi_boardreporting_17july.pdf), and the average firm is assumed to have four a year. Directors of the [largest companies read nearly 600 pages a month](https://www.boardintelligence.com/blog/the-state-of-board-effectiveness-in-2025), with committee packs included. Both probably overstate a small firm's board packs, and neither counts policies, contracts or regulator letters.

Pages hardly change the server. A search index for 43,200 pages takes less than 1 GB, at two passages a page. Questions at once set the size of the GPU, because each needs its own memory. A large pack uploaded before a meeting can wait in a queue, so that chat stays responsive.

## Model first, training later

An open-weight model is one whose files can be downloaded and run on private hardware. A stock model is used as its maker released it. Retrieval finds the source passages for each question and gives them to the model, so each answer can point to its source. [[See the Evidence]] and [[Traceable to Quanta]] depend on this.

A stock model with retrieval comes first. Training changes how a model behaves, so it waits for a failure that a test can measure.

UAE law shows why. On the UAE law questions in [HELM Arabic Enterprise](https://crfm.stanford.edu/2026/05/26/helm-arabic-enterprise.html), a Stanford and Arabic.AI benchmark, the best score was 0.99 when the prompt held the statute. Without the statute, the best score was 0.495. Those are the best results of many models, not one model tested twice. 

> [!Quote] They still point the same way: a model should read the law from the source, not recall it.

### What sets the size

GPU memory decides which models fit. It must hold three things:

- **The weights.** These are the numbers that make up the model. Storing each one in 4 bits instead of 16 takes about a quarter of the memory, and it can change answer quality.
- **The context.** This is the text the model works on at one time, counted in tokens, which are short pieces of words. Each question needs its own share.
- **The search model.** Retrieval runs on the same machine.

The weights are only the floor. The table adds context for the two firms sized above, at 32K tokens a question and weights at 4 bits.

| Model | Weights | Each question | Average firm, 4 at once | Large example, 12 at once |
| --- | --- | --- | --- | --- |
| Qwen3.8-27B | 14 GB | 2.1 GB | 22 GB | 40 GB |
| Gemma 4 31B | 16 GB | 3.5 GB | 30 GB | 58 GB |
| Jais-3-32B | 17 GB | 8.6 GB | 52 GB | 120 GB |

These are minimums, calculated from each model's published files. They leave out gpt-oss-120b, which is a fallback. The figures exclude the search model, text recognition and the model server.

- **Average firm:** a 48 GB GPU can hold Qwen or Gemma, but not Jais.
- **Large example:** Qwen has little room to spare on 48 GB. Gemma needs the 80 to 96 GB class. Jais needs more than one GPU.

A queue or a smaller context lowers every figure.

The largest hosted models do not fit at all. [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) has 1.6 trillion parameters, about 800 GB at 4 bits. The aim for Quantum State is a smaller model that passes the same tasks.

## Candidate models

Four models form a shortlist for the main model, which reads the passages and writes the analysis. The shortlist is not a ranking or a full market search, and none has been tested on board material. All four carry the Apache 2.0 license on their model cards.

*Due to primary operating region being the UAE - candidates have been selected on their bi-lingual capabilities.*

![[x/Images/Wiki/QS Diagram - On-premise models.png|Four candidate models. Gemma 4 31B from Google: best multilingual open model on HELM Arabic Enterprise at 0.738, reads images, weakest of three on long Arabic text at 66.0, weights 16 or 63 GB. Qwen3.8-27B from Alibaba: smallest, best of three on long Arabic text at 79.0, reads images, weakest of three on Arabic law at 70.5, weights 14 or 56 GB. Jais-3-32B: built for Arabic and English, 512K context, best of three on Arabic law at 73.4, text only, its maker ran the tests, weights 17 or 70 GB. gpt-oss-120b from OpenAI: largest, built for reasoning, text only, no Arabic claim, one 80 GB GPU]]

- **[Gemma 4 31B](https://huggingface.co/google/gemma-4-31B-it)** has the only Arabic score here from outside the model makers. Its card names multilingual text recognition, so it can be tested on scanned pages.
- **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** leaves the most memory free of the first three. Board packs are long, so its long-text score is worth a test.
- **[Jais-3-32B](https://huggingface.co/inception42/Jais-3-32B)** is built for Arabic and English. Scanned pages need a separate text recognition step first.
- **[gpt-oss-120b](https://huggingface.co/openai/gpt-oss-120b)** is the fallback if the smaller models fail on reasoning. Its maker says it fits one 80 GB GPU.

The long-text and Arabic law scores come from the [Jais card](https://huggingface.co/inception42/Jais-3-32B), so the maker of one candidate ran them. The gaps on Arabic law are small (70.5 to 73.4). HELM tested Gemma 4, but not Qwen3.8 or Jais 3. These scores are reasons to test a model, not to choose it.

Retrieval needs its own small model, which finds passages and does not write answers. [Qwen3-Embedding-0.6B](https://huggingface.co/Qwen/Qwen3-Embedding-0.6B) covers more than 100 languages and can search across them. [BGE-M3](https://huggingface.co/BAAI/bge-m3) combines search by meaning with search by keyword.

[Shieldstral](https://huggingface.co/mistralai/Shieldstral-1.0-3B) is a safety classifier. It does not write an analysis, so it is not a candidate.

### How the test runs

1. Write 20 cases on governance findings and precedence, with answers that a person has reviewed.
2. Run Gemma 4 31B, Qwen3.8-27B and Jais-3-32B at 4 bits on a 48 GB GPU, with one question at a time. Jais does not fit four at once.
3. Move to 80 to 96 GB if memory or quality falls short. Test gpt-oss-120b only if all three fail.
4. Extend the test to 60 cases before a choice.

## What one client costs

These are planning ranges over three years, not quotes. The base case is the average firm: one server with a 48 GB GPU. On site, the client already has a good server room, so the room, its backup power and its security cost nothing extra here. The ranges exclude software license, VAT, duty, insurance, legal advice, margin and night support.

![[x/Images/Wiki/QS Diagram - On-premise cost lines.png|What each line costs over three years, low to high, in four groups. The same for every option: updates and support labor $22k to $144k, install and security assessment $10k to $43k. Changes with the number of servers: hardware and its support $23k to $46k for one server, $47k to $92k for two. On site only: power and cooling $2k to $6k for one, $5k to $13k for two. Colocation only: rack with power $14k to $59k for one, $14k to $98k for two; network and remote hands, with racking, $4k to $29k for one, $5k to $41k for two]]

![[x/Images/Wiki/QS Diagram - On-premise three-year cost.png|Running cost over three years, at the middle of each range. Each line is labeled with its total and full range. One server on site $148k, range $57k to $239k. Two servers on site $187k, range $83k to $292k. One server in colocation $197k, range $73k to $321k. Two servers in colocation $258k, range $98k to $418k]]

The middle of each range is arithmetic, not a forecast. At the middle, one server in colocation costs slightly more over three years than two servers on site.

Colocation buys the same server and the same support, then adds a facility. For one server, the facility adds about $16k to $82k, after the power and cooling it replaces. Remote hands are the data center's own technicians, billed by the hour. The graphs assume equal labor in both places, because no evidence shows a difference.

- **Labor is usually the largest line.** For one server on site, updates and support are 38% to 60% of the total. At the low end, hardware costs slightly more ($23k against $22k).
- **A good room makes on site cheaper.** A client without one would pay to build it, and that cost is not in the graphs.
- **A second server is a spare.** It takes over on a failure only after a tested recovery, and each server must hold the whole model. A pilot needs one server and a tested backup.
- **A 96 GB GPU adds about $13k to $17k a server.** Larger builds cost more.
- **Who buys changes the cash, not the cost.** If Quantum State supplies one server, it funds $20k–$32k before the first payment.
- **Support grows with clients.** Labor assumes two to four days a month for each client, so five clients take 10 to 20 days.
- **Training is an optional line.** Rented GPU time can be under $1,500. Data and evaluation work can be $12k–$72k.

### Where the prices come from

- **Hardware** uses UAE shop prices: a [48 GB workstation at AED 74,000](https://gccgamers.com/ae/product/gcc-gamers-rtx_pro_5000_workstation) and [96 GB rigs from AED 159,000](https://ixgamersuae.com/ai-workstations-in-the-uae-2026-what-they-cost-and-which-one-you-actually-need/). These are workstations, and colocation needs a machine that fits a rack. A UAE price tracker lists the [48 GB card](https://gpuprix.com/uae/gpus/rtx-pro-5000-blackwell) from AED 32,315 and the [96 GB card](https://gpuprix.com/uae/gpus/rtx-pro-6000-blackwell) from AED 73,400.
- **Rack** runs from [$400 a month](https://blog.bamboozle.me/colocation-vs-cloud-uae-cost/) for a quarter rack to [AED 1,500 a rack unit](https://www.aspgulf.com/blog/data-center-colocation/what-is-colocation-hosting-and-why-do-uae-businesses-need-it/) for four units, or AED 10,000 for a quarter rack. Both are vendor pages.
- **Network and hands** use rates from [Bamboozle](https://blog.bamboozle.me/colocation-vs-cloud-uae-cost/) and [Reboot Monkey](https://www.rebootmonkey.com/en/colocation/united-arab-emirates). Hours are assumptions, and so is the top hourly rate of $150.
- **Labor** uses [UAE freelance rates of $300 to $1,000 a day](https://www.khaleejtimes.com/jobs/freelancers-in-uae-earn-up-to-dh3600-per-day-top-roles-revealed), which are not specific to server engineers. A [managed contract at AED 120,000 to 240,000 a year](https://www.royex.ae/services/it-infrastructure-amc-managed-server-services/) is the alternative, with 24-hour cover.
- **Security assessment** uses a [vendor's range](https://pentest-ae-v1.pages.dev/blog/penetration-testing-cost-uae/) for one web application.
- **Power** adds cooling at [1.52](https://intelligence.uptimeinstitute.com/resource/growing-pue-advantage-larger-data-centers), the 2026 average ratio of total power to computer power, and at 2.0 for a small room. The electricity rate is not confirmed.

## What on-prem gives and takes

![[x/Images/Wiki/QS Diagram - On-premise gives and takes.png|What on-premise deployment gives and takes, in four pairs. Control of hardware, data and model, in return for responsibility for patches, backups and failures. No AI provider sees the evidence, in return for a smaller choice of models. No cloud AI outage, in return for a tested backup and a recovery plan. A clear promise for regulated buyers, in return for an install and support load for each client]]

Location does not remove physical risk. In September 2026, AWS [reported customer data beyond recovery](https://www.helpnetsecurity.com/2026/09/17/aws-middle-east-outage-permanent-data-loss-bahrain-uae/) in Bahrain and the UAE after drone strikes. The backup in another place exists for this.

On-premise deployment does not save money at a small volume. A set of 101 documents cost about $1.45 to process through DeepSeek's API at peak price, as logged by the prototype on 23 November 2026. Control is the reason to buy, so the route suits a client who cannot send evidence to a cloud AI provider.

For other clients, a cloud architecture could reverse most of this trade. There would be no server to buy for each client, AI fees would follow use, and larger models would be available.  In-turn Quantum State would have to lean into integrations for other cloud providers
One release could reach many clients. In return, evidence leaves hardware that serves one client, and an outside provider processes it. Cloud is not one choice: the model can run on a shared service, in a private tenant or on a host in the UAE, and each gives a different level of control. [[Tech]] compares these routes.

## Known and unknown

**Known**
- An AI model can run on one private server.
- [ADGM](https://assets.adgm.com/download/assets/FSRA+Dear+SEO+letter+Outsourcing+Thematic+Review+20260129.pdf/a93b5df2fcf911f0bc34fe23cae24487) firms first test if an outside function relates to regulated activity, then if it is material.
- [DFSA guidance](https://dfsaen.thomsonreuters.com/rulebook/gen-553-guidance) names server maintenance as a technology service, so selling a server and running it are judged separately.

**Unknown**
- Who is the first client, and what they require.
- Whether a stock model passes citation, contradiction and precedence tests, in English and Arabic.
- Whether a search model finds passages better than keyword search alone.
- What a cloud architecture would cost for the same client.
- How many people would log in, and how often they ask at the same moment.
- UAE quotes for the server, rack, security assessment and support, and whether labor differs between the two places.

## Still open

- Who answers when the server fails, and how fast?
- Which update route does the first client accept?
- Can support staff see client data, and who approves it?
- Does the client pay for a second server, or accept downtime?
- What can one small team support before a partner is needed?
- Who can review the test cases on UAE law precedence?

## Sources

- [NIST SP 800-145](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf)
- [FSRA outsourcing letter, January 2026](https://assets.adgm.com/download/assets/FSRA+Dear+SEO+letter+Outsourcing+Thematic+Review+20260129.pdf/a93b5df2fcf911f0bc34fe23cae24487)
- [DIFC results, first half of 2026](https://mediaoffice.ae/en/news/2026/july/28-07/difc-records-industry-leading-achievements-in-h1-2026)
- [DFSA Annual Outreach 2025, slides](https://365343652932-web-server-storage.s3.eu-west-2.amazonaws.com/files/7717/6371/6875/DFSA_Annual_2025_-_Presentation_deck.pdf)
- [DFSA rule GEN 7.5.1](https://dfsaen.thomsonreuters.com/rulebook/gen-751)
- [CGI: board reporting, 2026](https://www.cgi.org.uk/media/kagbmcd3/cgi_boardreporting_17july.pdf)
- [Board Intelligence: board effectiveness in 2025](https://www.boardintelligence.com/blog/the-state-of-board-effectiveness-in-2025)
- [AFNIC: Corporate Governance Report 2025](https://afnic.ae/storage/pdf_uploads/investor_relations/Corporate%20Governance%20Report%202025.pdf)
- [Harbor: replication](https://goharbor.io/docs/main/administration/configuring-replication/)
- [Replicated: air-gap installation](https://docs.replicated.com/vendor/replicated-onboarding-air-gap)
- [Sigstore: verifying signatures](https://docs.sigstore.dev/cosign/verifying/verify/)
- [ADGM: adequate jurisdictions](https://www.adgm.com/operating-in-adgm/office-of-data-protection/jurisdictions)
- [DFSA: ICT services guidance](https://dfsaen.thomsonreuters.com/rulebook/gen-553-guidance)
- [GitLab: rollback](https://docs.gitlab.com/update/package/downgrade/)
- [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro), [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B), [Gemma 4 31B](https://huggingface.co/google/gemma-4-31B-it), [Jais-3-32B](https://huggingface.co/inception42/Jais-3-32B), [gpt-oss-120b](https://huggingface.co/openai/gpt-oss-120b)
- [Qwen3-Embedding-0.6B](https://huggingface.co/Qwen/Qwen3-Embedding-0.6B), [BGE-M3](https://huggingface.co/BAAI/bge-m3)
- [HELM Arabic Enterprise](https://crfm.stanford.edu/2026/05/26/helm-arabic-enterprise.html)
- [Shieldstral model card](https://huggingface.co/mistralai/Shieldstral-1.0-3B)
- [GCC Gamers: 48 GB workstation](https://gccgamers.com/ae/product/gcc-gamers-rtx_pro_5000_workstation)
- [IX Gamers: AI workstation prices, 2026](https://ixgamersuae.com/ai-workstations-in-the-uae-2026-what-they-cost-and-which-one-you-actually-need/)
- [GPUPrix: UAE 48 GB card](https://gpuprix.com/uae/gpus/rtx-pro-5000-blackwell), [96 GB card](https://gpuprix.com/uae/gpus/rtx-pro-6000-blackwell)
- [ASPGulf: colocation prices](https://www.aspgulf.com/blog/data-center-colocation/what-is-colocation-hosting-and-why-do-uae-businesses-need-it/)
- [Bamboozle: UAE colocation cost](https://blog.bamboozle.me/colocation-vs-cloud-uae-cost/)
- [Reboot Monkey: UAE remote hands](https://www.rebootmonkey.com/en/colocation/united-arab-emirates)
- [Khaleej Times: UAE freelance rates](https://www.khaleejtimes.com/jobs/freelancers-in-uae-earn-up-to-dh3600-per-day-top-roles-revealed)
- [Royex: managed infrastructure](https://www.royex.ae/services/it-infrastructure-amc-managed-server-services/)
- [Penetration test prices, UAE](https://pentest-ae-v1.pages.dev/blog/penetration-testing-cost-uae/)
- [Uptime Institute: data center efficiency, 2026](https://intelligence.uptimeinstitute.com/resource/growing-pue-advantage-larger-data-centers)
- [Help Net Security: AWS Middle East data loss](https://www.helpnetsecurity.com/2026/09/17/aws-middle-east-outage-permanent-data-loss-bahrain-uae/)
