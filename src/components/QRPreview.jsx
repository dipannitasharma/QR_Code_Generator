
import QRCode from "react-qr-code";
import DownloadOptions from "./Downloadoptions";

const QRPreview = ({ value, size, fgColor, bgColor, fileName }) => {

  const defaultQR = "https://q-rism.vercel.app/";

  const PREVIEW_SIZE = 220; // Fixed preview size

  

  const displayValue = value || defaultQR;

  return (
    <div className="w-full md:w-120 flex justify-center">
      <div
        className="w-full h-115
                   bg-white/10 backdrop-blur-lg
                   border border-white/20
                   rounded-xl shadow-xl mt-5
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
              bgColor={value ? bgColor : "#ffffff"}
            />
          </div>
        </div>

        {/* Bottom Controls */}
        {value && (
            <div className="p-6 flex flex-col items-center gap-4">
                <DownloadOptions
                size={size}
                bgColor={bgColor}
                fileName={fileName}
                />
            </div>
            )}

      </div>
    </div>
  );
};

export default QRPreview;
