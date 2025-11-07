import React, { useState, useEffect } from 'react';

interface QrCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QrCodeModal: React.FC<QrCodeModalProps> = ({ isOpen, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  
  if (!show) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 ${isOpen ? 'fade-in' : 'fade-out'}`}
      onClick={onClose}
    >
      <div 
        className="bg-[#2a2a2a] rounded-xl p-8 text-center max-w-xs w-full border border-gray-700 shadow-2xl shadow-blue-500/20 transform transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
        style={{ transform: isOpen ? 'scale(1)' : 'scale(0.95)' }}
      >
        <h3 className="text-xl font-bold mb-4">Scan to Connect</h3>
        <div className="bg-white p-4 rounded-lg">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://www.linkedin.com" alt="QR Code" className="w-full h-auto" />
        </div>
        <p className="text-gray-400 mt-4 text-sm">Scan with your phone to connect with us on LinkedIn.</p>
      </div>
    </div>
  );
};

export default QrCodeModal;
