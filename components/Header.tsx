import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1B1B1B]/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider">
          Anex<span className="text-[#0047AB]">Gate</span>
        </div>
        <nav>
          <a
            href="#assessment"
            className="hidden md:inline-block bg-[#0047AB] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            Get Free Assessment
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;