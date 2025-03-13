
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { serviceData } from '@/data/serviceData';
import { useEffect } from 'react';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = serviceData.find(s => s.id === serviceId);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!service) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container-tight">
            <div className="text-center py-12">
              <h1 className="text-2xl mb-4">Service Not Found</h1>
              <p className="mb-6">The service you're looking for doesn't exist.</p>
              <Link to="/services" className="btn-primary">View All Services</Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.title} - Affinity Altitude Accumate</title>
        <meta name="description" content={service.description} />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="bg-apt-blue text-white py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-apt-blue to-apt-blue/80 mix-blend-overlay" />
            <div className="container-tight relative z-10">
              <Link to="/services" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
                <ChevronLeft className="h-5 w-5 mr-1" />
                Back to Services
              </Link>
              <div className="max-w-3xl animate-fade-up">
                <div className="flex items-center mb-4">
                  <div className="bg-white/20 rounded-full p-4 mr-4">
                    <div className="text-white w-8 h-8">
                      {service.icon}
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{service.title}</h1>
                </div>
                <p className="text-xl text-white/90 leading-relaxed mt-4">
                  {service.description}
                </p>
              </div>
            </div>
          </section>
          
          {/* Main Content */}
          <section className="py-16 bg-white">
            <div className="container-tight">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-semibold mb-4 heading-underline">Overview</h2>
                    <p className="text-lg">{service.details}</p>
                    
                    <h2 className="text-2xl font-semibold mt-12 mb-4 heading-underline">Why Choose Us for {service.title}</h2>
                    <p className="text-lg">At Affinity Altitude Accumate, we bring a fresh approach to {service.title.toLowerCase()} services. As a new firm, we combine innovative methods with solid industry knowledge to deliver exceptional results for Australian businesses.</p>
                    
                    <h2 className="text-2xl font-semibold mt-12 mb-4 heading-underline">Our Process</h2>
                    <div className="mt-6 space-y-6">
                      {service.process.map((step, index) => (
                        <div key={index} className="flex">
                          <div className="bg-apt-blue/10 rounded-full h-10 w-10 flex items-center justify-center mr-4 mt-1 shrink-0">
                            <span className="text-apt-blue font-semibold">{index + 1}</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                            <p className="text-apt-text">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <h2 className="text-2xl font-semibold mt-12 mb-4 heading-underline">Benefits for Your Business</h2>
                    <ul className="space-y-4 mt-6">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className="bg-apt-blue/10 rounded-full p-1 mr-4 mt-1">
                            <svg className="w-5 h-5 text-apt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium text-lg">{benefit.title}</h3>
                            <p>{benefit.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-apt-gray rounded-lg p-6 shadow-sm sticky top-24">
                    <h3 className="text-xl font-semibold mb-4">Our Services</h3>
                    <div className="space-y-3">
                      {serviceData.map((s) => (
                        <Link 
                          key={s.id} 
                          to={`/services/${s.id}`} 
                          className={`block p-3 rounded-md transition-colors ${s.id === serviceId ? 'bg-apt-blue text-white' : 'hover:bg-apt-blue/10'}`}
                        >
                          <div className="flex items-center">
                            <div className={`w-6 h-6 mr-3 ${s.id === serviceId ? 'text-white' : 'text-apt-blue'}`}>
                              {s.icon}
                            </div>
                            <span>{s.title}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                      <p className="mb-4">Ready to transform your financial operations? Contact us today for a consultation.</p>
                      <Link to="/contact" className="btn-primary w-full text-center">Contact Us</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-12 bg-apt-gray">
            <div className="container-tight">
              <div className="bg-apt-blue rounded-lg p-8 text-white text-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to Get Started?</h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6">
                  Contact us today to discuss how our {service.title.toLowerCase()} services can be tailored to meet your unique business needs.
                </p>
                <Link to="/contact" className="bg-white text-apt-blue hover:bg-white/90 px-6 py-3 rounded-md font-medium transition-all inline-flex items-center">
                  Request a Consultation
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ServiceDetailPage;
