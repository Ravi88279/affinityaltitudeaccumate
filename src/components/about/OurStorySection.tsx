
import React from 'react';

const OurStorySection = () => {
  return (
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
  );
};

export default OurStorySection;
