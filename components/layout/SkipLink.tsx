export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground focus:[clip:auto] focus:[clip-path:none] focus:m-0 focus:h-auto focus:w-auto focus:overflow-visible focus:whitespace-normal"
    >
      Skip to content
    </a>
  );
}
