import Link from "next/link";

import {
  ArrowRight,
  FileText,
  Handshake,
  Mail,
  MessageSquare,
  Phone,
  Users,
} from "lucide-react";

import { FaFacebookF } from "react-icons/fa";

export const metadata = {
  title: "Get Involved",
};

const pathways = [
  {
    number: "01",
    icon: Handshake,
    title: "Partner with us",
    description:
      "Explore institutional collaboration, programme support, funding opportunities, or request CVI's organizational profile.",
  },
  {
    number: "02",
    icon: Users,
    title: "Volunteer",
    description:
      "Contribute your time, technical skills, community knowledge, or professional experience to CVI's growing work.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Institutional inquiry",
    description:
      "Connect with us as a tertiary institution, development organization, programme, community group, or other civic partner.",
  },
];

export default function GetInvolvedPage() {
  return (
    <main className="overflow-hidden">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-foreground text-white">       

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32 lg:py-40">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-7 w-1.5 rounded-full bg-accent" />

                <span className="text-sm font-medium text-white/60">
                  Get involved
                </span>
              </div>

              <div className="mt-12 max-w-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Partner · Contribute · Connect
                </p>

                <p className="mt-5 text-sm leading-7 text-white/55">
                  CVI works with institutions, funders, volunteers and
                  community partners who want to expand opportunity and
                  strengthen inclusive participation.
                </p>
              </div>
            </div>

            <div>
              <h1
                className="max-w-5xl text-5xl leading-[0.94] tracking-[-0.035em] sm:text-6xl lg:text-8xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                Bring your
                <br />
                institution,
                <br />
                skills or ideas.
              </h1>
            </div>
          </div>

          <div className="mt-16 grid gap-8 border-t border-white/15 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-xl text-sm leading-7 text-white/50">
              Tell us what you are exploring. We welcome thoughtful
              conversations around partnership, volunteering, programme
              collaboration and support.
            </p>

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/35">
              Makurdi · Benue State · Nigeria
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          PATHWAYS
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
                  Ways to connect
                </span>
              </div>

        
            </div>

            <div className="border-t border-border">
              {pathways.map((pathway) => {
                const Icon = pathway.icon;

                return (
                  <div
                    key={pathway.number}
                    className="group border-b border-border py-8 sm:py-10"
                  >
                    <div className="grid gap-6 sm:grid-cols-[auto_1fr_auto] sm:items-start">
                      <span className="text-xs font-bold tracking-[0.18em] text-accent">
                        {pathway.number}
                      </span>

                      <div>
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                            <Icon className="h-4 w-4" />
                          </div>

                          <h3
                            className="text-2xl text-foreground sm:text-3xl"
                            style={{
                              fontFamily: "var(--font-display)",
                              fontWeight: 500,
                            }}
                          >
                            {pathway.title}
                          </h3>
                        </div>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-foreground/55">
                          {pathway.description}
                        </p>
                      </div>

                      <ArrowRight className="hidden h-5 w-5 text-foreground/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent sm:block" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DIRECT CONTACT
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
                  Direct contact
                </span>
              </div>
            </div>

            <div className="grid gap-px overflow-hidden rounded-xl border border-border sm:grid-cols-2">
              {/* Email */}
              <a
                href="mailto:cvi@gmail.com"
                className="group bg-surface p-8 transition-colors duration-300 hover:bg-background sm:p-10"
              >
                <Mail className="h-6 w-6 text-accent" />

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-foreground/40">
                  Email
                </p>

                <p
                  className="mt-3 break-all text-2xl leading-tight text-foreground"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                  }}
                >
                  cvi@gmail.com
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-foreground/50 transition-colors group-hover:text-accent">
                  Compose an email
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:07011308129"
                className="group bg-surface p-8 transition-colors duration-300 hover:bg-background sm:p-10"
              >
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
                  07011308129
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-foreground/50 transition-colors group-hover:text-accent">
                  Call CVI
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/100069913210617/posts/1304950281845400/?app=fbl"
                target="_blank"
                rel="noreferrer"
                className="group bg-surface p-8 transition-colors duration-300 hover:bg-background sm:p-10"
                aria-label="Follow CVI on Facebook"
              >
                <div className="flex h-6 w-6 items-center justify-center text-accent">
                  <FaFacebookF className="h-5 w-5" />
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-foreground/40">
                  Social
                </p>

                <p
                  className="mt-3 text-2xl leading-tight text-foreground"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                  }}
                >
                  Facebook
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-foreground/50 transition-colors group-hover:text-accent">
                  Follow our updates
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>

              {/* Organization profile */}
              <a
                href="/cvi-organizational-profile.pdf"
                target="_blank"
                rel="noreferrer"
                className="group bg-surface p-8 transition-colors duration-300 hover:bg-background sm:p-10"
              >
                <FileText className="h-6 w-6 text-accent" />

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-foreground/40">
                  Information
                </p>

                <p
                  className="mt-3 text-2xl leading-tight text-foreground"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                  }}
                >
                  Organization profile
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-foreground/50 transition-colors group-hover:text-accent">
                  Download profile
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INQUIRY FORM
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
                  Start a conversation
                </span>
              </div>

            </div>

            <form
              id="contact-form"
              className="rounded-xl border border-border bg-surface p-7 sm:p-10"
              action="mailto:cvi@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                    CVI enquiry
                  </p>

                  <h3
                    className="mt-3 text-3xl text-foreground"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                    }}
                  >
                    Send an inquiry
                  </h3>
                </div>

                <MessageSquare className="mt-1 h-6 w-6 shrink-0 text-accent" />
              </div>

              <div className="mt-8 grid gap-5">
                <label className="grid gap-2 text-sm font-bold text-foreground">
                  Name
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    className="min-h-12 border border-border bg-background px-4 py-3 font-normal text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-accent"
                    placeholder="Your name"
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-foreground">
                  Organization
                  <input
                    name="organization"
                    autoComplete="organization"
                    className="min-h-12 border border-border bg-background px-4 py-3 font-normal text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-accent"
                    placeholder="Organization or institution"
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-foreground">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="min-h-12 border border-border bg-background px-4 py-3 font-normal text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-accent"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-foreground">
                  What would you like to discuss?
                  <textarea
                    required
                    name="message"
                    rows={6}
                    className="resize-y border border-border bg-background px-4 py-3 font-normal text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-accent"
                    placeholder="Tell us briefly about your enquiry..."
                  />
                </label>

                <button
                  type="submit"
                  className="group mt-2 inline-flex w-fit items-center gap-3 rounded-md bg-accent px-6 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
                >
                  Send inquiry
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <p className="text-xs leading-5 text-foreground/40">
                  Submitting this form will open your email application with
                  the enquiry addressed to CVI.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-foreground text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.1]">
          <svg
            className="h-full w-full"
            viewBox="0 0 800 450"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <path
              d="M0 350 L180 170 L320 290 L500 90 L800 260"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />

            <path
              d="M0 390 L180 210 L320 330 L500 130 L800 300"
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
              Good work is built with the right people around the table.
            </h2>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="mailto:cvi@gmail.com"
                className="group inline-flex items-center gap-4 rounded-md bg-accent px-6 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
              >
                Email CVI
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="tel:07011308129"
                className="inline-flex items-center gap-3 rounded-md border border-white/20 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                <Phone className="h-4 w-4" />
                07011308129
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}