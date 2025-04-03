
import React from 'react';
import { ContactInformation, ContactForm, FAQ, faqItems } from './contact';

const Contact: React.FC = () => {
  // Office address for Google Maps
  const officeAddress = "Office no. 1024, 10th floor, Sun Gravitas, near. Shyamal Cross Road, Rajmani Society, Satellite, Ahmedabad, Gujarat 380015";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;

  return (
    <section className="py-12 bg-white relative overflow-hidden md:py-0">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-apt-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-apt-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container-tight relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <div className="inline-block bg-apt-purple/10 text-apt-purple font-medium px-4 py-1 rounded-full text-sm mb-3">
            Contact Us
          </div>
          <h2 className="heading-underline-center text-3xl md:text-4xl font-bold mb-4">Get In Touch With Our Team</h2>
          <p className="text-lg opacity-80">
            Have questions about our services? Ready to get started? 
            Our team is here to help with all your financial needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6 animate-fade-up">
            <ContactInformation mapUrl={mapUrl} officeAddress={officeAddress} />
            <FAQ faqItems={faqItems} />
          </div>
          
          <div className="lg:col-span-7 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
