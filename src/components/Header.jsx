import React from "react";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center 
                    bg-white/20 backdrop-blur-md 
                    border border-white/30 
                    shadow-lg 
                    rounded-2xl mt-3 p-3">

      {/* Left Side - Title */}
      <h1 className="text-2xl font-bold text-gray-800">
        QR Code Generator
      </h1>

      {/* Right Side - GitHub */}
      <a
        href="https://github.com/dipannitasharma"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-800 hover:text-black transition duration-300"
      >
        <FaGithub size={24} />
        <span className="font-medium hidden sm:block">
          GitHub
        </span>
      </a>

    </div>
  );
};

export default Header;
