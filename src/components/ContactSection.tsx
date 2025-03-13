
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    submitted: false,
    loading: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, loading: true }));
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formState);
      setFormState(prev => ({ 
        ...prev, 
        loading: false,
        submitted: true,
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      }));
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({ ...prev, submitted: false }));
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute bottom-[10%] right-[5%] w-80 h-80 rounded-full bg-purple-200/30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-4">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Skontaktuj się</span> W Sprawie Twojego Projektu
          </h2>
          <p className="text-gray-600">
            Gotowy, aby wyróżnić swoją markę za pomocą premium produktów promocyjnych? Wypełnij poniższy formularz, a nasz zespół wkrótce się z Tobą skontaktuje.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md p-8 relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-xl"></div>
            
            {formState.submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Check size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-center">Wiadomość wysłana pomyślnie!</h3>
                <p className="text-gray-600 text-center max-w-md">
                  Dziękujemy za kontakt z Poiotes. Nasz zespół przeanalizuje Twoją wiadomość i wkrótce się z Tobą skontaktuje.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Imię i nazwisko*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Adres e-mail*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="jan@przyklad.pl"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Numer telefonu
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="+48 123 456 789"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Nazwa firmy
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="Twoja Firma"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Twoja wiadomość*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    placeholder="Opowiedz nam o swoim projekcie i wymaganiach..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formState.loading}
                  className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all flex items-center justify-center disabled:opacity-70"
                >
                  {formState.loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Przetwarzanie...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Wyślij wiadomość
                      <Send size={16} className="ml-2" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6">Informacje kontaktowe</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Nasze biuro</h4>
                    <p className="text-gray-600">
                      ul. Reklamowa 123<br />
                      Dzielnica Marketingowa<br />
                      00-001 Warszawa
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-600">info@poiotes.pl</p>
                    <p className="text-gray-600">sprzedaz@poiotes.pl</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-pink-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Telefon</h4>
                    <p className="text-gray-600">+48 123 456 789</p>
                    <p className="text-gray-600">+48 987 654 321</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold mb-6">Godziny pracy</h3>
              
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span className="text-gray-600">Poniedziałek - Piątek</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Sobota</span>
                  <span className="font-medium">10:00 - 16:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Niedziela</span>
                  <span className="font-medium">Zamknięte</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-medium mb-2">Potrzebujesz pilnej pomocy?</h4>
                <p className="text-gray-600 mb-4">
                  W przypadku pilnych zapytań poza godzinami pracy, prosimy o kontakt mailowy na wsparcie@poiotes.pl
                </p>
                <a 
                  href="mailto:wsparcie@poiotes.pl" 
                  className="inline-block text-blue-600 font-medium hover:text-purple-600 transition-colors"
                >
                  Wyślij email →
                </a>
              </div>
            </div>
          </div>
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

export default ContactSection;
