import { PersonCard } from "@/components/person-card";
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
      <section className="relative overflow-hidden bg-foreground text-white">
        <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
          <svg
            className="h-full w-full"
            viewBox="0 0 800 500"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <path
              d="M-80 380 C 100 270, 190 430, 350 320 S 600 150, 880 250"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M-80 420 C 100 310, 190 470, 350 360 S 600 190, 880 290"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M-80 460 C 100 350, 190 510, 350 400 S 600 230, 880 330"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />

            <circle
              cx="650"
              cy="90"
              r="130"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle
              cx="650"
              cy="90"
              r="95"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-7 w-1.5 rounded-full bg-accent" />

                <span className="text-sm font-medium text-white/60">
                  People and leadership
                </span>
              </div>

              <div className="mt-12 max-w-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Governance · Delivery · Accountability
                </p>

                <p className="mt-5 text-sm leading-7 text-white/55">
                  CVI is intentionally lean, with governance and programme
                  delivery kept close to the people responsible for them.
                </p>
              </div>
            </div>

            <div>
              <h1
                className="max-w-5xl text-5xl leading-[0.96] tracking-[-0.03em] sm:text-6xl lg:text-8xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                }}
              >
                Small team.
                <br />
                Serious
                <br />
                responsibility.
              </h1>
            </div>
          </div>

          <div className="mt-16 grid gap-7 border-t border-white/15 pt-6 sm:grid-cols-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/35">
                Trustees
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                {trusteeCount} registered trustees
              </p>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/35">
                Staff
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                {staffCount} full-time staff
              </p>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/35">
                Volunteers
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                {volunteerCount} active volunteers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Everything below remains unchanged */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-16 grid gap-4 sm:grid-cols-3">
          {stats.slice(1, 4).map((stat) => (
            <div
              key={stat.label}
              className="border-l-4 border-accent pl-5"
            >
              <p className="text-4xl font-bold text-primary-strong">
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