import { useEffect } from "react";

interface SEOAnalyticsProps {
  googleSiteVerification?: string;
  googleAnalyticsId?: string;
  facebookPixelId?: string;
  hotjarId?: string;
}

const SEOAnalytics = ({
  googleSiteVerification = "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  googleAnalyticsId = "G-XXXXXXXXXX",
  facebookPixelId,
  hotjarId,
}: SEOAnalyticsProps) => {
  useEffect(() => {
    // Google Analytics 4
    if (googleAnalyticsId && googleAnalyticsId !== "G-XXXXXXXXXX") {
      // Check if GA script is already loaded
      if (
        !document.querySelector(
          `script[src*="gtag/js?id=${googleAnalyticsId}"]`,
        )
      ) {
        // Load GA script
        const gaScript = document.createElement("script");
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
        document.head.appendChild(gaScript);

        // Initialize GA
        const gaConfigScript = document.createElement("script");
        gaConfigScript.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAnalyticsId}', {
            page_title: document.title,
            page_location: window.location.href,
            custom_map: {'custom_parameter_1': 'restaurant_location'},
            restaurant_location: 'tarzana'
          });

          // Enhanced ecommerce for restaurant orders
          gtag('config', '${googleAnalyticsId}', {
            custom_map: {
              'custom_parameter_1': 'order_type',
              'custom_parameter_2': 'menu_category'
            }
          });
        `;
        document.head.appendChild(gaConfigScript);

        // Track page views for SPA
        const originalPushState = history.pushState;
        const originalReplaceState = history.replaceState;

        history.pushState = function () {
          originalPushState.apply(history, arguments as any);
          setTimeout(() => {
            if (typeof (window as any).gtag === "function") {
              (window as any).gtag("config", googleAnalyticsId, {
                page_title: document.title,
                page_location: window.location.href,
              });
            }
          }, 100);
        };

        history.replaceState = function () {
          originalReplaceState.apply(history, arguments as any);
          setTimeout(() => {
            if (typeof (window as any).gtag === "function") {
              (window as any).gtag("config", googleAnalyticsId, {
                page_title: document.title,
                page_location: window.location.href,
              });
            }
          }, 100);
        };
      }
    }

    // Facebook Pixel
    if (facebookPixelId) {
      const fbScript = document.createElement("script");
      fbScript.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${facebookPixelId}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(fbScript);

      // Add noscript pixel
      const noscript = document.createElement("noscript");
      noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${facebookPixelId}&ev=PageView&noscript=1" />`;
      document.body.appendChild(noscript);
    }

    // Hotjar
    if (hotjarId) {
      const hjScript = document.createElement("script");
      hjScript.innerHTML = `
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:${hotjarId},hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `;
      document.head.appendChild(hjScript);
    }

    // Add Google Site Verification meta tag
    if (
      googleSiteVerification &&
      googleSiteVerification !== "YOUR_GOOGLE_SITE_VERIFICATION_CODE"
    ) {
      const existingVerification = document.querySelector(
        'meta[name="google-site-verification"]',
      );
      if (!existingVerification) {
        const verificationMeta = document.createElement("meta");
        verificationMeta.name = "google-site-verification";
        verificationMeta.content = googleSiteVerification;
        document.head.appendChild(verificationMeta);
      }
    }

    // Enhanced measurement events for restaurants
    const trackRestaurantEvents = () => {
      // Track menu views
      const menuLinks = document.querySelectorAll('a[href*="/menu"]');
      menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
          if (typeof (window as any).gtag === "function") {
            (window as any).gtag("event", "view_menu", {
              event_category: "engagement",
              event_label: "menu_navigation",
            });
          }
        });
      });

      // Track order button clicks
      const orderButtons = document.querySelectorAll(
        'a[href*="toasttab.com"], a[href*="order"]',
      );
      orderButtons.forEach((button) => {
        button.addEventListener("click", () => {
          if (typeof (window as any).gtag === "function") {
            (window as any).gtag("event", "begin_checkout", {
              event_category: "ecommerce",
              event_label: "online_order",
            });
          }
          if (typeof (window as any).fbq === "function") {
            (window as any).fbq("track", "InitiateCheckout");
          }
        });
      });

      // Track phone number clicks
      const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
      phoneLinks.forEach((link) => {
        link.addEventListener("click", () => {
          if (typeof (window as any).gtag === "function") {
            (window as any).gtag("event", "phone_call", {
              event_category: "engagement",
              event_label: "restaurant_contact",
            });
          }
        });
      });

      // Track catering inquiries
      const cateringLinks = document.querySelectorAll('a[href*="/catering"]');
      cateringLinks.forEach((link) => {
        link.addEventListener("click", () => {
          if (typeof (window as any).gtag === "function") {
            (window as any).gtag("event", "view_catering", {
              event_category: "engagement",
              event_label: "catering_interest",
            });
          }
        });
      });
    };

    // Initialize restaurant-specific tracking
    setTimeout(trackRestaurantEvents, 1000);

    // Schema.org markup validation
    const validateSchema = () => {
      const schemas = document.querySelectorAll(
        'script[type="application/ld+json"]',
      );
      schemas.forEach((schema, index) => {
        try {
          JSON.parse(schema.textContent || "");
          console.log(`✅ Schema ${index + 1} is valid JSON-LD`);
        } catch (error) {
          console.error(`❌ Schema ${index + 1} has invalid JSON-LD:`, error);
        }
      });
    };

    // Validate schema in development
    if (process.env.NODE_ENV === "development") {
      setTimeout(validateSchema, 2000);
    }
  }, [googleSiteVerification, googleAnalyticsId, facebookPixelId, hotjarId]);

  return null;
};

export default SEOAnalytics;
