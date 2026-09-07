import FoundationHero from "@/components/hero/FoundationHero";
import IntroSection from "@/components/sections/IntroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import RecognitionSection from "@/components/sections/RecognitionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import ContactSection from "@/components/sections/ContactSection";
import { PersonJsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      {/* Structured Data: Person + ProfilePage + WebSite entity graph */}
      <PersonJsonLd />

      {/* 1. Hero */}
      <FoundationHero />

      {/* 2. Introduction / About */}
      <IntroSection />

      {/* 3. Selected Cases / Projects */}
      <ProjectsSection />

      {/* 4. Awards & Recognition */}
      <RecognitionSection />

      {/* 5. Services / Capabilities */}
      <ServicesSection />

      {/* 6. Featured Marquee Strip */}
      <MarqueeStrip />

      {/* 7. Contact CTA */}
      <ContactSection />
    </>
  );
}
