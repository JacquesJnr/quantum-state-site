import { Darkmode } from "@quartz-community/darkmode"
import type { Root } from "hast"
import type { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, type FullSlug } from "../util/path"
import { htmlToJsx } from "../util/jsx"
import styles from "./styles/qsHome.scss"
// @ts-ignore Quartz's inline-script loader supplies the string at build time.
import script from "./scripts/qsHome.inline"

const Toggle = Darkmode() as unknown as QuartzComponent
const phrases = [
  "Your governance brain",
  "Make board decisions faster",
  "Governance made whole",
  "Visualize the control environment",
  "Trace every node",
  "Explore your governance vault",
  "See what matters",
]

// Published branch sublines can be updated here as their notes go live.
const branches = [
  { name: "Product", topics: "Mission • Vision • Features" },
  { name: "Design", topics: "Principles • Journey • Screens" },
  { name: "Tech", topics: "Models • Sovereignty • Cost" },
  { name: "Business", topics: "Customers • Competitors • Pricing" },
  { name: "Roadmap", topics: "Now • Next • Later" },
  { name: "MVP", topics: "App Map • Hosting • Data" },
]

const icons: Record<string, string> = {
  Product: "M200-80q-33 0-56.5-23.5T120-160v-451q-18-11-29-28.5T80-680v-120q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v120q0 23-11 40.5T840-611v451q0 33-23.5 56.5T760-80H200Zm0-520v440h560v-440H200Zm-40-80h640v-120H160v120Zm200 280h240v-80H360v80Zm120 20Z",
  Design: "m352-522 86-87-56-57-44 44-56-56 43-44-45-45-87 87 159 158Zm328 329 87-87-45-45-44 43-56-56 43-44-57-56-86 86 158 159Zm24-567 57 57-57-57ZM290-120H120v-170l175-175L80-680l200-200 216 216 151-152q12-12 27-18t31-6q16 0 31 6t27 18l53 54q12 12 18 27t6 31q0 16-6 30.5T816-647L665-495l215 215L680-80 465-295 290-120Zm-90-80h56l392-391-57-57-391 392v56Zm420-419-29-29 57 57-28-28Z",
  Tech: "M360-360v-240h240v240H360Zm80-80h80v-80h-80v80Zm-80 320v-80h-80q-33 0-56.5-23.5T200-280v-80h-80v-80h80v-80h-80v-80h80v-80q0-33 23.5-56.5T280-760h80v-80h80v80h80v-80h80v80h80q33 0 56.5 23.5T760-680v80h80v80h-80v80h80v80h-80v80q0 33-23.5 56.5T680-200h-80v80h-80v-80h-80v80h-80Zm320-160v-400H280v400h400ZM480-480Z",
  Business: "M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Zm400 360H600v80H360v-80H160v160h640v-160Zm-360 0h80v-80h-80v80Zm-280-80h200v-80h240v80h200v-200H160v200Zm320 40Z",
  Roadmap: "m600-120-240-84-186 72q-20 8-37-4.5T120-170v-560q0-13 7.5-23t20.5-15l212-72 240 84 186-72q20-8 37 4.5t17 33.5v560q0 13-7.5 23T812-192l-212 72Zm-40-98v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z",
  MVP: "m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm155-121.5q0-33.5 23-56.5t57-23q34 0 57 23t23 56.5q0 33.5-23 56.5t-57 23q-34 0-57-23t-23-56.5ZM565-220l84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z",
}

function Lockup({ root, small = false }: { root: string; small?: boolean }) {
  return (
    <a class={`qs-lockup${small ? " qs-lockup-small" : ""}`} href={root} aria-label="Quantum State, home">
      <span class="qs-mark">
        <img class="qs-mark-light" src={`${root}static/brand/mark-black.svg`} alt="" />
        <img class="qs-mark-dark" src={`${root}static/brand/mark-white.svg`} alt="" />
      </span>
      <img class="qs-slash" src={`${root}static/brand/slash.svg`} alt="" />
      <span class="qs-lockup-words">
        <span class="qs-lockup-title">Quantum State</span>
        <span class="qs-lockup-caption">Governance Intelligence</span>
      </span>
    </a>
  )
}

function Optic({ name }: { name: string }) {
  return (
    <svg class="qs-optic" viewBox="0 0 166 166" aria-hidden="true">
      <g class="qs-ring">
        <circle class="qs-rim" cx="83" cy="83" r="80" />
        <circle class="qs-ticks" cx="83" cy="83" r="73" />
      </g>
      <g class="qs-pair">
        <circle class="qs-state-a" cx="72" cy="70" r="33" />
        <circle class="qs-state-b" cx="93" cy="95" r="33" />
      </g>
      <svg class="qs-card-icon" x="68" y="68" width="30" height="30" viewBox="0 -960 960 960">
        <path d={icons[name]} />
      </svg>
    </svg>
  )
}

const QSHome: QuartzComponent = (props: QuartzComponentProps) => {
  if (props.fileData.slug !== "index") return null
  const root = "./"
  const published = new Set(props.allFiles.map((file) => file.slug))
  const hasBody = (props.tree as Root).children.length > 0
  return (
    <main class={`qs-home${hasBody ? " qs-has-body" : ""}`} id="qs-home">
      <div class="qs-marquee">
        <span class="qs-visually-hidden">{phrases.join(" • ")}</span>
        <div class="qs-marquee-track" aria-hidden="true">
          {/* six runs: half the track (3 runs, ~3900px) must outlast the widest screen */}
          {[0, 1, 2, 3, 4, 5].map(() => (
            <div class="qs-marquee-run">
              {phrases.map((phrase) => (
                <span>{phrase}<img src={`${root}static/brand/mark-white.svg`} alt="" /></span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div class="qs-home-wrap">
        <header class="qs-masthead">
          <Lockup root={root} />
          {/* The label names the theme you'd switch to; Quartz's own toggle sits invisibly on top. */}
          <div class="qs-home-mode">
            <Toggle {...props} />
            <span class="qs-mode-to-dark" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>Dark mode
            </span>
            <span class="qs-mode-to-light" aria-hidden="true">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>Light mode
            </span>
          </div>
        </header>
        <section class="qs-hero" aria-labelledby="qs-home-title">
          <h1 id="qs-home-title">Quantum State</h1>
          <p>Governance Intelligence</p>
        </section>
        <section class="qs-links" aria-labelledby="qs-links-title">
          <div class="qs-links-heading">
            <h2 id="qs-links-title">Quick Links</h2>
            <p>What would you like to learn about Quantum State?</p>
          </div>
          <ul class="qs-cards">
            {branches.map(({ name, topics }, index) => {
              // Branch homes sit beside their folder (Quantum State/Design.md → "design"), not inside it.
              const slug = name.toLowerCase() as FullSlug
              const live = published.has(slug)
              const target = live ? slug : ("not-written-yet" as FullSlug)
              return (
                <li style={{ "--qs-card-index": index }}>
                  <a class={`qs-card${live ? " is-live" : " is-soon"}`} href={resolveRelative(props.fileData.slug!, target)}>
                    <Optic name={name} />
                    <span class="qs-card-copy">
                      <span class="qs-card-title">{name}</span>
                      <span class="qs-card-topics">{name === "Product" || live ? topics : "Coming soon"}</span>
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </section>
        {hasBody && <section class="qs-home-body" aria-label="Mission and vision">
          <article class="popover-hint"><div class="markdown-preview-view markdown-rendered">
            {htmlToJsx(props.fileData.filePath!, props.tree)}
          </div></article>
        </section>}
        <footer class="qs-home-footer"><Lockup root={root} small /></footer>
      </div>
    </main>
  )
}

QSHome.css = styles
QSHome.afterDOMLoaded = script
export default (() => QSHome) satisfies QuartzComponentConstructor
