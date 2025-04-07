// src/components/ProductShowcase.jsx
import React, { useState } from 'react';

const ProductShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: '来贺·朱冠',
      description: '53度酱香型，大师勾调，奔驰同级红花梨实木酒冠，尊享社交体验',
      image: 'https://img2.baidu.com/it/u=2947383556,3609110824&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
    },
    {
      id: 2,
      name: '来贺·玄冠',
      description: '53度酱香型，大师勾调，宾利同级黑胡桃实木酒冠，品味社交魅力',
      image: 'https://img1.baidu.com/it/u=3057807894,1552083199&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">产品展示</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                activeIndex === index ? 'ring-2 ring-gold' : ''
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                <h3 className="text-white text-2xl font-serif font-bold mb-3">{product.name}</h3>
                <p className="text-white/90 text-lg">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;