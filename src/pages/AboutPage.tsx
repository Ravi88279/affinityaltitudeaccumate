
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Check, Users, Award, BadgeCheck } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Jane Smith',
      role: 'Founder & Managing Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      bio: 'Jane has over 20 years of experience in accounting and financial management.',
    },
    {
      name: 'Michael Johnson',
      role: 'Senior Accountant',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      bio: 'Michael specializes in taxation and business advisory services.',
    },
    {
      name: 'Sarah Williams',
      role: 'Bookkeeping Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      bio: 'Sarah leads our bookkeeping team, ensuring accurate and timely financial records.',
    },
    {
      name: 'David Chen',
      role: 'Tax Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      bio: 'David has extensive knowledge of Australian tax regulations and compliance requirements.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - APT Business Services</title>
        <meta name="description" content="Learn about APT Business Services, our team, our mission, and our commitment to providing quality financial services." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="bg-apt-blue text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-apt-blue/30 mix-blend-overlay" />
            <div className="container-tight relative z-10">
              <div className="max-w-3xl mx-auto text-center animate-fade-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Our Company</h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  We're a team of dedicated professionals committed to providing exceptional 
                  financial services to businesses of all sizes.
                </p>
              </div>
            </div>
          </section>
          
          {/* Our Story */}
          <section className="py-20 bg-white">
            <div className="container-tight">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6 animate-fade-up">
                  <div className="text-apt-blue font-medium">Our Story</div>
                  <h2 className="heading-underline text-3xl md:text-4xl font-semibold mb-6">
                    A Commitment to Excellence Since 2008
                  </h2>
                  <p className="text-lg">
                    APT Business Services was founded with a simple mission: to provide small and 
                    medium-sized businesses with expert financial services that are accessible, 
                    personalized, and of the highest quality.
                  </p>
                  <p>
                    Over the years, we've grown from a small practice to a respected firm serving 
                    clients across various industries. Our success is built on strong client relationships, 
                    technical expertise, and a commitment to excellence in everything we do.
                  </p>
                  <p>
                    Today, we continue to embrace technology and innovation while maintaining our 
                    personal approach to client service. Our team of professionals is dedicated to 
                    helping businesses navigate financial challenges and achieve their goals.
                  </p>
                </div>
                
                <div className="relative animate-fade-in">
                  <img 
                    src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="APT Business Services office" 
                    className="rounded-lg shadow-lg img-zoom"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-apt-blue text-white px-6 py-4 rounded-lg shadow-lg">
                    <p className="font-bold text-xl">15+ Years</p>
                    <p className="text-sm text-white/80">Of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Our Values */}
          <section className="py-20 bg-apt-gray">
            <div className="container-tight">
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: '0.1s' }}>
                  <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Check className="h-8 w-8 text-apt-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                  <p>
                    We adhere to the highest ethical standards and are committed to honesty and transparency in all our dealings.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: '0.2s' }}>
                  <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-apt-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Client Focus</h3>
                  <p>
                    We prioritize understanding our clients' needs and delivering personalized solutions that drive their success.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: '0.3s' }}>
                  <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Award className="h-8 w-8 text-apt-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                  <p>
                    We strive for excellence in all aspects of our work, continuously improving our skills and processes.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: '0.4s' }}>
                  <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <BadgeCheck className="h-8 w-8 text-apt-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Reliability</h3>
                  <p>
                    Our clients can count on us to deliver accurate, timely services they can depend on for critical decisions.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Our Team */}
          <section className="py-20 bg-white">
            <div className="container-tight">
              <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
                <div className="text-apt-blue font-medium mb-3">Our Team</div>
                <h2 className="heading-underline-center text-3xl md:text-4xl font-semibold mb-6">
                  Meet the Professionals
                </h2>
                <p className="text-lg opacity-80">
                  Our talented team brings together extensive experience and expertise to deliver
                  exceptional financial services to our clients.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover img-zoom"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-apt-blue mb-4">{member.role}</p>
                      <p className="text-sm">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
