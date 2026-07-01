// Portfolio — Camille's visual art, styled after the City of Angels template:
// a centered single column on a tropical-wallpaper backdrop. "CAMILLE DEVANEY"
// is centered at the very top, then "VISUAL ART PORTFOLIO" spans nearly the full
// width on one line; below, each piece (image + blue title + text) fades/rises
// in on scroll. All copy/order lives in src/content.json under "portfolio".
//
// NOTE: the display font is var(--font-torsos). Until the real "BB Torsos Pro"
// file is added, it falls back to a stand-in (see globals.css / layout.tsx).

import type { Viewport } from "next";
import Link from "next/link";
import content from "@/content.json";
import PinnedTitle from "./PinnedTitle";
import Slideshow from "./Slideshow";

export const metadata = {
  title: "Visual Art Portfolio — Camille Devaney",
};

// Let the page (and the fixed tropical wallpaper) extend edge-to-edge under the
// iOS Safari UI, instead of Safari filling those areas with a flat gray.
export const viewport: Viewport = {
  viewportFit: "cover",
};

type Piece = { img: string; back?: string; title: string; text: string };

export default function Portfolio() {
  const { title, author, pieces } = content.portfolio as {
    title: string;
    author: string;
    pieces: Piece[];
  };
  const { links } = content;

  return (
    <main className="art">
      <div className="art-veil" aria-hidden />

      {/* Top menu: home (logo) on the left, socials on the right — all in red. */}
      <nav className="art-menu" aria-label="Portfolio menu">
        <Link href="/" className="art-menu-home" aria-label="Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/cbd-logo.png" alt="Home" className="cbd-logo" />
        </Link>
        <p className="art-menu-name">{author}</p>
        <div className="art-menu-nav">
          {/* Github, Linkedin — round red icon buttons */}
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="art-icon"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="art-icon-svg">
              <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.6 8.21 11.16.6.11.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.72-4.04-1.6-4.04-1.6-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.9-.02 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.29C24 5.78 18.63.5 12 .5z" />
            </svg>
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="art-icon"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="art-icon-svg">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Pinned title — fixed over the first piece, fades out as you scroll on */}
      <PinnedTitle text={title.toUpperCase()} />

      {/* Static image stage + scroll track — paintings crossfade as you scroll */}
      <Slideshow pieces={pieces} />
    </main>
  );
}
