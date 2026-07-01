// Slideshow: a PAGED crossfade gallery. The image stage is static (centered,
// never moves); one scroll gesture — or one Arrow / Page key press — advances
// exactly one painting, crossfading to it. A tall invisible "track" keeps the
// page scrollable (so the red scrollbar reflects position and can be dragged),
// but the wheel is taken over so scroll *intensity* can never skip slides.
"use client";

import { useEffect, useRef, useState } from "react";

type Piece = { img: string; back?: string; title: string; text: string };

const withComma = (t: string) => (/[.,!?;:]$/.test(t) ? t : `${t},`);

export default function Slideshow({ pieces }: { pieces: Piece[] }) {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  useEffect(() => {
    const n = pieces.length;
    if (n === 0) return;

    const maxScroll = () =>
      Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

    // Painting i lives at scrollY = i / (n-1) of the track, so the scrollbar
    // lands in the right spot and dragging it stays in sync. Jump instantly:
    // a *smooth* programmatic scroll gets cancelled by the wheel input, and the
    // crossfade already carries the visual transition.
    let selfScroll = false; // true briefly while WE move the page
    const scrollToIndex = (i: number) => {
      selfScroll = true;
      window.scrollTo(0, (i / Math.max(1, n - 1)) * maxScroll());
      window.setTimeout(() => {
        selfScroll = false;
      }, 120);
    };

    const go = (dir: number) => {
      const next = Math.max(0, Math.min(n - 1, activeRef.current + dir));
      if (next === activeRef.current) return;
      activeRef.current = next;
      setActive(next); // drives the crossfade immediately
      scrollToIndex(next); // moves the scrollbar to match
    };

    // Wheel: step once per swipe, tuned so a long continuous swipe still counts
    // as ONE. When armed and the speed jumps up sharply, we step and disarm,
    // tracking that gesture's peak speed. We only re-arm once the speed has
    // clearly *wound down* — fallen well below the gesture's peak (a finger lift
    // / momentum tail) or after a pause. So mid-swipe speed wobble can't re-fire,
    // but a distinct second swipe (after a slowdown) still registers.
    const RISE = 1.6; // event must be this many× the last to start a new step
    const REARM = 0.3; // must fall to this fraction of the gesture's peak to re-arm
    const PAUSE = 150; // ms gap that always readies the next step
    let lastTime = 0;
    let lastAbs = 0;
    let peak = 0;
    let armed = true;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault(); // take over scrolling entirely
      const abs = Math.abs(e.deltaY);
      if (abs < 2) return;
      const now = Date.now();
      const gap = now - lastTime;
      lastTime = now;
      if (gap > PAUSE) armed = true;
      if (armed && abs > lastAbs * RISE + 2) {
        go(e.deltaY > 0 ? 1 : -1);
        armed = false;
        peak = abs;
      } else if (!armed) {
        if (abs > peak) peak = abs;
        if (abs < peak * REARM) armed = true; // wound down => ready for the next
      }
      lastAbs = abs;
    };

    // Keys: one step per press; holding repeats at a calm rate.
    let keyGuard = false;
    const onKey = (e: KeyboardEvent) => {
      let dir = 0;
      if (e.key === "ArrowDown" || e.key === "PageDown") dir = 1;
      else if (e.key === "ArrowUp" || e.key === "PageUp") dir = -1;
      else return;
      e.preventDefault();
      if (keyGuard) return;
      go(dir);
      keyGuard = true;
      window.setTimeout(() => {
        keyGuard = false;
      }, 220);
    };

    // Dragging the scrollbar (a scroll we didn't initiate) snaps to the nearest
    // painting. Ignored while we're moving the page ourselves.
    let raf = 0;
    const onScroll = () => {
      if (selfScroll) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const idx = Math.max(
          0,
          Math.min(
            n - 1,
            Math.round((window.scrollY / maxScroll()) * (n - 1)),
          ),
        );
        if (idx !== activeRef.current) {
          activeRef.current = idx;
          setActive(idx);
        }
      });
    };

    // Touch (phones): swipe up/down = next/prev painting. The fixed full-screen
    // stage makes native touch-scrolling unreliable, so we drive paging from the
    // swipe itself and lock the page from scrolling underneath.
    let touchY: number | null = null;
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      // Lock native scrolling from the FIRST move — iOS ignores preventDefault
      // if it has already started scrolling. The swipe drives paging instead.
      if (touchY !== null) e.preventDefault();
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (touchY === null) return;
      const endY = e.changedTouches[0] ? e.changedTouches[0].clientY : touchY;
      const dy = touchY - endY;
      touchY = null;
      if (Math.abs(dy) < 40) return; // ignore taps / tiny drags
      go(dy > 0 ? 1 : -1); // swipe up => next painting
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
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
            <figcaption
              className={`art-cap${p.title.length > 70 ? " is-long" : ""}`}
            >
              <span className="art-title">{withComma(p.title)}</span>{" "}
              <span className="art-text">{p.text}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Scroll track — empty height that keeps the page scrollable (one screen
          per painting) so the scrollbar reflects position. */}
      <div
        className="art-track"
        style={{ height: `${pieces.length * 100}vh` }}
        aria-hidden
      />
    </>
  );
}
