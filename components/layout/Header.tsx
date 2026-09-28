import { HeaderBrand } from "@/components/layout/HeaderBrand";
import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <HeaderBrand />

        <div
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background p-1.5"
          role="group"
          aria-label="Appearance controls"
        >
          <ThemeToggle />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
