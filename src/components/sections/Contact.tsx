import React from 'react';

const Contact: React.FC = () => {
  // Office address for Google Maps
  const officeAddress = "Office no. 1024, 10th floor, Sun Gravitas, near. Shyamal Cross Road, Rajmani Society, Satellite, Ahmedabad, Gujarat 380015";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;

  return (
    <section className="py-12 bg-white relative overflow-hidden md:py-0">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-apt-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-apt-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container-tight relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <div className="inline-block bg-apt-purple/10 text-apt-purple font-medium px-4 py-1 rounded-full text-sm mb-3">
            Contact Us
          </div>
          <h2 className="heading-underline-center text-3xl md:text-4xl font-bold mb-4">Get In Touch With Our Team</h2>
          <p className="text-lg opacity-80">
            Have questions about our services? Ready to get started? 
            Our team is here to help with all your financial needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6 animate-fade-up">
            {/* Placeholder for contact info or FAQs */}
            <div className="p-4 border rounded-lg shadow text-sm text-gray-600 bg-gray-50">
              <p><strong>Our Office:</strong></p>
              <p>{officeAddress}</p>
              <a className="text-blue-600 underline" href={mapUrl} target="_blank" rel="noopener noreferrer">
                View on Google Maps
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-7 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {/* Placeholder form */}
            <form className="space-y-4 bg-white p-6 shadow rounded-lg border">
              <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" required />
              <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" required />
              <textarea placeholder="Your Message" className="w-full border p-2 rounded" rows={4} required></textarea>
              <button type="submit" className="bg-apt-purple text-white px-4 py-2 rounded">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
