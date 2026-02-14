import React from "react";

const QRForm = ({
  qrData,
  setQrData,
  size,
  setSize,
  fgColor,
  setFgColor,
  bgColor,
  setBgColor,
}) => {
  return (
    <div className="w-full md:w-1/2 mt-10 p-6
                    bg-white/10 backdrop-blur-lg
                    border border-white/20
                    rounded-2xl shadow-xl
                    text-white space-y-6">

      {/* Title */}
      <h2 className="text-xl font-semibold tracking-wide">
        Customize Your QR Code
      </h2>

      {/* Text Input */}
      <div>
        <label className="block mb-2 text-sm text-white/80">
          Enter Text or URL
        </label>
        <input
          type="text"
          value={qrData}
          onChange={(e) => setQrData(e.target.value)}
          placeholder="https://example.com"
          className="w-full p-3 rounded-xl
                     bg-white/20 border border-white/30
                     text-white placeholder-white/60
                     focus:outline-none focus:ring-2 focus:ring-white/40"
        />
      </div>

      {/* Size Selector */}
      <div>
        <label className="block mb-2 text-sm text-white/80">
          QR Size
        </label>
        <input
          type="number"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          className="w-full p-3 rounded-xl
                     bg-white/20 border border-white/30
                     text-white focus:outline-none"/>
      </div>

      {/* Color Pickers */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm text-white/80">
            Foreground Color
          </label>
          <input
            type="color"
            value={fgColor}
            onChange={(e) => setFgColor(e.target.value)}
            className="w-full h-12 rounded-lg cursor-pointer"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-white/80">
            Background Color
          </label>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="w-full h-12 rounded-lg cursor-pointer"
          />
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={() => {
          setQrData("");
          setSize(200);
          setFgColor("#000000");
          setBgColor("#ffffff");
        }}
        className="w-full py-3 rounded-xl
                   bg-white/20 hover:bg-white/30
                   transition duration-300 font-medium"
      >
        Reset
      </button>
    </div>
  );
};

export default QRForm;
