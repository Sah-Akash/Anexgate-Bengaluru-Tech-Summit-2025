import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 hero-bg-anim"
          style={{ transform: `translateY(${offsetY * 0.3}px)` }}
        ></div>
        <div 
          className="absolute inset-0 bg-grid-white/[0.07]" 
          style={{
            transform: `translateY(${offsetY * 0.5}px)`,
            maskImage: 'radial-gradient(ellipse at center, transparent 20%, black)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, black)'
          }}
        ></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight slide-up" style={{ animationDelay: '0.1s' }}>
            Experience the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#0047AB]">Secure Connectivity</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 slide-up" style={{ animationDelay: '0.3s' }}>
            Join us at Bengaluru Tech Summit 2025 – November 18-20
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 slide-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="#demo"
              className="relative glowing-button bg-[#0047AB] text-white font-bold py-3 px-8 rounded-lg w-full sm:w-auto transition-transform duration-300 transform hover:scale-105"
            >
              Watch Demo
            </a>
            <a
              href="#assessment"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg w-full sm:w-auto hover:bg-white hover:text-[#1B1B1B] transition-colors duration-300"
            >
              Get Free Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;