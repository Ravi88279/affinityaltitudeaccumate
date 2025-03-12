
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

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
        "bg-white rounded-lg p-6 shadow-sm card-hover border border-gray-100 h-full transition-all hover:shadow-md",
        className
      )}
    >
      <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        <div className="text-apt-blue w-8 h-8">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-apt-text">{description}</p>
    </div>
  );
};

export default ServiceCard;
