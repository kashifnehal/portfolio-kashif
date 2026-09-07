import { profile } from "@/content/profile";
import { services } from "@/content/services";

export default function ContactSection() {
  return (
    <section
      id="footer"
      className="relative px-gutter py-24 md:py-36 bg-background text-foreground border-t border-white/10"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-content">
        <h2
          id="contact-heading"
          className="font-display text-5xl font-extrabold uppercase tracking-tight text-foreground sm:text-7xl lg:text-9xl"
        >
          Let&apos;s Connect
        </h2>

        <div className="mt-12">
          <p className="font-mono text-sm uppercase tracking-widest text-muted">
            I&apos;m always interested about
          </p>

          {/* Service Buttons Grid */}
          <div className="mt-6 flex flex-wrap gap-4">
            {services.map((service) => (
              <a
                key={service.id}
                href={`mailto:${profile.contactEmail}?subject=Project%20Inquiry%20-%20${encodeURIComponent(service.title)}`}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/15 bg-surface/60 px-6 py-3 font-mono text-xs uppercase tracking-wider text-foreground transition-all duration-300 hover:border-overlay hover:bg-overlay hover:text-black"
              >
                <span className="font-bold">{service.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Email & Location Row */}
        <div className="mt-20 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between border-t border-white/10 pt-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">Direct Email</span>
            <div className="mt-2">
              <a
                href={`mailto:${profile.contactEmail}`}
                className="font-display text-3xl font-bold uppercase text-foreground transition-colors hover:text-overlay sm:text-4xl"
              >
                {profile.contactEmail}
              </a>
            </div>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">Location</span>
            <p className="mt-2 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
              {profile.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
