import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

const MenuSection = () => {
  const kosherItems = [
    {
      name: "Chicken Thigh Steak (K)",
      description: "Two sides of your choice.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fd4d89d7a8cfc4ea6b641fea272a70744?format=webp&width=800",
      badges: ["Kosher"],
      spicy: false,
    },
    {
      name: "Kosher Rib Eye Steak (K)",
      description: "16oz Angus all-natural steak, two sides of your choice.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F0d0477c50fcb40dca29f991ff8979804?format=webp&width=800",
      badges: ["Kosher"],
      spicy: false,
    },
    {
      name: "Kababonim (K)",
      description: "Two sides of your choice.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F64767615d955453e96cc6f9fed97d768?format=webp&width=800",
      badges: ["Kosher"],
      spicy: false,
    },
    {
      name: "Chicken Tenders Skewer (K)",
      description: "Two sides of your choice.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fff1e37af1812431594a84a621416dca2?format=webp&width=800",
      badges: ["Kosher"],
      spicy: false,
    },
    {
      name: "Spicy Merguez Sausages (K)",
      description: "Two sides of your choice.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fd6a63fa04cc848b998210dbece197533?format=webp&width=800",
      badges: ["Kosher"],
      spicy: true,
    },
    {
      name: "Beef Angus Sliders (K)",
      description:
        "Ketchup, mayo, lettuce, tomato, roasted onion, served with French fries.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fe1d3cec5ef8a48609bed01cd65f2f56f?format=webp&width=800",
      badges: ["Kosher"],
      spicy: false,
    },
    {
      name: "Pita Arayes (K)",
      description: "Ground beef & lamb, tahini, harissa, pickled lemon spread.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F6fcd9851f5f5484db13733a53c1f70fa?format=webp&width=800",
      badges: ["Kosher"],
      spicy: false,
    },
    {
      name: "Shnitzelonim (K)",
      description: "Two sides of your choice.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F6ea349aae6014677a5727d2d276a91bb?format=webp&width=800",
      badges: ["Kosher"],
      spicy: false,
    },
  ];

  return (
    <section id="kosher-section" className="section-spacing bg-white">
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
            Fresh Daily
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 text-balance">
            <span className="block text-red-700">Kosher</span>
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed text-balance">
            Kosher-style meat is served in this section only. All other meat on
            our menu is not kosher. Please note that none of our food is
            prepared in a fully kosher kitchen.
          </p>
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {kosherItems.map((item, index) => (
            <div
              key={item.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-warm-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {item.badges.map((badge) => (
                    <Badge
                      key={badge}
                      variant="secondary"
                      className={cn(
                        "text-xs bg-white/90 backdrop-blur-sm",
                        badge === "Kosher" && "bg-blue-100 text-blue-800",
                      )}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-red-700 transition-colors">
                    {item.name}
                  </h3>
                </div>

                <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-foreground/60">
                    {item.spicy && (
                      <div className="flex items-center mr-3">
                        <Flame className="w-3 h-3 text-red-500 mr-1" />
                        <span>Spicy</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 group"
          >
            <a
              href="https://cdn.builder.io/o/assets%2Fad5fa173f30f42cb936245efbd928c96%2F571285c6388145f3b2a07b7e31832477?alt=media&token=d119c86b-b772-4ed4-96aa-3f1a9efecfeb&apiKey=ad5fa173f30f42cb936245efbd928c96"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Menu & Order
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
