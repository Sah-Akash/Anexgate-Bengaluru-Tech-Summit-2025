import React from 'react';
import { ShieldCheckIcon, CloudIcon, ZapIcon } from './icons';

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; delay: string }> = ({ icon, title, children, delay }) => (
  <div className="bg-[#2a2a2a] p-8 rounded-xl border border-gray-700 hover:border-[#0047AB] hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 slide-up" style={{animationDelay: delay}}>
    <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-full bg-[#0047AB]/20 text-[#0047AB]">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#181818]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 slide-up">Redefining Network Security</h2>
          <p className="text-gray-400 md:text-lg slide-up" style={{animationDelay: '0.2s'}}>
            AnexGate pioneers the future of cybersecurity with our integrated Hybrid SASE platform. We converge robust Edge Security with flexible SD-WAN solutions, all delivered through a single, cloud-native architecture. Our mission is to provide seamless, secure, and scalable connectivity for the modern distributed enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <InfoCard icon={<ShieldCheckIcon />} title="Unified Security Fabric" delay="0.4s">
            A single, comprehensive security stack that protects your entire network—from edge to cloud—with consistent policies.
          </InfoCard>
          <InfoCard icon={<CloudIcon />} title="Cloud-Managed Simplicity" delay="0.6s">
            Effortlessly manage your global network and security policies from a single pane of glass, reducing complexity and operational overhead.
          </InfoCard>
          <InfoCard icon={<ZapIcon />} title="Enterprise-Grade Reliability" delay="0.8s">
            Built for performance and resilience, ensuring 99.999% uptime and low-latency connections for all your critical applications.
          </InfoCard>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
