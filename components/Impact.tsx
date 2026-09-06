"use client";

import { motion } from "motion/react";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";
import { StackedStoryCards } from "@/components/ui/StackedCards";

const HIGHLIGHTS = [
  { value: "57", label: "youths trained", detail: "Digital Skills Makurdi AI Bootcamp, June 2026" },
  { value: "1", label: "cohort completed", detail: "First cohort, foundational AI skills" },
  { value: "2026", label: "programme launched", detail: "CVI's first delivered training programme" },
];

const STORY_PLACEHOLDER = {
  headline:
    "Case studies and participant testimonials from the AI Bootcamp cohort are being collected and will be published here as they're confirmed with participants.",
  note: "Check back after our next reporting update, or contact us directly for early access to participant outcomes.",
};

// same placeholder duplicated 3x — just to test the stack motion, swap for real stories later
const STORY_CARDS = [
  { id: "story-1", ...STORY_PLACEHOLDER },
  { id: "story-2", ...STORY_PLACEHOLDER },
  { id: "story-3", ...STORY_PLACEHOLDER },
];

export default function Impact() {
  return (
    <>
      <section className="relative overflow-hidden bg-foreground px-6 py-20 sm:px-10">
        <SectionBackdrop variant="d" tone="dark" />
        <div className="relative mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="h-6 w-1.5 rounded-full bg-accent" />
            <span className="text-sm font-medium text-surface/60">Impact &amp; Results</span>
          </div>
          <h2
            className="mt-5 text-3xl leading-tight text-surface sm:text-4xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            What our first programme delivered
          </h2>
          <p className="mt-4 max-w-2xl text-surface/70">
            CVI is a young organization — our results to date come from a single
            completed programme. We&rsquo;d rather show that plainly than pad this
            page with numbers we can&rsquo;t stand behind.
          </p>
        </div>
      </section>

      {/* plain grid — the stack effect didn't suit stat cards */}
      <section className="relative overflow-hidden bg-background px-6 py-20 sm:px-10">
        <SectionBackdrop variant="c" tone="light" />
        <div className="relative mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="rounded-lg border border-border bg-surface p-7"
            >
              <div
                className="text-4xl text-primary-strong"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                {h.value}
              </div>
              <div className="mt-2 text-sm font-medium text-foreground">{h.label}</div>
              <div className="mt-1 text-xs text-foreground/55">{h.detail}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* stack test — same placeholder card x3, just to preview the motion */}
      <section className="relative overflow-hidden bg-surface-muted px-6 py-20 sm:px-10">
        <SectionBackdrop variant="e" tone="light" />
        <div className="relative mx-auto max-w-3xl">
          <h3
            className="text-center text-2xl text-foreground"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            Participant stories
          </h3>
          <div className="mt-26 md:mt-10">
            <StackedStoryCards cards={STORY_CARDS} />
          </div>
        </div>
      </section>
    </>
  );
}