
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
    <section className="py-16 md:py-24 bg-white">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <div className="text-apt-blue font-medium mb-3">FAQ</div>
          <h2 className="heading-underline-center text-3xl md:text-4xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg opacity-80">
            Find answers to common questions about our services and how we can help your business.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqItems.map((item, index) => (
            <div key={index} className="py-6 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full justify-between items-center text-left"
              >
                <h3 className="text-lg md:text-xl font-medium text-apt-darkgray">{item.question}</h3>
                <div className="ml-2 flex-shrink-0 text-apt-blue">
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
    </section>
  );
};

export default Faq;
