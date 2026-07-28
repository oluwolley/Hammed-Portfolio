import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { siteConfig } from "@/content/site";
import { getSiteUrl } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.intro,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={GeistSans.variable}
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <SkipLink />
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          {process.env.NODE_ENV === "production" ? <Analytics /> : null}
        </ThemeProvider>
      </body>
    </html>
  );
}
