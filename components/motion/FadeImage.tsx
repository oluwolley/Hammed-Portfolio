"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type FadeImageProps = ImageProps & {
  fadeClassName?: string;
};

/** Soft opacity fade once the image has loaded. */
export function FadeImage({ className, fadeClassName, onLoad, alt, ...props }: FadeImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      alt={alt}
      {...props}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      className={cn(
        "transition-opacity duration-500 ease-out motion-reduce:transition-none",
        loaded ? "opacity-100" : "opacity-0",
        fadeClassName,
        className,
      )}
    />
  );
}
