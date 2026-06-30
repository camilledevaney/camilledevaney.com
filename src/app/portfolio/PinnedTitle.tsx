// PinnedTitle: the big "VISUAL ART PORTFOLIO" title, pinned over the first piece
// and fading away as you scroll past it (City of Angels style). Listens to the
// portfolio's scroll container (.art) so it works with scroll-snap.
"use client";

import { useEffect, useRef } from "react";

export default function PinnedTitle({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let out = false; // hysteresis so it doesn't flicker at the threshold

    const update = () => {
      const y = window.scrollY;
      const h = window.innerHeight;
      if (!out && y > h * 0.5) {
        out = true;
        el.classList.add("is-out"); // scale-out-center
      } else if (out && y < h * 0.3) {
        out = false;
        el.classList.remove("is-out"); // scale-in-center again
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    // Wrapper handles fixed positioning + centering; the inner <h1> animates
    // freely (so the 3D slide animations don't fight the centering transform).
    <div className="art-h1-wrap">
      <h1 ref={ref} className="art-h1">
        {text}
      </h1>
    </div>
  );
}
