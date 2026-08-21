import type { Website } from "@/content/types";
import { FadeImage } from "@/components/motion/FadeImage";
import { cn } from "@/lib/utils";

type WebsiteCardProps = {
  website: Website;
  className?: string;
};

export function WebsiteCard({ website, className }: WebsiteCardProps) {
  const isLive = website.status === "live" && Boolean(website.url);
  const canvas = website.mockup.cardBackground ?? "var(--media-canvas-site)";

  const body = (
    <>
      <div
        className="relative aspect-[16/9] w-full overflow-hidden"
        style={{ backgroundColor: canvas }}
      >
        <FadeImage
          src={website.mockup.src}
          alt={website.mockup.alt}
          fill
          className={cn(
            "object-cover object-top",
            "transition-transform duration-500 ease-out",
            isLive && "group-hover:scale-[1.02]",
            "motion-reduce:transition-none motion-reduce:group-hover:scale-100",
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "top center" }}
        />
        {!isLive ? (
          <span className="absolute inset-0 flex items-center justify-center bg-background/55 backdrop-blur-[2px]">
            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Coming soon
            </span>
          </span>
        ) : null}
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-medium tracking-tight break-words sm:text-base">
            {website.title}
          </h3>
          {isLive ? (
            <span
              aria-hidden
              className="shrink-0 text-muted-foreground opacity-0 transition-[opacity,transform,color] duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-foreground group-focus-visible:translate-x-0.5 group-focus-visible:opacity-100 motion-reduce:group-hover:translate-x-0"
            >
              →
            </span>
          ) : null}
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {website.description}
        </p>
      </div>
    </>
  );

  const shellClass = cn(
    "group block overflow-hidden rounded-xl border border-border bg-background",
    "transition-[border-color,box-shadow,transform] duration-300 ease-out",
    isLive &&
      "hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-md motion-reduce:hover:translate-y-0",
    "motion-reduce:transition-none",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground",
    !isLive && "opacity-90",
    className,
  );

  if (isLive) {
    return (
      <a
        href={website.url}
        target="_blank"
        rel="noopener noreferrer"
        className={shellClass}
      >
        {body}
      </a>
    );
  }

  return <article className={shellClass}>{body}</article>;
}
