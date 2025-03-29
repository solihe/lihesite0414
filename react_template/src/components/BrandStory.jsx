// src/components/BrandStory.jsx
import React from 'react';

const BrandStory = () => {
  return (
    <section id="brand-story" className="relative py-20 bg-black text-white">
      <div className="absolute inset-0 opacity-40">
        <img
          src="/assets/images/brand-story/cultural-heritage.jpg"
          alt="Brand Heritage"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-8">品牌故事</h2>
          <div className="space-y-6 text-lg">
            <p className="leading-relaxed">
              来贺白酒传承千年酿酒工艺，融合现代科技与传统匠心，
              致力于打造独具特色的高品质社交白酒。
            </p>
            <p className="leading-relaxed">
              我们以"让每一刻都值得来贺"为品牌使命，
              将白酒文化与现代生活方式完美结合。
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <img
                src="/assets/images/craftsmanship/traditional-making.jpg"
                alt="Traditional Craftsmanship"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">传统工艺</h3>
              <p>百年酿造技艺的传承与创新</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <img
                src="/assets/images/craftsmanship/traditional-making.jpg"
                alt="Modern Innovation"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">现代创新</h3>
              <p>科技与传统的完美融合</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;