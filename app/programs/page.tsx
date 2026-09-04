import { PageIntro } from "@/components/page-intro";
import { ProgrammeCard } from "@/components/programme-card";
import { programmes } from "@/lib/content";

export const metadata = { title: "Programs" };

export default function ProgramsPage() {
  return <main><PageIntro eyebrow="Programmes" title="Learning that meets people where they are." description="Our programme portfolio is intentionally practical: build skills, widen participation, and create pathways young people can use." /><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><div className="grid gap-6 md:grid-cols-2">{programmes.map((programme) => <ProgrammeCard key={programme.title} programme={programme} />)}</div><section className="mt-16 border-t border-border pt-10"><p className="max-w-3xl text-lg leading-8 text-primary-strong">Programmes are documented as they are delivered. CVI will add cohort stories, learning outcomes, and future programme updates as evidence becomes available.</p></section></div></main>;
}