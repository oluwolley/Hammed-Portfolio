import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <Container className="py-24">
      <h1 className="text-2xl font-medium">Page not found</h1>
      <p className="mt-4 text-muted-foreground">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <p className="mt-6">
        <Link
          href="/"
          className="text-foreground underline-offset-4 hover:underline"
        >
          Return to homepage
        </Link>
      </p>
    </Container>
  );
}
