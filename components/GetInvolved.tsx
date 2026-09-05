// components/GetInvolved.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { FileDown, Handshake, Users } from "lucide-react";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";

const PATHS = [
  {
    icon: Handshake,
    title: "Partner with us",
    detail: "Institutional or funding partnerships",
    href: "#inquiry-form",
  },
  {
    icon: Users,
    title: "Volunteer",
    detail: "Join our active volunteer network",
    href: "#inquiry-form",
  },
  {
    icon: FileDown,
    title: "Download our profile",
    detail: "Full organizational profile, PDF",
    href: "/cvi-organizational-profile.pdf",
  },
];

export default function GetInvolved() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // TODO: wire to an actual endpoint — currently just simulates a send
    const formData = new FormData(e.currentTarget);
    console.log(Object.fromEntries(formData));
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden bg-foreground px-6 py-24 sm:px-10">
      <SectionBackdrop variant="b" tone="dark" />
      <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1fr]">
        {/* Left: headline + engagement paths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3">
            <span className="h-6 w-1.5 rounded-full bg-accent" />
            <span className="text-sm font-medium text-surface/60">Get Involved</span>
          </div>
          <h2
            className="mt-5 max-w-md text-3xl leading-tight text-surface sm:text-4xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            Build inclusive governance in Benue with us
          </h2>
          <p className="mt-5 max-w-md text-surface/70">
            Whether you&rsquo;re reviewing a funding decision, considering an
            institutional partnership, or want to give your time, there&rsquo;s a
            direct way in.
          </p>

          <div className="mt-10 space-y-4">
            {PATHS.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.href}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="group flex items-center gap-4 rounded-lg border border-surface/15 bg-surface/5 p-5 transition-colors hover:bg-surface/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <p.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="font-medium text-surface">{p.title}</div>
                  <div className="text-sm text-surface/55">{p.detail}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right: inquiry form */}
        <motion.div
          id="inquiry-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="rounded-xl border border-surface/15 bg-surface p-8 sm:p-10"
        >
          {submitted ? (
            <div className="flex h-full min-h-[380px] flex-col items-center justify-center text-center">
              <h3
                className="text-2xl text-foreground"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                Message received
              </h3>
              <p className="mt-3 max-w-xs text-sm text-foreground/60">
                Thank you for reaching out — someone from CVI will get back to you
                shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3
                className="text-xl text-foreground"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                Send us a message
              </h3>

              <div>
                <label htmlFor="name" className="text-sm text-foreground/70">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  className="mt-1.5 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="organization" className="text-sm text-foreground/70">
                  Organization <span className="text-foreground/40">(optional)</span>
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  className="mt-1.5 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm text-foreground/70">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  className="mt-1.5 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-foreground/70">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="mt-1.5 w-full resize-none rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-primary px-6 py-3 text-sm font-semibold text-surface transition-colors hover:bg-primary-strong disabled:opacity-60"
              >
                {loading ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}