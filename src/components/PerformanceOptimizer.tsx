import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalImages = () => {
      const criticalImages = [
        // Hero images for main pages
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F0a0eda9784cc438c818cf02b2c391418?format=webp&width=800',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F343e8c0287b94fc99b91d9e23a96ee10?format=webp&width=800',
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images with intersection observer
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
          const imgElement = img as HTMLImageElement;
          imgElement.src = imgElement.dataset.src || '';
        });
      }
    };

    // Reduce layout shift by setting image dimensions
    const preventLayoutShift = () => {
      const images = document.querySelectorAll('img:not([width]):not([height])');
      images.forEach(img => {
        const imgElement = img as HTMLImageElement;
        if (!imgElement.style.aspectRatio) {
          imgElement.style.aspectRatio = '16/9'; // Default aspect ratio
        }
      });
    };

    // Optimize fonts loading
    const optimizeFonts = () => {
      // Use font-display: swap for custom fonts
      const style = document.createElement('style');
      style.textContent = `
        @font-face {
          font-family: 'Inter';
          font-display: swap;
        }
        @font-face {
          font-family: 'Playfair Display';
          font-display: swap;
        }
      `;
      document.head.appendChild(style);
    };

    // Critical CSS inlining (applied via className)
    const applyCriticalCSS = () => {
      document.documentElement.style.setProperty('--critical-path-loaded', '1');
    };

    // Run optimizations
    preloadCriticalImages();
    optimizeImages();
    preventLayoutShift();
    optimizeFonts();
    applyCriticalCSS();

    // Cleanup function
    return () => {
      // Remove any event listeners or observers if needed
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
