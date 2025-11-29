import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Professional Dashboard";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <svg
            width="192"
            height="192"
            viewBox="0 0 192 192"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="192" height="192" rx="48" fill="white" fillOpacity="0.2" />
            <path
              d="M96 48C69.5 48 48 69.5 48 96C48 122.5 69.5 144 96 144C122.5 144 144 122.5 144 96C144 69.5 122.5 48 96 48Z"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M96 72V96L120 120"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <h1
              style={{
                fontSize: "72px",
                fontWeight: "bold",
                margin: 0,
                lineHeight: 1,
              }}
            >
              Professional
            </h1>
            <h1
              style={{
                fontSize: "72px",
                fontWeight: "bold",
                margin: 0,
                lineHeight: 1,
              }}
            >
              Dashboard
            </h1>
            <p
              style={{
                fontSize: "32px",
                margin: "24px 0 0 0",
                opacity: 0.8,
              }}
            >
              Built with Next.js & shadcn/ui
            </p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}