import React from "react";
import QRCode from "react-qr-code";

const QRPreview = ({ value, size, fgColor, bgColor }) => {
  const handleDownload = (format) => {
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

      // JPG does not support transparency
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

  return (
    <div className="w-full md:w-1/2 flex md:justify-end">
      <div
        className="w-full md:w-auto p-8
                   bg-white/10 backdrop-blur-lg
                   border border-white/20
                   rounded-2xl shadow-xl
                   flex flex-col items-center justify-center
                   min-h-65
                   transition-all duration-300"
      >
        {value ? (
          <>
            <QRCode
              id="qr-code"
              value={value}
              size={size}
              fgColor={fgColor}
              bgColor={bgColor}
            />

            <div className="mt-6 flex gap-4">
              <button
                onClick={() => handleDownload("png")}
                className="px-5 py-2 rounded-xl
                           bg-white/20 hover:bg-white/30
                           text-white transition duration-300"
              >
                Download PNG
              </button>

              <button
                onClick={() => handleDownload("jpeg")}
                className="px-5 py-2 rounded-xl
                           bg-white/20 hover:bg-white/30
                           text-white transition duration-300"
              >
                Download JPG
              </button>
            </div>
          </>
        ) : (
          <p className="text-white/60 text-sm text-center">
            QR preview will appear here
          </p>
        )}
      </div>
    </div>
  );
};

export default QRPreview;
