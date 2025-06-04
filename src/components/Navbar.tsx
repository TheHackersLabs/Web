import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Shield, Building, GraduationCap as Graduation, Languages, FlaskRound as Flask, ShoppingCart, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black bg-opacity-95 shadow-lg shadow-[#ff690033]' 
          : 'bg-transparent'
      }`}
      
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-4">
            <div className="text-white font-bold text-xl flex items-center">
              <img 
                src="/static/images/Logo.png" 
                alt="The Hackers Labs Logo"
                className="h-8 w-8 mr-2 rounded-full"
                
              />
<a href="https://thehackerslabs.com">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff6900] to-[#ff9500]">
    The Hackers Labs
  </span>
</a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('labs')}
                  className="text-gray-300 hover:text-[#ff6900] px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200"
                >
                  <Graduation className="h-4 w-4 mr-1" />
                  {t('nav.labs')}
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === 'labs' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'labs' && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-black bg-opacity-95 ring-1 ring-black ring-opacity-5 overflow-hidden transform transition-all duration-200 origin-top-right">
                    <div className="py-1">
                      <a href="https://labs.thehackerslabs.com/offensive" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#ff690033] hover:text-[#ff6900] transition-colors duration-200">Seguridad Ofensiva</a>
                      <a href="https://labs.thehackerslabs.com/defensive" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#ff690033] hover:text-[#ff6900] transition-colors duration-200">Seguridad Defensiva</a>
                      <a href="https://labs.thehackerslabs.com/osint" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#ff690033] hover:text-[#ff6900] transition-colors duration-200">OSINT e Inteligencia</a>
                      <a href="https://labs.thehackerslabs.com/reversing" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#ff690033] hover:text-[#ff6900] transition-colors duration-200">Ingeniería Inversa</a>
                      <a href="https://labs.thehackerslabs.com/android" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#ff690033] hover:text-[#ff6900] transition-colors duration-200">Seguridad en Android</a>
                      <a href="https://labs.thehackerslabs.com/ad" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#ff690033] hover:text-[#ff6900] transition-colors duration-200">Active Directory</a>
                      <a href="https://labs.thehackerslabs.com/wirelless" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#ff690033] hover:text-[#ff6900] transition-colors duration-200">Seguridad en redes</a>

                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('enterprise')}
                  className="text-gray-300 hover:text-[#ff6900] px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200"
                >
                  <Building className="h-4 w-4 mr-1" />
                  {t('nav.enterprise')}
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === 'enterprise' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'enterprise' && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-black bg-opacity-95 ring-1 ring-black ring-opacity-5 overflow-hidden transform transition-all duration-200 origin-top-right">
                    <div className="py-1">
<a href="#" class="block px-4 py-2 text-sm text-gray-300 hover:bg-[#ff690033] hover:text-[#ff6900] transition-colors duration-200">Formación Corporativa</a>
<a href="#" class="block px-4 py-2 text-sm text-gray-300 hover:bg-[#ff690033] hover:text-[#ff6900] transition-colors duration-200">Formación Estudiantil</a>
<a href="#" class="block px-4 py-2 text-sm text-gray-300 hover:bg-[#ff690033] hover:text-[#ff6900] transition-colors duration-200">Formación para Fuerzas del Orden</a>
<a href="#" class="block px-4 py-2 text-sm text-gray-300 hover:bg-[#ff690033] hover:text-[#ff6900] transition-colors duration-200">Eventos Personalizados de CTF</a>

                    </div>
                  </div>
                )}
              </div>

              <a href="https://shop.thehackerslabs.com/" className="text-gray-300 hover:text-[#ff6900] px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200">
                <ShoppingCart className="h-4 w-4 mr-1" />
                {t('nav.shop')}
              </a>

              <a href="https://blog.thehackerslabs.com/" className="text-gray-300 hover:text-[#ff6900] px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200">
                <BookOpen className="h-4 w-4 mr-1" />
                {t('nav.blog')}
              </a>

<a 
  href="#team-section" 
  className="text-gray-300 hover:text-[#ff6900] px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200"
>
  <Shield className="h-4 w-4 mr-1" />
  {t('nav.aboutUs')}
</a>

              <button
                onClick={toggleLanguage}
                className="text-gray-300 hover:text-[#ff6900] px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200"
              >
                <Languages className="h-4 w-4 mr-1" />
                {i18n.language === 'en' ? 'ES' : 'EN'}
              </button>
              
              <a href="https://labs.thehackerslabs.com/" className="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-[#ff6900] hover:bg-[#ff8c00] transition-colors duration-200">
                {t('nav.signUp')}
              </a>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="text-gray-300 hover:text-[#ff6900] p-2 rounded-md transition-colors duration-200"
            >
              <Languages className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#ff6900] hover:text-white hover:bg-[#ff690033] focus:outline-none transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-95">
          <button
            onClick={() => toggleDropdown('labs-mobile')}
            className="w-full text-left text-gray-300 hover:text-[#ff6900] block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between transition-colors duration-200"
          >
            <span className="flex items-center">
              <Graduation className="h-5 w-5 mr-2" /> {t('nav.labs')}
            </span>
            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${activeDropdown === 'labs-mobile' ? 'rotate-180' : ''}`} />
          </button>
          
          {activeDropdown === 'labs-mobile' && (
            <div className="pl-6 space-y-1">
                      <a href="https://labs.thehackerslabs.com/offensive" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#ff690033] hover:text-[#ff6900] transition-colors duration-200">Seguridad Ofensiva</a>
                      <a href="https://labs.thehackerslabs.com/defensive" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#ff690033] hover:text-[#ff6900] transition-colors duration-200">Seguridad Defensiva</a>
                      <a href="https://labs.thehackerslabs.com/osint" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#ff690033] hover:text-[#ff6900] transition-colors duration-200">OSINT e Inteligencia</a>
                      <a href="https://labs.thehackerslabs.com/reversing" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#ff690033] hover:text-[#ff6900] transition-colors duration-200">Ingeniería Inversa</a>
                      <a href="https://labs.thehackerslabs.com/android" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#ff690033] hover:text-[#ff6900] transition-colors duration-200">Seguridad en Android</a>
                      <a href="https://labs.thehackerslabs.com/ad" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#ff690033] hover:text-[#ff6900] transition-colors duration-200">Active Directory</a>
                      <a href="https://labs.thehackerslabs.com/wirelless" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#ff690033] hover:text-[#ff6900] transition-colors duration-200">Seguridad en redes</a>
                    </div>
          )}
          
          <button
            onClick={() => toggleDropdown('enterprise-mobile')}
            className="w-full text-left text-gray-300 hover:text-[#ff6900] block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between transition-colors duration-200"
          >
            <span className="flex items-center">
              <Building className="h-5 w-5 mr-2" /> {t('nav.enterprise')}
            </span>
            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${activeDropdown === 'enterprise-mobile' ? 'rotate-180' : ''}`} />
          </button>
          
          {activeDropdown === 'enterprise-mobile' && (
            <div className="pl-6 space-y-1">
<a href="#" class="block px-4 py-2 text-sm text-gray-300 hover:bg-[#ff690033] hover:text-[#ff6900] transition-colors duration-200">Formación Corporativa</a>
<a href="#" class="block px-4 py-2 text-sm text-gray-300 hover:bg-[#ff690033] hover:text-[#ff6900] transition-colors duration-200">Formación Estudiantil</a>
<a href="#" class="block px-4 py-2 text-sm text-gray-300 hover:bg-[#ff690033] hover:text-[#ff6900] transition-colors duration-200">Formación para Fuerzas del Orden</a>
<a href="#" class="block px-4 py-2 text-sm text-gray-300 hover:bg-[#ff690033] hover:text-[#ff6900] transition-colors duration-200">Eventos Personalizados de CTF</a>
            </div>
          )}

          <a href="https://shop.thehackerslabs.com/" className="text-gray-300 hover:text-[#ff6900] block px-3 py-2 rounded-md text-base font-medium flex items-center transition-colors duration-200">
            <ShoppingCart className="h-5 w-5 mr-2" /> {t('nav.shop')}
          </a>

          <a href="https://blog.thehackerslabs.com/" className="text-gray-300 hover:text-[#ff6900] block px-3 py-2 rounded-md text-base font-medium flex items-center transition-colors duration-200">
            <BookOpen className="h-5 w-5 mr-2" /> {t('nav.blog')}
          </a>
          
          <a href="#team-section" className="text-gray-300 hover:text-[#ff6900] block px-3 py-2 rounded-md text-base font-medium flex items-center transition-colors duration-200">
            <Shield className="h-5 w-5 mr-2" /> {t('nav.aboutUs')}
          </a>
          
          <a href="https://labs.thehackerslabs.com/" className="block w-full text-center mt-4 px-4 py-2 border border-transparent text-base font-medium rounded-md text-black bg-[#ff6900] hover:bg-[#ff8c00] transition-colors duration-200">
            {t('nav.signUp')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;