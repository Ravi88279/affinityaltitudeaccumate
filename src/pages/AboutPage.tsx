
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Check, Users, Award, BadgeCheck, Sparkles } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Affinity Altitude Accumate</title>
        <meta name="description" content="Learn about Affinity Altitude Accumate, our mission, and our commitment to providing quality financial services." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="bg-apt-blue text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-apt-blue/30 mix-blend-overlay" />
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white/10 animate-float"
                  style={{
                    width: `${Math.random() * 30 + 10}px`,
                    height: `${Math.random() * 30 + 10}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 15 + 10}s`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                ></div>
              ))}
            </div>
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
          <section className="py-20 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-apt-blue/10 rounded-full filter blur-3xl"></div>
            <div className="container-tight relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6 animate-fade-up">
                  <div className="text-apt-blue font-medium">Our Story</div>
                  <h2 className="heading-underline text-3xl md:text-4xl font-semibold mb-6">
                    A Commitment to Excellence Since 2018
                  </h2>
                  <p className="text-lg">
                    Affinity Altitude Accumate was founded with a simple mission: to provide small and 
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
                  <div className="absolute inset-0 bg-gradient-to-r from-apt-blue/10 to-apt-lightblue/5 rounded-lg transform -rotate-3"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Affinity Altitude Accumate office" 
                    className="rounded-lg shadow-lg img-zoom relative z-10"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-apt-blue text-white px-6 py-4 rounded-lg shadow-lg animate-bounce-slow">
                    <p className="font-bold text-xl">5+ Years</p>
                    <p className="text-sm text-white/80">Of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Our Values */}
          <section className="py-20 bg-apt-gray relative overflow-hidden">
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-up hover:-translate-y-2 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>
                  <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Check className="h-8 w-8 text-apt-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                  <p>
                    We adhere to the highest ethical standards and are committed to honesty and transparency in all our dealings.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-up hover:-translate-y-2 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
                  <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-apt-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Client Focus</h3>
                  <p>
                    We prioritize understanding our clients' needs and delivering personalized solutions that drive their success.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-up hover:-translate-y-2 transition-transform duration-300" style={{ animationDelay: '0.3s' }}>
                  <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Award className="h-8 w-8 text-apt-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                  <p>
                    We strive for excellence in all aspects of our work, continuously improving our skills and processes.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-up hover:-translate-y-2 transition-transform duration-300" style={{ animationDelay: '0.4s' }}>
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
          
          {/* Added New Achievements Section to replace Team Section */}
          <section className="py-20 bg-white relative overflow-hidden">
            <div className="absolute top-20 right-20 w-64 h-64 bg-apt-blue/5 rounded-full filter blur-3xl"></div>
            <div className="container-tight relative z-10">
              <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
                <div className="text-apt-blue font-medium mb-3">Our Achievements</div>
                <h2 className="heading-underline-center text-3xl md:text-4xl font-semibold mb-6">
                  Recognized Excellence
                </h2>
                <p className="text-lg opacity-80">
                  We take pride in our work and the recognition we've received for our commitment to quality and client satisfaction.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Financial Excellence Award",
                    year: "2022",
                    description: "Recognized for outstanding achievement in providing quality financial services to small businesses."
                  },
                  {
                    title: "Client Satisfaction",
                    year: "2023",
                    description: "Achieved 98% client satisfaction rate across all our service offerings."
                  },
                  {
                    title: "Business Growth Partnership",
                    year: "2023",
                    description: "Acknowledged for helping 50+ businesses achieve significant growth through strategic financial guidance."
                  },
                ].map((achievement, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden animate-fade-up hover:-translate-y-2 transition-transform duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">{achievement.title}</h3>
                        <div className="bg-apt-blue/10 text-apt-blue px-3 py-1 rounded-full text-sm font-medium">
                          {achievement.year}
                        </div>
                      </div>
                      <div className="flex items-center mb-4">
                        <Sparkles className="w-5 h-5 text-apt-blue mr-2" />
                        <span className="text-apt-blue font-medium">Achievement</span>
                      </div>
                      <p className="text-apt-text">{achievement.description}</p>
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
