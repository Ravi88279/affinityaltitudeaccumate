
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { serviceData } from '@/data/serviceData';
import { 
  BarChart3, Building2, 
  DollarSign, Landmark, 
  ShieldCheck, TrendingUp
} from 'lucide-react';

const ServicesPage = () => {
  const specializedServices = [
    {
      id: 'financial-analysis',
      title: 'Financial Analysis',
      description: 'In-depth analysis of financial data to identify trends, opportunities, and areas for improvement in your business operations.',
      icon: <BarChart3 className="w-full h-full" />
    },
    {
      id: 'business-structure',
      title: 'Business Structure Setup',
      description: 'Guidance on choosing and establishing the optimal business structure for your needs, including company formation, partnerships, and trusts.',
      icon: <Building2 className="w-full h-full" />
    },
    {
      id: 'cash-flow',
      title: 'Cash Flow Management',
      description: 'Strategies and tools to monitor, analyze, and improve cash flow, ensuring your business maintains adequate liquidity for operations and growth.',
      icon: <DollarSign className="w-full h-full" />
    },
    {
      id: 'smsf',
      title: 'SMSF Accounting',
      description: 'Specialized accounting and compliance services for Self-Managed Super Funds, helping you navigate complex regulatory requirements.',
      icon: <Landmark className="w-full h-full" />
    },
    {
      id: 'audit-protection',
      title: 'Audit Protection',
      description: 'Proactive measures to ensure your financial records are audit-ready, with support and representation in case of regulatory audits.',
      icon: <ShieldCheck className="w-full h-full" />
    },
    {
      id: 'budgeting',
      title: 'Budgeting & Forecasting',
      description: 'Development of realistic budgets and financial forecasts to guide business planning, resource allocation, and performance evaluation.',
      icon: <TrendingUp className="w-full h-full" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Affinity Altitude Accumate</title>
        <meta name="description" content="Explore the comprehensive range of accounting, bookkeeping, and financial services offered by Affinity Altitude Accumate." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          {/* Hero Section */}
          <section className="bg-apt-blue text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-apt-blue to-apt-lightblue/70 mix-blend-overlay" />
            <div className="container-tight relative z-10">
              <div className="max-w-3xl mx-auto text-center animate-fade-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Services</h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Comprehensive financial solutions tailored to meet the unique needs of your Australian business.
                </p>
              </div>
            </div>
          </section>
          
          {/* Core Services */}
          <section className="py-20 bg-[#f9f9ff]">
            <div className="container-tight">
              <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
                <div className="text-apt-blue font-medium mb-3">Core Services</div>
                <h2 className="heading-underline-center text-3xl md:text-4xl font-semibold mb-6">
                  Essential Financial Solutions
                </h2>
                <p className="text-lg opacity-80">
                  Our core services form the foundation of effective financial management for your business,
                  ensuring accuracy, compliance, and strategic insight.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceData.map((service, index) => (
                  <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <Link to={`/services/${service.id}`} className="block h-full">
                      <div className="bg-white rounded-lg p-6 shadow-sm card-hover border border-gray-100 h-full">
                        <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                          <div className="text-apt-blue w-8 h-8">
                            {service.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                        <p className="text-apt-text">{service.description}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Why Choose Us */}
          <section className="py-20 bg-white">
            <div className="container-tight">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative order-2 lg:order-1 animate-fade-in">
                  <img 
                    src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Professional accounting services" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="space-y-6 order-1 lg:order-2 animate-fade-up">
                  <div className="text-apt-blue font-medium">Why Choose Us</div>
                  <h2 className="heading-underline text-3xl md:text-4xl font-semibold mb-6">
                    The Affinity Altitude Advantage
                  </h2>
                  <p className="text-lg">
                    As a new firm in the Australian market, Affinity Altitude Accumate brings a fresh perspective to accounting and bookkeeping services, combining innovative approaches with solid industry expertise.
                  </p>
                  
                  <ul className="space-y-4 mt-8">
                    <li className="flex items-start">
                      <div className="bg-apt-blue/10 rounded-full p-1 mr-4 mt-1">
                        <svg className="w-5 h-5 text-apt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Personalized Approach</h3>
                        <p>We take the time to understand your unique business needs and tailor our services accordingly.</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-apt-blue/10 rounded-full p-1 mr-4 mt-1">
                        <svg className="w-5 h-5 text-apt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Experienced Team</h3>
                        <p>Our professionals bring years of industry expertise and specialized knowledge to every client engagement.</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-apt-blue/10 rounded-full p-1 mr-4 mt-1">
                        <svg className="w-5 h-5 text-apt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Timely Delivery</h3>
                        <p>We understand the importance of meeting deadlines and consistently deliver our services on time.</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-apt-blue/10 rounded-full p-1 mr-4 mt-1">
                        <svg className="w-5 h-5 text-apt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Transparent Pricing</h3>
                        <p>Our fee structure is clear and straightforward, with no hidden costs or unexpected charges.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Specialized Services */}
          <section className="py-20 bg-[#f9f9ff]">
            <div className="container-tight">
              <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
                <div className="text-apt-blue font-medium mb-3">Specialized Services</div>
                <h2 className="heading-underline-center text-3xl md:text-4xl font-semibold mb-6">
                  Advanced Financial Solutions
                </h2>
                <p className="text-lg opacity-80">
                  Beyond our core offerings, we provide specialized services to address specific financial 
                  challenges and opportunities in your business.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {specializedServices.map((service, index) => (
                  <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <Link to={`/specialized-services/${service.id}`} className="block h-full">
                      <div className="bg-white rounded-lg p-6 shadow-sm card-hover border border-gray-100 h-full">
                        <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                          <div className="text-apt-blue w-8 h-8">
                            {service.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                        <p className="text-apt-text">{service.description}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-16 animate-fade-up">
                <h3 className="text-2xl font-semibold mb-6">Ready to Get Started?</h3>
                <p className="text-lg max-w-2xl mx-auto mb-8">
                  Contact us today to discuss how our services can be tailored to meet the unique needs of your business.
                </p>
                <Link to="/contact" className="btn-primary inline-flex items-center">
                  Contact Us Now
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

export default ServicesPage;
