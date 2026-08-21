"use client";

import dynamic from "next/dynamic";

const ThemeDebugPanel = dynamic(
  () =>
    import("@/components/dev/ThemeDebugPanel").then((m) => m.ThemeDebugPanel),
  { ssr: false },
);

/** Client gate so the solver panel never mounts in production. */
export function ThemeDebugGate() {
  if (process.env.NODE_ENV !== "development") return null;
  return <ThemeDebugPanel />;
}
