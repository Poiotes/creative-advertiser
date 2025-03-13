
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, Award, Truck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

// Kategorie produktów i elementy
const categories = [
  { id: 'promo', name: 'Produkty Promocyjne' },
  { id: 'print', name: 'Materiały Drukowane' },
  { id: 'event', name: 'Artykuły Eventowe' },
];

export const products = [
  {
    id: 1,
    name: 'Premium Leżaki Plażowe',
    category: 'promo',
    description: 'Wygodne, brandowane leżaki plażowe, które przyciągają uwagę na imprezach plenerowych.',
    image: 'https://i.imgur.com/7MSnWQe.png',
    prices: [
      { quantity: '1-10', price: '120 zł' },
      { quantity: '11-50', price: '105 zł' },
      { quantity: '51+', price: '95 zł' },
    ],
    details: 'Nasze premium leżaki plażowe to idealne rozwiązanie reklamowe na każde wydarzenie plenerowe. Wykonane z trwałego drewna bukowego i wysokiej jakości materiału, który można w pełni personalizować. Dostępne w różnych kolorach z możliwością nadruku logo, hasła lub dowolnej grafiki metodą sublimacji, która gwarantuje trwałość i intensywność kolorów.'
  },
  {
    id: 2,
    name: 'Personalizowane Smycze',
    category: 'promo',
    description: 'Wysokiej jakości smycze z logo Twojej firmy, idealne na konferencje i do biura.',
    image: 'https://i.imgur.com/UZiXrh3.png',
    prices: [
      { quantity: '1-50', price: '8 zł' },
      { quantity: '51-200', price: '6 zł' },
      { quantity: '201+', price: '4.50 zł' },
    ],
    details: 'Nasze smycze reklamowe to doskonały sposób na promocję marki podczas konferencji, targów czy w codziennym użytku biurowym. Oferujemy różne szerokości taśmy (10mm, 15mm i 20mm), szeroki wybór kolorów i zapięć. Możliwość nadruku pełnokolorowego z obu stron, z dodatkowymi elementami bezpieczeństwa jak zrywka czy plastikowa klamra.'
  },
  {
    id: 3,
    name: 'Wielofunkcyjne Chusty',
    category: 'promo',
    description: 'Wszechstronne brandowane chusty, które można nosić na wiele sposobów.',
    image: 'https://i.imgur.com/YfFUDT3.png',
    prices: [
      { quantity: '1-30', price: '15 zł' },
      { quantity: '31-100', price: '12 zł' },
      { quantity: '101+', price: '9.50 zł' },
    ],
    details: 'Wielofunkcyjne chusty reklamowe to innowacyjny produkt promocyjny, który można nosić na kilkanaście różnych sposobów: jako opaska, szalik, maska, czapka i wiele innych. Wykonane z elastycznego, bezszwowego micropoliestru, który doskonale odprowadza wilgoć i szybko schnie. Nadruk sublimacyjny na całej powierzchni zapewnia nieograniczone możliwości projektowe.'
  },
  {
    id: 4,
    name: 'Opaski Eventowe',
    category: 'event',
    description: 'Trwałe, wodoodporne opaski na imprezy, zapewniające dostęp i widoczność marki.',
    image: 'https://i.imgur.com/XEQwNQK.png',
    prices: [
      { quantity: '1-100', price: '3 zł' },
      { quantity: '101-500', price: '2 zł' },
      { quantity: '501+', price: '1.50 zł' },
    ],
    details: 'Opaski eventowe to praktyczne rozwiązanie do kontroli dostępu podczas festiwali, konferencji i innych wydarzeń. Wykonane z wytrzymałego i wodoodpornego materiału Tyvek lub silikonowe dla wielokrotnego użytku. Dostępne w różnych kolorach z możliwością nadruku logo, tła graficznego lub numeracji seryjnej. Zabezpieczone samoprzylepnym zamknięciem lub specjalną plastikową zapinką.'
  },
  {
    id: 5,
    name: 'Premium Wizytówki',
    category: 'print',
    description: 'Wyróżnij się dzięki naszym wizytówkom premium z wysokiej jakości wykończeniem.',
    image: 'https://i.imgur.com/L91zTwB.png',
    prices: [
      { quantity: '100', price: '80 zł' },
      { quantity: '250', price: '150 zł' },
      { quantity: '500', price: '250 zł' },
    ],
    details: 'Nasze premium wizytówki to więcej niż kontakt - to pierwsze wrażenie Twojej marki. Oferujemy druk na papierach wysokiej gramaturze (300-350g), z możliwością wyboru wykończeń takich jak hot-stamping, lakier wybiórczy UV, soft-touch czy zaokrąglone rogi. Dostępne również w wersjach ekologicznych na papierze z recyklingu.'
  },
  {
    id: 6,
    name: 'Personalizowane Katalogi',
    category: 'print',
    description: 'Pięknie zaprojektowane katalogi, które elegancko prezentują Twoje produkty.',
    image: 'https://i.imgur.com/MVpEhRF.png',
    prices: [
      { quantity: '50', price: '15 zł/szt.' },
      { quantity: '100', price: '12 zł/szt.' },
      { quantity: '200+', price: '9 zł/szt.' },
    ],
    details: 'Katalogi produktowe to kompleksowa prezentacja Twojej oferty, która buduje profesjonalny wizerunek firmy. Drukowane na papierze kredowym błysk lub mat o gramaturze 130-170g z okładką na grubszym papierze (250-300g). Dostępne w różnych formatach (A4, A5, niestandardowe), z różnymi rodzajami oprawy: zeszytowa, klejona czy spiralna. Możliwość dodania specjalnych uszlachetnień jak folie, lakiery i tłoczenia.'
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
              className="bg-white rounded-xl overflow-hidden shadow-md hover-effect group relative"
            >
              <div className="aspect-[4/3] overflow-visible relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain absolute -top-6 scale-[1.15] transition-transform duration-500 group-hover:scale-[1.2]"
                />
                <div className="w-full h-full bg-gradient-to-b from-transparent to-white/30 absolute bottom-0"></div>
              </div>
              <div className="p-6 pt-16 relative z-10">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link 
                  to={`/product/${product.id}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-purple-600 transition-colors"
                >
                  Zobacz szczegóły <ChevronRight size={16} className="ml-1" />
                </Link>
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
