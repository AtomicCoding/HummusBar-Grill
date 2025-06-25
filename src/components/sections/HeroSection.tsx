import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Star, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.ibb.co/zVZY8fvH/image.png"
          alt="Hummus Bar & Grill Restaurant Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-soft mb-6 animate-fade-in">
            <Star className="w-4 h-4 text-yellow-500 mr-2" />
            <span className="text-sm font-medium text-foreground">
              Rated #1 Mediterranean Restaurant
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground mb-6 animate-slide-up text-balance">
            Authentic Mediterranean
            <span className="block text-sage-700">Flavors & Tradition</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl leading-relaxed animate-slide-up text-balance">
            Experience the finest Mediterranean cuisine crafted with traditional
            recipes, fresh ingredients, and passionate attention to detail. From
            our signature hummus to perfectly grilled specialties.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up">
            <Button
              asChild
              size="lg"
              className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 text-lg font-medium shadow-soft hover:shadow-md transition-all group"
            >
              <Link to="/order">
                Order Online
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-medium bg-white/90 backdrop-blur-sm hover:bg-white border-warm-300 hover:border-sage-300 shadow-soft"
            >
              <Link to="/menu">View Menu</Link>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="px-8 py-4 text-lg font-medium text-foreground/80 hover:text-foreground bg-white/60 backdrop-blur-sm hover:bg-white/80 group"
            >
              <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Make Reservation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg animate-fade-in">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-sage-700 mb-1">
                25+
              </div>
              <div className="text-sm text-foreground/70">
                Years of Excellence
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-sage-700 mb-1">
                50K+
              </div>
              <div className="text-sm text-foreground/70">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-sage-700 mb-1">
                15
              </div>
              <div className="text-sm text-foreground/70">Locations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-sage-200/30 rounded-full blur-sm animate-pulse" />
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-warm-200/30 rounded-full blur-sm animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-sage-300/20 rounded-full blur-sm animate-pulse delay-500" />
    </section>
  );
};

export default HeroSection;
