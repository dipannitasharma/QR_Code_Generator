import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import QRForm from "./components/QRForm";
import QRPreview from "./components/QRPreview";

const App = () => {
  const [qrData, setQrData] = useState("");
  const [size, setSize] = useState(100);
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");


  return (
    <div
      className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-800"
    >
      <Header />

      <main className="w-full max-w-5xl mx-auto px-4 pt-20 pb-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
          <QRForm
                qrData={qrData}
                setQrData={setQrData}
                size={size}
                setSize={setSize}
                fgColor={fgColor}
                setFgColor={setFgColor}
                bgColor={bgColor}
                setBgColor={setBgColor}
          />

          <QRPreview
            value={qrData}
            size={size}
            fgColor={fgColor}
            bgColor={bgColor}
          />

        </div>
      </main>
    </div>
  );
};

export default App;
