import Image from "next/image";
import Link from "next/link";
import { playgroundItems } from "@/content/home";
import { Panel, SectionLabel } from "@/components/home/Panel";
import { CornerDownLeftIcon } from "@/components/ui/CornerDownLeftIcon";

export function Playground() {
  return (
    <Panel id="playground" ariaLabelledby="playground-heading" className="gap-4 overflow-hidden">
      <div className="flex items-center justify-between gap-3">
        <SectionLabel id="playground-heading" className="pb-0">
          Playground
        </SectionLabel>
        <Link
          href="/playground"
          aria-label="Open the Playground"
          className="inline-flex size-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          <CornerDownLeftIcon className="size-6" />
        </Link>
      </div>

      <ul className="-mx-1 flex gap-4 overflow-x-auto px-1 pb-1">
        {playgroundItems.map((item) => {
          const thumb = (
            <span
              className="relative flex h-[81px] w-[98px] shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border"
              style={
                item.background ? { backgroundColor: item.background } : undefined
              }
            >
              {item.fill ? (
                <Image
                  src={item.image.src}
                  alt={item.alt}
                  fill
                  sizes="98px"
                  className="object-cover"
                />
              ) : (
                <Image
                  src={item.image.src}
                  alt={item.alt}
                  width={item.image.width ?? 66}
                  height={item.image.height ?? 120}
                  className="max-h-[70px] w-auto object-contain"
                />
              )}
            </span>
          );

          return (
            <li key={item.id} className="shrink-0">
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                >
                  {thumb}
                </a>
              ) : (
                thumb
              )}
            </li>
          );
        })}
      </ul>
    </Panel>
  );
}
