import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  ariaLabelledby?: string;
};

export function Section({ id, children, className, ariaLabelledby }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn("scroll-mt-20 py-16 sm:py-20 md:scroll-mt-16 md:py-28", className)}
    >
      {children}
    </section>
  );
}
