
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/lovable-uploads/b01784e3-5558-40ec-91c9-0230f0e02843.png" alt="Poiotes Logo" className="h-12" />
            </Link>
            <p className="text-gray-600 mb-6">
              Podnoszenie wartości marek poprzez premium produkty promocyjne i rozwiązania druku.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group">
                <Instagram size={18} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group">
                <Twitter size={18} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group">
                <Facebook size={18} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group">
                <Linkedin size={18} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Szybkie linki</h3>
            <ul className="space-y-3">
              {[
                { name: 'Produkty', id: 'products' },
                { name: 'O nas', id: 'about' },
                { name: 'Specjalizacje', id: 'expertise' },
                { name: 'Case studies', id: 'case-studies' },
                { name: 'Referencje', id: 'testimonials' },
                { name: 'Kontakt', id: 'contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={`#${item.id}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Produkty</h3>
            <ul className="space-y-3">
              {['Leżaki plażowe', 'Smycze reklamowe', 'Wielofunkcyjne chusty', 'Opaski eventowe', 'Wizytówki', 'Katalogi', 'Ulotki'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">ul. Reklamowa 123, Dzielnica Marketingowa, 00-001 Warszawa</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-600 flex-shrink-0" />
                <span className="text-gray-600">+48 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-600 flex-shrink-0" />
                <span className="text-gray-600">kontakt@poiotes.pl</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Poiotes. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Polityka prywatności</a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Warunki korzystania</a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Polityka cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
