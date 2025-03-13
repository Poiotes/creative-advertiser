
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, Award, Truck, Clock } from 'lucide-react';

// Product categories and items
const categories = [
  { id: 'promo', name: 'Promotional Products' },
  { id: 'print', name: 'Print Materials' },
  { id: 'event', name: 'Event Essentials' },
];

const products = [
  {
    id: 1,
    name: 'Premium Beach Chairs',
    category: 'promo',
    description: 'Comfortable, branded beach chairs that make a statement at outdoor events.',
    image: 'https://images.unsplash.com/photo-1517646709561-1eec2bb78efa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Custom Lanyards',
    category: 'promo',
    description: 'High-quality lanyards with your brand logo, perfect for conferences and offices.',
    image: 'https://images.unsplash.com/photo-1622037022028-42f6d1938bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Multi-functional Bandanas',
    category: 'promo',
    description: 'Versatile branded bandanas that can be worn multiple ways.',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Event Wristbands',
    category: 'event',
    description: 'Durable, waterproof wristbands for event access and brand visibility.',
    image: 'https://images.unsplash.com/photo-1522152553310-a05a36c98be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    name: 'Premium Business Cards',
    category: 'print',
    description: 'Stand out with our premium finish, high-quality business cards.',
    image: 'https://images.unsplash.com/photo-1640420339253-7e2c9fefb4ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    name: 'Custom Catalogs',
    category: 'print',
    description: 'Beautifully designed catalogs that showcase your products elegantly.',
    image: 'https://images.unsplash.com/photo-1596443686652-3f923e5e25da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
            Our Product Range
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Premium Products</span> For Your Brand
          </h2>
          <p className="text-gray-600">
            From promotional items to beautiful print materials, we offer everything you need to make your brand stand out.
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
                  Request Quote <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="inline-block rounded-full px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all">
            Discuss Your Project
          </a>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center hover-effect">
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-5">
              <Award className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">
              We never compromise on quality, ensuring your promotional materials leave a lasting impression.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center hover-effect">
            <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center mb-5">
              <Truck className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              With our efficient production and delivery process, your products will reach you on time, every time.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center hover-effect">
            <div className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center mb-5">
              <Clock className="text-pink-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
            <p className="text-gray-600">
              Our team provides personalized service from design to delivery, ensuring your complete satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
