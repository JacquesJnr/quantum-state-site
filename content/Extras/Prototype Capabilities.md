---
publish: "true"
title: Prototype Capabilities
created: 2026-10-06
modified: 2026-10-06T08:15:11.615Z
published: 2026-10-06T08:15:11.615Z
up:
  - "[[MVP]]"
---

**Built on:** [[MVP]], with [[Product]] and [[Tech]].

A prototype is judged by what it can do in front of a user. This article lists the capabilities a working Quantum State prototype has to show: first the five that define it, then the full list behind them. The full list doubles as a checklist when the prototype is reviewed.

The capabilities follow the product's journey from scattered material to board-ready output, described in [[Product#How it works|How it works]].

![[x/Images/Wiki/QS Diagram - How it works.png]]

## The five main capabilities

> [!info] 1. Ingest fragmented governance material and build a unified state
> Scattered governance evidence comes into one place and becomes a structured graph, the [[Governance Brain]].

> [!info] 2. Map relationships across the evidence
> The prototype connects documents, entities, claims, risks, decisions and other nodes, rather than only summarising them.

> [!info] 3. Let a user navigate the Governance Brain and find what matters
> A board user explores the graph, follows threads, identifies the important items and drills into the relevant issues.

> [!info] 4. Provide evidence-backed answering, challenge and review
> Outputs rest on traceable evidence, including supporting, contradicting and missing evidence and decision history visible.

> [!info] 5. Take a user from a question to board-ready output
> The prototype shows the whole workflow: asking a question, testing it against the evidence, and exporting something usable for board discussion.

## The full list

### 1. Core workflow

- Ingest fragmented governance documents and evidence
- Normalize material into a vectorized governance graph, the [[Governance Brain]]
- Represent items as nodes with relationships to other nodes
- Support interactive exploration and navigation of the graph
- Let users follow threads across risks, decisions, reports and claims
- Surface what matters most for board attention
- Narrow a broad topic into one concrete question, a [[Query]]
- Analyse the Query against the evidence
- Export or package the result as board-ready material through [[Export Query]]

### 2. Evidence handling and trust

- Show the source behind every node, insight and claim
- Preserve traceability from an insight back to the original evidence
- Show supporting evidence explicitly
- Show contradicting evidence explicitly
- Show missing or absent evidence explicitly
- Show how sources change over time
- Record reviewer actions
- Preserve decision history
- Make outputs reviewable and defensible

### 3. Interaction model

- Support natural-language questions and a contextual [[AI Chat]] throughout the workflow
- Let users ask follow-up questions on nodes, claims or Queries
- Let users inspect why something matters
- Show the move from the broad governance state to focused analysis, and then to board material

### 4. Review and governance support

- Support independent director and board auditor workflows
- Support human validation and approval rather than replacing judgement
- Distinguish system-generated analysis from human judgement
- Help boards and executives see what matters, why it matters and what evidence supports it

### 5. Deployment and operating context

- Make the user-facing form factor of the prototype clear
- Support secure handling of governance data
- Respect customer data-boundary and sovereignty expectations
- Operate in cloud, on-site or air-gapped modes where needed
- Support high-assurance and regulated environments

## Prototype or product

The list describes the product a prototype points toward, and not every item can be proven by a prototype.

The first four groups are about behaviour on screen: what comes in, how it connects, what a user can see and ask, and what leaves as board material. A prototype built on real board material can show all of them, and each one either works in front of a director or it doesn't.

The fifth group is about where and how the product runs. The [[MVP]] prototype runs on anonymised material through cloud AI tools, with the data owner's consent, so it cannot demonstrate on-site or air-gapped operation, or meet a regulated customer's data boundary. What it can do is make the target clear: which form factor it stands in for, and which deployment level the product is built for. The levels themselves are covered in [[Tech#Where Quantum State could sit on the sovereignty spectrum|Tech]].

## Sources

- [[index|Home]]: the product in one paragraph, vision and mission
- [[Product]]: the phases, features and principles the capabilities come from
- [[Quantum State Mega-note]]: evidence, traceability and the app map
- [[Business]]: who the product serves and what a regulated buyer expects
- [[Tech]]: deployment, data boundaries and sovereignty
- [[Choose Who We Serve]]: the regulated-to-unregulated spectrum
