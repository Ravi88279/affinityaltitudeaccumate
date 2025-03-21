
import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqItems: FaqItem[] = [
    {
      question: "What services does Affinity Altitude Accumate offer?",
      answer: "As a new firm in Australia, we offer a comprehensive range of financial services including bookkeeping, accounting, taxation, business advisory, financial reporting, payroll management, and specialized services tailored to Australian business needs."
    },
    {
      question: "How can your services benefit my business?",
      answer: "Our services help you maintain accurate financial records, ensure compliance with Australian tax laws, provide insights for better decision-making, and free up your time to focus on core business activities. As a new firm, we bring fresh perspectives and innovative approaches to your financial challenges."
    },
    {
      question: "What makes Affinity Altitude Accumate different from other accounting firms?",
      answer: "As a new firm, we combine innovative approaches with solid industry expertise. We offer personalized service, transparent pricing, timely delivery, and a strong focus on building long-term relationships with clients. Our fresh perspective allows us to think outside the box to solve your financial challenges."
    },
    {
      question: "Do you provide services for both small businesses and large corporations?",
      answer: "Yes, we cater to businesses of all sizes. Our services are scalable and can be tailored to meet the specific needs of small businesses, medium enterprises, and large corporations operating in Australia."
    },
    {
      question: "How do you ensure data security and confidentiality?",
      answer: "We implement robust security measures including encrypted communication, secure cloud storage, restricted access controls, regular security audits, and strict confidentiality agreements. Your financial data is always protected with the highest level of security."
    },
    {
      question: "What accounting software do you work with?",
      answer: "We are proficient in various accounting software platforms including Xero, MYOB, QuickBooks, Reckon, and other popular solutions used in Australia. We can adapt to your existing systems or recommend the best solution for your specific needs."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoMnY0aC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container-tight relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-16">
          <div className="md:w-1/3 animate-fade-in">
            <div className="sticky top-24">
              <div className="inline-block bg-apt-purple/10 text-apt-purple font-medium px-4 py-1 rounded-full text-sm mb-4">
                FAQ
              </div>
              <h2 className="heading-underline text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg opacity-80 mb-8">
                Find answers to common questions about our services and how we can help your business.
              </p>
              
              <div className="bg-apt-purple/5 p-6 rounded-lg border border-apt-purple/10 max-w-md">
                <div className="flex items-start">
                  <div className="bg-apt-purple rounded-full p-3 mr-4">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Still have questions?</h3>
                    <p className="text-apt-text mb-4">If you can't find your answer in our FAQ, please contact our team.</p>
                    <a 
                      href="/contact" 
                      className="inline-flex items-center font-medium text-apt-purple hover:underline"
                    >
                      Contact Us
                      <ChevronDown className="h-4 w-4 rotate-270 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 divide-y divide-gray-200">
            {faqItems.map((item, index) => (
              <div key={index} className="py-6 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full justify-between items-center text-left"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg md:text-xl font-medium text-apt-darkgray">{item.question}</h3>
                  <div className={`ml-2 flex-shrink-0 p-2 rounded-full transition-colors duration-300 ${openIndex === index ? 'bg-apt-purple text-white' : 'text-apt-purple bg-apt-purple/10'}`}>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </div>
                </button>
                <div
                  className={`mt-3 transition-all duration-300 overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-apt-text">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
