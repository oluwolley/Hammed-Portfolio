"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  /** Slightly stronger lift for larger blocks */
  distance?: "sm" | "md";
};

/**
 * Fade/slide content in when it enters the viewport.
 * Starts visible so SSR / slow JS / a broken bundle never leave
 * the page looking like CSS failed to load (blank hero, nav only).
 */
export function Reveal({
  children,
  className,
  delayMs = 0,
  distance = "sm",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Avoid transform/opacity animations on coarse pointers — large image trees
    // under CSS transforms can crash Mobile Safari while scrolling.
    const coarse =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(pointer: coarse)").matches;
    if (reduced || coarse) {
      setVisible(true);
      return;
    }

    const rect = node.getBoundingClientRect();
    const inView =
      rect.top < window.innerHeight * 0.94 && rect.bottom > window.innerHeight * 0.02;

    // Keep above-the-fold content visible — no hide/show flash.
    if (inView) {
      setVisible(true);
      return;
    }

    // Below the fold: hide, then reveal on scroll.
    setVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const hiddenY = distance === "md" ? "translate-y-6" : "translate-y-3";

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out",
        "motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100",
        visible ? "translate-y-0 opacity-100" : cn(hiddenY, "opacity-0"),
        className,
      )}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
