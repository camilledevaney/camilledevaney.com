// ScrollReveal: watches any descendant marked with [data-reveal] and adds the
// `is-in` class the first time it scrolls into view, so it fades + rises into
// place (the motion lives in globals.css). Mirrors the template's scroll feel.
// Falls back to fully visible if JS or IntersectionObserver is unavailable.
"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const targets = Array.from(
      el.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("is-in"));
      return;
    }

    // Mark them hidden first, then reveal as they enter the viewport.
    targets.forEach((t) => t.classList.add("reveal-ready"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return <div ref={root}>{children}</div>;
}
