
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogData';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Poradniki Drukarskie | Poiotes</title>
        <meta name="description" content="Porady i wskazówki jak prawidłowo przygotowywać pliki do druku. Sprawdź nasze artykuły o formatach, rozdzielczości i innych aspektach technicznych." />
        <meta name="keywords" content="przygotowanie plików do druku, DTP, poradnik drukarski, CMYK, RGB, rozdzielczość druku" />
      </Helmet>

      <Navbar />
      
      <main className="pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Hero Section */}
          <section className="py-12 md:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Poradniki drukarskie</h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Dowiedz się jak prawidłowo przygotowywać pliki do druku i uniknij najczęstszych błędów.
                Dzielimy się wiedzą o standardach branżowych i najlepszych praktykach.
              </p>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={post.coverImage} 
                      alt={post.title} 
                      className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime} min czytania</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="flex items-center text-blue-600 hover:text-blue-800 font-medium mt-auto"
                    >
                      Czytaj więcej <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
