import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <h1 className="text-2xl font-medium">Page not found</h1>
      <p className="mt-4 text-muted-foreground">
        <Link href="/" className="underline-offset-4 hover:underline">
          Return home
        </Link>
      </p>
    </Container>
  );
}
