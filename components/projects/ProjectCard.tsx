import Link from "next/link";
import type { Project } from "@/content/types";
import { FadeImage } from "@/components/motion/FadeImage";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const media = project.cardCover ?? project.cover;
  const canvas = media.cardBackground ?? project.cover.cardBackground ?? "#F4F4F5";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group block overflow-hidden rounded-2xl border border-border bg-background",
        "transition-[border-color,box-shadow,transform] duration-300 ease-out",
        "hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-md",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground",
        className,
      )}
    >
      <div
        className="relative aspect-[16/9] w-full overflow-hidden"
        style={{ backgroundColor: canvas }}
      >
        <FadeImage
          src={media.src}
          alt={media.alt}
          fill
          className="object-contain object-center p-2 sm:p-3 transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-5 sm:p-6 md:p-7">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <h3 className="text-base font-medium tracking-tight break-words sm:text-lg md:text-xl">
            {project.title}
          </h3>
          <span
            aria-hidden
            className="shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-foreground motion-reduce:group-hover:translate-x-0"
          >
            →
          </span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-foreground/80">
          {project.tagline ?? project.impact}
        </p>
      </div>
    </Link>
  );
}
