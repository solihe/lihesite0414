// src/components/EmotionalFlashCards.jsx
import React, { useState, useEffect } from 'react';

const EmotionalFlashCards = ({ onComplete }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      image: '/assets/images/emotional/celebration-moment.jpg',
      title: '社交自信',
      description: '在重要场合，来贺助你从容展现'
    },
    {
      image: '/assets/images/emotional/family-moment.jpg',
      title: '欢庆时刻',
      description: '让每一次相聚都值得纪念'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentCard < cards.length - 1) {
        setCurrentCard(currentCard + 1);
      } else {
        onComplete();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentCard, cards.length, onComplete]);

  return (
    <div className="relative h-full w-full">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentCard === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative h-full">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
              <p className="text-xl">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmotionalFlashCards;