// components/ui/StackedGallery.tsx

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
};

export function StackedGallery({
  images,
  interval = 3800,
}: {
  images: GalleryImage[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);
  const length = images.length;

  useEffect(() => {
    if (length <= 1) return;
    const id = setInterval(() => setActive((i) => (i + 1) % length), interval);
    return () => clearInterval(id);
  }, [length, interval]);

  function goTo(i: number) {
    setActive(((i % length) + length) % length);
  }

  // Get the previous and next indices
  const prevIndex = (active - 1 + length) % length;
  const nextIndex = (active + 1) % length;

  return (
    <div className="relative px-8 sm:px-16">
      <div className="pointer-events-none absolute -left-1 top-4 hidden h-16 w-16 rounded-tl-3xl border-l-2 border-t-2 border-accent/50 sm:block" />
      <div className="pointer-events-none absolute -right-1 bottom-4 hidden h-16 w-16 rounded-br-3xl border-b-2 border-r-2 border-accent/50 sm:block" />

      <div className="relative flex h-[340px] items-center justify-center sm:h-[440px]">
        {images.map((img, i) => {
          // Determine the position of each image relative to active
          let offset: 0 | 1 | 2 | -1 = 0;
          let styles;

          if (i === active) {
            offset = 0;
            styles = { x: 0, scale: 1, opacity: 1, zIndex: 30, rotate: 0 };
          } else if (i === nextIndex) {
            offset = 1;
            styles = { x: 150, scale: 0.85, opacity: 0.5, zIndex: 20, rotate: 4 };
          } else if (i === prevIndex) {
            offset = 2;
            styles = { x: -150, scale: 0.85, opacity: 0.5, zIndex: 20, rotate: -4 };
          } else {
            // Hide all other images
            styles = { x: 0, scale: 0.7, opacity: 0, zIndex: 0, rotate: 0 };
          }

          return (
            <motion.div
              key={img.id}
              animate={styles}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute aspect-[4/3] w-[85%] max-w-xl overflow-hidden rounded-2xl border-4 border-surface shadow-2xl sm:w-[75%]"
              style={{ zIndex: styles.zIndex }}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
              {img.caption && i === active && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent px-5 pb-4 pt-10">
                  <p className="text-sm text-surface/90">{img.caption}</p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <button
        aria-label="Previous photo"
        onClick={() => goTo(active - 1)}
        className="absolute left-0 top-1/2 z-40 -translate-y-1/2 rounded-full border border-accent/40 bg-surface p-2.5 text-accent shadow-md transition-colors hover:bg-accent/10"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        aria-label="Next photo"
        onClick={() => goTo(active + 1)}
        className="absolute right-0 top-1/2 z-40 -translate-y-1/2 rounded-full border border-accent/40 bg-surface p-2.5 text-accent shadow-md transition-colors hover:bg-accent/10"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <div className="mt-8 flex items-center justify-center gap-2">
        {images.map((img, i) => (
          <button
            key={img.id}
            aria-label={`Go to photo ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-6 bg-accent" : "w-2 bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}