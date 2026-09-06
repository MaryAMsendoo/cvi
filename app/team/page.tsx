import { PersonCard } from "@/components/person-card";
import { PageHero } from "@/components/ui/PageHero";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";
import { people, stats } from "@/lib/content";

export const metadata = { title: "Our Team" };

export default function TeamPage() {
  const groups = ["Board of Trustees", "Key Staff"] as const;

  // Pull hero figures from the same stats array used below, instead of
  // hardcoding them separately — one source of truth for these numbers.
  // Falls back to a literal string if a label isn't found, so the page
  // never renders "undefined" if `lib/content.ts` changes shape.
  const findStat = (label: string) =>
    stats.find((s) => s.label.toLowerCase().includes(label))?.value;

  const trusteeCount = findStat("trustee") ?? "2";
  const staffCount = findStat("staff") ?? "4";
  const volunteerCount = findStat("volunteer") ?? "9";

  return (
    <main>
      {/* Team Hero */}
      <PageHero
        eyebrow="People and leadership"
        title="Small team with a Serious responsibility."
        image="/p28.jpg"
      />

      {/* Everything below remains unchanged */}
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16 lg:px-10">
        <div className="mb-16 grid gap-4 sm:grid-cols-3">
          {stats.slice(1, 4).map((stat) => (
            <div
              key={stat.label}
              className="border-l-4 border-accent pl-5"
            >
              <p className="text-3xl font-bold text-primary-strong">
                {stat.value}
              </p>

              <p className="mt-1 text-sm text-primary-strong">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {groups.map((group) => (
          <section key={group} className="mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">
              {group}
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {people
                .filter((person) => person.group === group)
                .map((person) => (
                  <PersonCard
                    key={person.name}
                    person={person}
                  />
                ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}