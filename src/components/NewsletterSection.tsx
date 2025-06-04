import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="mlb2-24393821" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-24393821">
          <div className="ml-form-align-center">
            <div className="ml-form-embedWrapper embedForm">
              <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                <div className="ml-form-embedContent text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-6">
                    <Mail className="h-6 w-6 text-[#ff6900]" />
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-white">
                    {t('newsletter.title')}
                  </h4>
                  <p className="text-gray-400 text-sm mb-8">
                    {t('newsletter.description')}
                  </p>
                </div>
                
                <form className="ml-block-form" action="https://assets.mailerlite.com/jsonp/1426640/forms/150588743615514486/subscribe" data-code="" method="post" target="_blank">
                  <div className="space-y-4">
                    <div>
                      <input 
                        aria-label={t('newsletter.form.name')}
                        type="text" 
                        className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-800 text-gray-200 placeholder-gray-500 focus:border-[#ff6900] focus:ring-1 focus:ring-[#ff6900] transition-colors duration-200" 
                        name="fields[name]" 
                        placeholder={t('newsletter.form.name')}
                        autoComplete="given-name"
                      />
                    </div>
                    <div>
                      <input 
                        aria-label={t('newsletter.form.email')}
                        type="email" 
                        className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-800 text-gray-200 placeholder-gray-500 focus:border-[#ff6900] focus:ring-1 focus:ring-[#ff6900] transition-colors duration-200" 
                        name="fields[email]" 
                        placeholder={t('newsletter.form.email')}
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label className="flex items-start space-x-3">
                      <input 
                        type="checkbox" 
                        name="gdpr[]" 
                        value={t('newsletter.form.privacy')}
                        className="mt-1 rounded border-gray-700 text-[#ff6900] focus:ring-[#ff6900] bg-gray-900"
                      />
                      <span className="text-sm text-gray-400">
                        {t('newsletter.form.privacy')}
                      </span>
                    </label>
                  </div>
                  
                  <input type="hidden" name="ml-submit" value="1" />
                  <div className="mt-6">
                    <button 
                      type="submit" 
                      className="w-full bg-[#ff6900] text-black py-3 px-6 rounded-lg font-medium hover:bg-[#ff8c00] transition-colors duration-200"
                    >
                      {t('newsletter.form.subscribe')}
                    </button>
                  </div>
                  <input type="hidden" name="anticsrf" value="true" />
                </form>
              </div>
              
              <div className="ml-form-successBody row-success hidden">
                <div className="text-center py-8">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {t('newsletter.form.success.title')}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {t('newsletter.form.success.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;