import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ui/ServiceCard';
import { serviceData } from '@/data/serviceData';
const Services = () => {
  return <section id="services" className="bg-gradient-to-b from-[#f9f9ff] to-white py-8 relative z-20 md:py-[10px]">
      <div className="container-tight">
        <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-up">
          <div className="text-apt-blue font-medium mb-2">Our Services</div>
          <h2 className="heading-underline-center mb-4">Financial Solutions for Your Business</h2>
          <p className="text-lg opacity-80">
            We offer a comprehensive range of accounting and bookkeeping services
            tailored to meet the needs of your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.map((service, index) => <div key={index} className="animate-fade-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <Link to={`/services/${service.id}`} className="block h-full">
                <ServiceCard title={service.title} description={service.description} details={service.details} icon={service.icon} />
              </Link>
            </div>)}
        </div>
        
        <div className="text-center mt-8 relative z-30">
          <Link to="/services" className="btn-primary inline-flex items-center">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>;
};
export default Services;