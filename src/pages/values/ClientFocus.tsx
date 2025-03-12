
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Users, CheckCircle } from 'lucide-react';

const ClientFocusPage = () => {
  return (
    <>
      <Helmet>
        <title>Client Focus - Affinity Altitude Accumate</title>
        <meta name="description" content="Learn about our client-focused approach at Affinity Altitude Accumate." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="bg-apt-blue text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-apt-blue/30 mix-blend-overlay" />
            <div className="container-tight relative z-10">
              <div className="max-w-3xl mx-auto text-center animate-fade-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Client Focus</h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Building relationships that prioritize your financial success
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
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Client meeting with financial advisor" 
                    className="rounded-lg shadow-lg img-zoom relative z-10"
                  />
                </div>
                
                <div className="space-y-6 order-1 lg:order-2 animate-fade-up">
                  <h2 className="heading-underline text-3xl md:text-4xl font-semibold mb-6">
                    Putting Clients at the Heart of Our Business
                  </h2>
                  <p className="text-lg">
                    At Affinity Altitude Accumate, we believe that truly understanding our clients' needs is the key to providing exceptional financial services that make a real difference.
                  </p>
                  <p>
                    As a new firm in Australia, we're committed to building long-term relationships based on understanding your unique business challenges, goals, and vision. We take the time to listen and learn about what matters most to you.
                  </p>
                  
                  <div className="mt-8 space-y-4">
                    <h3 className="text-2xl font-medium">Our Client-Focused Approach:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-lg">Personalized Service</h4>
                          <p>We tailor our services to match your specific industry, business size, and financial objectives, avoiding one-size-fits-all solutions.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-lg">Responsive Communication</h4>
                          <p>We prioritize timely responses to your questions and concerns, ensuring you never feel left in the dark about your financial matters.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-lg">Proactive Advisors</h4>
                          <p>We don't just react to problems—we anticipate your needs and provide forward-thinking solutions that help you stay ahead.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-lg">Long-Term Perspective</h4>
                          <p>Our goal is to be your trusted financial partner throughout your business journey, growing alongside you and adapting our services as your needs evolve.</p>
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

export default ClientFocusPage;
