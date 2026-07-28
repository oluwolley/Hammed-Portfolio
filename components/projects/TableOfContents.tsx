"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { CaseStudySection } from "@/content/types";
import { cn } from "@/lib/utils";

type TableOfContentsProps = {
  sections: CaseStudySection[];
  className?: string;
};

export function TableOfContents({ sections, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    if (!sections.length) return;

    const headings = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    headings.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  if (!sections.length) return null;

  return (
    <nav aria-label="Table of contents" className={className}>
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        On this page
      </p>
      <ul className="mt-4 space-y-2 border-l border-border pl-4">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              className={cn(
                "block py-1 text-sm leading-snug transition-colors",
                activeId === section.id
                  ? "font-medium text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

type MobileTableOfContentsProps = {
  sections: CaseStudySection[];
};

export function MobileTableOfContents({ sections }: MobileTableOfContentsProps) {
  if (!sections.length) return null;

  return (
    <details className="group rounded-xl border border-border bg-muted/20 lg:hidden">
      <summary className="touch-target flex cursor-pointer list-none items-center px-4 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground [&::-webkit-details-marker]:hidden">
        On this page
      </summary>
      <nav aria-label="Table of contents" className="border-t border-border px-2 py-2">
        <ul className="space-y-0.5">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                className="touch-target flex items-center rounded-md px-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
