import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    {
      name: 'Home',
      path: '/'
    }, 
    {
      name: 'About',
      path: '/about'
    }, 
    {
      name: 'Services',
      path: '/services'
    }, 
    {
      name: 'Contact',
      path: '/contact'
    }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-apt-purple text-white py-2">
        <div className="container-tight">
          <div className="flex justify-between items-center">
            <div>
              {/* Removed the welcome text */}
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+919274320379" className="flex items-center text-sm hover:text-white/80 transition-colors">
                <Phone className="h-4 w-4 mr-1" />
                +91 9274320379
              </a>
              <a href="mailto:info@affinityaltitudeservices.com" className="flex items-center text-sm hover:text-white/80 transition-colors">
                <Mail className="h-4 w-4 mr-1" />
                info@affinityaltitudeservices.com
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <header className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300 py-3",
        scrolled ? "bg-white shadow-md" : "bg-white"
      )}>
        <div className="container-tight">
          <div className="flex justify-between items-center h-16">
            {/* Logo with Animation and Firm Name */}
            <Link to="/" className="relative z-20 flex items-center transition-transform duration-300 gap-3 hover:opacity-90" aria-label="Affinity Altitude Accumate Logo">
              <img 
                src="/lovable-uploads/8931f258-b569-4495-97e4-fd06fd47822e.png" 
                alt="Affinity Altitude Accumate Logo" 
                className="h-12 w-auto" 
              />
              <div>
                <span className="font-heading font-semibold text-apt-purple text-lg block leading-tight">
                  Affinity Altitude
                </span>
                <span className="font-heading text-apt-darkgray text-sm block leading-tight">
                  Accumate
                </span>
              </div>
            </Link>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center">
              <ul className="flex space-x-8">
                {navLinks.map(link => (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className={cn(
                        "font-medium py-2 px-1 transition-colors", 
                        isActive(link.path) ? "text-apt-purple" : "text-apt-darkgray hover:text-apt-purple"
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/contact" 
                className="ml-8 bg-affinity-gradient text-white py-2.5 px-6 rounded-md font-medium transition-all hover:shadow-lg"
              >
                Get a Quote
              </Link>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden relative z-20 p-2" 
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6 text-apt-darkgray" /> : <Menu className="h-6 w-6 text-apt-darkgray" />}
            </button>
            
            {/* Mobile Menu */}
            <div className={cn(
              "fixed inset-0 bg-white z-10 flex flex-col justify-start pt-24 px-6 transition-all duration-300 md:hidden", 
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            )}>
              <div className="p-4 mb-6 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/8931f258-b569-4495-97e4-fd06fd47822e.png" 
                  alt="Affinity Altitude Accumate Logo" 
                  className="h-12 w-auto mb-2" 
                />
                <span className="font-heading font-semibold text-apt-purple">Affinity Altitude Accumate</span>
              </div>
              
              <nav className="flex flex-col space-y-6">
                {navLinks.map(link => (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    className={cn(
                      "text-lg py-2 border-b border-gray-100 font-medium", 
                      isActive(link.path) ? "text-apt-purple" : "text-apt-darkgray"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <div className="pt-4 flex flex-col space-y-4">
                  <a href="tel:+919274320379" className="flex items-center text-apt-text">
                    <Phone className="h-5 w-5 mr-2 text-apt-purple" />
                    +91 9274320379
                  </a>
                  <a href="mailto:info@affinityaltitudeservices.com" className="flex items-center text-apt-text">
                    <Mail className="h-5 w-5 mr-2 text-apt-purple" />
                    info@affinityaltitudeservices.com
                  </a>
                </div>
                
                <Link 
                  to="/contact" 
                  className="bg-affinity-gradient text-white py-3 px-6 rounded-md font-medium text-center shadow-md mt-4"
                >
                  Get a Quote
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
