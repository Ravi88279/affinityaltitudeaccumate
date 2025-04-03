
import React from 'react';
import { MapPinIcon } from 'lucide-react';

type LocationMapProps = {
  mapUrl: string;
};

const LocationMap: React.FC<LocationMapProps> = ({ mapUrl }) => {
  // Create a Google Maps embed URL from the provided mapUrl
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBzhTMZ89H9_XfP5HR-Y0lRg7kUXzTOIi4&q=${mapUrl.split('query=')[1]}`;

  return (
    <div className="bg-apt-gray p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-medium mb-3">Location Map</h3>
      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="mt-3">
        <a 
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-apt-blue hover:text-apt-purple transition-colors"
        >
          <MapPinIcon className="h-4 w-4 mr-1" />
          <span>View on Google Maps</span>
        </a>
      </div>
    </div>
  );
};

export default LocationMap;
