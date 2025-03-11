
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-apt-blue/10 to-apt-lightblue/5 -z-10" />
      
      <div className="container-tight min-h-[80vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block bg-apt-blue/10 text-apt-blue font-medium px-4 py-1 rounded-full text-sm animate-slide-in">
              Professional Accounting & Bookkeeping Services
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Financial Solutions <br />
              <span className="text-apt-blue">for Your Business</span>
            </h1>
            
            <p className="text-lg max-w-lg opacity-90">
              We provide expert bookkeeping, accounting, and taxation services to help your business thrive. 
              Our professional team is dedicated to delivering accurate and timely financial solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/contact" className="btn-primary flex items-center">
                Get Started
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-ghost">
                Our Services
              </Link>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-apt-blue rounded-2xl -rotate-3 opacity-10" />
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Business professionals reviewing financial documents"
                className="rounded-2xl shadow-xl rotate-3 transition-all duration-500 hover:rotate-0 relative z-10 object-cover h-[500px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,165.3C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
