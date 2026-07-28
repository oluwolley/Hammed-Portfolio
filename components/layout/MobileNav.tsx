"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="touch-target inline-flex items-center justify-center rounded-md border border-border px-3 text-sm font-medium"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
      >
        Menu
      </button>
      <div
        id="mobile-nav-panel"
        hidden={!open}
        className={cn(
          "absolute left-0 right-0 top-full border-b border-border bg-background/95 backdrop-blur-md",
          open ? "block" : "hidden",
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-3">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="touch-target flex items-center rounded-md px-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
