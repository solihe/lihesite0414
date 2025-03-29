// src/components/ui/FloatingButton.jsx
import React from 'react';

const FloatingButton = ({ onClick, icon, label }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-20 right-4 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-white shadow-lg hover:shadow-xl transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </button>
  );
};

export default FloatingButton;