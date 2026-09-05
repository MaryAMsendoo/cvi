"use client";

import Image from "next/image";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";

const LOGOS = [
  { name: "Mandela Washington Fellows Alumni Association of Nigeria", src: "/madela.jpg" },
  { name: "Federal 3MTT Programme", src: "/3mtt.png" },
];

// Duplicated enough times to fill wide viewports without a visible gap in the loop
const TRACK = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

export default function Partners() {
  return (
    <section className="relative overflow-hidden bg-surface py-24">
      <SectionBackdrop variant="a" tone="light" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex items-center gap-3">
          <span className="h-6 w-1.5 rounded-full bg-accent" />
          <span className="text-sm font-medium text-foreground/60">Partners &amp; Supporters</span>
        </div>
        <h2
          className="mt-5 max-w-xl text-3xl leading-tight text-foreground sm:text-4xl"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
        >
          Who we work alongside
        </h2>
      </div>

      {/* Marquee — edge-faded, pauses on hover, scrolls left-to-right */}
      <div
        className="partners-marquee relative mt-14 w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="partners-marquee-track flex w-max items-center gap-16 py-2">
          {TRACK.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="relative h-14 w-40 shrink-0 transition-all duration-300 hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Context — logos alone don't tell a reviewer what the relationship is */}
      <div className="relative mx-auto mt-14 grid max-w-6xl gap-6 px-6 sm:grid-cols-2 sm:px-10">
        {LOGOS.map((logo) => (
          <div key={logo.name} className="border-l-2 border-primary/30 pl-4">
            <div
              className="text-sm text-foreground"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              {logo.name}
            </div>
            <p className="mt-1 text-xs text-foreground/55">
              {logo.name.includes("Mandela")
                ? "Sponsored the Digital Skills Makurdi AI Bootcamp, June 2026"
                : "Team members serve in national and state programme leadership roles"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}