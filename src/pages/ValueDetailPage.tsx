
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useParams, Link } from 'react-router-dom';
import { Check, Users, Award, BadgeCheck, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const ValueDetailPage = () => {
  const { valueId } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const values = [
    {
      id: 'integrity',
      title: 'Integrity',
      icon: <Check className="h-8 w-8 text-white" />,
      color: 'bg-emerald-600',
      description: 'We adhere to the highest ethical standards and are committed to honesty and transparency in all our dealings.',
      details: 'Our commitment to integrity means we always put ethical considerations at the forefront of our practice. We believe in complete transparency with our clients, providing honest assessments and recommendations even when they might not be what clients initially want to hear. This foundation of trust is essential to building meaningful, long-term relationships with our clients.',
      practices: [
        'Transparent pricing with no hidden fees',
        'Honest assessment of financial situations',
        'Clear communication about potential challenges',
        'Maintaining confidentiality of all client information',
        'Adhering to professional accounting standards and regulations',
        'Providing reliable and accurate financial advice'
      ],
      quotes: [
        {
          text: "Integrity is telling yourself the truth. And honesty is telling the truth to other people.",
          author: "Spencer Johnson"
        }
      ]
    },
    {
      id: 'client-focus',
      title: 'Client Focus',
      icon: <Users className="h-8 w-8 text-white" />,
      color: 'bg-blue-600',
      description: "We prioritize understanding our clients' needs and delivering personalized solutions that drive their success.",
      details: "Client focus is at the heart of everything we do. We take the time to understand each client's unique business challenges, goals, and vision. By deeply understanding your business, we can provide tailored financial services that address your specific needs rather than offering one-size-fits-all solutions. Your success is our success.",
      practices: [
        'Taking time to understand your business objectives',
        'Tailoring our services to meet your specific needs',
        'Regular check-ins and updates on your financial status',
        'Proactive approach to identifying opportunities',
        'Adapting our processes to fit your preferred communication style',
        'Being accessible and responsive to your questions and concerns'
      ],
      quotes: [
        {
          text: "The customer's perception is your reality.",
          author: "Kate Zabriskie"
        }
      ]
    },
    {
      id: 'excellence',
      title: 'Excellence',
      icon: <Award className="h-8 w-8 text-white" />,
      color: 'bg-amber-600',
      description: 'We strive for excellence in all aspects of our work, continuously improving our skills and processes.',
      details: 'Excellence is not just a goal but a continuous journey. We regularly invest in professional development, stay current with industry trends and regulatory changes, and continuously refine our processes to deliver the highest quality financial services. We hold ourselves to exacting standards and are never satisfied with merely meeting expectations—we aim to exceed them.',
      practices: [
        'Continuous professional development and training',
        'Staying current with changes in tax laws and regulations',
        'Regular quality checks and reviews of our work',
        'Applying best practices in accounting and financial management',
        'Using cutting-edge accounting technology and software',
        'Seeking and acting on feedback to continuously improve'
      ],
      quotes: [
        {
          text: "Excellence is not a skill. It's an attitude.",
          author: "Ralph Marston"
        }
      ]
    },
    {
      id: 'reliability',
      title: 'Reliability',
      icon: <BadgeCheck className="h-8 w-8 text-white" />,
      color: 'bg-purple-600',
      description: 'Our clients can count on us to deliver accurate, timely services they can depend on for critical decisions.',
      details: 'When you work with Affinity Altitude Accumate, you can count on us to deliver consistent, dependable service. We understand that businesses rely on accurate financial information to make critical decisions, and we take this responsibility seriously. We honor our commitments, meet our deadlines, and ensure that our work is accurate and thorough.',
      practices: [
        'Meeting deadlines consistently',
        'Delivering what we promise, when we promise it',
        'Thorough review processes to ensure accuracy',
        'Consistent quality across all our services',
        'Clear communication about timelines and expectations',
        'Being available and responsive when you need us'
      ],
      quotes: [
        {
          text: "Reliability is the precondition for trust.",
          author: "Friedrich Nietzsche"
        }
      ]
    }
  ];
  
  const value = values.find(v => v.id === valueId);
  
  if (!value) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container-tight">
            <div className="text-center py-12">
              <h1 className="text-2xl mb-4">Value Not Found</h1>
              <p className="mb-6">The value you're looking for doesn't exist.</p>
              <Link to="/about" className="btn-primary">Back to About</Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{value.title} - Our Core Values | Affinity Altitude Accumate</title>
        <meta name="description" content={`Learn about our commitment to ${value.title.toLowerCase()} and how it shapes our financial services for Australian businesses.`} />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          {/* Hero Section */}
          <section className={`${value.color} text-white py-20 relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent mix-blend-overlay" />
            <div className="container-tight relative z-10">
              <Link to="/about" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back to About Us
              </Link>
              <div className="flex items-center mb-6">
                <div className="bg-white/20 rounded-full p-4 mr-4">
                  {value.icon}
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white">{value.title}</h1>
              </div>
              <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                {value.description}
              </p>
            </div>
          </section>
          
          {/* Main Content */}
          <section className="py-16 bg-white">
            <div className="container-tight">
              <div className="prose prose-lg max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold mb-6">Our Commitment to {value.title}</h2>
                <p className="text-lg mb-8">{value.details}</p>
                
                <div className="bg-apt-gray rounded-lg p-8 my-12">
                  <h3 className="text-2xl font-semibold mb-4">How We Put {value.title} Into Practice</h3>
                  <ul className="space-y-4">
                    {value.practices.map((practice, index) => (
                      <li key={index} className="flex items-start">
                        <div className={`${value.color} rounded-full p-1 mr-4 mt-1 text-white`}>
                          <Check className="h-4 w-4" />
                        </div>
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {value.quotes && value.quotes.length > 0 && (
                  <div className="my-12">
                    {value.quotes.map((quote, index) => (
                      <blockquote key={index} className="border-l-4 border-apt-blue pl-6 italic text-lg">
                        <p>"{quote.text}"</p>
                        <footer className="text-right font-medium">— {quote.author}</footer>
                      </blockquote>
                    ))}
                  </div>
                )}
                
                <h3 className="text-2xl font-semibold mb-4">Why {value.title} Matters to Your Business</h3>
                <p className="text-lg mb-4">
                  In today's complex financial landscape, working with an accounting firm that values {value.title.toLowerCase()} is essential. At Affinity Altitude Accumate, we understand that our commitment to {value.title.toLowerCase()} directly impacts your business's financial health and long-term success.
                </p>
                <p className="text-lg mb-4">
                  When you partner with us, you're not just getting a service provider—you're gaining a trusted advisor who puts {value.title.toLowerCase()} at the forefront of every interaction and recommendation.
                </p>
                
                <div className="mt-12 text-center">
                  <h3 className="text-2xl font-semibold mb-4">Ready to Experience the Difference?</h3>
                  <p className="text-lg mb-6">
                    Contact us today to learn more about how our commitment to {value.title.toLowerCase()} can benefit your business.
                  </p>
                  <Link to="/contact" className="btn-primary">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ValueDetailPage;
