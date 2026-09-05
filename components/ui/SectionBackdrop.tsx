// components/ui/SectionBackdrop.tsx
type Variant = "a" | "b" | "c" | "d" | "e";
type Tone = "light" | "dark";

export function SectionBackdrop({
  variant = "a",
  tone = "light",
}: {
  variant?: Variant;
  tone?: Tone;
}) {
  const lineColor = tone === "dark" ? "var(--surface)" : "var(--foreground)";

  // a — thin outline circles + horizon line. Quiet, architectural.
  // Good behind photo-led sections (Programme Spotlight).
  if (variant === "a") {
    return (
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: tone === "dark" ? 0.12 : 0.14 }}
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="680" cy="80" r="180" fill="none" stroke={lineColor} strokeWidth="1.5" />
        <circle cx="680" cy="80" r="120" fill="none" stroke={lineColor} strokeWidth="1.5" />
        <circle cx="60" cy="520" r="140" fill="none" stroke={lineColor} strokeWidth="1.5" />
        {/* <line x1="0" y1="300" x2="800" y2="220" stroke={lineColor} strokeWidth="1" /> */}
      </svg>
    );
  }

  // b — layered soft mountain/foundation shapes in brand color.
  // Good behind stat or credibility-heavy sections ("built on solid ground").
  if (variant === "b") {
    return (
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: tone === "dark" ? 0.14 : 0.18 }}
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M0 480 L160 380 L340 460 L520 340 L680 420 L800 360 L800 600 L0 600 Z" fill="var(--primary)" />
        <path d="M0 520 L200 460 L400 520 L620 440 L800 500 L800 600 L0 600 Z" fill="var(--accent)" opacity="0.5" />
      </svg>
    );
  }

  // c — sparse dot grid, fading toward the edges.
  // Good behind numbers/data sections (Impact & Results) — reads precise, not decorative.
  if (variant === "c") {
    const dots = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 11; col++) {
        const x = 40 + col * 74;
        const y = 40 + row * 74;
        const distFromCenter = Math.hypot(col - 5, row - 3.5);
        const dotOpacity = Math.max(0.15, 1 - distFromCenter / 7);
        dots.push(
          <circle key={`${row}-${col}`} cx={x} cy={y} r="2" fill={lineColor} opacity={dotOpacity} />
        );
      }
    }
    return (
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: tone === "dark" ? 0.35 : 0.4 }}
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        {dots}
      </svg>
    );
  }

  // d — single flowing ribbon line, like a horizon or a path.
  // Good as a transition section between two blocks, or a quote/testimonial section.
  if (variant === "d") {
    return (
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: tone === "dark" ? 0.16 : 0.2 }}
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-20 200 C 160 120, 300 320, 480 220 S 760 100, 840 180"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2"
        />
        <path
          d="M-20 420 C 180 360, 320 520, 500 440 S 740 340, 840 400"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          opacity="0.7"
        />
      </svg>
    );
  }

  // e — scattered coordinate/marker crosses, sparse and architectural.
  // Good behind governance/map-like or list-heavy sections.
  const markers = [
    [90, 90], [720, 60], [660, 480], [40, 440], [400, 40], [780, 300], [200, 540],
  ];
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ opacity: tone === "dark" ? 0.16 : 0.2 }}
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
    >
      {markers.map(([x, y], i) => (
        <g key={i}>
          <line x1={x - 8} y1={y} x2={x + 8} y2={y} stroke={lineColor} strokeWidth="1.5" />
          <line x1={x} y1={y - 8} x2={x} y2={y + 8} stroke={lineColor} strokeWidth="1.5" />
        </g>
      ))}
    </svg>
  );
}