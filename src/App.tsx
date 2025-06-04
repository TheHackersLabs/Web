import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const HomePage = () => {
  return (
    <>
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
    </>
  );
};

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

  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
        <FloatingButton />
      </div>
    </Router>
  );
}

export default App;