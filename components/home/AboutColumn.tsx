import Image from "next/image";
import { homeAbout } from "@/content/home";
import { siteConfig } from "@/content/site";
import { Panel, SectionLabel } from "@/components/home/Panel";
import { CopyEmailButton } from "@/components/home/CopyEmailButton";
import { cn } from "@/lib/utils";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.915L1.992 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

const actionClass =
  "inline-flex min-h-9 items-center justify-center rounded-lg border border-border bg-background px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

export function AboutColumn() {
  const twitter = siteConfig.social.twitter;
  const resumeAvailable =
    siteConfig.resume.available !== false && Boolean(siteConfig.resume.href);

  return (
    <Panel id="about" ariaLabelledby="about-heading" className="h-full gap-6 lg:flex-1">
      <SectionLabel id="about-heading">About Me</SectionLabel>

      <div className="relative aspect-[5/4] w-full overflow-hidden rounded-lg border border-border bg-avatar-canvas">
        <Image
          src={homeAbout.portrait.src}
          alt={homeAbout.portrait.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-[15px] font-medium leading-[1.45] text-foreground">
          {homeAbout.headline}
        </p>
        <p className="text-[13px] leading-[1.5] text-muted-foreground">
          {homeAbout.body}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {twitter ? (
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(actionClass, "size-9 px-0")}
            aria-label="X (Twitter)"
          >
            <XIcon className="size-3.5" />
          </a>
        ) : (
          <span
            className={cn(actionClass, "size-9 cursor-default px-0 opacity-60")}
            aria-label="X (Twitter) — link coming soon"
          >
            <XIcon className="size-3.5" />
          </span>
        )}

        <CopyEmailButton />

        {resumeAvailable ? (
          <a
            href={siteConfig.resume.href}
            download={siteConfig.resume.downloadFileName ?? true}
            className={actionClass}
          >
            {siteConfig.resume.label}
          </a>
        ) : (
          <span className={cn(actionClass, "cursor-default opacity-60")}>
            {siteConfig.resume.label}
          </span>
        )}
      </div>

      <div className="h-px w-full bg-border" />

      <div className="flex flex-col gap-5">
        {homeAbout.facts.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-2">
            <p className="text-[10px] font-bold uppercase tracking-wide text-foreground">
              {fact.label}
            </p>
            <p className="text-[13px] leading-[1.5] text-muted-foreground">
              {fact.body}
            </p>
          </div>
        ))}
      </div>
    </Panel>
  );
}
