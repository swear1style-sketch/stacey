import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioStrip from "@/components/PortfolioStrip";
import AboutSection from "@/components/AboutSection";
import HighlightsSection from "@/components/HighlightsSection";
import VideoReelSection from "@/components/VideoReelSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export const Home = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://staceysoans.com/#website",
        "url": "https://staceysoans.com/",
        "name": "Stacey Soans Digital Encyclopedia & Media Archive",
        "description":
          "A comprehensive digital resource covering Stacey Soans, her professional work, publications, media and four professional pillars: Human Resources, golf, authorship and modelling in Toronto, Canada.",
        "publisher": {
          "@type": "Person",
          "name": "Stacey Soans",
        },
      },
      {
        "@type": "Person",
        "@id": "https://staceysoans.com/#person",
        "name": "Stacey Soans",
        "gender": "Female",
        "jobTitle": [
          "Human Resources Leader & HRBP",
          "Professional Golfer & Golf Writer",
          "Author of Fairways & Femininity",
          "Professional Fashion Model",
        ],
        "workLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Toronto",
            "addressRegion": "Ontario",
            "addressCountry": "Canada",
          },
        },
        "knowsAbout": [
          "Human Resources Strategic Leadership",
          "Talent Management & Organizational Design",
          "Women's Professional Golf",
          "Golf Journalism & Course Writing",
          "Fairways & Femininity Book",
          "High Fashion & Runway Modelling",
        ],
      },
    ],
  };

  return (
    <main className="bg-background min-h-screen overflow-x-hidden selection:bg-gold/30 selection:text-white">
      {/* Dynamic High Domain Authority SEO & Structured Data */}
      <SEO
        title="Stacey Soans Digital Encyclopedia & Media Archive"
        description="A comprehensive digital resource covering Stacey Soans, her professional work, publications, media and four professional pillars: Human Resources, golf, authorship and modelling in Toronto, Canada."
        canonical="/"
        type="website"
        keywords={[
          "Stacey Soans",
          "Stacey Soans Toronto",
          "Stacey Soans Human Resources",
          "Stacey Soans Professional Golf",
          "Fairways and Femininity",
          "Stacey Soans Author",
          "Stacey Soans Model",
          "Digital Encyclopedia Stacey Soans",
          "Media Archive Stacey Soans",
        ]}
        schema={homeSchema}
      />

      {/* Atmospheric Grain Overlay from original template */}
      <div className="grain-overlay" />

      {/* Floating Transparent Luxury Navbar */}
      <Navbar />

      {/* Exact Same Iconic Full-Screen Hero Section Design */}
      <HeroSection />

      {/* Template Portfolio Strip */}
      <PortfolioStrip />

      {/* Template About Section */}
      <div id="about">
        <AboutSection />
      </div>

      {/* Template Highlights Section */}
      <HighlightsSection />

      {/* Template Video Reel Section */}
      <VideoReelSection />

      {/* Template Gallery Section */}
      <div id="gallery">
        <GallerySection />
      </div>

      {/* Template Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* Required Footer Section */}
      <FooterSection />
    </main>
  );
};

export default Home;
