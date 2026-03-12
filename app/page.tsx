"use client"; // Add this directive at the top

import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import { ParallaxWrapper } from './components/styled';
import Projects from './components/Projects';
import Contributions from './components/Contributions';

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <ParallaxWrapper >
        <HeroSection />
      </ParallaxWrapper>
      <Contributions />
      <Projects />

      {/* <Section
        id="about"
        title="About Patrick David"
        content="Patrick David is an entrepreneur, speaker, and author. His mission is to inspire people to take action and live their dreams."
        bg="#f4f4f4"
        color="#000"
      />
      <Section
        id="services"
        title="What I Do"
        content="Patrick provides mentorship, speaking engagements, and resources for entrepreneurs and business owners."
        bg="#fff"
        color="#000"
      />
      <Section
        id="contact"
        title="Contact"
        content="Interested in working together? Get in touch today."
        bg="#f4f4f4"
        color="#000"
      /> */}
      <Footer />
    </>
  );
}
