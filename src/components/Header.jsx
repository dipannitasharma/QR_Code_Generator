import React from "react";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div
      className="w-[95%] mx-auto mt-6
                 flex justify-between items-center
                 bg-white/10 backdrop-blur-lg
                 border border-white/20
                 shadow-xl
                 rounded-2xl
                 px-6 py-3"
    >
      {/* Title */}
      <h1 className="text-2xl font-semibold text-white tracking-wide">
        QR Code Generator
      </h1>

      {/* GitHub */}
      <a
        href="https://github.com/dipannitasharma"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white/80 
                   hover:text-white transition duration-300"
      >
        <FaGithub size={22} />
        <span className="hidden sm:block">GitHub</span>
      </a>
    </div>
  );
};

export default Header;
