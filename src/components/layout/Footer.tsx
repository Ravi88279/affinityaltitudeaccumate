
import { Link } from 'react-router-dom';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-apt-darkgray text-white">
      <div className="container-tight">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-16">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              <span className="text-apt-lightblue">APT</span> Business Services
            </h3>
            <p className="text-gray-300 text-sm max-w-md">
              We provide expert bookkeeping, accounting, and taxation services to help your business thrive.
              Our professional team is dedicated to delivering accurate and timely financial solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-apt-lightblue transition-colors duration-200">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-apt-lightblue transition-colors duration-200">About Us</Link>
              <Link to="/services" className="text-gray-300 hover:text-apt-lightblue transition-colors duration-200">Our Services</Link>
              <Link to="/contact" className="text-gray-300 hover:text-apt-lightblue transition-colors duration-200">Contact Us</Link>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-apt-lightblue shrink-0 mr-3 mt-0.5" />
                <span className="text-gray-300">123 Business Street, Sydney, NSW 2000</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 text-apt-lightblue shrink-0 mr-3" />
                <a href="tel:+61299998888" className="text-gray-300 hover:text-apt-lightblue transition-colors duration-200">
                  (02) 9999 8888
                </a>
              </li>
              <li className="flex items-center">
                <MailIcon className="w-5 h-5 text-apt-lightblue shrink-0 mr-3" />
                <a href="mailto:info@aptbusiness.com.au" className="text-gray-300 hover:text-apt-lightblue transition-colors duration-200">
                  info@aptbusiness.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 py-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} APT Business Services. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-apt-lightblue transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-apt-lightblue transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
