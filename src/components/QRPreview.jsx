import React from "react";
import QRCode from "react-qr-code";

const QRPreview = ({ value, size, fgColor, bgColor }) => {
  return (
    <div className="w-full md:w-1/2 flex md:justify-end">
      <div
        className="w-full md:w-auto p-8
                   bg-white/10 backdrop-blur-lg
                   border border-white/20
                   rounded-2xl shadow-xl
                   flex items-center justify-center
                   min-h-[260px]
                   transition-all duration-300"
      >
        {value ? (
          <div className="transition-opacity duration-300 opacity-100">
            <QRCode
              value={value}
              size={size}
              fgColor={fgColor}
              bgColor={bgColor}
            />
          </div>
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
