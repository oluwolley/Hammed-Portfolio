import type { Metadata } from "next";
import { PlaygroundTile } from "@/components/playground/PlaygroundTile";
import { playgroundTiles } from "@/content/playground";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Playground",
  description: `UI explorations and side experiments by ${siteConfig.name}.`,
  alternates: {
    canonical: "/playground",
  },
};

export default function PlaygroundPage() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 pb-10 pt-2 sm:px-6 lg:px-8">
      <h1 className="sr-only">Playground</h1>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {playgroundTiles.map((tile) => (
          <PlaygroundTile key={tile.id} tile={tile} />
        ))}
      </ul>
    </div>
  );
}
