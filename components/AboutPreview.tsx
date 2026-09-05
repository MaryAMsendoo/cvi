// components/AboutPreview.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";

const TIMELINE = [
  {
    year: "2025",
    label: "Became operational",
    detail: "Began programme work in Makurdi, Benue State",
  },
  {
    year: "Jun 2026",
    label: "Formally registered",
    detail: "Incorporated Trustee, CAC IT No. 9614146",
  },
];

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-24 sm:px-10">
      <SectionBackdrop variant="e" tone="light" />

      <div className="relative mx-auto grid max-w-6xl items-start gap-16 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3">
            <span className="h-6 w-1.5 rounded-full bg-accent" />
            <span className="text-sm font-medium text-foreground/60">
              About CVI
            </span>
          </div>

          <h2
            className="mt-5 text-3xl leading-tight text-foreground sm:text-4xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            Structural barriers, addressed at ground level
          </h2>

          <p className="mt-6 text-foreground/70">
            Citizens Voices International is a nonprofit based in Makurdi, Benue
            State, set up to address the structural barriers preventing young
            Nigerians — particularly in the Middle Belt — from accessing skills,
            opportunities, and platforms for sustainable livelihoods. We&rsquo;re
            governed by a lean, two-person board of trustees who remain directly
            involved in programme delivery, not a distant oversight body.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-surface transition-colors hover:bg-primary-strong"
            >
              Read our full story
            </Link>

            <Link
              href="/governance"
              className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-muted"
            >
              Governance &amp; transparency
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <div className="relative h-64 w-full overflow-hidden [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)] sm:h-80">
            <Image
              src="/img10.png"
              alt="CVI community programme"
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-10 space-y-8 border-l border-border pl-8">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.12,
                  ease: "easeOut",
                }}
                className="relative"
              >
                <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full border-2 border-primary bg-surface" />

                <div
                  className="text-sm text-primary-strong"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                  }}
                >
                  {t.year}
                </div>

                <div className="mt-0.5 text-base font-medium text-foreground">
                  {t.label}
                </div>

                <div className="text-sm text-foreground/60">
                  {t.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
