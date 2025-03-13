
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
    title: 'Promotional Products',
    description: 'From branded merchandise to corporate gifts, we create promotional items that leave a lasting impression.',
    details: [
      'Beach chairs, lanyards, and multi-functional bandanas',
      'Corporate gifts and branded merchandise',
      'Eco-friendly promotional products',
      'Tech accessories and gadgets',
      'Custom apparel and wearables'
    ]
  },
  {
    id: 'print',
    icon: PenTool,
    title: 'Print Materials',
    description: 'High-quality print materials designed to enhance your brand presence and marketing efforts.',
    details: [
      'Business cards, letterheads, and stationery',
      'Brochures, catalogs, and flyers',
      'Posters, banners, and signage',
      'Packaging design and production',
      'Annual reports and corporate documents'
    ]
  },
  {
    id: 'event',
    icon: Calendar,
    title: 'Event Essentials',
    description: 'Essential items for successful events, from wristbands to complete event branding packages.',
    details: [
      'Custom event wristbands and badges',
      'Branded event tents and booths',
      'Banners, flags, and directional signage',
      'Conference materials and gift bags',
      'Award ceremonies and recognition items'
    ]
  },
  {
    id: 'branding',
    icon: Layout,
    title: 'Branding Solutions',
    description: 'Comprehensive branding solutions to help you establish and maintain a consistent brand identity.',
    details: [
      'Brand identity development',
      'Style guides and brand standards',
      'Visual identity implementation',
      'Brand consistency across all materials',
      'Brand refresh and revitalization'
    ]
  },
  {
    id: 'corporate',
    icon: Briefcase,
    title: 'Corporate Services',
    description: 'Specialized services designed to meet the unique needs of corporate clients and large organizations.',
    details: [
      'Custom corporate gifts and recognition programs',
      'Company-wide branded merchandise',
      'Corporate event packages',
      'Internal communication materials',
      'Employee engagement campaigns'
    ]
  },
  {
    id: 'customer',
    icon: Smile,
    title: 'Customer Experience',
    description: 'Enhance your customer experience with branded touchpoints that delight and engage.',
    details: [
      'Customer welcome packages',
      'Branded packaging and unboxing experiences',
      'Loyalty program materials',
      'Thank you gifts and rewards',
      'Customer journey touchpoints'
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
            Our Specializations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Expert Solutions</span> For Every Need
          </h2>
          <p className="text-gray-600">
            Discover our wide range of expertise areas that help businesses of all sizes achieve their marketing and branding goals.
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
                    {isExpanded ? "View Less" : "Learn More"}
                    {isExpanded 
                      ? <ChevronDown size={16} className="ml-1" /> 
                      : <ChevronRight size={16} className="ml-1" />
                    }
                  </button>
                  
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <h4 className="font-medium mb-4">Our {area.title} include:</h4>
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
                          Discuss Your Project
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
