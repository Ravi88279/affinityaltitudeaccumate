
import { MapPin } from 'lucide-react';

interface MapLinkProps {
  address: string;
  className?: string;
}

const MapLink = ({ address, className }: MapLinkProps) => {
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <a 
      href={mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center text-apt-text hover:text-apt-blue transition-colors ${className}`}
    >
      <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
      <span>{address}</span>
    </a>
  );
};

export default MapLink;
