const LINK_ID = "theme-preset-google-fonts";

/**
 * Inject (or replace) a Google Fonts stylesheet for the active preset.
 * No-op when the preset uses only local / system fonts.
 */
export function ensureGoogleFonts(families: string[]): void {
  if (typeof document === "undefined") return;

  const existing = document.getElementById(LINK_ID);
  if (!families.length) {
    existing?.remove();
    return;
  }

  const familyQuery = families
    .map((family) => `family=${encodeURIComponent(family)}:wght@400;500;600;700`)
    .join("&");
  const href = `https://fonts.googleapis.com/css2?${familyQuery}&display=swap`;

  let link = existing as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.id = LINK_ID;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
  if (link.href !== href) {
    link.href = href;
  }
}
