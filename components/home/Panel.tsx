import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PanelProps = {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "aside";
  id?: string;
  ariaLabelledby?: string;
};

export function Panel({
  children,
  className,
  as: Tag = "section",
  id,
  ariaLabelledby,
}: PanelProps) {
  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        "flex flex-col gap-5 rounded-2xl border border-border bg-muted/40 p-5 sm:p-6",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type SectionLabelProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function SectionLabel({ id, children, className }: SectionLabelProps) {
  return (
    <h2
      id={id}
      className={cn(
        "pb-4 text-[11px] font-bold uppercase tracking-wide text-muted-foreground",
        className,
      )}
    >
      {children}
    </h2>
  );
}
