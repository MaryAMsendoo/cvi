import Link from "next/link";
import {
  ArrowRight,
  Building2,
  FileCheck2,
  Landmark,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Governance & Transparency",
};

export default function GovernancePage() {
  return (
    <main className="overflow-hidden">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-foreground text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <svg
            className="h-full w-full"
            viewBox="0 0 800 500"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <path
              d="M80 70 H720 V430 H80 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />

            <path
              d="M140 120 H660 V380 H140 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />

            <path
              d="M200 170 H600 V330 H200 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />

            <line
              x1="80"
              y1="250"
              x2="720"
              y2="250"
              stroke="currentColor"
              strokeWidth="1"
            />

            <line
              x1="400"
              y1="70"
              x2="400"
              y2="430"
              stroke="currentColor"
              strokeWidth="1"
            />

            <circle
              cx="400"
              cy="250"
              r="35"
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
                  Governance & transparency
                </span>
              </div>

              <div className="mt-12 max-w-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Structure · Oversight · Accountability
                </p>

                <p className="mt-5 text-sm leading-7 text-white/55">
                  The systems and people responsible for CVI&apos;s governance,
                  accountability and programme integrity.
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
                Clear structure.
                <br />
                Responsible
                <br />
                stewardship.
              </h1>
            </div>
          </div>

          <div className="mt-16 grid gap-7 border-t border-white/15 pt-6 sm:grid-cols-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/35">
                Legal status
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                Incorporated Trustee
              </p>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/35">
                CAC registration
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                IT No. 9614146
              </p>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/35">
                Registered
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                8 June 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          GOVERNANCE INTRO
      ========================================================= */}
      <section className="relative bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold tracking-[0.18em] text-accent">
                  01
                </span>

                <span className="h-px w-10 bg-border" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-foreground/45">
                  Governance
                </span>
              </div>
            </div>

            <div className="max-w-4xl">
              <h2
                className="text-4xl leading-[1.03] tracking-[-0.025em] text-foreground sm:text-5xl lg:text-6xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                A lean governance structure with oversight close to delivery.
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-foreground/65">
                Citizens Voices International is governed by two registered
                trustees who provide joint oversight of organisational
                strategy, financial accountability and programme integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LEGAL IDENTITY
      ========================================================= */}
      <section className="relative bg-surface-muted">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="mb-12">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold tracking-[0.18em] text-accent">
                02
              </span>

              <span className="h-px w-10 bg-border" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-foreground/45">
                Legal identity
              </span>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
            <div className="bg-background p-8 sm:p-10">
              <Building2 className="h-6 w-6 text-accent" />

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-foreground/40">
                Registered name
              </p>

              <p
                className="mt-3 text-2xl text-foreground"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                Citizens Voices International
              </p>

              <p className="mt-3 text-sm leading-6 text-foreground/50">
                Nonprofit organisation based in Makurdi, Benue State, Nigeria.
              </p>
            </div>

            <div className="bg-background p-8 sm:p-10">
              <Landmark className="h-6 w-6 text-accent" />

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-foreground/40">
                Registration
              </p>

              <p
                className="mt-3 text-2xl text-foreground"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                CAC IT No. 9614146
              </p>

              <p className="mt-3 text-sm leading-6 text-foreground/50">
                Incorporated as an Incorporated Trustee on 8 June 2026.
              </p>
            </div>

            <div className="bg-background p-8 sm:p-10">
              <FileCheck2 className="h-6 w-6 text-accent" />

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-foreground/40">
                Tax identification
              </p>

              <p
                className="mt-3 text-2xl text-foreground"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                TIN 2620735177241
              </p>

              <p className="mt-3 text-sm leading-6 text-foreground/50">
                Tax identification number recorded for the organisation.
              </p>
            </div>

            <div className="bg-background p-8 sm:p-10">
              <ShieldCheck className="h-6 w-6 text-accent" />

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-foreground/40">
                Operational history
              </p>

              <p
                className="mt-3 text-2xl text-foreground"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                Operating since 2025
              </p>

              <p className="mt-3 text-sm leading-6 text-foreground/50">
                CVI began its operations before its formal incorporation in
                June 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOARD
      ========================================================= */}
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
                  Board oversight
                </span>
              </div>

              <p className="mt-7 max-w-xs text-sm leading-7 text-foreground/50">
                Two registered trustees provide the organisation&apos;s
                governance oversight.
              </p>
            </div>

            <div className="border-t border-border">
              <div className="grid gap-8 border-b border-border py-8 sm:grid-cols-[1fr_1fr_auto] sm:items-center">
                <div>
                  <p
                    className="text-2xl text-foreground"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                    }}
                  >
                    Michael Benjamin
                  </p>

                  <p className="mt-2 text-sm text-accent">
                    Founder & Chairman
                  </p>
                </div>

                <p className="max-w-sm text-sm leading-7 text-foreground/55">
                  Provides board leadership and strategic oversight for the
                  organisation.
                </p>

                <span className="text-xs font-bold uppercase tracking-[0.16em] text-foreground/35">
                  Trustee 01
                </span>
              </div>

              <div className="grid gap-8 border-b border-border py-8 sm:grid-cols-[1fr_1fr_auto] sm:items-center">
                <div>
                  <p
                    className="text-2xl text-foreground"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                    }}
                  >
                    Festus Moses
                  </p>

                  <p className="mt-2 text-sm text-accent">
                    Co-Founder & Secretary
                  </p>
                </div>

                <p className="max-w-sm text-sm leading-7 text-foreground/55">
                  Supports governance coordination, accountability and
                  organisational administration.
                </p>

                <span className="text-xs font-bold uppercase tracking-[0.16em] text-foreground/35">
                  Trustee 02
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ACCOUNTABILITY
      ========================================================= */}
      <section className="relative bg-foreground text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold tracking-[0.18em] text-accent">
                  04
                </span>

                <span className="h-px w-10 bg-white/20" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                  Accountability
                </span>
              </div>
            </div>

            <div className="max-w-3xl">
              <h2
                className="text-4xl leading-[1.04] tracking-[-0.025em] sm:text-5xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                Transparency should reflect where an organisation actually
                is.
              </h2>

              <p className="mt-7 text-base leading-8 text-white/60">
                CVI was formally incorporated in June 2026 and has not yet
                produced audited financial statements. We do not present
                unaudited information as audited reporting.
              </p>

              <div className="mt-10 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                    Current position
                  </p>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    Financial information is maintained internally and will be
                    developed into a fuller public financial overview as the
                    organisation matures.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                    Future reporting
                  </p>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    Audited financial statements will be added when the
                    organisation reaches the appropriate reporting cycle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          POLICIES
      ========================================================= */}
      <section className="relative bg-surface-muted">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold tracking-[0.18em] text-accent">
                  05
                </span>

                <span className="h-px w-10 bg-border" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-foreground/45">
                  Policies & systems
                </span>
              </div>
            </div>

            <div>
              <h2
                className="max-w-3xl text-4xl leading-[1.04] tracking-[-0.025em] text-foreground sm:text-5xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                Building the systems that support responsible growth.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-foreground/60">
                CVI is developing its internal governance and programme
                systems as the organisation grows. The current priority is to
                formalise the policies and monitoring structures required for
                stronger programme delivery.
              </p>

              <div className="mt-10 border-t border-border">
                <div className="grid gap-5 border-b border-border py-6 sm:grid-cols-[1fr_auto]">
                  <div>
                    <p className="font-medium text-foreground">
                      Safeguarding policy
                    </p>
                    <p className="mt-1 text-sm text-foreground/50">
                      To be formally developed and documented.
                    </p>
                  </div>

                  <span className="self-start text-xs font-bold uppercase tracking-[0.14em] text-accent">
                    In development
                  </span>
                </div>

                <div className="grid gap-5 border-b border-border py-6 sm:grid-cols-[1fr_auto]">
                  <div>
                    <p className="font-medium text-foreground">
                      Anti-corruption & fraud controls
                    </p>
                    <p className="mt-1 text-sm text-foreground/50">
                      To be formally developed and documented.
                    </p>
                  </div>

                  <span className="self-start text-xs font-bold uppercase tracking-[0.14em] text-accent">
                    In development
                  </span>
                </div>

                <div className="grid gap-5 border-b border-border py-6 sm:grid-cols-[1fr_auto]">
                  <div>
                    <p className="font-medium text-foreground">
                      Monitoring, evaluation & learning framework
                    </p>
                    <p className="mt-1 text-sm text-foreground/50">
                      To support stronger programme measurement and learning.
                    </p>
                  </div>

                  <span className="self-start text-xs font-bold uppercase tracking-[0.14em] text-accent">
                    In development
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TEAM LINK
      ========================================================= */}
      <section className="relative bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="flex flex-col gap-8 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Leadership
              </p>

              <h2
                className="mt-4 text-3xl tracking-[-0.02em] text-foreground sm:text-4xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                Meet the people behind the organisation.
              </h2>
            </div>

            <Link
              href="/team"
              className="group inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-foreground"
            >
              View our team

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
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
              Interested in supporting our work?
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60">
              We welcome conversations with funders, institutions and partners
              interested in strengthening youth empowerment and inclusive
              development in Benue State.
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