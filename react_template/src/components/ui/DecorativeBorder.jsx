// src/components/ui/DecorativeBorder.jsx
import React from 'react';

const DecorativeBorder = ({ children, className }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 border border-[#B8860B] opacity-30" />
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#B8860B]" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#B8860B]" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#B8860B]" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#B8860B]" />
      {children}
    </div>
  );
};

export default DecorativeBorder;