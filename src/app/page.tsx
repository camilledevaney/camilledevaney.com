// Home page — single screen, no scroll. Tropical wallpaper background (set in
// globals.css), the name in script at the top, and a right-anchored cluster
// holding the conveyor of photos beside the profile photo.

import Conveyor from "./Conveyor";

export default function Home() {
  return (
    <main className="stage">
      <h1 className="name">Camille Devaney</h1>
      <div className="cluster">
        <Conveyor />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/profile.jpg"
          alt="Camille Devaney"
          className="profile"
        />
      </div>
    </main>
  );
}
