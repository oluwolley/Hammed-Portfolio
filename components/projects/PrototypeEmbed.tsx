type PrototypeEmbedProps = {
  url: string;
  title?: string;
};

export function PrototypeEmbed({ url, title = "Interactive prototype" }: PrototypeEmbedProps) {
  return (
    <div className="mt-8 overflow-hidden rounded-xl border border-border bg-muted/30">
      <iframe
        src={url}
        title={title}
        className="aspect-[4/3] w-full sm:aspect-[16/10]"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
