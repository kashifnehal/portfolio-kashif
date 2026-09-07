"use client";

import React, { createContext, useContext, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

interface TransitionData {
  slug: string;
  title: string;
  imageSrc: string;
  rect: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
}

interface ProjectTransitionContextType {
  startTransition: (
    e: React.MouseEvent<HTMLAnchorElement>,
    project: { slug: string; title: string; imageSrc: string }
  ) => void;
  isTransitioning: boolean;
}

const ProjectTransitionContext = createContext<ProjectTransitionContextType>({
  startTransition: () => {},
  isTransitioning: false,
});

export const useProjectTransition = () => useContext(ProjectTransitionContext);

export function ProjectTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const reducedMotion = useReducedMotion();
  const [transitionData, setTransitionData] = useState<TransitionData | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cloneRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const startTransition = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement>,
      project: { slug: string; title: string; imageSrc: string }
    ) => {
      // Don't intercept if meta key/ctrl key pressed (open in new tab)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
        return;
      }

      e.preventDefault();

      const targetEl = e.currentTarget;
      const mediaEl = targetEl.querySelector("img") || targetEl;
      const rect = mediaEl.getBoundingClientRect();

      if (reducedMotion) {
        router.push(`/projects/${project.slug}`);
        return;
      }

      if (isTransitioning) return;

      setIsTransitioning(true);
      const data: TransitionData = {
        slug: project.slug,
        title: project.title,
        imageSrc: project.imageSrc,
        rect: {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        },
      };

      setTransitionData(data);

      // Lock body scroll during transition
      document.body.style.overflow = "hidden";

      // Trigger router push
      router.push(`/projects/${project.slug}`);

      // Animate transition using GSAP
      requestAnimationFrame(() => {
        if (!cloneRef.current || !backdropRef.current) return;

        const tl = gsap.timeline({
          onComplete: () => {
            // Fade out overlay after navigation settles
            gsap.to(backdropRef.current, {
              opacity: 0,
              duration: 0.4,
              ease: "power2.out",
              onComplete: () => {
                setTransitionData(null);
                setIsTransitioning(false);
                document.body.style.overflow = "";
              },
            });
          },
        });

        // Background dark wipe
        tl.to(backdropRef.current, {
          opacity: 1,
          duration: 0.35,
          ease: "power2.inOut",
        });

        // Expand clone to full hero banner target
        tl.to(
          cloneRef.current,
          {
            top: 0,
            left: 0,
            width: "100vw",
            height: "60vh",
            borderRadius: "0px",
            duration: 0.65,
            ease: "power3.inOut",
          },
          "<"
        );
      });
    },
    [router, reducedMotion, isTransitioning]
  );

  return (
    <ProjectTransitionContext.Provider
      value={{ startTransition, isTransitioning }}
    >
      {children}

      {/* Transition Overlay Layer */}
      {transitionData && (
        <div
          ref={backdropRef}
          className="aria-hidden pointer-events-none fixed inset-0 z-50 bg-[#0d0d0d] opacity-0"
        >
          <div
            ref={cloneRef}
            className="fixed overflow-hidden bg-neutral-900 shadow-2xl"
            style={{
              top: `${transitionData.rect.top}px`,
              left: `${transitionData.rect.left}px`,
              width: `${transitionData.rect.width}px`,
              height: `${transitionData.rect.height}px`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={transitionData.imageSrc}
              alt={transitionData.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 z-10">
              <h2 className="font-display-condensed text-4xl font-extrabold uppercase text-[#f5eee6] drop-shadow-md">
                {transitionData.title}
              </h2>
            </div>
          </div>
        </div>
      )}
    </ProjectTransitionContext.Provider>
  );
}
