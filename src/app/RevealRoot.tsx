"use client";

import { useEffect, useRef } from "react";

// Wraps the page and reveals any [data-reveal] descendant as it scrolls into
// view. Marking the root "ready" from JS means the page degrades gracefully:
// without JS the content is simply shown, never stuck invisible.
export default function RevealRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const items = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    root.dataset.revealReady = "";

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      items.forEach((el) => {
        el.dataset.reveal = "in";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // Reveal when an element scrolls into view, and also if it has been
          // scrolled past (top above the viewport) — that covers fast flicks,
          // deep links, and browser scroll restoration, where the observer may
          // never report the element as intersecting.
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            (entry.target as HTMLElement).dataset.reveal = "in";
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
