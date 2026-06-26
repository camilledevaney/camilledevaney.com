// Ocean: the full-screen water background. A thin strip of air sits at the very
// top (the page's sky background shows through there); just below it the surface
// sloshes via three drifting wave layers, and the body of water fills the rest.
// Purely decorative — fixed, non-interactive. Animation lives in globals.css.

export default function Ocean() {
  return (
    <div className="ocean" aria-hidden>
      <div className="ocean__water" />
      <div className="ocean__surface">
        <div className="wave wave--back" />
        <div className="wave wave--mid" />
        <div className="wave wave--front" />
      </div>
    </div>
  );
}
