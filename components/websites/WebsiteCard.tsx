import type { Website } from "@/content/types";
import { FadeImage } from "@/components/motion/FadeImage";
import { cn } from "@/lib/utils";

type WebsiteCardProps = {
  website: Website;
  className?: string;
};

export function WebsiteCard({ website, className }: WebsiteCardProps) {
  const isLive = website.status === "live" && Boolean(website.url);
  const canvas = website.mockup.cardBackground ?? "#F4F4F5";

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
            "object-cover object-top transition-transform duration-500 ease-out",
            isLive && "group-hover:scale-[1.02]",
            "motion-reduce:transition-none motion-reduce:group-hover:scale-100",
          )}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {!isLive ? (
          <span className="absolute inset-0 flex items-center justify-center bg-background/55 backdrop-blur-[2px]">
            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Coming soon
            </span>
          </span>
        ) : null}
      </div>
      <div className="p-5 sm:p-6 md:p-7">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <h3 className="text-base font-medium tracking-tight break-words sm:text-lg md:text-xl">
            {website.title}
          </h3>
          {isLive ? (
            <span
              aria-hidden
              className="shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-foreground motion-reduce:group-hover:translate-x-0"
            >
              →
            </span>
          ) : null}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-foreground/80">
          {website.description}
        </p>
      </div>
    </>
  );

  const shellClass = cn(
    "group block overflow-hidden rounded-2xl border border-border bg-background",
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
