"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Users,
} from "lucide-react";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";
import { StackedGallery } from "@/components/ui/StackedGallery";
import { PageHero } from "@/components/ui/PageHero";

const PROGRAMME_FOCUS = [
  {
    number: "01",
    title: "Skills & Knowledge",
    text: "Practical training in political literacy, leadership, digital skills, and AI.",
  },
  {
    number: "02",
    title: "Leadership & Participation",
    text: "Building confidence to engage in governance, advocacy, and community leadership.",
  },
  {
    number: "03",
    title: "Opportunity & Impact",
    text: "Turning new skills into community action, digital engagement, and opportunities.",
  },
];

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <PageHero
        eyebrow="Programmes"
        title="Turning learning into practical opportunity."
        image="/p1.jpg"
      />

      {/* FEATURED PROGRAMME */}
      <section className="relative overflow-hidden bg-surface py-16 sm:py-20">
        <div className="relative mx-auto max-w-6xl px-6 sm:px-10">

          {/* SOYIPF I */}
          <div className="flex items-center gap-3">
            <span className="h-5 w-1 rounded-full bg-accent" />
            <span className="text-xs font-medium uppercase tracking-wide text-foreground/55">
              Completed programme · 2025
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
                  src="/s4.jpeg"
                  alt="Simi Olusola Youth in Politics Fellowship"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-5 right-5 rounded-xl border border-border bg-background px-5 py-4 shadow-xl sm:right-8">
                <p className="text-3xl text-accent">62</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-foreground/50">
                  youth fellows trained
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
                Political literacy · Leadership · Youth
              </p>

              <h2
                className="mt-4 text-2xl leading-snug text-foreground sm:text-3xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                Simi Olusola Youth in Politics Fellowship (SOYIPF I)
              </h2>

              <p className="mt-6 text-sm leading-6 text-foreground/65 sm:text-base sm:leading-7">
                CVI's first completed programme — a residential fellowship equipping
                young Nigerians aged 18–40 with political literacy, leadership, and
                advocacy skills to engage meaningfully in governance.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground/70">
                  <CalendarDays size={15} className="text-accent" />
                  2025
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground/70">
                  <MapPin size={15} className="text-accent" />
                  Akwa Ibom State
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground/70">
                  <Users size={15} className="text-accent" />
                  62 fellows
                </div>
              </div>
            </motion.div>
          </div>

          {/* AI BOOTCAMP */}
          <div className="mt-24 flex items-center gap-3">
            <span className="h-5 w-1 rounded-full bg-accent" />
            <span className="text-xs font-medium uppercase tracking-wide text-foreground/55">
              Completed programme · 2026
            </span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            {/* CONTENT (left this time, for rhythm) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65 }}
              className="lg:order-1"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
                Digital skills · AI · Youth
              </p>

              <h2
                className="mt-4 text-2xl leading-snug text-foreground sm:text-3xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                Digital Skills Makurdi AI Bootcamp
              </h2>

              <p className="mt-6 text-sm leading-6 text-foreground/65 sm:text-base sm:leading-7">
                In 2026, CVI delivered its second completed programme — a
                digital skills and AI bootcamp for young people in Makurdi, Benue
                State, introducing foundational AI concepts and practical digital
                skills.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground/70">
                  <CalendarDays size={15} className="text-accent" />
                  2026
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground/70">
                  <MapPin size={15} className="text-accent" />
                  Makurdi, Benue State
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground/70">
                  <Users size={15} className="text-accent" />
                  47 youths
                </div>
              </div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65 }}
              className="relative lg:order-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                <Image
                  src="/p9.jpg"
                  alt="Digital Skills Makurdi AI Bootcamp"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-5 left-5 rounded-xl border border-border bg-background px-5 py-4 shadow-xl sm:left-8">
                <p className="text-3xl text-accent">47</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-foreground/50">
                  youths trained
                </p>
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
  Building skills that create opportunity and impact.
        </h2>

        <p className="mt-6 max-w-md text-sm leading-6 text-foreground/60 sm:text-base sm:leading-7">
          Across its completed programmes, CVI combines practical learning,
          leadership development, and community engagement to help young people
          participate more meaningfully in governance, technology, and the
          opportunities shaping their futures.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
        {PROGRAMME_FOCUS.map((area, index) => (
          <motion.article
            key={area.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            className="bg-surface p-6 sm:p-7"
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
        <SectionBackdrop variant="g" tone="light" />

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
                109
              </p>

              <p className="mt-4 font-bold text-foreground">
                Young people reached
              </p>

              <p className="mt-2 text-sm leading-6 text-foreground/55">
                Participants across CVI's completed programmes.
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
                02
              </p>

              <p className="mt-4 font-bold text-foreground">
                Completed Programmes
              </p>

              <p className="mt-2 text-sm leading-6 text-foreground/55">
                Youth-focused programmes delivered by CVI.
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
                2025 - 2026
              </p>

              <p className="mt-4 font-bold text-foreground">
                Programme period
              </p>

              <p className="mt-2 text-sm leading-6 text-foreground/55">
                CVI's completed two programmes year.
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
                { id: "g2", src: "/p2.jpg", alt: "Group training session" },
                { id: "s1", src: "/s1.jpeg", alt: "SOYIPF project activity" },
                { id: "g3", src: "/p3.jpg", alt: "Instructor leading a session" },
                { id: "s2", src: "/s2.jpeg", alt: "SOYIPF workshop" },
                { id: "g4", src: "/p4.jpg", alt: "Cohort group photo" },
                { id: "s3", src: "/s3.jpeg", alt: "Fellows in discussion" },
                { id: "g10", src: "/p10.jpg", alt: "Youth learning session" },
                { id: "s4", src: "/s4.jpeg", alt: "Training and mentorship session" },
                { id: "g5", src: "/p5.jpg", alt: "Participant at a laptop" },
                { id: "s5", src: "/s5.jpeg", alt: "Youth leadership activity" },
                { id: "g6", src: "/p6.jpg", alt: "Hands-on practical session" },
                { id: "s6", src: "/s6.jpeg", alt: "Youth advocacy workshop" },
                { id: "g7", src: "/p7.jpg", alt: "Bootcamp participant" },
                { id: "s7", src: "/s7.jpeg", alt: "Youth civic participation session" },
                { id: "g8", src: "/p8.jpg", alt: "Digital skills training session" },
                { id: "s8", src: "/s8.jpeg", alt: "Youth politics fellowship session" },
                { id: "g9", src: "/p9.jpg", alt: "Participants during the bootcamp" },
                { id: "s9", src: "/s9.jpeg", alt: "Community project activity" },
                { id: "g11", src: "/p11.jpg", alt: "Participant working at a laptop" },
                { id: "s10", src: "/s10.jpeg", alt: "Project team and participants" },
                { id: "g12", src: "/p12.jpg", alt: "Group learning session" },
                { id: "s11", src: "/s11.jpeg", alt: "Fellows working together" },
                { id: "g13", src: "/p13.jpg", alt: "Practical training activity" },
                { id: "s12", src: "/s12.jpeg", alt: "Community engagement activity" },
                { id: "g14", src: "/p14.jpg", alt: "Bootcamp cohort" },
                { id: "s13", src: "/s13.jpeg", alt: "SOYIPF community engagement" },
                { id: "g15", src: "/p15.jpg", alt: "Participants at the training" },
                { id: "s14", src: "/s14.jpeg", alt: "Fellowship participants" },
                { id: "g16", src: "/p16.jpg", alt: "Digital skills workshop" },
                { id: "s15", src: "/s15.jpeg", alt: "Fellowship project moment" },
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
                { id: "g31", src: "/p31.jpg", alt: "Practical digital skills session" },
                { id: "g29", src: "/p29.jpg", alt: "Cohort programme moment" },
                { id: "g32", src: "/p32.jpg", alt: "Bootcamp group moment" },
                { id: "g30", src: "/p30.jpg", alt: "Youth empowerment session" },
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
              Delivered with support from the Mandela Washington Fellows
              Alumni Association of Nigeria.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-6 text-foreground/60 sm:text-base sm:leading-7">
              The Mandela Washington Fellows Alumni Association of Nigeria
              sponsored the 2026 Digital Skills Makurdi AI Bootcamp, one of
              CVI&apos;s two projects alongside the Simi Olusola Youth in Politics
              Fellowship (SOYIPF I).
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-foreground/50">
              CVI also has contextual institutional ties with the Federal 3MTT
              Programme. These relationships are presented separately from
              confirmed programme funding or sponsorship.
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
              Two completed programmes is a beginning, not a finished story.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
              CVI is continuing to develop its programme portfolio around youth
              empowerment, inclusive governance, and human capital development.
              Future programmes will build on what we learn from implementation
              and from the communities we work with.
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