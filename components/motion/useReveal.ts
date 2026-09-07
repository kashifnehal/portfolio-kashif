"use client";

import { useLayoutEffect } from "react";
import { ensureGsapPlugins } from "@/lib/animation";
import { useReducedMotion } from "./useReducedMotion";

type RevealOptions = { y?: number; duration?: number };

export function useReveal<T extends HTMLElement>(
  ref: React.RefObject<T>,
  { y = 48, duration = 0.9 }: RevealOptions = {},
) {
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (reducedMotion) {
      element.style.opacity = "1";
      element.style.transform = "none";
      return;
    }

    const { gsap, ScrollTrigger } = ensureGsapPlugins();
    const context = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        },
      );
    }, element);

    return () => {
      context.revert();
      ScrollTrigger.refresh();
    };
  }, [duration, ref, reducedMotion, y]);
}
