
import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <div className="text-apt-blue font-medium mb-3">Our Location</div>
          <h2 className="heading-underline-center text-3xl md:text-4xl font-semibold mb-6">
            Visit Our Office
          </h2>
          <p className="text-lg opacity-80">
            We're conveniently located in Sydney's financial district. 
            Stop by to discuss your business needs in person.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 bg-apt-gray p-8 rounded-lg animate-fade-up">
            <div className="flex items-start">
              <MapPin className="text-apt-blue shrink-0 mr-3 h-6 w-6 mt-1" />
              <div>
                <h3 className="font-medium text-xl mb-4">Our Address:</h3>
                <p className="text-lg mb-1">123 Financial District</p>
                <p className="text-lg mb-1">Sydney, NSW 2000</p>
                <p className="text-lg mb-6">Australia</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Business Hours:</h4>
                    <p>Monday - Friday: 9:00 AM - 5:30 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Contact:</h4>
                    <p>Phone: (02) 1234 5678</p>
                    <p>Email: info@affinityaltitude.com.au</p>
                  </div>
                </div>
                
                <a 
                  href="https://maps.google.com/?q=Sydney+NSW+2000+Australia" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost mt-6 py-2 inline-flex items-center"
                >
                  <span>View on Google Maps</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 rounded-lg overflow-hidden shadow-lg animate-fade-in h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13251.016266076307!2d151.2046789!3d-33.8696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x8f7588d9d4e5964c!2sSydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2sus!4v1653000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
