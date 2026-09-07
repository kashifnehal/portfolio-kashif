import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MotionProvider from "@/components/motion/MotionProvider";
import SiteShell from "@/components/layout/SiteShell";

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
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MotionProvider>
          <SiteShell>{children}</SiteShell>
        </MotionProvider>
      </body>
    </html>
  );
}
