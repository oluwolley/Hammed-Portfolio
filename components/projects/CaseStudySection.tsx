import type { CaseStudySection } from "@/content/types";
import { ImageGallery } from "@/components/projects/ImageGallery";
import { PrototypeEmbed } from "@/components/projects/PrototypeEmbed";
import { Reveal } from "@/components/motion/Reveal";

type CaseStudySectionBlockProps = {
  section: CaseStudySection;
  mediaFit?: "cover" | "contain";
};

type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

function parseContentBlocks(content: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  const chunks = content
    .split(/\n\s*\n/)
    .map((c) => c.trim())
    .filter(Boolean);

  for (const chunk of chunks) {
    const lines = chunk.split("\n").map((l) => l.trim()).filter(Boolean);
    const allBullets = lines.every((l) => l.startsWith("- "));
    if (allBullets) {
      blocks.push({
        type: "list",
        items: lines.map((l) => l.replace(/^- /, "")),
      });
    } else {
      blocks.push({ type: "paragraph", text: chunk.replace(/\n/g, " ") });
    }
  }

  return blocks;
}

export function CaseStudySectionBlock({
  section,
  mediaFit = "contain",
}: CaseStudySectionBlockProps) {
  const blocks = section.content ? parseContentBlocks(section.content) : [];

  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="scroll-mt-28 pt-10 first:pt-0 sm:pt-12 md:scroll-mt-24 md:pt-16"
    >
      <Reveal distance="md">
        <h2
          id={`${section.id}-heading`}
          className="font-sans text-2xl font-medium tracking-tight md:text-3xl"
        >
          {section.title}
        </h2>

        {blocks.length > 0 ? (
          <div className="mt-6 max-w-3xl space-y-4 font-serif text-base leading-relaxed text-muted-foreground sm:text-lg">
            {blocks.map((block, i) =>
              block.type === "paragraph" ? (
                <p key={i}>{block.text}</p>
              ) : (
                <ul key={i} className="list-disc space-y-2 pl-5 font-sans text-base md:text-lg">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ),
            )}
          </div>
        ) : null}

        {section.metrics?.length ? (
          <dl className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {section.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-border bg-muted/20 px-4 py-4 transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
              >
                <dt className="text-sm text-muted-foreground">{metric.label}</dt>
                <dd className="mt-1 text-2xl font-medium tracking-tight">{metric.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        {section.images?.length ? (
          <ImageGallery images={section.images} fit={mediaFit} />
        ) : null}

        {section.embedUrl ? (
          <PrototypeEmbed url={section.embedUrl} title={`${section.title} prototype`} />
        ) : null}
      </Reveal>
    </section>
  );
}
