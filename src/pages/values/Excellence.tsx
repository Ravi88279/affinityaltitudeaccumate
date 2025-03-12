
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Award, CheckCircle } from 'lucide-react';

const ExcellencePage = () => {
  return (
    <>
      <Helmet>
        <title>Excellence - Affinity Altitude Accumate</title>
        <meta name="description" content="Learn about our commitment to excellence in financial services at Affinity Altitude Accumate." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="bg-apt-blue text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-apt-blue/30 mix-blend-overlay" />
            <div className="container-tight relative z-10">
              <div className="max-w-3xl mx-auto text-center animate-fade-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Commitment to Excellence</h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Delivering exceptional quality in everything we do
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
                    The Pursuit of Excellence
                  </h2>
                  <p className="text-lg">
                    At Affinity Altitude Accumate, excellence isn't just a goal—it's a continuous journey of improvement, innovation, and dedication to the highest standards in everything we do.
                  </p>
                  <p>
                    As a new firm serving the Australian market, we're driven by our commitment to exceed expectations through meticulous attention to detail, ongoing professional development, and a passion for delivering outstanding results.
                  </p>
                  
                  <div className="mt-8 space-y-4">
                    <h3 className="text-2xl font-medium">How We Achieve Excellence:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-lg">Continuous Learning</h4>
                          <p>We're committed to staying current with the latest industry developments, tax regulations, and accounting practices to provide you with cutting-edge financial solutions.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-lg">Attention to Detail</h4>
                          <p>We maintain a meticulous approach to our work, ensuring accuracy and precision in all financial reporting, analysis, and advice.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-lg">Quality Control</h4>
                          <p>We've implemented rigorous review processes to maintain the highest standards of quality in all our services.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-lg">Innovative Approaches</h4>
                          <p>We embrace technology and fresh perspectives to develop innovative solutions that address complex financial challenges.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative animate-fade-in">
                  <div className="absolute inset-0 bg-gradient-to-r from-apt-blue/10 to-apt-lightblue/5 rounded-lg transform -rotate-3"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Team working together with excellence" 
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

export default ExcellencePage;
