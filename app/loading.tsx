export default function Loading() {
  return (
    <main className="flex min-h-[60vh] flex-1 items-center justify-center px-6 py-24" aria-busy="true" aria-live="polite">
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-border" aria-hidden="true">
          <div className="absolute inset-[-4px] animate-spin rounded-full border-4 border-transparent border-t-accent" />
          <span className="text-sm font-bold text-primary-strong">CVI</span>
        </div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-strong">Loading...</p>
      </div>
    </main>
  );
}
