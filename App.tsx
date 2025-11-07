import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import DemoSection from './components/DemoSection';
import BrochureSection from './components/BrochureSection';
import AssessmentFormSection from './components/AssessmentFormSection';
import Footer from './components/Footer';
import ThankYouModal from './components/ThankYouModal';
import QrCodeButton from './components/QrCodeButton';
import QrCodeModal from './components/QrCodeModal';

const App: React.FC = () => {
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  const handleFormSubmit = () => {
    setIsThankYouModalOpen(true);
  };

  return (
    <div className="bg-[#1B1B1B] text-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <DemoSection />
        <BrochureSection />
        <AssessmentFormSection onFormSubmit={handleFormSubmit} />
      </main>
      <Footer />

      <ThankYouModal 
        isOpen={isThankYouModalOpen} 
        onClose={() => setIsThankYouModalOpen(false)} 
      />
      <QrCodeButton onClick={() => setIsQrModalOpen(true)} />
      <QrCodeModal 
        isOpen={isQrModalOpen} 
        onClose={() => setIsQrModalOpen(false)} 
      />
    </div>
  );
};

export default App;