"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

function TiltCollage() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 150,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="relative h-[420px] w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ transform: "translateZ(40px)" }}
        className="absolute left-0 top-0 h-[340px] w-[78%] overflow-hidden rounded-lg shadow-xl"
      >
        <Image src="/img5.png" alt="Youths at the Digital Skills Makurdi AI Bootcamp" fill className="object-cover" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        style={{ transform: "translateZ(70px)" }}
        className="absolute bottom-0 right-0 h-52 w-52 overflow-hidden rounded-lg border-4 border-surface shadow-2xl"
      >
        <Image src="/img18.png" alt="A participant working at a laptop" fill className="object-cover" />
      </motion.div>

        
    </motion.div>
  );
}

export default function ProgramSpotlight() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-24 sm:px-10">
      {/* Soft decorative color fields in the brand palette — not a stock pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1fr_1fr]">
        <div className="order-2 lg:order-1">
          <TiltCollage />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-1 lg:order-2"
        >
          <div className="flex items-center gap-3">
            <span className="h-6 w-1.5 rounded-full bg-accent" />
            <span className="text-sm font-medium text-foreground/60">Featured programme</span>
          </div>

          <h2
            className="mt-5 text-3xl leading-tight text-foreground sm:text-4xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            Digital Skills Makurdi AI Bootcamp
          </h2>

          <p className="mt-5 max-w-lg text-foreground/70">
            Completed in June 2026, the bootcamp trained 57 Makurdi youths in AI
            fundamentals — practical, hands-on instruction designed to open a path
            into the digital economy.
          </p>

          {/* Sponsor credit — now a small logo-style badge instead of a dotted line */}
          <div className="mt-7 flex items-center gap-3 border-l-2 border-primary/40 pl-4">
            <div className="text-xs uppercase tracking-wide text-foreground/40">Sponsored by</div>
            <div
              className="text-sm text-foreground/80"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Mandela Washington Fellows Alumni Association of Nigeria
            </div>
          </div>

          <div className="mt-9">
            <Link
              href="/programs"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-surface transition-colors hover:bg-primary-strong"
            >
              See all programmes
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}