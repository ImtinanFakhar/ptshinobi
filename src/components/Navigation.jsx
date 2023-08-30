import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoUpwork } from "react-icons/bi";

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWhiteText, setIsWhiteText] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleTextColor = () => {
    setIsWhiteText(!isWhiteText);
  };

  return (
    <nav className="flex items-center justify-between  py-4 bg-gray-900 text-white relative ">
    <div className="logo">
      <h1 className="text-4xl mx-auto md:text-3xl lg:text-4xl font-extrabold text-blue-500">
        Pentest Shinobi
      </h1>
    </div>
    <div className={`links hidden md:flex space-x-4 ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
      <Link to="/Home" className="hover:text-blue-400 transition duration-300">Home</Link>
      <Link to="/About" className="hover:text-blue-400 transition duration-300">About</Link>
      <Link to="/Contact" className="hover:text-blue-400 transition duration-300">Contact</Link>
    </div>
    <div className="social-icons flex space-x-4">
      <a href="https://www.linkedin.com/" className="group">
        <div className="rounded-full border-2 border-blue-500 p-2 group-hover:bg-blue-500 transition duration-300">
          <AiFillLinkedin size={32} color="#00557f" />
        </div>
      </a>
     <a href="https://www.upwork.com/freelancers/ehtishamfakhar" className="group">
        <div className="rounded-full border-2 border-blue-500 p-2 group-hover:bg-blue-500 transition duration-300">
          <BiLogoUpwork size={32} color="#00557f" />
        </div>
      </a>
    </div>
    {/* Mobile Menu for Small Screens */}
    <div className="md:hidden flex items-center">
      <button className="text-whitefocus:outline-none p-2" onClick={toggleMobileMenu}>
        <div className="icon ">
          {isMobileMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </div>
      </button>
    </div>
    {/* Mobile Menu Overlay */}
    {isMobileMenuOpen && (
      <div className="md:hidden absolute top-0 left-0 w-full h-full bg-gray-900 opacity-90 z-10">
        <div className="flex flex-col space-y-4 py-8 text-center  bg-gray-900  ">
          <Link to="/Home" className="text-white hover:text-blue-400 transition duration-300" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to="/About" className="text-white hover:text-blue-400 transition duration-300" onClick={closeMobileMenu}>
            About
          </Link>
          <Link to="/Contact" className="text-white hover:text-blue-400 transition duration-300 "  onClick={closeMobileMenu}>
            Contact
          </Link>
        </div>
      </div>
    )}
  </nav>
  );
}

export default Navigation;
