
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import CustomSoftware from "./pages/services/CustomSoftware";
import SoftwareConsulting from "./pages/services/SoftwareConsulting";
import MobileWeb from "./pages/services/MobileWeb";
import SaaSSolutions from "./pages/services/SaaSSolutions";
import CloudServices from "./pages/services/CloudServices";
import UIUX from "./pages/services/UIUX";
import QualityAssurance from "./pages/services/QualityAssurance";
import Maintenance from "./pages/services/Maintenance";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/services/consulting" element={<SoftwareConsulting />} />
          <Route path="/services/mobile-web" element={<MobileWeb />} />
          <Route path="/services/saas" element={<SaaSSolutions />} />
          <Route path="/services/cloud" element={<CloudServices />} />
          <Route path="/services/ui-ux" element={<UIUX />} />
          <Route path="/services/qa" element={<QualityAssurance />} />
          <Route path="/services/maintenance" element={<Maintenance />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
