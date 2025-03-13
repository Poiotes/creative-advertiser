
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center relative py-20">
        {/* Background decorative elements */}
        <div className="absolute top-[20%] right-[5%] w-64 h-64 rounded-full bg-blue-200/30 blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[5%] w-80 h-80 rounded-full bg-purple-200/30 blur-3xl"></div>
        
        <div className="text-center max-w-md mx-auto px-4 relative z-10">
          <div className="w-32 h-32 bg-gray-50 rounded-full mx-auto mb-8 flex items-center justify-center">
            <span className="text-7xl font-bold text-gradient">404</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved. Please check the URL or navigate back to the home page.
          </p>
          <Link 
            to="/" 
            className="inline-block rounded-full px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
