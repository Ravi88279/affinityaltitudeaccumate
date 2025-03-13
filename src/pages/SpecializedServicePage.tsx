
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, CheckCircle, BarChart3, Building2, 
  DollarSign, Landmark, ShieldCheck, TrendingUp, 
  ArrowRight, ChevronRight
} from 'lucide-react';
import { useEffect } from 'react';

const SpecializedServicePage = () => {
  const { serviceId } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const specializedServices = [
    {
      id: 'financial-analysis',
      title: 'Financial Analysis',
      description: 'In-depth analysis of financial data to identify trends, opportunities, and areas for improvement in your business operations.',
      icon: <BarChart3 className="w-full h-full" />,
      color: 'bg-blue-600',
      details: 'Our Financial Analysis service provides a comprehensive examination of your business\'s financial health, performance, and trajectory. We analyze historical data, current financial statements, and market conditions to provide actionable insights that help you make informed decisions. As a new firm, we bring fresh perspectives to financial analysis, combining traditional methodologies with innovative approaches.',
      benefits: [
        {
          title: 'Identify Growth Opportunities',
          description: 'Discover untapped revenue streams and growth potential in your current business model.'
        },
        {
          title: 'Spot Financial Risks',
          description: 'Identify potential financial risks before they become problems and develop mitigation strategies.'
        },
        {
          title: 'Improve Profitability',
          description: 'Analyze your cost structure and revenue streams to enhance overall profitability.'
        },
        {
          title: 'Strategic Decision Support',
          description: 'Gain data-driven insights to support major business decisions and investments.'
        }
      ],
      process: [
        {
          step: 1,
          title: 'Data Collection',
          description: 'We gather financial data from various sources, including financial statements, operational reports, and industry benchmarks.'
        },
        {
          step: 2,
          title: 'Comprehensive Analysis',
          description: 'We perform ratio analysis, trend analysis, cash flow analysis, and comparative industry benchmarking.'
        },
        {
          step: 3,
          title: 'Insight Development',
          description: 'We interpret the analysis to develop meaningful insights specific to your business situation.'
        },
        {
          step: 4,
          title: 'Reporting & Recommendations',
          description: 'We provide a detailed report with actionable recommendations to improve financial performance.'
        }
      ],
      cta: 'Get a Financial Health Check'
    },
    {
      id: 'business-structure',
      title: 'Business Structure Setup',
      description: 'Guidance on choosing and establishing the optimal business structure for your needs, including company formation, partnerships, and trusts.',
      icon: <Building2 className="w-full h-full" />,
      color: 'bg-amber-600',
      details: 'Choosing the right business structure is one of the most critical decisions you\'ll make as it affects everything from taxation to liability and management control. Our Business Structure Setup service helps Australian businesses select and implement the most advantageous business structure based on their specific circumstances, goals, and risk profile. As a new firm, we bring a fresh perspective to traditional business structures while ensuring full compliance with Australian regulations.',
      benefits: [
        {
          title: 'Tax Efficiency',
          description: 'Optimize your tax position with a structure that provides the most favorable tax treatment.'
        },
        {
          title: 'Asset Protection',
          description: 'Protect your personal assets from business liabilities with appropriate legal structures.'
        },
        {
          title: 'Simplified Compliance',
          description: 'Establish structures that simplify ongoing compliance requirements.'
        },
        {
          title: 'Scalability',
          description: 'Create a business structure that can easily accommodate future growth and changes.'
        }
      ],
      process: [
        {
          step: 1,
          title: 'Needs Analysis',
          description: 'We assess your business goals, financial situation, risk profile, and future plans.'
        },
        {
          step: 2,
          title: 'Structure Recommendation',
          description: 'We provide detailed information on suitable structures (sole trader, partnership, company, trust) with pros and cons of each.'
        },
        {
          step: 3,
          title: 'Implementation',
          description: 'We assist with all necessary registrations, applications, and documentation to establish your chosen structure.'
        },
        {
          step: 4,
          title: 'Ongoing Support',
          description: 'We provide guidance on meeting compliance obligations and review your structure as your business evolves.'
        }
      ],
      cta: 'Structure Your Business Right'
    },
    {
      id: 'cash-flow',
      title: 'Cash Flow Management',
      description: 'Strategies and tools to monitor, analyze, and improve cash flow, ensuring your business maintains adequate liquidity for operations and growth.',
      icon: <DollarSign className="w-full h-full" />,
      color: 'bg-green-600',
      details: 'Cash flow is the lifeblood of any business. Our Cash Flow Management service helps Australian businesses maintain healthy cash flow by implementing effective monitoring systems, developing forecasting tools, and creating strategies to optimize the timing of cash inflows and outflows. As a new firm, we combine proven cash management techniques with innovative approaches to ensure your business maintains optimal liquidity.',
      benefits: [
        {
          title: 'Prevent Cash Shortages',
          description: 'Anticipate potential cash shortfalls before they occur and take preventive measures.'
        },
        {
          title: 'Improve Planning',
          description: 'Make more informed decisions about timing of purchases, investments, and expansion.'
        },
        {
          title: 'Reduce Financing Costs',
          description: 'Minimize the need for short-term borrowing and associated interest expenses.'
        },
        {
          title: 'Seize Opportunities',
          description: 'Have cash available when opportunities for growth or investment arise.'
        }
      ],
      process: [
        {
          step: 1,
          title: 'Cash Flow Assessment',
          description: 'We analyze your current cash flow patterns, including timing of receivables, payables, and other cash movements.'
        },
        {
          step: 2,
          title: 'Forecasting Development',
          description: 'We create customized cash flow forecasting tools tailored to your business needs.'
        },
        {
          step: 3,
          title: 'Strategy Implementation',
          description: 'We implement strategies to improve cash collection, optimize payment timing, and enhance overall cash management.'
        },
        {
          step: 4,
          title: 'Monitoring & Adjustment',
          description: 'We establish monitoring systems and regularly review performance, making adjustments as needed.'
        }
      ],
      cta: 'Optimize Your Cash Flow'
    },
    {
      id: 'smsf',
      title: 'SMSF Accounting',
      description: 'Specialized accounting and compliance services for Self-Managed Super Funds, helping you navigate complex regulatory requirements.',
      icon: <Landmark className="w-full h-full" />,
      color: 'bg-purple-600',
      details: 'Self-Managed Super Funds (SMSFs) offer Australians greater control over their retirement investments but come with significant compliance obligations. Our SMSF Accounting service helps trustees meet their regulatory requirements while maximizing the benefits of their SMSF. As a new firm, we bring a fresh approach to SMSF accounting, combining thorough compliance knowledge with innovative service delivery.',
      benefits: [
        {
          title: 'Regulatory Compliance',
          description: 'Ensure your SMSF meets all ATO and legislative requirements, avoiding penalties.'
        },
        {
          title: 'Accurate Reporting',
          description: 'Receive precise financial statements and member benefit statements.'
        },
        {
          title: 'Investment Strategy Support',
          description: 'Get assistance in documenting and reviewing your fund\'s investment strategy.'
        },
        {
          title: 'Streamlined Administration',
          description: 'Simplify the administrative burden of running an SMSF.'
        }
      ],
      process: [
        {
          step: 1,
          title: 'Fund Review',
          description: 'We assess your current SMSF structure, investments, and compliance status.'
        },
        {
          step: 2,
          title: 'Annual Accounting',
          description: 'We prepare financial statements, member statements, and annual returns for your SMSF.'
        },
        {
          step: 3,
          title: 'Audit Coordination',
          description: 'We liaise with independent auditors to facilitate the mandatory annual audit.'
        },
        {
          step: 4,
          title: 'Ongoing Compliance',
          description: 'We provide regular updates on regulatory changes and ensure your fund remains compliant.'
        }
      ],
      cta: 'Manage Your SMSF Better'
    },
    {
      id: 'audit-protection',
      title: 'Audit Protection',
      description: 'Proactive measures to ensure your financial records are audit-ready, with support and representation in case of regulatory audits.',
      icon: <ShieldCheck className="w-full h-full" />,
      color: 'bg-red-600',
      details: 'An audit by the Australian Taxation Office (ATO) or other regulatory bodies can be a stressful and time-consuming experience for any business. Our Audit Protection service helps you prepare for potential audits, ensures your financial records are audit-ready, and provides expert representation if an audit occurs. As a new firm, we bring a fresh perspective to audit protection, combining thorough knowledge of Australian tax law with proactive risk management approaches.',
      benefits: [
        {
          title: 'Peace of Mind',
          description: 'Know that your business is prepared if selected for an audit.'
        },
        {
          title: 'Minimized Disruption',
          description: 'Reduce the impact of audits on your day-to-day business operations.'
        },
        {
          title: 'Expert Representation',
          description: 'Have experienced professionals handle communications with regulatory authorities.'
        },
        {
          title: 'Risk Reduction',
          description: 'Identify and address potential compliance issues before they trigger audits.'
        }
      ],
      process: [
        {
          step: 1,
          title: 'Risk Assessment',
          description: 'We evaluate your current financial records and processes to identify potential audit triggers.'
        },
        {
          step: 2,
          title: 'Documentation Review',
          description: 'We ensure all necessary documentation is properly maintained and readily accessible.'
        },
        {
          step: 3,
          title: 'Process Improvement',
          description: 'We implement procedures to enhance record-keeping and ensure ongoing compliance.'
        },
        {
          step: 4,
          title: 'Audit Representation',
          description: 'If an audit occurs, we provide expert representation to handle inquiries and minimize potential issues.'
        }
      ],
      cta: 'Protect Your Business'
    },
    {
      id: 'budgeting',
      title: 'Budgeting & Forecasting',
      description: 'Development of realistic budgets and financial forecasts to guide business planning, resource allocation, and performance evaluation.',
      icon: <TrendingUp className="w-full h-full" />,
      color: 'bg-teal-600',
      details: 'Effective budgeting and forecasting are essential for strategic planning and performance management. Our Budgeting & Forecasting service helps Australian businesses develop realistic financial projections, create actionable budgets, and track performance against targets. As a new firm, we bring a fresh approach to financial planning, combining traditional budgeting principles with innovative forecasting methodologies.',
      benefits: [
        {
          title: 'Strategic Alignment',
          description: 'Ensure your financial plans support your overall business strategy and goals.'
        },
        {
          title: 'Improved Decision Making',
          description: 'Make more informed decisions based on clear financial projections.'
        },
        {
          title: 'Performance Monitoring',
          description: 'Track actual performance against targets and identify variances early.'
        },
        {
          title: 'Resource Optimization',
          description: 'Allocate financial and operational resources more effectively.'
        }
      ],
      process: [
        {
          step: 1,
          title: 'Goal Identification',
          description: 'We work with you to clarify your business objectives and define key performance indicators.'
        },
        {
          step: 2,
          title: 'Budget Development',
          description: 'We create detailed budgets that translate your goals into specific financial targets.'
        },
        {
          step: 3,
          title: 'Forecast Creation',
          description: 'We develop financial forecasts that project your business\'s financial performance over time.'
        },
        {
          step: 4,
          title: 'Monitoring & Analysis',
          description: 'We implement systems to track actual results against budgets and provide regular variance analysis.'
        }
      ],
      cta: 'Plan Your Financial Future'
    }
  ];
  
  const service = specializedServices.find(s => s.id === serviceId);
  
  if (!service) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container-tight">
            <div className="text-center py-12">
              <h1 className="text-2xl mb-4">Service Not Found</h1>
              <p className="mb-6">The specialized service you're looking for doesn't exist.</p>
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
        <main className="flex-grow pt-16">
          {/* Hero Section */}
          <section className={`${service.color} text-white py-20 relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent mix-blend-overlay" />
            <div className="container-tight relative z-10">
              <Link to="/services" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-1" />
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
                    
                    <h2 className="text-2xl font-semibold mt-12 mb-8 heading-underline">Our Process</h2>
                    <div className="mt-6 space-y-6">
                      {service.process.map((step, index) => (
                        <div key={index} className="flex">
                          <div className={`${service.color} rounded-full h-10 w-10 flex items-center justify-center mr-4 mt-1 shrink-0 text-white`}>
                            <span className="font-semibold">{step.step}</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                            <p className="text-apt-text">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <h2 className="text-2xl font-semibold mt-12 mb-4 heading-underline">Benefits for Your Business</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="bg-apt-gray p-6 rounded-lg">
                          <div className="flex items-start mb-4">
                            <CheckCircle className={`text-${service.color.replace('bg-', '')} h-6 w-6 mr-2 mt-1 shrink-0`} />
                            <h3 className="font-medium text-lg">{benefit.title}</h3>
                          </div>
                          <p>{benefit.description}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-12 bg-apt-gray rounded-lg p-8">
                      <h2 className="text-2xl font-semibold mb-4">Why Choose Affinity Altitude Accumate?</h2>
                      <p className="text-lg mb-4">
                        As a new firm in the Australian market, we bring a fresh perspective to {service.title.toLowerCase()}. 
                        Our approach combines innovative methods with solid industry expertise, ensuring you receive both cutting-edge solutions and reliable service.
                      </p>
                      <p className="text-lg">
                        We understand the unique challenges faced by Australian businesses and tailor our {service.title.toLowerCase()} 
                        services to address your specific needs, providing personalized attention that larger firms often can't match.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-apt-gray rounded-lg p-6 shadow-sm sticky top-24">
                    <h3 className="text-xl font-semibold mb-4">Our Specialized Services</h3>
                    <div className="space-y-3">
                      {specializedServices.map((s) => (
                        <Link 
                          key={s.id} 
                          to={`/specialized-services/${s.id}`} 
                          className={`block p-3 rounded-md transition-colors ${s.id === serviceId ? `${service.color} text-white` : 'hover:bg-apt-blue/10'}`}
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
                      <Link to="/contact" className={`w-full text-center text-white py-3 px-6 rounded-md font-medium transition-all inline-block ${service.color} hover:opacity-90`}>
                        {service.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-semibold mb-6 text-center">Explore Other Specialized Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {specializedServices
                    .filter(s => s.id !== serviceId)
                    .slice(0, 3)
                    .map((s, index) => (
                      <Link 
                        key={index} 
                        to={`/specialized-services/${s.id}`}
                        className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center mb-4">
                          <div className="bg-apt-blue/10 rounded-full p-2 mr-3">
                            <div className="text-apt-blue w-5 h-5">
                              {s.icon}
                            </div>
                          </div>
                          <h4 className="font-medium">{s.title}</h4>
                        </div>
                        <p className="text-sm text-apt-text mb-3">{s.description}</p>
                        <div className="text-apt-blue text-sm flex items-center group-hover:underline">
                          Learn more <ChevronRight className="h-4 w-4 ml-1" />
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-12 bg-apt-gray">
            <div className="container-tight">
              <div className={`${service.color} rounded-lg p-8 text-white text-center`}>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to Get Started?</h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6">
                  Contact us today to discuss how our {service.title.toLowerCase()} services can be tailored to meet your unique business needs.
                </p>
                <Link to="/contact" className="bg-white text-apt-blue hover:bg-white/90 px-6 py-3 rounded-md font-medium transition-all inline-flex items-center">
                  Request a Consultation <ArrowRight className="ml-2 h-5 w-5" />
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

export default SpecializedServicePage;
