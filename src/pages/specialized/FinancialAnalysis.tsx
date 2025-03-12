
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { BarChart3, ChevronLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import MapLink from '@/components/ui/MapLink';

const FinancialAnalysis = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: "Informed Decision Making",
      description: "Gain actionable insights from your financial data to make confident, evidence-based business decisions."
    },
    {
      title: "Performance Optimization",
      description: "Identify strengths, weaknesses, and opportunities in your financial operations to improve overall performance."
    },
    {
      title: "Strategic Planning",
      description: "Use detailed financial analysis to inform and support your long-term strategic planning process."
    },
    {
      title: "Risk Mitigation",
      description: "Spot potential financial risks early and develop effective strategies to mitigate their impact."
    }
  ];

  const process = [
    {
      title: "Initial Data Collection",
      description: "We gather comprehensive financial information from your business, including historical data and current performance metrics."
    },
    {
      title: "In-depth Analysis",
      description: "Our team applies advanced analytical tools and methodologies to extract meaningful insights from your financial data."
    },
    {
      title: "Insight Development",
      description: "We transform raw data into actionable business intelligence, identifying key trends, opportunities, and challenges."
    },
    {
      title: "Recommendation Preparation",
      description: "Based on our analysis, we develop tailored recommendations to optimize your financial performance and support your goals."
    },
    {
      title: "Strategic Implementation",
      description: "We work with you to implement recommended changes, monitoring results and making adjustments as needed."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Financial Analysis - Affinity Altitude Accumate</title>
        <meta name="description" content="In-depth financial analysis services from Affinity Altitude Accumate to help Australian businesses make data-driven decisions and optimize performance." />
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
                    <BarChart3 className="text-white w-8 h-8" />
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Financial Analysis</h1>
                </div>
                <p className="text-xl text-white/90 leading-relaxed mt-4">
                  In-depth analysis of financial data to identify trends, opportunities, and areas for improvement in your business operations.
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
                      Financial analysis is a critical tool for understanding your business's performance, identifying opportunities for growth, and making informed strategic decisions. At Affinity Altitude Accumate, our financial analysis services provide a comprehensive examination of your business's financial health, delivering actionable insights that can drive meaningful improvements.
                    </p>
                    <p>
                      As a new firm in the Australian market, we bring fresh perspectives to financial analysis, combining innovative analytical approaches with solid industry expertise. Our team uses advanced tools and methodologies to extract maximum value from your financial data, transforming complex numbers into clear, actionable business intelligence.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mt-12 mb-4 heading-underline">Our Financial Analysis Services</h2>
                    <p>
                      Our comprehensive financial analysis services include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Ratio Analysis:</strong> Evaluate key financial ratios to assess liquidity, profitability, efficiency, and leverage.</li>
                      <li><strong>Trend Analysis:</strong> Identify important patterns and trends in your financial data over time.</li>
                      <li><strong>Comparative Analysis:</strong> Benchmark your performance against industry standards and competitors.</li>
                      <li><strong>Cash Flow Analysis:</strong> Examine cash inflows and outflows to optimize liquidity management.</li>
                      <li><strong>Profitability Analysis:</strong> Assess revenue streams and cost structures to identify profit enhancement opportunities.</li>
                      <li><strong>Financial Forecasting:</strong> Develop projections to support planning and decision-making.</li>
                    </ul>
                    
                    <h2 className="text-2xl font-semibold mt-12 mb-4 heading-underline">Our Process</h2>
                    <div className="mt-6 space-y-6">
                      {process.map((step, index) => (
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
                      <p className="mb-4">Ready to transform your financial insights? Contact us today for a consultation.</p>
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
                          <Link to="/specialized/cash-flow" className="flex items-center hover:text-apt-blue transition-colors">
                            <ArrowRight className="h-4 w-4 mr-2 text-apt-blue" />
                            Cash Flow Management
                          </Link>
                        </li>
                        <li>
                          <Link to="/specialized/budgeting" className="flex items-center hover:text-apt-blue transition-colors">
                            <ArrowRight className="h-4 w-4 mr-2 text-apt-blue" />
                            Budgeting & Forecasting
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/business-advisory" className="flex items-center hover:text-apt-blue transition-colors">
                            <ArrowRight className="h-4 w-4 mr-2 text-apt-blue" />
                            Business Advisory
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
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to Gain Deeper Financial Insights?</h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6">
                  Contact us today to discuss how our financial analysis services can be tailored to meet your unique business needs.
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

export default FinancialAnalysis;
