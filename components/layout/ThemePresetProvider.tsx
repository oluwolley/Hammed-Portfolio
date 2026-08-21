"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useTheme } from "next-themes";
import {
  applyThemePresetById,
  persistThemePresetId,
  readPersistedThemePresetId,
} from "@/lib/theme/apply-preset";
import type { ThemeMode } from "@/lib/theme/color-engine";
import {
  DEFAULT_THEME_ID,
  getDefaultThemePreset,
  getThemePreset,
  type ThemePreset,
} from "@/lib/theme/themes.config";

type ThemePresetContextValue = {
  preset: ThemePreset;
  presetId: string;
  setPresetId: (id: string) => void;
};

const ThemePresetContext = createContext<ThemePresetContextValue | null>(null);

function readThemeIdFromUrl(): string | null {
  if (typeof window === "undefined") return null;
  const value = new URLSearchParams(window.location.search).get("theme");
  if (!value) return null;
  return getThemePreset(value) ? value : null;
}

function writeThemeIdToUrl(id: string): void {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (id === DEFAULT_THEME_ID) {
    url.searchParams.delete("theme");
  } else {
    url.searchParams.set("theme", id);
  }
  window.history.replaceState(null, "", url.pathname + url.search + url.hash);
}

function modeFromResolved(resolvedTheme: string | undefined): ThemeMode {
  return resolvedTheme === "dark" ? "dark" : "light";
}

export function ThemePresetProvider({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [presetId, setPresetIdState] = useState(DEFAULT_THEME_ID);
  const [hydrated, setHydrated] = useState(false);

  const applyId = useCallback(
    (id: string, mode: ThemeMode, options: { persist: boolean; syncUrl: boolean }) => {
      const preset = applyThemePresetById(id, mode);
      setPresetIdState(preset.id);
      if (options.persist) persistThemePresetId(preset.id);
      if (options.syncUrl) writeThemeIdToUrl(preset.id);
      return preset;
    },
    [],
  );

  // Restore preset from URL / localStorage once on mount
  useEffect(() => {
    const fromUrl = readThemeIdFromUrl();
    const saved = readPersistedThemePresetId();
    const initial =
      fromUrl ??
      (saved && getThemePreset(saved) ? saved : DEFAULT_THEME_ID);
    setPresetIdState(initial);
    setHydrated(true);
  }, []);

  // Re-apply palette whenever preset or light/dark mode changes
  useEffect(() => {
    if (!hydrated || !resolvedTheme) return;
    const mode = modeFromResolved(resolvedTheme);
    applyThemePresetById(presetId, mode);
  }, [hydrated, presetId, resolvedTheme]);

  const setPresetId = useCallback(
    (id: string) => {
      const mode = modeFromResolved(resolvedTheme);
      applyId(id, mode, { persist: true, syncUrl: true });
    },
    [applyId, resolvedTheme],
  );

  const preset = getThemePreset(presetId) ?? getDefaultThemePreset();

  const value = useMemo<ThemePresetContextValue>(
    () => ({
      preset,
      presetId: preset.id,
      setPresetId,
    }),
    [preset, setPresetId],
  );

  return (
    <ThemePresetContext.Provider value={value}>
      {children}
    </ThemePresetContext.Provider>
  );
}

export function useThemePreset(): ThemePresetContextValue {
  const ctx = useContext(ThemePresetContext);
  if (!ctx) {
    throw new Error("useThemePreset must be used within ThemePresetProvider");
  }
  return ctx;
}
