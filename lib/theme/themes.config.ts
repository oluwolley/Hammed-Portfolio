import type { SolvedColorTokens, ThemeMode } from "@/lib/theme/color-engine";

/**
 * Design-time theme parameters (the “art director” inputs).
 * Colors are NOT applied from these raw values — only from baked
 * `colors.light` / `colors.dark` after contrast solving.
 */
export type ThemePresetParams = {
  id: string;
  name: string;
  description: string;
  /** Hint for picker swatch only — mode is controlled by the dark/light toggle */
  accentHue: number;
  accentChroma: number;
  bgChroma: number;
  radius: {
    control: string;
    panel: string;
    card: string;
    pill: string;
  };
  shadows: {
    sm: string;
    md: string;
  };
  fonts: {
    sans: string;
    serif: string;
    googleFamilies: string[];
  };
  swatch: string;
};

export type ThemePreset = ThemePresetParams & {
  /** Pre-solved light + dark semantic colors */
  colors: {
    light: SolvedColorTokens;
    dark: SolvedColorTokens;
  };
  provenance: "canonical" | "solved";
};

const RADIUS_DEFAULT = {
  control: "0.375rem",
  panel: "0.75rem",
  card: "1rem",
  pill: "9999px",
} as const;

const RADIUS_SHARP = {
  control: "0px",
  panel: "0px",
  card: "0px",
  pill: "0px",
} as const;

const RADIUS_SOFT = {
  control: "0.5rem",
  panel: "1rem",
  card: "1.25rem",
  pill: "9999px",
} as const;

const RADIUS_PLAYFUL = {
  control: "0.75rem",
  panel: "1.25rem",
  card: "1.75rem",
  pill: "9999px",
} as const;

const SHADOW_DEFAULT = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
} as const;

const SHADOW_NONE = {
  sm: "none",
  md: "none",
} as const;

const SHADOW_SOFT = {
  sm: "0 1px 3px 0 rgb(0 0 0 / 0.06)",
  md: "0 10px 28px -8px rgb(0 0 0 / 0.14)",
} as const;

const SHADOW_DARK = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.4)",
  md: "0 8px 24px -6px rgb(0 0 0 / 0.55)",
} as const;

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: "default",
    name: "Default",
    description: "The current portfolio look — near-black monochrome.",
    accentHue: 0,
    accentChroma: 0,
    bgChroma: 0,
    radius: RADIUS_DEFAULT,
    shadows: SHADOW_DEFAULT,
    fonts: {
      sans: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif",
      serif:
        '"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, "Times New Roman", serif',
      googleFamilies: [],
    },
    swatch: "#0a0a0a",
    provenance: "canonical",
    colors: {
      light: {
        background: "#fafafa",
        foreground: "#0a0a0a",
        muted: "#ffffff",
        mutedForeground: "#525252",
        border: "#e5e5e5",
        accent: "#0a0a0a",
        accentForeground: "#ffffff",
        heroGlow: "rgba(0, 0, 0, 0.06)",
      },
      dark: {
        background: "#0a0a0a",
        foreground: "#fafafa",
        muted: "#141414",
        mutedForeground: "#a3a3a3",
        border: "#262626",
        accent: "#fafafa",
        accentForeground: "#0a0a0a",
        heroGlow: "rgba(255, 255, 255, 0.08)",
      },
    },
  },
  {
    id: "editorial",
    name: "Editorial",
    description: "Cool ink on pale paper — calm, magazine-like.",
    accentHue: 222,
    accentChroma: 0.06,
    bgChroma: 0.015,
    radius: RADIUS_DEFAULT,
    shadows: SHADOW_DEFAULT,
    fonts: {
      sans: '"Fraunces", Georgia, "Times New Roman", serif',
      serif: '"Fraunces", Georgia, "Times New Roman", serif',
      googleFamilies: ["Fraunces"],
    },
    swatch: "#003949",
    provenance: "solved",
    colors: {
      light: {
        background: "#f0fdff",
        foreground: "#0a1316",
        muted: "#faffff",
        mutedForeground: "#6a767a",
        border: "#889398",
        accent: "#003949",
        accentForeground: "#e1e9ed",
        heroGlow: "rgba(10, 19, 22, 0.06)",
      },
      dark: {
        background: "#060e11",
        foreground: "#deeaef",
        muted: "#121718",
        mutedForeground: "#758185",
        border: "#556064",
        accent: "#8dc1d3",
        accentForeground: "#0d1315",
        heroGlow: "rgba(222, 234, 239, 0.08)",
      },
    },
  },
  {
    id: "brutalist",
    name: "Brutalist",
    description: "Hard edges, zero chroma, no soft shadows.",
    accentHue: 0,
    accentChroma: 0,
    bgChroma: 0,
    radius: RADIUS_SHARP,
    shadows: SHADOW_NONE,
    fonts: {
      sans: '"Darker Grotesque", ui-sans-serif, system-ui, sans-serif',
      serif: '"Darker Grotesque", ui-sans-serif, system-ui, sans-serif',
      googleFamilies: ["Darker Grotesque"],
    },
    swatch: "#333333",
    provenance: "solved",
    colors: {
      light: {
        background: "#fafafa",
        foreground: "#121212",
        muted: "#ffffff",
        mutedForeground: "#737373",
        border: "#919191",
        accent: "#333333",
        accentForeground: "#eee5e7",
        heroGlow: "rgba(18, 18, 18, 0.06)",
      },
      dark: {
        background: "#0c0c0c",
        foreground: "#e8e8e8",
        muted: "#161616",
        mutedForeground: "#7f7f7f",
        border: "#5e5e5e",
        accent: "#b7b7b7",
        accentForeground: "#151011",
        heroGlow: "rgba(232, 232, 232, 0.08)",
      },
    },
  },
  {
    id: "warm-paper",
    name: "Warm Paper",
    description: "Sunlit cream, terracotta accent, soft corners.",
    accentHue: 42,
    accentChroma: 0.07,
    bgChroma: 0.025,
    radius: RADIUS_SOFT,
    shadows: SHADOW_SOFT,
    fonts: {
      sans: '"Source Sans 3", var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
      serif: '"Fraunces", Georgia, "Times New Roman", serif',
      googleFamilies: ["Source Sans 3", "Fraunces"],
    },
    swatch: "#502514",
    provenance: "solved",
    colors: {
      light: {
        background: "#fff5ed",
        foreground: "#1b0e09",
        muted: "#fffdf9",
        mutedForeground: "#7f6e67",
        border: "#9b8c87",
        accent: "#502514",
        accentForeground: "#eee6e3",
        heroGlow: "rgba(27, 14, 9, 0.06)",
      },
      dark: {
        background: "#150805",
        foreground: "#f7e3db",
        muted: "#1b1412",
        mutedForeground: "#8d7b74",
        border: "#685b55",
        accent: "#dfa995",
        accentForeground: "#16100e",
        heroGlow: "rgba(247, 227, 219, 0.08)",
      },
    },
  },
  {
    id: "midnight",
    name: "Midnight",
    description: "Deep indigo night with a cool lilac accent.",
    accentHue: 265,
    accentChroma: 0.09,
    bgChroma: 0.03,
    radius: RADIUS_DEFAULT,
    shadows: SHADOW_DARK,
    fonts: {
      sans: '"DM Sans", var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
      serif: '"DM Sans", var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
      googleFamilies: ["DM Sans"],
    },
    swatch: "#9bb7f2",
    provenance: "solved",
    colors: {
      light: {
        background: "#f0faff",
        foreground: "#0b111f",
        muted: "#faffff",
        mutedForeground: "#6a7385",
        border: "#8a909d",
        accent: "#1c3060",
        accentForeground: "#e4e8ef",
        heroGlow: "rgba(11, 17, 31, 0.06)",
      },
      dark: {
        background: "#060c19",
        foreground: "#dee8fd",
        muted: "#13161d",
        mutedForeground: "#767f92",
        border: "#585e6a",
        accent: "#9bb7f2",
        accentForeground: "#0f1216",
        heroGlow: "rgba(222, 232, 253, 0.08)",
      },
    },
  },
  {
    id: "playful",
    name: "Playful",
    description: "Magenta energy, rounder shapes, friendly type.",
    accentHue: 328,
    accentChroma: 0.12,
    bgChroma: 0.035,
    radius: RADIUS_PLAYFUL,
    shadows: SHADOW_SOFT,
    fonts: {
      sans: '"Playpen Sans", var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
      serif: '"Playpen Sans", var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
      googleFamilies: ["Playpen Sans"],
    },
    swatch: "#511351",
    provenance: "solved",
    colors: {
      light: {
        background: "#fff2ff",
        foreground: "#190d18",
        muted: "#fffbff",
        mutedForeground: "#7d6c7b",
        border: "#978b96",
        accent: "#511351",
        accentForeground: "#ece6eb",
        heroGlow: "rgba(25, 13, 24, 0.06)",
      },
      dark: {
        background: "#140714",
        foreground: "#f4e1f2",
        muted: "#1a131a",
        mutedForeground: "#8a7a89",
        border: "#655b64",
        accent: "#e19bde",
        accentForeground: "#141014",
        heroGlow: "rgba(244, 225, 242, 0.08)",
      },
    },
  },
];

export const DEFAULT_THEME_ID = "default";

export function getThemePreset(id: string): ThemePreset | undefined {
  return THEME_PRESETS.find((preset) => preset.id === id);
}

export function getDefaultThemePreset(): ThemePreset {
  return THEME_PRESETS.find((preset) => preset.id === DEFAULT_THEME_ID)!;
}

export function colorsForMode(
  preset: ThemePreset,
  mode: ThemeMode,
): SolvedColorTokens {
  return mode === "dark" ? preset.colors.dark : preset.colors.light;
}
