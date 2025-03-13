
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Users, Award, BadgeCheck, ArrowRight } from 'lucide-react';

interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string;
}

const ValuesSection = () => {
  const coreValues: CoreValue[] = [
    {
      id: 'integrity',
      title: 'Integrity',
      description: 'We adhere to the highest ethical standards and are committed to honesty and transparency in all our dealings.',
      icon: <Check className="h-8 w-8 text-apt-blue" />,
      details: "Our commitment to integrity means that we always act in your best interest, providing honest advice even when it may not be what you want to hear. We believe that long-term relationships are built on trust, and we earn that trust by maintaining the highest ethical standards in everything we do."
    },
    {
      id: 'client-focus',
      title: 'Client Focus',
      description: "We prioritize understanding our clients' needs and delivering personalized solutions that drive their success.",
      icon: <Users className="h-8 w-8 text-apt-blue" />,
      details: "At Affinity Altitude Accumate, we take the time to understand your unique business challenges, goals, and vision. This deep understanding allows us to provide tailored solutions that address your specific needs rather than one-size-fits-all approaches."
    },
    {
      id: 'excellence',
      title: 'Excellence',
      description: 'We strive for excellence in all aspects of our work, continuously improving our skills and processes.',
      icon: <Award className="h-8 w-8 text-apt-blue" />,
      details: "Our pursuit of excellence drives us to continuously enhance our expertise, refine our processes, and adopt innovative approaches. We're committed to delivering work of the highest quality that exceeds expectations and helps your business thrive."
    },
    {
      id: 'reliability',
      title: 'Reliability',
      description: 'Our clients can count on us to deliver accurate, timely services they can depend on for critical decisions.',
      icon: <BadgeCheck className="h-8 w-8 text-apt-blue" />,
      details: "We understand that reliable financial information is essential for making sound business decisions. That's why we're committed to delivering accurate, timely services that you can depend on. When we make a commitment, we stand by it."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-apt-lightblue/10 rounded-full filter blur-3xl"></div>
      <div className="container-tight relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <div className="text-apt-blue font-medium mb-3">Our Values</div>
          <h2 className="heading-underline-center text-3xl md:text-4xl font-semibold mb-6">
            The Principles That Guide Us
          </h2>
          <p className="text-lg opacity-80">
            Our core values shape how we work with clients and each other, driving our 
            commitment to excellence in everything we do.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreValues.map((value, index) => (
            <div key={value.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-up hover:-translate-y-2 border border-gray-100" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start mb-4">
                <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mr-4 shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-apt-text">{value.description}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100 mt-4">
                <p className="text-apt-text">{value.details}</p>
                <Link 
                  to={`/values/${value.id}`}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="mt-4 text-apt-blue hover:underline inline-flex items-center"
                >
                  <span>Learn more about this value</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
