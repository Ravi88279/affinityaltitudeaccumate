
import { FormEvent, useState } from 'react';
import { MailIcon, MapPinIcon, PhoneIcon, Send, CheckCircle2, Plus, Minus } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
  
  const faqItems: FaqItem[] = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of financial services including bookkeeping, accounting, taxation, payroll processing, financial reporting, and business advisory services."
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
      question: "Do you work with businesses in specific industries?",
      answer: "We serve clients across a wide range of industries. Our team has expertise in retail, professional services, construction, healthcare, and hospitality, but we welcome businesses from all sectors."
    }
  ];
  
  // Office address for Google Maps
  const officeAddress = "Office no. 1024, 10th floor, Sun Gravitas, near. Shyamal Cross Road, Rajmani Society, Satellite, Ahmedabad, Gujarat 380015";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;
  
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-apt-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-apt-lightblue/10 rounded-full filter blur-3xl"></div>
      
      <div className="container-tight relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="text-apt-blue font-medium mb-3">Contact Us</div>
          <h2 className="heading-underline-center mb-6">Get In Touch With Our Team</h2>
          <p className="text-lg opacity-80">
            Have questions about our services? Ready to get started? 
            Our team is here to help with all your financial needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8 animate-fade-up">
            <div>
              <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
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
                    <a href="tel:+918866689174" className="opacity-80 hover:text-apt-blue transition-colors duration-200">
                      +91 8866689174
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
              <h3 className="text-2xl font-medium mb-6">Business Hours</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="opacity-80">9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span className="opacity-80">10:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span className="opacity-80">Closed</span>
                </li>
              </ul>
            </div>
            
            {/* FAQ Section */}
            <div>
              <h3 className="text-2xl font-medium mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex w-full justify-between items-center text-left p-4 hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium">{faq.question}</span>
                      <span className="ml-2 bg-apt-blue/10 rounded-full p-1 text-apt-blue">
                        {openFaqIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </button>
                    <div 
                      className={`transition-all duration-300 overflow-hidden ${
                        openFaqIndex === index ? 'max-h-40 p-4 bg-gray-50' : 'max-h-0'
                      }`}
                    >
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-medium mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4 animate-bounce-slow">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-medium mb-2">Message Sent!</h4>
                  <p className="opacity-80">Thank you for contacting us. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-apt-darkgray mb-1">
                      Your Name
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-apt-darkgray mb-1">
                        Email Address
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
                        placeholder="+91 9999999999"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-apt-darkgray mb-1">
                      Your Message
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
  );
};

export default Contact;
