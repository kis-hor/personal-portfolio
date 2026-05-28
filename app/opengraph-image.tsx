import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #020617 0%, #0f172a 50%, #134e4a 100%)",
          color: "#e2e8f0",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <p style={{ fontSize: 30, opacity: 0.9 }}>Kishor Bahadur Gharti Chhetri</p>
        <h1 style={{ marginTop: 16, fontSize: 62, lineHeight: 1.12, maxWidth: 980 }}>
          Full-Stack Developer | E-commerce Specialist | AI Enthusiast
        </h1>
      </div>
    ),
    size,
  );
}
