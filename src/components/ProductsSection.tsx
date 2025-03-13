
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, Award, Truck, Clock } from 'lucide-react';

// Kategorie produktów i elementy
const categories = [
  { id: 'promo', name: 'Produkty Promocyjne' },
  { id: 'print', name: 'Materiały Drukowane' },
  { id: 'event', name: 'Artykuły Eventowe' },
];

const products = [
  {
    id: 1,
    name: 'Premium Leżaki Plażowe',
    category: 'promo',
    description: 'Wygodne, brandowane leżaki plażowe, które przyciągają uwagę na imprezach plenerowych.',
    image: 'https://images.unsplash.com/photo-1589686000081-11d77fc0a0e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Personalizowane Smycze',
    category: 'promo',
    description: 'Wysokiej jakości smycze z logo Twojej firmy, idealne na konferencje i do biura.',
    image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Wielofunkcyjne Chusty',
    category: 'promo',
    description: 'Wszechstronne brandowane chusty, które można nosić na wiele sposobów.',
    image: 'https://images.unsplash.com/photo-1588625500633-a0cd518f0f60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Opaski Eventowe',
    category: 'event',
    description: 'Trwałe, wodoodporne opaski na imprezy, zapewniające dostęp i widoczność marki.',
    image: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    name: 'Premium Wizytówki',
    category: 'print',
    description: 'Wyróżnij się dzięki naszym wizytówkom premium z wysokiej jakości wykończeniem.',
    image: 'https://images.unsplash.com/photo-1572048572872-2394404cf1f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    name: 'Personalizowane Katalogi',
    category: 'print',
    description: 'Pięknie zaprojektowane katalogi, które elegancko prezentują Twoje produkty.',
    image: 'https://images.unsplash.com/photo-1520807940693-216ccf06d401?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('promo');
  const filteredProducts = products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-24 relative overflow-hidden bg-gray-50">
      {/* Background decorative elements */}
      <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute bottom-[10%] right-[5%] w-80 h-80 rounded-full bg-purple-200/30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-4">
            Nasza Oferta Produktowa
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Premium Produkty</span> Dla Twojej Marki
          </h2>
          <p className="text-gray-600">
            Od artykułów promocyjnych po piękne materiały drukowane - oferujemy wszystko, czego potrzebujesz, aby Twoja marka się wyróżniała.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "py-2 px-5 rounded-full text-sm font-medium transition-all",
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover-effect group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-purple-600 transition-colors"
                >
                  Zapytaj o wycenę <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="inline-block rounded-full px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all">
            Omów swój projekt
          </a>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center hover-effect">
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-5">
              <Award className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Najwyższa Jakość</h3>
            <p className="text-gray-600">
              Nigdy nie idziemy na kompromis w kwestii jakości, zapewniając, że Twoje materiały promocyjne zostawiają trwałe wrażenie.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center hover-effect">
            <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center mb-5">
              <Truck className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Szybka Dostawa</h3>
            <p className="text-gray-600">
              Dzięki naszemu wydajnemu procesowi produkcji i dostawy, Twoje produkty dotrą do Ciebie na czas, za każdym razem.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center hover-effect">
            <div className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center mb-5">
              <Clock className="text-pink-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Dedykowane Wsparcie</h3>
            <p className="text-gray-600">
              Nasz zespół zapewnia spersonalizowaną obsługę od projektu do dostawy, gwarantując Twoją pełną satysfakcję.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
