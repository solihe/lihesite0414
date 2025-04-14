// src/App.jsx
import React, { Suspense } from 'react';
import BottomNav from './components/BottomNav';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import FloatingButton from './components/ui/FloatingButton';
import Hero from './components/Hero';
import './styles/animations.css';

const ProductFeatures = React.lazy(() => import('./components/ProductFeatures'));
const ProductShowcase = React.lazy(() => import('./components/ProductShowcase'));
const BrandStory = React.lazy(() => import('./components/BrandStory'));
const InteractiveExperience = React.lazy(() => import('./components/InteractiveExperience'));
const UseCases = React.lazy(() => import('./components/UseCases'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const QualityCrafts = React.lazy(() => import('./components/QualityCrafts'));
const PurchaseGuide = React.lazy(() => import('./components/PurchaseGuide'));

function App() {
  return (
    <div className="pb-16 font-sans">
      <ScrollProgress />
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Suspense fallback={
          <div className="w-full h-screen flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-gold rounded-full border-t-transparent animate-spin" />
          </div>
        }>
          <section id="products">
            <ProductFeatures />
            <ProductShowcase />
          </section>
          <section id="brand-story">
            <BrandStory />
          </section>
          <InteractiveExperience />
          <UseCases />
          <Testimonials />
          <QualityCrafts />
          <section id="purchase">
            <PurchaseGuide />
          </section>
        </Suspense>
      </main>
      <Footer />
      <FloatingButton 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        icon="↑"
        label="返回顶部"
      />
      <BottomNav />
    </div>
  );
}

export default App;