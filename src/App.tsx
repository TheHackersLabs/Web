import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrainingCategories from './components/TrainingCategories';
import TrainingSection from './components/TrainingSection';
import EnterpriseSection from './components/EnterpriseSection';
import ProductsSection from './components/ProductsSection';
import CTFSection from './components/CTFSection';
import TeamSection from './components/TeamSection';
import FeaturedChallenges from './components/FeaturedChallenges';
import BlogSection from './components/BlogSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import './utils/animations.css';

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('hero.title');
    
    const meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = '#000000';
    document.getElementsByTagName('head')[0].appendChild(meta);
    
    return () => {
      document.getElementsByTagName('head')[0].removeChild(meta);
    };
  }, [t]);

  // Check if we're on the privacy policy or terms of service page
  const currentPath = window.location.pathname;
  const isPrivacyPolicy = currentPath === '/privacy-policy';
  const isTermsOfService = currentPath === '/terms-of-service';

  if (isPrivacyPolicy) {
    return (
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <PrivacyPolicy />
        <Footer />
      </div>
    );
  }

  if (isTermsOfService) {
    return (
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <TermsOfService />
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <TrainingCategories />
      <TrainingSection />
      <EnterpriseSection />
      <ProductsSection />
      <CTFSection />
      <FeaturedChallenges />
      <BlogSection />
      <TeamSection />
      <NewsletterSection />
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;