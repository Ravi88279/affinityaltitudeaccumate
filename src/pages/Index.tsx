import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Faq from '@/components/sections/Faq';
const Index = () => {
  return <>
      <Helmet>
        <title>Affinity Altitude Accumate - Professional Accounting & Bookkeeping</title>
        <meta name="description" content="Affinity Altitude Accumate provides expert bookkeeping, accounting, and taxation services to help your business thrive." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-14 py-0">
          <Hero />
          <Services />
          <About />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </>;
};
export default Index;