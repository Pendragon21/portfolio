import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-4 bg-white h-24 shadow-md">
      <div className="flex items-center">
        <a
          href="/"
          className="flex items-center text-black text-lg font-bold hover:text-purple-300 gap-4"
        >
          <img
            className="w-14 h-14 rounded-full mr-2 "
            src="profilepic.jpg"
            alt="Your Name"
          />
          Rafael Mendes
        </a>
      </div>

      <nav className="space-x-16 mr-40">
        <Link href="/" className="text-black font-bold hover:text-purple-300">
          Home
        </Link>
        <Link
          href="/about"
          className="text-black font-bold hover:text-purple-300"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="text-black font-bold hover:text-purple-300"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="text-black font-bold hover:text-purple-300"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
