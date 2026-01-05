import React, { useState, useEffect } from 'react';
import { MdMenu, MdClose } from "react-icons/md";
import { FaUser, FaCode, FaBriefcase, FaFolderOpen, FaEnvelope } from "react-icons/fa";

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

  const navLinks = [
    { name: 'About', href: '#about', icon: <FaUser /> },
    { name: 'Skills', href: '#skills', icon: <FaCode /> },
    { name: 'Experience', href: '#experience', icon: <FaBriefcase /> },
    { name: 'Projects', href: '#projects', icon: <FaFolderOpen /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope /> },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex justify-end items-center p-4 md:p-6">
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-mono"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-emerald-400 text-emerald-400 px-4 py-2 rounded-lg font-mono hover:bg-emerald-400/10 transition-colors duration-300"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-emerald-400 focus:outline-none z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu - positioned independently */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-md transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 text-xl text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-mono"
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
            className="border border-emerald-400 text-emerald-400 px-6 py-3 rounded-lg font-mono hover:bg-emerald-400/10 transition-colors duration-300"
          >
            Resume
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
