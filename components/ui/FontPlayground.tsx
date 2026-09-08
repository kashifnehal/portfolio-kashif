"use client";

import React, { useState, useEffect } from "react";

type FontOption = {
  name: string;
  family: string;
  weight?: string;
  tracking?: string;
  category: "display" | "accent";
};

const DISPLAY_FONTS: FontOption[] = [
  { name: "Syne (Recommended)", family: "var(--font-syne), 'Syne', sans-serif", weight: "800", tracking: "-0.03em", category: "display" },
  { name: "Big Shoulders Display", family: "var(--font-big-shoulders), 'Big Shoulders Display', sans-serif", weight: "900", tracking: "-0.04em", category: "display" },
  { name: "Bebas Neue", family: "var(--font-bebas), 'Bebas Neue', sans-serif", weight: "400", tracking: "0.02em", category: "display" },
  { name: "Oswald", family: "var(--font-oswald), 'Oswald', sans-serif", weight: "700", tracking: "-0.02em", category: "display" },
  { name: "League Gothic", family: "var(--font-league), 'League Gothic', sans-serif", weight: "400", tracking: "0.03em", category: "display" },
  { name: "Cormorant Garamond", family: "var(--font-cormorant), 'Cormorant Garamond', serif", weight: "700", tracking: "-0.01em", category: "display" },
  { name: "Instrument Serif", family: "var(--font-instrument), 'Instrument Serif', serif", weight: "400", tracking: "0em", category: "display" },
];

const ACCENT_FONTS: FontOption[] = [
  { name: "Playfair Display", family: "var(--font-playfair), 'Playfair Display', serif", category: "accent" },
  { name: "Instrument Serif (Italic)", family: "var(--font-instrument), 'Instrument Serif', serif", category: "accent" },
  { name: "Cormorant Garamond (Italic)", family: "var(--font-cormorant), 'Cormorant Garamond', serif", category: "accent" },
];

export default function FontPlayground() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDisplay, setSelectedDisplay] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("portfolio_font_display") || DISPLAY_FONTS[0].name;
    }
    return DISPLAY_FONTS[0].name;
  });

  const [selectedAccent, setSelectedAccent] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("portfolio_font_accent") || ACCENT_FONTS[0].name;
    }
    return ACCENT_FONTS[0].name;
  });

  const [copied, setCopied] = useState(false);

  // Sync display font changes to CSS root variables and localStorage
  useEffect(() => {
    const font = DISPLAY_FONTS.find((f) => f.name === selectedDisplay) || DISPLAY_FONTS[0];
    localStorage.setItem("portfolio_font_display", font.name);
    document.documentElement.style.setProperty("--font-display", font.family);
    if (font.weight) document.documentElement.style.setProperty("--font-display-weight", font.weight);
    if (font.tracking) document.documentElement.style.setProperty("--font-display-tracking", font.tracking);
  }, [selectedDisplay]);

  // Sync accent font changes to CSS root variables and localStorage
  useEffect(() => {
    const font = ACCENT_FONTS.find((f) => f.name === selectedAccent) || ACCENT_FONTS[0];
    localStorage.setItem("portfolio_font_accent", font.name);
    document.documentElement.style.setProperty("--font-accent", font.family);
  }, [selectedAccent]);

  const copyCSS = () => {
    const currentDisplayFont = DISPLAY_FONTS.find((f) => f.name === selectedDisplay);
    const currentAccentFont = ACCENT_FONTS.find((f) => f.name === selectedAccent);

    const cssSnippet = `:root {
  --font-display: ${currentDisplayFont?.family || DISPLAY_FONTS[0].family};
  --font-display-weight: ${currentDisplayFont?.weight || "800"};
  --font-display-tracking: ${currentDisplayFont?.tracking || "-0.03em"};
  --font-accent: ${currentAccentFont?.family || ACCENT_FONTS[0].family};
}`;

    navigator.clipboard.writeText(cssSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside aria-label="Font Switcher Playground" className="fixed bottom-5 right-5 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-full border border-white/20 bg-black/80 px-4 py-2.5 font-mono text-xs text-[#f5eee6] shadow-2xl backdrop-blur-md transition-all hover:scale-105 hover:border-white/50 focus:outline-none"
        >
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span>Font Switcher</span>
        </button>
      )}

      {/* Font Selector Panel */}
      {isOpen && (
        <div className="w-80 rounded-2xl border border-white/15 bg-black/90 p-5 shadow-2xl backdrop-blur-xl transition-all">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#f5eee6]">Font Playground</h3>
              <p className="text-[11px] text-white/50">Test fonts live on your site</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/40 hover:text-white transition-colors text-sm px-1.5 py-0.5"
            >
              ✕
            </button>
          </div>

          <div className="mt-4 space-y-4">
            {/* Display Font Picker */}
            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider text-accent mb-1.5">
                Display Headline Font
              </label>
              <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
                {DISPLAY_FONTS.map((font) => (
                  <button
                    key={font.name}
                    onClick={() => setSelectedDisplay(font.name)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center justify-between ${
                      selectedDisplay === font.name
                        ? "bg-white/15 text-white font-medium border border-white/20"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{font.name}</span>
                    {selectedDisplay === font.name && <span className="text-accent text-xs">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Accent Serif Picker */}
            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider text-accent mb-1.5">
                Accent Serif Font
              </label>
              <div className="space-y-1">
                {ACCENT_FONTS.map((font) => (
                  <button
                    key={font.name}
                    onClick={() => setSelectedAccent(font.name)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center justify-between ${
                      selectedAccent === font.name
                        ? "bg-white/15 text-white font-medium border border-white/20"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{font.name}</span>
                    {selectedAccent === font.name && <span className="text-accent text-xs">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 border-t border-white/10 flex gap-2">
              <button
                onClick={copyCSS}
                className="w-full py-2 px-3 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-mono transition-colors text-center"
              >
                {copied ? "✓ Copied CSS!" : "Copy Selected CSS"}
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
