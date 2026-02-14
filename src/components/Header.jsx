import React from "react";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50
                 w-[95%] max-w-6xl
                 flex justify-between items-center
                 bg-white/10 backdrop-blur-lg
                 border border-white/20
                 shadow-xl rounded-2xl
                 px-4 sm:px-6 py-3"
    >
      <h1 className="text-lg sm:text-2xl font-semibold text-white tracking-wide">
        QR Code Generator
      </h1>

      <a
        href="https://github.com/dipannitasharma"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white/80 hover:text-white transition duration-300"
      >
        <FaGithub size={22} />
        <span className="hidden sm:block">GitHub</span>
      </a>
    </header>
  );
};

export default Header;
