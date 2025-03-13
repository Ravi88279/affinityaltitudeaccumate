
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 bg-apt-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-apt-blue via-apt-blue to-apt-lightblue mix-blend-overlay opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <svg className="absolute top-0 left-0 transform -translate-y-1/2" width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" r="400" fill="white" fillOpacity="0.05" />
        </svg>
        <svg className="absolute bottom-0 right-0 transform translate-y-1/3" width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="300" r="300" fill="white" fillOpacity="0.05" />
        </svg>
      </div>
      
      <div className="container-tight relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Contact Affinity Altitude Accumate today to discover how our 
            expert financial services can help your business thrive.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-apt-blue hover:bg-white/90 inline-flex items-center group">
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
