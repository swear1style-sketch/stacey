import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// The 11 Primary Modeling Pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ModelingCareerPage from "./pages/ModelingCareerPage";
import FashionPage from "./pages/FashionPage";
import BeautyPage from "./pages/BeautyPage";
import EditorialPage from "./pages/EditorialPage";
import RunwayPage from "./pages/RunwayPage";
import CommercialPage from "./pages/CommercialPage";
import RepresentationPage from "./pages/RepresentationPage";
import PublicationsPressPage from "./pages/PublicationsPressPage";
import ContactPage from "./pages/ContactPage";

// Utility Legal Page & 404
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export const AppRoutes = () => (
  <Routes>
    {/* 11 Primary SEO & Modeling Content Pages */}
    <Route path="/" element={<Home />} />
    <Route path="/about-stacey-soans/" element={<AboutPage />} />
    <Route path="/modeling-career/" element={<ModelingCareerPage />} />
    <Route path="/fashion/" element={<FashionPage />} />
    <Route path="/beauty/" element={<BeautyPage />} />
    <Route path="/editorial/" element={<EditorialPage />} />
    <Route path="/runway/" element={<RunwayPage />} />
    <Route path="/commercial/" element={<CommercialPage />} />
    <Route path="/representation/" element={<RepresentationPage />} />
    <Route path="/publications-and-press/" element={<PublicationsPressPage />} />
    <Route path="/contact/" element={<ContactPage />} />

    {/* Clean URL aliases without trailing slash */}
    <Route path="/about-stacey-soans" element={<Navigate to="/about-stacey-soans/" replace />} />
    <Route path="/modeling-career" element={<Navigate to="/modeling-career/" replace />} />
    <Route path="/fashion" element={<Navigate to="/fashion/" replace />} />
    <Route path="/beauty" element={<Navigate to="/beauty/" replace />} />
    <Route path="/editorial" element={<Navigate to="/editorial/" replace />} />
    <Route path="/runway" element={<Navigate to="/runway/" replace />} />
    <Route path="/commercial" element={<Navigate to="/commercial/" replace />} />
    <Route path="/representation" element={<Navigate to="/representation/" replace />} />
    <Route path="/publications-and-press" element={<Navigate to="/publications-and-press/" replace />} />
    <Route path="/contact" element={<Navigate to="/contact/" replace />} />

    {/* Utility Legal & Image Licensing Route */}
    <Route path="/legal/" element={<LegalPage />} />
    <Route path="/legal" element={<Navigate to="/legal/" replace />} />

    {/* Direct 1-Step Permanent Redirects for Old Routes */}
    <Route path="/about" element={<Navigate to="/about-stacey-soans/" replace />} />
    <Route path="/about/" element={<Navigate to="/about-stacey-soans/" replace />} />
    <Route path="/modelling" element={<Navigate to="/modeling-career/" replace />} />
    <Route path="/modelling/" element={<Navigate to="/modeling-career/" replace />} />
    <Route path="/publications-press" element={<Navigate to="/publications-and-press/" replace />} />
    <Route path="/publications-press/" element={<Navigate to="/publications-and-press/" replace />} />
    <Route path="/media-archive" element={<Navigate to="/editorial/" replace />} />
    <Route path="/media-archive/" element={<Navigate to="/editorial/" replace />} />
    <Route path="/human-resources" element={<Navigate to="/about-stacey-soans/" replace />} />
    <Route path="/human-resources/" element={<Navigate to="/about-stacey-soans/" replace />} />
    <Route path="/professional-golf" element={<Navigate to="/about-stacey-soans/" replace />} />
    <Route path="/professional-golf/" element={<Navigate to="/about-stacey-soans/" replace />} />
    <Route path="/author-publishing" element={<Navigate to="/publications-and-press/" replace />} />
    <Route path="/author-publishing/" element={<Navigate to="/publications-and-press/" replace />} />

    {/* Catch-all 404 Route */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
