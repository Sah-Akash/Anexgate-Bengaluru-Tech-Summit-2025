import React from 'react';
import { QrCodeIcon } from './icons';

interface QrCodeButtonProps {
    onClick: () => void;
}

const QrCodeButton: React.FC<QrCodeButtonProps> = ({ onClick }) => {
  return (
    <button 
        onClick={onClick}
        className="fixed bottom-6 right-6 bg-[#0047AB] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-40 transform hover:scale-110 transition-transform duration-300 animate-float"
        aria-label="Scan QR to connect"
    >
        <QrCodeIcon className="w-8 h-8"/>
    </button>
  );
};

export default QrCodeButton;