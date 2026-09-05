import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, Users } from "lucide-react";

export const metadata = {
  title: "Impact & Results",
};

export default function ImpactPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <svg
            className="h-full w-full"
            viewBox="0 0 800 500"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <circle
              cx="670"
              cy="100"
              r="150"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle
              cx="670"
              cy="100"
              r="105"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />

            <path
              d="M-40 390 C 120 300, 210 440, 360 330 S 610 180, 850 270"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />

            <path
              d="M-40 430 C 120 340, 210 480, 360 370 S 610 220, 850 310"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />

            <path
              d="M-40 470 C 120 380, 210 520, 360 410 S 610 260, 850 350"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-7 w-1.5 rounded-full bg-accent" />

                <span className="text-sm font-medium text-white/60">
                  Impact & results
                </span>
              </div>

              <div className="mt-12 max-w-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Evidence · Learning · Accountability
                </p>

                <p className="mt-5 text-sm leading-7 text-white/55">
                  We report what has been delivered, what has been measured,
                  and what still needs to be learned.
                </p>
              </div>
            </div>

            <div>
              <h1
                className="max-w-5xl text-5xl leading-[0.96] tracking-[-0.03em] sm:text-6xl lg:text-8xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                What we&apos;ve
                <br />
                delivered.
                <br />
                What we&apos;re
                <br />
                learning.
              </h1>
            </div>
          </div>

          <div className="mt-16 grid gap-7 border-t border-white/15 pt-6 sm:grid-cols-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/35">
                Programme
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                Digital Skills Makurdi AI Bootcamp
              </p>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/35">
                Delivered
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                June 2026
              </p>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/35">
                Participants
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                57 youths trained
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results introduction */}
      <section className="relative bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-start gap-4">
              <span className="text-xs font-bold tracking-[0.18em] text-accent">
                01
              </span>

              <span className="mt-2 h-px w-10 bg-border" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-foreground/45">
                Results to date
              </span>
            </div>

            <div className="max-w-4xl">
              <h2
                className="text-4xl leading-[1.03] tracking-[-0.025em] text-foreground sm:text-5xl lg:text-6xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                Our first documented result is straightforward: 57 young
                people trained in AI fundamentals.
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-foreground/65">
                CVI is a young organisation and is still building its evidence
                base. We therefore distinguish between activities completed,
                results measured and longer-term outcomes that require further
                follow-up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact figures */}
      <section className="relative bg-surface-muted">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="mb-12">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold tracking-[0.18em] text-accent">
                02
              </span>

              <span className="h-px w-10 bg-border" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-foreground/45">
                At a glance
              </span>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            <div className="bg-background p-8 sm:p-10">
              <Users className="h-6 w-6 text-accent" />

              <p
                className="mt-10 text-6xl tracking-[-0.04em] text-foreground sm:text-7xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                57
              </p>

              <p className="mt-4 text-sm font-medium text-foreground">
                youths trained
              </p>

              <p className="mt-2 text-sm leading-6 text-foreground/50">
                Participants in the June 2026 Digital Skills Makurdi AI
                Bootcamp.
              </p>
            </div>

            <div className="bg-background p-8 sm:p-10">
              <CheckCircle2 className="h-6 w-6 text-accent" />

              <p
                className="mt-10 text-6xl tracking-[-0.04em] text-foreground sm:text-7xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                01
              </p>

              <p className="mt-4 text-sm font-medium text-foreground">
                completed programme
              </p>

              <p className="mt-2 text-sm leading-6 text-foreground/50">
                The first completed programme currently documented in CVI&apos;s
                public programme portfolio.
              </p>
            </div>

            <div className="bg-background p-8 sm:p-10">
              <BarChart3 className="h-6 w-6 text-accent" />

              <p
                className="mt-10 text-6xl tracking-[-0.04em] text-foreground sm:text-7xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                2026
              </p>

              <p className="mt-4 text-sm font-medium text-foreground">
                first documented delivery year
              </p>

              <p className="mt-2 text-sm leading-6 text-foreground/50">
                CVI is establishing its programme monitoring and reporting
                foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we measure */}
      <section className="relative bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold tracking-[0.18em] text-accent">
                  03
                </span>

                <span className="h-px w-10 bg-border" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-foreground/45">
                  Measurement
                </span>
              </div>
            </div>

            <div className="max-w-3xl">
              <h2
                className="text-4xl leading-[1.04] tracking-[-0.025em] text-foreground sm:text-5xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                Better reporting as the programme portfolio grows.
              </h2>

              <p className="mt-7 text-base leading-8 text-foreground/65">
                CVI is developing a stronger monitoring, evaluation and
                learning approach so future programmes can be assessed beyond
                participation numbers. This includes documenting programme
                outputs, participant experiences and relevant longer-term
                outcomes where appropriate.
              </p>

              <div className="mt-10 border-t border-border">
                <div className="grid gap-6 border-b border-border py-7 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent">
                      Outputs
                    </p>
                    <p className="mt-3 text-sm leading-6 text-foreground/60">
                      What activities were delivered and who participated.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent">
                      Learning
                    </p>
                    <p className="mt-3 text-sm leading-6 text-foreground/60">
                      What CVI learns from implementation and participant
                      feedback.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent">
                      Outcomes
                    </p>
                    <p className="mt-3 text-sm leading-6 text-foreground/60">
                      Longer-term changes will be reported when sufficiently
                      measured.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories placeholder */}
      <section className="relative bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold tracking-[0.18em] text-accent">
                  04
                </span>

                <span className="h-px w-10 bg-border" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-foreground/45">
                  Stories
                </span>
              </div>
            </div>

            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-foreground/40">
                Coming as evidence develops
              </p>

              <h2
                className="mt-5 text-4xl leading-[1.04] tracking-[-0.025em] text-foreground sm:text-5xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                Participant voices belong in the record.
              </h2>

              <p className="mt-7 text-base leading-8 text-foreground/60">
                This section is reserved for properly documented participant
                stories, testimonials and case studies from CVI programmes.
                Rather than create placeholder success stories, we will add
                them when they are available and appropriately documented.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-foreground text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <svg
            className="h-full w-full"
            viewBox="0 0 800 500"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <path
              d="M0 400 L160 320 L300 380 L470 250 L650 330 L800 220"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M0 440 L160 360 L300 420 L470 290 L650 370 L800 260"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-6 w-1.5 rounded-full bg-accent" />

              <span className="text-sm font-medium text-white/60">
                Work with CVI
              </span>
            </div>

            <h2
              className="mt-8 text-4xl leading-[1.03] tracking-[-0.025em] sm:text-5xl lg:text-6xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              Help us build programmes worth measuring.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60">
              Partner with CVI to expand opportunities for young people and
              strengthen inclusive development in Benue State.
            </p>

            <Link
              href="/get-involved"
              className="group mt-9 inline-flex items-center gap-4 rounded-md bg-accent px-6 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
            >
              Partner with us

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}