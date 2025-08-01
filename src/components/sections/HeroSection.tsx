import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Play, Star, Users, Award } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleViewMenu = () => {
    navigate("/menu");
    window.scrollTo(0, 0);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F5dc6991075bd41c2be954029dea0aac6?format=webp&width=800"
          alt="Hummus Bar & Grill Restaurant Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-soft mb-6 animate-fade-in">
            <Star className="w-4 h-4 text-yellow-500 mr-2" />
            <span className="text-sm font-medium text-gray-900">
              Best Israeli Food
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-6 animate-slide-up text-balance">
            Hummus Bar
            <span className="block text-red-400">& Grill</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed animate-slide-up text-balance">
            Authentic Mediterranean Flavors & Tradition.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up">
            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-medium shadow-soft hover:shadow-md transition-all group"
            >
              <a
                href="https://www.toasttab.com/local/order/hummusbargrill/r-7fc07f7e-2b14-4999-8bd9-8c05a07d8e59"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Online
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-medium bg-white/95 backdrop-blur-sm hover:bg-white border-white/50 hover:border-white text-gray-900 hover:text-gray-900 shadow-soft"
            >
              <Link to="/menu">View Menu</Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="lg"
              className="px-8 py-4 text-lg font-medium text-white hover:text-red-400 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 hover:border-white/50 group"
            >
              <a
                href="https://www.opentable.com/r/hummus-bar-and-grill-tarzana"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Make Reservation
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg animate-fade-in">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-red-400 mb-1">
                16+
              </div>
              <div className="text-sm text-white/80">Years Since 2008</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-red-400 mb-1">
                1M+
              </div>
              <div className="text-sm text-white/80">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-red-400 mb-1">
                🏆
              </div>
              <div className="text-sm text-white/80">
                OpenTable Diners Choice 2024
              </div>
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
