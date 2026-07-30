import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = `${siteConfig.name} | ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAFAFA",
          color: "#0A0A0A",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#525252",
          }}
        >
          {siteConfig.title}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 900,
              fontSize: 32,
              lineHeight: 1.35,
              color: "#404040",
            }}
          >
            Product design portfolio for fintech, systems, and human-centred UX.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#737373" }}>
          hammedshotola.com
        </div>
      </div>
    ),
    size,
  );
}
