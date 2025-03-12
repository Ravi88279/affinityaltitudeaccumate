
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ui/ServiceCard';
import { BookOpenCheck, Calculator, ClipboardCheck, CreditCard, FileSpreadsheet, PenSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Bookkeeping',
      description: 'Accurate and timely recording of financial transactions to keep your books in order.',
      details: 'Our comprehensive bookkeeping services include accounts payable/receivable management, bank reconciliations, payroll processing, financial statement preparation, and more. We use modern accounting software to ensure accuracy and provide real-time access to your financial data, helping you maintain organized and compliant financial records that form the foundation for sound business decisions.',
      icon: <BookOpenCheck className="w-full h-full" />
    },
    {
      title: 'Accounting',
      description: 'Comprehensive accounting services to track, analyze, and report your financial information.',
      details: 'Our accounting services go beyond basic bookkeeping to provide in-depth financial analysis, management reporting, and strategic insights. We help you understand your business's financial health through detailed profit and loss statements, balance sheets, cash flow analyses, and customized financial reports designed to highlight key performance indicators relevant to your specific industry and business goals.',
      icon: <Calculator className="w-full h-full" />
    },
    {
      title: 'Taxation',
      description: 'Expert tax preparation and planning services to optimize your tax position.',
      details: 'Our taxation services provide comprehensive support for all your tax needs, including personal and business tax returns, GST/BAS obligations, and tax planning strategies. We stay current with the latest tax laws and regulations to identify legitimate deductions, credits, and incentives to minimize your tax liability while ensuring full compliance with ATO requirements. Our proactive approach helps you prepare for tax obligations throughout the year, not just at tax time.',
      icon: <ClipboardCheck className="w-full h-full" />
    },
    {
      title: 'Payroll Services',
      description: 'Efficient payroll processing to ensure your employees are paid accurately and on time.',
      details: 'Our payroll services handle everything from regular processing and electronic payments to tax withholdings, superannuation contributions, and compliance with employment regulations. We manage leave accruals, generate detailed pay slips, produce year-end summaries, and prepare payment summaries. Our systems integrate with popular accounting platforms to streamline your overall financial management process while maintaining accuracy and confidentiality.',
      icon: <CreditCard className="w-full h-full" />
    },
    {
      title: 'Financial Reporting',
      description: 'Detailed financial reports to help you understand your business performance.',
      details: 'Our financial reporting services transform complex financial data into clear, actionable insights through customized reports designed for your specific business needs. We provide detailed profit and loss statements, balance sheets, cash flow analyses, budget comparisons, and performance metrics. These reports are presented in easy-to-understand formats with visual elements to help you quickly grasp your financial position and make informed decisions about your business\'s future.',
      icon: <FileSpreadsheet className="w-full h-full" />
    },
    {
      title: 'Business Advisory',
      description: 'Strategic advice to help your business grow and succeed in a competitive market.',
      details: 'Our business advisory services provide strategic guidance to help you navigate challenges and capitalize on opportunities. We offer support for business structuring, succession planning, growth strategies, risk management, and financial forecasting. Our advisors work closely with you to understand your unique business goals and develop tailored solutions to improve profitability, increase efficiency, and achieve sustainable growth in today\'s competitive market environment.',
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
                details={service.details}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 relative z-30">
          <Link to="/services" className="btn-primary inline-flex items-center">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
