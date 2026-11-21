import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default async function Icon() {
  const logo = await readFile(join(process.cwd(), "public", "logo-cream.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: 38,
        background: "#4a2a1c",
      }}
    >
      <img
        src={logoSrc}
        alt=""
        width={634}
        height={325}
        style={{ position: "absolute", left: -22, top: -87 }}
      />
    </div>,
    size,
  );
}
