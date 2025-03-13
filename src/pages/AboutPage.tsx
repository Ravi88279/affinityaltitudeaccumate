
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Check, Users, Award, BadgeCheck, ArrowRight, MapPin } from 'lucide-react';
import { useEffect } from 'react';

const AboutPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  // Core values array
  const coreValues = [
    {
      id: 'integrity',
      title: 'Integrity',
      description: 'We adhere to the highest ethical standards and are committed to honesty and transparency in all our dealings.',
      icon: <Check className="h-8 w-8 text-apt-blue" />,
      details: 'Our commitment to integrity means that we always act in your best interest, providing honest advice even when it may not be what you want to hear. We believe that long-term relationships are built on trust, and we earn that trust by maintaining the highest ethical standards in everything we do.'
    },
    {
      id: 'client-focus',
      title: 'Client Focus',
      description: 'We prioritize understanding our clients\' needs and delivering personalized solutions that drive their success.',
      icon: <Users className="h-8 w-8 text-apt-blue" />,
      details: 'At Affinity Altitude Accumate, we take the time to understand your unique business challenges, goals, and vision. This deep understanding allows us to provide tailored solutions that address your specific needs rather than one-size-fits-all approaches.'
    },
    {
      id: 'excellence',
      title: 'Excellence',
      description: 'We strive for excellence in all aspects of our work, continuously improving our skills and processes.',
      icon: <Award className="h-8 w-8 text-apt-blue" />,
      details: 'Our pursuit of excellence drives us to continuously enhance our expertise, refine our processes, and adopt innovative approaches. We're committed to delivering work of the highest quality that exceeds expectations and helps your business thrive.'
    },
    {
      id: 'reliability',
      title: 'Reliability',
      description: 'Our clients can count on us to deliver accurate, timely services they can depend on for critical decisions.',
      icon: <BadgeCheck className="h-8 w-8 text-apt-blue" />,
      details: 'We understand that reliable financial information is essential for making sound business decisions. That's why we're committed to delivering accurate, timely services that you can depend on. When we make a commitment, we stand by it.'
    }
  ];

  // FAQ items with toggle functionality
  const faqItems = [
    {
      question: "As a new firm, how experienced is your team?",
      answer: "While Affinity Altitude Accumate is a new firm, our team brings substantial industry experience. Our professionals have worked with various businesses across Australia, providing expert financial services before joining our team. We combine this proven expertise with fresh perspectives and innovative approaches."
    },
    {
      question: "What makes Affinity Altitude Accumate different?",
      answer: "As a new firm, we bring a fresh approach to financial services. We combine innovative thinking with solid industry knowledge, prioritize personalized client relationships, leverage cutting-edge technology, and offer transparent pricing structures. We're small enough to provide personalized attention but experienced enough to handle complex financial matters."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We work with businesses across multiple sectors in Australia, with particular expertise in retail, professional services, technology, healthcare, and construction. Our diverse experience allows us to understand industry-specific challenges and opportunities, providing tailored solutions regardless of your sector."
    },
    {
      question: "How do you stay current with Australian tax regulations?",
      answer: "We maintain a rigorous professional development program that ensures our team stays current with all Australian tax regulations and accounting standards. We invest in ongoing education, subscribe to professional updates, participate in industry forums, and collaborate with legal and regulatory experts to maintain our knowledge edge."
    },
    {
      question: "Can you support businesses of different sizes?",
      answer: "Absolutely. We're equipped to support Australian businesses at all stages of growth, from startups and small businesses to established mid-market companies. Our scalable service model allows us to adapt our offerings to match your business size, complexity, and specific needs."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Affinity Altitude Accumate</title>
        <meta name="description" content="Learn about Affinity Altitude Accumate, our mission, and our commitment to providing quality financial services in Australia." />
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
                    A New Vision for Financial Services in Australia
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {coreValues.map((value, index) => (
                  <div key={value.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-up hover:-translate-y-2 border border-gray-100" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-start mb-4">
                      <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mr-4 shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-apt-text">{value.description}</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-100 mt-4">
                      <p className="text-apt-text">{value.details}</p>
                      <Link 
                        to={`/values/${value.id}`}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="mt-4 text-apt-blue hover:underline inline-flex items-center"
                      >
                        <span>Learn more about this value</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Why Choose Us */}
          <section className="py-20 bg-apt-gray">
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
          
          {/* Visit Us / Office Location */}
          <section className="py-20 bg-white">
            <div className="container-tight">
              <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
                <div className="text-apt-blue font-medium mb-3">Our Location</div>
                <h2 className="heading-underline-center text-3xl md:text-4xl font-semibold mb-6">
                  Visit Our Office
                </h2>
                <p className="text-lg opacity-80">
                  We're conveniently located in Sydney's financial district. 
                  Stop by to discuss your business needs in person.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-2 bg-apt-gray p-8 rounded-lg animate-fade-up">
                  <div className="flex items-start">
                    <MapPin className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-1" />
                    <div>
                      <h3 className="font-medium text-xl mb-4">Our Address:</h3>
                      <p className="text-lg mb-1">123 Financial District</p>
                      <p className="text-lg mb-1">Sydney, NSW 2000</p>
                      <p className="text-lg mb-6">Australia</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-1">Business Hours:</h4>
                          <p>Monday - Friday: 9:00 AM - 5:30 PM</p>
                          <p>Saturday - Sunday: Closed</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-1">Contact:</h4>
                          <p>Phone: (02) 1234 5678</p>
                          <p>Email: info@affinityaltitude.com.au</p>
                        </div>
                      </div>
                      
                      <a 
                        href="https://maps.google.com/?q=Sydney+NSW+2000+Australia" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost mt-6 py-2 inline-flex items-center"
                      >
                        <span>View on Google Maps</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3 rounded-lg overflow-hidden shadow-lg animate-fade-in h-[400px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13251.016266076307!2d151.2046789!3d-33.8696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x8f7588d9d4e5964c!2sSydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2sus!4v1653000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
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
                {faqItems.map((faq, index) => (
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
                <Link to="/contact" className="btn-primary bg-white text-apt-blue hover:bg-white/90 inline-flex items-center group">
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
