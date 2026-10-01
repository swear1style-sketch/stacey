import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");
const ssrDir = path.resolve(rootDir, "dist-ssr");

async function prerender() {
  console.log("🚀 Starting Prerendering for modeling portfolio pages...");

  const templatePath = path.resolve(distDir, "index.html");
  if (!fs.existsSync(templatePath)) {
    throw new Error(`dist/index.html not found. Run vite build first.`);
  }
  const rawTemplate = fs.readFileSync(templatePath, "utf-8");

  const { render, PAGES_METADATA, SITE_CONFIG } = await import(
    path.resolve(ssrDir, "entry-server.js")
  );

  const escapeHtml = (str) =>
    str
      ? str
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
      : "";

  // List of all pages to prerender
  const pages = Object.values(PAGES_METADATA);

  // Also include legal page
  pages.push({
    path: "/legal/",
    title: "Legal & Image Licensing | Stacey Soans",
    description:
      "Copyright, intellectual property, and image licensing terms for Stacey Soans modeling photography and digital assets.",
    canonical: "/legal/",
    h1: "Legal & Image Licensing",
    schemaType: "WebPage",
    keywords: ["Stacey Soans legal", "image licensing Stacey Soans"],
  });

  for (const page of pages) {
    const url = page.path;
    console.log(`  -> Prerendering [${url}]...`);

    let appHtml = "";
    try {
      appHtml = render(url);
    } catch (err) {
      console.error(`Error rendering ${url}:`, err);
      continue;
    }

    const canonicalUrl = `${SITE_CONFIG.siteUrl}${
      page.canonical.endsWith("/") ? page.canonical : page.canonical + "/"
    }`;
    const ogImageUrl = `${SITE_CONFIG.siteUrl}/og-image.jpg`;

    // Construct Page-specific Schema.org JSON-LD
    let pageSchema;
    if (page.path === "/") {
      pageSchema = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": `${SITE_CONFIG.siteUrl}/#website`,
            url: `${SITE_CONFIG.siteUrl}/`,
            name: `${SITE_CONFIG.siteName} — Professional Model`,
            description: page.description,
            publisher: {
              "@id": SITE_CONFIG.personId,
            },
          },
          {
            "@type": "Person",
            "@id": SITE_CONFIG.personId,
            name: SITE_CONFIG.personName,
            jobTitle: "Professional Model",
            description: page.description,
            url: `${SITE_CONFIG.siteUrl}/`,
            image: ogImageUrl,
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
          },
        ],
      };
    } else {
      const breadcrumbItems = [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_CONFIG.siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.h1,
          item: canonicalUrl,
        },
      ];

      pageSchema = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": page.schemaType || "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: page.title,
            description: page.description,
            isPartOf: {
              "@type": "WebSite",
              "@id": `${SITE_CONFIG.siteUrl}/#website`,
            },
            about: {
              "@type": "Person",
              "@id": SITE_CONFIG.personId,
              name: SITE_CONFIG.personName,
              jobTitle: "Professional Model",
              image: ogImageUrl,
            },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbItems,
          },
          {
            "@type": "Person",
            "@id": SITE_CONFIG.personId,
            name: SITE_CONFIG.personName,
            jobTitle: "Professional Model",
            url: `${SITE_CONFIG.siteUrl}/`,
            image: ogImageUrl,
          },
        ],
      };
    }

    let html = rawTemplate;

    // 1. Replace Title
    html = html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(page.title)}</title>`);

    // 2. Replace Description
    html = html.replace(
      /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(page.description)}" />`
    );

    // 3. Replace Keywords
    if (page.keywords && page.keywords.length > 0) {
      const defaultKeywords = [
        "Stacey Soans",
        "Stacey Soans model",
        "Stacey Soans professional model",
        "Stacey Soans Toronto model",
        "Stacey Soans modeling portfolio",
      ];
      const mergedKeywords = Array.from(new Set([...page.keywords, ...defaultKeywords]));
      const keywordsStr = escapeHtml(mergedKeywords.join(", "));
      html = html.replace(
        /<meta\s+name=["']keywords["']\s+content=["'].*?["']\s*\/?>/i,
        `<meta name="keywords" content="${keywordsStr}" />`
      );
    }

    // 4. Replace Canonical
    html = html.replace(
      /<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // 5. Replace Open Graph Tags
    html = html.replace(
      /<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:title" content="${escapeHtml(page.title)}" />`
    );
    html = html.replace(
      /<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:description" content="${escapeHtml(page.description)}" />`
    );
    html = html.replace(
      /<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );

    // 6. Replace Twitter Tags
    html = html.replace(
      /<meta\s+name=["']twitter:title["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`
    );
    html = html.replace(
      /<meta\s+name=["']twitter:description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`
    );

    // 7. Replace Static Schema.org JSON-LD
    const jsonLdString = JSON.stringify(pageSchema, null, 2);
    html = html.replace(
      /<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/i,
      `<script type="application/ld+json">\n${jsonLdString}\n    </script>`
    );

    // 8. Inject Pre-rendered App HTML into #root
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Determine target output file path
    let targetFile;
    if (page.path === "/" || page.path === "") {
      targetFile = path.resolve(distDir, "index.html");
    } else {
      const subDir = path.resolve(distDir, page.path.replace(/^\/|\/$/g, ""));
      if (!fs.existsSync(subDir)) {
        fs.mkdirSync(subDir, { recursive: true });
      }
      targetFile = path.resolve(subDir, "index.html");
    }

    fs.writeFileSync(targetFile, html, "utf-8");
  }

  // Cleanup dist-ssr
  if (fs.existsSync(ssrDir)) {
    fs.rmSync(ssrDir, { recursive: true, force: true });
  }

  console.log("✅ Prerendering completed successfully for all routes!");
}

prerender().catch((err) => {
  console.error("❌ Prerendering failed:", err);
  process.exit(1);
});
