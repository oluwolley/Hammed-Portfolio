export {
  CONTRAST_TEXT,
  CONTRAST_UI,
  applySolvedColorTokens,
  assertThemeAccessible,
  auditThemeContrast,
  clearSolvedColorTokens,
  contrastOf,
  solveLightness,
  solveThemeColors,
  type SolvedColorTokens,
  type ThemeMode,
  type ThemeSolveInput,
} from "@/lib/theme/color-engine";

export {
  DEFAULT_THEME_ID,
  THEME_PRESETS,
  colorsForMode,
  getDefaultThemePreset,
  getThemePreset,
  type ThemePreset,
  type ThemePresetParams,
} from "@/lib/theme/themes.config";

export {
  THEME_STORAGE_KEY,
  applyThemePreset,
  applyThemePresetById,
  clearThemePreset,
  persistThemePresetId,
  presetSwatch,
  readPersistedThemePresetId,
} from "@/lib/theme/apply-preset";
