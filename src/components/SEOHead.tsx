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
      // Basic meta tags
      { name: 'description', content: description },
      { name: 'robots', content: noindex ? 'noindex,nofollow' : 'index,follow' },
      { name: 'author', content: 'Hummus Bar & Grill' },
      { name: 'language', content: 'en-US' },
      { name: 'rating', content: 'general' },
      { name: 'distribution', content: 'global' },
      { name: 'revisit-after', content: '7 days' },

      // Open Graph meta tags
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Hummus Bar & Grill - Authentic Mediterranean Restaurant' },
      { property: 'og:site_name', content: 'Hummus Bar & Grill' },
      { property: 'og:locale', content: 'en_US' },

      // Twitter Card meta tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:image:alt', content: 'Hummus Bar & Grill - Authentic Mediterranean Restaurant' },
      { name: 'twitter:site', content: '@hummusbargrill' },
      { name: 'twitter:creator', content: '@hummusbargrill' },

      // Local SEO and geographic meta tags
      { name: 'geo.region', content: 'US-CA' },
      { name: 'geo.placename', content: 'Los Angeles' },
      { name: 'geo.position', content: '34.0522;-118.2437' },
      { name: 'ICBM', content: '34.0522, -118.2437' },
      { name: 'DC.title', content: title },

      // Mobile and performance
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: 'Hummus Bar & Grill' },
      { name: 'application-name', content: 'Hummus Bar & Grill' },
      { name: 'msapplication-TileColor', content: '#dc2626' },
      { name: 'theme-color', content: '#dc2626' },
    ];

    // Add keywords if provided
    if (keywords) {
      metaTags.push({ name: 'keywords', content: keywords });
    }

    // Add Google site verification if provided
    if (googleSiteVerification) {
      metaTags.push({ name: 'google-site-verification', content: googleSiteVerification });
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
