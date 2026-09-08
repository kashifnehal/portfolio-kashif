"use client";

import React, { useState, useEffect, useRef } from "react";

type TypoPreset = {
  id: string;
  name: string;
  description: string;
  display: string;
  displayWeight: string;
  displayTracking: string;
  body: string;
  accent: string;
  mono: string;
};

type FilterOption = {
  id: string;
  name: string;
  filter: string;
  hoverFilter: string;
};

type LayoutMode = "editorial" | "grid" | "list" | "compact";

const TYPO_PRESETS: TypoPreset[] = [
  {
    id: "default",
    name: "Default (Bebas & Space)",
    description: "Bold condensed Bebas Neue headline paired with modern Space Grotesk body & Playfair serif accents",
    display: "var(--font-bebas), 'Bebas Neue', sans-serif",
    displayWeight: "400",
    displayTracking: "0.02em",
    body: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
    accent: "var(--font-playfair), 'Playfair Display', serif",
    mono: "var(--font-geist-mono), 'Geist Mono', monospace",
  },
  {
    id: "luxury",
    name: "Luxury & Editorial",
    description: "High-contrast Cormorant Garamond serif display with Instrument Serif italics and elegant text",
    display: "var(--font-cormorant), 'Cormorant Garamond', serif",
    displayWeight: "700",
    displayTracking: "-0.01em",
    body: "var(--font-cormorant), 'Cormorant Garamond', serif",
    accent: "var(--font-instrument), 'Instrument Serif', serif",
    mono: "var(--font-geist-mono), 'Geist Mono', monospace",
  },
  {
    id: "vintage",
    name: "Vintage & Retro",
    description: "Refined 600 weight Syne display paired with warm Playfair Display accents and retro grid typography",
    display: "var(--font-syne), 'Syne', sans-serif",
    displayWeight: "600",
    displayTracking: "-0.02em",
    body: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
    accent: "var(--font-playfair), 'Playfair Display', serif",
    mono: "var(--font-geist-mono), 'Geist Mono', monospace",
  },
  {
    id: "minimal",
    name: "Minimal & Modern",
    description: "Ultra-clean Geist Sans architecture with geometric Space Grotesk accents for tech clarity",
    display: "var(--font-geist-sans), 'Geist Sans', sans-serif",
    displayWeight: "700",
    displayTracking: "-0.02em",
    body: "var(--font-geist-sans), 'Geist Sans', sans-serif",
    accent: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
    mono: "var(--font-geist-mono), 'Geist Mono', monospace",
  },
  {
    id: "playful",
    name: "Playful & Casual",
    description: "Dynamic Big Shoulders Display headline matched with expressive Instrument Serif and fluid spacing",
    display: "var(--font-big-shoulders), 'Big Shoulders Display', sans-serif",
    displayWeight: "800",
    displayTracking: "-0.03em",
    body: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
    accent: "var(--font-instrument), 'Instrument Serif', serif",
    mono: "var(--font-geist-mono), 'Geist Mono', monospace",
  },
];

const IMAGE_FILTERS: FilterOption[] = [
  {
    id: "default",
    name: "Warm Sepia (Default)",
    filter: "grayscale(40%) sepia(25%) contrast(110%) brightness(95%)",
    hoverFilter: "grayscale(0%) sepia(0%) contrast(100%) brightness(100%)",
  },
  {
    id: "monochrome",
    name: "Monochrome Noir",
    filter: "grayscale(100%) contrast(120%) brightness(90%)",
    hoverFilter: "grayscale(0%) contrast(100%) brightness(100%)",
  },
  {
    id: "vibrant",
    name: "Vibrant Original",
    filter: "none",
    hoverFilter: "none",
  },
  {
    id: "duotone",
    name: "Duotone Tint",
    filter: "grayscale(100%) sepia(100%) hue-rotate(30deg)",
    hoverFilter: "none",
  },
];

export default function DesignPlayground() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"typo" | "filter" | "layout">("typo");
  const panelRef = useRef<HTMLDivElement>(null);

  // Active state initialized from localStorage with fallback to default
  const [selectedTypoId, setSelectedTypoId] = useState<string>(() => {
    if (typeof window !== "undefined") return localStorage.getItem("portfolio_font_theme") || TYPO_PRESETS[0].id;
    return TYPO_PRESETS[0].id;
  });

  const [selectedFilterId, setSelectedFilterId] = useState<string>(() => {
    if (typeof window !== "undefined") return localStorage.getItem("portfolio_filter") || IMAGE_FILTERS[0].id;
    return IMAGE_FILTERS[0].id;
  });

  const [selectedLayout, setSelectedLayout] = useState<LayoutMode>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio_layout_mode") as LayoutMode;
      if (saved === "grid" || saved === "list" || saved === "compact" || saved === "editorial") return saved;
    }
    return "editorial";
  });

  // Derived state to check if user has custom settings active
  const isCustomized = selectedTypoId !== "default" || selectedFilterId !== "default" || selectedLayout !== "editorial";

  // ─── Click Outside Listener to Close Panel (No Backdrop) ───────────────────
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (isOpen && panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // ─── Apply Typography Presets to root CSS variables ───────────────────────
  useEffect(() => {
    const preset = TYPO_PRESETS.find((p) => p.id === selectedTypoId) || TYPO_PRESETS[0];
    const root = document.documentElement;

    root.style.setProperty("--font-display", preset.display);
    root.style.setProperty("--font-display-weight", preset.displayWeight);
    root.style.setProperty("--font-display-tracking", preset.displayTracking);
    root.style.setProperty("--font-body", preset.body);
    root.style.setProperty("--font-accent", preset.accent);
    root.style.setProperty("--font-mono", preset.mono);
  }, [selectedTypoId]);

  // ─── Apply Image Filters ───────────────────────────────────────────────────
  useEffect(() => {
    const filterObj = IMAGE_FILTERS.find((f) => f.id === selectedFilterId) || IMAGE_FILTERS[0];
    const root = document.documentElement;

    root.style.setProperty("--img-filter", filterObj.filter);
    root.style.setProperty("--img-hover-filter", filterObj.hoverFilter);
  }, [selectedFilterId]);

  // ─── Apply Grid Layout Mode to html data attribute ────────────────────────
  useEffect(() => {
    document.documentElement.setAttribute("data-layout-mode", selectedLayout);
  }, [selectedLayout]);

  // ─── Handlers ──────────────────────────────────────────────────────────────
  const handleSelectTypoPreset = (presetId: string) => {
    setSelectedTypoId(presetId);
    localStorage.setItem("portfolio_font_theme", presetId);
  };

  const handleSelectFilter = (filterId: string) => {
    setSelectedFilterId(filterId);
    localStorage.setItem("portfolio_filter", filterId);
  };

  const handleSelectLayout = (layout: LayoutMode) => {
    setSelectedLayout(layout);
    localStorage.setItem("portfolio_layout_mode", layout);
    document.documentElement.setAttribute("data-layout-mode", layout);
    window.dispatchEvent(new Event("portfolio_layout_changed"));
  };

  const resetToDefault = () => {
    localStorage.removeItem("portfolio_font_theme");
    localStorage.removeItem("portfolio_font_display");
    localStorage.removeItem("portfolio_font_body");
    localStorage.removeItem("portfolio_font_accent");
    localStorage.removeItem("portfolio_font_mono");
    localStorage.removeItem("portfolio_filter");
    localStorage.removeItem("portfolio_layout_mode");

    const root = document.documentElement;
    root.style.removeProperty("--font-display");
    root.style.removeProperty("--font-display-weight");
    root.style.removeProperty("--font-display-tracking");
    root.style.removeProperty("--font-body");
    root.style.removeProperty("--font-accent");
    root.style.removeProperty("--font-mono");
    root.style.removeProperty("--img-filter");
    root.style.removeProperty("--img-hover-filter");

    setSelectedTypoId("default");
    setSelectedFilterId("default");
    setSelectedLayout("editorial");
    root.setAttribute("data-layout-mode", "editorial");
    window.dispatchEvent(new Event("portfolio_layout_changed"));
  };

  // Fixed inline style to ensure Design Studio modal is ALWAYS 100% constant and un-themed
  const constantModalStyle: React.CSSProperties = {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: "rgba(13, 13, 16, 0.96)",
    color: "#f5eee6",
    borderColor: "rgba(255, 255, 255, 0.15)",
    filter: "none",
    transform: "none",
  };

  return (
    <aside
      ref={panelRef}
      aria-label="Design Playground Studio"
      className="fixed bottom-5 right-5 z-50"
      style={{
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        filter: "none",
      }}
    >
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          id="design-playground-toggle"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 rounded-full border border-white/20 px-4 py-2.5 shadow-2xl backdrop-blur-md transition-all hover:scale-105 hover:border-white/50 focus:outline-none"
          style={{
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            backgroundColor: "rgba(13, 13, 16, 0.9)",
            color: "#f5eee6",
            fontSize: "12px",
          }}
        >
          <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="font-semibold tracking-wide">Design Studio</span>
          {isCustomized && (
            <span className="rounded-full bg-amber-500/20 px-1.5 py-0.5 text-[10px] text-amber-400">
              Active
            </span>
          )}
        </button>
      )}

      {/* Main Customizer Panel — Completely Isolated from Site CSS Variables */}
      {isOpen && (
        <div
          id="design-playground-panel"
          className="w-88 sm:w-96 rounded-2xl border p-5 shadow-2xl backdrop-blur-2xl transition-all max-h-[85vh] flex flex-col"
          style={constantModalStyle}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <h3
                className="text-xs font-bold uppercase tracking-widest text-[#f5eee6] flex items-center gap-2"
                style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}
              >
                <span>Design Studio</span>
                {isCustomized && (
                  <span className="text-[10px] text-amber-400 bg-amber-400/15 px-2 py-0.5 rounded-full lowercase">
                    customized
                  </span>
                )}
              </h3>
              <p className="text-[11px] text-white/50 mt-0.5">Customize typography themes, filters &amp; grid layouts</p>
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
          <div
            className="flex border-b border-white/10 mt-3 text-xs"
            style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}
          >
            <button
              onClick={() => setActiveTab("typo")}
              className={`py-2 px-3 border-b-2 transition-colors ${
                activeTab === "typo" ? "border-amber-400 text-amber-400 font-bold" : "border-transparent text-white/60 hover:text-white"
              }`}
            >
              Fonts
            </button>
            <button
              onClick={() => setActiveTab("filter")}
              className={`py-2 px-3 border-b-2 transition-colors ${
                activeTab === "filter" ? "border-amber-400 text-amber-400 font-bold" : "border-transparent text-white/60 hover:text-white"
              }`}
            >
              Filters
            </button>
            <button
              onClick={() => setActiveTab("layout")}
              className={`py-2 px-3 border-b-2 transition-colors ${
                activeTab === "layout" ? "border-amber-400 text-amber-400 font-bold" : "border-transparent text-white/60 hover:text-white"
              }`}
            >
              Grid
            </button>
          </div>

          {/* Tab Content Container */}
          <div className="mt-4 overflow-y-auto space-y-4 pr-1 flex-1 text-xs">
            {/* TAB 1: CURATED TYPOGRAPHY PRESETS */}
            {activeTab === "typo" && (
              <div className="space-y-3">
                <label
                  className="block text-[11px] uppercase tracking-wider text-amber-400 font-semibold mb-1.5"
                  style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}
                >
                  Curated Typography Themes
                </label>
                <div className="space-y-2">
                  {TYPO_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => handleSelectTypoPreset(preset.id)}
                      className={`w-full text-left p-3 rounded-lg border transition-all flex flex-col gap-1 ${
                        selectedTypoId === preset.id
                          ? "bg-white/15 border-amber-400/60 text-white font-medium shadow-md"
                          : "border-white/10 text-white/70 hover:bg-white/5 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="font-semibold text-sm text-[#f5eee6]">{preset.name}</span>
                        {selectedTypoId === preset.id && <span className="text-amber-400 text-xs font-bold">✓</span>}
                      </div>
                      <p className="text-[11px] text-white/50 leading-relaxed mt-0.5">{preset.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: VISUAL FILTERS */}
            {activeTab === "filter" && (
              <div className="space-y-2">
                <label
                  className="block text-[11px] uppercase tracking-wider text-amber-400 font-semibold mb-1.5"
                  style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}
                >
                  Project &amp; Hero Image Filter
                </label>
                {IMAGE_FILTERS.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => handleSelectFilter(filter.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg transition-all flex items-center justify-between border ${
                      selectedFilterId === filter.id
                        ? "bg-white/15 border-amber-400/60 text-white font-medium"
                        : "border-white/10 text-white/70 hover:bg-white/5"
                    }`}
                  >
                    <span>{filter.name}</span>
                    {selectedFilterId === filter.id && <span className="text-amber-400 text-xs font-bold">✓</span>}
                  </button>
                ))}
              </div>
            )}

            {/* TAB 3: SITE-WIDE GRID LAYOUT */}
            {activeTab === "layout" && (
              <div className="space-y-3">
                <label
                  className="block text-[11px] uppercase tracking-wider text-amber-400 font-semibold mb-1.5"
                  style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}
                >
                  Site Layout &amp; Grid Preset
                </label>

                <button
                  onClick={() => handleSelectLayout("editorial")}
                  className={`w-full text-left px-3 py-2.5 rounded-lg border transition-all flex flex-col gap-1 ${
                    selectedLayout === "editorial"
                      ? "bg-white/15 border-amber-400/60 text-white font-medium"
                      : "border-white/10 text-white/70 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-semibold">Editorial Cards (Default)</span>
                    {selectedLayout === "editorial" && <span className="text-amber-400 text-xs font-bold">✓</span>}
                  </div>
                  <span className="text-[10px] text-white/50">Full-width stacked cards with cinematic image previews</span>
                </button>

                <button
                  onClick={() => handleSelectLayout("grid")}
                  className={`w-full text-left px-3 py-2.5 rounded-lg border transition-all flex flex-col gap-1 ${
                    selectedLayout === "grid"
                      ? "bg-white/15 border-amber-400/60 text-white font-medium"
                      : "border-white/10 text-white/70 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-semibold">Symmetrical Grid Focus</span>
                    {selectedLayout === "grid" && <span className="text-amber-400 text-xs font-bold">✓</span>}
                  </div>
                  <span className="text-[10px] text-white/50">2-column balanced grid structure across showcase sections</span>
                </button>

                <button
                  onClick={() => handleSelectLayout("list")}
                  className={`w-full text-left px-3 py-2.5 rounded-lg border transition-all flex flex-col gap-1 ${
                    selectedLayout === "list"
                      ? "bg-white/15 border-amber-400/60 text-white font-medium"
                      : "border-white/10 text-white/70 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-semibold">Minimalist List View</span>
                    {selectedLayout === "list" && <span className="text-amber-400 text-xs font-bold">✓</span>}
                  </div>
                  <span className="text-[10px] text-white/50">Streamlined horizontal table rows for quick review</span>
                </button>

                <button
                  onClick={() => handleSelectLayout("compact")}
                  className={`w-full text-left px-3 py-2.5 rounded-lg border transition-all flex flex-col gap-1 ${
                    selectedLayout === "compact"
                      ? "bg-white/15 border-amber-400/60 text-white font-medium"
                      : "border-white/10 text-white/70 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-semibold">Compact Dashboard Matrix</span>
                    {selectedLayout === "compact" && <span className="text-amber-400 text-xs font-bold">✓</span>}
                  </div>
                  <span className="text-[10px] text-white/50">3-column high-density layout for quick scannability</span>
                </button>
              </div>
            )}
          </div>

          {/* Footer Reset & Actions */}
          <div className="pt-3 border-t border-white/10 mt-3 flex items-center justify-between gap-2">
            <button
              onClick={resetToDefault}
              className="py-1.5 px-3 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white rounded-lg text-[11px] transition-colors"
              style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}
            >
              Reset to Default
            </button>
            <span
              className="text-[10px] text-white/40"
              style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}
            >
              Kashif Nehal Portfolio
            </span>
          </div>
        </div>
      )}
    </aside>
  );
}
