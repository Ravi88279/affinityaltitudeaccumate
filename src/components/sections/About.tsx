
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

  const principles = [
    {
      id: 'integrity',
      title: 'Integrity',
      description: 'We adhere to the highest ethical standards and are committed to honesty and transparency in all our dealings.',
      icon: 'check'
    },
    {
      id: 'client-focus',
      title: 'Client Focus',
      description: 'We prioritize understanding our clients' needs and delivering personalized solutions that drive their success.',
      icon: 'users'
    },
    {
      id: 'excellence',
      title: 'Excellence',
      description: 'We strive for excellence in all aspects of our work, continuously improving our skills and processes.',
      icon: 'award'
    },
    {
      id: 'reliability',
      title: 'Reliability',
      description: 'Our clients can count on us to deliver accurate, timely services they can depend on for critical decisions.',
      icon: 'badge-check'
    }
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {principles.map((principle) => (
                <a 
                  key={principle.id}
                  href={`/values/${principle.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-white rounded-md hover:shadow-md transition-all duration-300 group"
                >
                  <div className="bg-apt-blue/10 rounded-full w-10 h-10 flex items-center justify-center mr-3 group-hover:bg-apt-blue/20 transition-all duration-300">
                    <span className="text-apt-blue">{principle.title.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-medium group-hover:text-apt-blue transition-colors duration-300">{principle.title}</h3>
                    <p className="text-sm text-apt-text/80 line-clamp-1">{principle.description}</p>
                  </div>
                </a>
              ))}
            </div>
            
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
