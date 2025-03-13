
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share, Mail, Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { products } from '@/components/ProductsSection';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === parseInt(id || '0'));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Produkt nie został znaleziony</h1>
            <Link 
              to="/"
              className="inline-block rounded-full px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all"
            >
              Wróć do strony głównej
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 relative">
          {/* Background decorative elements */}
          <div className="absolute top-[5%] left-[5%] w-64 h-64 rounded-full bg-blue-200/30 blur-3xl -z-10"></div>
          <div className="absolute bottom-[10%] right-[5%] w-80 h-80 rounded-full bg-purple-200/30 blur-3xl -z-10"></div>

          {/* Breadcrumbs */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Strona główna</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/#products">Produkty</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>{product.name}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Back button */}
          <Link 
            to="/#products"
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-6"
          >
            <ArrowLeft size={16} className="mr-2" /> Wróć do wszystkich produktów
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Product image */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md p-8 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-h-[400px] object-contain hover-effect"
              />
            </div>

            {/* Product info */}
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-4">
                {categories.find(c => c.id === product.category)?.name}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-8">{product.description}</p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
                  <Mail size={18} /> Zapytaj o wycenę
                </Button>
                <Button variant="outline" className="gap-2 rounded-full">
                  <Share size={18} /> Udostępnij
                </Button>
                <Button variant="outline" className="gap-2 rounded-full">
                  <Download size={18} /> Pobierz specyfikację
                </Button>
              </div>

              <h2 className="text-xl font-semibold mb-4">Cennik</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ilość</TableHead>
                    <TableHead>Cena jednostkowa</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {product.prices.map((price, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{price.quantity}</TableCell>
                      <TableCell>{price.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="text-sm text-gray-500 mt-2">* Ceny netto, nie zawierają podatku VAT</p>
            </div>
          </div>

          {/* Product description */}
          <div className="bg-white rounded-xl p-8 shadow-md mb-12">
            <h2 className="text-2xl font-semibold mb-4">Szczegóły produktu</h2>
            <p className="text-gray-600 mb-6">{product.details}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-gray-100 rounded-lg p-4">
                <h3 className="font-medium mb-2">Opcje personalizacji</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Nadruk w pełnym kolorze</li>
                  <li>Haft logo</li>
                  <li>Grawerowanie laserowe</li>
                  <li>Tłoczenie</li>
                </ul>
              </div>
              <div className="border border-gray-100 rounded-lg p-4">
                <h3 className="font-medium mb-2">Czas realizacji</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Standardowy: 10-14 dni roboczych</li>
                  <li>Przyspieszony: 7-9 dni roboczych</li>
                  <li>Ekspresowy: 3-5 dni roboczych</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Zainteresowany tym produktem?</h2>
            <p className="mb-6 max-w-2xl mx-auto">Skontaktuj się z nami, aby omówić szczegóły zamówienia, możliwości personalizacji i uzyskać indywidualną wycenę.</p>
            <a 
              href="/#contact"
              className="inline-block bg-white text-blue-600 rounded-full px-8 py-3.5 font-medium hover:shadow-lg transition-all"
            >
              Skontaktuj się z nami
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const categories = [
  { id: 'promo', name: 'Produkty Promocyjne' },
  { id: 'print', name: 'Materiały Drukowane' },
  { id: 'event', name: 'Artykuły Eventowe' },
];

export default ProductPage;
