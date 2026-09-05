type Variant =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o";

type Tone = "light" | "dark";

export function SectionBackdrop({
  variant = "a",
  tone = "light",
}: {
  variant?: Variant;
  tone?: Tone;
}) {
  const line = tone === "dark" ? "var(--surface)" : "var(--foreground)";
  const primary = "var(--primary)";
  const accent = "var(--accent)";

  /*
   * EXISTING
   */

  if (variant === "a") {
    return (
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: tone === "dark" ? 0.12 : 0.14 }}
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle
          cx="680"
          cy="80"
          r="180"
          fill="none"
          stroke={line}
          strokeWidth="1.5"
        />
        <circle
          cx="680"
          cy="80"
          r="120"
          fill="none"
          stroke={line}
          strokeWidth="1.5"
        />
        <circle
          cx="60"
          cy="520"
          r="140"
          fill="none"
          stroke={line}
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  if (variant === "b") {
    return (
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: tone === "dark" ? 0.14 : 0.18 }}
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M0 480 L160 380 L340 460 L520 340 L680 420 L800 360 L800 600 L0 600 Z"
          fill={primary}
        />
        <path
          d="M0 520 L200 460 L400 520 L620 440 L800 500 L800 600 L0 600 Z"
          fill={accent}
          opacity="0.5"
        />
      </svg>
    );
  }

  if (variant === "c") {
    const dots = [];

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 11; col++) {
        const x = 40 + col * 74;
        const y = 40 + row * 74;
        const distance = Math.hypot(col - 5, row - 3.5);

        dots.push(
          <circle
            key={`${row}-${col}`}
            cx={x}
            cy={y}
            r="2"
            fill={line}
            opacity={Math.max(0.15, 1 - distance / 7)}
          />
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
          d="M-20 200 C160 120 300 320 480 220 S760 100 840 180"
          fill="none"
          stroke={primary}
          strokeWidth="2"
        />
        <path
          d="M-20 420 C180 360 320 520 500 440 S740 340 840 400"
          fill="none"
          stroke={accent}
          strokeWidth="1.5"
          opacity="0.7"
        />
      </svg>
    );
  }

  if (variant === "e") {
    const markers = [
      [90, 90],
      [720, 60],
      [660, 480],
      [40, 440],
      [400, 40],
      [780, 300],
      [200, 540],
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
            <line
              x1={x - 8}
              y1={y}
              x2={x + 8}
              y2={y}
              stroke={line}
              strokeWidth="1.5"
            />
            <line
              x1={x}
              y1={y - 8}
              x2={x}
              y2={y + 8}
              stroke={line}
              strokeWidth="1.5"
            />
          </g>
        ))}
      </svg>
    );
  }

  /*
   * NEW
   *
   * f — topographic contour map
   * A completely different visual language.
   * Good for: programmes, community, place-based work.
   */

  if (variant === "f") {
    const contours = [
      "M-60 420 C80 330 170 470 300 380 S520 250 860 330",
      "M-60 455 C80 365 170 505 300 415 S520 285 860 365",
      "M-60 490 C80 400 170 540 300 450 S520 320 860 400",
      "M-60 525 C80 435 170 575 300 485 S520 355 860 435",
      "M-60 560 C80 470 170 610 300 520 S520 390 860 470",
    ];

    return (
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: tone === "dark" ? 0.1 : 0.1 }}
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        {contours.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke={i === 2 ? accent : line}
            strokeWidth={i === 2 ? "1.5" : "1"}
          />
        ))}
      </svg>
    );
  }

  /*
   * g — architectural perspective grid
   * Feels like a civic/institutional drawing rather than decoration.
   */

  if (variant === "g") {
    const verticals = [100, 220, 340, 460, 580, 700];

    return (
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: tone === "dark" ? 0.09 : 0.08 }}
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M0 430 L400 260 L800 430"
          fill="none"
          stroke={primary}
          strokeWidth="1.5"
        />

        <path
          d="M0 480 L400 310 L800 480"
          fill="none"
          stroke={line}
          strokeWidth="1"
        />

        <path
          d="M0 530 L400 360 L800 530"
          fill="none"
          stroke={line}
          strokeWidth="1"
        />

        {verticals.map((x) => (
          <line
            key={x}
            x1="400"
            y1="260"
            x2={x}
            y2="600"
            stroke={line}
            strokeWidth="1"
          />
        ))}

        <circle cx="400" cy="260" r="4" fill={accent} />
      </svg>
    );
  }

  /*
   * h — offset registration frame
   * Inspired by editorial printing / document layout.
   */

  if (variant === "h") {
    return (
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: tone === "dark" ? 0.11 : 0.1 }}
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect
          x="520"
          y="80"
          width="210"
          height="300"
          fill="none"
          stroke={line}
          strokeWidth="1"
        />

        <rect
          x="550"
          y="110"
          width="210"
          height="300"
          fill="none"
          stroke={accent}
          strokeWidth="1.5"
        />

        <path
          d="M505 80 H535 M520 65 V95"
          stroke={primary}
          strokeWidth="1"
        />

        <path
          d="M730 380 H760 M745 365 V395"
          stroke={primary}
          strokeWidth="1"
        />

        <line
          x1="550"
          y1="145"
          x2="730"
          y2="145"
          stroke={line}
          strokeWidth="1"
        />

        <line
          x1="550"
          y1="175"
          x2="690"
          y2="175"
          stroke={line}
          strokeWidth="1"
        />
      </svg>
    );
  }

  /*
   * i — abstract geographic blocks
   * Suggests territory, communities and regions without literally
   * drawing a map of Benue.
   */

  if (variant === "i") {
    return (
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: tone === "dark" ? 0.1 : 0.09 }}
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M520 80 L680 60 L760 170 L700 270 L570 240 L500 150 Z"
          fill={primary}
          opacity="0.35"
        />

        <path
          d="M600 270 L730 220 L800 320 L740 450 L600 410 L550 330 Z"
          fill={accent}
          opacity="0.28"
        />

        <path
          d="M430 330 L560 280 L610 390 L520 500 L390 450 Z"
          fill="none"
          stroke={line}
          strokeWidth="1.5"
        />

        <path
          d="M500 150 L600 270 M570 240 L520 330 M700 270 L740 450"
          fill="none"
          stroke={line}
          strokeWidth="1"
        />
      </svg>
    );
  }

  /*
   * j — radial civic seal
   * Feels institutional without becoming a logo.
   */

  if (variant === "j") {
    return (
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: tone === "dark" ? 0.1 : 0.09 }}
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle
          cx="650"
          cy="300"
          r="150"
          fill="none"
          stroke={line}
          strokeWidth="1"
        />

        <circle
          cx="650"
          cy="300"
          r="115"
          fill="none"
          stroke={primary}
          strokeWidth="1.5"
        />

        <circle
          cx="650"
          cy="300"
          r="65"
          fill="none"
          stroke={accent}
          strokeWidth="1.5"
        />

        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const x1 = 650 + Math.cos(angle) * 150;
          const y1 = 300 + Math.sin(angle) * 150;
          const x2 = 650 + Math.cos(angle) * 165;
          const y2 = 300 + Math.sin(angle) * 165;

          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={line}
              strokeWidth="1"
            />
          );
        })}

        <circle cx="650" cy="300" r="5" fill={accent} />
      </svg>
    );
  }

  /*
   * k — editorial column lines
   * Good for: About / history / long-form content.
   */

  if (variant === "k") {
    return (
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: tone === "dark" ? 0.07 : 0.065 }}
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        {[80, 210, 340, 470, 600, 730].map((x, i) => (
          <g key={x}>
            <line
              x1={x}
              y1="0"
              x2={x}
              y2="600"
              stroke={i === 3 ? accent : line}
              strokeWidth={i === 3 ? "1.5" : "1"}
            />

            <line
              x1={x - 8}
              y1="80"
              x2={x + 8}
              y2="80"
              stroke={line}
              strokeWidth="1"
            />

            <line
              x1={x - 8}
              y1="520"
              x2={x + 8}
              y2="520"
              stroke={line}
              strokeWidth="1"
            />
          </g>
        ))}
      </svg>
    );
  }

  /*
   * l — constellation / civic network
   * Different from the existing dot grid because the nodes form
   * an intentional network.
   */

  if (variant === "l") {
    const nodes = [
      [100, 160],
      [260, 100],
      [430, 180],
      [610, 120],
      [720, 260],
      [560, 360],
      [370, 300],
      [180, 380],
      [300, 500],
      [500, 500],
    ];

    const links = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [1, 6],
      [2, 6],
      [6, 7],
      [6, 5],
      [5, 4],
      [7, 8],
      [8, 9],
      [5, 9],
    ];

    return (
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: tone === "dark" ? 0.12 : 0.1 }}
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        {links.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            stroke={line}
            strokeWidth="1"
          />
        ))}

        {nodes.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i === 6 ? 6 : 3}
            fill={i === 6 ? accent : primary}
          />
        ))}
      </svg>
    );
  }

  /*
   * m — layered paper/document planes
   * Excellent for governance, transparency and institutional pages.
   */

  if (variant === "m") {
    return (
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: tone === "dark" ? 0.1 : 0.09 }}
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect
          x="470"
          y="100"
          width="220"
          height="300"
          fill="none"
          stroke={line}
          strokeWidth="1"
          transform="rotate(-8 470 100)"
        />

        <rect
          x="500"
          y="130"
          width="220"
          height="300"
          fill="none"
          stroke={primary}
          strokeWidth="1.5"
          transform="rotate(4 500 130)"
        />

        <rect
          x="530"
          y="160"
          width="220"
          height="300"
          fill="none"
          stroke={accent}
          strokeWidth="1"
          transform="rotate(12 530 160)"
        />

        <line
          x1="565"
          y1="225"
          x2="700"
          y2="225"
          stroke={line}
          strokeWidth="1"
        />

        <line
          x1="560"
          y1="250"
          x2="680"
          y2="250"
          stroke={line}
          strokeWidth="1"
        />
      </svg>
    );
  }

  /*
   * n — coordinate arc
   * Good for: programmes, location, growth and forward movement.
   */

  if (variant === "n") {
    return (
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: tone === "dark" ? 0.11 : 0.1 }}
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M70 500 A350 350 0 0 1 730 120"
          fill="none"
          stroke={primary}
          strokeWidth="1.5"
        />

        <path
          d="M130 520 A300 300 0 0 1 700 180"
          fill="none"
          stroke={line}
          strokeWidth="1"
        />

        <path
          d="M210 540 A240 240 0 0 1 650 230"
          fill="none"
          stroke={accent}
          strokeWidth="1.5"
        />

        <circle cx="70" cy="500" r="4" fill={accent} />
        <circle cx="730" cy="120" r="4" fill={primary} />
      </svg>
    );
  }

  /*
   * o — woven structure
   * A subtle representation of people, systems and relationships.
   */

  const strands = [];

  for (let i = 0; i < 7; i++) {
    const y = 100 + i * 70;

    strands.push(
      <path
        key={`h-${i}`}
        d={`M-50 ${y} C140 ${y - 80} 250 ${y + 80} 430 ${y} S700 ${y - 80} 850 ${y}`}
        fill="none"
        stroke={i === 3 ? accent : line}
        strokeWidth={i === 3 ? "1.5" : "1"}
      />
    );
  }

  for (let i = 0; i < 6; i++) {
    const x = 100 + i * 120;

    strands.push(
      <path
        key={`v-${i}`}
        d={`M${x} -50 C${x - 80} 140 ${x + 80} 250 ${x} 430 S${x - 80} 700 ${x} 650`}
        fill="none"
        stroke={primary}
        strokeWidth="1"
        opacity="0.7"
      />
    );
  }

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ opacity: tone === "dark" ? 0.08 : 0.07 }}
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
    >
      {strands}
    </svg>
  );
}