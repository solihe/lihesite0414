// src/components/InteractiveExperience.jsx
import React from 'react';
import DecorativeBorder from './ui/DecorativeBorder';

const InteractiveExperience = () => {
  return (
    <div className="py-12 px-4 bg-black">
      <DecorativeBorder className="max-w-md mx-auto">
        <div className="p-6">
          <h2 className="text-2xl font-serif font-bold text-center text-gold mb-6">
            印章酒冠的社交互动
          </h2>
          <div className="relative pb-[56.25%] rounded-xl overflow-hidden shadow-lg">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              playsInline
              autoPlay
              muted
              loop
            >
              <source src="/assets/videos/demo.mp4" type="video/mp4" />
              您的浏览器不支持视频播放
            </video>
          </div>
          <p className="text-center text-gray-400 mt-4">
            独特印章酒冠设计，开启饭局社交新方式
          </p>
        </div>
      </DecorativeBorder>
    </div>
  );
};

export default InteractiveExperience;