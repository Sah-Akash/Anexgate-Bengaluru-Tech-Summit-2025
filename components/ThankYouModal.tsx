import React, { useState, useEffect } from 'react';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ isOpen, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 500); // Match animation duration
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
        className="bg-[#2a2a2a] rounded-xl p-8 md:p-12 text-center max-w-md w-full border border-gray-700 shadow-2xl shadow-blue-500/20 transform transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
        style={{ transform: isOpen ? 'scale(1)' : 'scale(0.95)' }}
      >
        <div className="w-16 h-16 mx-auto mb-6 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
        </div>
        <h2 className="text-2xl font-bold mb-3">Thank You!</h2>
        <p className="text-gray-300 mb-8">
          Our team will connect with you shortly with your custom network report.
        </p>
        <button
          onClick={onClose}
          className="bg-[#0047AB] text-white font-semibold py-2 px-8 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ThankYouModal;
