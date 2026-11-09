---
publish: true
created: 2026-11-09
modified: 2026-11-09T11:17:33.134Z
published: 2026-11-09T11:17:33.134Z
up:
  - "[[Design]]"
related:
  - "[[Governance Brain]]"
collections:
---

# Smart Search

**Built on:** [[See the Evidence]], [[Traceable to Quanta]], [[Show What Isn't Known]], [[Say Which AI Said It]]

Smart Search is a search across the meaning of the [[Governance Vault]], not only its words or the links already on the graph. Morgan asks a question in plain language. The search becomes a chat that shows each document it reads, and it ends with an answer, its sources, and any new connection it found between documents.

![[x/Images/Toy Desgins/Mo-09-Nov Smart Search ask.png|Smart Search in the Governance Brain Toy, before a search. A large search bar says "Ask across the whole vault", with three suggested questions under it and a sphere of document nodes waiting below]]

## What it does for Morgan

The [[Governance Brain]] answers "where is this?". Its header search matches titles, text and insights, and its lines show the relationships that the vault already records. Smart Search answers a different question: "what in the vault relates to this, even if nobody wrote the link down?"

A search has three states:

1. **Ask.** Morgan types a question into one large search bar. Smart Search always reads the whole vault, so it has no domain filters.
2. **Reading.** The search bar becomes an agent chat. The chat lists each step as it happens: "Reading Charter", "Tool · semantic match", "Comparing meaning across Risk and resilience and Strategic direction". Beside the chat, a sphere of document nodes turns to bring each document being read to the front, with a label on it.
3. **Answer.** The chat collapses its log to one line, for example "Read 6 sources · used 2 tools". Then it shows the answer, a chip for each source, and any new connection.

![[x/Images/Toy Desgins/Mo-09-Nov Smart Search reading.png|Smart Search while it reads. The sphere labels "Board risk report · reading", and the chat panel lists each document read, each tool used and each comparison made]]

From the answer, Morgan has two ways forward:

- **Show on the graph.** The new connection goes onto the [[Governance Brain]] as a link in a rainbow gradient. The gradient marks the link as an AI finding, not a relationship that the source documents state.
- **Create a query.** The question and its sources start a new [[Query]], where Morgan can gather the evidence around one board question.

![[x/Images/Toy Desgins/Mo-09-Nov Smart Search answer.png|Smart Search answer. Six sources stay labelled on the sphere. The panel shows the answer, six source chips, a new connection from Draft charter to Charter found by meaning, and two buttons: Show on the graph and Create a query]]

## How a search across meaning works

A keyword search finds documents that contain the words of the question. A semantic search finds documents that are about the same thing, even when the words are different. Most semantic search uses embeddings: a model turns each passage into a list of numbers, and passages with similar meanings get similar numbers. A question about "risk ownership" can then find a draft charter that says "accountability for risk" without either phrase in common.

In the example above, the Charter and the Draft charter say the same thing about risk ownership. No document cites the other, so the graph has no line between them, and the Draft charter sits alone. A search across meaning finds the match, and the found link makes it visible.

That is to say, the graph shows what the documents say about each other. Smart Search shows what they have in common, whether or not they say so.

## Why the reading is visible

An answer from AI is only as good as what the AI read. Smart Search shows its reading for three reasons:

- **Morgan can check the sources.** Every source in the answer is a chip that opens the [[Node Details Panel]]. Every sentence in the answer traces back to a document that Morgan can open. ([[Traceable to Quanta]])
- **Morgan can see what was not read.** The sources counter and the log show how much of the vault went into the answer. A short list is a sign that the answer is narrow. ([[Show What Isn't Known]])
- **The wait has a purpose.** A search across a large vault takes time. The chat turns that time into something Morgan can follow, not a spinner.

The sphere is only a picture of the reading. Its nodes have no position that means something. The chat log and the source chips carry the information.

## Tradeoffs

| For | Against |
| --- | --- |
| Finds relationships that no document states, for example a duplicate policy or a missing cross-reference. | A match by meaning is a judgment by a model. Two documents can be similar and still not relate in the way that matters to the board. |
| Accepts plain-language questions, so Morgan does not need the exact title or term. | Keyword search can show which words matched. A semantic match is harder to explain, so the answer must show its sources. |
| Leads into a [[Query]], so a question can grow into a board discussion. | It needs a model and a vector index on top of the vault. Under [[Data Sovereignty]], both must run inside the customer's boundary. |
| Marks found links as AI findings, so Morgan can tell them from recorded relationships. | Found links can add noise to the graph if Morgan adds too many of them without review. |

## In the Governance Brain Toy

The [Governance Brain Toy](https://jacquesjnr.github.io/product-toybox/app/) has Smart Search as its third view. The toy fakes the AI: three suggested questions are the only searches it can run, and each one plays a fixed script with no AI calls.

- "What connects our charter to this quarter's decisions?"
- "Where are we exposed on suppliers?"
- "Which pay decisions lack evidence?"

Before a search, the sphere idles with slow waves of green across its nodes, and Morgan can drag it to turn it. "Create a query" is visible but does not work yet, because the toy has no [[Query]] view.

## Still open

- How much Smart Search adds to an MVP, next to the header search and [[AI Chat]], is not tested.
- Whether Smart Search is a separate view, or the vault-level form of [[AI Chat]], is not decided.
- What a search with no good match shows is not specified.
- Who approves a found link before it becomes part of the graph, and whether it ever stops being an AI finding, is not decided. ([[The Director Decides]])
- What happens when the vault is too large to read in full for one question is not specified.

## Sources

- [Governance Brain Toy](https://jacquesjnr.github.io/product-toybox/app/), live build, screenshots taken 9 Nov 2026
- [product-toybox](https://github.com/JacquesJnr/product-toybox), `DESIGN.md` section 2.8 and `app/src/data/smart-search.json`
- [Semantic vs. keyword search: key differences](https://unstructured.io/insights/semantic-vs-keyword-search-key-differences-for-ai-data/), Unstructured
- [What is semantic search? Embeddings, keywords and hybrid explained](https://aquila-network.pages.dev/learn/what-is-semantic-search), Aquila Network
- [Semantic search over documents](https://llamaindex.ai/glossary/semantic-search-over-documents), LlamaIndex
