import Link from "next/link";
import { siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] text-sm sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <p className="text-muted-foreground">
          © {year} Hammed. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-2 font-medium text-foreground">
          {siteConfig.social.linkedin && (
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target inline-flex items-center hover:opacity-70"
            >
              LinkedIN
            </a>
          )}
          {siteConfig.resume.available !== false ? (
            <Link
              href={siteConfig.resume.href}
              className="touch-target inline-flex items-center hover:opacity-70"
            >
              Resume
            </Link>
          ) : (
            <a
              href={`mailto:${siteConfig.email}?subject=Resume%20request`}
              className="touch-target inline-flex items-center hover:opacity-70"
            >
              Resume
            </a>
          )}
          <a
            href={`mailto:${siteConfig.email}`}
            className="touch-target inline-flex items-center hover:opacity-70"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
