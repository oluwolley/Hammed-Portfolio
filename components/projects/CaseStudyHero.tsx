import Link from "next/link";
import type { Project } from "@/content/types";
import { FadeImage } from "@/components/motion/FadeImage";
import { estimateReadingTimeMinutes } from "@/lib/case-study";
import { cn } from "@/lib/utils";

type CaseStudyHeroProps = {
  project: Project;
};

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const readingMinutes = estimateReadingTimeMinutes(project.sections);
  const width = project.cover.width ?? 2400;
  const height = project.cover.height ?? 1350;
  const fillCover = project.mediaFit === "cover";

  return (
    <header className="mb-12 md:mb-16">
      <Link
        href="/#work"
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Back to portfolio
      </Link>

      <div
        className={cn(
          "mt-8 overflow-hidden rounded-2xl",
          fillCover && "relative aspect-[16/10] w-full",
        )}
      >
        {fillCover ? (
          <FadeImage
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            className="object-contain object-center p-4 sm:p-6 md:p-8"
            priority
            fetchPriority="high"
            sizes="(max-width: 1280px) 100vw, 1024px"
          />
        ) : (
          <FadeImage
            src={project.cover.src}
            alt={project.cover.alt}
            width={width}
            height={height}
            className="mx-auto h-auto w-full object-contain"
            priority
            quality={90}
            sizes="(max-width: 1280px) 100vw, 1024px"
          />
        )}
      </div>

      {project.disclaimer ? (
        <p className="mt-6 max-w-3xl text-sm italic leading-relaxed text-muted-foreground">
          {project.disclaimer}
        </p>
      ) : null}

      <div className="mt-8 max-w-3xl">
        <p className="text-sm uppercase text-muted-foreground">{project.role}</p>
        <h1 className="mt-2 text-[clamp(1.75rem,6vw,3rem)] font-medium tracking-tight break-words md:text-5xl md:leading-tight">
          {project.title}
        </h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">{project.impact}</p>

        <dl className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
          {project.timeline ? (
            <div className="flex flex-wrap gap-2">
              <dt className="font-medium text-foreground/80">Category</dt>
              <dd>{project.timeline}</dd>
            </div>
          ) : null}
          <div className="flex gap-2">
            <dt className="font-medium text-foreground/80">Reading time</dt>
            <dd>{readingMinutes} min</dd>
          </div>
        </dl>
      </div>
    </header>
  );
}
