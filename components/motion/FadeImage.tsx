"use client";

import Image, { type ImageProps } from "next/image";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

type FadeImageProps = ImageProps & {
  fadeClassName?: string;
};

/** Soft opacity fade once the image has loaded. */
export function FadeImage({
  className,
  fadeClassName,
  onLoad,
  onError,
  alt,
  ...props
}: FadeImageProps) {
  const [loaded, setLoaded] = useState(false);

  const reveal = useCallback(() => setLoaded(true), []);

  return (
    <Image
      alt={alt}
      {...props}
      onLoad={(e) => {
        reveal();
        onLoad?.(e);
      }}
      onError={(e) => {
        // Never leave a blank card if the optimizer fails or the file 404s.
        reveal();
        onError?.(e);
      }}
      ref={(img) => {
        // Cached images may already be complete before React attaches onLoad.
        if (img?.complete && img.naturalWidth > 0) {
          reveal();
        }
      }}
      className={cn(
        "transition-opacity duration-500 ease-out motion-reduce:transition-none motion-reduce:opacity-100",
        loaded ? "opacity-100" : "opacity-0",
        fadeClassName,
        className,
      )}
    />
  );
}
