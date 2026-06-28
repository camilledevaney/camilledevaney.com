// Conveyor: the center column of personal photos that drifts downward forever.
// All photos share the same width (heights vary naturally). The list is rendered
// twice back-to-back; the CSS animation slides the track down by exactly one copy
// and loops, so the belt is seamless. Decorative — hidden from screen readers.

const photos = [
  "/conveyor/headshot.jpg",
  "/conveyor/sunset.jpg",
  "/conveyor/cliff.jpg",
  "/conveyor/spearfishing.jpg",
  "/conveyor/waterfall.jpg",
  "/conveyor/china.jpg",
  "/conveyor/smiling.jpg",
  "/conveyor/adventure.jpg",
];

export default function Conveyor() {
  return (
    <div className="conveyor" aria-hidden>
      <div className="conveyor__track">
        {[...photos, ...photos].map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={src} alt="" className="conveyor__img" />
        ))}
      </div>
    </div>
  );
}
