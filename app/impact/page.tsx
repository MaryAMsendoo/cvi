"use client";

import { motion } from "motion/react";
import { Users, CheckCircle2, BarChart3 } from "lucide-react";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";
import { PageHero } from "@/components/ui/PageHero";

export default function ImpactPage() {
  return (
    <main>
      {/* HERO */}
      <PageHero
        eyebrow="Impact & results"
        title="What we've delivered. What we're learning."
        description="We report what has been delivered, what has been measured, and what still needs to be learned."
        image="/p2.jpg"
      />

      {/* RESULTS INTRODUCTION */}
      <section className="relative bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-accent" />
              <span className="text-xs font-medium uppercase tracking-wide text-foreground/55">
                Results to date
              </span>
            </div>

            <div className="max-w-3xl">
              <h2
                className="text-2xl leading-snug text-foreground sm:text-3xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                Our first documented result: 57 young people trained in AI fundamentals.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-foreground/65 sm:text-base sm:leading-7">
                CVI is a young organisation still building its evidence base —
                we distinguish between activities completed, results measured,
                and outcomes that need further follow-up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT FIGURES */}
      <section className="relative bg-surface-muted py-16 sm:py-20">
        <SectionBackdrop variant="g" tone="light" />
        <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-5 w-1 rounded-full bg-accent" />
            <span className="text-xs font-medium uppercase tracking-wide text-foreground/55">
              At a glance
            </span>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            <div className="bg-background p-6 sm:p-7">
              <Users className="h-5 w-5 text-accent" />
              <p
                className="mt-6 text-4xl text-foreground"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                57
              </p>
              <p className="mt-3 text-sm font-medium text-foreground">youths trained</p>
              <p className="mt-1.5 text-xs leading-5 text-foreground/50">
                Participants in the June 2026 bootcamp.
              </p>
            </div>

            <div className="bg-background p-6 sm:p-7">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <p
                className="mt-6 text-4xl text-foreground"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                01
              </p>
              <p className="mt-3 text-sm font-medium text-foreground">completed programme</p>
              <p className="mt-1.5 text-xs leading-5 text-foreground/50">
                CVI&apos;s first documented programme.
              </p>
            </div>

            <div className="bg-background p-6 sm:p-7">
              <BarChart3 className="h-5 w-5 text-accent" />
              <p
                className="mt-6 text-4xl text-foreground"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                2026
              </p>
              <p className="mt-3 text-sm font-medium text-foreground">first delivery year</p>
              <p className="mt-1.5 text-xs leading-5 text-foreground/50">
                Building our monitoring foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE MEASURE */}
      <section className="relative bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-accent" />
              <span className="text-xs font-medium uppercase tracking-wide text-foreground/55">
                Measurement
              </span>
            </div>

            <div className="max-w-2xl">
              <h2
                className="text-2xl leading-snug text-foreground sm:text-3xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                Better reporting as the programme portfolio grows.
              </h2>

              <p className="mt-4 text-sm leading-6 text-foreground/65 sm:text-base sm:leading-7">
                We&apos;re developing a stronger monitoring and evaluation
                approach so future programmes can be assessed beyond
                participation numbers alone.
              </p>

              <div className="mt-8 grid gap-5 border-t border-border pt-6 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-accent">Outputs</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/60">
                    What was delivered and who participated.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-accent">Learning</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/60">
                    What we learn from implementation and feedback.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-accent">Outcomes</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/60">
                    Reported once sufficiently measured.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORIES PLACEHOLDER */}
      <section className="relative bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-accent" />
              <span className="text-xs font-medium uppercase tracking-wide text-foreground/55">
                Stories
              </span>
            </div>

            <div className="max-w-2xl">
              <h2
                className="text-2xl leading-snug text-foreground sm:text-3xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                Participant voices belong in the record.
              </h2>
              <p className="mt-4 text-sm leading-6 text-foreground/60 sm:text-base sm:leading-7">
                Reserved for properly documented participant stories. Rather
                than invent placeholder success stories, we&apos;ll add them
                as they&apos;re available and confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}