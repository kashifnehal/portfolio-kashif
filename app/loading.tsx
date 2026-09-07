export default function Loading() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-background text-foreground"
      aria-busy="true"
    >
      <p className="font-mono text-sm uppercase tracking-wide">Loading</p>
    </div>
  );
}
