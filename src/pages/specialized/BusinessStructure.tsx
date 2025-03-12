
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Building2, ChevronLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import MapLink from '@/components/ui/MapLink';

const BusinessStructure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: "Tax Efficiency",
      description: "Optimize your tax position with a business structure designed to minimize your tax obligations while remaining fully compliant."
    },
    {
      title: "Asset Protection",
      description: "Protect your personal and business assets with appropriate legal structures that limit liability exposure."
    },
    {
      title: "Growth Facilitation",
      description: "Establish a structure that can accommodate future growth, including bringing on new partners or expanding into new markets."
    },
    {
      title: "Simplified Compliance",
      description: "Navigate regulatory requirements more easily with a well-designed business structure tailored to your specific situation."
    }
  ];

  const structures = [
    {
      title: "Sole Trader",
      description: "Simple structure with minimal setup costs and requirements, but no separation between business and personal assets.",
      suitable: "Small businesses with low risk profiles and individual entrepreneurs just starting out."
    },
    {
      title: "Partnership",
      description: "Shared ownership and responsibility between two or more parties, governed by a partnership agreement.",
      suitable: "Professional service firms, family businesses, and ventures requiring complementary skill sets."
    },
    {
      title: "Company",
      description: "Separate legal entity with limited liability for shareholders, more complex regulatory requirements.",
      suitable: "Businesses with multiple owners, higher risk profiles, or significant growth plans."
    },
    {
      title: "Trust",
      description: "Separate entity that holds assets for the benefit of others, offering tax advantages and asset protection.",
      suitable: "Family businesses, investment activities, and estate planning purposes."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Business Structure Setup - Affinity Altitude Accumate</title>
        <meta name="description" content="Expert guidance on choosing and establishing the optimal business structure for your Australian business, including company formation, partnerships, and trusts." />
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
                    <Building2 className="text-white w-8 h-8" />
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Business Structure Setup</h1>
                </div>
                <p className="text-xl text-white/90 leading-relaxed mt-4">
                  Guidance on choosing and establishing the optimal business structure for your needs, including company formation, partnerships, and trusts.
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
                      Choosing the right business structure is one of the most important decisions you'll make when establishing or growing your business in Australia. The structure you select will impact your tax obligations, personal liability, administrative requirements, and ability to raise capital.
                    </p>
                    <p>
                      At Affinity Altitude Accumate, we provide expert guidance on selecting and implementing the optimal business structure for your specific circumstances. As a new firm with fresh perspectives, we combine innovative approaches with solid understanding of Australian business regulations to ensure your business is set up for success.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mt-12 mb-4 heading-underline">Common Business Structures in Australia</h2>
                    <div className="space-y-6 mt-6">
                      {structures.map((structure, index) => (
                        <div key={index} className="bg-apt-gray/50 p-6 rounded-lg">
                          <h3 className="text-xl font-semibold mb-2">{structure.title}</h3>
                          <p className="mb-3">{structure.description}</p>
                          <p className="text-sm font-medium">
                            <span className="text-apt-blue">Best suited for:</span> {structure.suitable}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <h2 className="text-2xl font-semibold mt-12 mb-4 heading-underline">Our Business Structure Services</h2>
                    <p>
                      Our comprehensive business structure services include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Structure Assessment:</strong> Evaluation of your business goals, risk profile, and financial situation to recommend the optimal structure.</li>
                      <li><strong>Company Formation:</strong> Complete setup of proprietary limited companies, including ASIC registration and compliance requirements.</li>
                      <li><strong>Partnership Agreements:</strong> Development of comprehensive agreements that clearly define roles, responsibilities, and profit-sharing arrangements.</li>
                      <li><strong>Trust Establishment:</strong> Setup of various trust structures, including family trusts, unit trusts, and discretionary trusts.</li>
                      <li><strong>ABN & Tax Registrations:</strong> Management of all necessary registrations with the ATO and other regulatory bodies.</li>
                      <li><strong>Structure Transition:</strong> Guidance on transitioning from one business structure to another as your business evolves.</li>
                    </ul>
                    
                    <h2 className="text-2xl font-semibold mt-12 mb-4 heading-underline">Benefits for Your Business</h2>
                    <ul className="space-y-4 mt-6">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="text-apt-blue shrink-0 mr-3 h-5 w-5 mt-0.5" />
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
                  <div className="bg-apt-gray rounded-lg p-6 shadow-sm sticky top-24 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                      <p className="mb-4">Ready to establish the optimal structure for your business? Contact us today for expert guidance.</p>
                      <Link to="/contact" className="btn-primary w-full text-center">Contact Us</Link>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="text-xl font-semibold mb-4">Our Location</h3>
                      <MapLink address="123 Financial Street, Sydney, NSW 2000, Australia" className="mb-3" />
                      <p className="text-sm text-apt-text/80 mt-2">Click the address to view on Google Maps</p>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="text-xl font-semibold mb-4">Related Services</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/services/tax-planning" className="flex items-center hover:text-apt-blue transition-colors">
                            <ArrowRight className="h-4 w-4 mr-2 text-apt-blue" />
                            Tax Planning
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/business-advisory" className="flex items-center hover:text-apt-blue transition-colors">
                            <ArrowRight className="h-4 w-4 mr-2 text-apt-blue" />
                            Business Advisory
                          </Link>
                        </li>
                        <li>
                          <Link to="/specialized/audit" className="flex items-center hover:text-apt-blue transition-colors">
                            <ArrowRight className="h-4 w-4 mr-2 text-apt-blue" />
                            Audit Protection
                          </Link>
                        </li>
                      </ul>
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
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to Structure Your Business for Success?</h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6">
                  Contact us today to discuss how we can help you establish the optimal business structure for your Australian business.
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

export default BusinessStructure;
