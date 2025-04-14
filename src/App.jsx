// src/App.jsx
import React, { Suspense, useState } from 'react';
import BottomNav from './components/BottomNav';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import FloatingButton from './components/ui/FloatingButton';
import HeroSection from './components/HeroSection';
import './styles/animations.css';

// 次要加载的组件
const ProductFeatures = React.lazy(() => import('./components/ProductFeatures'));
const ProductShowcase = React.lazy(() => import('./components/ProductShowcase'));
const BrandStory = React.lazy(() => import('./components/BrandStory'));
const InteractiveExperience = React.lazy(() => import('./components/InteractiveExperience'));
const UseCases = React.lazy(() => import('./components/UseCases'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const QualityCrafts = React.lazy(() => import('./components/QualityCrafts'));
const PurchaseGuide = React.lazy(() => import('./components/PurchaseGuide'));

const App = () => {
  const [showMainContent, setShowMainContent] = useState(false);
  const [isHeroSectionActive, setIsHeroSectionActive] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsHeroSectionActive(true);
  };

  return (
    <div className="relative min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen">
        <HeroSection onComplete={() => setIsHeroSectionActive(false)} />
      </div>
      
      {/* 主内容层 */}
      <div className={`relative z-10 ${isHeroSectionActive ? 'invisible' : 'visible'}`}>
        <ScrollProgress />
        <Header />
        
        <main className="relative">
          {/* 其他内容区域 */}
          <Suspense fallback={
            <div className="w-full h-screen flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            <ProductFeatures />
            <ProductShowcase />
            <BrandStory />
            <InteractiveExperience />
            <UseCases />
            <Testimonials />
            <QualityCrafts />
            <PurchaseGuide />
          </Suspense>
        </main>

        <Footer />
        <BottomNav />
        
        <FloatingButton
          onClick={scrollToTop}
          icon="↑"
          label="返回顶部"
        />
      </div>
    </div>
  );
};

export default App;