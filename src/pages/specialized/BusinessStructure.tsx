
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Building2, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessStructurePage = () => {
  return (
    <>
      <Helmet>
        <title>Business Structure Setup - Affinity Altitude Accumate</title>
        <meta name="description" content="Expert guidance on choosing and establishing the optimal business structure for your Australian business needs." />
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
                  <Building2 className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Business Structure Setup</h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Building the right foundation for your business success in Australia
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
                    Establishing the Right Business Structure
                  </h2>
                  <p className="text-lg">
                    At Affinity Altitude Accumate, we understand that choosing the right business structure is one of the most crucial decisions you'll make. The structure you select affects everything from your tax obligations and legal liability to your fundraising ability and day-to-day operations.
                  </p>
                  <p>
                    As a new firm with fresh perspectives on the Australian business landscape, we provide comprehensive guidance to help you select and establish the most advantageous structure for your unique business needs and future goals.
                  </p>
                  
                  <div className="mt-8 space-y-5">
                    <h3 className="text-2xl font-medium">Why Business Structure Matters:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <span>Determines your tax obligations and potential deductions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <span>Establishes your level of personal liability protection</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <span>Affects your ability to raise capital and attract investors</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-0.5" />
                        <span>Influences administrative requirements and regulatory obligations</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative animate-fade-in">
                  <div className="absolute inset-0 bg-gradient-to-r from-apt-blue/10 to-apt-lightblue/5 rounded-lg transform -rotate-3"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Modern business buildings representing different business structures" 
                    className="rounded-lg shadow-lg img-zoom relative z-10"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Business Structures Section */}
          <section className="py-20 bg-apt-gray">
            <div className="container-tight">
              <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
                <h2 className="heading-underline-center text-3xl md:text-4xl font-semibold mb-6">
                  Business Structure Options in Australia
                </h2>
                <p className="text-lg opacity-80">
                  We help you navigate these common business structures, evaluating their advantages and disadvantages for your specific situation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Sole Trader",
                    description: "The simplest structure where you operate the business as an individual. You have full control but also full personal liability for all business debts and obligations.",
                    pros: ["Simple and inexpensive to establish", "Complete control over the business", "Minimal regulatory requirements", "Lower setup and administration costs"],
                    cons: ["Unlimited personal liability", "Limited access to capital", "Tax may be higher as business grows", "Difficult to sell or transfer"]
                  },
                  {
                    title: "Partnership",
                    description: "An association of two or more people who run a business together. Partners share control, profits, and liability for the business.",
                    pros: ["Relatively easy to establish", "Shared financial commitment", "Combined knowledge and skills", "Potential tax advantages"],
                    cons: ["Joint liability for debts", "Potential disputes between partners", "Complicated dissolution process", "Tax obligations for each partner"]
                  },
                  {
                    title: "Company",
                    description: "A separate legal entity from its shareholders, providing limited liability protection and a more formal business structure.",
                    pros: ["Limited liability protection", "Easier to raise capital", "Potential tax advantages", "Perpetual existence independent of owners"],
                    cons: ["Higher setup and maintenance costs", "Complex regulatory requirements", "More extensive reporting obligations", "Less privacy due to public records"]
                  },
                  {
                    title: "Trust",
                    description: "A structure where trustees hold property or assets for the benefit of others (beneficiaries). Common in family businesses and investment activities.",
                    pros: ["Asset protection", "Flexible distribution of income", "Potential tax planning advantages", "Estate planning benefits"],
                    cons: ["Complex to establish and maintain", "Higher setup costs", "Trustees have strict legal obligations", "Subject to trust law and regulations"]
                  }
                ].map((structure, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-up" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="text-xl font-semibold mb-4">{structure.title}</h3>
                    <p className="mb-6">{structure.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-apt-blue mb-2">Advantages</h4>
                        <ul className="space-y-2">
                          {structure.pros.map((pro, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <CheckCircle className="text-green-500 shrink-0 mr-2 h-4 w-4 mt-0.5" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-apt-blue mb-2">Disadvantages</h4>
                        <ul className="space-y-2">
                          {structure.cons.map((con, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <span className="text-red-500 shrink-0 mr-2 h-4 w-4 mt-0.5 font-bold">•</span>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Services Process Section */}
          <section className="py-20 bg-white">
            <div className="container-tight">
              <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
                <h2 className="heading-underline-center text-3xl md:text-4xl font-semibold mb-6">
                  Our Business Structure Setup Services
                </h2>
                <p className="text-lg opacity-80">
                  We provide end-to-end support to help you establish the optimal business structure for your unique needs.
                </p>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Structure Assessment & Recommendation",
                    description: "We evaluate your business goals, growth plans, financial position, and risk profile to recommend the most appropriate structure for your specific situation."
                  },
                  {
                    title: "Entity Formation & Registration",
                    description: "We handle all the paperwork and processes required to formally establish your chosen business structure, including ABN, TFN, GST, and ASIC registrations."
                  },
                  {
                    title: "Governance & Compliance Setup",
                    description: "We develop the necessary legal documents and governance frameworks to ensure your business operates in compliance with all relevant regulations."
                  },
                  {
                    title: "Tax Planning & Strategy",
                    description: "We create tax-efficient strategies aligned with your business structure to minimize your tax burden while maintaining full compliance with ATO requirements."
                  },
                  {
                    title: "Structure Review & Optimization",
                    description: "As your business evolves, we continuously review your structure to ensure it remains optimal for your changing needs and goals."
                  }
                ].map((service, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 animate-fade-up" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-16">
                <Link to="/contact" className="btn-primary inline-flex items-center group">
                  Contact Us for Expert Structure Advice
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

export default BusinessStructurePage;
