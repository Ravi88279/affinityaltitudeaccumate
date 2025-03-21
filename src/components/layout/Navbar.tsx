
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

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
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2", 
      scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent")}>
      <div className="container-tight">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Animation and Firm Name */}
          <Link to="/" className="relative z-20 flex items-center hover:scale-105 transition-transform duration-300 gap-3" aria-label="Affinity Altitude Accumate Logo">
            <img 
              src="/lovable-uploads/8931f258-b569-4495-97e4-fd06fd47822e.png" 
              alt="Affinity Altitude Accumate Logo" 
              className="h-12 w-auto animate-pulse-slow hover:animate-none transition-all" 
            />
            <span className={cn(
              "font-semibold text-lg hidden sm:block transition-colors duration-300",
              scrolled ? "text-apt-darkgray" : "text-apt-purple"
            )}>
              Affinity Altitude Accumate
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={cn(
                  "nav-link relative overflow-hidden", 
                  isActive(link.path) 
                    ? "nav-link-active" 
                    : "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:translate-y-1 after:bg-apt-purple after:opacity-0 hover:after:translate-y-0 hover:after:opacity-100 after:transition-all after:duration-300"
                )}
              >
                {link.name}
              </Link>
            ))}
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
            "fixed inset-0 bg-white z-10 flex flex-col justify-center items-center transition-all duration-300 md:hidden", 
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}>
            <div className="p-4 mb-6 flex flex-col items-center">
              <img 
                src="/lovable-uploads/8931f258-b569-4495-97e4-fd06fd47822e.png" 
                alt="Affinity Altitude Accumate Logo" 
                className="h-10 w-auto mb-2" 
              />
              <span className="font-semibold text-apt-purple">Affinity Altitude Accumate</span>
            </div>
            <nav className="flex flex-col space-y-6 text-center">
              {navLinks.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={cn(
                    "text-xl nav-link inline-block", 
                    isActive(link.path) && "nav-link-active"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
