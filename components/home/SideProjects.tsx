import Image from "next/image";
import { sideProjects } from "@/content/home";
import { Panel, SectionLabel } from "@/components/home/Panel";
import { cn } from "@/lib/utils";

export function SideProjects() {
  return (
    <Panel id="side-projects" ariaLabelledby="side-projects-heading" className="gap-0">
      <SectionLabel id="side-projects-heading">Side Projects</SectionLabel>

      <ul className="flex flex-col">
        {sideProjects.map((project, index) => {
          const content = (
            <>
              <span className="relative size-9 shrink-0 overflow-hidden rounded-md border border-border bg-background">
                <Image
                  src={project.icon.src}
                  alt={project.icon.alt || ""}
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-foreground">
                  {project.title}
                </span>
                <span className="mt-0.5 block text-[11px] leading-snug text-muted-foreground">
                  {project.description}
                </span>
                <span
                  className={cn(
                    "mt-1 block text-[11px] font-medium",
                    project.href
                      ? "text-foreground underline-offset-2 group-hover:underline"
                      : "text-muted-foreground",
                  )}
                >
                  {project.ctaLabel}
                </span>
              </span>
            </>
          );

          return (
            <li key={project.id}>
              {index > 0 ? <div className="my-4 h-px w-full bg-border" /> : null}
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                >
                  {content}
                </a>
              ) : (
                <div className="flex items-start gap-3">{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </Panel>
  );
}
