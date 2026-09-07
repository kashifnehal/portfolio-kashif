import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MotionProvider from "@/components/motion/MotionProvider";
import SiteShell from "@/components/layout/SiteShell";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kashifnehal.com"),
  title: {
    default: "Kashif Nehal | Lead UX/UI Designer & Creative Developer",
    template: "%s | Kashif Nehal",
  },
  description:
    "Portfolio of Kashif Nehal — Lead UX/UI Designer & Creative Developer crafting high-impact digital products, design systems, and bespoke web experiences.",
  keywords: [
    "Kashif Nehal",
    "UX/UI Design",
    "Creative Development",
    "Design System",
    "Frontend Engineering",
    "Next.js Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Kashif Nehal", url: "https://kashifnehal.com" }],
  creator: "Kashif Nehal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kashifnehal.com",
    title: "Kashif Nehal | Lead UX/UI Designer & Creative Developer",
    description:
      "Portfolio of Kashif Nehal — Lead UX/UI Designer & Creative Developer crafting high-impact digital products, design systems, and bespoke web experiences.",
    siteName: "Kashif Nehal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashif Nehal | Lead UX/UI Designer & Creative Developer",
    description:
      "Portfolio of Kashif Nehal — Lead UX/UI Designer & Creative Developer crafting high-impact digital products, design systems, and bespoke web experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
