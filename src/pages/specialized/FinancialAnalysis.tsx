
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BarChart3, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancialAnalysisPage = () => {
  return (
    <>
      <Helmet>
        <title>Financial Analysis Services - Affinity Altitude Accumate</title>
        <meta name="description" content="Comprehensive financial analysis services to help your business make informed decisions and identify growth opportunities." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="bg-apt-blue text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-apt-blue/30 mix-blend-overlay" />
            <div className="container-tight relative z-10">
              <div className="max-w-3xl mx-auto text-center animate-fade-up">
                <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Financial Analysis</h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Transform complex financial data into strategic insights for better business decisions
                </p>
              </div>
            </div>
          </section>
          
          {/* Overview Section */}
          <section className="py-20 bg-white">
            <div className="container-tight">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6 animate-fade-up">
                  <h2 className="heading-underline text-3xl md:text-4xl font-semibold mb-6">
                    Comprehensive Financial Analysis
                  </h2>
                  <p className="text-lg">
                    At Affinity Altitude Accumate, we transform raw financial data into meaningful insights that drive smart business decisions. Our financial analysis services help you understand where your business stands today and chart a course for future growth.
                  </p>
                  <p>
                    As a new firm serving Australian businesses, we combine fresh perspectives with proven analytical methodologies to provide you with clear, actionable intelligence about your financial performance, trends, and opportunities.
                  </p>
                  
                  <div className="mt-8 space-y-5">
                    <h3 className="text-2xl font-medium">Why Financial Analysis Matters:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <span>Identify profitable business segments and underperforming areas</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <span>Spot trends and patterns that impact your financial health</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <span>Make data-driven decisions with confidence</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <span>Support funding applications with solid financial insights</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative animate-fade-in">
                  <div className="absolute inset-0 bg-gradient-to-r from-apt-blue/10 to-apt-lightblue/5 rounded-lg transform -rotate-3"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Financial analysis and data visualization" 
                    className="rounded-lg shadow-lg img-zoom relative z-10"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Process Section */}
          <section className="py-20 bg-apt-gray">
            <div className="container-tight">
              <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
                <h2 className="heading-underline-center text-3xl md:text-4xl font-semibold mb-6">
                  Our Financial Analysis Process
                </h2>
                <p className="text-lg opacity-80">
                  We follow a structured approach to deliver insightful financial analysis that adds real value to your business.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    step: "1",
                    title: "Data Collection",
                    description: "We gather financial data from your accounting system, including income statements, balance sheets, cash flow statements, and other relevant information."
                  },
                  {
                    step: "2",
                    title: "Analysis & Interpretation",
                    description: "Our experts analyze financial ratios, trends, and comparative metrics to identify strengths, weaknesses, and opportunities within your financial data."
                  },
                  {
                    step: "3",
                    title: "Insight Development",
                    description: "We transform our analysis into meaningful business insights, focusing on what the numbers mean for your specific industry and business goals."
                  },
                  {
                    step: "4",
                    title: "Recommendations",
                    description: "We provide clear, actionable recommendations to improve financial performance, address concerns, and capitalize on growth opportunities."
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 relative border-t-4 border-apt-blue animate-fade-up" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute -top-5 -left-5 bg-apt-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 pt-2">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Services Section */}
          <section className="py-20 bg-white">
            <div className="container-tight">
              <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
                <h2 className="heading-underline-center text-3xl md:text-4xl font-semibold mb-6">
                  What We Offer
                </h2>
                <p className="text-lg opacity-80">
                  Our comprehensive financial analysis services include:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Ratio Analysis",
                    description: "Evaluation of liquidity, profitability, efficiency, and leverage ratios to assess your financial health and operational effectiveness."
                  },
                  {
                    title: "Trend Analysis",
                    description: "Identification of patterns and trajectories in your financial data over time to spot opportunities and potential issues early."
                  },
                  {
                    title: "Competitor Benchmarking",
                    description: "Comparison of your financial performance against industry standards and competitors to identify competitive advantages and areas for improvement."
                  },
                  {
                    title: "Cash Flow Analysis",
                    description: "Detailed examination of cash inflows and outflows to ensure adequate liquidity and optimize cash management strategies."
                  },
                  {
                    title: "Profitability Analysis",
                    description: "Assessment of revenue streams, cost structures, and profit margins across different business segments, products, or services."
                  },
                  {
                    title: "Financial Forecasting",
                    description: "Development of forward-looking financial projections based on historical data, market trends, and strategic initiatives."
                  }
                ].map((service, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 animate-fade-up hover:-translate-y-2 transition-transform duration-300" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-16">
                <Link to="/contact" className="btn-primary inline-flex items-center group">
                  Contact Us to Learn More
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

export default FinancialAnalysisPage;
