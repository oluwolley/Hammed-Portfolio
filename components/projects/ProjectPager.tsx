import Link from "next/link";
import type { Project } from "@/content/types";
import { cn } from "@/lib/utils";

type ProjectPagerProps = {
  previous: Project | null;
  next: Project | null;
};

export function ProjectPager({ previous, next }: ProjectPagerProps) {
  if (!previous && !next) return null;

  return (
    <nav
      aria-label="Case study navigation"
      className="mt-16 border-t border-border pt-10 md:mt-20 md:pt-12"
    >
      <div
        className={cn(
          "grid gap-6",
          previous && next ? "md:grid-cols-2" : "grid-cols-1",
        )}
      >
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className="group rounded-2xl border border-border bg-muted/20 p-4 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-muted/40 motion-reduce:hover:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:p-5 md:p-6"
          >
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Previous
            </p>
            <p className="mt-2 text-sm font-medium tracking-tight break-words group-hover:underline sm:text-base md:text-lg">
              ← {previous.title}
            </p>
          </Link>
        ) : (
          <div aria-hidden className="hidden md:block" />
        )}

        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className={cn(
              "group rounded-2xl border border-border bg-muted/20 p-4 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-muted/40 motion-reduce:hover:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:p-5 md:p-6",
              previous ? "md:text-right" : "",
            )}
          >
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Next
            </p>
            <p className="mt-2 text-sm font-medium tracking-tight break-words group-hover:underline sm:text-base md:text-lg">
              {next.title} →
            </p>
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
