"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="touch-target inline-flex items-center justify-center rounded-md border border-border px-3 text-sm font-medium"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <div
        id={panelId}
        hidden={!open}
        className={cn(
          "absolute left-0 right-0 top-full border-b border-border bg-background md:bg-background/95 md:backdrop-blur-md",
          open ? "block" : "hidden",
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-3">
          {siteConfig.nav.map((item) => {
            const external = item.href.startsWith("http");
            const isResume =
              item.href === siteConfig.resume.href || item.href.endsWith(".pdf");
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  download={
                    isResume
                      ? (siteConfig.resume.downloadFileName ?? true)
                      : undefined
                  }
                  className="touch-target flex items-center rounded-md px-3 text-sm font-semibold tracking-wide text-muted-foreground hover:bg-muted hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
