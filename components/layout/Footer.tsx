import Link from "next/link";
import { siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] text-sm text-muted-foreground sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {siteConfig.name}. {siteConfig.title}.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Link href={siteConfig.resume.href} className="touch-target inline-flex items-center hover:text-foreground">
            Resume
          </Link>
          {siteConfig.social.linkedin && (
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target inline-flex items-center hover:text-foreground"
            >
              LinkedIn
            </a>
          )}
          <a
            href={`mailto:${siteConfig.email}`}
            className="touch-target inline-flex items-center hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
