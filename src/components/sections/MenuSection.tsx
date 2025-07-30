import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  Flame,
} from "lucide-react";
import { cn } from "@/lib/utils";

const MenuSection = () => {
  const kosherItems = [
    {
      name: "Chicken Thigh Steak (K)",
      description: "Two sides of your choice.",
      image: "https://i.ibb.co/wFB0KbM7/image.png",
      badges: ["Kosher"],
      spicy: false,
    },
    {
      name: "Kosher Rib Eye Steak (K)",
      description: "16oz Angus all-natural steak, two sides of your choice.",
      image: "https://i.ibb.co/mCg8n88F/image.png",
      badges: ["Kosher"],
      spicy: false,
    },
    {
      name: "Kababonim (K)",
      description: "Two sides of your choice.",
      image: "https://i.ibb.co/B2c05SbT/image.png",
      badges: ["Kosher"],
      spicy: false,
    },
    {
      name: "Chicken Tenders Skewer (K)",
      description: "Two sides of your choice.",
      image: "https://i.ibb.co/rGg6kKh8/image.png",
      badges: ["Kosher"],
      spicy: false,
    },
    {
      name: "Spicy Merguez Sausages (K)",
      description: "Two sides of your choice.",
      image: "https://i.ibb.co/wFB0KbM7/image.png",
      badges: ["Kosher"],
      spicy: true,
    },
    {
      name: "Beef Angus Sliders (K)",
      description: "Ketchup, mayo, lettuce, tomato, roasted onion, served with French fries.",
      image: "https://i.ibb.co/mCg8n88F/image.png",
      badges: ["Kosher"],
      spicy: false,
    },
    {
      name: "Pita Arayes (K)",
      description: "Ground beef & lamb, tahini, harissa, pickled lemon spread.",
      image: "https://i.ibb.co/B2c05SbT/image.png",
      badges: ["Kosher"],
      spicy: false,
    },
    {
      name: "Shnitzelonim (K)",
      description: "Two sides of your choice.",
      image: "https://i.ibb.co/rGg6kKh8/image.png",
      badges: ["Kosher"],
      spicy: false,
    },
  ];

  return (
    <section id="menu" className="section-spacing bg-white">
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
            Kosher-style meat is served in this section only. All other meat on our menu is not kosher. Please note that none of our food is prepared in a fully kosher kitchen.
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
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-500 mr-1" />
                      <span>4.8</span>
                    </div>
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
              href="https://www.toasttab.com/local/order/hummusbargrill/r-7fc07f7e-2b14-4999-8bd9-8c05a07d8e59"
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
