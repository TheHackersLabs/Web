import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Terminal, Trophy, Clock, Users } from 'lucide-react';

interface ChallengeProps {
  title: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  solves: number;
  points: number;
}

const ChallengeCard: React.FC<ChallengeProps> = ({ title, category, difficulty, solves, points }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();
  
  const difficultyColors = {
    easy: 'bg-green-500',
    medium: 'bg-yellow-500',
    hard: 'bg-orange-500',
    expert: 'bg-red-500',
  };
  
  const difficultyLabels = {
    easy: t('challenges.difficulty.easy'),
    medium: t('challenges.difficulty.medium'),
    hard: t('challenges.difficulty.hard'),
    expert: t('challenges.difficulty.expert'),
  };
  
  return (
    <div 
      className="relative bg-gray-900 rounded-lg overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-[#ff6900] opacity-0 blur-xl transition-opacity duration-300 ${isHovered ? 'opacity-20' : ''}`}></div>
      
      <div className="relative z-10 p-6 border border-gray-800 rounded-lg transition-all duration-300 h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className={`px-2 py-1 rounded text-xs font-medium text-black ${difficultyColors[difficulty]}`}>
            {difficultyLabels[difficulty]}
          </div>
          <div className="text-gray-500 text-sm">{category}</div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ff6900] transition-colors duration-200">{title}</h3>
        
        <div className="mt-auto pt-4 border-t border-gray-800 grid grid-cols-2 gap-2">
          <div className="flex items-center text-gray-400 text-sm">
            <Trophy className="h-4 w-4 mr-1 text-[#ff6900]" />
            <span>{points} {t('challenges.points')}</span>
          </div>
          <div className="flex items-center text-gray-400 text-sm justify-end">
            <Users className="h-4 w-4 mr-1 text-[#ff6900]" />
            <span>{solves} {t('challenges.solves')}</span>
          </div>
        </div>
        
        <div className={`absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}>
          <button className="px-4 py-2 bg-[#ff6900] text-black rounded font-medium hover:bg-[#ff8c00] transition-colors duration-200">
            {t('challenges.startChallenge')}
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedChallenges: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <div className="flex items-center mb-2">
              <Terminal className="h-6 w-6 text-[#ff6900] mr-2" />
              <h2 className="text-3xl font-bold text-white">
                {t('challenges.featured')} <span className="text-[#ff6900]">{t('challenges.title')}</span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-2xl">
              {t('challenges.description')}
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-2">
            <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors duration-200">
              {t('challenges.filters.all')}
            </button>
            <button className="px-4 py-2 bg-[#ff6900] text-black rounded hover:bg-[#ff8c00] transition-colors duration-200">
              {t('challenges.filters.web')}
            </button>
            <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors duration-200">
              {t('challenges.filters.crypto')}
            </button>
            <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors duration-200">
              {t('challenges.filters.forensics')}
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ChallengeCard 
            title={t('challenges.list.sqlInjection.title')}
            category={t('challenges.list.sqlInjection.category')}
            difficulty="easy"
            solves={1243}
            points={20}
          />
          <ChallengeCard 
            title={t('challenges.list.bufferOverflow.title')}
            category={t('challenges.list.bufferOverflow.category')}
            difficulty="medium"
            solves={842}
            points={30}
          />
          <ChallengeCard 
            title={t('challenges.list.packetAnalysis.title')}
            category={t('challenges.list.packetAnalysis.category')}
            difficulty="medium"
            solves={765}
            points={25}
          />
          <ChallengeCard 
            title={t('challenges.list.cryptography.title')}
            category={t('challenges.list.cryptography.category')}
            difficulty="hard"
            solves={321}
            points={40}
          />
          <ChallengeCard 
            title={t('challenges.list.malware.title')}
            category={t('challenges.list.malware.category')}
            difficulty="expert"
            solves={164}
            points={50}
          />
          <ChallengeCard 
            title={t('challenges.list.xss.title')}
            category={t('challenges.list.xss.category')}
            difficulty="medium"
            solves={954}
            points={30}
          />
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://thehackerslabs.com/" 
            className="inline-flex items-center justify-center px-6 py-3 border border-[#ff6900] text-base font-medium rounded-md text-[#ff6900] bg-transparent hover:bg-[#ff690015] transition-all duration-200"
          >
            {t('challenges.browseAll')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedChallenges;