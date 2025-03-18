
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, BookOpen } from "lucide-react";
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Product categories for mega menu
const productCategories = [
  {
    title: "Materiały promocyjne",
    items: [
      { name: "Leżaki plażowe", href: "/product/1" },
      { name: "Smycze", href: "/product/2" },
      { name: "Chusty", href: "/product/3" },
    ]
  },
  {
    title: "Materiały eventowe",
    items: [
      { name: "Opaski eventowe", href: "/product/4" },
      { name: "Banery", href: "/product/eventowe-banery" },
      { name: "Namioty", href: "/product/eventowe-namioty" },
    ]
  },
  {
    title: "Materiały drukowane",
    items: [
      { name: "Wizytówki premium", href: "/product/5" },
      { name: "Katalogi", href: "/product/6" },
      { name: "Broszury", href: "/product/drukowane-broszury" },
    ]
  },
];

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
          <div className="hidden md:flex items-center space-x-6">
            {/* Dropdown Menu for Products */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  <span>Produkty</span>
                  <ChevronDown size={16} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[650px] p-4 bg-white rounded-md shadow-lg" align="start" sideOffset={20}>
                <div className="grid grid-cols-3 gap-6">
                  {productCategories.map((category) => (
                    <div key={category.title} className="space-y-3">
                      <h3 className="font-bold text-sm text-gray-500">{category.title}</h3>
                      <ul className="space-y-2">
                        {category.items.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.href}
                              className="block text-sm text-gray-700 hover:text-blue-600 transition-colors"
                              onClick={closeMenu}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/blog" className="flex items-center gap-1.5 text-gray-700 hover:text-blue-600 transition-colors font-medium">
              <BookOpen size={18} />
              <span>Blog</span>
            </Link>
            
            {[
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
          </div>

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
          isOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col space-y-4 px-4">
          {/* Mobile Products Dropdown */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium py-2">Produkty</span>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
            <div className="pl-4 space-y-4">
              {productCategories.map((category) => (
                <div key={category.title} className="space-y-2">
                  <h3 className="font-bold text-sm text-gray-500">{category.title}</h3>
                  <ul className="space-y-2 pl-2">
                    {category.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className="block text-sm text-gray-700 hover:text-blue-600 transition-colors"
                          onClick={closeMenu}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Blog Link in Mobile */}
          <Link 
            to="/blog" 
            className="flex items-center gap-1.5 text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            onClick={closeMenu}
          >
            <BookOpen size={18} />
            <span>Blog</span>
          </Link>
          
          {[
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
