
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  details?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg p-4 shadow-affinity border border-gray-100 h-full transition-all hover:shadow-affinity-hover hover:-translate-y-1 group",
        className
      )}
    >
      <div className="bg-apt-purple/10 rounded-full w-12 h-12 flex items-center justify-center mb-3 group-hover:bg-apt-purple/20 transition-colors duration-300">
        <div className="text-apt-purple w-6 h-6">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-medium mb-2 group-hover:text-apt-purple transition-colors duration-300">{title}</h3>
      <p className="text-apt-text text-sm mb-2">{description}</p>
      <div className="mt-auto pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-apt-purple font-medium text-sm">
        Read More
        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  );
};

export default ServiceCard;
