"use client";

import Image from "next/image";
import { useCallback, useMemo, useState, type KeyboardEvent } from "react";
import {
  heroStackCards,
  type HeroDefinitionCard,
  type HeroHighlightKey,
  type HeroStackCard,
} from "@/content/hero-cards";
import { heroAbout } from "@/content/hero-about";
import { siteConfig } from "@/content/site";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

function DefinitionIcon({
  name,
  color,
}: {
  name: HeroDefinitionCard["icon"];
  color: string;
}) {
  const stroke = color;
  if (name === "flows") {
    return (
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
        <circle cx="6" cy="12" r="2.25" fill={stroke} />
        <circle cx="18" cy="12" r="2.25" fill={stroke} />
        <path
          d="M8.5 12c2-4 5-4 7 0"
          fill="none"
          stroke={stroke}
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (name === "affordance") {
    return (
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
        <rect x="5" y="8" width="14" height="8" rx="4" fill="none" stroke={stroke} strokeWidth="1.75" />
        <circle cx="15" cy="12" r="2.25" fill={stroke} />
      </svg>
    );
  }
  if (name === "code") {
    return (
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
        <path
          d="M9 8 5.5 12 9 16M15 8l3.5 4L15 16"
          fill="none"
          stroke={stroke}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
      <rect x="4" y="5" width="16" height="12" rx="2" fill="none" stroke={stroke} strokeWidth="1.75" />
      <path d="M8 17h8M12 17v2" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" />
      <path
        d="M9 9.5h6M9 12.5h4"
        fill="none"
        stroke={stroke}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CardFace({ card }: { card: HeroStackCard }) {
  if (card.kind === "portrait") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-[#111]">
        <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-[#34C759]" />
          <span className="size-2.5 rounded-full bg-[#FFCC00]" />
          <span className="size-2.5 rounded-full bg-[#FF3B30]" />
        </div>
        <Image
          src={card.imageSrc}
          alt={card.imageAlt}
          width={1024}
          height={1024}
          className="size-full object-cover object-center"
          sizes="(max-width: 768px) 90vw, 540px"
          priority
        />
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col rounded-[22px] bg-white px-6 py-6 text-[#1c1a17] sm:px-8 sm:py-8">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[1.6rem] leading-none font-semibold tracking-tight sm:text-[1.85rem]">
            {card.word}
          </p>
          <p className="mt-2 text-base text-[#6e6a64] sm:text-lg">
            <span>{card.phonetic}</span>{" "}
            <span className="font-serif italic">{card.partOfSpeech}</span>
          </p>
        </div>
        <span
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg sm:size-11"
          style={{ backgroundColor: card.iconBackground }}
          aria-hidden
        >
          <DefinitionIcon name={card.icon} color={card.iconForeground} />
        </span>
      </div>
      <div className="my-5 border-t border-dashed border-[#1c1a17]/15 sm:my-6" aria-hidden />
      <div className="flex flex-1 items-center">
        <p className="text-lg leading-relaxed text-[#3d3a35] sm:text-xl sm:leading-relaxed">
          {card.definition}
        </p>
      </div>
    </div>
  );
}

function stackTransform(index: number) {
  const y = index * 11;
  const x = index * -8;
  const rotate = index * -1.5;
  const scale = 1 - index * 0.02;
  return `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg) scale(${scale})`;
}

function highlightForCard(card: HeroStackCard | undefined): HeroHighlightKey | null {
  if (!card || card.kind !== "definition") return null;
  return card.highlightKey;
}

function HeroAbout({ activeHighlight }: { activeHighlight: HeroHighlightKey | null }) {
  return (
    <div className="mt-6 max-w-xl space-y-5 text-base font-light leading-8 text-muted-foreground sm:text-lg sm:leading-8">
      {heroAbout.map((paragraph, index) => (
        <p key={index}>
          {paragraph.parts.map((part, partIndex) => {
            if (!part.highlight) {
              return <span key={partIndex}>{part.text}</span>;
            }
            const isActive = activeHighlight === part.highlight;
            return (
              <span
                key={partIndex}
                className={cn(
                  "rounded-sm px-0.5 transition-[background-color,color,font-weight] duration-300",
                  isActive
                    ? "bg-foreground font-bold text-background"
                    : "bg-transparent font-light text-muted-foreground",
                )}
              >
                {part.text}
              </span>
            );
          })}
        </p>
      ))}
    </div>
  );
}

function HeroCardStack({
  order,
  onCycle,
  busy,
}: {
  order: number[];
  onCycle: () => void;
  busy: boolean;
}) {
  const total = heroStackCards.length;

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!busy) onCycle();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Cycle hero cards. Click to bring the next card forward."
      onClick={() => {
        if (!busy) onCycle();
      }}
      onKeyDown={onKeyDown}
      className={cn(
        "relative w-full cursor-pointer select-none",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground",
      )}
    >
      <div className="relative aspect-[5/4] w-full min-h-[340px]">
        {heroStackCards.map((card, cardIndex) => {
          const stackIndex = order.indexOf(cardIndex);
          const isFront = stackIndex === 0;

          return (
            <div
              key={card.id}
              aria-hidden={!isFront}
              className={cn(
                "absolute inset-[4%] overflow-hidden rounded-[22px] border border-black/8 bg-white shadow-[0_14px_42px_rgba(28,26,23,0.12)]",
                "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                "motion-reduce:transition-none",
                isFront ? "pointer-events-auto" : "pointer-events-none",
              )}
              style={{
                zIndex: total - stackIndex,
                transform: stackTransform(stackIndex),
              }}
            >
              <CardFace card={card} />
            </div>
          );
        })}
      </div>
      <p className="sr-only">
        Card {(order[0] ?? 0) + 1} of {total}. Activate to show the next card.
      </p>
    </div>
  );
}

export function Hero() {
  const [order, setOrder] = useState(() => heroStackCards.map((_, i) => i));
  const [busy, setBusy] = useState(false);

  const activeHighlight = useMemo(
    () => highlightForCard(heroStackCards[order[0] ?? 0]),
    [order],
  );

  const cycle = useCallback(() => {
    if (busy) return;
    setBusy(true);
    setOrder((prev) => [...prev.slice(1), prev[0]!]);
    window.setTimeout(() => setBusy(false), 450);
  }, [busy]);

  return (
    <Section
      id="hero"
      ariaLabelledby="hero-heading"
      className="pt-10 sm:pt-14 md:pt-16"
    >
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] md:gap-12 lg:gap-16">
          <Reveal>
            <div className="flex items-center gap-3">
              {siteConfig.avatar ? (
                <span className="relative inline-block size-10 shrink-0 overflow-hidden rounded-full bg-avatar-canvas ring-1 ring-border sm:size-11">
                  <Image
                    src={siteConfig.avatar.src}
                    alt={siteConfig.avatar.alt}
                    width={112}
                    height={112}
                    sizes="44px"
                    quality={75}
                    className="size-full rounded-full object-cover object-[center_38%]"
                    priority
                  />
                </span>
              ) : null}
              <div>
                <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
                  {siteConfig.title}
                </p>
                {siteConfig.credential ? (
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/uk-flag.svg"
                      alt=""
                      width={32}
                      height={32}
                      className="size-5 shrink-0 sm:size-6"
                      aria-hidden
                    />
                    <span>{siteConfig.credential}</span>
                  </p>
                ) : null}
              </div>
            </div>

            <h1
              id="hero-heading"
              className="mt-8 text-[clamp(1.75rem,4vw,2rem)] font-medium leading-[1.5] tracking-tight text-foreground"
            >
              Hey! I&apos;m {siteConfig.shortName ?? siteConfig.name}.
            </h1>

            <HeroAbout activeHighlight={activeHighlight} />
          </Reveal>

          <Reveal delayMs={80} className="w-full min-w-0 md:max-w-[540px] md:justify-self-end">
            <HeroCardStack order={order} onCycle={cycle} busy={busy} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
