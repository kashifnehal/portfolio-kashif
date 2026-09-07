"use client";

import { useReveal } from "./useReveal";

export function useSlide<T extends HTMLElement>(
  ref: React.RefObject<T>,
  distance = 48,
) {
  useReveal(ref, { y: distance });
}