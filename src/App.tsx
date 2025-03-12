
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import { HelmetProvider } from 'react-helmet-async';
import EditorBanner from "./components/EditorBanner";

// Import specialized service pages
import FinancialAnalysis from "./pages/specialized/FinancialAnalysis";
import BusinessStructure from "./pages/specialized/BusinessStructure";

// Import values pages
import Integrity from "./pages/values/Integrity";
import ClientFocus from "./pages/values/ClientFocus";
import Excellence from "./pages/values/Excellence";
import Reliability from "./pages/values/Reliability";

const queryClient = new QueryClient();

// ScrollToTop component to handle smooth scrolling to top on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Specialized service pages */}
            <Route path="/specialized/financial-analysis" element={<FinancialAnalysis />} />
            <Route path="/specialized/business-structure" element={<BusinessStructure />} />
            
            {/* Values pages */}
            <Route path="/values/integrity" element={<Integrity />} />
            <Route path="/values/client-focus" element={<ClientFocus />} />
            <Route path="/values/excellence" element={<Excellence />} />
            <Route path="/values/reliability" element={<Reliability />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <EditorBanner />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
