"use client";

const featuredLogos = [
  "Shopify.com",
  "Career Foundry",
  "zyro.com",
  "tutplus.com",
  "webdesignerdepot.com",
  "creativebloq.com",
  "protypr.io",
  "designshack.net",
  "Mindsparkle mag",
  "Thegallery",
  "Muzli",
  "Mockplus.com",
  "designmodo.com",
  "sliderrevolution.com",
  "graphicdesignjunction.com",
  "visualcomposer.com",
  "alvarotrigo.com",
  "webdesigndev.com",
  "1stwebdesigner.com",
  "designtazi.com",
  "lapa.ninja",
];

export default function MarqueeStrip() {
  return (
    <section id="featured" className="relative overflow-hidden border-y border-white/10 bg-surface/40 py-8">
      <div className="flex items-center gap-4 px-gutter pb-4">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-overlay">
          Also featured in
        </span>
      </div>

      <div className="group flex overflow-hidden whitespace-nowrap font-mono text-sm uppercase tracking-wider text-muted">
        <div className="flex animate-[marquee_30s_linear_infinite] gap-8 pr-8">
          {featuredLogos.map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center gap-8">
              <span>{item}</span>
              <span className="text-overlay opacity-40">•</span>
            </span>
          ))}
        </div>
        <div className="flex animate-[marquee_30s_linear_infinite] gap-8 pr-8" aria-hidden="true">
          {featuredLogos.map((item, index) => (
            <span key={`dup-${item}-${index}`} className="inline-flex items-center gap-8">
              <span>{item}</span>
              <span className="text-overlay opacity-40">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
