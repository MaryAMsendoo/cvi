import Link from "next/link";

import {
  ArrowRight,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";

import { FaFacebookF } from "react-icons/fa";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      {/* =========================================================
          HERO
      ========================================================= */}
     <PageHero
  eyebrow="Contact CVI"
  title="Let's start a useful conversation."
  description="Whether you are looking to partner, support our work or learn more about CVI, we'd be glad to hear from you."
/>

      {/* =========================================================
          CONTACT DETAILS
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
                  Find us
                </span>
              </div>

              <p className="mt-7 max-w-xs text-sm leading-7 text-foreground/50">
                CVI is based in Makurdi, Benue State and works across youth
                empowerment, inclusive governance and human capital
                development.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              {/* Address */}
              <div className="bg-surface p-8 sm:p-10">
                <MapPin className="h-6 w-6 text-accent" />

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-foreground/40">
                  Office
                </p>

                <p
                  className="mt-3 max-w-sm text-2xl leading-tight text-foreground"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                  }}
                >
                  Makurdi, Benue State
                </p>

                <p className="mt-4 text-sm leading-7 text-foreground/55">
                  NO 2, KONSHISHA STREET,
                  <br />
                  HIGH LEVEL,
                  <br />
                  MAKURDI, BENUE STATE,
                  <br />
                  NIGERIA.
                </p>
              </div>

              {/* Email */}
              <div className="bg-surface p-8 sm:p-10">
                <Mail className="h-6 w-6 text-accent" />

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-foreground/40">
                  Email
                </p>

                <p
                  className="mt-3 text-2xl leading-tight text-foreground"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                  }}
                >
                  Get in touch
                </p>

                <a
                  href="mailto:cvi@gmail.com"
                  className="mt-4 block break-all text-sm leading-7 text-foreground/60 transition-colors hover:text-accent"
                >
                  cvi@gmail.com
                </a>

                <p className="mt-2 text-xs text-foreground/40">
                  Click to compose an email.
                </p>
              </div>

              {/* Phone */}
              <div className="bg-surface p-8 sm:p-10">
                <Phone className="h-6 w-6 text-accent" />

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-foreground/40">
                  Phone
                </p>

                <p
                  className="mt-3 text-2xl leading-tight text-foreground"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                  }}
                >
                  Call CVI
                </p>

                <a
                  href="tel:07011308129"
                  className="mt-4 block text-sm leading-7 text-foreground/60 transition-colors hover:text-accent"
                >
                  07011308129
                </a>

                <p className="mt-2 text-xs text-foreground/40">
                  Tap to call on mobile.
                </p>
              </div>

              {/* Direct contact */}
              <div className="bg-surface p-8 sm:p-10">
                <MessageSquare className="h-6 w-6 text-accent" />

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-foreground/40">
                  Enquiries
                </p>

                <p
                  className="mt-3 text-2xl leading-tight text-foreground"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                  }}
                >
                  Have a question?
                </p>

                <Link
                  href="/get-involved"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
                >
                  Send an enquiry
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ENQUIRY ROUTES
      ========================================================= */}
      <section className="relative bg-surface-muted">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold tracking-[0.18em] text-accent">
                  02
                </span>

                <span className="h-px w-10 bg-border" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-foreground/45">
                  How we can help
                </span>
              </div>
            </div>

            <div className="border-t border-border">
              {/* Partnership */}
              <Link
                href="/get-involved"
                className="group grid gap-5 border-b border-border py-8 sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                    Partnership
                  </p>

                  <h2
                    className="mt-3 text-3xl text-foreground"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                    }}
                  >
                    Explore a partnership
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-foreground/55">
                    Discuss institutional collaboration, programme support or
                    funding opportunities with CVI.
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>

              {/* Volunteering */}
              <Link
                href="/get-involved"
                className="group grid gap-5 border-b border-border py-8 sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                    Volunteering
                  </p>

                  <h2
                    className="mt-3 text-3xl text-foreground"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                    }}
                  >
                    Join our volunteer network
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-foreground/55">
                    Interested in contributing your skills, time or experience
                    to CVI&apos;s work?
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>

              {/* General enquiry */}
              <Link
                href="/get-involved"
                className="group grid gap-5 py-8 sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                    General enquiry
                  </p>

                  <h2
                    className="mt-3 text-3xl text-foreground"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                    }}
                  >
                    Send us a message
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-foreground/55">
                    Have a question about CVI, our programmes or our
                    organisation? Use our enquiry form.
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  <MessageSquare className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOCIAL
      ========================================================= */}
      <section className="relative bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="grid gap-10 border-t border-border pt-8 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Stay connected
              </p>

              <h2
                className="mt-4 text-3xl tracking-[-0.02em] text-foreground sm:text-4xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                Follow CVI&apos;s work and updates.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/55">
                Follow our public updates and programme activities through our
                social channels.
              </p>
            </div>

            <a
              href="https://www.facebook.com/100069913210617/posts/1304950281845400/?app=fbl"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow CVI on Facebook"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-foreground"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                <FaFacebookF className="h-4 w-4" />
              </span>

              Facebook
            </a>
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
            <circle
              cx="690"
              cy="250"
              r="170"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle
              cx="690"
              cy="250"
              r="120"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle
              cx="690"
              cy="250"
              r="70"
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
                Citizens Voices International
              </span>
            </div>

            <h2
              className="mt-8 text-4xl leading-[1.03] tracking-[-0.025em] sm:text-5xl lg:text-6xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              Good work starts with a conversation.
            </h2>

            <Link
              href="/get-involved"
              className="group mt-9 inline-flex items-center gap-4 rounded-md bg-accent px-6 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
            >
              Get involved

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}