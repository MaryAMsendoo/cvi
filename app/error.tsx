'use client';

import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[60vh] flex-1 items-center justify-center px-6 py-24" role="alert">
      <div className="max-w-lg text-center">
        <p className="eyebrow justify-center">CVI</p>
        <h1 className="mt-5 text-4xl font-semibold text-primary-strong sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
          Something went wrong
        </h1>
        <p className="mt-5 text-base leading-7 text-foreground/75">
          We couldn&apos;t load this page right now. Please try again, or return to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-full bg-accent px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-strong"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-primary px-5 py-3 text-sm font-bold text-primary-strong transition-colors hover:bg-surface-muted"
          >
            Go home
          </a>
        </div>
      </div>
    </main>
  );
}
