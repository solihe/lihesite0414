import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  
  // 使用import.meta.url确保正确解析资源路径
  const imagePath = new URL('../../public/assets/images/hero/productmain.png', import.meta.url).href;
  const buttonImagePath = new URL('../../public/assets/images/icons/botton-buy.png', import.meta.url).href;
  const titleImagePath = new URL('../../public/assets/images/hero/精彩值得来贺.png', import.meta.url).href;

  useEffect(() => {
    // 验证图片是否存在
    const img = new Image();
    img.src = imagePath;
    img.onerror = () => {
      console.error('Hero image failed to load:', imagePath);
      setImageError(true);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#4A0404]">
      {/* Product Image Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] aspect-[3/4] mx-auto">
          {imageError ? (
            <div className="text-white text-center p-4 bg-red-500/20 rounded">
              图片加载失败: {imagePath}
              <br />
              <small className="text-gray-400">请检查图片路径是否正确</small>
            </div>
          ) : (
            <img
              src={imagePath}
              alt="来贺白酒"
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error('Image load error:', e);
                setImageError(true);
              }}
            />
          )}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col z-20">
        {/* Bottom Content */}
        <div className="mt-auto w-full">
          <div className="relative">
            {/* Content */}
            <div className="relative container mx-auto px-4 pb-12">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col items-center">
                  {/* Title image */}
                  <div className="w-[80%] max-w-md z-30 mb-[50px]">
                    <img
                      src={titleImagePath}
                      alt="精彩值得来贺"
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Purchase button image */}
                  <div className="w-48 cursor-pointer transform hover:scale-105 transition-transform duration-300">
                    <img
                      src={buttonImagePath}
                      alt="立即购买"
                      className="w-full h-auto"
                      onClick={() => window.location.href = '#purchase'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 