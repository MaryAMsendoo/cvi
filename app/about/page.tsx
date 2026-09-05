"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";

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
    year: "2025",
    title: "CVI begins operations",
    text: "Citizens Voices International begins its work in response to barriers limiting young people's access to skills, opportunities, and platforms for participation.",
  },
  {
    year: "June 2026",
    title: "Official registration",
    text: "CVI is incorporated as a Trustee with the Corporate Affairs Commission, formalising the organisation's governance structure.",
  },
  {
    year: "June 2026",
    title: "First programme delivered",
    text: "The Digital Skills Makurdi AI Bootcamp trains 57 young people on foundational artificial intelligence skills.",
  },
];

export default function Page() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-foreground text-white">
        <SectionBackdrop variant="d" tone="dark" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-6 w-1.5 rounded-full bg-accent" />
              <span className="text-sm font-medium text-white/60">
                About Citizens Voices International
              </span>
            </div>

            <h1
              className="mt-6 max-w-4xl text-4xl leading-[1.05] sm:text-6xl lg:text-7xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              Building the capacity of citizens to shape better futures.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Citizens Voices International is a nonprofit organisation
              working from Makurdi, Benue State, to empower young people,
              strengthen inclusive governance, and develop human capital across
              Nigeria&apos;s Middle Belt.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-16 grid gap-8 border-t border-white/15 pt-6 sm:grid-cols-3"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Established
              </p>
              <p className="mt-2 text-sm text-white/70">Operational since 2025</p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Location
              </p>
              <p className="mt-2 text-sm text-white/70">
                Makurdi, Benue State, Nigeria
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Legal status
              </p>
              <p className="mt-2 text-sm text-white/70">
                Incorporated Trustee · CAC IT No. 9614146
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
  {/* <SectionBackdrop variant="d" tone="light" /> */}

  <div className="relative mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
    {/* IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative overflow-hidden rounded-[2rem]">
        <div className="relative aspect-[4/3]">
          <Image
            src="/p26.jpg"
            alt="Citizens Voices International community programme"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute bottom-5 left-5 max-w-xs rounded-xl border border-white/20 bg-foreground/85 p-5 text-white backdrop-blur-md">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
            Our starting point
          </p>

          <p
            className="mt-2 text-lg leading-snug"
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
        <span className="h-6 w-1.5 rounded-full bg-accent" />
        <span className="text-sm font-medium text-foreground/60">
          Who we are
        </span>
      </div>

      <h2
        className="mt-5 max-w-xl text-3xl leading-tight text-foreground sm:text-5xl"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
        }}
      >
        A young organisation focused on practical change.
      </h2>

      <div className="mt-7 max-w-xl space-y-5 text-base leading-7 text-foreground/65">
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
      <section className="relative overflow-hidden bg-background py-24 sm:py-32">
        <SectionBackdrop variant="e" tone="light" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-6 w-1.5 rounded-full bg-accent" />
                <span className="text-sm font-medium text-foreground/60">
                  Why CVI exists
                </span>
              </div>

              <h2
                className="mt-5 text-3xl leading-tight text-foreground sm:text-5xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                Opportunity should not depend on where you start.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-foreground/65">
                Across Nigeria&apos;s Middle Belt, many young people face
                overlapping barriers to skills development, economic
                opportunity, civic participation, and meaningful networks.
                CVI exists to help create practical pathways through those
                barriers.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Access to practical skills and learning",
                  "Greater participation in civic life",
                  "Stronger pathways to economic opportunity",
                  "More inclusive and peaceful communities",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 border-t border-border pt-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Check size={14} strokeWidth={2.5} />
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
      <section className="relative overflow-hidden bg-surface-muted py-24 sm:py-32">
        <SectionBackdrop variant="b" tone="light" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-6 w-1.5 rounded-full bg-accent" />
              <span className="text-sm font-medium text-foreground/60">
                What we focus on
              </span>
            </div>

            <h2
              className="mt-5 text-3xl leading-tight text-foreground sm:text-5xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              Three connected areas of work.
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {THEMES.map((theme, index) => (
              <motion.article
                key={theme.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-surface p-7 sm:p-9"
              >
                <p className="text-xs font-bold tracking-[0.18em] text-accent">
                  {theme.number}
                </p>

                <h3
                  className="mt-12 text-2xl text-foreground"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                  }}
                >
                  {theme.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-foreground/60">
                  {theme.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
        <SectionBackdrop variant="e" tone="light" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-6 w-1.5 rounded-full bg-accent" />
              <span className="text-sm font-medium text-foreground/60">
                Our journey
              </span>
            </div>

            <h2
              className="mt-5 text-3xl leading-tight text-foreground sm:text-5xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              Young, growing, and building deliberately.
            </h2>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-[11px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border sm:block" />

            <div className="space-y-12">
              {TIMELINE.map((item, index) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative grid gap-4 sm:grid-cols-[140px_1fr] sm:gap-8"
                >
                  <div className="relative flex items-start gap-4">
                    <span className="mt-1.5 hidden h-2.5 w-2.5 shrink-0 rounded-full bg-accent ring-4 ring-surface sm:block" />
                    <p
                      className="text-2xl text-foreground"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 500,
                      }}
                    >
                      {item.year}
                    </p>
                  </div>

                  <div className="border-l-2 border-accent/20 pl-5 sm:border-l-0 sm:pl-0">
                    <h3 className="text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-foreground/60">
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
      <section className="relative overflow-hidden bg-foreground py-24 text-white sm:py-28">
        <SectionBackdrop variant="f" tone="dark" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-6 w-1.5 rounded-full bg-accent" />
              <span className="text-sm font-medium text-white/60">
                Governance at a glance
              </span>
            </div>

            <h2
              className="mt-5 max-w-xl text-3xl leading-tight sm:text-5xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              Small by design. Serious about accountability.
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-white/60">
              CVI currently operates with two registered trustees who provide
              joint oversight of strategy, financial accountability, and
              programme integrity.
            </p>

            <Link
              href="/governance"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-primary-strong"
            >
              Explore governance
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-7">
              <p className="text-5xl text-accent">02</p>
              <p className="mt-3 text-sm font-bold">Registered trustees</p>
              <p className="mt-2 text-sm leading-6 text-white/50">
                Chairman and Secretary providing joint organisational
                oversight.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-7">
              <p className="text-5xl text-accent">04</p>
              <p className="mt-3 text-sm font-bold">Full-time staff</p>
              <p className="mt-2 text-sm leading-6 text-white/50">
                A lean team delivering programmes and organisational functions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-background py-20 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
              Continue exploring
            </p>

            <h2
              className="mt-4 text-3xl leading-tight text-foreground sm:text-4xl"
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
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary hover:bg-surface-muted"
            >
              Our team
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>

            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-strong"
            >
              Partner with us
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}