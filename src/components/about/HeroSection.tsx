
import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-36 lg:pt-40 relative bg-apt-blue text-white overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-apt-blue via-apt-blue/90 to-apt-blue/80 z-10"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-repeat z-0" 
        style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          backgroundSize: "60px 60px" 
        }}>
      </div>
      
      <div className="container-tight relative z-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-apt-lightblue font-medium mb-3 animate-fade-up">About Us</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
            Empowering Your <span className="text-white">Business Success</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            We are a dedicated team of accounting professionals committed to helping Australian businesses achieve financial clarity and success.
          </p>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto translate-y-1">
          <path fill="#FFFFFF" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,186.7C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
