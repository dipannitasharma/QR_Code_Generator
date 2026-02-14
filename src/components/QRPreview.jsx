import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRPreview = ({ value, size, fgColor, bgColor }) => {
  const defaultQR = "https://your-qr-app.vercel.app";
  const [format, setFormat] = useState("png");

  const handleDownload = () => {
    const svg = document.getElementById("qr-code");
    if (!svg) return;

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = function () {
      canvas.width = size;
      canvas.height = size;

      if (format === "jpeg") {
        ctx.fillStyle = bgColor || "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.drawImage(img, 0, 0);

      const imageFile = canvas.toDataURL(`image/${format}`);

      const link = document.createElement("a");
      link.href = imageFile;
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
  <div className="w-full md:w-1/2 flex md:justify-center">
    <div
      className="w-full max-w-md h-[450px]
                 bg-white/10 backdrop-blur-lg
                 border border-white/20
                 rounded-2xl shadow-xl
                 flex flex-col"
    >
      {/* QR Area - Flexible Center */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white rounded-xl border border-white shadow-md flex items-center justify-center">
          <QRCode
            id="qr-code"
            value={displayValue}
            size={size}
            fgColor={value ? fgColor : "#000000"}
            bgColor="#ffffff"
          />
        </div>
      </div>

      {/* Fixed Bottom Section */}
      {value && (
        <div className="p-6 border-t border-white/20 flex flex-col items-center">
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
            className="mt-4 px-6 py-2 rounded-xl
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
