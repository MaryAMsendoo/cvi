// components/LeadershipPreview.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";

const TRUSTEES = [
  {
    name: "Michael Benjamin",
    role: "Founder & Chairman",
    photo: "/michealbenjamin.jpeg",
    credential: "2024 Mandela Washington Fellow",
  },
  {
    name: "Festus Moses",
    role: "Co-Founder & Secretary",
    photo: "/festusmoses.jpeg",
    credential: "2024 Mandela Washington Fellow",
  },
];

const STAFF = [
  {
    name: "Tuleun A. Kelvin",
    role: "Programs & Learning Delivery Lead",
    photo: "/tuleunkelvin.jpeg",
    credential: "State Programme Manager, 3MTT (Benue)",
  },
  {
    name: "Lucy Iorliam",
    role: "Lead Data Analyst & M&E Lead",
    photo: "/lucyiorliam.jpeg",
    credential: "M&E Consultant, Jobberman Benue",
  },
];

function PersonCard({
  person,
  index,
  emphasis,
}: {
  person: (typeof TRUSTEES)[number];
  index: number;
  emphasis?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-surface-muted">
        <Image
          src={person.photo}
          alt={person.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {emphasis && (
          <div className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-[11px] font-medium text-surface">
            Trustee
          </div>
        )}
      </div>
      <h3
        className="mt-4 text-lg text-foreground"
        style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
      >
        {person.name}
      </h3>
      <p className="text-sm text-foreground/60">{person.role}</p>
      <p className="mt-1.5 text-xs text-primary-strong">{person.credential}</p>
    </motion.div>
  );
}

export default function LeadershipPreview() {
  return (
    <section className="relative overflow-hidden bg-surface px-6 py-24 sm:px-10">
      {/* <SectionBackdrop variant="e" tone="light" /> */}
      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-6 w-1.5 rounded-full bg-accent" />
              <span className="text-sm font-medium text-foreground/60">Leadership</span>
            </div>
            <h2
              className="mt-5 max-w-lg text-3xl leading-tight text-foreground sm:text-4xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              A lean, hands-on board with real programme experience
            </h2>
          </div>
          <Link
            href="/team"
            className="hidden shrink-0 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-muted sm:inline-flex"
          >
            Meet the full team
          </Link>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {TRUSTEES.map((p, i) => (
            <PersonCard key={p.name} person={p} index={i} emphasis />
          ))}
          {STAFF.map((p, i) => (
            <PersonCard key={p.name} person={p} index={i + TRUSTEES.length} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-border pt-8 text-sm text-foreground/60 sm:hidden">
          <span>2 trustees · 4 full-time staff · 9 active volunteers</span>
        </div>
        <Link
          href="/team"
          className="mt-8 inline-flex rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-muted sm:hidden"
        >
          Meet the full team
        </Link>
      </div>
    </section>
  );
}