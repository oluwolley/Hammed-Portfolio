import Link from "next/link";
import type { Project } from "@/content/types";
import { FadeImage } from "@/components/motion/FadeImage";
import { cn } from "@/lib/utils";

type FeaturedProjectRowProps = {
  project: Project;
  className?: string;
  priority?: boolean;
};

export function FeaturedProjectRow({
  project,
  className,
  priority = false,
}: FeaturedProjectRowProps) {
  const media = project.cardCover ?? project.cover;

  return (
    <article
      className={cn(
        "grid items-center gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.75fr)] md:gap-12 lg:gap-16",
        className,
      )}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group relative block aspect-[16/10] w-full overflow-hidden rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        aria-label={`${project.title} case study`}
      >
        <FadeImage
          src={media.src}
          alt={media.alt}
          fill
          priority={priority}
          quality={75}
          className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          sizes="(max-width: 768px) 100vw, 760px"
        />
      </Link>

      <div className="flex max-w-md flex-col gap-6">
        <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-medium tracking-tight text-foreground">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          >
            {project.title}
          </Link>
        </h3>
        <p className="text-base leading-relaxed text-muted-foreground">
          {project.tagline ?? project.impact}
        </p>
        <Link
          href={`/projects/${project.slug}`}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          Explore Case Study
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
          >
            ↗
          </span>
        </Link>
      </div>
    </article>
  );
}
