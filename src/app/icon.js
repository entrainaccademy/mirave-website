import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default async function Icon() {
  const logo = await readFile(join(process.cwd(), "public", "mireva logo png -new.png"));
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
        background: "#f5ecde",
      }}
    >
      <div style={{ display: "flex", position: "absolute", left: 61, top: 21, width: 70, height: 150, overflow: "hidden" }}>
        <img src={logoSrc} alt="" width={242} height={209} style={{ position: "absolute", left: -89, top: 0 }} />
      </div>
    </div>,
    size,
  );
}
