
import React from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 flex flex-col justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-[20%] right-[5%] w-64 h-64 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute bottom-[10%] left-[5%] w-80 h-80 rounded-full bg-purple-200/30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="opacity-0 animate-fade-in">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-4">
                Premium Produkty Reklamowe
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-delay-1">
              <span className="text-gradient">Wyróżnij swoją markę</span> dzięki premium produktom promocyjnym
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg opacity-0 animate-fade-in-delay-2">
              Poiotes pomaga firmom wywierać trwałe wrażenie dzięki wysokiej jakości produktom reklamowym i materiałom drukowanym, które wyróżniają się na tle konkurencji.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-delay-3">
              <a href="#products" className="rounded-full px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all flex items-center justify-center">
                Zobacz produkty
                <ChevronRight size={18} className="ml-1" />
              </a>
              <a href="#contact" className="rounded-full px-8 py-3.5 border border-gray-300 text-gray-700 font-medium hover:border-gray-400 transition-all flex items-center justify-center">
                Skontaktuj się z nami
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4 opacity-0 animate-fade-in-delay-4">
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
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/3] max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 animate-fade-in-delay-2">
                <div className="w-full h-full relative">
                  {/* Main image */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-blue-50 to-purple-50 p-4">
                      <div className="w-full h-full rounded-xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 mix-blend-multiply"></div>
                        <img 
                          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Produkty promocyjne" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-32 h-24 rounded-lg overflow-hidden shadow-lg animate-float" style={{animationDelay: "1s"}}>
                    <img 
                      src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="Smycz promocyjna" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-40 h-32 rounded-lg overflow-hidden shadow-lg animate-float" style={{animationDelay: "1.5s"}}>
                    <img 
                      src="https://images.unsplash.com/photo-1609138403725-65db1a13ce89?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="Produkty brandowane" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in-delay-4">
        <span className="text-sm text-gray-500 mb-2">Przewiń, aby odkryć więcej</span>
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2.5 bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
