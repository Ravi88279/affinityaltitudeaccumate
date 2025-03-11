
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ui/ServiceCard';
import { BookOpenCheck, Calculator, ClipboardCheck, CreditCard, FileSpreadsheet, PenSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Bookkeeping',
      description: 'Accurate and timely recording of financial transactions to keep your books in order.',
      icon: <BookOpenCheck className="w-full h-full" />
    },
    {
      title: 'Accounting',
      description: 'Comprehensive accounting services to track, analyze, and report your financial information.',
      icon: <Calculator className="w-full h-full" />
    },
    {
      title: 'Taxation',
      description: 'Expert tax preparation and planning services to optimize your tax position.',
      icon: <ClipboardCheck className="w-full h-full" />
    },
    {
      title: 'Payroll Services',
      description: 'Efficient payroll processing to ensure your employees are paid accurately and on time.',
      icon: <CreditCard className="w-full h-full" />
    },
    {
      title: 'Financial Reporting',
      description: 'Detailed financial reports to help you understand your business performance.',
      icon: <FileSpreadsheet className="w-full h-full" />
    },
    {
      title: 'Business Advisory',
      description: 'Strategic advice to help your business grow and succeed in a competitive market.',
      icon: <PenSquare className="w-full h-full" />
    }
  ];

  return (
    <section className="bg-white section-padding relative z-20" id="services">
      <div className="container-tight">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="text-apt-blue font-medium mb-3">Our Services</div>
          <h2 className="heading-underline-center mb-6">Financial Solutions for Your Business</h2>
          <p className="text-lg opacity-80">
            We offer a comprehensive range of accounting and bookkeeping services
            tailored to meet the needs of your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary inline-flex items-center">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
