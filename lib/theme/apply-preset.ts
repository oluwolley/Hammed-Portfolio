import {
  applySolvedColorTokens,
  clearSolvedColorTokens,
  type SolvedColorTokens,
  type ThemeMode,
} from "@/lib/theme/color-engine";
import {
  DEFAULT_THEME_ID,
  colorsForMode,
  getDefaultThemePreset,
  getThemePreset,
  type ThemePreset,
} from "@/lib/theme/themes.config";
import { ensureGoogleFonts } from "@/lib/theme/load-fonts";

const RADIUS_CSS_VARS = {
  control: "--radius-control",
  panel: "--radius-panel",
  card: "--radius-card",
  pill: "--radius-pill",
} as const;

const SHADOW_CSS_VARS = {
  sm: "--shadow-elevated-sm",
  md: "--shadow-elevated",
} as const;

const FONT_CSS_VARS = {
  sans: "--font-sans-stack",
  serif: "--font-serif-stack",
} as const;

export const THEME_STORAGE_KEY = "hammed-theme-preset";

/**
 * Apply a pre-solved preset for the active light/dark mode.
 * Default clears inline color overrides so `:root` / `.dark` CSS stays in charge
 * for colors, while still stamping the preset id.
 */
export function applyThemePreset(
  preset: ThemePreset,
  mode: ThemeMode,
  target: HTMLElement = document.documentElement,
): void {
  if (preset.id === DEFAULT_THEME_ID) {
    clearSolvedColorTokens(target);
  } else {
    applySolvedColorTokens(colorsForMode(preset, mode), target, {
      requireUiBorder: preset.provenance === "solved",
    });
  }

  target.style.setProperty(RADIUS_CSS_VARS.control, preset.radius.control);
  target.style.setProperty(RADIUS_CSS_VARS.panel, preset.radius.panel);
  target.style.setProperty(RADIUS_CSS_VARS.card, preset.radius.card);
  target.style.setProperty(RADIUS_CSS_VARS.pill, preset.radius.pill);

  // Soften elevation in dark mode for non-brutalist presets that use light shadows
  const shadows =
    mode === "dark" && preset.shadows.sm !== "none"
      ? {
          sm: "0 1px 2px 0 rgb(0 0 0 / 0.4)",
          md: "0 8px 24px -6px rgb(0 0 0 / 0.55)",
        }
      : preset.shadows;

  target.style.setProperty(SHADOW_CSS_VARS.sm, shadows.sm);
  target.style.setProperty(SHADOW_CSS_VARS.md, shadows.md);

  target.style.setProperty(FONT_CSS_VARS.sans, preset.fonts.sans);
  target.style.setProperty(FONT_CSS_VARS.serif, preset.fonts.serif);

  ensureGoogleFonts(preset.fonts.googleFamilies);

  target.dataset.themePreset = preset.id;
}

/** Clear inline overrides and restore stylesheet defaults (Default theme). */
export function clearThemePreset(
  target: HTMLElement = document.documentElement,
): void {
  clearSolvedColorTokens(target);

  Object.values(RADIUS_CSS_VARS).forEach((cssVar) => {
    target.style.removeProperty(cssVar);
  });
  Object.values(SHADOW_CSS_VARS).forEach((cssVar) => {
    target.style.removeProperty(cssVar);
  });
  Object.values(FONT_CSS_VARS).forEach((cssVar) => {
    target.style.removeProperty(cssVar);
  });

  ensureGoogleFonts([]);

  delete target.dataset.themePreset;
}

export function applyThemePresetById(
  id: string,
  mode: ThemeMode,
): ThemePreset {
  const preset =
    id === DEFAULT_THEME_ID
      ? getDefaultThemePreset()
      : getThemePreset(id);

  if (!preset) {
    throw new Error(`Unknown theme preset: ${id}`);
  }

  if (preset.id === DEFAULT_THEME_ID) {
    clearThemePreset();
    document.documentElement.dataset.themePreset = preset.id;
    return preset;
  }

  applyThemePreset(preset, mode);
  return preset;
}

export function persistThemePresetId(id: string): void {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, id);
  } catch {
    // Ignore quota / private mode
  }
}

export function readPersistedThemePresetId(): string | null {
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

/** Swatch color for picker UI */
export function presetSwatch(preset: ThemePreset): string {
  return preset.swatch || preset.colors.light.accent;
}

export type { SolvedColorTokens, ThemePreset };
