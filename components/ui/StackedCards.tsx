"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Clock } from "lucide-react";

export type StoryCard = {
  id: string;
  headline: string;
  note: string;
};

export function StackedStoryCards({ cards, interval = 4500 }: { cards: StoryCard[]; interval?: number }) {
  const [active, setActive] = useState(0);
  const length = cards.length;

  useEffect(() => {
    if (length <= 1) return;
    const id = setInterval(() => setActive((i) => (i + 1) % length), interval);
    return () => clearInterval(id);
  }, [length, interval]);

  function goTo(i: number) {
    setActive(((i % length) + length) % length);
  }

  return (
    <div className="relative px-8 sm:px-14">
      <div className="pointer-events-none absolute -left-1 top-6 hidden h-20 w-20 rounded-tl-3xl border-l-2 border-t-2 border-accent/50 sm:block" />
      <div className="pointer-events-none absolute -right-1 bottom-6 hidden h-20 w-20 rounded-br-3xl border-b-2 border-r-2 border-accent/50 sm:block" />

      <div className="relative flex h-[420px] items-center justify-center sm:h-[380px]">
        {cards.map((card, i) => {
          const offset = ((i - active + length) % length) as 0 | 1 | 2;
          const styles =
            offset === 0
              ? { x: 0, scale: 1, opacity: 1, zIndex: 30 }
              : offset === 1
              ? { x: 110, scale: 0.86, opacity: 0.35, zIndex: 20 }
              : { x: -110, scale: 0.86, opacity: 0.35, zIndex: 20 };

          return (
            <motion.div
              key={card.id}
              animate={styles}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute w-[90%] max-w-xl rounded-2xl border border-border bg-surface px-8 py-9 text-left shadow-2xl sm:px-11 sm:py-11"
              style={{ zIndex: styles.zIndex }}
            >
              <Quote className="h-9 w-9 text-primary/20" strokeWidth={1.5} fill="currentColor" />

              <p
                className="mt-5 text-left text-lg leading-relaxed text-foreground sm:text-xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                {card.headline}
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-border pt-6 text-left">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Clock className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Story pending</div>
                  <div className="text-xs text-accent">{card.note}</div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <button
        aria-label="Previous"
        onClick={() => goTo(active - 1)}
        className="absolute left-0 top-1/2 z-40 -translate-y-1/2 rounded-full border border-accent/40 bg-surface p-2.5 text-accent shadow-md transition-colors hover:bg-accent/10"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        aria-label="Next"
        onClick={() => goTo(active + 1)}
        className="absolute right-0 top-1/2 z-40 -translate-y-1/2 rounded-full border border-accent/40 bg-surface p-2.5 text-accent shadow-md transition-colors hover:bg-accent/10"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <div className="mt-10 flex items-center justify-center gap-2">
        {cards.map((card, i) => (
          <button
            key={card.id}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-accent" : "w-2 bg-border"}`}
          />
        ))}
      </div>
    </div>
  );
}