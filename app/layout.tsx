import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  Syne,
  Space_Grotesk,
  Playfair_Display,
  Bebas_Neue,
  Oswald,
  Cormorant_Garamond,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/motion/MotionProvider";
import SiteShell from "@/components/layout/SiteShell";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const BASE_URL = "https://kashifnehal.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Kashif Nehal — Software Engineer & Designer",
    template: "%s — Kashif Nehal",
  },
  description:
    "Kashif Nehal is a software engineer, UX/UI designer and frontend developer based in Bangalore, India. Explore his portfolio of digital products, design systems, and bespoke web experiences.",
  keywords: [
    "Kashif Nehal",
    "Nehal Kashif",
    "Kashif Nehal portfolio",
    "Kashif Nehal developer",
    "Kashif Nehal software engineer",
    "Kashif Nehal designer",
    "UX/UI Design",
    "Frontend Development",
    "React developer",
    "Next.js developer",
    "Bangalore",
    "India",
  ],
  authors: [{ name: "Kashif Nehal", url: BASE_URL }],
  creator: "Kashif Nehal",
  publisher: "Kashif Nehal",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: BASE_URL,
    title: "Kashif Nehal — Software Engineer & Designer",
    description:
      "Kashif Nehal is a software engineer, UX/UI designer and frontend developer based in Bangalore, India. Explore his portfolio of digital products, design systems, and bespoke web experiences.",
    siteName: "Kashif Nehal",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kashif Nehal — Software Engineer & Designer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashif Nehal — Software Engineer & Designer",
    description:
      "Kashif Nehal is a software engineer, UX/UI designer and frontend developer based in Bangalore, India. Explore his portfolio of digital products and bespoke web experiences.",
    images: ["/og-image.png"],
    creator: "@kashifnehal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable} ${bebasNeue.variable} ${oswald.variable} ${cormorantGaramond.variable} ${instrumentSerif.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* Preconnect & load Google Fonts fallback */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Grotesk:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,400;1,600&family=Bebas+Neue&family=Oswald:wght@600;700&family=Cormorant+Garamond:ital,wght@1,600;1,700&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <MotionProvider>
          <SiteShell>{children}</SiteShell>
        </MotionProvider>
      </body>
    </html>
  );
}
