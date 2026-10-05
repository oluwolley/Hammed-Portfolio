import Image from "next/image";
import { homeAbout } from "@/content/home";
import { siteConfig } from "@/content/site";
import { Panel, SectionLabel } from "@/components/home/Panel";
import { CopyEmailButton } from "@/components/home/CopyEmailButton";
import { cn } from "@/lib/utils";

const actionClass =
  "inline-flex min-h-9 items-center justify-center rounded-lg border border-border bg-background px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

export function AboutColumn() {
  const resumeAvailable =
    siteConfig.resume.available !== false && Boolean(siteConfig.resume.href);
  const resumeIsExternal = Boolean(
    siteConfig.resume.href?.startsWith("http://") ||
      siteConfig.resume.href?.startsWith("https://"),
  );

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
        <CopyEmailButton />

        {resumeAvailable ? (
          <a
            href={siteConfig.resume.href}
            {...(resumeIsExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : { download: siteConfig.resume.downloadFileName ?? true })}
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
