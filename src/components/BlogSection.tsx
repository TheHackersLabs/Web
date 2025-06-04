import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const BlogSection: React.FC = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      id: 1,
      title: t('blog.posts.post1.title'),
      description: t('blog.posts.post1.description'),
      date: '2024-03-15',
      readTime: '5',
      image: 'https://curiosidadesdehackers.com/wp-content/uploads/2025/05/b812bd73-b85f-444b-983c-2b20654c8c41-800x445.jpg',
      category: t('blog.categories.security')
    },
    {
      id: 2,
      title: t('blog.posts.post2.title'),
      description: t('blog.posts.post2.description'),
      date: '2024-03-14',
      readTime: '7',
      image: 'https://curiosidadesdehackers.com/wp-content/uploads/2025/04/sss-800x445.jpg',
      category: t('blog.categories.security')
    },
    {
      id: 3,
      title: t('blog.posts.post3.title'),
      description: t('blog.posts.post3.description'),
      date: '2024-03-13',
      readTime: '4',
      image: 'https://curiosidadesdehackers.com/wp-content/uploads/2025/04/ffc25661-87e3-4de1-abaf-c9631cd7a9ce-800x445.jpeg',
      category: t('blog.categories.security')
    }
  ];

  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('blog.title')} <span className="text-[#ff6900]">{t('blog.subtitle')}</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            {t('blog.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-gray-900 rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#ff6900] text-black text-sm font-medium rounded">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <Clock className="h-4 w-4 ml-4 mr-2" />
                  <span>{post.readTime} min read</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff6900] transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-4">
                  {post.description}
                </p>
                
                <a 
                  href="https://blog.thehackerslabs.com/" 
                  className="inline-flex items-center text-[#ff6900] hover:text-[#ff8c00] transition-colors duration-200"
                >
                  {t('blog.readMore')}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://blog.thehackerslabs.com/" 
            className="inline-flex items-center justify-center px-8 py-3 border border-[#ff6900] text-base font-medium rounded-md text-[#ff6900] bg-transparent hover:bg-[#ff690015] transition-all duration-200"
          >
<a 
  href="https://blog.thehackerslabs.com/" 
  className="text-[#ff6900] hover:text-[#ff8c00] transition-all duration-200"
>
  {t('blog.viewAll')}
</a>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;