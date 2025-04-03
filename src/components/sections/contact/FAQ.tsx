
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  faqItems: FaqItem[];
};

const FAQ: React.FC<FaqProps> = ({ faqItems }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-lg shadow-affinity p-6 border border-gray-100">
      <h3 className="text-2xl font-bold mb-5 text-apt-darkgray">FAQ</h3>
      <div className="space-y-3">
        {faqItems.map((faq, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-apt-purple/30"
          >
            <button 
              onClick={() => toggleFaq(index)} 
              className="flex w-full justify-between items-center text-left p-4 hover:bg-gray-50 transition-colors" 
              aria-expanded={openFaqIndex === index} 
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-medium">{faq.question}</span>
              <span className={`ml-2 ${openFaqIndex === index ? 'bg-apt-purple text-white' : 'bg-apt-purple/10 text-apt-purple'} rounded-full p-1 transition-colors duration-300`}>
                {openFaqIndex === index ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            <div 
              id={`faq-answer-${index}`} 
              className={`transition-all duration-300 overflow-hidden ${openFaqIndex === index ? 'max-h-40 p-4 bg-gray-50' : 'max-h-0'}`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
