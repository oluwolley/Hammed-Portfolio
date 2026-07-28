import Link from "next/link";
import { siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-muted-foreground sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {siteConfig.name}. {siteConfig.title}.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href={siteConfig.resume.href} className="hover:text-foreground">
            Resume
          </Link>
          {siteConfig.social.linkedin && (
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              LinkedIn
            </a>
          )}
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
