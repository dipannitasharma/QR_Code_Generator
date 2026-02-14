import React from "react";

const DownloadOptions = ({ size, bgColor, fileName }) => {
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

      if (format === "jpeg") {
        ctx.fillStyle = bgColor || "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.drawImage(img, 0, 0);

      const imageFile = canvas.toDataURL(`image/${format}`);

      const cleanName = fileName
  ? fileName.trim().replace(/[^a-zA-Z0-9-_]/g, "-")
  : "qr-code";


      const link = document.createElement("a");
      link.href = imageFile;
      link.download = `${cleanName}.${format === "jpeg" ? "jpg" : "png"}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    img.src =
      "data:image/svg+xml;base64," +
      btoa(unescape(encodeURIComponent(svgString)));
  };

  return (
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
  );
};

export default DownloadOptions;
