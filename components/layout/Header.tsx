import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background pt-[env(safe-area-inset-top)] md:bg-background/80 md:backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/#hero"
          className="touch-target inline-flex items-center gap-3 transition-opacity hover:opacity-70"
        >
          {siteConfig.avatar ? (
            <span className="relative inline-block size-4 shrink-0 overflow-hidden rounded-lg bg-avatar-canvas">
              <Image
                src={siteConfig.avatar.src}
                alt=""
                width={32}
                height={32}
                sizes="16px"
                className="size-full object-cover object-[center_38%]"
              />
            </span>
          ) : null}
          <span className="text-lg font-bold tracking-tight">
            {siteConfig.shortName ?? siteConfig.name.split(" ")[0]}
          </span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-2 sm:gap-3">
          <ul className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => {
              const external = item.href.startsWith("http");
              const isResume =
                item.href === siteConfig.resume.href || item.href.endsWith(".pdf");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    download={
                      isResume
                        ? (siteConfig.resume.downloadFileName ?? true)
                        : undefined
                    }
                    className="text-[13px] font-semibold tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <MobileNav />
          <ThemeSwitcher />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
