import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ id, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <h2
        id={id}
        className="text-2xl font-medium tracking-tight md:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
