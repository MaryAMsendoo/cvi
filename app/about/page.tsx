"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";
import { PageHero } from "@/components/ui/PageHero";
import { programmes } from "@/lib/content";


const programmeYears = programmes.map((p) => parseInt(p.date.match(/\d{4}/)?.[0] ?? "0", 10));
const startYear = Math.min(...programmeYears);
const endYear = Math.max(...programmeYears);
const yearRange = startYear === endYear ? `${startYear}` : `${startYear} - ${endYear}`;

const THEMES = [
  {
    number: "01",
    title: "Youth Empowerment",
    text: "Creating practical pathways for young people to develop skills, access opportunities, and participate meaningfully in their communities.",
  },
  {
    number: "02",
    title: "Inclusive Governance",
    text: "Supporting citizens, particularly young people, to engage with governance and contribute to more inclusive and accountable societies.",
  },
  {
    number: "03",
    title: "Human Capital Development",
    text: "Building the knowledge, capabilities, and networks people need to pursue sustainable livelihoods and contribute to development.",
  },
];

const TIMELINE = [
  {
    year: "2024",
    title: "CVI begins operations",
    text: "CVI begins its work addressing barriers to youth skills, opportunity, and participation.",
  },
  {
    year: "2026",
    title: "Official registration",
    text: "CVI is incorporated as a Trustee with the Corporate Affairs Commission.",
  },
  {
    year: `2024 - ${yearRange}`,
    title: `${programmes.length} programmes delivered`,
    text: "From political literacy to digital skills — practical training for young Nigerians.",
  },
];

export default function Page() {
  return (
    <main>
      {/* PAGE HERO */}
      <PageHero
        eyebrow="About Citizens Voices International"
        title="Building the capacity of citizens to shape better futures."
        image="/p5.jpg"
      />

      {/* WHO WE ARE */}
      <section className="relative overflow-hidden bg-surface py-16 sm:py-20">
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 sm:px-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/p26.jpg"
                  alt="Citizens Voices International community programme"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-4 left-4 max-w-xs rounded-lg border border-white/20 bg-foreground/85 p-4 text-white backdrop-blur-md">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
                  Our starting point
                </p>

                <p
                  className="mt-1.5 text-base leading-snug"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                  }}
                >
                  Local knowledge. Practical skills. Citizen participation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-accent" />
              <span className="text-xs font-medium uppercase tracking-[4px] text-foreground/55">
                Who we are
              </span>
            </div>

            <h2
              className="mt-4 max-w-lg text-2xl leading-snug text-foreground sm:text-3xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              A young organisation focused on practical change.
            </h2>

            <div className="mt-5 max-w-lg space-y-4 text-sm leading-6 text-foreground/65 sm:text-base sm:leading-7">
              <p>
                CVI is a nonprofit based in Makurdi, Nigeria, helping young people
                access skills, opportunities, and platforms to make a difference.
              </p>

              <p>
                We focus on youth empowerment, inclusive governance, and human
                capital development through practical, accountable programmes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CVI */}
      <section className="relative overflow-hidden bg-background py-16 sm:py-20">
        <SectionBackdrop variant="e" tone="light" />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-5 w-1 rounded-full bg-accent" />
                <span className="text-xs font-medium uppercase tracking-[4px] text-foreground/55">
                  Why CVI exists
                </span>
              </div>

              <h2
                className="mt-4 text-2xl leading-snug text-foreground sm:text-3xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                Opportunity should not depend on where you start.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-sm leading-6 text-foreground/65 sm:text-base sm:leading-7">
                Young people across the Middle Belt face real barriers to skills,
                opportunity, and civic participation. CVI exists to help clear a path
                through them.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Access to practical skills and learning",
                  "Greater participation in civic life",
                  "Stronger pathways to economic opportunity",
                  "More inclusive and peaceful communities",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 border-t border-border pt-3"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Check size={12} strokeWidth={2.5} />
                    </span>
                    <p className="text-sm leading-6 text-foreground/70">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THEMATIC AREAS */}
      <section className="relative overflow-hidden bg-surface-muted py-16 sm:py-20">
        <SectionBackdrop variant="b" tone="light" />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-accent" />
              <span className="text-xs font-medium uppercase tracking-[4px] text-foreground/55">
                What we focus on
              </span>
            </div>

            <h2
              className="mt-4 text-2xl leading-snug text-foreground sm:text-3xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              Three connected areas of work.
            </h2>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            {THEMES.map((theme, index) => (
              <motion.article
                key={theme.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-surface p-6 sm:p-7"
              >
                <p className="text-xs font-bold tracking-[0.18em] text-accent">
                  {theme.number}
                </p>

                <h3
                  className="mt-8 text-lg text-foreground"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                  }}
                >
                  {theme.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-foreground/60">
                  {theme.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative overflow-hidden bg-surface py-16 sm:py-20">
        <SectionBackdrop variant="e" tone="light" />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-accent" />
              <span className="text-xs font-medium uppercase tracking-[4px] text-foreground/55">
                Our journey
              </span>
            </div>

            <h2
              className="mt-4 text-2xl leading-snug text-foreground sm:text-3xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              Young, growing, and building deliberately.
            </h2>
          </div>

          <div className="relative mt-12">
            <div className="absolute left-[9px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border sm:block" />

            <div className="space-y-10">
              {TIMELINE.map((item, index) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative grid gap-3 sm:grid-cols-[120px_1fr] sm:gap-6"
                >
                  <div className="relative flex items-start gap-3">
                    <span className="mt-1 hidden h-2 ml-1 w-2 shrink-0 rounded-full bg-accent ring-4 ring-surface sm:block" />
                    <p
                      className="text-lg text-foreground"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 500,
                      }}
                    >
                      {item.year}
                    </p>
                  </div>

                  <div className="border-l-2 border-accent/20 pl-4 sm:border-l-0 sm:pl-0">
                    <h3 className="text-base font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 max-w-xl text-sm leading-6 text-foreground/60">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GOVERNANCE SNAPSHOT */}
      <section className="relative overflow-hidden bg-foreground py-16 text-white sm:py-20">
        <SectionBackdrop variant="f" tone="dark" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 sm:px-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-accent" />
              <span className="text-xs font-medium uppercase tracking-wide text-white/55">
                Governance at a glance
              </span>
            </div>

            <h2
              className="mt-4 max-w-lg text-2xl leading-snug sm:text-3xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              Small by design. Serious about accountability.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
              CVI currently operates with two registered trustees who provide
              joint oversight of strategy, financial accountability, and
              programme integrity.
            </p>

            <Link
              href="/governance"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-primary-strong"
            >
              Explore governance
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/5 p-5">
              <p className="text-3xl text-accent">02</p>
              <p className="mt-2 text-sm font-bold">Registered trustees</p>
              <p className="mt-1.5 text-xs leading-5 text-white/50">
                Chairman and Secretary providing joint organisational
                oversight.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-5">
              <p className="text-3xl text-accent">04</p>
              <p className="mt-2 text-sm font-bold">Full-time staff</p>
              <p className="mt-1.5 text-xs leading-5 text-white/50">
                A lean team delivering programmes and organisational functions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-background py-14 sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:px-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Continue exploring
            </p>

            <h2
              className="mt-3 text-2xl leading-snug text-foreground sm:text-3xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              Meet the people building CVI.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-bold text-foreground transition-colors hover:border-primary hover:bg-surface-muted"
            >
              Our team
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>

            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-strong"
            >
              Partner with us
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}