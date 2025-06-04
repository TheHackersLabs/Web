import React from 'react';
import { useTranslation } from 'react-i18next';
import { Terminal, Monitor, Smartphone } from 'lucide-react';

interface TrainingCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  link: string;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ title, description, icon, delay, link }) => {
  const { t } = useTranslation();
  
  return (
    <div 
      className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-[#ff6900] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#ff690033] group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 rounded-full bg-black text-[#ff6900] group-hover:bg-[#ff6900] group-hover:text-black transition-all duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff6900] transition-colors duration-300">{title}</h3>
      <p className="text-gray-400">{description}</p>
      <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center">
        <span className="text-sm text-gray-500">{t('training.modules', { count: 12 })}</span>
        <a 
          href={link}
          className="text-[#ff6900] hover:text-[#ff8c00] text-sm font-medium transition-colors duration-200"
        >
          {t('training.viewTrack')} →
        </a>
      </div>
    </div>
  );
};

const TrainingSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('training.operatingSystemsTitle')} <span className="text-[#ff6900]">{t('training.operatingSystemsSubtitle')}</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            {t('training.operatingSystemsDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TrainingCard
            title={t('training.operatingSystems.linux.title')}
            description={t('training.operatingSystems.linux.description')}
            icon={<Terminal className="h-6 w-6" />}
            delay={100}
            link="https://labs.thehackerslabs.com/linux"
          />
          <TrainingCard
            title={t('training.operatingSystems.windows.title')}
            description={t('training.operatingSystems.windows.description')}
            icon={<Monitor className="h-6 w-6" />}
            delay={200}
            link="https://labs.thehackerslabs.com/windows"
          />
          <TrainingCard
            title={t('training.operatingSystems.android.title')}
            description={t('training.operatingSystems.android.description')}
            icon={<Smartphone className="h-6 w-6" />}
            delay={300}
            link="https://labs.thehackerslabs.com/android"
          />
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://labs.thehackerslabs.com/" 
            className="inline-flex items-center justify-center px-8 py-3 border border-[#ff6900] text-base font-medium rounded-md text-[#ff6900] bg-transparent hover:bg-[#ff690015] transition-all duration-200"
          >
            {t('training.viewAllTracks')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrainingSection;