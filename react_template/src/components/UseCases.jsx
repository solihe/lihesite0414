// src/components/UseCases.jsx
import React from 'react';
import DecorativeBorder from './ui/DecorativeBorder';

const cases = [
  {
    title: '商务礼赠',
    subtitle: '展现品位，留下印象',
    series: '玄冠系列',
    image: '/assets/images/case1.webp',
  },
  {
    title: '婚庆喜宴',
    subtitle: '传承仪式，铭刻回忆',
    series: '朱冠系列',
    image: '/assets/images/case2.webp',
  },
  {
    title: '重要节日',
    subtitle: '情感表达，增进情谊',
    series: '双冠可选',
    image: '/assets/images/case3.webp',
  },
];

const UseCases = () => {
  return (
    <div className="py-12 px-4 bg-gradient-to-b from-gray-900 to-black">
      <h2 className="text-2xl font-serif font-bold text-center text-gold mb-8">适用场景</h2>
      <div className="space-y-6">
        {cases.map((item, index) => (
          <div
            key={index}
            className="transform transition-all duration-500 hover:scale-[1.02]"
          >
            <DecorativeBorder className="bg-gray-900 overflow-hidden">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
              </div>
              <div className="p-4 text-white">
                <h3 className="text-xl font-serif font-bold mb-2">
                  {item.title} - {item.series}
                </h3>
                <p className="text-gray-400">{item.subtitle}</p>
              </div>
            </DecorativeBorder>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCases;