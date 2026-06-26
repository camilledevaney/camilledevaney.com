// Bubbles: a soft, ambient layer of translucent circles that drift gently up
// the page in the background. Purely decorative — sits behind all content,
// ignores clicks, and uses the site's ember accent so it stays on-palette.
// No client JS needed; the float is pure CSS (see .bubble in globals.css).

import type { CSSProperties } from "react";

// A hand-tuned set so the drift feels organic rather than uniform. Each bubble
// gets a horizontal position, size, speed, head-start, sway distance, and a
// gentle max opacity. Deterministic on purpose (no randomness) so the layout is
// stable and calm.
const bubbles = [
  { left: "8%", size: 46, duration: 26, delay: 0, drift: 18, opacity: 0.5 },
  { left: "20%", size: 22, duration: 19, delay: 6, drift: -14, opacity: 0.45 },
  { left: "33%", size: 64, duration: 32, delay: 11, drift: 24, opacity: 0.4 },
  { left: "46%", size: 30, duration: 22, delay: 3, drift: -20, opacity: 0.5 },
  { left: "58%", size: 52, duration: 28, delay: 14, drift: 16, opacity: 0.42 },
  { left: "69%", size: 18, duration: 17, delay: 8, drift: 22, opacity: 0.5 },
  { left: "80%", size: 40, duration: 24, delay: 2, drift: -18, opacity: 0.45 },
  { left: "90%", size: 28, duration: 20, delay: 10, drift: 14, opacity: 0.48 },
  { left: "14%", size: 16, duration: 15, delay: 13, drift: -12, opacity: 0.5 },
  { left: "62%", size: 24, duration: 21, delay: 5, drift: -16, opacity: 0.46 },
];

export default function Bubbles() {
  return (
    <div className="bubbles" aria-hidden>
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={
            {
              left: b.left,
              "--bubble-size": `${b.size}px`,
              "--bubble-duration": `${b.duration}s`,
              "--bubble-delay": `${b.delay}s`,
              "--bubble-drift": `${b.drift}px`,
              "--bubble-opacity": b.opacity,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
