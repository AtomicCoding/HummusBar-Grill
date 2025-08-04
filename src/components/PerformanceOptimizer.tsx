import { useEffect } from "react";

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Basic performance monitoring using native APIs
    const monitorBasicPerformance = () => {
      // Monitor page load time
      if ("performance" in window) {
        window.addEventListener("load", () => {
          setTimeout(() => {
            const perfData = performance.getEntriesByType(
              "navigation",
            )[0] as PerformanceNavigationTiming;
            if (perfData) {
              const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
              console.log(`Page load time: ${loadTime}ms`);

              // Report to Google Analytics if available
              if (
                typeof window !== "undefined" &&
                "gtag" in window &&
                typeof (window as any).gtag === "function"
              ) {
                (window as any).gtag("event", "page_load_time", {
                  event_category: "Performance",
                  event_label: "load_time",
                  value: Math.round(loadTime),
                  non_interaction: true,
                });
              }
            }
          }, 100);
        });
      }
    };

    // Preload critical resources
    const preloadCriticalImages = () => {
      const criticalImages = [
        // Logo and hero images
        "https://cdn.builder.io/api/v1/image/assets%2Fad5fa173f30f42cb936245efbd928c96%2F26c3a52502154f7c9478b52b4e0b8018?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F0a0eda9784cc438c818cf02b2c391418?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F343e8c0287b94fc99b91d9e23a96ee10?format=webp&width=800",
      ];

      criticalImages.forEach((src) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = src;
        link.fetchPriority = "high";
        document.head.appendChild(link);
      });
    };

    // Optimize images with intersection observer
    const optimizeImages = () => {
      const images = document.querySelectorAll("img[data-src]");

      if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement;
                img.src = img.dataset.src || "";
                img.classList.remove("lazy");
                img.classList.add("loaded");
                imageObserver.unobserve(img);
              }
            });
          },
          { rootMargin: "50px" },
        );

        images.forEach((img) => imageObserver.observe(img));
      } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach((img) => {
          const imgElement = img as HTMLImageElement;
          imgElement.src = imgElement.dataset.src || "";
          imgElement.classList.add("loaded");
        });
      }
    };

    // Reduce layout shift by setting image dimensions
    const preventLayoutShift = () => {
      const images = document.querySelectorAll(
        'img:not([width]):not([height]):not([style*="aspect-ratio"])',
      );
      images.forEach((img) => {
        const imgElement = img as HTMLImageElement;
        if (
          !imgElement.style.aspectRatio &&
          !imgElement.getAttribute("style")?.includes("aspect-ratio")
        ) {
          imgElement.style.aspectRatio = "16/9"; // Default aspect ratio
        }
      });
    };

    // Optimize fonts loading
    const optimizeFonts = () => {
      // Use font-display: swap for custom fonts
      const style = document.createElement("style");
      style.textContent = `
        @font-face {
          font-family: 'Inter';
          font-display: swap;
        }
        @font-face {
          font-family: 'Playfair Display';
          font-display: swap;
        }
        /* Reduce font loading jank */
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }
      `;
      document.head.appendChild(style);
    };

    // Defer non-critical scripts
    const deferNonCriticalScripts = () => {
      const scripts = document.querySelectorAll("script[data-defer]");
      scripts.forEach((script) => {
        const newScript = document.createElement("script");
        newScript.src = script.getAttribute("data-defer") || "";
        newScript.defer = true;
        document.head.appendChild(newScript);
      });
    };

    // Service Worker registration for caching
    const registerServiceWorker = async () => {
      if (
        "serviceWorker" in navigator &&
        process.env.NODE_ENV === "production"
      ) {
        try {
          await navigator.serviceWorker.register("/sw.js");
          console.log("Service Worker registered successfully");
        } catch (error) {
          console.warn("Service Worker registration failed:", error);
        }
      }
    };

    // Critical CSS inlining (applied via className)
    const applyCriticalCSS = () => {
      document.documentElement.style.setProperty("--critical-path-loaded", "1");

      // Add critical styles for performance
      const criticalStyle = document.createElement("style");
      criticalStyle.textContent = `
        /* Performance optimizations */
        img { content-visibility: auto; }
        .lazy { opacity: 0; }
        .loaded { opacity: 1; transition: opacity 0.3s ease; }

        /* Reduce CLS */
        .container-custom { contain: layout style; }
        .section-spacing { contain: layout; }

        /* Optimize rendering */
        .will-change-transform { will-change: transform; }
        .gpu-accelerated { transform: translateZ(0); }
      `;
      document.head.appendChild(criticalStyle);
    };

    // Performance budget monitoring
    const monitorPerformanceBudget = () => {
      if ("PerformanceObserver" in window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === "largest-contentful-paint") {
              const lcp = entry.startTime;
              if (lcp > 2500) {
                // LCP budget: 2.5s
                console.warn(`LCP budget exceeded: ${lcp}ms`);
              }
            }
          });
        });

        try {
          observer.observe({ entryTypes: ["largest-contentful-paint"] });
        } catch (e) {
          // Browser doesn't support this observer
        }
      }
    };

    // Run optimizations
    preloadCriticalImages();
    optimizeImages();
    preventLayoutShift();
    optimizeFonts();
    deferNonCriticalScripts();
    applyCriticalCSS();
    monitorPerformanceBudget();

    // Load performance monitoring
    monitorBasicPerformance();
    registerServiceWorker();

    // Cleanup function
    return () => {
      // Remove any event listeners or observers if needed
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
