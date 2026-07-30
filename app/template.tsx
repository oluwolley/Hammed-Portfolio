import type { ReactNode } from "react";

type TemplateProps = {
  children: ReactNode;
};

/** Remounts on navigation — subtle enter animation for route changes. */
export default function Template({ children }: TemplateProps) {
  return (
    <div className="motion-safe:animate-page-in max-md:animate-none [@media(prefers-reduced-motion:reduce)]:animate-none">
      {children}
    </div>
  );
}
