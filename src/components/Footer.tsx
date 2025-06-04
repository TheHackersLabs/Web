import React from 'react';
import { Terminal, Twitter, Github, Linkedin, Mail, Globe, Instagram } from 'lucide-react';
import { FaDiscord, FaTelegram, FaYoutube } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center">
              <Terminal className="h-8 w-8 text-[#ff6900]" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff6900] to-[#ff9500]">
                The Hackers Labs
              </span>            
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              {t('footer.description')}
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://x.com/thehackerslabs?s=21" className="text-gray-400 hover:text-[#1DA1F2] transition-colors duration-200 transform hover:scale-110">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://github.com/TheHackersLabs/" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/the-hackers-labs" className="text-gray-400 hover:text-[#0A66C2] transition-colors duration-200 transform hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/thehackerslabs?igsh=MTQwdmx3cmh2c3Nydw==" className="text-gray-400 hover:text-[#E4405F] transition-colors duration-200 transform hover:scale-110">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://discord.gg/3tpr7aZBfE" className="text-gray-400 hover:text-[#5865F2] transition-colors duration-200 transform hover:scale-110">
                <FaDiscord className="h-6 w-6" />
              </a>
              <a href="https://t.me/TheHackersLabs" className="text-gray-400 hover:text-[#26A5E4] transition-colors duration-200 transform hover:scale-110">
                <FaTelegram className="h-6 w-6" />
              </a>
              <a href="mailto:info@thehackerlabs.com" className="text-gray-400 hover:text-[#ff6900] transition-colors duration-200 transform hover:scale-110">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.training.title')}</h3>
            <ul className="space-y-2">
              <li><a href="https://labs.thehackerslabs.com/offensive" className="text-gray-400 hover:text-[#ff6900] transition-colors duration-200 text-sm">Seguridad Ofensiva</a></li>
              <li><a href="https://labs.thehackerslabs.com/defensive" className="text-gray-400 hover:text-[#ff6900] transition-colors duration-200 text-sm">Seguridad Defensiva</a></li>
              <li><a href="https://labs.thehackerslabs.com/osint" className="text-gray-400 hover:text-[#ff6900] transition-colors duration-200 text-sm">OSINT e Inteligencia</a></li>
              <li><a href="https://labs.thehackerslabs.com/reversing" className="text-gray-400 hover:text-[#ff6900] transition-colors duration-200 text-sm">Ingeniería Inversa</a></li>
              <li><a href="https://labs.thehackerslabs.com/android" className="text-gray-400 hover:text-[#ff6900] transition-colors duration-200 text-sm">Seguridad en Android</a></li>
              <li><a href="https://labs.thehackerslabs.com/ad" className="text-gray-400 hover:text-[#ff6900] transition-colors duration-200 text-sm">Active Directory</a></li>
              <li><a href="https://labs.thehackerslabs.com/wirelless" className="text-gray-400 hover:text-[#ff6900] transition-colors duration-200 text-sm">Seguridad en redes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.enterprise.title')}</h3>
            <ul className="space-y-2">
              <li><a href="#enterprise-section" className="text-gray-400 hover:text-[#ff6900] transition-colors duration-200 text-sm">{t('footer.enterprise.securityAssessment')}</a></li>
              <li><a href="#enterprise-section" className="text-gray-400 hover:text-[#ff6900] transition-colors duration-200 text-sm">{t('footer.enterprise.penetrationTesting')}</a></li>
              <li><a href="#enterprise-section" className="text-gray-400 hover:text-[#ff6900] transition-colors duration-200 text-sm">{t('footer.enterprise.customLabs')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.company.title')}</h3>
            <ul className="space-y-2">
              <li><a href="#team-section" className="text-gray-400 hover:text-[#ff6900] transition-colors duration-200 text-sm">{t('footer.company.aboutUs')}</a></li>
              <li><a href="https://blog.thehackerslabs.com/" className="text-gray-400 hover:text-[#ff6900] transition-colors duration-200 text-sm">{t('footer.company.blog')}</a></li>
              <li><a href="mailto:info@curiosidadesdehackers.com" className="text-gray-400 hover:text-[#ff6900] transition-colors duration-200 text-sm">{t('footer.company.contact')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} The Hackers Labs. {t('footer.rights')}
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="/privacy-policy" className="text-gray-500 hover:text-[#ff6900] transition-colors duration-200 text-sm">{t('footer.legal.privacy')}</a>
            <a href="/terms-of-service" className="text-gray-500 hover:text-[#ff6900] transition-colors duration-200 text-sm">{t('footer.legal.terms')}</a>
            <a href="#" className="text-gray-500 hover:text-[#ff6900] transition-colors duration-200 text-sm">{t('footer.legal.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;