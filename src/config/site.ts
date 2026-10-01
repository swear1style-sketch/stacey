// Central configuration source for Stacey Soans Professional Modeling Portfolio

export const SITE_CONFIG = {
  // Configurable base URL, defaults to the deployed Vercel preview URL
  siteUrl: (
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) ||
    "https://staceya.vercel.app"
  ).replace(/\/$/, ""),
  siteName: "Stacey Soans",
  personName: "Stacey Soans",
  get personId() {
    return `${this.siteUrl}/#stacey-soans`;
  },
  primaryDescription:
    "Stacey Soans of Toronto, Canada is a professional model with more than a decade of experience spanning fashion, beauty, editorial, runway and commercial modelling.",
  location: {
    city: "Toronto",
    region: "Ontario",
    country: "Canada",
  },
  agency: {
    name: "Icon Model Management",
    city: "Toronto",
    country: "Canada",
    statement:
      "Stacey Soans has been represented by professional modelling agencies in Toronto, including Icon Model Management.",
  },
  modelStats: {
    height: "5'9\" (175 cm)",
    eyes: "Dark Brown",
    hair: "Dark Brown / Black",
    disciplines: "Fashion, Beauty, Editorial, Runway, Commercial",
    base: "Toronto, Canada",
  },
  // Small neutral cross-reference link to the future broader professional profile website
  broaderProfileUrl: "https://staceysoans.com",
  // Only confirmed verified social profiles supplied by the client
  socialLinks: [] as { name: string; url: string }[],
  // Environment-driven Google Site Verification
  googleSiteVerification:
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_GOOGLE_SITE_VERIFICATION) || "",
  contactEmail: "inquiries@staceysoans.com",
  defaultOgImage: "/og-image.jpg",
};

export interface PageMetadata {
  path: string;
  title: string;
  description: string;
  canonical: string;
  h1: string;
  categoryLine?: string;
  schemaType: "WebSite" | "ProfilePage" | "CollectionPage" | "ContactPage" | "WebPage";
  keywords: string[];
}

export const PAGES_METADATA: Record<string, PageMetadata> = {
  home: {
    path: "/",
    title: "Stacey Soans | Professional Model | Toronto, Canada",
    description:
      "Stacey Soans of Toronto, Canada is a professional model with more than a decade of experience spanning fashion, beauty, editorial, runway and commercial modelling.",
    canonical: "/",
    h1: "Stacey Soans — Professional Model",
    categoryLine: "Fashion · Beauty · Editorial · Runway · Commercial",
    schemaType: "WebSite",
    keywords: [
      "Stacey Soans",
      "Stacey Soans model",
      "Stacey Soans professional model",
      "Stacey Soans Toronto model",
      "Stacey Soans modeling portfolio",
    ],
  },
  about: {
    path: "/about-stacey-soans/",
    title: "Stacey Soans of Toronto, Canada | Professional Model Biography",
    description:
      "Stacey Soans of Toronto, Canada is a professional model with more than a decade of experience in fashion, beauty, editorial, runway and commercial modelling.",
    canonical: "/about-stacey-soans/",
    h1: "About Stacey Soans",
    schemaType: "ProfilePage",
    keywords: [
      "Stacey Soans",
      "Stacey Soans model",
      "Stacey Soans Toronto model",
      "Stacey Soans biography",
      "Stacey Soans professional model",
    ],
  },
  career: {
    path: "/modeling-career/",
    title: "Stacey Soans | Professional Modelling Career",
    description:
      "Explore Stacey Soans’ professional modelling career, spanning fashion, beauty, editorial, runway events and commercial projects in Toronto, Canada.",
    canonical: "/modeling-career/",
    h1: "Stacey Soans — Professional Modelling Career",
    schemaType: "CollectionPage",
    keywords: [
      "Stacey Soans modeling career",
      "Stacey Soans professional modelling",
      "Stacey Soans modeling portfolio",
      "Toronto model Stacey Soans",
    ],
  },
  fashion: {
    path: "/fashion/",
    title: "Stacey Soans | Fashion Model | Toronto, Canada",
    description:
      "Stacey Soans is a professional model with experience in Toronto fashion, fashion editorials, beauty campaigns, runway appearances and commercial projects.",
    canonical: "/fashion/",
    h1: "Stacey Soans — Fashion Modeling",
    schemaType: "CollectionPage",
    keywords: [
      "Stacey Soans fashion model",
      "Stacey Soans Toronto fashion",
      "fashion model Toronto Stacey Soans",
      "Stacey Soans high fashion",
    ],
  },
  beauty: {
    path: "/beauty/",
    title: "Stacey Soans | Beauty Model & Campaign Work",
    description:
      "Stacey Soans is a professional model with experience across Toronto’s fashion and beauty industries, including beauty campaigns and editorial projects.",
    canonical: "/beauty/",
    h1: "Stacey Soans — Beauty Modeling",
    schemaType: "CollectionPage",
    keywords: [
      "Stacey Soans beauty model",
      "Stacey Soans beauty campaigns",
      "beauty modeling Toronto",
      "Stacey Soans cosmetics campaign",
    ],
  },
  editorial: {
    path: "/editorial/",
    title: "Stacey Soans | Editorial Model | Toronto, Canada",
    description:
      "Stacey Soans is a professional model with editorial experience across fashion publications, photography and Toronto fashion work.",
    canonical: "/editorial/",
    h1: "Stacey Soans — Editorial Modeling",
    schemaType: "CollectionPage",
    keywords: [
      "Stacey Soans editorial model",
      "editorial modeling Toronto",
      "Stacey Soans fashion editorial",
      "Stacey Soans photography",
    ],
  },
  runway: {
    path: "/runway/",
    title: "Stacey Soans | Runway Model | Toronto, Canada",
    description:
      "Stacey Soans has professional modelling experience including runway work, Toronto fashion events, editorial appearances and commercial projects.",
    canonical: "/runway/",
    h1: "Stacey Soans — Runway Modeling",
    schemaType: "CollectionPage",
    keywords: [
      "Stacey Soans runway model",
      "runway model Toronto",
      "Stacey Soans runway events",
      "fashion runway Stacey Soans",
    ],
  },
  commercial: {
    path: "/commercial/",
    title: "Stacey Soans | Commercial Model | Toronto, Canada",
    description:
      "Stacey Soans is a professional model with experience in commercial photography, beauty campaigns, fashion, editorial and lifestyle projects.",
    canonical: "/commercial/",
    h1: "Stacey Soans — Commercial Modeling",
    schemaType: "CollectionPage",
    keywords: [
      "Stacey Soans commercial model",
      "commercial model Toronto",
      "Stacey Soans lifestyle model",
      "commercial photography Stacey Soans",
    ],
  },
  representation: {
    path: "/representation/",
    title: "Stacey Soans | Model Representation | Toronto, Canada",
    description:
      "Stacey Soans has been represented by professional modelling agencies in Toronto, including Icon Model Management.",
    canonical: "/representation/",
    h1: "Stacey Soans — Model Representation",
    schemaType: "WebPage",
    keywords: [
      "Stacey Soans model representation",
      "Stacey Soans Icon Model Management",
      "Stacey Soans Toronto agency",
      "Stacey Soans booking",
    ],
  },
  publications: {
    path: "/publications-and-press/",
    title: "Stacey Soans | Modeling Publications & Press",
    description:
      "Stacey Soans of Toronto, Canada has been featured across editorial publications and professional media connected to her modelling career.",
    canonical: "/publications-and-press/",
    h1: "Stacey Soans — Publications & Press",
    schemaType: "CollectionPage",
    keywords: [
      "Stacey Soans modeling publications",
      "Stacey Soans editorial publications",
      "Stacey Soans press",
      "Stacey Soans media features",
    ],
  },
  contact: {
    path: "/contact/",
    title: "Contact Stacey Soans | Professional Modeling Inquiries",
    description:
      "Contact Stacey Soans of Toronto, Canada for professional modelling, editorial, beauty, fashion, runway and commercial inquiries.",
    canonical: "/contact/",
    h1: "Contact Stacey Soans",
    schemaType: "ContactPage",
    keywords: [
      "Contact Stacey Soans",
      "Stacey Soans modeling inquiries",
      "Stacey Soans booking",
      "Book Stacey Soans model",
    ],
  },
};
