import React, { useState, useEffect } from 'react';
import { MdMenu, MdClose } from "react-icons/md";
import { FaUser, FaCode, FaFolderOpen, FaEnvelope } from "react-icons/fa"; // example icons

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add icons to navLinks
  const navLinks = [
    { name: 'About', href: '#about', icon: <FaUser /> },
    { name: 'Skills', href: '#skills', icon: <FaCode /> },
    { name: 'Projects', href: '#projects', icon: <FaFolderOpen /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-light-navy/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-end items-center p-4 md:p-6">

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-lightest-slate hover:text-green transition-colors duration-300 font-mono"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-green text-green px-4 py-2 rounded-lg font-mono hover:bg-green/10 transition-colors duration-300"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-green focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-2/3 bg-light-navy/95 backdrop-blur-md shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-lightest-slate hover:text-green transition-colors duration-300 font-mono"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="border border-green text-green px-4 py-2 rounded-lg font-mono hover:bg-green/10 transition-colors duration-300"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
