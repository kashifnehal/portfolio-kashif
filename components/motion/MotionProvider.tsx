"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { ensureGsapPlugins } from "@/lib/animation";
import { useReducedMotion } from "./useReducedMotion";

export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const reducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = ensureGsapPlugins();
    if (reducedMotion) {
      ScrollTrigger.config({ ignoreMobileResize: true });
      return;
    }

    const lenis = new Lenis({ autoRaf: false });
    const onTick = (time: number) => lenis.raf(time * 1000);
    const onScroll = () => ScrollTrigger.update();
    gsap.ticker.add(onTick);
    lenis.on("scroll", onScroll);

    return () => {
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, [reducedMotion]);

  return <div ref={rootRef}>{children}</div>;
}
