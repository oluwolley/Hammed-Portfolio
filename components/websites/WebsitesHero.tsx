type WebsitesHeroProps = {
  headingId?: string;
};

export function WebsitesHero({ headingId = "websites-heading" }: WebsitesHeroProps) {
  return (
    <header className="max-w-3xl">
      <h1
        id={headingId}
        className="text-[clamp(1.5rem,3.5vw,2.125rem)] font-semibold leading-[1.2] tracking-tight text-foreground"
      >
        No briefs, no boundaries
        <br />
        just design and pure code.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg md:leading-relaxed">
        A collection of product websites I designed and built end to end, from
        brand and UX to polished, launch-ready interfaces.
      </p>
    </header>
  );
}
