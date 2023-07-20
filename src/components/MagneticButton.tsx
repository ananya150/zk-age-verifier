'use client';
import React from 'react';
import { useState } from 'react';

const MagneticButton = ({children , className, onClick}: any) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    setPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    });
  };

  const handleMouseMove = (e: any) => {
    const dx = e.clientX - position.x;
    const dy = e.clientY - position.y;
    const tiltX = (dy / 3);
    const tiltY = -(dx / 3);
    e.target.style.transform = `translate(${tiltX}px, ${tiltY}px)`;
  };

  const handleMouseLeave = (e: any) => {
    e.target.style.transform = '';
  };

  return (
    <button 
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`rounded-full ${className || ''} text-white font-bold text-sm transition-transform duration-500 ease-out`}
    >
      {children}
    </button>
  );
};

export default MagneticButton;

