"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";

interface ProjectHoverInteractionProps {
  children: ReactNode;
  className?: string;
}

export default function ProjectHoverInteraction({
  children,
  className = "",
}: ProjectHoverInteractionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!containerRef.current) return;
    gsap.to(containerRef.current, {
      y: -4,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    gsap.to(containerRef.current, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
