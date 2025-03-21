
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
  
  const values = [
    {
      id: 'integrity',
      title: 'Integrity',
      icon: 'check-circle',
      description: 'We adhere to the highest ethical standards in all our dealings'
    },
    {
      id: 'client-focus',
      title: 'Client Focus',
      icon: 'users',
      description: 'Your success is our priority in everything we do'
    },
    {
      id: 'excellence',
      title: 'Excellence',
      icon: 'award',
      description: 'We strive for excellence in all aspects of our service'
    },
    {
      id: 'reliability',
      title: 'Reliability',
      icon: 'shield',
      description: 'Consistent and dependable service you can count on'
    }
  ];

  return (
    <section className="section-padding bg-apt-gray relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-apt-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-apt-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container-tight relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-20 rounded-lg overflow-hidden shadow-affinity">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional accountant working" 
                className="rounded-lg img-zoom w-full"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-apt-purple/90 p-4 md:p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg mb-1">Professional Excellence</h4>
                    <p className="text-white/80 text-sm">Our commitment to excellence sets us apart in the industry</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/4 -left-10 bg-white p-4 shadow-affinity rounded-lg z-10 max-w-[200px] hidden md:block animate-bounce-slow">
              <span className="text-apt-purple font-bold text-3xl">15+</span>
              <p className="text-apt-darkgray font-medium">Years of Industry Experience</p>
            </div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2 animate-fade-up">
            <div className="text-apt-purple font-medium">About Us</div>
            <h2 className="heading-underline text-3xl lg:text-4xl font-bold">Professional Financial Services You Can Trust</h2>
            <p className="text-lg">
              At Affinity Altitude Accumate, we're a new firm bringing fresh perspectives to professional accounting and bookkeeping services. While new to the market, our team combines experience with innovation to serve businesses of all sizes.
            </p>
            
            <ul className="space-y-4 mt-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-apt-purple shrink-0 mr-3 h-5 w-5 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {values.map((value) => (
                <Link 
                  to={`/values/${value.id}`} 
                  key={value.id}
                  className="bg-white p-5 rounded-lg shadow-affinity hover:shadow-affinity-hover transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <h3 className="text-apt-purple font-medium mb-1">{value.title}</h3>
                  <p className="text-sm text-apt-text">{value.description}</p>
                </Link>
              ))}
            </div>
            
            <div className="pt-6">
              <Link to="/about" className="bg-affinity-gradient text-white px-6 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition-all inline-block">
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
