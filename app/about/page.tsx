import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { organization } from "@/lib/content";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return <main>
    <PageIntro eyebrow="About CVI" title="Removing the barriers between young Nigerians and opportunity." description={organization.description} />
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <section>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">Our story</p>
            <h2 className="mt-3 text-4xl font-bold">From local action to a lasting institution.</h2>
            <p className="mt-6 leading-8 text-primary-strong">CVI has been operational since 2025 and was incorporated as a trustee on 8 June 2026. We are based in Makurdi and work at the intersection of skills, participation, and sustainable development.</p>
            <div className="mt-10 border-l-4 border-accent pl-6">
                <p className="text-xl font-bold text-foreground">{organization.founded}</p>
                <p className="mt-2 text-primary-strong">A lean, hands-on organization with two registered trustees and a growing delivery team.</p></div>
                </section><aside className="bg-surface-muted p-8"><p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Our focus</p><ul className="mt-6 space-y-4 font-bold text-primary-strong"><li>Youth empowerment</li><li>Inclusive governance</li><li>Human capital development</li></ul><Link href="/team" className="mt-10 inline-block font-bold text-accent">Meet the team →</Link></aside></div></main>;
}