import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import QRForm from "./components/QRForm";
import QRPreview from "./components/QRPreview";

const App = () => {
  const[qrData, setQrData] = useState("");
  return (
    <div className="min-h-screen 
                    bg-linear-to-br 
                    from-gray-900 via-black to-gray-800
                    flex flex-col items-center">
               <Header />
          <div className="flex justify-center  items-center">
              <QRForm qrData={qrData} setQrData={setQrData}  />
              <QRPreview value={qrData} />
          </div>
    </div>
  );
};

export default App;
