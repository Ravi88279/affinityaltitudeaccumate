import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
const Hero = () => {
  return <section className="relative pt-16 pb-8 md:pt-20 md:pb-12 overflow-hidden bg-[#f9faff]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f9faff] to-[#f0f0ff] -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => <div key={i} className="absolute rounded-full bg-apt-purple/20 animate-float" style={{
        width: `${Math.random() * 20 + 10}px`,
        height: `${Math.random() * 20 + 10}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 15 + 10}s`,
        animationDelay: `${Math.random() * 5}s`
      }}></div>)}
      </div>
      
      <div className="container-tight min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fade-in">
            <div className="inline-block bg-apt-purple/10 text-apt-purple font-medium px-4 py-1 rounded-full text-sm">
              Professional Accounting & Bookkeeping Services
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-apt-darkgray">
              Financial Solutions <br />
              <span className="text-apt-purple animate-text-gradient bg-gradient-to-r from-apt-purple via-apt-lightpurple to-apt-purple bg-clip-text text-transparent bg-300%">for Your Business</span>
            </h1>
            
            <p className="text-lg max-w-lg opacity-90 animate-fade-up" style={{
            animationDelay: '0.2s'
          }}>
              We provide expert bookkeeping, accounting, and taxation services to help your business thrive. 
              Our professional team is dedicated to delivering accurate and timely financial solutions.
            </p>
            
            <div className="space-y-3 md:space-y-0 pt-2 animate-fade-up" style={{
            animationDelay: '0.4s'
          }}>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-affinity-gradient text-white px-6 py-3 rounded-md font-medium flex items-center group shadow-md hover:shadow-lg transition-all">
                  Get Started
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link to="/services" className="btn-ghost hover:scale-105 transition-transform duration-300">
                  Our Services
                </Link>
              </div>
              
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-4">
                <div className="flex items-center">
                  <CheckCircle2 className="text-apt-purple mr-2 h-5 w-5" />
                  <span className="text-sm font-medium px-0 my-[22px]">Expert Team</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="text-apt-purple mr-2 h-5 w-5" />
                  <span className="text-sm font-medium">Personalized Services</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="text-apt-purple mr-2 h-5 w-5" />
                  <span className="text-sm font-medium">Affordable Plans</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-apt-purple rounded-2xl -rotate-3 opacity-10 animate-pulse-slow"></div>
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="Business professionals reviewing financial documents" className="rounded-2xl shadow-xl rotate-3 transition-all duration-500 hover:rotate-0 relative z-10 object-cover h-[300px] md:h-[380px] w-full" />
              <div className="absolute -bottom-4 -right-4 bg-white px-5 py-3 rounded-lg shadow-lg z-20 animate-bounce-slow">
                <span className="font-bold text-apt-purple">Financial Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider with animation */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto animate-wave-slow relative">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,165.3C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>;
};
export default Hero;