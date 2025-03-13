
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, ShieldCheck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const AuditProtection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Audit Protection - Affinity Altitude Accumate</title>
        <meta name="description" content="Comprehensive audit protection services to help your business navigate ATO audits with confidence." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="bg-apt-blue text-white py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-apt-blue to-apt-blue/80 mix-blend-overlay" />
            <div className="container-tight relative z-10">
              <Link to="/services" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back to Services
              </Link>
              <div className="max-w-3xl animate-fade-up">
                <div className="flex items-center mb-4">
                  <div className="bg-white/20 rounded-full p-4 mr-4">
                    <ShieldCheck className="h-8 w-8 text-white" />
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Audit Protection</h1>
                </div>
                <p className="text-xl text-white/90 leading-relaxed mt-4">
                  Comprehensive support to help your business confidently navigate ATO audits and reviews.
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
                    <p className="text-lg">
                      Tax audits can be stressful and time-consuming for any business. At Affinity Altitude Accumate, we provide comprehensive audit protection services designed to help Australian businesses prepare for, respond to, and navigate tax authority audits with confidence and minimal disruption.
                    </p>
                    
                    <p className="text-lg mt-4">
                      Our approach focuses on both proactive compliance measures that minimize audit risk and responsive support in the event of an ATO inquiry. As a new firm with fresh perspectives, we combine innovative compliance strategies with deep knowledge of Australian tax law to provide exceptional audit protection.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mt-12 mb-4 heading-underline">Our Services</h2>
                    
                    <div className="mt-8 space-y-6">
                      {[
                        {
                          title: "Audit Risk Assessment",
                          description: "We conduct a comprehensive review of your business operations and tax procedures to identify potential audit triggers and compliance gaps."
                        },
                        {
                          title: "Compliance Documentation",
                          description: "We help you establish robust record-keeping systems and documentation processes that support your tax positions in the event of an audit."
                        },
                        {
                          title: "Audit Representation",
                          description: "Our team provides professional representation during ATO audits, handling communications, information requests, and negotiations on your behalf."
                        },
                        {
                          title: "Post-Audit Support",
                          description: "We assist with implementing any required changes following an audit and develop strategies to prevent future compliance issues."
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex">
                          <div className="bg-apt-blue/10 rounded-full h-10 w-10 flex items-center justify-center mr-4 mt-1 shrink-0">
                            <span className="text-apt-blue font-semibold">{index + 1}</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                            <p className="text-apt-text">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <h2 className="text-2xl font-semibold mt-12 mb-4 heading-underline">Benefits of Our Audit Protection</h2>
                    <ul className="space-y-4 mt-6">
                      {[
                        {
                          title: "Peace of Mind",
                          description: "Know that your business is prepared for potential ATO scrutiny and has expert support available when needed."
                        },
                        {
                          title: "Reduced Disruption",
                          description: "Minimize the operational impact of audits through efficient management of the audit process."
                        },
                        {
                          title: "Expert Representation",
                          description: "Benefit from professional representation that understands ATO procedures and effective negotiation strategies."
                        },
                        {
                          title: "Financial Protection",
                          description: "Reduce the potential for unexpected tax liabilities, penalties, and professional fees associated with audits."
                        },
                        {
                          title: "Improved Compliance",
                          description: "Strengthen your overall tax compliance posture, reducing the likelihood of future audits."
                        }
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="text-apt-blue shrink-0 mr-3 h-5 w-5 mt-1" />
                          <div>
                            <h3 className="font-medium text-lg">{benefit.title}</h3>
                            <p>{benefit.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <h2 className="text-2xl font-semibold mt-12 mb-4 heading-underline">Why Choose Affinity Altitude Accumate</h2>
                    <p className="text-lg">
                      As a new firm in the Australian market, we bring a fresh approach to audit protection services. Our team combines innovative thinking with deep knowledge of Australian tax law and ATO procedures. We're committed to providing personalized service that addresses your specific audit risks and compliance needs.
                    </p>
                    <p className="text-lg mt-4">
                      We understand that every business is unique, which is why we develop tailored audit protection strategies that align with your industry, size, and specific risk profile. Our goal is to help you navigate the complexities of tax compliance with confidence and minimal stress.
                    </p>
                  </div>
                </div>
                
                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-apt-gray rounded-lg p-6 shadow-sm sticky top-24">
                    <h3 className="text-xl font-semibold mb-4">Request a Consultation</h3>
                    <p className="mb-6">
                      Concerned about ATO audits? Contact us today to discuss how our audit protection services can help safeguard your business.
                    </p>
                    <Link to="/contact" className="btn-primary w-full text-center block">Contact Us</Link>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h3 className="text-xl font-semibold mb-4">Visit Our Office</h3>
                      <p className="mb-3">123 Financial District,</p>
                      <p className="mb-3">Sydney, NSW 2000</p>
                      <p className="mb-4">Australia</p>
                      <a 
                        href="https://maps.google.com/?q=Sydney+NSW+2000+Australia" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-apt-blue hover:underline inline-flex items-center"
                      >
                        <span>View on Map</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                      </a>
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
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Protect Your Business from Audit Stress</h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6">
                  Partner with Affinity Altitude Accumate for comprehensive audit protection services tailored to your business needs.
                </p>
                <Link to="/contact" className="bg-white text-apt-blue hover:bg-white/90 px-6 py-3 rounded-md font-medium transition-all inline-flex items-center">
                  Get Started Today
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

export default AuditProtection;
