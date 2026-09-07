"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-5 pt-[55px] text-center text-foreground">
      <h1 className="font-display text-2xl font-semibold uppercase">Something went wrong</h1>
      <button
        className="rounded-full border px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:border-foreground hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        style={{ borderColor: "var(--color-border)" }}
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
