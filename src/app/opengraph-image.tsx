import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sweepsless in Seattle \u2014 Cleaning Made Charming";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#2F2B28",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "18px",
              background: "#C41E3A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "42px",
              fontWeight: "bold",
              fontStyle: "italic",
              color: "#ECDCC2",
            }}
          >
            S
          </div>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: "bold",
              color: "#ECDCC2",
              margin: "0",
              lineHeight: "1.2",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Sweepsless in Seattle
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#C41E3A",
              margin: "0",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Cleaning Made Charming
          </p>
          <div
            style={{
              width: "200px",
              height: "2px",
              background: "#C41E3A",
              marginTop: "8px",
            }}
          />
          <p
            style={{
              fontSize: "18px",
              color: "rgba(236, 220, 194, 0.6)",
              margin: "0",
              marginTop: "4px",
            }}
          >
            Woodinville &bull; Kirkland &bull; Bellevue &bull; Eastside
          </p>
        </div>
      </div>
    ),
    { ...size },
  );
}
