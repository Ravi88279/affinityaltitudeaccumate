
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { serviceData } from '@/data/serviceData';
import { 
  BarChart3, Building2, 
  DollarSign, Landmark, 
  ShieldCheck, TrendingUp,
  ArrowRight, MapPin
} from 'lucide-react';
import { useEffect } from 'react';

const ServicesPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const specializedServices = [
    {
      id: 'financial-analysis',
      title: 'Financial Analysis',
      description: 'In-depth analysis of financial data to identify trends, opportunities, and areas for improvement in your business operations.',
      icon: <BarChart3 className="w-full h-full" />,
      link: '/specialized/financial-analysis'
    },
    {
      id: 'business-structure',
      title: 'Business Structure Setup',
      description: 'Guidance on choosing and establishing the optimal business structure for your needs, including company formation, partnerships, and trusts.',
      icon: <Building2 className="w-full h-full" />,
      link: '/specialized/business-structure'
    },
    {
      id: 'cash-flow',
      title: 'Cash Flow Management',
      description: 'Strategies and tools to monitor, analyze, and improve cash flow, ensuring your business maintains adequate liquidity for operations and growth.',
      icon: <DollarSign className="w-full h-full" />,
      link: '/specialized/cash-flow'
    },
    {
      id: 'smsf',
      title: 'SMSF Accounting',
      description: 'Specialized accounting and compliance services for Self-Managed Super Funds, helping you navigate complex regulatory requirements.',
      icon: <Landmark className="w-full h-full" />,
      link: '/specialized/smsf'
    },
    {
      id: 'audit',
      title: 'Audit Protection',
      description: 'Proactive measures to ensure your financial records are audit-ready, with support and representation in case of regulatory audits.',
      icon: <ShieldCheck className="w-full h-full" />,
      link: '/specialized/audit'
    },
    {
      id: 'budgeting',
      title: 'Budgeting & Forecasting',
      description: 'Development of realistic budgets and financial forecasts to guide business planning, resource allocation, and performance evaluation.',
      icon: <TrendingUp className="w-full h-full" />,
      link: '/specialized/budgeting'
    }
  ];

  // FAQs with toggle functionality
  const faqs = [
    {
      question: "As a new firm, how experienced is your team?",
      answer: "While Affinity Altitude Accumate is a new firm, our team brings substantial industry experience. Our professionals have worked with various businesses across Australia, providing expert financial services before joining our team."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We work with businesses across multiple sectors in Australia, with particular expertise in retail, professional services, technology, healthcare, and construction. Our diverse experience allows us to understand industry-specific challenges and opportunities."
    },
    {
      question: "How do you charge for your services?",
      answer: "We offer transparent, value-based pricing with several options: fixed monthly fees for ongoing services, project-based pricing for specific engagements, and hourly rates for certain advisory services. We'll discuss your needs and provide clear pricing information before you commit."
    },
    {
      question: "How often will we communicate about my finances?",
      answer: "Communication frequency depends on your needs and the services we provide. For ongoing clients, we typically schedule monthly or quarterly reviews, with additional check-ins during busy periods or when addressing specific financial matters."
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
        <main className="flex-grow pt-20">
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
                      <div className="bg-white rounded-lg p-6 shadow-sm card-hover border border-gray-100 h-full group">
                        <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-apt-blue/20 transition-colors duration-300">
                          <div className="text-apt-blue w-8 h-8">
                            {service.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-medium mb-3 group-hover:text-apt-blue transition-colors duration-300">{service.title}</h3>
                        <p className="text-apt-text">{service.description}</p>
                        <div className="mt-4 text-apt-blue flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="font-medium">View details</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Visit Us Section with Map */}
          <section className="py-16 bg-white">
            <div className="container-tight">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-fade-up">
                  <div className="text-apt-blue font-medium">Visit Our Office</div>
                  <h2 className="heading-underline text-3xl md:text-4xl font-semibold mb-6">
                    We're Here to Help
                  </h2>
                  <p className="text-lg">
                    As a new firm in the Australian market, Affinity Altitude Accumate is conveniently located in Sydney's financial district. We welcome you to visit our office to discuss your business needs in person.
                  </p>
                  
                  <div className="mt-8 bg-apt-gray p-6 rounded-lg">
                    <div className="flex items-start">
                      <MapPin className="text-apt-blue shrink-0 mr-3 h-5 w-5 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg">Our Address:</h3>
                        <p className="mb-1">123 Financial District</p>
                        <p className="mb-1">Sydney, NSW 2000</p>
                        <p className="mb-4">Australia</p>
                        <a 
                          href="https://maps.google.com/?q=Sydney+NSW+2000+Australia" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost py-2 inline-flex items-center"
                        >
                          <span>View on Google Maps</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative animate-fade-in rounded-lg overflow-hidden shadow-lg border border-gray-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13251.016266076307!2d151.2046789!3d-33.8696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x8f7588d9d4e5964c!2sSydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2sus!4v1653000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  ></iframe>
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
                    <Link to={service.link} className="block h-full">
                      <div className="bg-white rounded-lg p-6 shadow-sm card-hover border border-gray-100 h-full group">
                        <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-apt-blue/20 transition-colors duration-300">
                          <div className="text-apt-blue w-8 h-8">
                            {service.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-medium mb-3 group-hover:text-apt-blue transition-colors duration-300">{service.title}</h3>
                        <p className="text-apt-text">{service.description}</p>
                        <div className="mt-4 text-apt-blue flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="font-medium">View details</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section className="py-20 bg-white">
            <div className="container-tight">
              <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
                <div className="text-apt-blue font-medium mb-3">FAQ</div>
                <h2 className="heading-underline-center text-3xl md:text-4xl font-semibold mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg opacity-80">
                  Find answers to common questions about our services.
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg shadow-sm overflow-hidden animate-fade-up border border-gray-100"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <details className="group">
                      <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-lg">
                        {faq.question}
                        <span className="text-apt-blue flex items-center justify-center h-6 w-6 rounded-full border border-apt-blue/30 group-open:rotate-45 transition-transform duration-300">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </summary>
                      <div className="px-6 pb-6 -mt-2 text-apt-text">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-16 animate-fade-up">
                <h3 className="text-2xl font-semibold mb-6">Ready to Get Started?</h3>
                <p className="text-lg max-w-2xl mx-auto mb-8">
                  Contact us today to discuss how our services can be tailored to meet the unique needs of your business.
                </p>
                <Link to="/contact" className="btn-primary inline-flex items-center group">
                  Contact Us Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
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
