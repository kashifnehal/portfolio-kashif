import { recognition } from "@/content/recognition";

export default function RecognitionSection() {
  return (
    <section
      id="awards"
      className="relative px-gutter py-24 md:py-36 border-t border-white/10 bg-background text-foreground"
      aria-labelledby="recognition-heading"
    >
      <div className="mx-auto max-w-content">
        {/* Header row with main title and awards count badge */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-overlay">
              &amp; I win awards sometimes
            </span>
            <h2
              id="recognition-heading"
              className="mt-3 font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              I am honored to work with special people
            </h2>
          </div>

          {/* Awards Badge Count */}
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-surface/80 px-6 py-4 backdrop-blur-md">
            <svg
              className="h-6 w-6 animate-[spin_12s_linear_infinite] text-overlay"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
            <div>
              <span className="font-display text-3xl font-extrabold text-foreground">69</span>
              <span className="ml-2 font-mono text-xs uppercase tracking-wider text-muted">
                Awards Won
              </span>
            </div>
          </div>
        </div>

        {/* Tabular Awards List */}
        <div className="mt-16 border-t border-white/10">
          <div className="hidden grid-cols-12 py-4 font-mono text-xs uppercase tracking-widest text-muted md:grid">
            <div className="col-span-4">AWARD</div>
            <div className="col-span-4">PLATFORM</div>
            <div className="col-span-4 text-right">PROJECT</div>
          </div>

          <div className="divide-y divide-white/10">
            {recognition.map((item, index) => (
              <div
                key={`${item.project}-${index}`}
                className="group flex flex-col justify-between py-6 transition-colors duration-300 hover:bg-surface/50 md:grid md:grid-cols-12 md:items-center"
              >
                <div className="col-span-4 font-mono text-sm uppercase tracking-wider text-foreground font-semibold">
                  {item.title}
                </div>
                <div className="col-span-4 mt-1 font-mono text-xs uppercase tracking-wider text-muted md:mt-0">
                  {item.platform}
                </div>
                <div className="col-span-4 mt-2 flex items-center justify-between font-mono text-sm uppercase tracking-wider text-overlay md:mt-0 md:justify-end md:gap-3">
                  <span>{item.project}</span>
                  <span className="font-mono text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
