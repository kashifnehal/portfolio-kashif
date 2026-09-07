"use client";

import { useLayoutEffect } from "react";
import { ensureGsapPlugins } from "@/lib/animation";
import { useReducedMotion } from "./useReducedMotion";

export function useParallax<T extends HTMLElement>(
  ref: React.RefObject<T>,
  amount = 80,
) {
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || reducedMotion) return;
    const { gsap } = ensureGsapPlugins();
    const context = gsap.context(() => {
      gsap.to(element, {
        y: amount,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, element);
    return () => context.revert();
  }, [amount, ref, reducedMotion]);
}
