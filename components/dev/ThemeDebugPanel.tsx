"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  applySolvedColorTokens,
  auditThemeContrast,
  clearSolvedColorTokens,
  solveThemeColors,
  type ThemeMode,
} from "@/lib/theme/color-engine";
import { clearThemePreset } from "@/lib/theme/apply-preset";
import { THEME_PRESETS } from "@/lib/theme/themes.config";
import { useThemePreset } from "@/components/layout/ThemePresetProvider";
import { cn } from "@/lib/utils";

const DEFAULTS = {
  hue: 0,
  chroma: 0.02,
  bgChroma: 0.01,
  mode: "light" as ThemeMode,
};

/**
 * Dev-only panel to exercise the contrast solver with manual sliders.
 * Not shipped in production builds (gated in layout).
 */
export function ThemeDebugPanel() {
  const { setTheme, resolvedTheme } = useTheme();
  const { presetId, setPresetId } = useThemePreset();
  const [open, setOpen] = useState(false);
  const [hue, setHue] = useState(DEFAULTS.hue);
  const [chroma, setChroma] = useState(DEFAULTS.chroma);
  const [bgChroma, setBgChroma] = useState(DEFAULTS.bgChroma);
  const [mode, setMode] = useState<ThemeMode>(DEFAULTS.mode);
  const [error, setError] = useState<string | null>(null);
  const [active, setActive] = useState(false);

  const solved = useMemo(() => {
    try {
      const tokens = solveThemeColors({
        mode,
        accentHue: hue,
        accentChroma: chroma,
        bgChroma,
      });
      return { tokens, reports: auditThemeContrast(tokens), error: null as string | null };
    } catch (e) {
      return {
        tokens: null,
        reports: [],
        error: e instanceof Error ? e.message : "Solve failed",
      };
    }
  }, [hue, chroma, bgChroma, mode]);

  useEffect(() => {
    if (!open || !active || !solved.tokens) return;
    try {
      applySolvedColorTokens(solved.tokens);
      setTheme(mode);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Apply failed");
    }
  }, [open, active, solved.tokens, mode, setTheme]);

  useEffect(() => {
    if (!open) return;
    setMode(resolvedTheme === "dark" ? "dark" : "light");
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only sync when panel opens
  }, [open]);

  function reset() {
    clearThemePreset();
    clearSolvedColorTokens();
    setActive(false);
    setPresetId("default");
    setHue(DEFAULTS.hue);
    setChroma(DEFAULTS.chroma);
    setBgChroma(DEFAULTS.bgChroma);
    setError(null);
  }

  function applyPreset(id: string) {
    try {
      setActive(false);
      setPresetId(id);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Preset apply failed");
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-[200] font-sans text-xs no-print">
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-md border border-border bg-background px-3 py-2 font-medium text-foreground shadow-md"
        >
          Theme solver
        </button>
      ) : (
        <div className="w-[min(100vw-2rem,20rem)] rounded-xl border border-border bg-background p-4 shadow-md">
          <div className="flex items-center justify-between gap-2">
            <p className="font-medium text-foreground">Theme solver (dev)</p>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
              }}
              className="text-muted-foreground hover:text-foreground"
            >
              Close
            </button>
          </div>

          <p className="mt-3 text-[10px] uppercase tracking-wide text-muted-foreground">
            Presets
          </p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {THEME_PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                title={preset.description}
                onClick={() => applyPreset(preset.id)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-md border px-2 py-1",
                  presetId === preset.id
                    ? "border-foreground text-foreground"
                    : "border-border text-muted-foreground hover:text-foreground",
                )}
              >
                <span
                  className="size-2.5 rounded-full border border-border"
                  style={{ backgroundColor: preset.swatch }}
                />
                {preset.name}
              </button>
            ))}
          </div>

          <p className="mt-4 text-[10px] uppercase tracking-wide text-muted-foreground">
            Live solve
          </p>

          <label className="mt-2 flex flex-col gap-1 text-muted-foreground">
            Hue {Math.round(hue)}°
            <input
              type="range"
              min={0}
              max={360}
              step={1}
              value={hue}
              onChange={(e) => {
                setActive(true);
                setHue(Number(e.target.value));
              }}
            />
          </label>

          <label className="mt-3 flex flex-col gap-1 text-muted-foreground">
            Accent chroma {chroma.toFixed(3)}
            <input
              type="range"
              min={0}
              max={0.2}
              step={0.005}
              value={chroma}
              onChange={(e) => {
                setActive(true);
                setChroma(Number(e.target.value));
              }}
            />
          </label>

          <label className="mt-3 flex flex-col gap-1 text-muted-foreground">
            BG chroma {bgChroma.toFixed(3)}
            <input
              type="range"
              min={0}
              max={0.08}
              step={0.005}
              value={bgChroma}
              onChange={(e) => {
                setActive(true);
                setBgChroma(Number(e.target.value));
              }}
            />
          </label>

          <div className="mt-3 flex gap-2">
            {(["light", "dark"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => {
                  setActive(true);
                  setMode(value);
                }}
                className={cn(
                  "flex-1 rounded-md border px-2 py-1.5 capitalize",
                  mode === value
                    ? "border-foreground bg-muted text-foreground"
                    : "border-border text-muted-foreground hover:text-foreground",
                )}
              >
                {value}
              </button>
            ))}
          </div>

          {solved.tokens ? (
            <div className="mt-3 grid grid-cols-4 gap-1">
              {(
                [
                  "background",
                  "foreground",
                  "accent",
                  "muted",
                  "mutedForeground",
                  "border",
                  "accentForeground",
                ] as const
              ).map((key) => (
                <div key={key} className="flex flex-col items-center gap-1">
                  <span
                    className="h-6 w-full rounded border border-border"
                    style={{ backgroundColor: solved.tokens![key] }}
                    title={`${key}: ${solved.tokens![key]}`}
                  />
                </div>
              ))}
            </div>
          ) : null}

          <ul className="mt-3 space-y-1 text-[10px] leading-snug text-muted-foreground">
            {solved.reports.map((r) => (
              <li key={r.name} className={r.pass ? "" : "text-foreground"}>
                {r.pass ? "✓" : "✗"} {r.name} {r.ratio.toFixed(2)}
              </li>
            ))}
          </ul>

          {(error || solved.error) && (
            <p className="mt-2 text-[10px] text-foreground">{error ?? solved.error}</p>
          )}

          <button
            type="button"
            onClick={reset}
            className="mt-3 w-full rounded-md border border-border px-2 py-1.5 text-muted-foreground hover:text-foreground"
          >
            Reset to default CSS
          </button>
        </div>
      )}
    </div>
  );
}
