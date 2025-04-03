
import React from 'react';
import { MapPinIcon } from 'lucide-react';

type LocationMapProps = {
  mapUrl: string;
};

const LocationMap: React.FC<LocationMapProps> = ({ mapUrl }) => {
  return (
    <div className="bg-apt-gray p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-medium mb-3">Location Map</h3>
      <a 
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block aspect-video bg-gray-200 rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
      >
        <div className="w-full h-full flex items-center justify-center bg-apt-blue/10 text-apt-blue hover:bg-apt-blue/20 transition-colors">
          <div className="text-center">
            <MapPinIcon className="h-8 w-8 mx-auto mb-2" />
            <p>View on Google Maps</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default LocationMap;
