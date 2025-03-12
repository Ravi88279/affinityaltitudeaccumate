
import { cn } from '@/lib/utils';
import { ReactNode, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  details?: string;
}

const ServiceCard = ({ title, description, icon, className, details }: ServiceCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div 
        className={cn(
          "bg-white rounded-lg p-6 shadow-sm card-hover border border-gray-100 cursor-pointer transition-all hover:shadow-md",
          className
        )}
        onClick={() => setOpen(true)}
      >
        <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
          <div className="text-apt-blue w-8 h-8">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-medium mb-3">{title}</h3>
        <p className="text-apt-text">{description}</p>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <span className="text-apt-blue">{icon}</span>
              {title}
            </DialogTitle>
            <DialogDescription>
              {description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p>{details || description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServiceCard;
