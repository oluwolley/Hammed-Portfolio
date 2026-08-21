"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useThemePreset } from "@/components/layout/ThemePresetProvider";
import { THEME_PRESETS } from "@/lib/theme/themes.config";
import { cn } from "@/lib/utils";

function PaletteIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M12 22a10 10 0 1 1 10-10c0 2.5-1.5 3.5-3 3.5h-1.5a2 2 0 0 0-2 2.2 2.8 2.8 0 0 1-2.8 2.8H12z" />
      <circle cx="7.5" cy="11.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="11.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ThemeSwitcher() {
  const { presetId, setPresetId, preset } = useThemePreset();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        panelRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("touchstart", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("touchstart", onPointerDown);
    };
  }, [open]);

  if (!mounted) {
    return (
      <span
        className="touch-target inline-block rounded-md border border-border"
        aria-hidden
      />
    );
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        className={cn(
          "touch-target inline-flex items-center justify-center rounded-md border border-border",
          "text-foreground transition-colors hover:bg-muted",
        )}
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="listbox"
        aria-label={`Theme palette: ${preset.name}. Change theme`}
        title="Change theme"
        onClick={() => setOpen((v) => !v)}
      >
        <PaletteIcon className="h-4 w-4" />
      </button>

      {open ? (
        <div
          ref={panelRef}
          id={panelId}
          role="listbox"
          aria-label="Site themes"
          className={cn(
            "absolute right-0 top-[calc(100%+0.5rem)] z-50 w-[min(100vw-2rem,18rem)]",
            "rounded-xl border border-border bg-background p-2 shadow-md",
          )}
        >
          <p className="px-2 pb-1.5 pt-1 text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
            Themes
          </p>
          <ul className="flex flex-col gap-0.5">
            {THEME_PRESETS.map((item) => {
              const selected = item.id === presetId;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    className={cn(
                      "flex w-full items-start gap-3 rounded-md px-2 py-2 text-left transition-colors",
                      selected
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                    )}
                    onClick={() => {
                      setPresetId(item.id);
                      setOpen(false);
                      buttonRef.current?.focus();
                    }}
                  >
                    <span
                      className="mt-0.5 size-4 shrink-0 rounded-full border border-border"
                      style={{ backgroundColor: item.swatch }}
                      aria-hidden
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium text-foreground">
                        {item.name}
                      </span>
                      <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                        {item.description}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
