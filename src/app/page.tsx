// Home — "Editorial Coastal" as an immersive seascape. All copy and links live
// in src/content.json so the text is easy to edit. The page is the scene: sky
// above the horizon, a solid ocean below it. The frameless portrait bleeds in
// full-height on the right (a cropped hero on mobile), the name is set on the
// sky, and on load the scene pulls focus while the type flips and rises in.

import { Fragment } from "react";
import Link from "next/link";
import content from "@/content.json";

const PAD = "mx-auto w-full max-w-[90rem] px-6 sm:px-10 lg:px-16";

export default function Home() {
  const { hero, roles, intro, links, footer } = content;

  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden">
      {/* The scene + the name on the sky. */}
      <div className="hero-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={hero.image} alt={hero.imageAlt} className="hero-photo" />
        <div className="hero-scrim" aria-hidden />

        <div className="masthead absolute inset-x-0 top-[3.5rem] z-20 sm:top-[4.5rem] lg:top-[7.5rem]">
          <div className={PAD}>
            <p className="enter-eyebrow flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-sky-ink">
              <span className="rule-draw inline-block h-px w-7 bg-coral" aria-hidden />
              {hero.eyebrow}
            </p>
            <h1
              className="name-enter mt-6 font-editorial text-[clamp(2.9rem,11.5vw,7.25rem)] leading-[0.9] tracking-[-0.015em] text-sky-ink"
              style={{ textShadow: "0 2px 22px rgba(16,46,78,0.30)" }}
            >
              <span className="name-line">{hero.nameLine1}</span>
              <span className="name-line">{hero.nameLine2}</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Lower content over the ocean */}
      <div className="relative z-10 flex flex-col lg:flex-1 lg:justify-end">
        <div className={`${PAD} pt-10 pb-12 lg:pt-0 lg:pb-0`}>
          <div className="flex max-w-xl flex-col gap-7 lg:pb-12">
            <p className="enter enter-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-sky-ink">
              {roles.map((role, i) => (
                <Fragment key={role}>
                  {i > 0 && (
                    <span className="text-coral" aria-hidden>
                      ·
                    </span>
                  )}
                  <span>{role}</span>
                </Fragment>
              ))}
            </p>

            <p className="enter enter-4 text-[1.05rem] leading-relaxed text-sky-muted sm:text-[1.12rem]">
              {intro}
            </p>

            <div className="enter enter-5 flex flex-wrap items-center gap-x-5 gap-y-4">
              <a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink shadow-[0_18px_40px_-20px_rgba(8,24,40,0.75)] transition-colors duration-300 hover:bg-coral hover:text-paper"
              >
                Resume
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>

              <Link
                href={links.portfolio}
                className="group inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink shadow-[0_18px_40px_-20px_rgba(8,24,40,0.75)] transition-colors duration-300 hover:bg-coral hover:text-paper"
              >
                Portfolio
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </Link>

              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-sky-ink transition-colors duration-300 hover:border-coral hover:text-coral"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5">
                  <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.6 8.21 11.16.6.11.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.72-4.04-1.6-4.04-1.6-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.9-.02 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.29C24 5.78 18.63.5 12 .5z" />
                </svg>
              </a>

              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-sky-ink transition-colors duration-300 hover:border-coral hover:text-coral"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>

              <a
                href={links.calendly}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a meeting on Calendly"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-sky-ink transition-colors duration-300 hover:border-coral hover:text-coral"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5">
                  <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <footer
          className={`enter enter-6 ${PAD} flex flex-col gap-y-2.5 pb-8 pt-4 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-sky-muted lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-6 lg:gap-y-2`}
        >
          {footer.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </footer>
      </div>
    </main>
  );
}
