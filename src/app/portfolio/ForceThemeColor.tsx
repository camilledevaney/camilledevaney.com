// iOS Safari often ignores a page's theme-color on the FIRST cold paint (the top
// bar shows a stale/default gray until you revisit). Safari only re-tints the bar
// when the meta's value actually CHANGES — so on load we nudge it to an
// imperceptibly different color and set it back on the next frame, which forces
// the re-read. Also re-applied on `pageshow` (back/forward / bfcache restores).
"use client";

import { useEffect } from "react";

const COLOR = "#dae9ef";
const NUDGE = "#dae9ee"; // one hex digit off — visually identical, but a real change

export default function ForceThemeColor() {
  useEffect(() => {
    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]',
    );
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    const el = meta;

    const apply = () => {
      el.setAttribute("content", NUDGE);
      requestAnimationFrame(() => el.setAttribute("content", COLOR));
    };

    apply();
    const t = window.setTimeout(apply, 200); // catch slow first paints
    window.addEventListener("pageshow", apply);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("pageshow", apply);
    };
  }, []);

  return null;
}
