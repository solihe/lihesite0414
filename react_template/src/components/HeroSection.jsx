// src/components/HeroSection.jsx
import React, { useState } from 'react';
import EmotionalFlashCards from './EmotionalFlashCards';
import DecorativeBorder from './ui/DecorativeBorder';
import { TEMP_IMAGES } from '../constants/temp-images';

const HeroSection = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleFlashCardsComplete = () => {
    setShowMainContent(true);
  };

  const scrollToBrandStory = () => {
    document.getElementById('brand-story').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {!showMainContent ? (
        <EmotionalFlashCards onComplete={handleFlashCardsComplete} />
      ) : (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
            style={{
              backgroundImage: `url(${TEMP_IMAGES.heroBg})`,
              transform: `translateY(${Math.min(window.scrollY * 0.2, 100)}px)`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
          </div>
          <div className="relative flex flex-col items-center justify-center h-full px-4 text-white text-center">
            <DecorativeBorder className="p-8">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 animate-float-up">
                让相聚更有意义
              </h1>
              <p className="text-xl md:text-2xl mb-4 animate-float-up" style={{ animationDelay: '0.2s' }}>
                创造值得铭记的时刻
              </p>
              <p className="text-lg md:text-xl mb-8 animate-float-up" style={{ animationDelay: '0.3s' }}>
                让故事永远流传
              </p>
            </DecorativeBorder>
            <div className="flex flex-col gap-4 w-full max-w-xs mt-8 animate-float-up" style={{ animationDelay: '0.4s' }}>
              <button 
                className="bg-gold hover:bg-gold-dark text-white py-4 px-8 rounded-lg text-lg font-bold transition-colors duration-300 shine-effect"
                onClick={() => {
                  document.getElementById('purchase-guide').scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                立即购买
              </button>
              <button
                onClick={scrollToBrandStory}
                className="bg-transparent border-2 border-white text-white py-4 px-8 rounded-lg text-lg font-bold
                  hover:bg-white hover:text-black active:bg-gray-200 active:scale-95
                  transition-all duration-300 transform"
              >
                了解更多
              </button>
            </div>
          </div>
        </>
      )}
      
      {!showMainContent && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <button 
            onClick={handleFlashCardsComplete}
            className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full hover:bg-white/30 transition-colors duration-300"
          >
            跳过序章
          </button>
        </div>
      )}
    </div>
  );
};

export default HeroSection;