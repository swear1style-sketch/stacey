import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "profile" | "article" | "book";
  keywords?: string[];
  schema?: Record<string, any>;
  image?: string;
}

const BASE_URL = "https://staceysoans.com";

export const SEO = ({
  title,
  description,
  canonical,
  type = "website",
  keywords = [],
  schema,
  image = "/favicon.svg",
}: SEOProps) => {
  const location = useLocation();
  const currentUrl = canonical ? `${BASE_URL}${canonical}` : `${BASE_URL}${location.pathname}`;

  useEffect(() => {
    // 1. Title
    const fullTitle = title.includes("Stacey Soans")
      ? title
      : `${title} | Stacey Soans Digital Encyclopedia & Media Archive`;
    document.title = fullTitle;

    // Helper to update or create meta tags
    const setMetaTag = (selector: string, attribute: string, attrVal: string, content: string) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, attrVal);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // 2. Standard Meta
    setMetaTag('meta[name="description"]', "name", "description", description);
    
    const defaultKeywords = [
      "Stacey Soans",
      "Stacey Soans Toronto",
      "Human Resources Leader",
      "Professional Golf",
      "Fairways & Femininity Author",
      "Professional Model",
      "Digital Encyclopedia",
      "Media Archive",
    ];
    const allKeywords = Array.from(new Set([...keywords, ...defaultKeywords])).join(", ");
    setMetaTag('meta[name="keywords"]', "name", "keywords", allKeywords);

    // 3. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", currentUrl);

    // 4. OpenGraph
    setMetaTag('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMetaTag('meta[property="og:description"]', "property", "og:description", description);
    setMetaTag('meta[property="og:url"]', "property", "og:url", currentUrl);
    setMetaTag('meta[property="og:type"]', "property", "og:type", type);
    setMetaTag('meta[property="og:image"]', "property", "og:image", image.startsWith("http") ? image : `${BASE_URL}${image}`);
    setMetaTag('meta[property="og:site_name"]', "property", "og:site_name", "Stacey Soans Digital Encyclopedia & Media Archive");

    // 5. Twitter Card
    setMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description);

    // 6. JSON-LD Schema
    const scriptId = "dynamic-json-ld";
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = scriptId;
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }

    // Default base Schema for Stacey Soans
    const basePersonSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Stacey Soans",
      url: currentUrl,
      sameAs: [
        "https://www.linkedin.com/in/staceysoans",
        "https://www.instagram.com/staceysoans",
        "https://staceysoans.com",
      ],
      jobTitle: [
        "Human Resources Business Partner",
        "Professional Golfer & Golf Writer",
        "Author of Fairways & Femininity",
        "Professional Model",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "Ontario",
        addressCountry: "Canada",
      },
      description: description,
    };

    const finalSchema = schema || basePersonSchema;
    scriptTag.text = JSON.stringify(finalSchema, null, 2);

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [title, description, currentUrl, type, keywords, schema, image]);

  return null;
};

export default SEO;
