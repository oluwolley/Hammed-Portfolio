import Link from "next/link";
import { siteConfig } from "@/content/site";
import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background pt-[env(safe-area-inset-top)] md:bg-background/80 md:backdrop-blur-md">
      <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/#hero"
          className="touch-target inline-flex items-center text-sm font-medium tracking-tight transition-opacity hover:opacity-70"
        >
          {siteConfig.name.split(" ")[0]}
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-2 sm:gap-3">
          <ul className="hidden items-center gap-6 md:flex">
            {siteConfig.nav.map((item) => {
              const external = item.href.startsWith("http");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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
