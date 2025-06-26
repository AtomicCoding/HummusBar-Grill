import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChefHat, Heart, Leaf, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: ChefHat,
      title: "Daily Fresh Preparation",
      description:
        "Quality salads prepared daily on the premises, with hot pitas baked upon request on location for the freshest experience.",
    },
    {
      icon: Leaf,
      title: "High Quality Products",
      description:
        "Food prepared with great care using only high quality products, focusing on simplicity of preparation for affordable pricing.",
    },
    {
      icon: Heart,
      title: "Tel-Aviv Experience",
      description:
        "Simple unpretentious environs create the authentic experience of a Tel-Aviv outing right here in Tarzana.",
    },
    {
      icon: Users,
      title: "Family Atmosphere",
      description:
        "Welcoming everyone from quick lunch diners to families and young people enjoying our diverse menu and great atmosphere.",
    },
  ];

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
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                    <feature.icon className="w-6 h-6 text-red-600" />
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
                  src="https://i.ibb.co/hJygGQsZ/image.png"
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
