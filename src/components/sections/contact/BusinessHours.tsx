
import React from 'react';

const BusinessHours: React.FC = () => {
  return (
    <div>
      <h3 className="text-2xl font-medium mb-4">Business Hours</h3>
      <ul className="space-y-2">
        <li className="flex justify-between group hover:bg-apt-gray p-2 rounded-md transition-all duration-300">
          <span className="font-medium">Monday - Friday</span>
          <span className="opacity-80 group-hover:text-apt-blue group-hover:opacity-100 transition-all duration-300">9:00 AM - 5:00 PM</span>
        </li>
        <li className="flex justify-between group hover:bg-apt-gray p-2 rounded-md transition-all duration-300">
          <span className="font-medium">Saturday</span>
          <span className="opacity-80 group-hover:text-apt-blue group-hover:opacity-100 transition-all duration-300">10:00 AM - 2:00 PM</span>
        </li>
        <li className="flex justify-between group hover:bg-apt-gray p-2 rounded-md transition-all duration-300">
          <span className="font-medium">Sunday</span>
          <span className="opacity-80 group-hover:text-apt-blue group-hover:opacity-100 transition-all duration-300">Closed</span>
        </li>
      </ul>
    </div>
  );
};

export default BusinessHours;
