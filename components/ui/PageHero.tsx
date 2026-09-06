// components/ui/PageHero.tsx
import Image from "next/image";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  /** Optional background photo. Omit for a plain dark hero with no image. */
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-foreground text-white">
      {image && (
        <>
          <div className="absolute inset-0">
            <Image
              src={image}
              alt=""
              fill
              priority
              className="object-cover object-center opacity-25 grayscale"
            />
          </div>
          <div className="absolute inset-0 bg-foreground/70" />
        </>
      )}

      <div className="relative mx-auto max-w-3xl px-6 py-14 sm:px-10 sm:py-16">
        <div className="flex items-center gap-4">
          <span className="h-10 w-[3px] shrink-0 rounded-full bg-accent sm:h-12" />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
              {eyebrow}
            </p>
            <h1
              className="mt-1.5 max-w-xl text-xl leading-snug tracking-[-0.01em] sm:text-2xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              {title}
            </h1>
          </div>
        </div>

        {description && (
          <p className="mt-5 max-w-lg text-sm leading-6 text-white/55 sm:ml-[calc(3px+1rem)]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}