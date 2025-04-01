// src/components/EmotionalFlashCards.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TEMP_IMAGES } from '../constants/temp-images';
import '../styles/animations.css';

const EmotionalFlashCards = ({ onComplete }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef(null);

  const flashCards = [
    {
      id: 1,
      background: TEMP_IMAGES.awkwardDinner,
      text: '又一场无话可说的饭局',
      duration: 3000,
      transition: 'fade',
      color: 'dark'
    },
    {
      id: 2,
      background: TEMP_IMAGES.forgottenGifts,
      text: '精心准备的礼物，却分不清谁是谁',
      duration: 3000,
      transition: 'slide',
      color: 'cool'
    },
    {
      id: 3,
      background: TEMP_IMAGES.ritualMoment,
      text: '每个人都希望被看见',
      duration: 4000,
      transition: 'zoom',
      color: 'warm'
    },
    {
      id: 4,
      background: TEMP_IMAGES.joyfulMoment,
      text: '所有精彩，值得来贺',
      duration: 5000,
      transition: 'fade',
      color: 'bright'
    }
  ];

  // 进度条逻辑
  useEffect(() => {
    if (isPaused) {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
      return;
    }

    setProgress(0);
    const duration = flashCards[currentCard].duration;
    const interval = 16; // 约60fps
    const steps = duration / interval;
    let currentStep = 0;

    progressInterval.current = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);

      if (currentStep >= steps) {
        clearInterval(progressInterval.current);
      }
    }, interval);

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [currentCard, isPaused]);

  // 自动播放逻辑
  useEffect(() => {
    if (isPaused) return;
    
    const timer = setTimeout(() => {
      if (currentCard < flashCards.length - 1) {
        setCurrentCard(currentCard + 1);
      } else {
        setShowExplore(true);
        onComplete();
      }
    }, flashCards[currentCard].duration);
    
    return () => clearTimeout(timer);
  }, [currentCard, isPaused, onComplete]);

  // 闪卡交互处理
  const handleCardClick = () => {
    setIsPaused(!isPaused);
  };

  const handleSwipe = (direction) => {
    if (direction === 'left' && currentCard < flashCards.length - 1) {
      setCurrentCard(currentCard + 1);
    } else if (direction === 'right' && currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  return (
    <section className="fixed inset-0 w-screen h-screen overflow-hidden z-50">
      {/* 闪卡容器 */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={flashCards[currentCard].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full"
          onClick={handleCardClick}
          onTouchStart={(e) => {
            const touch = e.touches[0];
            const startX = touch.clientX;
            const handleTouchEnd = (e) => {
              const touch = e.changedTouches[0];
              const endX = touch.clientX;
              const diff = endX - startX;
              if (Math.abs(diff) > 50) {
                handleSwipe(diff > 0 ? 'right' : 'left');
              }
            };
            document.addEventListener('touchend', handleTouchEnd, { once: true });
          }}
        >
          {/* 背景图片 */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${flashCards[currentCard].background})` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 ${
              flashCards[currentCard].color === 'dark' ? 'opacity-70' : 'opacity-40'
            }`}></div>
          </div>
          
          {/* 文案 */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center px-6 md:px-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl text-white font-medium text-center max-w-3xl leading-relaxed">
              {flashCards[currentCard].text}
            </h2>
          </motion.div>

          {/* 暂停/播放指示器 */}
          <div className={`pause-indicator ${isPaused ? 'visible' : ''}`}>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="white"
            >
              {isPaused ? (
                <path d="M8 5v10l6-5z"/>
              ) : (
                <path d="M6 4h3v12H6zm5 0h3v12h-3z"/>
              )}
            </svg>
          </div>

          {/* 进度条 */}
          <div className="progress-bar">
            <div 
              className="h-full bg-white"
              style={{ 
                width: `${progress}%`,
                transition: isPaused ? 'none' : 'width linear'
              }}
            />
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* 探索按钮 */}
      <motion.div 
        className="absolute bottom-10 left-0 right-0 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: showExplore ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <button 
          onClick={onComplete}
          className="mx-auto inline-block px-8 py-4 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
        >
          探索来贺世界
        </button>
      </motion.div>

      {/* 滑动提示 */}
      {!showExplore && (
        <div className="swipe-hint">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="white">
            <path d="M20 5L5 20M20 5L35 20" strokeWidth="2" stroke="white"/>
          </svg>
        </div>
      )}
    </section>
  );
};

export default EmotionalFlashCards;