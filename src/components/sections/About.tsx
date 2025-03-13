
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const features = [
    'Dedicated team of accountants and bookkeepers',
    'Personalized service tailored to your business needs',
    'Fixed fee structures with no hidden costs',
    'Timely and accurate financial reporting',
    'Strong focus on client communication',
    'Up-to-date with latest tax regulations'
  ];

  return (
    <section className="section-padding bg-apt-gray">
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="bg-white p-3 shadow-xl rounded-lg rotate-3 absolute top-8 -left-8 z-10 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Business meeting" 
                className="rounded w-full h-48 object-cover"
              />
            </div>
            
            <div className="relative z-20">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional accountant working" 
                className="rounded-lg shadow-lg img-zoom"
              />
            </div>
            
            <div className="bg-white p-3 shadow-xl rounded-lg -rotate-3 absolute bottom-10 -right-8 z-10 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Financial documents" 
                className="rounded w-full h-36 object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2 animate-fade-up">
            <div className="text-apt-blue font-medium">About Us</div>
            <h2 className="heading-underline">Professional Financial Services You Can Trust</h2>
            <p className="text-lg">
              At Affinity Altitude Accumate, we're a new firm bringing fresh perspectives to professional accounting and bookkeeping services. While new to the market, our team combines experience with innovation to serve businesses of all sizes.
            </p>
            
            <ul className="space-y-3 mt-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-apt-blue shrink-0 mr-3 h-5 w-5 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <Link to="/about" className="btn-ghost">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
