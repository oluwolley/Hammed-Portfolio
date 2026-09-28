"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

type CopyEmailButtonProps = {
  className?: string;
};

export function CopyEmailButton({ className }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex min-h-9 items-center justify-center rounded-lg border border-border bg-background px-4 py-2.5 text-xs font-semibold text-foreground",
        "transition-colors hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground",
        className,
      )}
      aria-live="polite"
    >
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
