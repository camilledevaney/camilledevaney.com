// Home — "Editorial Coastal" as an immersive seascape. All copy and links live
// in src/content.json so the text is easy to edit. The page is the scene: sky
// above the horizon, a solid ocean below it. The frameless portrait bleeds in
// full-height on the right (a cropped hero on mobile), the name is set on the
// sky, and on load the scene pulls focus while the type flips and rises in.

import { Fragment, type CSSProperties } from "react";
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
              className="name-enter mt-10 font-editorial text-[clamp(2.9rem,11.5vw,7.25rem)] leading-[0.9] tracking-[-0.015em] text-sky-ink"
              style={{ textShadow: "0 2px 22px rgba(16,46,78,0.30)" }}
            >
              <span className="name-line">{hero.nameLine1}</span>
              <span className="name-line">{hero.nameLine2}</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Lower content over the ocean — anchored just under the horizon */}
      <div className="relative z-10 flex flex-col lg:flex-1">
        <div className={`${PAD} pt-10 pb-12 lg:pt-[56vh] lg:pb-0`}>
          <div className="flex max-w-xl flex-col gap-7 lg:gap-8">
            <p className="scrim-navy lg:w-fit enter enter-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-sky-ink">
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

            <p className="scrim-navy lg:w-fit enter enter-4 text-[1.05rem] leading-relaxed text-sky-muted sm:text-[1.12rem]">
              {intro}
            </p>

            <div className="enter enter-5 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-4">
              {/* Resume + Portfolio pills — kept together on one row */}
              <div className="flex items-center gap-4">
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
              </div>

              {/* UCM, GitHub, LinkedIn, Calendly — icons on their own row */}
              <div className="flex items-center gap-3">
              <a
                href={links.ucm}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="United Capital Markets"
                className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full shadow-[0_18px_40px_-20px_rgba(8,24,40,0.75)] transition-colors duration-300 hover:bg-coral"
              >
                <span
                  aria-hidden
                  className="ic-knockout h-full w-full"
                  style={
                    {
                      "--glyph": "url(/ucm-logo.svg)",
                      "--glyph-size": "64%",
                    } as CSSProperties
                  }
                />
              </a>

              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full shadow-[0_18px_40px_-20px_rgba(8,24,40,0.75)] transition-colors duration-300 hover:bg-coral"
              >
                <span
                  aria-hidden
                  className="ic-knockout h-full w-full"
                  style={{ "--glyph": "url(/github.svg)" } as CSSProperties}
                />
              </a>

              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full shadow-[0_18px_40px_-20px_rgba(8,24,40,0.75)] transition-colors duration-300 hover:bg-coral"
              >
                <span
                  aria-hidden
                  className="ic-knockout h-full w-full"
                  style={{ "--glyph": "url(/linkedin.svg)" } as CSSProperties}
                />
              </a>

              <a
                href={links.calendly}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a meeting on Calendly"
                className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full shadow-[0_18px_40px_-20px_rgba(8,24,40,0.75)] transition-colors duration-300 hover:bg-coral"
              >
                <span
                  aria-hidden
                  className="ic-knockout h-full w-full"
                  style={{ "--glyph": "url(/calendly.svg)" } as CSSProperties}
                />
              </a>
              </div>
            </div>
          </div>
        </div>

        <footer className={`enter enter-6 ${PAD} pb-8 pt-4 lg:mt-auto`}>
          <div className="scrim-navy flex flex-col gap-y-2.5 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-sky-muted lg:inline-flex lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-6 lg:gap-y-2">
            {footer.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}
