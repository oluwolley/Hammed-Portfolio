"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ImageRef } from "@/content/types";
import { FadeImage } from "@/components/motion/FadeImage";
import { cn } from "@/lib/utils";

type LightboxProps = {
  images: ImageRef[];
  initialIndex: number;
  onClose: () => void;
};

export function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [entered, setEntered] = useState(false);
  const [exiting, setExiting] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const image = images[index];

  const goPrev = useCallback(() => {
    setIndex((i) => (i > 0 ? i - 1 : images.length - 1));
  }, [images.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i < images.length - 1 ? i + 1 : 0));
  }, [images.length]);

  const requestClose = useCallback(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      onClose();
      return;
    }
    setExiting(true);
    window.setTimeout(() => onClose(), 200);
  }, [onClose]);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setEntered(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    closeRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") requestClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Tab") {
        const root = closeRef.current?.closest('[role="dialog"]');
        if (!(root instanceof HTMLElement)) return;
        const focusable = root.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable.length) return;
        const first = focusable[0]!;
        const last = focusable[focusable.length - 1]!;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [goNext, goPrev, requestClose]);

  if (!image) return null;

  const width = image.width ?? 2400;
  const height = image.height ?? 1350;
  const open = entered && !exiting;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background p-4 md:bg-background/95 md:backdrop-blur-sm",
        "transition-opacity duration-200 ease-out motion-reduce:transition-none",
        open ? "opacity-100" : "opacity-0",
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      onClick={requestClose}
    >
      <button
        ref={closeRef}
        type="button"
        className="touch-target absolute right-3 top-3 z-10 inline-flex items-center justify-center rounded-md border border-border bg-background px-3 text-sm transition-opacity hover:opacity-80 sm:right-4 sm:top-4"
        onClick={requestClose}
      >
        Close
      </button>
      {images.length > 1 ? (
        <>
          <button
            type="button"
            className="touch-target absolute bottom-4 left-4 z-10 inline-flex items-center justify-center rounded-md border border-border bg-background px-3 text-sm sm:bottom-auto sm:left-4 sm:top-1/2 sm:-translate-y-1/2"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
          >
            Prev
          </button>
          <button
            type="button"
            className="touch-target absolute bottom-4 right-4 z-10 inline-flex items-center justify-center rounded-md border border-border bg-background px-3 text-sm sm:bottom-auto sm:right-4 sm:top-1/2 sm:-translate-y-1/2"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next image"
          >
            Next
          </button>
        </>
      ) : null}
      <figure
        className={cn(
          "relative flex max-h-[80vh] w-full max-w-6xl items-center justify-center px-2 pb-16 sm:max-h-[90vh] sm:pb-0",
          "transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none",
          open ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-[0.98] opacity-0",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <FadeImage
          src={image.src}
          alt={image.alt}
          width={width}
          height={height}
          className="mx-auto h-auto max-h-[85vh] w-auto max-w-full object-contain"
          sizes="100vw"
          priority
        />
        <figcaption className="sr-only">{image.alt}</figcaption>
      </figure>
    </div>
  );
}

type ImageGalleryProps = {
  images: ImageRef[];
  className?: string;
  fit?: "cover" | "contain";
};

export function ImageGallery({ images, className, fit = "contain" }: ImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const fillCover = fit === "cover";

  return (
    <>
      <ul className={cn("mt-8 grid grid-cols-1 gap-6 md:gap-8", className)}>
        {images.map((img, i) => {
          const width = img.width ?? 2400;
          const height = img.height ?? 1350;

          return (
            <li key={`${img.src}-${i}`}>
              <button
                type="button"
                className={cn(
                  "group block w-full overflow-hidden rounded-2xl border border-border text-left",
                  "transition-[border-color,box-shadow,transform] duration-300 ease-out",
                  "hover:border-foreground/15 hover:shadow-sm",
                  "motion-reduce:transition-none",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground",
                  fillCover
                    ? "relative aspect-[16/10] bg-muted"
                    : "bg-muted/40 px-3 py-6 hover:bg-muted/60 sm:px-6 sm:py-8 md:px-8",
                )}
                onClick={() => setLightboxIndex(i)}
              >
                {fillCover ? (
                  <FadeImage
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.01] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    sizes="(max-width: 1280px) 100vw, 1024px"
                  />
                ) : (
                  <FadeImage
                    src={img.src}
                    alt={img.alt}
                    width={width}
                    height={height}
                    className="mx-auto h-auto w-full max-w-5xl object-contain"
                    sizes="(max-width: 1280px) 100vw, 1024px"
                  />
                )}
                <span className="sr-only">Open image: {img.alt}</span>
              </button>
            </li>
          );
        })}
      </ul>
      {lightboxIndex !== null ? (
        <Lightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      ) : null}
    </>
  );
}
