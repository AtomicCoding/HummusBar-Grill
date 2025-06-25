import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MenuSection from "@/components/sections/MenuSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
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
