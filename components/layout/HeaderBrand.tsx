"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { CornerDownLeftIcon } from "@/components/ui/CornerDownLeftIcon";

const linkClass =
  "touch-target inline-flex items-center text-[15px] font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70";

export function HeaderBrand() {
  const pathname = usePathname();

  if (pathname === "/playground") {
    return (
      <Link href="/" className={`${linkClass} gap-4`}>
        <CornerDownLeftIcon className="size-6" />
        <span className="sr-only">Back to home from </span>
        <span className="uppercase">Playground</span>
      </Link>
    );
  }

  return (
    <Link href="/" className={linkClass}>
      {siteConfig.shortName ?? siteConfig.name}
    </Link>
  );
}
