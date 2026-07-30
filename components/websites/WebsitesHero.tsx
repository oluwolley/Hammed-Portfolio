type WebsitesHeroProps = {
  headingId?: string;
};

export function WebsitesHero({ headingId = "websites-heading" }: WebsitesHeroProps) {
  return (
    <header className="max-w-3xl">
      <h1
        id={headingId}
        className="text-[clamp(1.85rem,5vw,2.75rem)] font-semibold leading-[1.15] tracking-tight text-foreground"
      >
        No briefs, no boundaries just pure code and design.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg md:leading-relaxed">
        Welcome to my digital sandbox. The projects in this section aren&apos;t
        client commissions or real-world brands—they are fully functional,
        conceptual websites built from the ground up.
      </p>
    </header>
  );
}
