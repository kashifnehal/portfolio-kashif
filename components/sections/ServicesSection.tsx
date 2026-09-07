import { services } from "@/content/services";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="px-gutter py-24 md:py-36"
      aria-labelledby="services-heading"
    >
      <div
        className="mx-auto max-w-content border-t pt-16"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Label column */}
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              Capabilities
            </p>
            <h2
              id="services-heading"
              className="mt-4 font-display text-[clamp(2rem,6vw,4.5rem)] font-semibold uppercase leading-[0.9] text-foreground"
            >
              What I
              <br />
              do best.
            </h2>
          </div>

          {/* Services list */}
          <ul className="md:col-span-8">
            {services.map((service, index) => (
              <li
                key={service.id}
                className="flex flex-col gap-3 border-b py-8 first:border-t sm:flex-row sm:gap-8"
                style={{ borderColor: "var(--color-border)" }}
              >
                <span className="w-8 shrink-0 font-mono text-xs text-muted opacity-40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="text-base font-semibold uppercase text-foreground sm:text-lg">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
