import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Terminal, Cloud, Code, Twitter, Github, Linkedin, Globe, Instagram } from 'lucide-react';
import { FaDiscord, FaTelegram, FaYoutube } from 'react-icons/fa';

const TeamSection: React.FC = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 'sarah',
      icon: <Shield className="h-8 w-8" />,
      imageUrl: '/static/images/manuel.jpg',
      social: {
        web: 'https://curiosidadesdehackers.com',
        twitter: 'https://twitter.com/HackersCuriosos',
        github: 'https://github.com/CuriosidadesDeHackers',
        linkedin: 'https://es.linkedin.com/in/manuel-mart%C3%ADnez-curiosidades-de-hackers-55b245289',
        telegram: 'https://t.me/CuriosidadesDeHackers',
        instagram: 'https://www.instagram.com/curiosidadesdehackers/',
        youtube: 'https://www.youtube.com/channel/UCyFq3OKciq3VMNpTmzV1XTA'
      }
    },
    {
      id: 'marcus',
      icon: <Terminal className="h-8 w-8" />,
      imageUrl: '/static/images/david.jpg',
      social: {
        twitter: 'https://x.com/condor00611413?t=nWJRW84vD0LxSh9Tm723pA&s=09',
        github: 'https://github.com/condor777-bit',
        linkedin: 'https://www.linkedin.com/in/david-ortega-gonz%C3%A1lez-93960023a/',
        instagram: 'https://www.instagram.com/condorhacks',
        youtube: 'https://www.youtube.com/@CondorHacks'
      }
    },
    {
      id: 'elena',
      icon: <Cloud className="h-8 w-8" />,
      imageUrl: '/static/images/oscar.jpg',
      social: {
        github: 'https://github.com/oscaar90/',
        linkedin: 'https://www.linkedin.com/in/oscar-sanchez-perez/',
        telegram: 'https://t.me/Oskitaar90'
      }
    },
    {
      id: 'james',
      icon: <Code className="h-8 w-8" />,
      imageUrl: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
      social: {
        web: 'https://d4redevil.gitbook.io/d4redevil',
        github: 'https://github.com/d4redevilx',
        linkedin: 'https://uy.linkedin.com/in/beronalejandro'
      }
    }
  ];

  const SocialLinks = ({ social }: { social: typeof teamMembers[0]['social'] }) => (
    <div className="flex space-x-3 mt-4 pt-4 border-t border-gray-800">
      {social.web && (
        <a href={social.web} className="text-gray-400 hover:text-[#ff6900] transition-colors duration-200 transform hover:scale-110">
          <Globe className="h-5 w-5" />
        </a>
      )}
      {social.twitter && (
        <a href={social.twitter} className="text-gray-400 hover:text-[#1DA1F2] transition-colors duration-200 transform hover:scale-110">
          <Twitter className="h-5 w-5" />
        </a>
      )}
      {social.github && (
        <a href={social.github} className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
          <Github className="h-5 w-5" />
        </a>
      )}
      {social.linkedin && (
        <a href={social.linkedin} className="text-gray-400 hover:text-[#0A66C2] transition-colors duration-200 transform hover:scale-110">
          <Linkedin className="h-5 w-5" />
        </a>
      )}
      {social.instagram && (
        <a href={social.instagram} className="text-gray-400 hover:text-[#E4405F] transition-colors duration-200 transform hover:scale-110">
          <Instagram className="h-5 w-5" />
        </a>
      )}
      {social.discord && (
        <a href={social.discord} className="text-gray-400 hover:text-[#5865F2] transition-colors duration-200 transform hover:scale-110">
          <FaDiscord className="h-5 w-5" />
        </a>
      )}
      {social.telegram && (
        <a href={social.telegram} className="text-gray-400 hover:text-[#26A5E4] transition-colors duration-200 transform hover:scale-110">
          <FaTelegram className="h-5 w-5" />
        </a>
      )}
      {social.youtube && (
        <a href={social.youtube} className="text-gray-400 hover:text-[#FF0000] transition-colors duration-200 transform hover:scale-110">
          <FaYoutube className="h-5 w-5" />
        </a>
      )}
    </div>
  );

  return (
    <div id="team-section" className="py-20">
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('team.title')} <span className="text-[#ff6900]">{t('team.subtitle')}</span>
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-gray-900 rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.imageUrl} 
                      alt={t(`team.members.${member.id}.name`)}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  </div>
                  
                  <div className="p-6 relative">
                    <div className="absolute -top-8 right-6 bg-[#ff6900] p-3 rounded-lg shadow-lg">
                      {member.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t(`team.members.${member.id}.name`)}
                    </h3>
                    <p className="text-[#ff6900] font-medium mb-3">
                      {t(`team.members.${member.id}.role`)}
                    </p>
                    <p className="text-gray-400">
                      {t(`team.members.${member.id}.description`)}
                    </p>
                    <SocialLinks social={member.social} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;