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
                  Fresh Ingredients Daily
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Fresh Mediterranean ingredients prepared daily with
                  traditional recipes and authentic cooking methods.
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
                <Link to="/locations">Visit Our Restaurant</Link>
              </Button>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image - Top (5th image) */}
              <div className="col-span-2 aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F3b1ac74d9ed54ab39eccd40d09ca18d4?format=webp&width=800"
                  alt="Restaurant Interior"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Secondary Images */}
              {/* Bottom Left (4th image) */}
              <div className="aspect-square rounded-2xl overflow-hidden shadow-soft">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F1c5cfe7564924568a1cd430bfa81749d?format=webp&width=800"
                  alt="Kitchen"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Right (3rd image) */}
              <div className="aspect-square rounded-2xl overflow-hidden shadow-soft">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fe839b3157fa74681afe8946b997cd6cc?format=webp&width=800"
                  alt="Fresh Ingredients"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Award Badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-soft-lg border border-warm-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-yellow-600 text-xl">⭐</span>
                </div>
                <div className="text-sm font-semibold text-foreground">
                  Tarzana Favorite
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
