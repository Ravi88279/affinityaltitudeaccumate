
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Check, Users, Award, BadgeCheck, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const AboutPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - Affinity Altitude Accumate</title>
        <meta name="description" content="Learn about Affinity Altitude Accumate, our mission, and our commitment to providing quality financial services." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="bg-apt-blue text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-apt-blue/30 mix-blend-overlay" />
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white/10 animate-float"
                  style={{
                    width: `${Math.random() * 30 + 10}px`,
                    height: `${Math.random() * 30 + 10}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 15 + 10}s`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                ></div>
              ))}
            </div>
            <div className="container-tight relative z-10">
              <div className="max-w-3xl mx-auto text-center animate-fade-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Our Company</h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  We're a team of dedicated professionals committed to providing exceptional 
                  financial services to businesses across Australia.
                </p>
              </div>
            </div>
          </section>
          
          {/* Our Story */}
          <section className="py-20 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-apt-blue/10 rounded-full filter blur-3xl"></div>
            <div className="container-tight relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6 animate-fade-up">
                  <div className="text-apt-blue font-medium">Our Story</div>
                  <h2 className="heading-underline text-3xl md:text-4xl font-semibold mb-6">
                    A New Vision for Financial Services
                  </h2>
                  <p className="text-lg">
                    Affinity Altitude Accumate was founded with a clear mission: to transform how Australian 
                    businesses access and benefit from expert financial services.
                  </p>
                  <p>
                    As a new firm in the Australian market, we combine fresh perspectives with solid expertise, 
                    bringing innovation to traditional accounting practices. We've built a team of professionals 
                    who are not only technically skilled but also genuinely passionate about helping businesses thrive.
                  </p>
                  <p>
                    What sets us apart is our commitment to building genuine relationships with our clients. 
                    We take the time to understand your unique business challenges, goals, and vision, 
                    allowing us to provide personalized solutions that drive real results.
                  </p>
                  <p>
                    Our approach focuses on being accessible, responsive, and proactive. We don't just 
                    process numbers – we interpret them to provide actionable insights that help you make 
                    informed business decisions.
                  </p>
                </div>
                
                <div className="relative animate-fade-in">
                  <div className="absolute inset-0 bg-gradient-to-r from-apt-blue/10 to-apt-lightblue/5 rounded-lg transform -rotate-3"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Affinity Altitude Accumate office" 
                    className="rounded-lg shadow-lg img-zoom relative z-10"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-apt-blue text-white px-6 py-4 rounded-lg shadow-lg animate-bounce-slow">
                    <p className="font-bold text-xl">New Firm</p>
                    <p className="text-sm text-white/80">Fresh Approach</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Our Mission & Vision */}
          <section className="py-20 bg-apt-gray relative overflow-hidden">
            <div className="container-tight relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up">
                  <h3 className="heading-underline text-2xl font-semibold mb-6">Our Mission</h3>
                  <p className="mb-4">
                    To provide Australian businesses with accessible, high-quality financial services that 
                    empower them to make informed decisions, maintain compliance, and achieve sustainable growth.
                  </p>
                  <p>
                    We're committed to delivering personalized solutions that address the unique challenges 
                    and opportunities of each client, building long-term relationships based on trust, 
                    expertise, and exceptional service.
                  </p>
                </div>
                
                <div className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                  <h3 className="heading-underline text-2xl font-semibold mb-6">Our Vision</h3>
                  <p className="mb-4">
                    To be recognized as Australia's most client-focused financial services firm, known for 
                    our innovative approach, personalized service, and the measurable value we create for 
                    businesses of all sizes.
                  </p>
                  <p>
                    We envision a future where businesses view their accountants not just as service 
                    providers, but as integral partners in their success journey – trusted advisors who 
                    help navigate challenges and capitalize on opportunities.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Our Values */}
          <section className="py-20 bg-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-apt-lightblue/10 rounded-full filter blur-3xl"></div>
            <div className="container-tight relative z-10">
              <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
                <div className="text-apt-blue font-medium mb-3">Our Values</div>
                <h2 className="heading-underline-center text-3xl md:text-4xl font-semibold mb-6">
                  The Principles That Guide Us
                </h2>
                <p className="text-lg opacity-80">
                  Our core values shape how we work with clients and each other, driving our 
                  commitment to excellence in everything we do.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Link to="/values/integrity" target="_blank" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-up hover:-translate-y-2 transition-transform duration-300 group" style={{ animationDelay: '0.1s' }}>
                  <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-apt-blue/20 transition-colors duration-300">
                    <Check className="h-8 w-8 text-apt-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-apt-blue transition-colors duration-300">Integrity</h3>
                  <p>
                    We adhere to the highest ethical standards and are committed to honesty and transparency in all our dealings.
                  </p>
                  <div className="mt-4 text-apt-blue flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-medium">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
                
                <Link to="/values/client-focus" target="_blank" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-up hover:-translate-y-2 transition-transform duration-300 group" style={{ animationDelay: '0.2s' }}>
                  <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-apt-blue/20 transition-colors duration-300">
                    <Users className="h-8 w-8 text-apt-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-apt-blue transition-colors duration-300">Client Focus</h3>
                  <p>
                    We prioritize understanding our clients' needs and delivering personalized solutions that drive their success.
                  </p>
                  <div className="mt-4 text-apt-blue flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-medium">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
                
                <Link to="/values/excellence" target="_blank" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-up hover:-translate-y-2 transition-transform duration-300 group" style={{ animationDelay: '0.3s' }}>
                  <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-apt-blue/20 transition-colors duration-300">
                    <Award className="h-8 w-8 text-apt-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-apt-blue transition-colors duration-300">Excellence</h3>
                  <p>
                    We strive for excellence in all aspects of our work, continuously improving our skills and processes.
                  </p>
                  <div className="mt-4 text-apt-blue flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-medium">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
                
                <Link to="/values/reliability" target="_blank" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-up hover:-translate-y-2 transition-transform duration-300 group" style={{ animationDelay: '0.4s' }}>
                  <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-apt-blue/20 transition-colors duration-300">
                    <BadgeCheck className="h-8 w-8 text-apt-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-apt-blue transition-colors duration-300">Reliability</h3>
                  <p>
                    Our clients can count on us to deliver accurate, timely services they can depend on for critical decisions.
                  </p>
                  <div className="mt-4 text-apt-blue flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-medium">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </div>
            </div>
          </section>
          
          {/* Our Team */}
          <section className="py-20 bg-apt-gray">
            <div className="container-tight">
              <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
                <div className="text-apt-blue font-medium mb-3">Our Team</div>
                <h2 className="heading-underline-center text-3xl md:text-4xl font-semibold mb-6">
                  Meet Our Professionals
                </h2>
                <p className="text-lg opacity-80">
                  Our talented team brings together diverse expertise and shared values to deliver 
                  exceptional service to our clients.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Sarah Johnson",
                    title: "Founder & Director",
                    bio: "Sarah brings over 15 years of accounting experience, specializing in business advisory and strategic financial planning for Australian businesses.",
                    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  },
                  {
                    name: "Michael Chen",
                    title: "Senior Accountant",
                    bio: "Michael specializes in taxation and compliance, helping businesses navigate complex regulatory requirements while optimizing their tax position.",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  },
                  {
                    name: "Amelia Patel",
                    title: "Financial Analyst",
                    bio: "Amelia excels at transforming financial data into actionable business insights, with expertise in forecasting and strategic planning.",
                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  }
                ].map((member, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-64 object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-apt-blue font-medium mb-4">{member.title}</p>
                      <p>{member.bio}</p>
                    </div>
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
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Professional accounting team at work" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="space-y-6 order-1 lg:order-2 animate-fade-up">
                  <div className="text-apt-blue font-medium">Why Choose Us</div>
                  <h2 className="heading-underline text-3xl md:text-4xl font-semibold mb-6">
                    The Affinity Altitude Advantage
                  </h2>
                  <p className="text-lg">
                    Choosing the right financial partner is a critical decision for your business. Here's why 
                    Affinity Altitude Accumate stands out in Australia's financial services landscape:
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
                        <h3 className="font-medium text-lg">Fresh Perspectives</h3>
                        <p>As a new firm, we bring innovative approaches and modern solutions to traditional accounting challenges.</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-apt-blue/10 rounded-full p-1 mr-4 mt-1">
                        <svg className="w-5 h-5 text-apt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Responsive Communication</h3>
                        <p>We prioritize clear, timely communication, ensuring you're never left waiting for crucial information.</p>
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
                    
                    <li className="flex items-start">
                      <div className="bg-apt-blue/10 rounded-full p-1 mr-4 mt-1">
                        <svg className="w-5 h-5 text-apt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Technology-Driven</h3>
                        <p>We leverage cutting-edge accounting technology to enhance efficiency, accuracy, and client experience.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section className="py-20 bg-apt-gray">
            <div className="container-tight">
              <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
                <div className="text-apt-blue font-medium mb-3">FAQ</div>
                <h2 className="heading-underline-center text-3xl md:text-4xl font-semibold mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg opacity-80">
                  Find answers to common questions about our company and services.
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-4">
                {[
                  {
                    question: "As a new firm, how experienced is your team?",
                    answer: "While Affinity Altitude Accumate is a new firm, our team brings substantial industry experience. Our professionals have worked with various businesses across Australia, providing expert financial services before joining our team. We combine this proven expertise with fresh perspectives and innovative approaches."
                  },
                  {
                    question: "What industries do you specialize in?",
                    answer: "We work with businesses across multiple sectors, with particular expertise in retail, professional services, technology, healthcare, and construction. Our diverse experience allows us to understand industry-specific challenges and opportunities, providing tailored solutions regardless of your sector."
                  },
                  {
                    question: "How do you charge for your services?",
                    answer: "We offer transparent, value-based pricing with several options: fixed monthly fees for ongoing services, project-based pricing for specific engagements, and hourly rates for certain advisory services. We'll discuss your needs and provide clear pricing information before you commit."
                  },
                  {
                    question: "How often will we communicate about my finances?",
                    answer: "Communication frequency depends on your needs and the services we provide. For ongoing clients, we typically schedule monthly or quarterly reviews, with additional check-ins during busy periods or when addressing specific financial matters. We're always accessible for questions or concerns between scheduled meetings."
                  },
                  {
                    question: "What technology platforms do you use?",
                    answer: "We leverage industry-leading accounting software like Xero, MYOB, and QuickBooks, along with specialized tools for tax planning, financial reporting, and data analysis. We're adaptable to your existing systems or can recommend solutions that best fit your business needs."
                  }
                ].map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg shadow-sm overflow-hidden animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <details className="group">
                      <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-lg">
                        {faq.question}
                        <span className="transition-transform duration-300 group-open:rotate-180">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </summary>
                      <div className="px-6 pb-6 -mt-2">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-20 bg-apt-blue text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-apt-blue via-apt-blue to-apt-lightblue mix-blend-overlay opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <svg className="absolute top-0 left-0 transform -translate-y-1/2" width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="400" cy="400" r="400" fill="white" fillOpacity="0.05" />
              </svg>
              <svg className="absolute bottom-0 right-0 transform translate-y-1/3" width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="300" cy="300" r="300" fill="white" fillOpacity="0.05" />
              </svg>
            </div>
            
            <div className="container-tight relative z-10">
              <div className="max-w-3xl mx-auto text-center animate-fade-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
                <p className="text-xl text-white/90 mb-10 leading-relaxed">
                  Contact Affinity Altitude Accumate today to discover how our 
                  expert financial services can help your business thrive.
                </p>
                <Link to="/contact" className="btn-primary bg-white text-apt-blue hover:bg-apt-lightblue hover:text-white inline-flex items-center group">
                  Contact Us Today
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

export default AboutPage;
