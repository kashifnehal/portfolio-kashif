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
  title: "Kashif Nehal | Digital Designer & Developer",
  description:
    "Portfolio of Kashif Nehal — digital designer and developer crafting precise, purposeful web experiences.",
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
