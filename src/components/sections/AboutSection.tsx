import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChefHat, Heart, Leaf, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: ChefHat,
      title: "Master Chefs",
      description:
        "Our experienced chefs bring authentic Mediterranean flavors using traditional techniques passed down through generations.",
    },
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description:
        "We source the finest, freshest ingredients daily from local farmers and trusted Mediterranean suppliers.",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description:
        "Every dish is prepared with passion and care, ensuring an exceptional dining experience for our guests.",
    },
    {
      icon: Users,
      title: "Family Tradition",
      description:
        "A family-owned restaurant committed to sharing the rich culinary heritage of the Mediterranean region.",
    },
  ];

  return (
    <section id="about" className="section-spacing bg-gradient-warm">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm font-medium">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-balance">
                Authentic Mediterranean
                <span className="block text-sage-700">
                  Experience Since 2008
                </span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                The first Hummus Bar and Grill Restaurant is conveniently
                located in Tarzana Village Shopping Center on Ventura Boulevard
                in Tarzana, and boasts plentiful parking. The simple
                unpretentious environs of the restaurant create the experience
                of a Tel-Aviv outing.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                We offer a wide range of quality salads prepared daily on the
                premises, and served with hot pitas baked upon request on
                location. The food is prepared with great care using only high
                quality products, focusing on the simplicity of preparation -
                thus allowing affordable pricing.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group p-6 bg-white rounded-2xl shadow-soft hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-sage-200 transition-colors">
                    <feature.icon className="w-6 h-6 text-sage-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white px-8"
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 border-sage-300 text-sage-700 hover:bg-sage-50"
              >
                <Link to="/locations">Visit Our Locations</Link>
              </Button>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="col-span-2 aspect-[4/3] bg-sage-200 rounded-2xl overflow-hidden shadow-soft-lg">
                <div className="w-full h-full bg-gradient-to-br from-sage-300 to-sage-400 flex items-center justify-center">
                  <div className="text-center text-sage-700">
                    <ChefHat className="w-16 h-16 mx-auto mb-2" />
                    <p className="text-sm font-medium">Restaurant Interior</p>
                  </div>
                </div>
              </div>

              {/* Secondary Images */}
              <div className="aspect-square bg-warm-200 rounded-2xl overflow-hidden shadow-soft">
                <div className="w-full h-full bg-gradient-to-br from-warm-300 to-warm-400 flex items-center justify-center">
                  <div className="text-center text-warm-700">
                    <Heart className="w-8 h-8 mx-auto mb-1" />
                    <p className="text-xs">Kitchen</p>
                  </div>
                </div>
              </div>

              <div className="aspect-square bg-sage-200 rounded-2xl overflow-hidden shadow-soft">
                <div className="w-full h-full bg-gradient-to-br from-sage-300 to-sage-400 flex items-center justify-center">
                  <div className="text-center text-sage-700">
                    <Leaf className="w-8 h-8 mx-auto mb-1" />
                    <p className="text-xs">Fresh Ingredients</p>
                  </div>
                </div>
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
