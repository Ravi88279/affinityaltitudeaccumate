
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, DollarSign, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const CashFlowManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cash Flow Management - Affinity Altitude Accumate</title>
        <meta name="description" content="Professional cash flow management services to help your business maintain optimal liquidity and financial health." />
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
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Cash Flow Management</h1>
                </div>
                <p className="text-xl text-white/90 leading-relaxed mt-4">
                  Strategic solutions to optimize your business cash flow, ensuring stability and growth opportunities.
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
                      Cash flow is the lifeblood of any business. At Affinity Altitude Accumate, we help Australian businesses develop robust cash flow management strategies that provide clear visibility into your financial position, ensure you have adequate liquidity for operations, and identify opportunities for improvement.
                    </p>
                    
                    <p className="text-lg mt-4">
                      Our comprehensive cash flow management services are designed to address the unique challenges faced by businesses in today's dynamic Australian market. We work closely with you to understand your business cycles, identify patterns in your cash flow, and implement strategies that maintain healthy financial reserves while maximizing growth opportunities.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mt-12 mb-4 heading-underline">Our Approach</h2>
                    <p className="text-lg">
                      As a new firm in the Australian market, we bring fresh perspectives to traditional cash flow management practices. Our approach combines innovative analytical methods with practical solutions that work in real-world business environments.
                    </p>
                    
                    <div className="mt-8 space-y-6">
                      {[
                        {
                          title: "Cash Flow Forecasting",
                          description: "We develop accurate cash flow projections that help you anticipate future financial positions and make informed decisions."
                        },
                        {
                          title: "Working Capital Optimization",
                          description: "We analyze your inventory management, accounts receivable, and accounts payable processes to identify opportunities for improving working capital efficiency."
                        },
                        {
                          title: "Cash Flow Monitoring",
                          description: "We implement systems for ongoing monitoring of cash flow metrics, providing early warning of potential issues and regular insights into performance."
                        },
                        {
                          title: "Cash Flow Crisis Management",
                          description: "We develop contingency plans and emergency strategies to help your business navigate unexpected cash flow challenges."
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
                    
                    <h2 className="text-2xl font-semibold mt-12 mb-4 heading-underline">Benefits for Your Business</h2>
                    <ul className="space-y-4 mt-6">
                      {[
                        {
                          title: "Enhanced Financial Stability",
                          description: "Maintain adequate liquidity to meet operational needs and navigate market fluctuations with confidence."
                        },
                        {
                          title: "Improved Decision Making",
                          description: "Make informed business decisions based on accurate cash flow projections and financial insights."
                        },
                        {
                          title: "Reduced Financial Stress",
                          description: "Eliminate the uncertainty that comes with poor cash flow visibility and management."
                        },
                        {
                          title: "Growth Opportunities",
                          description: "Identify and capitalize on expansion opportunities with a clear understanding of your financial capabilities."
                        },
                        {
                          title: "Better Stakeholder Relationships",
                          description: "Maintain positive relationships with suppliers, employees, and investors through consistent financial management."
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
                  </div>
                </div>
                
                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-apt-gray rounded-lg p-6 shadow-sm sticky top-24">
                    <h3 className="text-xl font-semibold mb-4">Request a Consultation</h3>
                    <p className="mb-6">
                      Looking to improve your business cash flow? Contact us today for a no-obligation discussion about how our cash flow management services can benefit your organization.
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
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to Optimize Your Cash Flow?</h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6">
                  Partner with Affinity Altitude Accumate for expert cash flow management services tailored to your business needs.
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

export default CashFlowManagement;
