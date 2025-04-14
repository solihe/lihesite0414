// src/components/HeroSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 导入闪卡图片
import dinnerImage from '../assets/images/flashcards/饭局.png';
import giftImage from '../assets/images/flashcards/礼物.png';
import desireImage from '../assets/images/flashcards/渴望.png';
import solutionImage from '../assets/images/flashcards/来贺方案.png';

// 点击提示箭头SVG组件
const ChevronDown = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const flashCards = [
  {
    id: 1,
    image: dinnerImage,
    text: '饭局之上，话未出口',
    subText: '商务宴请，尽在不言中'
  },
  {
    id: 2,
    image: giftImage,
    text: '礼物之中，心意难表',
    subText: '一份心意，千言万语'
  },
  {
    id: 3,
    image: desireImage,
    text: '内心渴望，期待共鸣',
    subText: '渴望被理解，期待被认同'
  },
  {
    id: 4,
    image: solutionImage,
    text: '来贺之时，心意自现',
    subText: '让每一次相聚都值得铭记'
  }
];

const HeroSection = ({ onComplete }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showClickHint, setShowClickHint] = useState(true);
  const [showExploreButton, setShowExploreButton] = useState(false);
  const touchStart = useRef(null);

  // 处理完成事件
  useEffect(() => {
    if (showExploreButton) {
      onComplete?.();
    }
  }, [showExploreButton, onComplete]);

  // 图片预加载
  useEffect(() => {
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = () => reject(src);
      });
    };

    Promise.all(flashCards.map(card => loadImage(card.image)))
      .then(() => {
        setImagesLoaded(true);
        // 3秒后显示点击提示
        setTimeout(() => setShowClickHint(true), 3000);
      })
      .catch(error => {
        console.error('Failed to load images:', error);
        setImagesLoaded(true); // 即使加载失败也继续显示
      });
  }, []);

  // 处理触摸事件
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart.current - touchEnd;

    // 判断滑动方向
    if (Math.abs(diff) > 50) { // 最小滑动距离
      if (diff > 0 && currentCard < flashCards.length - 1) {
        // 向左滑动
        setCurrentCard(currentCard + 1);
      } else if (diff < 0 && currentCard > 0) {
        // 向右滑动
        setCurrentCard(currentCard - 1);
      }
    }

    touchStart.current = null;
  };

  // 处理点击事件
  const handleClick = () => {
    setShowClickHint(false);
    if (currentCard < flashCards.length - 1) {
      setCurrentCard(currentCard + 1);
    } else {
      setShowExploreButton(true);
    }
  };

  if (!imagesLoaded) {
    return (
      <div className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-black">
        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section 
      className="fixed inset-0 w-screen h-screen overflow-hidden bg-black"
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 闪卡展示区域 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="relative w-full h-[85vh]" // 限制图片区域高度
        >
          {/* 背景图片 */}
          <div className="relative w-full h-full overflow-hidden">
            <img 
              src={flashCards[currentCard].image}
              alt={flashCards[currentCard].text}
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* 上下渐变遮罩 */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 电影字幕区域 - 固定在底部 */}
      <div className="absolute bottom-0 left-0 right-0 bg-black">
        <motion.div
          key={currentCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center py-8"
        >
          <h2 className="text-white text-2xl mb-3 font-serif tracking-wider">{flashCards[currentCard].text}</h2>
          <p className="text-white/80 text-lg tracking-wide">{flashCards[currentCard].subText}</p>
        </motion.div>

        {/* 点击提示 */}
        {showClickHint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-white/60"
          >
            <ChevronDown />
          </motion.div>
        )}

        {/* 探索按钮 */}
        {showExploreButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-20 left-1/2 transform -translate-x-1/2
              px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full
              hover:bg-white/30 transition-all duration-300"
            onClick={() => {
              document.getElementById('brand-story')?.scrollIntoView({ behavior: 'smooth' });
              onComplete?.();
            }}
          >
            探索来贺世界
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;