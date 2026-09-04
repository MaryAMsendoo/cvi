import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProgrammeCard } from "@/components/programme-card";
import { StatGrid } from "@/components/stat-grid";
import { organization, programmes, stats } from "@/lib/content";

export default function Home() {
  return (
    <main className="bg-background font-sans">
      <section className="relative mx-auto grid max-w-7xl gap-12 overflow-hidden px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:py-24">
        <div className="relative z-10 reveal">
          <p className="eyebrow">Citizens Voices International</p>
          <h1 className="mt-7 max-w-3xl text-5xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-7xl lg:text-8xl">Empowered citizens driving a more inclusive future.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-primary-strong">{organization.mission} We focus on youth empowerment, inclusive governance, and human capital development across Benue State and Nigeria&apos;s Middle Belt.</p>
          <div className="mt-10 flex flex-wrap gap-4"><Link className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-white shadow-[0_12px_24px_rgba(244,81,79,0.18)] transition-transform hover:-translate-y-1 hover:bg-primary-strong" href="/get-involved">Partner with us <ArrowUpRight size={18} aria-hidden="true" /></Link><Link className="rounded-full border-2 border-primary px-6 py-3 font-bold text-primary-strong transition-colors hover:bg-surface-muted" href="/about">Understand our work</Link></div>
        </div>
        <div className="relative min-h-112 reveal reveal-delay lg:min-h-152" aria-label="CVI team portraits">
          <div className="absolute right-4 top-3 z-20 w-44 rotate-3 bg-surface p-2 pb-6 shadow-xl sm:w-52"><Image src="/michealbenjamin.jpeg" alt="Michael Benjamin" width={500} height={500} className="aspect-square w-full object-cover" priority /><p className="mt-3 px-2 text-xs font-bold uppercase tracking-[0.12em] text-primary-strong">People first</p></div>
          <div className="absolute bottom-3 left-3 z-10 w-48 -rotate-6 bg-surface p-2 pb-6 shadow-xl sm:w-56"><Image src="/lucyiorliam.jpeg" alt="Lucy Iorliam" width={500} height={500} className="aspect-square w-full object-cover" priority /><p className="mt-3 px-2 text-xs font-bold uppercase tracking-[0.12em] text-primary-strong">Evidence matters</p></div>
          <div className="absolute bottom-14 right-1 w-44 rotate-6 bg-surface p-2 pb-6 shadow-xl sm:w-52"><Image src="/tuleunkelvin.jpeg" alt="Tuleun A. Kelvin" width={500} height={500} className="aspect-square w-full object-cover" priority /><p className="mt-3 px-2 text-xs font-bold uppercase tracking-[0.12em] text-primary-strong">Local leadership</p></div>
          <div className="absolute left-1/2 top-1/2 z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface-muted sm:h-96 sm:w-96" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center text-xs font-bold uppercase tracking-[0.2em] text-accent">Makurdi · Benue · Nigeria</div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-4 lg:px-10"><StatGrid stats={stats} /></section>
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="flex items-end justify-between gap-6"><div><p className="eyebrow">What we do</p><h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight text-foreground sm:text-5xl">Programmes with a practical purpose.</h2></div><Link href="/programs" className="hidden items-center gap-1 text-sm font-bold text-primary-strong sm:inline-flex">All programmes <ArrowUpRight size={15} aria-hidden="true" /></Link></div><div className="mt-10 grid gap-6 md:grid-cols-2">{programmes.map((programme) => <ProgrammeCard key={programme.title} programme={programme} />)}</div></section>
      <section className="bg-surface-muted px-6 py-24 lg:px-10"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center"><div><p className="eyebrow">Due diligence, made clear</p><h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight text-foreground sm:text-5xl">A young organization building with accountability.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-primary-strong">Explore our governance, people, programmes, and early results. We are transparent about what exists today and what is still being built.</p></div><div className="border-l-2 border-accent pl-7"><p className="text-3xl font-bold leading-tight text-foreground">The best partnerships begin with a clear picture.</p><Link href="/governance" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-white transition-transform hover:-translate-y-1 hover:bg-primary-strong">View governance <ArrowUpRight size={18} aria-hidden="true" /></Link></div></div></section>
    </main>
  );
}
