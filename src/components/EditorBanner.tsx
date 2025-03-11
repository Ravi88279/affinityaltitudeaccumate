
import { useState } from 'react';
import { ExternalLink, Edit, X } from 'lucide-react';

const EditorBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md animate-fade-up" style={{ animationDelay: '1s' }}>
      <div className="bg-white rounded-lg shadow-xl border border-apt-blue/20 p-4">
        <div className="flex items-start">
          <div className="flex-grow">
            <h3 className="text-lg font-medium flex items-center">
              <Edit className="w-5 h-5 text-apt-blue mr-2" />
              Visual Website Editor
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Want to make changes without coding? Use our visual editor to customize your website with drag and drop.
            </p>
            <div className="mt-3">
              <a 
                href="https://www.wix.com/signin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-white bg-apt-blue px-4 py-2 rounded-md text-sm font-medium hover:bg-apt-blue/90 transition-colors duration-200"
              >
                Open Wix Editor
                <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditorBanner;
