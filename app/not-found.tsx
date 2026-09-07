import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-5 text-center text-foreground">
      <p className="font-mono text-sm uppercase tracking-wide">404</p>
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <Link className="underline underline-offset-4" href="/">
        Back home
      </Link>
    </main>
  );
}
