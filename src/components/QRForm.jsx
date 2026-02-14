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
            fileName,
            setFileName
            }) => {
            const handleSizeChange = (e) => {
            const value = e.target.value;

            // Allow empty input while typing
            if (value === "") {
                setSize("");
                return;
            }

            const numberValue = Number(value);

            if (!isNaN(numberValue)) {
                setSize(numberValue);
            }
            };

            const handleSizeBlur = () => {
            if (!size || size < 100) {
                setSize(100);
            } else if (size > 400) {
                setSize(400);
            }
            };


  return (
    <div
      className="w-full max-w-md mt-5 p-5
                 bg-white/10 backdrop-blur-lg
                 border border-white/20
                 rounded-2xl shadow-xl
                 text-white space-y-6"
    >
      <h2 className="text-lg font-semibold tracking-wide">
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

            {/* Size Input */}
            
        <div>
        <label className="block mb-2 text-sm text-white/80">
            QR Size
        </label>

        <div className="relative">
            <input
        type="number"
        min={100}
        max={400}
        step={10}
        value={size}
        onChange={handleSizeChange}
        onBlur={handleSizeBlur}
        className="w-full p-3 pr-12 rounded-xl
                    bg-white/20 border border-white/30
                    text-white focus:outline-none
                    focus:ring-2 focus:ring-white/40"
        />


            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-white/60">
                px
        </span>
    </div>

  <p className="mt-1 text-xs text-white/50">
    Min: 100px • Max: 400px
  </p>
</div>


      {/* Color Pickers */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm text-white/80">
            Foreground
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
            Background
          </label>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="w-full h-12 rounded-lg cursor-pointer"
          />
        </div>
      </div>
      {/* File Name */}
<div>
  <label className="block mb-2 text-sm text-white/80">
    Download File Name
  </label>

  <div className="relative">
    <input
      type="text"
      value={fileName}
      onChange={(e) => setFileName(e.target.value)}
      placeholder="e.g. my-qr-code"
      className="w-full p-3 pr-12 rounded-xl
                 bg-white/20 border border-white/30
                 text-white placeholder-white/60
                 focus:outline-none focus:ring-2 focus:ring-white/40"
    />

    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-white/60">
      .png / .jpg
    </span>
  </div>

  <p className="mt-1 text-xs text-white/50">
    Leave empty to use default name
  </p>
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
