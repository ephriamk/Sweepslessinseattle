import { site, curatedReviews, type Service } from "@/content/site";

const BASE = "https://sweepslessinseattle.com";

const localBusiness = {
  "@type": "LocalBusiness",
  "@id": `${BASE}/#business`,
  name: site.name,
  description:
    "Professional house cleaning in Woodinville, Kirkland, Bellevue, and the greater Eastside. Non-toxic, plant-based care with no contracts.",
  url: BASE,
  telephone: site.phoneTel,
  email: site.email,
  image: `${BASE}/opengraph-image`,
  priceRange: "$$",
  areaServed: [
    "Kirkland, WA",
    "Mill Creek, WA",
    "Redmond, WA",
    "Bellevue, WA",
    "Sammamish, WA",
    "Edmonds, WA",
    "Lynnwood, WA",
    "Kenmore, WA",
    "Bothell, WA",
    "Woodinville, WA",
    "Medina, WA",
    "Mercer Island, WA",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "13110 NE 177th Pl #1049",
    addressLocality: "Woodinville",
    addressRegion: "WA",
    postalCode: "98072",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  sameAs: [site.social.instagram, site.social.facebook],
};

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    ...localBusiness,
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: BASE,
    publisher: { "@id": `${BASE}/#business` },
  };
}

export function serviceJsonLd(svc: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.name,
    description: svc.longDescription,
    url: `${BASE}${svc.slug}`,
    provider: { "@id": `${BASE}/#business` },
    areaServed: {
      "@type": "City",
      name: "Woodinville",
      containedInPlace: { "@type": "State", name: "Washington" },
    },
  };
}

export function reviewsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE}/#business`,
    name: site.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      reviewCount: String(curatedReviews.length),
    },
    review: curatedReviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewBody: r.excerpt,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    })),
  };
}

export function aboutPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Sweepsless in Seattle",
    url: `${BASE}/about`,
    mainEntity: { "@id": `${BASE}/#business` },
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Sweepsless in Seattle",
    url: `${BASE}/contact`,
    mainEntity: { "@id": `${BASE}/#business` },
  };
}

export type FaqItem = { question: string; answer: string };

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
