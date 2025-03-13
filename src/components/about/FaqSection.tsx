
import React from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection = () => {
  const faqItems: FaqItem[] = [
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
  );
};

export default FaqSection;
