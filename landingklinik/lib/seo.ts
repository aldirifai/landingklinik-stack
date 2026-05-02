import type { Metadata } from "next";

import { siteConfig } from "./site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
};

export function absoluteUrl(path: string = "/"): string {
  return `${siteConfig.url}${path === "/" ? "" : path}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  ogImage,
  type = "website",
  noIndex = false,
  publishedTime,
  modifiedTime,
}: BuildMetadataInput): Metadata {
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;
  const url = absoluteUrl(path);
  const image = ogImage ?? siteConfig.defaultOgImage;

  const ogBase = {
    url,
    title: fullTitle,
    description,
    siteName: siteConfig.name,
    locale: "id_ID",
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: fullTitle,
        type: "image/png",
      },
    ],
  };

  const openGraph: Metadata["openGraph"] =
    type === "article"
      ? {
          ...ogBase,
          type: "article",
          publishedTime,
          modifiedTime: modifiedTime ?? publishedTime,
          authors: [siteConfig.founder.name],
        }
      : {
          ...ogBase,
          type: "website",
        };

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages: {
        "id-ID": url,
      },
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: siteConfig.founder.name,
    },
  };
}

export function organizationSchema() {
  const sameAs = Object.values(siteConfig.social).filter(
    (link): link is string => typeof link === "string" && link.length > 0
  );

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    legalName: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/icon.svg`,
      width: 512,
      height: 512,
    },
    image: `${siteConfig.url}${siteConfig.defaultOgImage}`,
    email: siteConfig.email,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.role,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.founder.base,
        addressCountry: "ID",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surabaya",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: `+${siteConfig.whatsapp.raw}`,
      email: siteConfig.email,
      areaServed: "ID",
      availableLanguage: ["id", "en"],
    },
    sameAs,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "id-ID",
    publisher: {
      "@id": `${siteConfig.url}#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/portfolio?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}#service`,
    name: "Jasa pembuatan landing page klinik gigi",
    serviceType: "Web development",
    category: "Web development for dental clinics",
    provider: {
      "@id": `${siteConfig.url}#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Klinik gigi di Indonesia",
    },
    description: siteConfig.description,
    offers: {
      "@type": "Offer",
      name: "Klinik Online Starter Pack",
      price: "5500000",
      priceCurrency: "IDR",
      url: `${siteConfig.url}#pricing`,
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "5500000",
        priceCurrency: "IDR",
      },
    },
  };
}

type FaqItem = { q: string; a: string };

export function faqSchema(items: ReadonlyArray<FaqItem>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function breadcrumbSchema(items: ReadonlyArray<BreadcrumbItem>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

type ArticleSchemaInput = {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
};

export function articleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
  image,
}: ArticleSchemaInput) {
  const url = absoluteUrl(path);
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${siteConfig.url}${image}`
    : `${siteConfig.url}${siteConfig.defaultOgImage}`;
  const published = datePublished ?? "2026-01-01";

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    inLanguage: "id-ID",
    author: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.role,
      url: siteConfig.url,
    },
    publisher: {
      "@id": `${siteConfig.url}#organization`,
    },
    datePublished: published,
    dateModified: dateModified ?? published,
  };
}
