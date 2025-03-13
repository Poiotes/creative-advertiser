
import React from 'react';
import { Check } from 'lucide-react';

const AboutSection = () => {
  const expertise = [
    "Premium promotional product design and production",
    "Custom print solutions for businesses of all sizes",
    "Brand-consistent advertising materials",
    "High-quality event essentials",
    "Eco-friendly and sustainable product options",
    "Comprehensive branding solutions"
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
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Poiotes team at work" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-4">
              About Poiotes
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Partner For <span className="text-gradient">Premium Advertising</span> Solutions
            </h2>
            
            <p className="text-gray-600 mb-6">
              Poiotes was founded with a clear mission: to provide businesses with high-quality promotional products that truly represent their brand values. With over 15 years of experience in the industry, we've helped hundreds of companies enhance their marketing efforts through premium advertising materials.
            </p>
            
            <p className="text-gray-600 mb-8">
              Our dedicated team of designers and production specialists work closely with each client to create custom solutions that make a lasting impression. We believe that every touchpoint with your audience matters, which is why we focus on delivering products that are not just visually appealing but also functional and memorable.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Our Expertise</h3>
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
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
