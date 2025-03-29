// src/components/ProductFeatures.jsx
import React from 'react';
import DecorativeBorder from './ui/DecorativeBorder';

const features = [
  {
    title: '独创印章酒冠',
    subtitle: '社交新体验',
    image: '/assets/images/feature1.webp',
  },
  {
    title: '12987酱香工艺',
    subtitle: '传承千年匠心',
    image: '/assets/images/feature2.webp',
  },
  {
    title: '特选优质纯粮',
    subtitle: '零添加酿造',
    image: '/assets/images/feature3.webp',
  },
];

const ProductFeatures = () => {
  return (
    <div className="py-12 px-4 bg-black">
      <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 gap-4 scrollbar-none">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[280px] snap-center overflow-hidden tilt-effect"
          >
            <DecorativeBorder className="p-4 bg-gray-900">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <div className="text-center text-white">
                <h3 className="text-xl font-serif font-bold text-gold">{feature.title}</h3>
                <p className="text-gray-400">{feature.subtitle}</p>
              </div>
            </DecorativeBorder>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFeatures;