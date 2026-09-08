"use client";

import React, { useState, useEffect } from "react";

type FontOption = {
  name: string;
  family: string;
  weight?: string;
  tracking?: string;
};

type ThemeOption = {
  name: string;
  bg: string;
  surface: string;
  fg: string;
  accent: string;
  overlay: string;
};

type FilterOption = {
  name: string;
  filter: string;
  hoverFilter: string;
};

const DISPLAY_FONTS: FontOption[] = [
  { name: "Syne (Default)", family: "var(--font-syne), 'Syne', sans-serif", weight: "800", tracking: "-0.03em" },
  { name: "Big Shoulders Display", family: "var(--font-big-shoulders), 'Big Shoulders Display', sans-serif", weight: "900", tracking: "-0.04em" },
  { name: "Bebas Neue", family: "var(--font-bebas), 'Bebas Neue', sans-serif", weight: "400", tracking: "0.02em" },
  { name: "Oswald", family: "var(--font-oswald), 'Oswald', sans-serif", weight: "700", tracking: "-0.02em" },
  { name: "Cormorant Garamond", family: "var(--font-cormorant), 'Cormorant Garamond', serif", weight: "700", tracking: "-0.01em" },
  { name: "Instrument Serif", family: "var(--font-instrument), 'Instrument Serif', serif", weight: "400", tracking: "0em" },
];

const BODY_FONTS: FontOption[] = [
  { name: "Space Grotesk (Default)", family: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" },
  { name: "Geist Sans", family: "var(--font-geist-sans), sans-serif" },
  { name: "System Sans", family: "system-ui, -apple-system, sans-serif" },
];

const ACCENT_FONTS: FontOption[] = [
  { name: "Playfair Display (Default)", family: "var(--font-playfair), 'Playfair Display', serif" },
  { name: "Instrument Serif (Italic)", family: "var(--font-instrument), 'Instrument Serif', serif" },
  { name: "Cormorant Garamond (Italic)", family: "var(--font-cormorant), 'Cormorant Garamond', serif" },
];

const MONO_FONTS: FontOption[] = [
  { name: "Geist Mono (Default)", family: "var(--font-geist-mono), monospace" },
  { name: "System Monospace", family: "ui-monospace, SFMono-Regular, Menlo, monospace" },
];

const THEME_PRESETS: ThemeOption[] = [
  { name: "Dark Onyx (Default)", bg: "#0d0d0d", surface: "#131313", fg: "#f5eee6", accent: "#e59700", overlay: "#f3dbc7" },
  { name: "Monochrome Noir", bg: "#000000", surface: "#0a0a0a", fg: "#ffffff", accent: "#ffffff", overlay: "#e5e5e5" },
  { name: "Cyber Tech", bg: "#080811", surface: "#10101f", fg: "#e2e8f0", accent: "#00f0ff", overlay: "#38bdf8" },
  { name: "Alpine Emerald", bg: "#0a120e", surface: "#121e18", fg: "#ecfdf5", accent: "#10b981", overlay: "#6ee7b7" },
  { name: "Nordic Slate", bg: "#0f172a", surface: "#1e293b", fg: "#f8fafc", accent: "#38bdf8", overlay: "#93c5fd" },
];

const ACCENT_SWATCHES = [
  { name: "Gold", hex: "#e59700" },
  { name: "Electric Cyan", hex: "#00f0ff" },
  { name: "Emerald", hex: "#10b981" },
  { name: "Crimson", hex: "#ef4444" },
  { name: "Violet", hex: "#8b5cf6" },
  { name: "Pearl White", hex: "#ffffff" },
];

const IMAGE_FILTERS: FilterOption[] = [
  { name: "Warm Sepia (Default)", filter: "grayscale(40%) sepia(25%) contrast(110%) brightness(95%)", hoverFilter: "grayscale(0%) sepia(0%) contrast(100%) brightness(100%)" },
  { name: "Monochrome Noir", filter: "grayscale(100%) contrast(120%) brightness(90%)", hoverFilter: "grayscale(0%) contrast(100%) brightness(100%)" },
  { name: "Vibrant Original", filter: "none", hoverFilter: "none" },
  { name: "Duotone Tint", filter: "grayscale(100%) sepia(100%) hue-rotate(30deg)", hoverFilter: "none" },
];

export default function DesignPlayground() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"typo" | "theme" | "filter" | "layout">("typo");

  // State initialization with localStorage fallback
  const [selectedDisplay, setSelectedDisplay] = useState<string>(() => {
    if (typeof window !== "undefined") return localStorage.getItem("portfolio_font_display") || DISPLAY_FONTS[0].name;
    return DISPLAY_FONTS[0].name;
  });

  const [selectedBody, setSelectedBody] = useState<string>(() => {
    if (typeof window !== "undefined") return localStorage.getItem("portfolio_font_body") || BODY_FONTS[0].name;
    return BODY_FONTS[0].name;
  });

  const [selectedAccent, setSelectedAccent] = useState<string>(() => {
    if (typeof window !== "undefined") return localStorage.getItem("portfolio_font_accent") || ACCENT_FONTS[0].name;
    return ACCENT_FONTS[0].name;
  });

  const [selectedMono, setSelectedMono] = useState<string>(() => {
    if (typeof window !== "undefined") return localStorage.getItem("portfolio_font_mono") || MONO_FONTS[0].name;
    return MONO_FONTS[0].name;
  });

  const [selectedTheme, setSelectedTheme] = useState<string>(() => {
    if (typeof window !== "undefined") return localStorage.getItem("portfolio_theme") || THEME_PRESETS[0].name;
    return THEME_PRESETS[0].name;
  });

  const [selectedAccentColor, setSelectedAccentColor] = useState<string>(() => {
    if (typeof window !== "undefined") return localStorage.getItem("portfolio_accent_color") || "";
    return "";
  });

  const [selectedFilter, setSelectedFilter] = useState<string>(() => {
    if (typeof window !== "undefined") return localStorage.getItem("portfolio_filter") || IMAGE_FILTERS[0].name;
    return IMAGE_FILTERS[0].name;
  });

  const [selectedLayout, setSelectedLayout] = useState<"editorial" | "grid" | "list">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio_layout_mode");
      if (saved === "grid" || saved === "list" || saved === "editorial") return saved;
    }
    return "editorial";
  });

  // Compute whether user has applied custom settings (derived value — no setter)
  const isCustomized =
    selectedDisplay !== DISPLAY_FONTS[0].name ||
    selectedBody !== BODY_FONTS[0].name ||
    selectedAccent !== ACCENT_FONTS[0].name ||
    selectedMono !== MONO_FONTS[0].name ||
    selectedTheme !== THEME_PRESETS[0].name ||
    Boolean(selectedAccentColor) ||
    selectedFilter !== IMAGE_FILTERS[0].name ||
    selectedLayout !== "editorial";

  // ─── Apply font CSS variables whenever selection changes ───────────────────
  useEffect(() => {
    const font = DISPLAY_FONTS.find((f) => f.name === selectedDisplay);
    if (!font) return;
    document.documentElement.style.setProperty("--font-display", font.family);
    if (font.weight) document.documentElement.style.setProperty("--font-display-weight", font.weight);
    if (font.tracking) document.documentElement.style.setProperty("--font-display-tracking", font.tracking);
  }, [selectedDisplay]);

  useEffect(() => {
    const font = BODY_FONTS.find((f) => f.name === selectedBody);
    if (!font) return;
    document.documentElement.style.setProperty("--font-body", font.family);
  }, [selectedBody]);

  useEffect(() => {
    const font = ACCENT_FONTS.find((f) => f.name === selectedAccent);
    if (!font) return;
    document.documentElement.style.setProperty("--font-accent", font.family);
  }, [selectedAccent]);

  useEffect(() => {
    const font = MONO_FONTS.find((f) => f.name === selectedMono);
    if (!font) return;
    document.documentElement.style.setProperty("--font-mono", font.family);
  }, [selectedMono]);

  // ─── Apply theme CSS variables ──────────────────────────────────────────────
  useEffect(() => {
    const theme = THEME_PRESETS.find((t) => t.name === selectedTheme);
    if (!theme) return;
    const root = document.documentElement;
    root.style.setProperty("--color-background", theme.bg);
    root.style.setProperty("--color-surface", theme.surface);
    root.style.setProperty("--color-foreground", theme.fg);
    // Only apply accent from theme if no manual swatch is active
    if (!selectedAccentColor) {
      root.style.setProperty("--color-accent", theme.accent);
    }
  }, [selectedTheme, selectedAccentColor]);

  // ─── Apply accent swatch override ─────────────────────────────────────────
  useEffect(() => {
    if (selectedAccentColor) {
      document.documentElement.style.setProperty("--color-accent", selectedAccentColor);
    }
  }, [selectedAccentColor]);

  // ─── Apply image filter CSS variables ─────────────────────────────────────
  useEffect(() => {
    const filter = IMAGE_FILTERS.find((f) => f.name === selectedFilter);
    if (!filter) return;
    document.documentElement.style.setProperty("--img-filter", filter.filter);
    document.documentElement.style.setProperty("--img-hover-filter", filter.hoverFilter);
  }, [selectedFilter]);

  // ─── Reset to original defaults ───────────────────────────────────────────
  const resetToDefault = () => {
    localStorage.removeItem("portfolio_font_display");
    localStorage.removeItem("portfolio_font_body");
    localStorage.removeItem("portfolio_font_accent");
    localStorage.removeItem("portfolio_font_mono");
    localStorage.removeItem("portfolio_theme");
    localStorage.removeItem("portfolio_accent_color");
    localStorage.removeItem("portfolio_filter");
    localStorage.removeItem("portfolio_layout_mode");

    document.documentElement.style.removeProperty("--font-display");
    document.documentElement.style.removeProperty("--font-display-weight");
    document.documentElement.style.removeProperty("--font-display-tracking");
    document.documentElement.style.removeProperty("--font-body");
    document.documentElement.style.removeProperty("--font-accent");
    document.documentElement.style.removeProperty("--font-mono");
    document.documentElement.style.removeProperty("--color-background");
    document.documentElement.style.removeProperty("--color-surface");
    document.documentElement.style.removeProperty("--color-foreground");
    document.documentElement.style.removeProperty("--color-accent");
    document.documentElement.style.removeProperty("--img-filter");
    document.documentElement.style.removeProperty("--img-hover-filter");

    setSelectedDisplay(DISPLAY_FONTS[0].name);
    setSelectedBody(BODY_FONTS[0].name);
    setSelectedAccent(ACCENT_FONTS[0].name);
    setSelectedMono(MONO_FONTS[0].name);
    setSelectedTheme(THEME_PRESETS[0].name);
    setSelectedAccentColor("");
    setSelectedFilter(IMAGE_FILTERS[0].name);
    setSelectedLayout("editorial");
    localStorage.removeItem("portfolio_layout_mode");
    window.dispatchEvent(new Event("portfolio_layout_changed"));
  };

  // ─── Handler functions ─────────────────────────────────────────────────────
  const handleSelectDisplay = (font: FontOption) => {
    setSelectedDisplay(font.name);
    localStorage.setItem("portfolio_font_display", font.name);
  };

  const handleSelectBody = (font: FontOption) => {
    setSelectedBody(font.name);
    localStorage.setItem("portfolio_font_body", font.name);
  };

  const handleSelectAccent = (font: FontOption) => {
    setSelectedAccent(font.name);
    localStorage.setItem("portfolio_font_accent", font.name);
  };

  const handleSelectMono = (font: FontOption) => {
    setSelectedMono(font.name);
    localStorage.setItem("portfolio_font_mono", font.name);
  };

  const handleSelectTheme = (theme: ThemeOption) => {
    setSelectedTheme(theme.name);
    localStorage.setItem("portfolio_theme", theme.name);
  };

  const handleSelectAccentColor = (hex: string) => {
    setSelectedAccentColor(hex);
    localStorage.setItem("portfolio_accent_color", hex);
  };

  const handleSelectFilter = (filter: FilterOption) => {
    setSelectedFilter(filter.name);
    localStorage.setItem("portfolio_filter", filter.name);
  };

  // Layout mode update — also dispatches event for ProjectGrid to listen
  const updateLayoutMode = (mode: "editorial" | "grid" | "list") => {
    setSelectedLayout(mode);
    localStorage.setItem("portfolio_layout_mode", mode);
    window.dispatchEvent(new Event("portfolio_layout_changed"));
  };

  return (
    <aside aria-label="Design Playground Studio" className="fixed bottom-5 right-5 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          id="design-playground-toggle"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 rounded-full border border-white/20 bg-black/85 px-4 py-2.5 font-mono text-xs text-[#f5eee6] shadow-2xl backdrop-blur-md transition-all hover:scale-105 hover:border-white/50 focus:outline-none"
        >
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="font-semibold tracking-wide">Design Studio</span>
          {isCustomized && (
            <span className="rounded-full bg-accent/20 px-1.5 py-0.5 text-[10px] text-accent">Active</span>
          )}
        </button>
      )}

      {/* Main Customizer Panel */}
      {isOpen && (
        <div
          id="design-playground-panel"
          className="w-88 sm:w-96 rounded-2xl border border-white/15 bg-black/95 p-5 shadow-2xl backdrop-blur-2xl transition-all max-h-[85vh] flex flex-col"
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#f5eee6] flex items-center gap-2">
                <span>Design Studio</span>
                {isCustomized && (
                  <span className="text-[10px] text-accent bg-accent/15 px-2 py-0.5 rounded-full lowercase">
                    customized
                  </span>
                )}
              </h3>
              <p className="text-[11px] text-white/50 mt-0.5">Customize typography, colors, &amp; layout live</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/40 hover:text-white transition-colors text-sm px-2 py-1"
              aria-label="Close Design Studio"
            >
              ✕
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-white/10 mt-3 text-xs font-mono">
            <button
              onClick={() => setActiveTab("typo")}
              className={`py-2 px-3 border-b-2 transition-colors ${
                activeTab === "typo" ? "border-accent text-accent font-bold" : "border-transparent text-white/60 hover:text-white"
              }`}
            >
              Fonts
            </button>
            <button
              onClick={() => setActiveTab("theme")}
              className={`py-2 px-3 border-b-2 transition-colors ${
                activeTab === "theme" ? "border-accent text-accent font-bold" : "border-transparent text-white/60 hover:text-white"
              }`}
            >
              Colors
            </button>
            <button
              onClick={() => setActiveTab("filter")}
              className={`py-2 px-3 border-b-2 transition-colors ${
                activeTab === "filter" ? "border-accent text-accent font-bold" : "border-transparent text-white/60 hover:text-white"
              }`}
            >
              Filters
            </button>
            <button
              onClick={() => setActiveTab("layout")}
              className={`py-2 px-3 border-b-2 transition-colors ${
                activeTab === "layout" ? "border-accent text-accent font-bold" : "border-transparent text-white/60 hover:text-white"
              }`}
            >
              Grid
            </button>
          </div>

          {/* Tab Content Container */}
          <div className="mt-4 overflow-y-auto space-y-4 pr-1 flex-1 text-xs">
            {/* TAB 1: TYPOGRAPHY */}
            {activeTab === "typo" && (
              <div className="space-y-4">
                {/* Headline Font */}
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-accent mb-1.5">
                    Display Headline Font
                  </label>
                  <div className="space-y-1">
                    {DISPLAY_FONTS.map((font) => (
                      <button
                        key={font.name}
                        onClick={() => handleSelectDisplay(font)}
                        className={`w-full text-left px-3 py-1.5 rounded-lg transition-all flex items-center justify-between ${
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

                {/* Body Font */}
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-accent mb-1.5">
                    Body Paragraph Font
                  </label>
                  <div className="space-y-1">
                    {BODY_FONTS.map((font) => (
                      <button
                        key={font.name}
                        onClick={() => handleSelectBody(font)}
                        className={`w-full text-left px-3 py-1.5 rounded-lg transition-all flex items-center justify-between ${
                          selectedBody === font.name
                            ? "bg-white/15 text-white font-medium border border-white/20"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>{font.name}</span>
                        {selectedBody === font.name && <span className="text-accent text-xs">✓</span>}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Editorial Accent Font */}
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-accent mb-1.5">
                    Editorial Accent Serif
                  </label>
                  <div className="space-y-1">
                    {ACCENT_FONTS.map((font) => (
                      <button
                        key={font.name}
                        onClick={() => handleSelectAccent(font)}
                        className={`w-full text-left px-3 py-1.5 rounded-lg transition-all flex items-center justify-between ${
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

                {/* Mono Font */}
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-accent mb-1.5">
                    Tech / Monospace Labels
                  </label>
                  <div className="space-y-1">
                    {MONO_FONTS.map((font) => (
                      <button
                        key={font.name}
                        onClick={() => handleSelectMono(font)}
                        className={`w-full text-left px-3 py-1.5 rounded-lg transition-all flex items-center justify-between ${
                          selectedMono === font.name
                            ? "bg-white/15 text-white font-medium border border-white/20"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>{font.name}</span>
                        {selectedMono === font.name && <span className="text-accent text-xs">✓</span>}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: THEMES & ACCENTS */}
            {activeTab === "theme" && (
              <div className="space-y-4">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-accent mb-1.5">
                    Theme Presets
                  </label>
                  <div className="space-y-1.5">
                    {THEME_PRESETS.map((theme) => (
                      <button
                        key={theme.name}
                        onClick={() => handleSelectTheme(theme)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all flex items-center justify-between border ${
                          selectedTheme === theme.name ? "bg-white/15 border-white/30 text-white font-medium" : "border-white/5 text-white/70 hover:bg-white/5"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full border border-white/20" style={{ backgroundColor: theme.bg }} />
                          {theme.name}
                        </span>
                        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: theme.accent }} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-accent mb-1.5">
                    Accent Swatches
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {ACCENT_SWATCHES.map((swatch) => (
                      <button
                        key={swatch.hex}
                        onClick={() => handleSelectAccentColor(swatch.hex)}
                        className={`flex items-center gap-2 p-2 rounded-lg border text-[11px] transition-all ${
                          selectedAccentColor === swatch.hex
                            ? "border-white/50 bg-white/15 text-white"
                            : "border-white/10 text-white/70 hover:bg-white/5"
                        }`}
                      >
                        <span className="h-3 w-3 rounded-full shrink-0" style={{ backgroundColor: swatch.hex }} />
                        <span className="truncate">{swatch.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: VISUAL FILTERS */}
            {activeTab === "filter" && (
              <div className="space-y-2">
                <label className="block font-mono text-[11px] uppercase tracking-wider text-accent mb-1.5">
                  Project Media Image Filter
                </label>
                {IMAGE_FILTERS.map((filter) => (
                  <button
                    key={filter.name}
                    onClick={() => handleSelectFilter(filter)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all flex items-center justify-between border ${
                      selectedFilter === filter.name
                        ? "bg-white/15 border-white/30 text-white font-medium"
                        : "border-white/5 text-white/70 hover:bg-white/5"
                    }`}
                  >
                    <span>{filter.name}</span>
                    {selectedFilter === filter.name && <span className="text-accent text-xs">✓</span>}
                  </button>
                ))}
              </div>
            )}

            {/* TAB 4: PROJECT GRID LAYOUT */}
            {activeTab === "layout" && (
              <div className="space-y-3">
                <label className="block font-mono text-[11px] uppercase tracking-wider text-accent mb-1.5">
                  Project Showcase View Mode
                </label>

                <button
                  onClick={() => updateLayoutMode("editorial")}
                  className={`w-full text-left px-3 py-2.5 rounded-lg border transition-all flex flex-col gap-1 ${
                    selectedLayout === "editorial"
                      ? "bg-white/15 border-white/30 text-white font-medium"
                      : "border-white/5 text-white/70 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-semibold">Editorial Cards (Default)</span>
                    {selectedLayout === "editorial" && <span className="text-accent">✓</span>}
                  </div>
                  <span className="text-[10px] text-white/50">Full-width stacked cards with cinematic image previews</span>
                </button>

                <button
                  onClick={() => updateLayoutMode("grid")}
                  className={`w-full text-left px-3 py-2.5 rounded-lg border transition-all flex flex-col gap-1 ${
                    selectedLayout === "grid"
                      ? "bg-white/15 border-white/30 text-white font-medium"
                      : "border-white/5 text-white/70 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-semibold">Compact 2-Column Grid</span>
                    {selectedLayout === "grid" && <span className="text-accent">✓</span>}
                  </div>
                  <span className="text-[10px] text-white/50">Side-by-side grid cards for high-density scannability</span>
                </button>

                <button
                  onClick={() => updateLayoutMode("list")}
                  className={`w-full text-left px-3 py-2.5 rounded-lg border transition-all flex flex-col gap-1 ${
                    selectedLayout === "list"
                      ? "bg-white/15 border-white/30 text-white font-medium"
                      : "border-white/5 text-white/70 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-semibold">Minimal List View</span>
                    {selectedLayout === "list" && <span className="text-accent">✓</span>}
                  </div>
                  <span className="text-[10px] text-white/50">Streamlined horizontal table rows for quick review</span>
                </button>
              </div>
            )}
          </div>

          {/* Footer Reset & Actions */}
          <div className="pt-3 border-t border-white/10 mt-3 flex items-center justify-between gap-2">
            <button
              onClick={resetToDefault}
              className="py-1.5 px-3 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white rounded-lg font-mono text-[11px] transition-colors"
            >
              Reset to Default
            </button>
            <span className="font-mono text-[10px] text-white/40">Kashif Nehal Portfolio</span>
          </div>
        </div>
      )}
    </aside>
  );
}
