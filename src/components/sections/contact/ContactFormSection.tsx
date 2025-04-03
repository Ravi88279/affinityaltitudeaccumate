
import React from 'react';
import ContactInfo from './ContactInfo';
import PageContactForm from './PageContactForm';

type ContactFormSectionProps = {
  officeAddress: string;
  mapUrl: string;
};

const ContactFormSection: React.FC<ContactFormSectionProps> = ({ officeAddress, mapUrl }) => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-apt-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-apt-lightblue/10 rounded-full filter blur-3xl"></div>
      
      <div className="container-tight relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo officeAddress={officeAddress} mapUrl={mapUrl} />
          <PageContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
