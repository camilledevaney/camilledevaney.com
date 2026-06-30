// Slideshow: a scroll-driven crossfade gallery. The image stage is static
// (centered, never moves); scrolling advances which painting + caption is shown,
// crossfading smoothly to the next. A tall invisible "track" provides the scroll
// distance (one screen per piece). No scroll-snap.
"use client";

import { useEffect, useState } from "react";

type Piece = { img: string; back?: string; title: string; text: string };

const withComma = (t: string) => (/[.,!?;:]$/.test(t) ? t : `${t},`);

export default function Slideshow({ pieces }: { pieces: Piece[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const p = max > 0 ? window.scrollY / max : 0;
        const idx = Math.max(
          0,
          Math.min(pieces.length - 1, Math.floor(p * pieces.length + 1e-4)),
        );
        setActive(idx);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pieces.length]);

  return (
    <>
      {/* Static stage — every painting stacked in the same spot; only the active
          one is shown, crossfading between them. */}
      <div className="art-stage">
        {pieces.map((p, i) => (
          <figure
            className={`art-slide${i === active ? " is-active" : ""}`}
            key={p.img}
            aria-hidden={i !== active}
          >
            <div className={`art-figwrap${p.back ? " has-back" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={p.title}
                className="art-img art-front"
                loading={i < 2 ? "eager" : "lazy"}
              />
              {p.back ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.back}
                  alt={`${p.title} (reverse)`}
                  className="art-img art-back"
                  loading="lazy"
                />
              ) : null}
            </div>
            <figcaption className="art-cap">
              <span className="art-title">{withComma(p.title)}</span>{" "}
              <span className="art-text">{p.text}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Scroll track — empty height that gives the scroll distance (≈ one
          screen per painting). */}
      <div
        className="art-track"
        style={{ height: `${pieces.length * 100}svh` }}
        aria-hidden
      />
    </>
  );
}
