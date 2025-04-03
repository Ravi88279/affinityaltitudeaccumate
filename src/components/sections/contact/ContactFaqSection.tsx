
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const ContactFaqSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  
  const faqItems = [
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
  ];

  return (
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
          {faqItems.map((faq, index) => (
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
  );
};

export default ContactFaqSection;
