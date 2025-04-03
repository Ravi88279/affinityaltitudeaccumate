
import { Link } from 'react-router-dom';
import { MailIcon, MapPinIcon, PhoneIcon, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const officeAddress = "Office no. 1024, 10th floor, Sun Gravitas, near. Shyamal Cross Road, Rajmani Society, Satellite, Ahmedabad, Gujarat 380015";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-tight">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12">
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/8931f258-b569-4495-97e4-fd06fd47822e.png" 
                alt="Affinity Altitude Accumate Logo" 
                className="h-12 w-auto" 
              />
              <div>
                <span className="font-heading font-semibold text-white text-lg block leading-tight">
                  Affinity Altitude
                </span>
                <span className="font-heading text-gray-300 text-sm block leading-tight">
                  Accumate
                </span>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm max-w-md">
              We provide expert bookkeeping, accounting, and taxation services to help your business thrive.
              Our professional team is dedicated to delivering accurate and timely financial solutions.
            </p>
            
            <div className="flex items-center space-x-4 pt-3">
              <a href="#" className="bg-apt-purple/20 hover:bg-apt-purple text-white p-2 rounded-full transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-apt-purple/20 hover:bg-apt-purple text-white p-2 rounded-full transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-apt-purple/20 hover:bg-apt-purple text-white p-2 rounded-full transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-apt-purple/20 hover:bg-apt-purple text-white p-2 rounded-full transition-colors duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-lg font-heading font-medium mb-4 text-white relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-12 after:bg-apt-purple">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center">
                <ArrowRight className="h-4 w-4 mr-2 text-apt-purple" />
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center">
                <ArrowRight className="h-4 w-4 mr-2 text-apt-purple" />
                About Us
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center">
                <ArrowRight className="h-4 w-4 mr-2 text-apt-purple" />
                Our Services
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center">
                <ArrowRight className="h-4 w-4 mr-2 text-apt-purple" />
                Contact Us
              </Link>
            </nav>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-lg font-heading font-medium mb-4 text-white relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-12 after:bg-apt-purple">Our Services</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/services/bookkeeping" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center">
                <ArrowRight className="h-4 w-4 mr-2 text-apt-purple" />
                Bookkeeping
              </Link>
              <Link to="/services/taxation" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center">
                <ArrowRight className="h-4 w-4 mr-2 text-apt-purple" />
                Taxation
              </Link>
              <Link to="/services/payroll" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center">
                <ArrowRight className="h-4 w-4 mr-2 text-apt-purple" />
                Payroll Services
              </Link>
              <Link to="/services/accounting" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center">
                <ArrowRight className="h-4 w-4 mr-2 text-apt-purple" />
                Accounting
              </Link>
            </nav>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-lg font-heading font-medium mb-4 text-white relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-12 after:bg-apt-purple">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-apt-purple shrink-0 mr-3 mt-0.5" />
                <a 
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {officeAddress}
                </a>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 text-apt-purple shrink-0 mr-3" />
                <a href="tel:+919274320379" className="text-gray-300 hover:text-white transition-colors duration-200">
                  +91 9274320379
                </a>
              </li>
              <li className="flex items-center">
                <MailIcon className="w-5 h-5 text-apt-purple shrink-0 mr-3" />
                <a href="mailto:info@affinityaltitudeservices.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                  info@affinityaltitudeservices.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="border-t border-gray-700/50 py-4 bg-gray-900">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© {currentYear} Affinity Altitude Accumate. All rights reserved.</p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
