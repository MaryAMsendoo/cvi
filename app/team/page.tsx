import { PageIntro } from "@/components/page-intro";
import { PersonCard } from "@/components/person-card";
import { people, stats } from "@/lib/content";

export const metadata = { title: "Our Team" };

export default function TeamPage() {
  const groups = ["Board of Trustees", "Key Staff"] as const;
  return <main><PageIntro eyebrow="People and leadership" title="Small team. Serious responsibility." description="CVI is governed by two registered trustees and delivered by a focused team of staff and volunteers." /><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><div className="mb-16 grid gap-4 sm:grid-cols-3">{stats.slice(1, 4).map((stat) => <div key={stat.label} className="border-l-4 border-accent pl-5"><p className="text-4xl font-bold text-primary-strong">{stat.value}</p><p className="mt-1 text-sm text-primary-strong">{stat.label}</p></div>)}</div>{groups.map((group) => <section key={group} className="mb-16"><p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">{group}</p><div className="mt-6 grid gap-6 md:grid-cols-2">{people.filter((person) => person.group === group).map((person) => <PersonCard key={person.name} person={person} />)}</div></section>)}</div></main>;
}