import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChefHat, Heart, Leaf, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing bg-gradient-warm">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-balance">
                Authentic Mediterranean
                <span className="block text-red-700">
                  Experience Since 2008
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="group p-6 bg-white rounded-2xl shadow-soft hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                  <ChefHat className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Daily Fresh Preparation
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Quality salads prepared daily on the premises, with hot pitas
                  baked upon request on location for the freshest experience.
                </p>
              </div>

              <div className="group p-6 bg-white rounded-2xl shadow-soft hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                  <Leaf className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  High Quality Products
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Food prepared with great care using only high quality
                  products, focusing on simplicity of preparation for affordable
                  pricing.
                </p>
              </div>

              <div className="group p-6 bg-white rounded-2xl shadow-soft hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Tel-Aviv Experience
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Simple unpretentious environs create the authentic experience
                  of a Tel-Aviv outing right here in Tarzana.
                </p>
              </div>

              <div className="group p-6 bg-white rounded-2xl shadow-soft hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Family Atmosphere
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Welcoming everyone from quick lunch diners to families and
                  young people enjoying our diverse menu and great atmosphere.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8"
              >
                <a
                  href="https://www.toasttab.com/local/order/hummusbargrill/r-7fc07f7e-2b14-4999-8bd9-8c05a07d8e59"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order Online
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 border-red-300 text-red-700 hover:bg-red-50"
              >
                <Link to="/contact">Visit Our Restaurant</Link>
              </Button>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="col-span-2 aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
                <img
                  src="https://i.ibb.co/TBXCtZ7x/image.png"
                  alt="Restaurant Interior"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Secondary Images */}
              <div className="aspect-square rounded-2xl overflow-hidden shadow-soft">
                <img
                  src="https://i.ibb.co/bRCM5VN2/image.png"
                  alt="Kitchen"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="aspect-square rounded-2xl overflow-hidden shadow-soft">
                <img
                  src="https://i.ibb.co/sp8K7sNF/image.png"
                  alt="Fresh Ingredients"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Award Badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-soft-lg border border-warm-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-yellow-600 text-xl">🏆</span>
                </div>
                <div className="text-sm font-semibold text-foreground">
                  Best of 2024
                </div>
                <div className="text-xs text-foreground/60">Mediterranean</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
