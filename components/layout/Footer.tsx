import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

const footerLinks: { label: string; href?: string }[] = [
  { label: "Twitter", href: siteConfig.social.twitter },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "Dribbble", href: siteConfig.social.dribbble },
  { label: "Webflow", href: siteConfig.social.webflow },
];

const linkClass =
  "text-xs font-semibold uppercase tracking-wide text-foreground underline underline-offset-4 transition-opacity hover:opacity-70";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <nav aria-label="Social" className="flex flex-wrap gap-x-8 gap-y-3">
          {footerLinks.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {link.label}
              </a>
            ) : (
              <span
                key={link.label}
                className={cn(linkClass, "cursor-default opacity-50")}
                aria-disabled="true"
              >
                {link.label}
              </span>
            ),
          )}
        </nav>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          © {year} Hammed S
        </p>
      </div>
    </footer>
  );
}
