import React from 'react';

const DemoSection: React.FC = () => {
  return (
    <section id="demo" className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 slide-up">See AnexGate in Action</h2>
        <p className="text-gray-400 md:text-lg mb-12 max-w-2xl mx-auto slide-up" style={{ animationDelay: '0.2s' }}>
          Discover how our Hybrid SASE platform simplifies secure connectivity and empowers your distributed workforce in this short product walkthrough.
        </p>

        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-blue-500/20 border-2 border-[#0047AB] slide-up" style={{ animationDelay: '0.4s' }}>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&controls=1&showinfo=0&autoplay=0"
            title="Product Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
