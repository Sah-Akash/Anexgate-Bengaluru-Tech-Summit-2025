import React from 'react';
import { LinkedinIcon, GlobeIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#181818] border-t border-gray-800 py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} AnexGate Inc. All rights reserved.</p>
          <p className="font-semibold text-white">Visit us at Booth #B7, Bengaluru Tech Summit 2025</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="hover:text-[#0047AB] transition-colors">
              <LinkedinIcon />
            </a>
            <a href="#" aria-label="Website" className="hover:text-[#0047AB] transition-colors">
              <GlobeIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
