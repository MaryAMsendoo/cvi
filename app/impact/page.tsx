"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Users,
} from "lucide-react";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";
import { StackedGallery } from "@/components/ui/StackedGallery";

const LEARNING_AREAS = [
  {
    number: "01",
    title: "AI fundamentals",
    text: "Participants were introduced to core concepts behind artificial intelligence and how AI systems are used in everyday contexts.",
  },
  {
    number: "02",
    title: "Practical digital skills",
    text: "The programme focused on practical exposure rather than theory alone, helping participants build confidence with emerging digital tools.",
  },
  {
    number: "03",
    title: "Future opportunities",
    text: "The bootcamp connected digital learning with the wider opportunities emerging around technology, entrepreneurship, and the changing world of work.",
  },
];

export default function Page() {
  return (
    <main>
      {/* HERO */}
      {/* HERO */}
<section className="relative min-h-[620px] overflow-hidden bg-foreground text-white sm:min-h-[680px]">
  {/* Background image */}
  <div className="absolute inset-0">
    <Image
      src="/img22.png"
      alt=""
      fill
      priority
      className="object-cover object-center"
    />
  </div>

  {/* Image treatment */}
  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,32,38,0.96)_0%,rgba(5,55,63,0.88)_38%,rgba(5,55,63,0.62)_68%,rgba(5,32,38,0.45)_100%)]" />

  {/* Bottom fade */}
  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-foreground/80 to-transparent" />

  <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-6 py-20 sm:min-h-[680px] sm:px-10 sm:py-24">
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      className="max-w-4xl"
    >
      <div className="flex items-center gap-3">
        <span className="h-7 w-1.5 rounded-full bg-accent" />

        <span className="text-sm font-medium text-white/65">
          Programmes
        </span>
      </div>

      <h1
        className="mt-6 max-w-4xl text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-8xl"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
        }}
      >
        Turning learning
        <br />
        into practical
        <br />
        opportunity.
      </h1>

      <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
        CVI designs practical programmes around the skills, opportunities,
        and civic capabilities young people need to participate and thrive.
      </p>

      <div className="mt-10 flex items-center gap-3 text-sm text-white/45">
        <ArrowDown size={16} aria-hidden="true" />
        <span>Explore our completed programme</span>
      </div>
    </motion.div>
  </div>
</section>

      {/* FEATURED PROGRAMME */}
      <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
        {/* <SectionBackdrop variant="f" tone="light" /> */}

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <div className="flex items-center gap-3">
            <span className="h-6 w-1.5 rounded-full bg-accent" />
            <span className="text-sm font-medium text-foreground/60">
              Completed programme · June 2026
            </span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                <Image
                  src="/img22.png"
                  alt="Digital Skills Makurdi AI Bootcamp"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-5 right-5 rounded-xl border border-border bg-background px-5 py-4 shadow-xl sm:right-8">
                <p className="text-3xl text-accent">57</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-foreground/50">
                  youths trained
                </p>
              </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
                Digital skills · AI · Youth
              </p>

              <h2
                className="mt-4 text-3xl leading-tight text-foreground sm:text-5xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                Digital Skills Makurdi AI Bootcamp
              </h2>

              <p className="mt-6 text-base leading-7 text-foreground/65">
                In June 2026, CVI delivered its first completed programme: a
                digital skills and artificial intelligence bootcamp for young
                people in Makurdi, Benue State.
              </p>

              <p className="mt-4 text-base leading-7 text-foreground/65">
                The programme introduced participants to foundational AI
                concepts and practical digital skills, creating an entry point
                for young people to better understand and engage with emerging
                technologies.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground/70">
                  <CalendarDays size={15} className="text-accent" />
                  June 2026
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground/70">
                  <MapPin size={15} className="text-accent" />
                  Makurdi, Benue
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground/70">
                  <Users size={15} className="text-accent" />
                  57 youths
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT THE PROGRAMME COVERED */}
      <section className="relative overflow-hidden bg-background py-24 sm:py-32">
        <SectionBackdrop variant="h" tone="light" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-6 w-1.5 rounded-full bg-accent" />
                <span className="text-sm font-medium text-foreground/60">
                  Programme focus
                </span>
              </div>

              <h2
                className="mt-5 max-w-xl text-3xl leading-tight text-foreground sm:text-5xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                Learning that starts with what people can use.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-foreground/60">
                The bootcamp was designed as a practical introduction to
                artificial intelligence and digital skills for young people in
                Makurdi.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
              {LEARNING_AREAS.map((area, index) => (
                <motion.article
                  key={area.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="bg-surface p-7 sm:p-8"
                >
                  <p className="text-xs font-bold tracking-[0.18em] text-accent">
                    {area.number}
                  </p>

                  <h3
                    className="mt-12 text-xl text-foreground"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                    }}
                  >
                    {area.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-foreground/60">
                    {area.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMME FACTS */}
      <section className="relative overflow-hidden bg-surface-muted py-24 sm:py-28">
        <SectionBackdrop variant="c" tone="light" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <div className="flex items-center gap-3">
            <span className="h-6 w-1.5 rounded-full bg-accent" />
            <span className="text-sm font-medium text-foreground/60">
              At a glance
            </span>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-7 sm:p-9">
              <p
                className="text-5xl text-foreground sm:text-6xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                57
              </p>

              <p className="mt-4 font-bold text-foreground">
                Young people trained
              </p>

              <p className="mt-2 text-sm leading-6 text-foreground/55">
                Participants reached through the June 2026 bootcamp.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-7 sm:p-9">
              <p
                className="text-5xl text-foreground sm:text-6xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                01
              </p>

              <p className="mt-4 font-bold text-foreground">
                Completed cohort
              </p>

              <p className="mt-2 text-sm leading-6 text-foreground/55">
                CVI&apos;s first delivered training programme.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-7 sm:p-9">
              <p
                className="text-5xl text-foreground sm:text-6xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                2026
              </p>

              <p className="mt-4 font-bold text-foreground">
                First programme year
              </p>

              <p className="mt-2 text-sm leading-6 text-foreground/55">
                The year CVI formally launched its first completed programme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MOMENTS FROM THE BOOTCAMP */}
      <section className="relative overflow-hidden bg-background py-24 sm:py-28">
        <SectionBackdrop variant="a" tone="light" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <div className="flex items-center gap-3">
            <span className="h-6 w-1.5 rounded-full bg-accent" />
            <span className="text-sm font-medium text-foreground/60">Moments from the bootcamp</span>
          </div>
          <h2
            className="mt-5 max-w-xl text-3xl leading-tight text-foreground sm:text-5xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            A look inside the cohort
          </h2>

          <div className="mt-14">
            <StackedGallery
              images={[
                { id: "g1", src: "/img5.png", alt: "Participants at the AI bootcamp" },
                { id: "g2", src: "/img6.png", alt: "Group training session" },
                { id: "g3", src: "/img8.png", alt: "Instructor leading a session" },
                { id: "g4", src: "/img9.png", alt: "Cohort group photo" },
                { id: "g5", src: "/img14.png", alt: "Participant at a laptop" },
                { id: "g6", src: "/img18.png", alt: "Hands-on practical session" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* PARTNER / SPONSOR */}
      <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
        <SectionBackdrop variant="i" tone="light" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-6 w-1.5 rounded-full bg-accent" />
              <span className="text-sm font-medium text-foreground/60">
                Programme support
              </span>
            </div>

            <h2
              className="mt-5 max-w-2xl text-3xl leading-tight text-foreground sm:text-5xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              Delivered with support from the Mandela Washington Fellows
              Alumni Association of Nigeria.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-foreground/60">
              The Mandela Washington Fellows Alumni Association of Nigeria
              sponsored the June 2026 Digital Skills Makurdi AI Bootcamp,
              supporting CVI&apos;s first completed training programme.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-foreground/50">
              CVI also has contextual institutional ties with the Federal 3MTT
              Programme. These relationships are presented separately from
              confirmed programme funding or sponsorship.
            </p>
          </div>

          <div className="relative rounded-2xl border border-border bg-background p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Programme supporter
            </p>

            <div className="relative mt-8 h-20 w-full">
              <Image
                src="/mandela.jpeg"
                alt="Mandela Washington Fellows Alumni Association of Nigeria"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S NEXT */}
      <section className="relative overflow-hidden bg-foreground py-24 text-white sm:py-28">
        <SectionBackdrop variant="l" tone="dark" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-6 w-1.5 rounded-full bg-accent" />
              <span className="text-sm font-medium text-white/60">
                Looking ahead
              </span>
            </div>

            <h2
              className="mt-5 text-3xl leading-tight sm:text-5xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              One completed programme is a beginning, not a finished story.
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-white/60">
              CVI is continuing to develop its programme portfolio around youth
              empowerment, inclusive governance, and human capital development.
              Future programmes will build on what we learn from implementation
              and from the communities we work with.
            </p>
          </div>

          <Link
            href="/get-involved"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-primary-strong"
          >
            Discuss a partnership
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}