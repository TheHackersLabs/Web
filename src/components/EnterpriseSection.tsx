import React from 'react';
import { useTranslation } from 'react-i18next';
import { Building, Users, ShieldCheck, FileCheck, GraduationCap, Slice as Police, Trophy } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-gray-800 hover:border-[#ff6900] transition-all duration-300 group">
      <div className="text-[#ff6900] mb-4 group-hover:scale-110 transform transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff6900] transition-colors duration-200">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const EnterpriseSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
        <div id="enterprise-section" className="py-20">

    <div className="relative bg-black bg-opacity-95 py-20">
      {/* Background effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#ff690033] text-[#ff6900] mb-4">
              {t('enterprise.forOrganizations')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('enterprise.title')} <span className="text-[#ff6900]">{t('enterprise.subtitle')}</span>
            </h2>
            <p className="text-gray-400 mb-8">
              {t('enterprise.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-[#ff6900]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-400">
                  {t('enterprise.features.customTraining')}
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-[#ff6900]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-400">
                  {t('enterprise.features.certification')}
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-[#ff6900]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-400">
                  {t('enterprise.features.tracking')}
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-[#ff6900]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-400">
                  {t('enterprise.features.support')}
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="mailto:info@thehackerslabs.com" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-[#ff6900] hover:bg-[#ff8c00] transition-all duration-200 shadow-lg shadow-[#ff690033]"
              >
                {t('enterprise.requestDemo')}
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ServiceCard 
              title={t('enterprise.services.corporateTraining.title')}
              description={t('enterprise.services.corporateTraining.description')}
              icon={<Building className="h-10 w-10" />}
            />
            <ServiceCard 
              title={t('enterprise.services.studentTraining.title')}
              description={t('enterprise.services.studentTraining.description')}
              icon={<GraduationCap className="h-10 w-10" />}
            />
            <ServiceCard 
              title={t('enterprise.services.lawEnforcement.title')}
              description={t('enterprise.services.lawEnforcement.description')}
              icon={<Police className="h-10 w-10" />}
            />
            <ServiceCard 
              title={t('enterprise.services.customCtf.title')}
              description={t('enterprise.services.customCtf.description')}
              icon={<Trophy className="h-10 w-10" />}
            />
          </div>
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-black p-8 rounded-lg border border-gray-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">{t('enterprise.trustedBy.title')}</h3>
            <p className="text-gray-400">{t('enterprise.trustedBy.description')}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
            <div className="h-12 w-32 bg-gray-800 rounded flex items-center justify-center">
            <img src="/static/images/2.png " alt="Company 4" className="h-full w-auto object-contain" />            </div>
            <div className="h-12 w-32 bg-gray-800 rounded flex items-center justify-center">
            <img src="/static/images/22.webp " alt="Company 4" className="h-full w-auto object-contain" />            </div>
            <div className="h-12 w-32 bg-gray-800 rounded flex items-center justify-center">
            <img src="/static/images/23.png " alt="Company 4" className="h-full w-auto object-contain" />
                        </div>
            <div className="h-12 w-32 bg-gray-800 rounded flex items-center justify-center">
            <img src="/static/images/1.png " alt="Company 4" className="h-full w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>

  );
};

export default EnterpriseSection;