
import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';
import BusinessHours from './BusinessHours';
import LocationMap from './LocationMap';

type ContactInfoProps = {
  officeAddress: string;
  mapUrl: string;
};

const ContactInfo: React.FC<ContactInfoProps> = ({ officeAddress, mapUrl }) => {
  return (
    <div className="space-y-8 animate-fade-up">
      <div>
        <h2 className="heading-underline text-3xl font-semibold mb-4">Contact Information</h2>
        <p className="text-lg mb-6">
          Whether you're looking for information about our services or ready to start working with us,
          we're here to help. Reach out using the contact details below.
        </p>
        
        <ul className="space-y-6">
          <li className="flex items-start group">
            <MapPinIcon className="w-6 h-6 text-apt-blue shrink-0 mr-4 mt-1 group-hover:scale-110 transition-transform duration-300" />
            <div>
              <h4 className="font-medium mb-1">Our Office</h4>
              <a 
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 group-hover:opacity-100 transition-opacity duration-300 hover:text-apt-blue"
              >
                {officeAddress}
              </a>
            </div>
          </li>
          <li className="flex items-start group">
            <PhoneIcon className="w-6 h-6 text-apt-blue shrink-0 mr-4 mt-1 group-hover:scale-110 transition-transform duration-300" />
            <div>
              <h4 className="font-medium mb-1">Phone Number</h4>
              <a href="tel:+919274320379" className="opacity-80 hover:text-apt-blue transition-colors duration-200">
                +91 9274320379
              </a>
            </div>
          </li>
          <li className="flex items-start group">
            <MailIcon className="w-6 h-6 text-apt-blue shrink-0 mr-4 mt-1 group-hover:scale-110 transition-transform duration-300" />
            <div>
              <h4 className="font-medium mb-1">Email Address</h4>
              <a href="mailto:info@affinityaltitudeservices.com" className="opacity-80 hover:text-apt-blue transition-colors duration-200">
                info@affinityaltitudeservices.com
              </a>
            </div>
          </li>
        </ul>
      </div>
      
      <BusinessHours />
      <LocationMap mapUrl={mapUrl} />
    </div>
  );
};

export default ContactInfo;
