import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Venkatesh TV — 2× CTO, CEO & Founder, Impelox";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #020617 0%, #0f172a 50%, #0c1a3a 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow orb */}
        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-120px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 70%)",
          }}
        />
        {/* Bottom glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "40px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Site label */}
        <div
          style={{
            display: "flex",
            marginBottom: "20px",
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(96,165,250,0.9)",
          }}
        >
          venkateshtv.com
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "20px",
          }}
        >
          Venkatesh TV
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: 400,
            color: "rgba(148,163,184,0.9)",
            lineHeight: 1.4,
            marginBottom: "36px",
            maxWidth: "700px",
          }}
        >
          2× CTO · CEO &amp; Founder, Impelox · Building AI agents for regulated industries
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "12px" }}>
          {["AI Agents", "Engineering Leadership", "Chennai, India"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 18px",
                borderRadius: "100px",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                fontSize: "15px",
                color: "rgba(203,213,225,0.9)",
                fontWeight: 500,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
