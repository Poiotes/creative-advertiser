
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3 px-4 md:px-8",
        scrolled 
          ? "glassmorphism shadow-md py-2" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="font-bold text-white text-xl">P</span>
            </div>
            <span className="text-xl font-bold text-gradient">Poiotes</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Produkty', id: 'products' },
              { name: 'O nas', id: 'about' },
              { name: 'Specjalizacje', id: 'expertise' },
              { name: 'Kontakt', id: 'contact' }
            ].map((item) => (
              <a 
                key={item.name}
                href={`#${item.id}`}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            <button className="rounded-full px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all">
              Zapytaj o wycenę
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden absolute left-0 right-0 top-full glassmorphism shadow-lg transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-[400px] opacity-100 py-4" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col space-y-4 px-4">
          {[
            { name: 'Produkty', id: 'products' },
            { name: 'O nas', id: 'about' },
            { name: 'Specjalizacje', id: 'expertise' },
            { name: 'Kontakt', id: 'contact' }
          ].map((item) => (
            <a 
              key={item.name}
              href={`#${item.id}`}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              onClick={closeMenu}
            >
              {item.name}
            </a>
          ))}
          <button className="rounded-full px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all mt-2">
            Zapytaj o wycenę
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
