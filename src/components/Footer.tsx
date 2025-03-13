
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
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="font-bold text-white text-xl">P</span>
              </div>
              <span className="text-xl font-bold text-gradient">Poiotes</span>
            </Link>
            <p className="text-gray-600 mb-6">
              Elevating brands through premium promotional products and print solutions.
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
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Products', 'About Us', 'Expertise', 'Case Studies', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {['Beach Chairs', 'Advertising Lanyards', 'Multi-functional Bandanas', 'Event Wristbands', 'Business Cards', 'Catalogs', 'Flyers'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">123 Promotion Avenue, Marketing District, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-600 flex-shrink-0" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-600 flex-shrink-0" />
                <span className="text-gray-600">contact@poiotes.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Poiotes. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
