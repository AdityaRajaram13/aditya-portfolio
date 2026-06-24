import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.role}`;

// Terminal-themed social share card.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0a0e14",
          padding: "72px",
          fontFamily: "monospace",
          color: "#c9d1d9",
        }}
      >
        {/* window dots */}
        <div style={{ display: "flex", gap: 14, marginBottom: 44 }}>
          <div style={{ width: 22, height: 22, borderRadius: 11, background: "#ff5f56" }} />
          <div style={{ width: 22, height: 22, borderRadius: 11, background: "#ffbd2e" }} />
          <div style={{ width: 22, height: 22, borderRadius: 11, background: "#27c93f" }} />
        </div>

        <div style={{ display: "flex", fontSize: 30, color: "#56d364" }}>
          $ whoami
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 800,
            color: "#ffffff",
            margin: "10px 0 8px",
          }}
        >
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 40, color: "#d2a8ff" }}>
          {profile.role}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#8b949e",
            marginTop: 40,
          }}
        >
          # {profile.company} · {profile.product}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#56d364",
            marginTop: 28,
          }}
        >
          $ ./run
          <span
            style={{
              width: 16,
              height: 30,
              background: "#56d364",
              marginLeft: 6,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
