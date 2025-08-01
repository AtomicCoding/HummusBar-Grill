import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MenuSection from "@/components/sections/MenuSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SEOHead from "@/components/SEOHead";
import { LOCAL_BUSINESS_SCHEMA, PAGE_KEYWORDS } from "@/lib/seo-data";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Hummus Bar & Grill - Authentic Mediterranean Restaurant in Los Angeles | Fresh Hummus & Middle Eastern Cuisine"
        description="Experience authentic Mediterranean cuisine at Hummus Bar & Grill in Los Angeles. Fresh hummus, grilled specialties, Israeli breakfast, and traditional Middle Eastern dishes. Kosher-friendly dining with catering available."
        keywords={PAGE_KEYWORDS.home}
        canonicalUrl="https://hummusbarandgrill.com"
        structuredData={LOCAL_BUSINESS_SCHEMA}
      />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
