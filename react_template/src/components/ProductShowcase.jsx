// src/components/ProductShowcase.jsx
import React, { useState } from 'react';

const ProductShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: '来贺·金印',
      description: '53度酱香型白酒，传统工艺精心酿造',
      image: '/assets/images/products/baijiu-bottle-classic.jpg',
    },
    {
      id: 2,
      name: '来贺·玉印',
      description: '45度浓香型白酒，匠心独具的口感',
      image: '/assets/images/products/luxury-display.jpg',
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">产品展示</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 ${
                activeIndex === index ? 'ring-2 ring-gold' : ''
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-white text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-white/80">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;