"use client";

import type { ReactNode } from "react";
import { ReadingProgress } from "@/components/projects/ReadingProgress";

type CaseStudyChromeProps = {
  children: ReactNode;
};

export function CaseStudyChrome({ children }: CaseStudyChromeProps) {
  return (
    <>
      <ReadingProgress />
      {children}
    </>
  );
}
