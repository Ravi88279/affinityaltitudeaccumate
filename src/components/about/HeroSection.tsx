
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-apt-blue text-white py-20 relative overflow-hidden mt-16">
      <div className="absolute inset-0 bg-apt-blue/30 mix-blend-overlay" />
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-float"
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="container-tight relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Our Company</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            We're a team of dedicated professionals committed to providing exceptional 
            financial services to businesses across Australia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
