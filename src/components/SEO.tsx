import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "profile" | "article";
  keywords?: string[];
  schema?: Record<string, any>;
  image?: string;
  breadcrumbs?: { name: string; item: string }[];
}

export const SEO = ({
  title,
  description,
  canonical,
  type = "website",
  keywords = [],
  schema,
  image = "/og-image.jpg",
  breadcrumbs,
}: SEOProps) => {
  const location = useLocation();

  // Normalize canonical path: ensure starting slash and trailing slash for subpaths
  const normalizedPath = canonical
    ? canonical.startsWith("/") ? canonical : `/${canonical}`
    : location.pathname;

  const currentCanonicalUrl =
    normalizedPath === "/"
      ? `${SITE_CONFIG.siteUrl}/`
      : `${SITE_CONFIG.siteUrl}${normalizedPath.endsWith("/") ? normalizedPath : `${normalizedPath}/`}`;

  const imageUrl = image.startsWith("http")
    ? image
    : `${SITE_CONFIG.siteUrl}${image.startsWith("/") ? image : `/${image}`}`;

  useEffect(() => {
    // 1. Document Title
    document.title = title;

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
      "Stacey Soans model",
      "Stacey Soans professional model",
      "Stacey Soans Toronto model",
      "Stacey Soans fashion model",
      "Stacey Soans beauty model",
      "Stacey Soans editorial model",
      "Stacey Soans runway model",
      "Stacey Soans commercial model",
      "Stacey Soans modeling portfolio",
    ];
    const allKeywords = Array.from(new Set([...keywords, ...defaultKeywords])).join(", ");
    setMetaTag('meta[name="keywords"]', "name", "keywords", allKeywords);

    // Google Site Verification (if configured via env)
    if (SITE_CONFIG.googleSiteVerification) {
      setMetaTag(
        'meta[name="google-site-verification"]',
        "name",
        "google-site-verification",
        SITE_CONFIG.googleSiteVerification
      );
    }

    // 3. Canonical Link (Self-referencing canonical)
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", currentCanonicalUrl);

    // 4. OpenGraph Tags
    setMetaTag('meta[property="og:title"]', "property", "og:title", title);
    setMetaTag('meta[property="og:description"]', "property", "og:description", description);
    setMetaTag('meta[property="og:url"]', "property", "og:url", currentCanonicalUrl);
    setMetaTag('meta[property="og:type"]', "property", "og:type", type);
    setMetaTag('meta[property="og:image"]', "property", "og:image", imageUrl);
    setMetaTag('meta[property="og:site_name"]', "property", "og:site_name", SITE_CONFIG.siteName);

    // 5. Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMetaTag('meta[name="twitter:image"]', "name", "twitter:image", imageUrl);

    // 6. JSON-LD Structured Data
    const scriptId = "dynamic-json-ld";
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = scriptId;
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }

    // Default Person entity (stable entity ID, verified facts only)
    const personEntity: Record<string, any> = {
      "@type": "Person",
      "@id": SITE_CONFIG.personId,
      name: SITE_CONFIG.personName,
      jobTitle: "Professional Model",
      description: SITE_CONFIG.primaryDescription,
      url: SITE_CONFIG.siteUrl,
      image: imageUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE_CONFIG.location.city,
        addressRegion: SITE_CONFIG.location.region,
        addressCountry: SITE_CONFIG.location.country,
      },
      knowsAbout: [
        "Fashion Modeling",
        "Beauty Campaigns",
        "Editorial Photography",
        "Runway Modeling",
        "Commercial Photography",
      ],
    };

    // If verified social profiles exist, include them in sameAs
    if (SITE_CONFIG.socialLinks.length > 0) {
      personEntity.sameAs = SITE_CONFIG.socialLinks.map((s) => s.url);
    }

    // Default fallback graph
    const defaultGraph: any[] = [
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.siteUrl}/#website`,
        url: `${SITE_CONFIG.siteUrl}/`,
        name: `${SITE_CONFIG.siteName} — Professional Model`,
        description: SITE_CONFIG.primaryDescription,
        publisher: {
          "@id": SITE_CONFIG.personId,
        },
      },
      personEntity,
    ];

    if (breadcrumbs && breadcrumbs.length > 0) {
      defaultGraph.push({
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((bc, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: bc.name,
          item: bc.item.startsWith("http") ? bc.item : `${SITE_CONFIG.siteUrl}${bc.item}`,
        })),
      });
    }

    const finalStructuredData = schema
      ? schema
      : {
          "@context": "https://schema.org",
          "@graph": defaultGraph,
        };

    scriptTag.text = JSON.stringify(finalStructuredData, null, 2);

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [title, description, currentCanonicalUrl, type, keywords, schema, imageUrl, breadcrumbs]);

  return null;
};

export default SEO;
