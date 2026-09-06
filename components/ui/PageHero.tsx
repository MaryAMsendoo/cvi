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
              className="object-cover object-center grayscale"
            />
          </div>
          {/* Desaturated + darkened so the photo reads as texture, not a competing image */}
          <div className="absolute inset-0 bg-foreground/88" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(5,55,63,0.75)_0%,rgba(5,32,38,0.55)_60%,rgba(5,32,38,0.85)_100%)]" />
        </>
      )}

      <div className="relative mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="flex items-start gap-5">
          <span className="mt-2 h-16 w-1 shrink-0 rounded-full bg-accent sm:h-20" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              {eyebrow}
            </p>
            <h1
              className="mt-3 max-w-3xl text-4xl leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              {title}
            </h1>
            {description && (
              <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}