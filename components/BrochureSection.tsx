import React from 'react';
import { DownloadIcon, BriefcaseIcon } from './icons';

const BrochureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: string }> = ({ icon, title, description, delay }) => (
    <div 
        className="bg-[#181818] p-8 rounded-xl border border-gray-800 text-center flex flex-col items-center slide-up transition-all duration-300 transform hover:-translate-y-2 hover:border-[#0047AB] hover:shadow-lg hover:shadow-blue-500/10" 
        style={{animationDelay: delay}}
    >
        <div className="text-[#0047AB] mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-6 flex-grow">{description}</p>
        <a 
            href="#" 
            download
            className="mt-auto bg-[#0047AB] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 flex items-center gap-2"
        >
            <DownloadIcon />
            Download
        </a>
    </div>
);


const BrochureSection: React.FC = () => {
  return (
    <section id="brochures" className="py-20 md:py-32 bg-[#181818]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 slide-up">Get Deeper Insights</h2>
          <p className="text-gray-400 md:text-lg slide-up" style={{animationDelay: '0.2s'}}>
            Download our resources to learn more about our innovative solutions and company vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <BrochureCard 
                icon={<BriefcaseIcon className="w-12 h-12" />} 
                title="Product Brochure"
                description="A comprehensive overview of the AnexGate Hybrid SASE platform, features, and use cases."
                delay="0.4s"
            />
            <BrochureCard 
                icon={<DownloadIcon className="w-12 h-12" />} 
                title="Company Profile"
                description="Learn more about AnexGate's mission, leadership, and our commitment to cybersecurity innovation."
                delay="0.6s"
            />
        </div>
      </div>
    </section>
  );
};

export default BrochureSection;