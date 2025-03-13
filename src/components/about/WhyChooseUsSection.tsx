
import React from 'react';

const WhyChooseUsSection = () => {
  return (
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
  );
};

export default WhyChooseUsSection;
