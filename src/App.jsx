import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen 
                    bg-gradient-to-br 
                    from-gray-900 via-black to-gray-800
                    flex flex-col items-center">
      <Header />
    </div>
  );
};

export default App;
