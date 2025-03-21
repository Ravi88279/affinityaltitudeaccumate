
import { Link } from 'react-router-dom';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const officeAddress = "Office no. 1024, 10th floor, Sun Gravitas, near. Shyamal Cross Road, Rajmani Society, Satellite, Ahmedabad, Gujarat 380015";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;
  
  return (
    <footer className="bg-apt-darkgray text-white">
      <div className="container-tight">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-16">
          <div className="space-y-4">
            <div className="mb-4 flex items-center gap-3">
              <img 
                src="/lovable-uploads/93af181c-c887-427a-8bc1-794156f6ad6b.png" 
                alt="Affinity Altitude Accumate Logo" 
                className="h-12 w-auto mb-2" 
              />
              <span className="font-semibold text-white text-lg">Affinity Altitude Accumate</span>
            </div>
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
              <li className="flex items-start group">
                <MapPinIcon className="w-5 h-5 text-apt-lightblue shrink-0 mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <a 
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 group-hover:text-white transition-colors duration-300"
                >
                  {officeAddress}
                </a>
              </li>
              <li className="flex items-center group">
                <PhoneIcon className="w-5 h-5 text-apt-lightblue shrink-0 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <a href="tel:+918866689174" className="text-gray-300 hover:text-apt-lightblue transition-colors duration-200">
                  +91 8866689174
                </a>
              </li>
              <li className="flex items-center group">
                <MailIcon className="w-5 h-5 text-apt-lightblue shrink-0 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:affinityaltitudeaccumate@gmail.com" className="text-gray-300 hover:text-apt-lightblue transition-colors duration-200">
                  affinityaltitudeaccumate@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 py-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Affinity Altitude Accumate. All rights reserved.</p>
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
