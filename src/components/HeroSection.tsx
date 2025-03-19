
import React from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 flex flex-col justify-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-4">
              Premium Produkty Reklamowe
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Wyróżnij swoją markę</span> dzięki premium produktom promocyjnym
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Poiotes pomaga firmom wywierać trwałe wrażenie dzięki wysokiej jakości produktom reklamowym i materiałom drukowanym.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products" className="rounded-full px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg flex items-center justify-center">
                Zobacz produkty
                <ChevronRight size={18} className="ml-1" />
              </a>
              <a href="#contact" className="rounded-full px-8 py-3.5 border border-gray-300 text-gray-700 font-medium hover:border-gray-400 flex items-center justify-center">
                Skontaktuj się z nami
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center">
                <span className="text-2xl md:text-3xl font-bold text-blue-600">500+</span>
                <span className="text-sm text-gray-600">Zadowolonych klientów</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-2xl md:text-3xl font-bold text-purple-600">15+</span>
                <span className="text-sm text-gray-600">Lat doświadczenia</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-2xl md:text-3xl font-bold text-pink-600">100%</span>
                <span className="text-sm text-gray-600">Satysfakcji</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative max-w-md">
              <img 
                src="/lovable-uploads/2219ad88-c697-4df9-8f41-987b27fd3cd4.png" 
                alt="Poiotes Logo" 
                className="w-full h-auto p-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
