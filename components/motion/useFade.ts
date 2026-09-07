"use client";

import { useReveal } from "./useReveal";

export function useFade<T extends HTMLElement>(ref: React.RefObject<T>) {
  useReveal(ref, { y: 0 });
}