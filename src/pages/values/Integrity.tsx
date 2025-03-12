
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CheckCircle } from 'lucide-react';

const IntegrityPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Integrity - Affinity Altitude Accumate</title>
        <meta name="description" content="Learn about our commitment to integrity and ethical standards at Affinity Altitude Accumate." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="bg-apt-blue text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-apt-blue/30 mix-blend-overlay" />
            <div className="container-tight relative z-10">
              <div className="max-w-3xl mx-auto text-center animate-fade-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Integrity</h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  The foundation of everything we do at Affinity Altitude Accumate
                </p>
              </div>
            </div>
          </section>
          
          {/* Content Section */}
          <section className="py-20 bg-white">
            <div className="container-tight">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6 animate-fade-up">
                  <h2 className="heading-underline text-3xl md:text-4xl font-semibold mb-6">
                    What Integrity Means To Us
                  </h2>
                  <p className="text-lg">
                    At Affinity Altitude Accumate, integrity is more than just a core value—it's the foundation of our business and every interaction we have with our clients, colleagues, and community.
                  </p>
                  <p>
                    As a new firm in the Australian market, we understand that earning your trust is essential. We commit to practicing the highest ethical standards in all our business dealings, maintaining complete transparency, and always doing what's right—even when no one is watching.
                  </p>
                  
                  <div className="mt-8 space-y-4">
                    <h3 className="text-2xl font-medium">How We Practice Integrity:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-lg">Transparent Communication</h4>
                          <p>We communicate clearly about our services, fees, and processes, ensuring there are never any surprises.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-lg">Ethical Business Practices</h4>
                          <p>We operate within the letter and spirit of all applicable laws and professional standards, maintaining strict confidentiality with your information.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-lg">Accountability</h4>
                          <p>We take responsibility for our work and stand behind every recommendation and service we provide.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-lg">Honesty in All Interactions</h4>
                          <p>We provide honest advice, even when it might not be what clients initially want to hear, because we prioritize your long-term financial health.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative animate-fade-in">
                  <div className="absolute inset-0 bg-gradient-to-r from-apt-blue/10 to-apt-lightblue/5 rounded-lg transform -rotate-3"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Business handshake representing integrity" 
                    className="rounded-lg shadow-lg img-zoom relative z-10"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default IntegrityPage;
