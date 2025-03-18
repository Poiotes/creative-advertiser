
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share, Mail, Download, Check, PenTool, Zap, Award, Shield, RefreshCw } from 'lucide-react';
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

  useEffect(() => {
    // Update page title and meta description for SEO
    if (product) {
      document.title = `${product.name} | Poiotes - Wysokiej jakości materiały promocyjne`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `${product.name} - ${product.description}. Najwyższa jakość, szybka realizacja, konkurencyjne ceny.`);
      }
    }
  }, [product]);

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
              
              {/* Schema structured data for SEO */}
              <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org/",
                  "@type": "Product",
                  "name": product.name,
                  "description": product.description,
                  "brand": {
                    "@type": "Brand",
                    "name": "Poiotes"
                  },
                  "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "PLN",
                    "lowPrice": product.prices[0].price.replace(' zł', '').replace(',', '.'),
                    "highPrice": product.prices[product.prices.length-1].price.replace(' zł', '').replace(',', '.'),
                    "offerCount": product.prices.length
                  }
                })
              }} />
              
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
          
          {/* NEW: Benefits Section */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Dlaczego warto wybrać nasze {product.name}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Najwyższa jakość</h3>
                <p className="text-gray-600">Używamy tylko najlepszych materiałów i najnowszych technologii produkcji.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <PenTool className="text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Personalizacja</h3>
                <p className="text-gray-600">Pełne możliwości dostosowania projektu do Twoich potrzeb i wymagań marki.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Szybka realizacja</h3>
                <p className="text-gray-600">Sprawny proces od projektu do realizacji, z opcją ekspresowej dostawy.</p>
              </div>
            </div>
          </div>

          {/* NEW: Features Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-8 text-center">Kluczowe cechy produktu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <Check className="text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Trwałość i wytrzymałość</h3>
                  <p className="text-gray-600">Nasze {product.name} są zaprojektowane z myślą o długotrwałym użytkowaniu, nawet w niesprzyjających warunkach.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <Check className="text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Profesjonalny wygląd</h3>
                  <p className="text-gray-600">Eleganckie wykończenie i dbałość o detale sprawiają, że produkt doskonale reprezentuje Twoją markę.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <Check className="text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Zgodność z normami</h3>
                  <p className="text-gray-600">Wszystkie materiały posiadają niezbędne certyfikaty i spełniają europejskie standardy jakości.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <Check className="text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Konkurencyjna cena</h3>
                  <p className="text-gray-600">Oferujemy najlepszy stosunek jakości do ceny na rynku, z dodatkowymi rabatami przy większych zamówieniach.</p>
                </div>
              </div>
            </div>
          </div>

          {/* NEW: Process Section */}
          <div className="bg-white rounded-xl p-8 shadow-md mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Jak wygląda proces współpracy?</h2>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-center gap-4">
              <div className="flex flex-col items-center max-w-[200px] mx-auto">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <span className="font-bold text-blue-600">01</span>
                </div>
                <h3 className="font-medium mb-2">Konsultacja</h3>
                <p className="text-sm text-gray-600">Ustalamy szczegóły projektu i potrzeby</p>
              </div>
              <div className="hidden md:block w-12 h-0.5 bg-gray-200"></div>
              <div className="flex flex-col items-center max-w-[200px] mx-auto">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <span className="font-bold text-blue-600">02</span>
                </div>
                <h3 className="font-medium mb-2">Projekt</h3>
                <p className="text-sm text-gray-600">Przygotowanie wizualizacji i akceptacja</p>
              </div>
              <div className="hidden md:block w-12 h-0.5 bg-gray-200"></div>
              <div className="flex flex-col items-center max-w-[200px] mx-auto">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <span className="font-bold text-blue-600">03</span>
                </div>
                <h3 className="font-medium mb-2">Produkcja</h3>
                <p className="text-sm text-gray-600">Realizacja zamówienia z kontrolą jakości</p>
              </div>
              <div className="hidden md:block w-12 h-0.5 bg-gray-200"></div>
              <div className="flex flex-col items-center max-w-[200px] mx-auto">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <span className="font-bold text-blue-600">04</span>
                </div>
                <h3 className="font-medium mb-2">Dostawa</h3>
                <p className="text-sm text-gray-600">Bezpieczne pakowanie i szybka wysyłka</p>
              </div>
            </div>
          </div>

          {/* NEW: FAQ Section */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Często zadawane pytania</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Jaki jest minimalny nakład zamówienia?</h3>
                <p className="text-gray-600">Minimalny nakład zależy od rodzaju produktu i wybranej metody personalizacji. W przypadku {product.name} minimalne zamówienie to zazwyczaj 50 sztuk.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Czy mogę otrzymać próbkę przed złożeniem większego zamówienia?</h3>
                <p className="text-gray-600">Tak, oferujemy możliwość zamówienia pojedynczych próbek dla klientów biznesowych, aby mogli ocenić jakość przed złożeniem większego zamówienia.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Jakie formaty plików są akceptowane dla projektów graficznych?</h3>
                <p className="text-gray-600">Akceptujemy pliki w formatach wektorowych (AI, EPS, PDF) oraz rastrowych o wysokiej rozdzielczości (TIFF, PSD, PNG z min. 300 dpi).</p>
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
