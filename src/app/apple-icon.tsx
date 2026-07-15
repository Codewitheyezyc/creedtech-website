import { ImageResponse } from "next/og";

// Size of the Apple Touch Icon (180x180 px per iOS guidelines)
export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F7F5F0", // Warm Paper Background
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "36px", // iOS rounded style
        }}
      >
        {/* Render our official multi-color three-square logo mark exactly */}
        <div
          style={{
            display: "flex",
            position: "relative",
            width: "100px",
            height: "100px",
          }}
        >
          {/* Bottom block (Steel Blue) */}
          <div
            style={{
              position: "absolute",
              left: "20px",
              top: "50px",
              width: "30px",
              height: "30px",
              backgroundColor: "#A9B8CC",
              borderRadius: "4px",
            }}
          />
          {/* Middle block (Deep Navy) */}
          <div
            style={{
              position: "absolute",
              left: "35px",
              top: "35px",
              width: "30px",
              height: "30px",
              backgroundColor: "#0B1F3A",
              borderRadius: "4px",
            }}
          />
          {/* Top block (Warm Amber) */}
          <div
            style={{
              position: "absolute",
              left: "50px",
              top: "20px",
              width: "30px",
              height: "30px",
              backgroundColor: "#E3A046",
              borderRadius: "4px",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
