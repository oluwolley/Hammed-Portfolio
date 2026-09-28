import Image from "next/image";
import Link from "next/link";
import { highlightedWork } from "@/content/home";
import { getProject } from "@/content/projects";
import { Panel, SectionLabel } from "@/components/home/Panel";

export function HighlightedWork() {
  return (
    <Panel id="work" ariaLabelledby="work-heading" className="h-full lg:flex-1">
      <SectionLabel id="work-heading">Highlighted Work</SectionLabel>

      <ul className="flex flex-col">
        {highlightedWork.map((item, index) => {
          const project = getProject(item.slug);
          const cover = project?.cardCover ?? project?.cover;
          const href = `/projects/${item.slug}`;

          return (
            <li key={item.slug}>
              {index > 0 ? <div className="my-5 h-px w-full bg-border" /> : null}
              <Link
                href={href}
                className="group flex flex-col gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              >
                <div
                  className="relative aspect-[17/9] w-full overflow-hidden rounded-lg border border-border"
                  style={
                    item.thumbBackground
                      ? { backgroundColor: item.thumbBackground }
                      : undefined
                  }
                >
                  {cover ? (
                    <Image
                      src={cover.src}
                      alt={cover.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  ) : null}
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold text-foreground transition-colors group-hover:opacity-80">
                    {item.title}
                  </p>
                  <div className="flex items-start justify-between gap-2 text-[11px]">
                    <p className="text-muted-foreground">Role: {item.role}</p>
                    <p className="shrink-0 text-right font-semibold text-foreground/80">
                      {item.platform}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </Panel>
  );
}
