import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Verify from "./pages/Verify";
import VerifyInternship from "./pages/VerifyInternship";
import VerifyCourse from "./pages/VerifyCourse";
import AdminAddCertificate from "./pages/AdminAddCertificate";
import InternshipTemplate from "./pages/course-templates/InternshipTemplate";
import WebDevTemplate from "./pages/course-templates/WebDevTemplate";
import FrontendDev from "./pages/services/FrontendDev";
import MobileAppDev from "./pages/services/MobileAppDev";
import GraphicDesign from "./pages/services/GraphicDesign";
import VFX from "./pages/services/VFX";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Admin Routes without Layout */}
          <Route path="/admin/add-certificate" element={<AdminAddCertificate />} />
          
          {/* Public Routes with Layout */}
          <Route path="*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/verify" element={<Verify />} />
                <Route path="/verify/internship" element={<VerifyInternship />} />
                <Route path="/verify/course" element={<VerifyCourse />} />
                
                {/* Internship Routes */}
            <Route path="/services/internship/:type" element={<InternshipTemplate />} />
            
            {/* Web Development Routes */}
            <Route path="/services/webdev/:type" element={<WebDevTemplate />} />
            
            {/* Other Service Pages */}
            <Route path="/services/frontend" element={<FrontendDev />} />
            <Route path="/services/mobile" element={<MobileAppDev />} />
            <Route path="/services/graphic" element={<GraphicDesign />} />
            <Route path="/services/vfx" element={<VFX />} />
            
                {/* Catch-all route for 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
