import {
  formatHex,
  oklch,
  wcagContrast,
  type Oklch,
} from "culori";

/** WCAG AA for normal text */
export const CONTRAST_TEXT = 4.5;
/** WCAG AA for large text / UI components */
export const CONTRAST_UI = 3;

export type ThemeMode = "light" | "dark";

export type ThemeSolveInput = {
  mode: ThemeMode;
  /** Accent hue in degrees 0–360 */
  accentHue: number;
  /** Accent chroma (OKLCH C), typical 0–0.2 */
  accentChroma: number;
  /** Background chroma (OKLCH C), typical 0–0.06 */
  bgChroma: number;
};

/** Semantic color tokens produced by the solver (hex only). */
export type SolvedColorTokens = {
  background: string;
  foreground: string;
  muted: string;
  mutedForeground: string;
  border: string;
  accent: string;
  accentForeground: string;
  heroGlow: string;
};

export type ContrastPair = {
  name: string;
  foreground: keyof SolvedColorTokens;
  background: keyof SolvedColorTokens;
  min: number;
};

export const REQUIRED_PAIRS: ContrastPair[] = [
  { name: "foreground/background", foreground: "foreground", background: "background", min: CONTRAST_TEXT },
  { name: "mutedForeground/background", foreground: "mutedForeground", background: "background", min: CONTRAST_TEXT },
  { name: "mutedForeground/muted", foreground: "mutedForeground", background: "muted", min: CONTRAST_TEXT },
  { name: "accentForeground/accent", foreground: "accentForeground", background: "accent", min: CONTRAST_TEXT },
  { name: "border/background", foreground: "border", background: "background", min: CONTRAST_UI },
];

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function toHex(color: Oklch): string {
  const hex = formatHex(color);
  if (!hex) {
    throw new Error("Failed to format color to hex");
  }
  return hex;
}

function makeOklch(l: number, c: number, h: number): Oklch {
  return oklch({
    mode: "oklch",
    l: clamp(l, 0, 1),
    c: Math.max(0, c),
    h: ((h % 360) + 360) % 360,
  }) as Oklch;
}

export function contrastOf(a: string, b: string): number {
  return Math.abs(wcagContrast(a, b));
}

/**
 * Binary-search lightness until the color clears `minContrast` against `against`.
 * `prefer: "dark"` finds the lightest dark that still passes (for soft text on light UIs).
 * `prefer: "light"` finds the darkest light that still passes (for soft text on dark UIs).
 * `strategy: "strong"` biases toward a deeper/near-white L when it still clears the bar
 * (primary body text / accent labels).
 */
export function solveLightness(options: {
  against: string;
  hue: number;
  chroma: number;
  minContrast: number;
  prefer: "dark" | "light";
  strategy?: "boundary" | "strong";
  iterations?: number;
}): string {
  const {
    against,
    hue,
    chroma,
    minContrast,
    prefer,
    strategy = "boundary",
    iterations = 28,
  } = options;

  if (strategy === "strong") {
    const targetL = prefer === "dark" ? 0.18 : 0.93;
    const strong = toHex(makeOklch(targetL, chroma, hue));
    if (contrastOf(strong, against) >= minContrast) {
      return strong;
    }
  }

  let lo = 0;
  let hi = 1;
  let best = prefer === "dark" ? 0 : 1;
  let found = false;

  for (let i = 0; i < iterations; i++) {
    const mid = (lo + hi) / 2;
    const candidate = toHex(makeOklch(mid, chroma, hue));
    const ratio = contrastOf(candidate, against);

    if (ratio >= minContrast) {
      found = true;
      best = mid;
      if (prefer === "dark") {
        lo = mid;
      } else {
        hi = mid;
      }
    } else if (prefer === "dark") {
      hi = mid;
    } else {
      lo = mid;
    }
  }

  if (!found) {
    const dark = toHex(makeOklch(0.05, chroma, hue));
    const light = toHex(makeOklch(0.98, chroma, hue));
    return contrastOf(dark, against) >= contrastOf(light, against) ? dark : light;
  }

  return toHex(makeOklch(best, chroma, hue));
}

function withAlpha(hex: string, alpha: number): string {
  const raw = hex.replace("#", "");
  const full =
    raw.length === 3
      ? raw
          .split("")
          .map((c) => c + c)
          .join("")
      : raw;
  const r = Number.parseInt(full.slice(0, 2), 16);
  const g = Number.parseInt(full.slice(2, 4), 16);
  const b = Number.parseInt(full.slice(4, 6), 16);
  const a = clamp(alpha, 0, 1);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

/**
 * Build a full semantic color set from hue/chroma/mode.
 * Every required pair is verified before return — throws if unverifiable.
 */
export function solveThemeColors(input: ThemeSolveInput): SolvedColorTokens {
  const hue = input.accentHue;
  const bgC = clamp(input.bgChroma, 0, 0.12);
  const accentC = clamp(input.accentChroma, 0, 0.25);
  const isLight = input.mode === "light";

  const background = toHex(
    makeOklch(isLight ? 0.985 : 0.155, bgC, hue),
  );
  const muted = toHex(
    makeOklch(isLight ? 1 : 0.2, bgC * 0.5, hue),
  );

  const textPrefer = isLight ? "dark" : "light";
  const textChroma = Math.min(bgC, 0.03);

  const foreground = solveLightness({
    against: background,
    hue,
    chroma: textChroma,
    minContrast: CONTRAST_TEXT,
    prefer: textPrefer,
    strategy: "strong",
  });

  let mutedForeground = solveLightness({
    against: background,
    hue,
    chroma: textChroma,
    minContrast: CONTRAST_TEXT,
    prefer: textPrefer,
    strategy: "boundary",
  });

  // Ensure mutedForeground also clears muted surface
  if (contrastOf(mutedForeground, muted) < CONTRAST_TEXT) {
    mutedForeground = solveLightness({
      against: muted,
      hue,
      chroma: textChroma,
      minContrast: CONTRAST_TEXT,
      prefer: textPrefer,
      strategy: "boundary",
    });
  }

  const border = solveLightness({
    against: background,
    hue,
    chroma: Math.min(bgC, 0.02),
    minContrast: CONTRAST_UI,
    prefer: textPrefer,
    strategy: "boundary",
  });

  // Accent: start near a readable L for the mode, then lock fg against it
  const accentSeed = toHex(
    makeOklch(isLight ? 0.32 : 0.78, accentC, hue),
  );
  let accent = accentSeed;
  if (contrastOf(accent, background) < CONTRAST_UI) {
    accent = solveLightness({
      against: background,
      hue,
      chroma: accentC,
      minContrast: CONTRAST_UI,
      prefer: textPrefer,
      strategy: "strong",
    });
  }

  const accentFgPrefer =
    contrastOf("#000000", accent) >= contrastOf("#ffffff", accent)
      ? "dark"
      : "light";

  const accentForeground = solveLightness({
    against: accent,
    hue,
    chroma: 0.01,
    minContrast: CONTRAST_TEXT,
    prefer: accentFgPrefer,
    strategy: "strong",
  });

  const tokens: SolvedColorTokens = {
    background,
    foreground,
    muted,
    mutedForeground,
    border,
    accent,
    accentForeground,
    heroGlow: withAlpha(foreground, isLight ? 0.06 : 0.08),
  };

  assertThemeAccessible(tokens);
  return tokens;
}

export type PairReport = {
  name: string;
  ratio: number;
  min: number;
  pass: boolean;
};

export function auditThemeContrast(tokens: SolvedColorTokens): PairReport[] {
  return REQUIRED_PAIRS.map((pair) => {
    const ratio = contrastOf(tokens[pair.foreground], tokens[pair.background]);
    return {
      name: pair.name,
      ratio,
      min: pair.min,
      pass: ratio >= pair.min,
    };
  });
}

export function assertThemeAccessible(
  tokens: SolvedColorTokens,
  options: { requireUiBorder?: boolean } = {},
): void {
  const { requireUiBorder = true } = options;
  const failures = auditThemeContrast(tokens).filter((r) => {
    if (!requireUiBorder && r.name === "border/background") return false;
    return !r.pass;
  });
  if (failures.length) {
    const detail = failures
      .map((f) => `${f.name}: ${f.ratio.toFixed(2)} < ${f.min}`)
      .join("; ");
    throw new Error(`Theme failed contrast checks: ${detail}`);
  }
}

/** CSS custom property names for solved color tokens */
export const SOLVED_TOKEN_CSS_VARS = {
  background: "--background",
  foreground: "--foreground",
  muted: "--muted",
  mutedForeground: "--muted-foreground",
  border: "--border",
  accent: "--accent",
  accentForeground: "--accent-foreground",
  heroGlow: "--hero-glow",
} as const satisfies Record<keyof SolvedColorTokens, string>;

/**
 * Write verified tokens onto a theme scope (usually `document.documentElement`).
 * Only solved values are written — never raw unchecked inputs.
 */
export function applySolvedColorTokens(
  tokens: SolvedColorTokens,
  target: HTMLElement = document.documentElement,
  options: { requireUiBorder?: boolean } = {},
): void {
  assertThemeAccessible(tokens, options);
  (Object.keys(SOLVED_TOKEN_CSS_VARS) as (keyof SolvedColorTokens)[]).forEach(
    (key) => {
      target.style.setProperty(SOLVED_TOKEN_CSS_VARS[key], tokens[key]);
    },
  );
}

/** Remove solver overrides so stylesheet defaults (and next-themes) take over again */
export function clearSolvedColorTokens(
  target: HTMLElement = document.documentElement,
): void {
  (Object.values(SOLVED_TOKEN_CSS_VARS) as string[]).forEach((cssVar) => {
    target.style.removeProperty(cssVar);
  });
}
