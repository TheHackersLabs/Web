import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const { t } = useTranslation();
  
  useEffect(() => {
    setVisible(true);
    
    let index = 0;
    const fullText = t('hero.subtitle');
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, [t]);

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black z-10"></div>
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-[#ff6900] opacity-10 blur-[100px] rounded-full"></div>

      <div 
        className={`relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center transition-all duration-1000 transform ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="flex justify-center mb-8">
          <img 
            src="/static/images/Logo.png" 
            alt="The Hackers Labs Logo" 
            className="h-32 w-32 rounded-full object-cover border-2 border-[#ff6900] shadow-lg shadow-[#ff690066]"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {t('hero.title')}
        </h1>
        
        <div className="h-12 mb-8">
          <p className="text-xl md:text-3xl text-gray-300 font-mono">
            {typedText}
            <span className="inline-block w-2 h-5 bg-[#ff6900] ml-1 animate-blink"></span>
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <a 
            href="https://labs.thehackerslabs.com/" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-[#ff6900] hover:bg-[#ff8c00] transition-all duration-200 shadow-lg shadow-[#ff690033] hover:shadow-[#ff690066] transform hover:-translate-y-1"
          >
            {t('hero.startTraining')}
          </a>
<a 
  href="#enterprise-section" 
  className="inline-flex items-center justify-center px-8 py-3 border border-[#ff6900] text-base font-medium rounded-md text-[#ff6900] bg-transparent hover:bg-[#ff690015] transition-all duration-200 mt-4 sm:mt-0"
>
  {t('hero.enterpriseSolutions')} {/* O el texto adecuado que desees mostrar */}
</a>
        </div>
        
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-4xl font-bold text-white">300+</div>
            <div className="text-sm text-gray-400">{t('hero.stats.challenges')}</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-4xl font-bold text-white">50k+</div>
            <div className="text-sm text-gray-400">{t('hero.stats.users')}</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-4xl font-bold text-white">100+</div>
            <div className="text-sm text-gray-400">{t('hero.stats.clients')}</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-4xl font-bold text-white">24/7</div>
            <div className="text-sm text-gray-400">{t('hero.stats.access')}</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-[#ff6900] flex justify-center">
          <div className="w-1 h-3 bg-[#ff6900] rounded-full mt-2 animate-scrollIndicator"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;