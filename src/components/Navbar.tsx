
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Github } from 'lucide-react';

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-devops-blue-dark/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="container-custom flex items-center justify-between py-4">
        <a href="#home" className="flex items-center space-x-2 text-xl md:text-2xl font-bold text-devops-blue-dark dark:text-white">
          <img 
            src="/lovable-uploads/37275159-3899-439c-8730-db82940c83b7.png" 
            alt="DevOpsPro Logo" 
            className="h-10 w-10" 
          />
          <span>DevOps<span className="text-blue-500">Pro</span></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.title}>
                <a 
                  href={link.href} 
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-devops-teal transition-colors"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-devops-teal"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 dark:text-gray-300" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-devops-blue-dark shadow-lg">
          <div className="container-custom py-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a 
                    href={link.href} 
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-devops-teal block py-1"
                    onClick={toggleMenu}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-devops-teal"
                  onClick={toggleMenu}
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
