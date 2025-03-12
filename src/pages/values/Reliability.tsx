
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BadgeCheck, CheckCircle } from 'lucide-react';

const ReliabilityPage = () => {
  return (
    <>
      <Helmet>
        <title>Reliability - Affinity Altitude Accumate</title>
        <meta name="description" content="Learn about our commitment to reliability and dependability at Affinity Altitude Accumate." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="bg-apt-blue text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-apt-blue/30 mix-blend-overlay" />
            <div className="container-tight relative z-10">
              <div className="max-w-3xl mx-auto text-center animate-fade-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Reliability</h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  The consistency and dependability you can count on
                </p>
              </div>
            </div>
          </section>
          
          {/* Content Section */}
          <section className="py-20 bg-white">
            <div className="container-tight">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative order-2 lg:order-1 animate-fade-in">
                  <div className="absolute inset-0 bg-gradient-to-r from-apt-lightblue/5 to-apt-blue/10 rounded-lg transform rotate-3"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Handshake symbolizing reliability and trust" 
                    className="rounded-lg shadow-lg img-zoom relative z-10"
                  />
                </div>
                
                <div className="space-y-6 order-1 lg:order-2 animate-fade-up">
                  <h2 className="heading-underline text-3xl md:text-4xl font-semibold mb-6">
                    The Foundation of Strong Relationships
                  </h2>
                  <p className="text-lg">
                    At Affinity Altitude Accumate, reliability means being there when our clients need us and delivering on our promises consistently, accurately, and on time.
                  </p>
                  <p>
                    As a new firm in Australia, we understand that establishing a reputation for reliability is essential. We're committed to being the financial partner you can depend on through every business cycle and economic climate.
                  </p>
                  
                  <div className="mt-8 space-y-4">
                    <h3 className="text-2xl font-medium">How We Demonstrate Reliability:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-lg">Consistent Service Delivery</h4>
                          <p>We maintain high standards of service consistency, ensuring you receive the same level of excellence every time you work with us.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-lg">Meeting Deadlines</h4>
                          <p>We respect your time and business requirements by adhering strictly to agreed-upon timelines and deadlines.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-lg">Dependable Advice</h4>
                          <p>Our recommendations and guidance are thoroughly researched and carefully considered, providing you with financial advice you can rely on for critical business decisions.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-lg">Available When You Need Us</h4>
                          <p>We maintain responsive communication channels to ensure we're accessible when you have questions, concerns, or need financial guidance.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
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

export default ReliabilityPage;
