import Image from "next/image";
import { playgroundItems } from "@/content/home";
import { Panel, SectionLabel } from "@/components/home/Panel";

function RotateIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v5h5" />
    </svg>
  );
}

export function Playground() {
  return (
    <Panel id="playground" ariaLabelledby="playground-heading" className="gap-4 overflow-hidden">
      <div className="flex items-center justify-between gap-3">
        <SectionLabel id="playground-heading" className="pb-0">
          Playground
        </SectionLabel>
        <span className="inline-flex size-6 items-center justify-center text-muted-foreground" aria-hidden>
          <RotateIcon className="size-4" />
        </span>
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
