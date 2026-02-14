import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import QRForm from "./components/QRForm";

const App = () => {
  const[qrData, setQrData] = useState("");
  return (
    <div className="min-h-screen 
                    bg-linear-to-br 
                    from-gray-900 via-black to-gray-800
                    flex flex-col items-center">
      <Header />
          <div><QRForm qrData={qrData} setQrData={setQrData} /></div>
    </div>
  );
};

export default App;
