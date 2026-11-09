---
publish: true
created: 2026-11-09
modified: 2026-11-09T11:20:48.905Z
published: 2026-11-09T11:20:48.905Z
up:
  - "[[Design]]"
related:
  - "[[Governance Brain]]"
collections:
---

# Wheel View

**Built on:** [[Show What Isn't Known]], [[Present Without Bias]], [[Say Which AI Said It]], [[The Director Decides]]

The Wheel View shows the [[Governance Vault]] as a spider chart. Each spoke is a governance domain or topic, and each point shows how far its reading is from the limit that the board sets. Morgan uses it to understand what is at risk fast, and how that changes over time.

![[x/Images/Toy Desgins/Mo-09-Nov Wheel whole.png|The whole wheel for Acme.Inc. Six domains sit on a hexagon. A dashed line marks the KRI threshold set by the board, and a solid line marks the reading. Risk is at 200% and Remuneration at 118%, both past the threshold. The side panel says 2 of 6 domains are over threshold]]

## What it does for Morgan

The [[Governance Brain]] graph shows how documents relate. Related material clusters together, so a graph is good for exploring, but it does not say which cluster needs attention. The Wheel sets out the same vault as a fixed structure: one spoke for each domain, always in the same place, with one clear measure on each spoke.

The Wheel has two levels:

- **The whole wheel.** Each domain is one point, placed at the reading of its worst topic. Morgan sees at a glance which domains are over their limit.
- **A domain wheel.** Morgan picks one domain chip, and that domain opens as its own wheel. Each topic is one point, placed at the reading of its worst key risk indicator. A domain wheel has 4 to 8 topics.

![[x/Images/Toy Desgins/Mo-09-Nov Wheel Risk domain.png|The Risk domain wheel. Eight topics sit on an octagon. Supplier risk is at 200% and Emerging risks at 150%. The side panel for Risk appetite shows its status, an AI Summary, a risk overview, and the appetite statement]]

When Morgan picks a point, the side panel shows:

- **The status**, for example "Near threshold", and the worst reading in plain numbers.
- **An AI Summary**, with two actions: "Chat about this" opens [[AI Chat]], and "Create a Query" starts a [[Query]].
- **A risk overview**: the current state, and what to consider before the next board meeting.
- **"For you"**: the same reading written for Morgan's role, for example as an independent board chair.
- **The appetite statement** and the key risk indicators behind the reading.

## How to read the chart

A spider chart (also called a radar chart) puts several measures on spokes from one center. Each measure becomes a point on its spoke, and lines join the points into a shape. The chart works best when it compares one shape against a target.

On the Wheel, the target is the risk appetite:

- **Risk appetite** is the type and amount of risk an organization accepts in pursuit of its goals. A board sets it in two parts: statements in words, and limits in numbers.
- **A key risk indicator (KRI)** is one of those numbers, for example "critical suppliers without a tested recovery plan". Each KRI has a threshold that the board sets.
- **Every reading is a share of its own threshold.** That puts different KRIs on one scale. The dashed line is the threshold at 100%. A point inside the line is within appetite. A point past it is over, and the zone past 100% is tinted.
- **The worst reading wins.** A topic shows its worst KRI, and a domain shows its worst topic, so one breach is never hidden by an average.

That is to say, the shape does not show how big a risk is. It shows how far each area is from the limit that the board agreed to.

## Time and the AI projection

Governance changes between meetings, so the Wheel has a time scale. The Governance History drawer under the chart steps through fixed stops: past quarters, "Last Board" and "Today". Each stop has a short summary, for example "2 of 8 over threshold: Supplier risk, Emerging risks. Biggest move: Emerging risks, up 50 points". Governance Playback plays the stops in order, as an animation.

After Today, the Wheel can show an AI projection of the next quarter. The projection has its own tab and its own look: a rainbow line and a "Q4 2026 (AI)" badge. The panel says that the values are "estimates from the trend, not evidence", and that Morgan can use the projection to plan an agenda but not to make a decision. ([[Say Which AI Said It]], [[Show What Isn't Known]])

![[x/Images/Toy Desgins/Mo-09-Nov Wheel AI projection.png|The AI projection on the Risk wheel. The reading line has a rainbow gradient, the center badge says Q4 2026 (AI), and the panel says the values are estimates from the trend, not evidence]]

## Tradeoffs

| For | Against |
| --- | --- |
| One shape shows every domain against its limit, so a breach is easy to see. | People read a spider chart by area and angle, which is less exact than position on a straight scale. A bar chart is more exact for one number. |
| The worst reading wins, so no breach is hidden. | The worst reading wins, so one KRI can make a whole domain look worse than it is. |
| A share of threshold puts different KRIs on one scale. | The scale depends on thresholds that the board sets. A loose threshold makes a risk look safe. |
| Spokes stay in fixed places, so Morgan learns where each domain is. | The order of the spokes changes the shape. Lines between neighbors suggest a relationship that does not exist. |
| Time stops show change between board meetings. | Guidance on spider charts warns against too many spokes. A domain with many topics is hard to read. |

## In the Governance Brain Toy

The [Governance Brain Toy](https://jacquesjnr.github.io/product-toybox/app/) has the Wheel as its second view, with example data for a company called Acme.Inc. The whole wheel has six domains: Finance, Risk, Audit, Remuneration, Legal and Compliance. Only the Risk domain has a full set of KRIs. "Chat about this" and "Create a Query" are visible but do not work yet.

The Wheel's domain chips are separate from the Graph's filters. The Graph can show several domains at once, but the Wheel shows the whole wheel or one domain.

## Still open

- Which measures the Wheel shows is not decided. Risk against appetite is one measure, and it is not certain that it is the most useful one for a board. Cost, readiness and execution time are possible others.
- The Wheel has six domains and the [[Governance Brain]] graph has seven. One list of domains for the whole product is not decided.
- How the AI reads a KRI out of a document, and how Morgan checks that reading against its source, is not specified.
- How the AI projection is calculated, and how far ahead it can go, is not specified.

## Sources

- [Governance Brain Toy](https://jacquesjnr.github.io/product-toybox/app/), live build, screenshots taken 9 Nov 2026
- [product-toybox](https://github.com/JacquesJnr/product-toybox), `app/src/wheel/` and `app/src/components/wheel-timeline.tsx`
- [Radar chart](https://en.wikipedia.org/wiki/Radar_chart), Wikipedia
- [Radar charts explained: when they work, when they fail](https://www.highcharts.com/blog/tutorials/radar-chart-explained-when-they-work-when-they-fail-and-how-to-use-them-right/), Highcharts
- [Avoid radar charts](https://observablehq.com/blog/avoid-radar-charts), Observable
- [Risk appetites and KRIs](https://www.icpak.com/wp-content/uploads/2021/12/ICPAK-Internal-Audit-Risk-Forensic-Conf-Risk-Apetites-and-KRIs_-Gladys.pdf), ICPAK, citing the COSO ERM framework (2017)
- [Key risk indicators and metrics management](https://riskonnect.com/reporting-analytics/key-risk-indicators-metrics-management/), Riskonnect
