
import React from 'react';

const MissionVisionSection = () => {
  return (
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
  );
};

export default MissionVisionSection;
