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
import { PageHero } from "@/components/ui/PageHero";

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
      <PageHero
        eyebrow="Impact & results"
        title="What we've delivered. What we're learning."
        description="We report what has been delivered, what has been measured, and what still needs to be learned."
      />
      {/* FEATURED PROGRAMME */}
      <section className="relative overflow-hidden bg-surface py-16 sm:py-20">
        {/* <SectionBackdrop variant="f" tone="light" /> */}

        <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
          <div className="flex items-center gap-3">
            <span className="h-5 w-1 rounded-full bg-accent" />
            <span className="text-xs font-medium uppercase tracking-wide text-foreground/55">
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
                className="mt-4 text-2xl leading-snug text-foreground sm:text-3xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                Digital Skills Makurdi AI Bootcamp
              </h2>

              <p className="mt-6 text-sm leading-6 text-foreground/65 sm:text-base sm:leading-7">
                In June 2026, CVI delivered its first completed programme: a
                digital skills and artificial intelligence bootcamp for young
                people in Makurdi, Benue State.
              </p>

              <p className="mt-4 text-sm leading-6 text-foreground/65 sm:text-base sm:leading-7">
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
      <section className="relative overflow-hidden bg-background py-16 sm:py-20">
        <SectionBackdrop variant="h" tone="light" />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-5 w-1 rounded-full bg-accent" />
                <span className="text-xs font-medium uppercase tracking-wide text-foreground/55">
                  Programme focus
                </span>
              </div>

              <h2
                className="mt-4 max-w-xl text-2xl leading-snug text-foreground sm:text-3xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                Learning that starts with what people can use.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-foreground/60 sm:text-base sm:leading-7">
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
      <section className="relative overflow-hidden bg-surface-muted py-16 sm:py-20">
        <SectionBackdrop variant="c" tone="light" />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
          <div className="flex items-center gap-3">
            <span className="h-5 w-1 rounded-full bg-accent" />
            <span className="text-xs font-medium uppercase tracking-wide text-foreground/55">
              At a glance
            </span>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
              <p
                className="text-3xl text-foreground"
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

            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
              <p
                className="text-3xl text-foreground"
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

            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
              <p
                className="text-3xl text-foreground"
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
      <section className="relative overflow-hidden bg-background py-16 sm:py-20">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <div className="flex items-center gap-3">
            <span className="h-5 w-1 rounded-full bg-accent" />
            <span className="text-xs font-medium uppercase tracking-wide text-foreground/55">Moments from the bootcamp</span>
          </div>
          <h2
            className="mt-4 max-w-xl text-2xl leading-snug text-foreground sm:text-3xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            A look inside the cohort
          </h2>

          <div className="mt-14">
            <StackedGallery
              images={[
                { id: "g1", src: "/p1.jpg", alt: "Participants at the AI bootcamp" },
                { id: "g2", src: "/p2.jpg", alt: "Group training session" },
                { id: "g3", src: "/p3.jpg", alt: "Instructor leading a session" },
                { id: "g4", src: "/p4.jpg", alt: "Cohort group photo" },
                { id: "g5", src: "/p5.jpg", alt: "Participant at a laptop" },
                { id: "g6", src: "/p6.jpg", alt: "Hands-on practical session" },
                { id: "g7", src: "/p7.jpg", alt: "Bootcamp participant" },
                { id: "g8", src: "/p8.jpg", alt: "Digital skills training session" },
                { id: "g9", src: "/p9.jpg", alt: "Participants during the bootcamp" },
                { id: "g10", src: "/p10.jpg", alt: "Youth learning session" },
                { id: "g11", src: "/p11.jpg", alt: "Participant working at a laptop" },
                { id: "g12", src: "/p12.jpg", alt: "Group learning session" },
                { id: "g13", src: "/p13.jpg", alt: "Practical training activity" },
                { id: "g14", src: "/p14.jpg", alt: "Bootcamp cohort" },
                { id: "g15", src: "/p15.jpg", alt: "Participants at the training" },
                { id: "g16", src: "/p16.jpg", alt: "Digital skills workshop" },
                { id: "g18", src: "/p18.jpg", alt: "Hands-on learning activity" },
                { id: "g19", src: "/p19.jpg", alt: "Bootcamp participants together" },
                { id: "g20", src: "/p20.jpg", alt: "AI learning session" },
                { id: "g21", src: "/p21.jpg", alt: "Programme participant" },
                { id: "g22", src: "/p22.jpg", alt: "Training programme moment" },
                { id: "g23", src: "/p23.jpg", alt: "Learning and collaboration" },
                { id: "g24", src: "/p24.jpg", alt: "Cohort learning moment" },
                { id: "g25", src: "/p25.jpg", alt: "Bootcamp activity" },
                { id: "g26", src: "/p26.jpg", alt: "Participants in the programme" },
                { id: "g27", src: "/p27.jpg", alt: "Digital training activity" },
                { id: "g28", src: "/p28.jpg", alt: "Participants during a session" },
                { id: "g29", src: "/p29.jpg", alt: "Cohort programme moment" },
                { id: "g30", src: "/p30.jpg", alt: "Youth empowerment session" },
                { id: "g31", src: "/p31.jpg", alt: "Practical digital skills session" },
                { id: "g32", src: "/p32.jpg", alt: "Bootcamp group moment" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* PARTNER / SPONSOR */}
      <section className="relative overflow-hidden bg-surface py-16 sm:py-20">
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 sm:px-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-accent" />
              <span className="text-xs font-medium uppercase tracking-wide text-foreground/55">
                Programme support
              </span>
            </div>

            <h2
              className="mt-4 max-w-2xl text-2xl leading-snug text-foreground sm:text-3xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              Supported by the Mandela Washington Fellows Alumni Association of Nigeria.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-foreground/60 sm:text-base sm:leading-7">
              They sponsored the June 2026 Digital Skills Makurdi AI Bootcamp — CVI&apos;s
              first completed training programme.
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground/50">
              CVI also has an institutional tie with the Federal 3MTT Programme, separate
              from confirmed funding or sponsorship.
            </p>
          </div>

          <div className="relative rounded-2xl border border-border bg-background p-6 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Programme supporter
            </p>

            <div className="relative mt-8 h-20 w-full">
              <Image
                src="/madela.jpg"
                alt="Mandela Washington Fellows Alumni Association of Nigeria"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S NEXT */}
      <section className="relative overflow-hidden bg-foreground py-14 text-white sm:py-16">
        <SectionBackdrop variant="l" tone="dark" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 sm:px-10 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-5 w-1 rounded-full bg-accent" />
              <span className="text-xs font-medium uppercase tracking-wide text-white/55">
                Looking ahead
              </span>
            </div>

            <h2
              className="mt-4 text-2xl leading-snug sm:text-3xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              One completed programme is a beginning, not a finished story.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
              CVI is building its programme portfolio across youth empowerment,
              governance, and human capital development — shaped by what we learn from
              each community we work with.
            </p>
          </div>

          <Link
            href="/get-involved"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-primary-strong"
          >
            Discuss a partnership
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}