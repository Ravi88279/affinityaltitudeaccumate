
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useEffect } from 'react';
import HeroSection from '@/components/about/HeroSection';
import OurStorySection from '@/components/about/OurStorySection';
import MissionVisionSection from '@/components/about/MissionVisionSection';
import ValuesSection from '@/components/about/ValuesSection';
import WhyChooseUsSection from '@/components/about/WhyChooseUsSection';
import LocationSection from '@/components/about/LocationSection';
import FaqSection from '@/components/about/FaqSection';
import CtaSection from '@/components/about/CtaSection';

const AboutPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - Affinity Altitude Accumate</title>
        <meta name="description" content="Learn about Affinity Altitude Accumate, our mission, and our commitment to providing quality financial services in Australia." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <HeroSection />
          <OurStorySection />
          <MissionVisionSection />
          <ValuesSection />
          <WhyChooseUsSection />
          <LocationSection />
          <FaqSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
