import { writings } from "@/content/home";
import { Panel, SectionLabel } from "@/components/home/Panel";

export function Writings() {
  return (
    <Panel id="writings" ariaLabelledby="writings-heading" className="gap-0">
      <SectionLabel id="writings-heading">Writings</SectionLabel>

      <ul className="flex flex-col">
        {writings.map((item, index) => {
          const inner = (
            <>
              <span className="block text-sm font-semibold text-foreground">
                {item.title}
              </span>
              <span className="mt-1.5 block text-[11px] text-muted-foreground">
                {item.date}
              </span>
            </>
          );

          return (
            <li key={item.id}>
              {index > 0 ? <div className="my-4 h-px w-full bg-border" /> : null}
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                >
                  {inner}
                </a>
              ) : (
                <div className="block">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </Panel>
  );
}
