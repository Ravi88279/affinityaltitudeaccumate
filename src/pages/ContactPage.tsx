
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  ContactHero, 
  ContactFormSection, 
  ContactFaqSection 
} from '@/components/sections/contact';

const ContactPage: React.FC = () => {
  // Office address for Google Maps
  const officeAddress = "Office no. 1024, 10th floor, Sun Gravitas, near. Shyamal Cross Road, Rajmani Society, Satellite, Ahmedabad, Gujarat 380015";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;

  return (
    <>
      <Helmet>
        <title>Contact Us - Affinity Altitude Accumate</title>
        <meta name="description" content="Contact Affinity Altitude Accumate for professional accounting, bookkeeping, and taxation services. We're here to help with all your financial needs." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <ContactHero />
          <ContactFormSection officeAddress={officeAddress} mapUrl={mapUrl} />
          <ContactFaqSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
