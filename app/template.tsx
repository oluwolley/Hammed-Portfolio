import type { ReactNode } from "react";

type TemplateProps = {
  children: ReactNode;
};

/** Remounts on navigation — subtle enter animation for route changes. */
export default function Template({ children }: TemplateProps) {
  return <div className="animate-page-in motion-reduce:animate-none">{children}</div>;
}
