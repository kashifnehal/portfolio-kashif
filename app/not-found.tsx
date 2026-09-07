import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-5 pt-[55px] text-center text-foreground">
      <p className="font-mono text-sm uppercase tracking-wide text-muted">404</p>
      <h1 className="font-display text-4xl font-semibold uppercase">Page not found</h1>
      <Link
        className="font-mono text-xs uppercase tracking-[0.14em] text-muted underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        href="/"
      >
        Back home
      </Link>
    </div>
  );
}
