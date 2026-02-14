import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRPreview = ({ value, size, fgColor, bgColor }) => {
  const [format, setFormat] = useState("png");
  const defaultQR = "https://your-qr-app.vercel.app";

  const PREVIEW_SIZE = 220; // Fixed preview size

  const handleDownload = () => {
    const svg = document.getElementById("qr-code");
    if (!svg) return;

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = function () {
      // Export uses user-selected size
      canvas.width = size;
      canvas.height = size;

      // Scale drawing to match export size
      const scale = size / PREVIEW_SIZE;
      ctx.scale(scale, scale);

      // Fill background for JPG
      if (format === "jpeg") {
        ctx.fillStyle = bgColor || "#ffffff";
        ctx.fillRect(0, 0, PREVIEW_SIZE, PREVIEW_SIZE);
      }

      ctx.drawImage(img, 0, 0);

      const file = canvas.toDataURL(`image/${format}`);

      const link = document.createElement("a");
      link.href = file;
      link.download = `qr-code.${format === "jpeg" ? "jpg" : "png"}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    img.src =
      "data:image/svg+xml;base64," +
      btoa(unescape(encodeURIComponent(svgString)));
  };

  const displayValue = value || defaultQR;

  return (
    <div className="w-full md:w-120 flex justify-center">
      <div
        className="w-full h-115
                   bg-white/10 backdrop-blur-lg
                   border border-white/20
                   rounded-2xl shadow-xl mt-5
                   flex flex-col"
      >
        {/* QR Preview Section (Fixed Size) */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="bg-white p-4 rounded-xl border border-white shadow-md">
            <QRCode
              id="qr-code"
              value={displayValue}
              size={PREVIEW_SIZE} // Fixed preview
              fgColor={value ? fgColor : "#000000"}
              bgColor="#ffffff"
            />
          </div>
        </div>

        {/* Bottom Controls */}
        {value && (
          <div className="p-6  border-white/20 flex flex-col items-center gap-4">
            <div className="flex gap-3">
              <button
                onClick={() => setFormat("png")}
                className={`px-4 py-1 rounded-full text-sm transition ${
                  format === "png"
                    ? "bg-white text-black"
                    : "bg-white/20 text-white"
                }`}
              >
                PNG
              </button>

              <button
                onClick={() => setFormat("jpeg")}
                className={`px-4 py-1 rounded-full text-sm transition ${
                  format === "jpeg"
                    ? "bg-white text-black"
                    : "bg-white/20 text-white"
                }`}
              >
                JPG
              </button>
            </div>

            <button
              onClick={handleDownload}
              className="px-6 py-2 rounded-xl
                         bg-white/20 hover:bg-white/30
                         text-white transition duration-300"
            >
              Download {format.toUpperCase()}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRPreview;
