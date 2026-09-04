type PageIntroProps = { eyebrow: string; title: string; description: string };

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return <section className="relative overflow-hidden bg-primary px-6 py-16 text-white lg:px-10 lg:py-24"><div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/15" aria-hidden="true" /><div className="absolute -bottom-40 right-24 h-72 w-72 rounded-full border border-accent/50" aria-hidden="true" /><div className="relative mx-auto max-w-7xl"><p className="eyebrow text-surface-muted">{eyebrow}</p><h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-surface-muted">{description}</p></div></section>;
}