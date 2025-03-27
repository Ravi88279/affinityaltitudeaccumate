
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FormEvent, useState } from 'react';
import { MailIcon, MapPinIcon, PhoneIcon, Send, CheckCircle2, Plus, Minus } from 'lucide-react';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    service: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        business: '',
        service: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  
  // Office address for Google Maps
  const officeAddress = "Office no. 1024, 10th floor, Sun Gravitas, near. Shyamal Cross Road, Rajmani Society, Satellite, Ahmedabad, Gujarat 380015";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;

  return (
    <>
      <Helmet>
        <title>Contact Us - Affinity Altitude Accumate</title>
        <meta name="description" content="Contact Affinity Altitude Accumate for professional accounting, bookkeeping, and taxation services. We're here to help with all your financial needs." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          {/* Hero Section */}
          <section className="bg-apt-blue text-white py-16 relative overflow-hidden">
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get In Touch</h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  We're here to answer your questions and provide the financial support your business needs.
                </p>
              </div>
            </div>
          </section>
          
          {/* Contact Form Section */}
          <section className="py-16 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-apt-blue/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-apt-lightblue/10 rounded-full filter blur-3xl"></div>
            
            <div className="container-tight relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8 animate-fade-up">
                  <div>
                    <h2 className="heading-underline text-3xl font-semibold mb-4">Contact Information</h2>
                    <p className="text-lg mb-6">
                      Whether you're looking for information about our services or ready to start working with us,
                      we're here to help. Reach out using the contact details below.
                    </p>
                    
                    <ul className="space-y-6">
                      <li className="flex items-start group">
                        <MapPinIcon className="w-6 h-6 text-apt-blue shrink-0 mr-4 mt-1 group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <h4 className="font-medium mb-1">Our Office</h4>
                          <a 
                            href={mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-80 group-hover:opacity-100 transition-opacity duration-300 hover:text-apt-blue"
                          >
                            {officeAddress}
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start group">
                        <PhoneIcon className="w-6 h-6 text-apt-blue shrink-0 mr-4 mt-1 group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <h4 className="font-medium mb-1">Phone Number</h4>
                          <a href="tel:+919274320379" className="opacity-80 hover:text-apt-blue transition-colors duration-200">
                            +91 9274320379
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start group">
                        <MailIcon className="w-6 h-6 text-apt-blue shrink-0 mr-4 mt-1 group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <h4 className="font-medium mb-1">Email Address</h4>
                          <a href="mailto:affinityaltitudeaccumate@gmail.com" className="opacity-80 hover:text-apt-blue transition-colors duration-200">
                            affinityaltitudeaccumate@gmail.com
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-medium mb-4">Business Hours</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between group hover:bg-apt-gray p-2 rounded-md transition-all duration-300">
                        <span className="font-medium">Monday - Friday</span>
                        <span className="opacity-80 group-hover:text-apt-blue group-hover:opacity-100 transition-all duration-300">9:00 AM - 5:00 PM</span>
                      </li>
                      <li className="flex justify-between group hover:bg-apt-gray p-2 rounded-md transition-all duration-300">
                        <span className="font-medium">Saturday</span>
                        <span className="opacity-80 group-hover:text-apt-blue group-hover:opacity-100 transition-all duration-300">10:00 AM - 2:00 PM</span>
                      </li>
                      <li className="flex justify-between group hover:bg-apt-gray p-2 rounded-md transition-all duration-300">
                        <span className="font-medium">Sunday</span>
                        <span className="opacity-80 group-hover:text-apt-blue group-hover:opacity-100 transition-all duration-300">Closed</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-apt-gray p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-2xl font-medium mb-3">Location Map</h3>
                    <a 
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block aspect-video bg-gray-200 rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
                    >
                      <div className="w-full h-full flex items-center justify-center bg-apt-blue/10 text-apt-blue hover:bg-apt-blue/20 transition-colors">
                        <div className="text-center">
                          <MapPinIcon className="h-8 w-8 mx-auto mb-2" />
                          <p>View on Google Maps</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-3xl font-semibold mb-5">Send Us a Message</h2>
                    
                    {isSubmitted ? (
                      <div className="text-center py-12 animate-fade-in">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-4 animate-bounce-slow">
                          <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-medium mb-3">Message Sent Successfully!</h3>
                        <p className="text-lg opacity-80 max-w-md mx-auto">
                          Thank you for contacting Affinity Altitude Accumate. We'll review your message and get back to you shortly.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-apt-darkgray mb-1">
                              Your Name*
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-apt-blue focus:ring focus:ring-apt-blue/20 transition-all outline-none"
                              placeholder="John Doe"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-apt-darkgray mb-1">
                              Email Address*
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formState.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-apt-blue focus:ring focus:ring-apt-blue/20 transition-all outline-none"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-apt-darkgray mb-1">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formState.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-apt-blue focus:ring focus:ring-apt-blue/20 transition-all outline-none"
                              placeholder="+91 9274320379"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="business" className="block text-sm font-medium text-apt-darkgray mb-1">
                              Business Name
                            </label>
                            <input
                              type="text"
                              id="business"
                              name="business"
                              value={formState.business}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-apt-blue focus:ring focus:ring-apt-blue/20 transition-all outline-none"
                              placeholder="Your Business Name"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-apt-darkgray mb-1">
                            Service of Interest
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formState.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-apt-blue focus:ring focus:ring-apt-blue/20 transition-all outline-none"
                          >
                            <option value="">Select a service</option>
                            <option value="Bookkeeping">Bookkeeping</option>
                            <option value="Accounting">Accounting</option>
                            <option value="Taxation">Taxation</option>
                            <option value="Payroll">Payroll Services</option>
                            <option value="Financial Reporting">Financial Reporting</option>
                            <option value="Business Advisory">Business Advisory</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-apt-darkgray mb-1">
                            Your Message*
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-apt-blue focus:ring focus:ring-apt-blue/20 transition-all outline-none resize-none"
                            placeholder="How can we help you?"
                          />
                        </div>
                        
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-primary w-full flex items-center justify-center group hover:scale-105 transition-transform duration-300"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center">
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center">
                              Send Message
                              <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section className="py-16 bg-apt-gray">
            <div className="container-tight">
              <div className="max-w-3xl mx-auto text-center mb-10 animate-fade-up">
                <div className="text-apt-blue font-medium mb-2">FAQ</div>
                <h2 className="heading-underline-center text-3xl md:text-4xl font-semibold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg opacity-80">
                  Find answers to common questions about our services and how we can help your business.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto space-y-3">
                {[
                  {
                    question: "What services do you offer?",
                    answer: "We offer a comprehensive range of financial services including bookkeeping, accounting, taxation, payroll processing, financial reporting, and business advisory services. Each service is tailored to meet the specific needs of your business."
                  },
                  {
                    question: "How much do your services cost?",
                    answer: "Our pricing is based on the specific services you require and the complexity of your business needs. We offer transparent, fixed-fee structures so you know exactly what you're paying for. Contact us for a personalized quote."
                  },
                  {
                    question: "How often will we meet to discuss my finances?",
                    answer: "This depends on your needs and preferences. We typically schedule quarterly reviews for most clients, but we can arrange more frequent meetings if your business requires closer financial monitoring."
                  },
                  {
                    question: "Can you help with tax planning and minimization?",
                    answer: "Yes, our tax specialists are experienced in developing strategies to legally minimize your tax obligations while ensuring full compliance with Australian tax laws and regulations."
                  },
                  {
                    question: "Do you work with businesses in specific industries?",
                    answer: "We serve clients across a wide range of industries. Our team has particular expertise in retail, professional services, construction, healthcare, and hospitality, but we welcome businesses from all sectors."
                  }
                ].map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg shadow-sm animate-fade-up transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex w-full justify-between items-center text-left p-5 hover:bg-gray-50 transition-colors rounded-lg"
                    >
                      <h3 className="text-xl font-medium">{faq.question}</h3>
                      <span className="ml-4 bg-apt-blue/10 rounded-full p-2 text-apt-blue shrink-0">
                        {openFaqIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </button>
                    <div 
                      className={`transition-all duration-300 overflow-hidden px-5 ${
                        openFaqIndex === index ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0 pb-0'
                      }`}
                    >
                      <p className="opacity-80">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
