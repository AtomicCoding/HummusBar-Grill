import { useEffect } from "react";

const AccessibilityProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Skip links for keyboard navigation
    const createSkipLinks = () => {
      const skipLinksContainer = document.createElement("div");
      skipLinksContainer.className = "skip-links";
      skipLinksContainer.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
        <a href="#footer" class="skip-link">Skip to footer</a>
      `;

      // Add CSS for skip links
      const skipLinksStyle = document.createElement("style");
      skipLinksStyle.textContent = `
        .skip-links {
          position: absolute;
          top: -100px;
          left: 0;
          z-index: 9999;
        }
        .skip-link {
          position: absolute;
          top: -100px;
          left: 0;
          background: #000;
          color: #fff;
          padding: 8px 16px;
          text-decoration: none;
          font-weight: bold;
          z-index: 10000;
          border-radius: 0 0 4px 0;
        }
        .skip-link:focus {
          top: 0;
        }
      `;

      document.head.appendChild(skipLinksStyle);
      document.body.insertBefore(skipLinksContainer, document.body.firstChild);
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus styles for better visibility
      const focusStyle = document.createElement("style");
      focusStyle.textContent = `
        *:focus {
          outline: 2px solid #dc2626;
          outline-offset: 2px;
        }
        
        *:focus:not(:focus-visible) {
          outline: none;
        }
        
        *:focus-visible {
          outline: 2px solid #dc2626;
          outline-offset: 2px;
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          *:focus {
            outline: 3px solid;
          }
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `;
      document.head.appendChild(focusStyle);
    };

    // Announce route changes for screen readers
    const announceRouteChanges = () => {
      const announcer = document.createElement("div");
      announcer.setAttribute("aria-live", "polite");
      announcer.setAttribute("aria-atomic", "true");
      announcer.className = "sr-only route-announcer";
      announcer.style.cssText = `
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
      `;
      document.body.appendChild(announcer);

      // Listen for route changes and announce them
      const observer = new MutationObserver(() => {
        const title = document.title;
        announcer.textContent = `Page changed to ${title}`;
      });

      observer.observe(document.querySelector("title") || document.head, {
        childList: true,
        characterData: true,
        subtree: true,
      });
    };

    // Add ARIA landmarks to existing elements
    const addARIALandmarks = () => {
      // Wait for elements to be available
      setTimeout(() => {
        const nav = document.querySelector("nav");
        if (nav && !nav.getAttribute("aria-label")) {
          nav.setAttribute("aria-label", "Main navigation");
        }

        const main = document.querySelector("main");
        if (main && !main.getAttribute("id")) {
          main.setAttribute("id", "main-content");
        }

        const footer = document.querySelector("footer");
        if (footer && !footer.getAttribute("aria-label")) {
          footer.setAttribute("aria-label", "Site footer");
          footer.setAttribute("id", "footer");
        }
      }, 100);
    };

    // Color contrast and text scaling support
    const addUserPreferenceSupport = () => {
      const prefStyle = document.createElement("style");
      prefStyle.textContent = `
        /* Respect user's font size preferences */
        @media (min-resolution: 192dpi) {
          body {
            font-size: calc(1rem + 0.1vw);
          }
        }
        
        /* High contrast mode */
        @media (prefers-contrast: high) {
          :root {
            --foreground: #000000;
            --background: #ffffff;
            --border: #000000;
          }
          
          .bg-white { background-color: #ffffff !important; }
          .text-gray-900 { color: #000000 !important; }
          .text-gray-600 { color: #000000 !important; }
        }
        
        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          :root {
            --foreground: #ffffff;
            --background: #000000;
          }
        }
      `;
      document.head.appendChild(prefStyle);
    };

    // Initialize accessibility features
    createSkipLinks();
    enhanceFocusManagement();
    announceRouteChanges();
    addARIALandmarks();
    addUserPreferenceSupport();

    // Cleanup function
    return () => {
      const skipLinks = document.querySelector(".skip-links");
      if (skipLinks) {
        skipLinks.remove();
      }

      const announcer = document.querySelector(".route-announcer");
      if (announcer) {
        announcer.remove();
      }
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityProvider;
