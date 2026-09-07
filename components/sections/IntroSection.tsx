import { profile } from "@/content/profile";

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="relative px-gutter py-28 border-t border-white/10 bg-[#0d0d0d] text-[#f5eee6]"
      aria-labelledby="intro-heading"
    >
      <div className="mx-auto max-w-content">
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          {/* Left Column: Heading & Large Uppercase Bio Copy */}
          <div className="lg:col-span-8">
            <div className="flex flex-col items-start gap-2">
              <h2
                id="intro-heading"
                className="font-display-condensed text-6xl sm:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight text-[#f5eee6]"
              >
                {profile.introHeading}
              </h2>
              <span className="font-serif-accent text-lg text-[#f3dbc7] italic ml-2">
                {profile.name}
              </span>
            </div>

            <p className="mt-12 font-sans font-extrabold text-lg sm:text-2xl lg:text-3xl uppercase leading-relaxed tracking-wider text-[#f5eee6]">
              {profile.introBio}
            </p>
          </div>

          {/* Right Column: 3D Michelangelo Bust Canvas Container */}
          <div className="lg:col-span-4 relative flex flex-col items-center justify-center p-6">
            <div className="relative h-96 w-full flex items-center justify-center rounded-2xl bg-black/60 border border-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(243,219,199,0.1)_0%,transparent_70%)]" />
              
              {/* Silhouette / Bust Representation */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="h-48 w-40 rounded-full bg-gradient-to-b from-white/10 to-transparent border border-white/20 flex items-center justify-center">
                  <span className="font-serif-accent text-5xl text-[#f3dbc7] opacity-60">David</span>
                </div>
                <p className="mt-6 font-mono text-xs uppercase tracking-widest text-[#f5eee6]/60">
                  [ 3D Michelangelo Bust ]
                </p>
              </div>
            </div>

            {/* Handwritten "I am not this one" Annotation */}
            <div className="mt-6 flex flex-col items-center gap-1">
              <span className="font-serif-accent text-base text-[#f3dbc7] italic">
                I am not this one
              </span>
              <span className="text-white text-lg rotate-180 opacity-70">↑</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
