"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    let last = -1;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const next = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
      const rounded = Math.min(100, Math.max(0, Math.round(next)));
      if (rounded === last) return;
      last = rounded;
      setProgress(rounded);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className="fixed left-0 right-0 z-50 h-0.5 bg-border"
      style={{ top: "env(safe-area-inset-top, 0px)" }}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div className="h-full bg-foreground" style={{ width: `${progress}%` }} />
    </div>
  );
}
