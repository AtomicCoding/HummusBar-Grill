import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
  noindex?: boolean;
  googleSiteVerification?: string;
  googleAnalyticsId?: string;
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "https://hummusbarandgrill.com/og-image.jpg",
  structuredData,
  noindex = false,
  googleSiteVerification,
  googleAnalyticsId = "G-XXXXXXXXXX" // Replace with actual GA4 ID
}: SEOProps) => {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Remove existing meta tags
    const existingMetas = document.querySelectorAll('meta[data-seo="true"]');
    existingMetas.forEach(meta => meta.remove());

    // Remove existing structured data
    const existingStructuredData = document.querySelector('script[type="application/ld+json"]');
    if (existingStructuredData) {
      existingStructuredData.remove();
    }

    // Create meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'robots', content: noindex ? 'noindex,nofollow' : 'index,follow' },
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: ogImage },
      { property: 'og:site_name', content: 'Hummus Bar & Grill' },
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      // Geographic and local SEO
      { name: 'geo.region', content: 'US-CA' },
      { name: 'geo.placename', content: 'Los Angeles' },
      { name: 'geo.position', content: '34.0522;-118.2437' },
      { name: 'ICBM', content: '34.0522, -118.2437' },
    ];

    // Add keywords if provided
    if (keywords) {
      metaTags.push({ name: 'keywords', content: keywords });
    }

    // Add canonical URL if provided
    if (canonicalUrl) {
      const canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = canonicalUrl;
      document.head.appendChild(canonicalLink);
    }

    // Create and append meta tags
    metaTags.forEach(({ name, property, content }) => {
      const meta = document.createElement('meta');
      if (name) meta.name = name;
      if (property) meta.setAttribute('property', property);
      meta.content = content;
      meta.setAttribute('data-seo', 'true');
      document.head.appendChild(meta);
    });

    // Add structured data if provided
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      const metasToRemove = document.querySelectorAll('meta[data-seo="true"]');
      metasToRemove.forEach(meta => meta.remove());
      
      const canonicalToRemove = document.querySelector('link[rel="canonical"]');
      if (canonicalToRemove) canonicalToRemove.remove();
      
      const structuredDataToRemove = document.querySelector('script[type="application/ld+json"]');
      if (structuredDataToRemove) structuredDataToRemove.remove();
    };
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData, noindex]);

  return null;
};

export default SEOHead;
