import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Separate Page Components for High Domain Authority SEO Structure
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import HumanResourcesPage from "./pages/HumanResourcesPage";
import ProfessionalGolfPage from "./pages/ProfessionalGolfPage";
import AuthorPublishingPage from "./pages/AuthorPublishingPage";
import ModellingPage from "./pages/ModellingPage";
import PublicationsPressPage from "./pages/PublicationsPressPage";
import MediaArchivePage from "./pages/MediaArchivePage";
import ContactPage from "./pages/ContactPage";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Website Sections with Individual URLs (Requirement 1 & 9) */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/human-resources" element={<HumanResourcesPage />} />
          <Route path="/professional-golf" element={<ProfessionalGolfPage />} />
          <Route path="/author-publishing" element={<AuthorPublishingPage />} />
          <Route path="/modelling" element={<ModellingPage />} />
          <Route path="/publications-press" element={<PublicationsPressPage />} />
          <Route path="/media-archive" element={<MediaArchivePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal" element={<LegalPage />} />

          {/* Catch-all Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
