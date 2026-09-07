"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-5 text-center text-foreground">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <button
        className="rounded border border-foreground/40 px-4 py-2 text-sm"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
