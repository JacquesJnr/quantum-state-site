// Writes public/llms.txt from Quartz's content index, after `npx quartz build`.
import { readFileSync, writeFileSync } from "node:fs"

const base = "https://jacquesjnr.github.io/quantum-state-site"
const index = JSON.parse(readFileSync("public/static/contentIndex.json", "utf8"))
const pages = Object.values(index)
  .filter((p) => p.slug !== "not-written-yet" && !p.slug.endsWith("/index"))
  .sort((a, b) => (a.slug === "index" ? -1 : b.slug === "index" ? 1 : 0))

const blurb = (text) => {
  const s = text.replace(/\s+/g, " ").trim()
  return s.length > 160 ? s.slice(0, s.lastIndexOf(" ", 160)) + "…" : s
}
// Drop the page title when the text repeats it as its first words.
const body = (p) => {
  const t = p.content.trim()
  return t.startsWith(p.title) ? t.slice(p.title.length) : t
}
const line = (p) => `- [${p.title}](${base}/${p.slug === "index" ? "" : p.slug}): ${blurb(body(p))}`

const groups = [
  ["Main articles", (s) => !s.includes("/")],
  ["Features", (s) => s.startsWith("features/")],
  ["Principles and supporting articles", (s) => s.startsWith("extras/")],
]

let out = `# Quantum State

> Quantum State is a governance-intelligence platform for boards. It brings a company's governance material into one place, uses AI to map how it connects, and helps directors carry a question from the evidence to board-ready material. People validate and decide; AI reads, connects and proposes.

Every page is plain HTML and readable without JavaScript. The full text of every page, with titles, links and tags, is in one JSON file: ${base}/static/contentIndex.json

Diagrams carry descriptive alt text. Mermaid charts appear as their source code. The app map is a Figma board linked from the Product page.
`
for (const [name, test] of groups) {
  const list = pages.filter((p) => test(p.slug))
  if (list.length) out += `\n## ${name}\n\n${list.map(line).join("\n")}\n`
}
writeFileSync("public/llms.txt", out)
console.log(`llms.txt: ${pages.length} pages`)
