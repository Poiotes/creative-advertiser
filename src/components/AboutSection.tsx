
import React from 'react';
import { Check } from 'lucide-react';

const AboutSection = () => {
  const expertise = [
    "Projektowanie i produkcja premium produktów promocyjnych",
    "Niestandardowe rozwiązania druku dla firm każdej wielkości",
    "Materiały reklamowe zgodne z identyfikacją marki",
    "Wysokiej jakości artykuły eventowe",
    "Ekologiczne i zrównoważone opcje produktów",
    "Kompleksowe rozwiązania brandingowe"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-[30%] right-[10%] w-64 h-64 rounded-full bg-purple-200/30 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-blue-200"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Zespół Poiotes przy pracy" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-4">
              O Poiotes
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Twój Partner Dla <span className="text-gradient">Premium Rozwiązań</span> Reklamowych
            </h2>
            
            <p className="text-gray-600 mb-6">
              Poiotes zostało założone z jasną misją: dostarczania firmom wysokiej jakości produktów promocyjnych, które naprawdę reprezentują wartości ich marki. Z ponad 15-letnim doświadczeniem w branży, pomogliśmy setkom firm zwiększyć skuteczność ich działań marketingowych dzięki premium materiałom reklamowym.
            </p>
            
            <p className="text-gray-600 mb-8">
              Nasz oddany zespół projektantów i specjalistów produkcji ściśle współpracuje z każdym klientem, aby tworzyć niestandardowe rozwiązania, które wywierają trwałe wrażenie. Wierzymy, że każdy punkt kontaktu z odbiorcą ma znaczenie, dlatego skupiamy się na dostarczaniu produktów, które są nie tylko wizualnie atrakcyjne, ale także funkcjonalne i godne zapamiętania.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Nasza Specjalizacja</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                {expertise.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a 
              href="#expertise" 
              className="inline-block rounded-full px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all"
            >
              Dowiedz się więcej o nas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
