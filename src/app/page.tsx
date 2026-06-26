// Home page: Camille Devaney's professional site. Built from her résumé —
// institutional sales & trading, growth & marketing, builder & creative — and
// dressed in a little whimsy (the whole screen is water; she's a water polo
// national finalist, so it fits). Mockup content: edit any of it anytime.

import type { CSSProperties } from "react";
import RevealRoot from "./RevealRoot";
import Bubbles from "./Bubbles";
import Ocean from "./Ocean";

const delay = (ms: number): CSSProperties =>
  ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

const EMAIL = "camilledevaney7@gmail.com";
const PHONE = "(786) 879-9411";
const LINKEDIN = "https://www.linkedin.com/in/camille-devaney";

const stats = [
  { value: "61", label: "institutional accounts covered" },
  { value: "18", label: "age I passed the Series 7 & 63" },
  { value: "4 → 12", label: "headcount I grew with the firm" },
  { value: "2,000", label: "IG followers in under two weeks" },
];

const jobs = [
  {
    org: "United Capital Markets",
    role: "Sales & Trading Associate",
    place: "Miami, FL",
    dates: "Jun 2020 — Present",
    points: [
      "Cover 61 institutional accounts — hedge funds, insurance companies, asset managers — and own the daily offering sheet of distressed CMBS/ABS/RMBS securities.",
      "Led the firm-wide rollout of AI tooling, rebuilding a legacy Excel system into a dashboard CRM and trade database the desk runs on today.",
      "Produce the firm's 200+ attendee client events at the biannual CREFC conferences and train the summer intern class.",
    ],
  },
  {
    org: "United Real Estate Ventures",
    role: "Sales & Marketing — Luxury Real Estate",
    place: "Miami, FL",
    dates: "May 2026 — Present",
    points: [
      "Run full-funnel marketing for a $20M waterfront listing from a standing start — SEO, paid media, content, email, and social.",
      "Lead broker outreach and host open-house events to generate qualified demand; produce the listing's video and visual assets end to end.",
    ],
  },
  {
    org: "Gobi Labs — Find It & Gaggl",
    role: "Co-Founder & Chief Marketing Officer",
    place: "St. Louis, MO",
    dates: "Aug 2022 — Dec 2022",
    points: [
      "Co-founded Find It, a QR-enabled smart-sticker product, and won 1st place in the Olin Cup business-plan competition.",
      "As CMO of Gaggl, led a go-to-market launch to 920+ users and recruited a 30-person brand-ambassador team.",
    ],
  },
  {
    org: "Blythe Events",
    role: "Freelance Event Producer",
    place: "Key Biscayne, FL",
    dates: "2021 — Present",
    points: [
      "Produce corporate events and the “Rhythmic Blue” music festival series (250+ attendees) — managing the lineup, merch design, and promotion.",
    ],
  },
];

const services = [
  {
    title: "Sales & Business Development",
    body: "Institutional / B2B selling with a trader's instinct for the deal.",
    skills: [
      "Institutional sales",
      "CMBS / ABS / RMBS",
      "Fixed income",
      "Account management",
      "Pipeline",
    ],
  },
  {
    title: "Growth & Marketing",
    body: "Full-funnel growth that turns a standing start into real demand.",
    skills: [
      "Go-to-market",
      "SEO / SEM",
      "Paid media",
      "Content & social",
      "Event marketing",
    ],
  },
  {
    title: "Systems & AI",
    body: "I build the tools — dashboards, CRMs, and shipped web apps.",
    skills: [
      "Claude Code",
      "Next.js / Vercel",
      "CRM design",
      "Automation",
      "Bloomberg / Excel",
    ],
  },
];

const beyond = [
  {
    emoji: "🤽‍♀️",
    title: "Water polo",
    body: "2nd place at NCAA D3 National Club Championships, and a 3× Midwest Player of the Week. Deep water is home turf.",
  },
  {
    emoji: "🏆",
    title: "Olin Cup — 1st place",
    body: "Won WashU's school-wide business-plan competition with Find It.",
  },
  {
    emoji: "🎓",
    title: "Olin Business School",
    body: "B.S. — Finance & Marketing, minor in Environmental Analysis. GPA 3.69, Dean's List.",
  },
  {
    emoji: "🎶",
    title: "Festival producer",
    body: "Run the “Rhythmic Blue” series — 8-band lineups, 250+ attendees.",
  },
];

export default function Home() {
  return (
    <>
      <Ocean />
      <Bubbles />
      <RevealRoot>
        <main className="mx-auto w-full max-w-3xl px-6 pb-24 pt-24 text-muted sm:px-8 sm:pt-28">
          {/* Hero */}
          <header>
            <p
              data-reveal=""
              style={delay(0)}
              className="font-mono text-xs uppercase tracking-[0.22em] text-accent"
            >
              Miami, FL · Institutional Sales & Trading
            </p>
            <h1
              data-reveal=""
              style={delay(90)}
              className="mt-5 font-display text-5xl font-semibold leading-[1.04] tracking-tight text-ink sm:text-7xl"
            >
              Camille Devaney
            </h1>
            <p
              data-reveal=""
              style={delay(180)}
              className="mt-6 max-w-xl font-display text-2xl leading-snug text-ink sm:text-3xl"
            >
              I sell bonds, build brands, and ship software{" "}
              <span className="float-bob">🫧</span> — and I&rsquo;m just as
              comfortable in deep water.
            </p>
            <p
              data-reveal=""
              style={delay(260)}
              className="mt-6 max-w-xl text-lg leading-8"
            >
              Six years of institutional sales &amp; trading, a full-funnel
              marketer&rsquo;s playbook, and a builder who&rsquo;d rather fix the
              broken system than complain about it. Sales, growth, and creative —
              under one roof.
            </p>

            <div
              data-reveal=""
              style={delay(340)}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="/Camille-Devaney-Resume.pdf"
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-transform hover:-translate-y-0.5"
              >
                View résumé
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-[var(--accent-soft)]"
              >
                Say hello
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-ink underline decoration-1 underline-offset-4 transition-all hover:decoration-2"
              >
                LinkedIn ↗
              </a>
            </div>
          </header>

          {/* Stats */}
          <section className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                data-reveal=""
                style={delay(i * 70)}
                className="card px-4 py-5 text-center"
              >
                <div className="font-display text-3xl font-semibold text-ink">
                  {s.value}
                </div>
                <div className="mt-1.5 text-xs leading-5">{s.label}</div>
              </div>
            ))}
          </section>

          {/* Experience */}
          <section className="mt-24">
            <p
              data-reveal=""
              style={delay(0)}
              className="font-mono text-xs uppercase tracking-[0.22em] text-muted"
            >
              Experience
            </p>
            <div className="mt-8 space-y-5">
              {jobs.map((job, i) => (
                <article
                  key={job.org}
                  data-reveal=""
                  style={delay(i * 70)}
                  className="card p-6 sm:p-7"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-display text-xl font-medium text-ink">
                      {job.org}
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                      {job.dates}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-accent">
                    {job.role}{" "}
                    <span className="text-muted">· {job.place}</span>
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 leading-7">
                        <span className="select-none pt-1 text-xs text-accent">
                          ●
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* What I do */}
          <section className="mt-24">
            <p
              data-reveal=""
              style={delay(0)}
              className="font-mono text-xs uppercase tracking-[0.22em] text-muted"
            >
              What I do
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {services.map((svc, i) => (
                <div
                  key={svc.title}
                  data-reveal=""
                  style={delay(i * 90)}
                  className="card flex flex-col p-6"
                >
                  <h3 className="font-display text-lg font-medium leading-tight text-ink">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6">{svc.body}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {svc.skills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Beyond the desk */}
          <section className="mt-24">
            <p
              data-reveal=""
              style={delay(0)}
              className="font-mono text-xs uppercase tracking-[0.22em] text-muted"
            >
              Beyond the desk
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {beyond.map((b, i) => (
                <div
                  key={b.title}
                  data-reveal=""
                  style={delay(i * 70)}
                  className="card flex items-start gap-4 p-6"
                >
                  <span className="text-2xl leading-none">{b.emoji}</span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-ink">
                      {b.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section
            data-reveal=""
            style={delay(0)}
            className="mt-24 card p-8 text-center sm:p-10"
          >
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Let&rsquo;s make something <span className="wave-hand">👋</span>
            </h2>
            <p className="mx-auto mt-3 max-w-md leading-7">
              Hiring, collaborating, or just want to talk shop about markets,
              growth, or building with AI? I&rsquo;d love to hear from you.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
              <a
                href={`mailto:${EMAIL}`}
                className="font-medium text-accent underline decoration-1 underline-offset-4 hover:decoration-2"
              >
                {EMAIL}
              </a>
              <a
                href={`tel:${PHONE.replace(/[^\d]/g, "")}`}
                className="font-medium text-ink hover:text-accent"
              >
                {PHONE}
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink hover:text-accent"
              >
                LinkedIn ↗
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              Made in Miami · built with Claude &amp; Next.js 🌊
            </p>
          </footer>
        </main>
      </RevealRoot>
    </>
  );
}
