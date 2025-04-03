
import React from 'react';
import { MailIcon, MapPinIcon, PhoneIcon, Clock } from 'lucide-react';

type ContactInfoProps = {
  mapUrl: string;
  officeAddress: string;
};

const ContactInformation: React.FC<ContactInfoProps> = ({ mapUrl, officeAddress }) => {
  return (
    <div className="bg-white rounded-lg shadow-affinity p-6 border border-gray-100">
      <h3 className="text-2xl font-bold mb-5 text-apt-darkgray">Contact Information</h3>
      <ul className="space-y-5">
        <li className="flex items-start group">
          <div className="bg-apt-purple/10 rounded-full p-3 text-apt-purple group-hover:bg-apt-purple group-hover:text-white transition-colors duration-300 mr-4 shrink-0">
            <MapPinIcon className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Our Office</h4>
            <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="opacity-80 group-hover:opacity-100 transition-opacity duration-300 hover:text-apt-purple">
              {officeAddress}
            </a>
          </div>
        </li>
        <li className="flex items-start group">
          <div className="bg-apt-purple/10 rounded-full p-3 text-apt-purple group-hover:bg-apt-purple group-hover:text-white transition-colors duration-300 mr-4 shrink-0">
            <PhoneIcon className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Phone Number</h4>
            <a href="tel:+919274320379" className="opacity-80 hover:text-apt-purple transition-colors duration-200">
              +91 9274320379
            </a>
          </div>
        </li>
        <li className="flex items-start group">
          <div className="bg-apt-purple/10 rounded-full p-3 text-apt-purple group-hover:bg-apt-purple group-hover:text-white transition-colors duration-300 mr-4 shrink-0">
            <MailIcon className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Email Address</h4>
            <a href="mailto:info@affinityaltitudeservices.com" className="opacity-80 hover:text-apt-purple transition-colors duration-200">
              info@affinityaltitudeservices.com
            </a>
          </div>
        </li>
        <li className="flex items-start group">
          <div className="bg-apt-purple/10 rounded-full p-3 text-apt-purple group-hover:bg-apt-purple group-hover:text-white transition-colors duration-300 mr-4 shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Business Hours</h4>
            <p className="opacity-80">
              Monday - Friday: 9:00 AM - 5:00 PM<br />
              Saturday: 10:00 AM - 2:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactInformation;
