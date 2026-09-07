import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        surface: "var(--color-surface)",
        muted: "var(--color-muted)",
        overlay: "var(--color-overlay)",
        accent: "var(--color-accent)",
        "border-token": "var(--color-border)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      spacing: {
        gutter: "var(--space-gutter)",
        "gutter-mobile": "var(--space-gutter-mobile)",
      },
      maxWidth: {
        content: "var(--content-max-width)",
      },
      transitionTimingFunction: {
        standard: "var(--ease-standard)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        reveal: "var(--duration-reveal)",
        page: "var(--duration-page)",
      },
    },
  },
  plugins: [],
};
export default config;
