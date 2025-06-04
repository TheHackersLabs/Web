import React from 'react';
import { useTranslation } from 'react-i18next';
import { Trophy, Users, Clock, Target } from 'lucide-react';

const CTFSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('ctf.title')} <span className="text-[#ff6900]">{t('ctf.subtitle')}</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            {t('ctf.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#ff6900] transition-all duration-300">
            <div className="text-[#ff6900] mb-4">
              <Trophy className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t('ctf.features.competition.title')}</h3>
            <p className="text-gray-400">{t('ctf.features.competition.description')}</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#ff6900] transition-all duration-300">
            <div className="text-[#ff6900] mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t('ctf.features.teams.title')}</h3>
            <p className="text-gray-400">{t('ctf.features.teams.description')}</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#ff6900] transition-all duration-300">
            <div className="text-[#ff6900] mb-4">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t('ctf.features.realtime.title')}</h3>
            <p className="text-gray-400">{t('ctf.features.realtime.description')}</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#ff6900] transition-all duration-300">
            <div className="text-[#ff6900] mb-4">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t('ctf.features.challenges.title')}</h3>
            <p className="text-gray-400">{t('ctf.features.challenges.description')}</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-8 py-3 border border-[#ff6900] text-base font-medium rounded-md text-[#ff6900] bg-transparent hover:bg-[#ff690015] transition-all duration-200"
          >
<a href="mailto:info@thehackerlabs.com" className="text-[#ff6900] hover:text-[#ff8c00] transition-all duration-200">
  {t('ctf.contactUs')}
</a>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTFSection;