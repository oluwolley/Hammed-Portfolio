import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

const linkClass =
  "inline-flex items-center gap-2 text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline";

export function SocialLinks({ className }: SocialLinksProps) {
  const { linkedin } = siteConfig.social;

  return (
    <ul className={cn("flex flex-wrap items-center gap-5 text-sm", className)}>
      {linkedin ? (
        <li>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <LinkedInIcon className="h-4 w-4 shrink-0" />
            LinkedIn
          </a>
        </li>
      ) : null}
      <li>
        <a href={`mailto:${siteConfig.email}`} className={linkClass}>
          <EmailIcon className="h-4 w-4 shrink-0" />
          Email
        </a>
      </li>
    </ul>
  );
}
