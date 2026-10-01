import { SITE_CONFIG, PAGES_METADATA } from "@/config/site";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioStrip from "@/components/PortfolioStrip";
import ModelingCategoriesSection from "@/components/ModelingCategoriesSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import HomePressAndRepresentation from "@/components/HomePressAndRepresentation";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export const Home = () => {
  const meta = PAGES_METADATA.home;

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.siteUrl}/#website`,
        "url": `${SITE_CONFIG.siteUrl}/`,
        "name": "Stacey Soans — Professional Model",
        "description": meta.description,
        "publisher": {
          "@id": SITE_CONFIG.personId,
        },
      },
      {
        "@type": "Person",
        "@id": SITE_CONFIG.personId,
        "name": SITE_CONFIG.personName,
        "jobTitle": "Professional Model",
        "description": meta.description,
        "url": `${SITE_CONFIG.siteUrl}/`,
        "image": `${SITE_CONFIG.siteUrl}/og-image.jpg`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": SITE_CONFIG.location.city,
          "addressRegion": SITE_CONFIG.location.region,
          "addressCountry": SITE_CONFIG.location.country,
        },
        "knowsAbout": [
          "Fashion Modeling",
          "Beauty Campaigns",
          "Editorial Photography",
          "Runway Modeling",
          "Commercial Photography",
        ],
      },
    ],
  };

  return (
    <div className="bg-background min-h-screen overflow-x-hidden selection:bg-gold/30 selection:text-white">
      {/* Central SEO Metadata */}
      <SEO
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        type="website"
        keywords={meta.keywords}
        schema={homeSchema}
      />

      {/* Atmospheric Grain Overlay */}
      <div className="grain-overlay" />

      {/* Floating Transparent Luxury Navbar */}
      <Navbar />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Selected Portfolio */}
      <PortfolioStrip />

      {/* 3. Modeling Categories */}
      <ModelingCategoriesSection />

      {/* 4. About Stacey */}
      <AboutSection />

      {/* 5. Selected Work / Portfolio Gallery */}
      <GallerySection />

      {/* 6. Publications & Press + 7. Representation */}
      <HomePressAndRepresentation />

      {/* 8. Booking CTA */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Home;
