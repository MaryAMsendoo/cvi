type Stat = { value: string; label: string };

export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 border-y border-border sm:grid-cols-4">
      {stats.map((stat, index) => (
        <div key={stat.label} className={`group border-r border-border px-5 py-8 last:border-r-0 ${index % 2 === 1 ? "border-r-0 sm:border-r" : ""}`}>
          <p className="text-5xl font-bold tracking-tight text-primary-strong transition-colors group-hover:text-accent">{stat.value}</p>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}