import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, ShieldAlert, Search, Code, Smartphone, Server, Globe, Wifi } from 'lucide-react';

const TrainingCategories: React.FC = () => {
  const { t } = useTranslation();

  const categories = [
    {
      id: 'offensive',
      icon: <Shield className="h-12 w-12" />,
      machines: '+100',
      difficulty: '',
      link: 'https://labs.thehackerslabs.com/offensive'
    },
    {
      id: 'defensive',
      icon: <ShieldAlert className="h-12 w-12" />,
      machines: '+100',
      difficulty: '',
      link: 'https://labs.thehackerslabs.com/defensive'
    },
    {
      id: 'osint',
      icon: <Search className="h-12 w-12" />,
      machines: '+100',
      difficulty: '',
      link: 'https://labs.thehackerslabs.com/osint'
    },
    {
      id: 'reversing',
      icon: <Code className="h-12 w-12" />,
      machines: '+100',
      difficulty: '',
      link: 'https://labs.thehackerslabs.com/reversing'
    },
    {
      id: 'android',
      icon: <Smartphone className="h-12 w-12" />,
      machines: '+100',
      difficulty: '',
      link: 'https://labs.thehackerslabs.com/android'
    },
    {
      id: 'activeDirectory',
      icon: <Server className="h-12 w-12" />,
      machines: '+100',
      difficulty: '',
      link: 'https://labs.thehackerslabs.com/ad'
    },
    {
      id: 'hackingWeb',
      icon: <Globe className="h-12 w-12" />,
      machines: '+100',
      difficulty: '',
      link: 'https://labs.thehackerslabs.com/web'
    },
    {
      id: 'wireless',
      icon: <Wifi className="h-12 w-12" />,
      machines: '+100',
      difficulty: '',
      link: 'https://labs.thehackerslabs.com/wirelless'
    }
  ];

  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('training.title')} <span className="text-[#ff6900]">{t('training.subtitle')}</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            {t('training.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="bg-gray-900 rounded-xl p-6 transform hover:-translate-y-2 transition-all duration-300 border border-gray-800 hover:border-[#ff6900] group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 bg-black rounded-lg text-[#ff6900] group-hover:bg-[#ff6900] group-hover:text-black transition-all duration-300">
                  {category.icon}
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-400">{category.machines} laboratorios</span>
                  <div className="mt-1 text-xs px-2 py-1 rounded bg-[#ff690033] text-[#ff6900]">
                    {category.difficulty}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff6900] transition-colors duration-200">
                {t(`training.categories.${category.id}.title`)}
              </h3>
              <p className="text-gray-400 mb-6">
                {t(`training.categories.${category.id}.description`)}
              </p>

              <div className="mt-auto">
                <a 
                  href={category.link}
                  className="block w-full py-3 px-4 bg-black text-[#ff6900] rounded-lg border border-[#ff6900] hover:bg-[#ff6900] hover:text-black transition-all duration-300 font-medium text-center"
                >
                  Explorar Laboratorios →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingCategories;