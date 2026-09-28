import Image from "next/image";
import type { PlaygroundTile as Tile, TileRect } from "@/content/playground";
import { TileVideo } from "@/components/playground/TileVideo";
import { cn } from "@/lib/utils";

function rectStyle([x, y, w, h]: TileRect, size: Tile["size"]) {
  return {
    left: `${(x / size.width) * 100}%`,
    top: `${(y / size.height) * 100}%`,
    width: `${(w / size.width) * 100}%`,
    height: `${(h / size.height) * 100}%`,
  };
}

export function PlaygroundTile({ tile }: { tile: Tile }) {
  const { size } = tile;

  return (
    <li
      className={cn(
        "relative overflow-hidden rounded-2xl",
        tile.wide
          ? "col-span-2 aspect-[676/456] md:aspect-auto"
          : "aspect-[326/456]",
      )}
      style={{ backgroundColor: tile.background }}
    >
      {tile.video ? (
        <TileVideo src={tile.video} poster={tile.image.src} label={tile.image.alt} />
      ) : tile.device ? (
        <div className="absolute" style={rectStyle(tile.device, size)}>
          <Image
            src={tile.image.src}
            alt={tile.image.alt}
            fill
            sizes={tile.wide ? "(max-width: 768px) 90vw, 45vw" : "(max-width: 768px) 30vw, 15vw"}
            className="object-contain"
          />
        </div>
      ) : (
        <Image
          src={tile.image.src}
          alt={tile.image.alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
        />
      )}
      {tile.patches?.map((patch, index) => (
        <span
          key={index}
          aria-hidden
          className="absolute"
          style={{ ...rectStyle(patch, size), backgroundColor: tile.background }}
        />
      ))}
    </li>
  );
}
