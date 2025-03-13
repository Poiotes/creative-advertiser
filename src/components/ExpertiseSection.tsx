
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  ShoppingBag, Briefcase, Calendar, PenTool, 
  Layout, Smile, ChevronRight, ChevronDown 
} from 'lucide-react';

const expertiseAreas = [
  {
    id: 'promotional',
    icon: ShoppingBag,
    title: 'Produkty Promocyjne',
    description: 'Od towarów z logo po upominki firmowe, tworzymy artykuły promocyjne, które pozostawiają trwałe wrażenie.',
    details: [
      'Leżaki plażowe, smycze i wielofunkcyjne chusty',
      'Upominki firmowe i branded merchandise',
      'Ekologiczne produkty promocyjne',
      'Akcesoria technologiczne i gadżety',
      'Niestandardowa odzież i produkty do noszenia'
    ]
  },
  {
    id: 'print',
    icon: PenTool,
    title: 'Materiały Drukowane',
    description: 'Wysokiej jakości materiały drukowane, zaprojektowane by wzmocnić obecność Twojej marki i wysiłki marketingowe.',
    details: [
      'Wizytówki, papiery firmowe i artykuły biurowe',
      'Broszury, katalogi i ulotki',
      'Plakaty, banery i oznakowanie',
      'Projektowanie i produkcja opakowań',
      'Raporty roczne i dokumenty firmowe'
    ]
  },
  {
    id: 'event',
    icon: Calendar,
    title: 'Artykuły Eventowe',
    description: 'Niezbędne artykuły do udanych eventów, od opasek po kompletne pakiety brandingowe na imprezy.',
    details: [
      'Personalizowane opaski i identyfikatory eventowe',
      'Brandowane namioty i stoiska eventowe',
      'Banery, flagi i oznakowanie kierunkowe',
      'Materiały konferencyjne i torby upominkowe',
      'Ceremonie wręczania nagród i artykuły uznaniowe'
    ]
  },
  {
    id: 'branding',
    icon: Layout,
    title: 'Rozwiązania Brandingowe',
    description: 'Kompleksowe rozwiązania brandingowe, które pomagają ustanowić i utrzymać spójną tożsamość marki.',
    details: [
      'Rozwój tożsamości marki',
      'Przewodniki stylu i standardy marki',
      'Wdrażanie tożsamości wizualnej',
      'Spójność marki we wszystkich materiałach',
      'Odświeżanie i rewitalizacja marki'
    ]
  },
  {
    id: 'corporate',
    icon: Briefcase,
    title: 'Usługi Korporacyjne',
    description: 'Specjalistyczne usługi zaprojektowane, aby spełnić unikalne potrzeby klientów korporacyjnych i dużych organizacji.',
    details: [
      'Niestandardowe upominki firmowe i programy uznaniowe',
      'Artykuły z logo firmy dla całej organizacji',
      'Pakiety na imprezy firmowe',
      'Materiały do komunikacji wewnętrznej',
      'Kampanie angażujące pracowników'
    ]
  },
  {
    id: 'customer',
    icon: Smile,
    title: 'Doświadczenia Klienta',
    description: 'Wzbogać doświadczenia klientów za pomocą brandowanych punktów styku, które zachwycają i angażują.',
    details: [
      'Pakiety powitalne dla klientów',
      'Opakowania z logo i doświadczenia rozpakowywania',
      'Materiały programów lojalnościowych',
      'Upominki i nagrody z podziękowaniami',
      'Punkty styku w podróży klienta'
    ]
  }
];

const ExpertiseSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="expertise" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-[10%] right-[5%] w-64 h-64 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute bottom-[10%] left-[5%] w-80 h-80 rounded-full bg-purple-200/30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-4">
            Nasze Specjalizacje
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Eksperckie Rozwiązania</span> Na Każdą Potrzebę
          </h2>
          <p className="text-gray-600">
            Odkryj nasz szeroki zakres obszarów specjalizacji, które pomagają firmom każdej wielkości osiągnąć ich cele marketingowe i brandingowe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area) => {
            const IconComponent = area.icon;
            const isExpanded = expandedId === area.id;
            
            return (
              <div 
                key={area.id}
                className={cn(
                  "bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300",
                  isExpanded ? "lg:col-span-2 lg:row-span-2" : ""
                )}
              >
                <div className="p-8">
                  <div className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all",
                    isExpanded 
                      ? "bg-gradient-to-r from-blue-600 to-purple-600" 
                      : "bg-blue-50"
                  )}>
                    <IconComponent 
                      size={28} 
                      className={isExpanded ? "text-white" : "text-blue-600"} 
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                  <p className="text-gray-600 mb-6">{area.description}</p>
                  
                  <button 
                    onClick={() => toggleExpand(area.id)}
                    className="flex items-center text-blue-600 font-medium hover:text-purple-600 transition-colors"
                  >
                    {isExpanded ? "Pokaż mniej" : "Dowiedz się więcej"}
                    {isExpanded 
                      ? <ChevronDown size={16} className="ml-1" /> 
                      : <ChevronRight size={16} className="ml-1" />
                    }
                  </button>
                  
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <h4 className="font-medium mb-4">Nasze {area.title} obejmują:</h4>
                      <ul className="space-y-3">
                        {area.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                              <Check size={12} className="text-white" />
                            </div>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8">
                        <a 
                          href="#contact" 
                          className="inline-block rounded-full px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all"
                        >
                          Omów swój projekt
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// This is imported from lucide-react but defined here for clarity
const Check = ({ size = 24, className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};

export default ExpertiseSection;
