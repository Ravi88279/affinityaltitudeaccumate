
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Check, Users, Award, BadgeCheck, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const values = [
    {
      id: 'integrity',
      title: 'Integrity',
      icon: <Check className="h-8 w-8 text-apt-blue" />,
      description: "We adhere to the highest ethical standards and are committed to honesty and transparency in all our dealings.",
      details: "Our commitment to integrity means we always put ethical considerations at the forefront of our practice. We believe in complete transparency with our clients, providing honest assessments and recommendations even when they might not be what clients initially want to hear. This foundation of trust is essential to building meaningful, long-term relationships with our clients."
    },
    {
      id: 'client-focus',
      title: 'Client Focus',
      icon: <Users className="h-8 w-8 text-apt-blue" />,
      description: "We prioritize understanding our clients' needs and delivering personalized solutions that drive their success.",
      details: "Client focus is at the heart of everything we do. We take the time to understand each client's unique business challenges, goals, and vision. By deeply understanding your business, we can provide tailored financial services that address your specific needs rather than offering one-size-fits-all solutions. Your success is our success."
    },
    {
      id: 'excellence',
      title: 'Excellence',
      icon: <Award className="h-8 w-8 text-apt-blue" />,
      description: 'We strive for excellence in all aspects of our work, continuously improving our skills and processes.',
      details: 'Excellence is not just a goal but a continuous journey. We regularly invest in professional development, stay current with industry trends and regulatory changes, and continuously refine our processes to deliver the highest quality financial services. We hold ourselves to exacting standards and are never satisfied with merely meeting expectations—we aim to exceed them.'
    },
    {
      id: 'reliability',
      title: 'Reliability',
      icon: <BadgeCheck className="h-8 w-8 text-apt-blue" />,
      description: 'Our clients can count on us to deliver accurate, timely services they can depend on for critical decisions.',
      details: 'When you work with Affinity Altitude Accumate, you can count on us to deliver consistent, dependable service. We understand that businesses rely on accurate financial information to make critical decisions, and we take this responsibility seriously. We honor our commitments, meet our deadlines, and ensure that our work is accurate and thorough.'
    }
  ];

  const journey = [
    {
      year: "Our Foundation",
      title: "A New Beginning",
      description: "Affinity Altitude Accumate was founded with a vision to provide fresh perspectives in financial services. While we're new to the market, our team brings years of combined experience and a passion for innovation."
    },
    {
      year: "Our Approach",
      title: "Client-Centered Innovation",
      description: "We combine traditional accounting expertise with modern technology and innovative approaches, creating a unique service model that addresses the evolving needs of Australian businesses."
    },
    {
      year: "Our Commitment",
      title: "Building for the Future",
      description: "As we grow alongside our clients, we remain committed to maintaining personalized service while expanding our capabilities to meet the changing landscape of financial services in Australia."
    }
  ];

  const officeLocation = {
    address: "Office no. 1024, 10th floor, Sun Gravitas, near. Shyamal Cross Road, Rajmani Society, Satellite, Ahmedabad, Gujarat 380015",
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Office no. 1024, 10th floor, Sun Gravitas, near. Shyamal Cross Road, Rajmani Society, Satellite, Ahmedabad, Gujarat 380015")}`
  };

  return (
    <>
      <Helmet>
        <title>About Us - Affinity Altitude Accumate</title>
        <meta name="description" content="Learn about Affinity Altitude Accumate, our mission, and our commitment to providing quality financial services." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          {/* Hero Section */}
          <section className="bg-apt-blue text-white py-16 relative overflow-hidden">
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Our Company</h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  We're a team of dedicated professionals committed to providing exceptional 
                  financial services to businesses of all sizes across Australia.
                </p>
              </div>
            </div>
          </section>
          
          {/* Our Story */}
          <section className="py-16 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-apt-blue/10 rounded-full filter blur-3xl"></div>
            <div className="container-tight relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-4 animate-fade-up">
                  <div className="text-apt-blue font-medium">Our Story</div>
                  <h2 className="heading-underline text-3xl md:text-4xl font-semibold mb-4">
                    A New Vision for Financial Services in Australia
                  </h2>
                  <p className="text-lg">
                    Affinity Altitude Accumate was founded with a simple mission: to provide Australian 
                    small and medium-sized businesses with expert financial services that are accessible, 
                    personalized, and of the highest quality.
                  </p>
                  <p>
                    As a new firm in the Australian market, we bring fresh perspectives and innovative approaches 
                    to traditional accounting practices. While we may be new, our team combines years of 
                    professional experience with enthusiasm and dedication to deliver exceptional service.
                  </p>
                  <p>
                    We believe in building strong relationships with our clients from day one, taking the time 
                    to understand your unique needs and challenges. Our commitment is to grow alongside our 
                    clients, providing the financial clarity and support needed for success in the Australian 
                    business landscape.
                  </p>
                  <p>
                    Based in Sydney, we serve clients throughout Australia, bringing a local understanding 
                    combined with broad expertise in Australian taxation and business regulations.
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
                    <p className="font-bold text-xl">New Firm</p>
                    <p className="text-sm text-white/80">Fresh Approach</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Our Journey */}
          <section className="py-16 bg-apt-gray relative overflow-hidden">
            <div className="container-tight relative z-10">
              <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
                <div className="text-apt-blue font-medium mb-2">Our Journey</div>
                <h2 className="heading-underline-center text-3xl md:text-4xl font-semibold mb-4">
                  The Affinity Altitude Accumate Story
                </h2>
                <p className="text-lg opacity-80">
                  Every great company has a beginning. Here's how our journey is unfolding.
                </p>
              </div>
              
              <div className="relative">
                {/* Timeline connector */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-apt-blue/20 z-0 hidden md:block"></div>
                
                {journey.map((milestone, index) => (
                  <div 
                    key={index} 
                    className={`relative z-10 flex flex-col md:flex-row items-center mb-12 last:mb-0 animate-fade-up ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                      <div className="text-apt-blue font-medium mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-semibold mb-2">{milestone.title}</h3>
                      <p>{milestone.description}</p>
                    </div>
                    
                    <div className="my-5 md:my-0 bg-apt-blue text-white h-12 w-12 rounded-full flex items-center justify-center z-20 shadow-lg">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    
                    <div className="flex-1 md:invisible"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Our Values */}
          <section className="py-16 bg-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-apt-lightblue/10 rounded-full filter blur-3xl"></div>
            <div className="container-tight relative z-10">
              <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
                <div className="text-apt-blue font-medium mb-2">Our Values</div>
                <h2 className="heading-underline-center text-3xl md:text-4xl font-semibold mb-4">
                  The Principles That Guide Us
                </h2>
                <p className="text-lg opacity-80">
                  Our core values shape how we work with clients and each other, driving our 
                  commitment to excellence in everything we do.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <Link
                    key={value.id}
                    to={`/values/${value.id}`}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-up hover:-translate-y-2 transition-transform duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 relative">
                      {value.icon}
                      <div className="absolute top-0 right-0 bg-apt-blue text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p>{value.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
          
          {/* Contact Section */}
          <section className="py-16 bg-apt-gray">
            <div className="container-tight">
              <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
                <div className="text-apt-blue font-medium mb-2">Get In Touch</div>
                <h2 className="heading-underline-center text-3xl md:text-4xl font-semibold mb-4">
                  Contact Our Team
                </h2>
                <p className="text-lg opacity-80">
                  Have questions or ready to get started? Reach out to us today.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a 
                  href={officeLocation.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-apt-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Our Office</h3>
                  <p className="group-hover:text-apt-blue transition-colors">{officeLocation.address}</p>
                  <div className="text-apt-blue mt-3 opacity-0 group-hover:opacity-100 transition-all">View Map →</div>
                </a>
                
                <a 
                  href="mailto:info@affinityaltitudeservices.com"
                  className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-apt-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="group-hover:text-apt-blue transition-colors">info@affinityaltitudeservices.com</p>
                  <div className="text-apt-blue mt-3 opacity-0 group-hover:opacity-100 transition-all">Send Email →</div>
                </a>
                
                <a 
                  href="tel:+919274320379"
                  className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="bg-apt-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-apt-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="group-hover:text-apt-blue transition-colors">+91 9274320379</p>
                  <div className="text-apt-blue mt-3 opacity-0 group-hover:opacity-100 transition-all">Call Now →</div>
                </a>
              </div>
              
              <div className="text-center mt-8">
                <Link to="/contact" className="btn-primary">
                  Contact Us Now
                </Link>
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
