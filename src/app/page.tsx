// Home — "Editorial Coastal". A warm ivory canvas with a single terracotta
// accent. The golden-hour portrait (public/photos/hero.jpg) anchors the right
// of an asymmetric composition: the name sits top-left in the display serif,
// the positioning, intro, and links sit bottom-left. One quiet, deliberate
// screen. The professional side is the front door.

import Image from "next/image";
import hero from "../../public/photos/hero.jpg";

const RESUME = "/Camille-Devaney-Resume.pdf";
const EMAIL = "camilledevaney7@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/camille-devaney-0b51a41a6";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[90rem] flex-col px-6 sm:px-10 lg:px-16">
      {/* Top bar — wordmark + location, in the mono caption voice. */}
      <header
        className="reveal flex items-center justify-between gap-4 border-b border-line py-6 lg:py-7"
        style={{ animationDelay: "0.05s" }}
      >
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-ink">
          Camille Devaney
        </span>
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-muted">
          Portfolio
        </span>
      </header>

      {/* Hero — asymmetric editorial grid.
          Block order in the DOM (name, photo, the rest) is also the mobile
          stacking order, so the portrait reads as the anchor on a phone too. */}
      <section className="grid flex-1 grid-cols-1 gap-y-10 py-12 sm:gap-y-12 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:grid-rows-[auto_minmax(2.5rem,1fr)_auto] lg:gap-x-14 lg:gap-y-0 lg:py-10">
        {/* A — eyebrow + name (top-left) */}
        <div className="flex flex-col lg:col-start-1 lg:row-start-1 lg:self-start lg:pt-2">
          <p
            className="reveal flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-coral"
            style={{ animationDelay: "0.15s" }}
          >
            <span className="inline-block h-px w-7 bg-coral" aria-hidden />
            Operator · Miami, FL
          </p>
          <h1
            className="reveal mt-6 font-editorial text-[clamp(3.4rem,10vw,7.25rem)] leading-[0.9] tracking-[-0.015em] text-ink"
            style={{ animationDelay: "0.25s" }}
          >
            Camille
            <br />
            Devaney
          </h1>
        </div>

        {/* B — the centerpiece portrait, matted and framed */}
        <figure
          className="flex flex-col lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:items-end lg:justify-self-end lg:self-center"
          aria-labelledby="hero-caption"
        >
          <div className="reveal-image w-full max-w-[20rem] self-center rounded-[12px] bg-paper-2 p-2.5 shadow-[0_50px_90px_-42px_rgba(33,29,22,0.55)] ring-1 ring-line sm:max-w-[24rem] lg:max-w-[26rem] lg:self-end xl:max-w-[29rem]">
            <Image
              src={hero}
              alt="Camille Devaney smiling with her eyes closed and wind in her hair, on a boat at sea during golden hour, the deep blue ocean and a clear sky behind her."
              priority
              placeholder="blur"
              sizes="(min-width: 1280px) 29rem, (min-width: 1024px) 26rem, (min-width: 640px) 24rem, 80vw"
              className="h-auto w-full rounded-[6px]"
            />
          </div>
          <figcaption
            id="hero-caption"
            className="reveal mt-5 flex items-center gap-3 self-center font-mono text-[0.6rem] uppercase tracking-[0.26em] text-muted lg:self-end"
            style={{ animationDelay: "0.8s" }}
          >
            <span className="inline-block h-px w-6 bg-coral" aria-hidden />
            Busy watering my own grass
          </figcaption>
        </figure>

        {/* C — positioning, intro, links (bottom-left) */}
        <div className="flex max-w-xl flex-col gap-7 lg:col-start-1 lg:row-start-3 lg:self-end lg:pb-2">
          <p
            className="reveal flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink"
            style={{ animationDelay: "0.45s" }}
          >
            Institutional Sales &amp; Trading
            <span className="text-coral" aria-hidden>
              ·
            </span>
            Growth &amp; Marketing
            <span className="text-coral" aria-hidden>
              ·
            </span>
            Builder &amp; Creative
          </p>

          <p
            className="reveal text-[1.05rem] leading-relaxed text-muted sm:text-[1.12rem]"
            style={{ animationDelay: "0.55s" }}
          >
            I grow audiences and communities, and I build the data, systems, and
            AI that scale them. A marketer&rsquo;s instinct for what resonates, an
            operator&rsquo;s habit of shipping. From an institutional trading desk
            to leading my firm&rsquo;s move onto Claude Code, to a luxury listing
            and two startups grown from zero.
          </p>

          <div
            className="reveal flex flex-wrap items-center gap-x-7 gap-y-4"
            style={{ animationDelay: "0.65s" }}
          >
            <a
              href={RESUME}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-paper-2 transition-colors duration-300 hover:bg-coral"
            >
              Résumé
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="border-b border-line pb-1 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:border-coral hover:text-coral"
            >
              Email
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 border-b border-line pb-1 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:border-coral hover:text-coral"
            >
              LinkedIn
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Credits strip */}
      <footer
        className="reveal flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-line py-6 font-mono text-[0.6rem] uppercase tracking-[0.26em] text-muted"
        style={{ animationDelay: "0.75s" }}
      >
        <span>Licensed · SIE · Series 7 · Series 63</span>
        <span>WashU Olin · Finance &amp; Marketing</span>
        <span>© 2026 Camille Devaney</span>
      </footer>
    </main>
  );
}
