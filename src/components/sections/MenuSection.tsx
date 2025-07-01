import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Star, Flame, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("popular");

  const categories = [{ id: "popular", name: "Popular", icon: Star }];

  const menuItems = {
    popular: [
      {
        name: "Mushroom Hummus",
        description:
          "Creamy hummus topped with fresh sautéed mushrooms, olive oil, and herbs - packed with plant-based protein and Mediterranean superfoods",
        price: "$12.00",
        image: "https://i.ibb.co/mCg8n88F/image.png",
        badges: ["Heart-Healthy", "Vegetarian"],
        spicy: false,
      },
      {
        name: "Falafel",
        description:
          "Crispy golden falafel made from fresh chickpeas, herbs, and spices - a traditional Mediterranean protein packed with flavor",
        price: "$16.00",
        image: "https://i.ibb.co/B2c05SbT/image.png",
        badges: ["Vegetarian", "Traditional"],
        spicy: false,
      },
      {
        name: "Arugula Avocado Salad",
        description:
          "Fresh arugula topped with creamy avocado, mixed greens, and Mediterranean herbs - a nutritious and satisfying healthy choice",
        price: "$23.00",
        image: "https://i.ibb.co/rGg6kKh8/image.png",
        badges: ["Heart-Healthy", "Fresh Daily"],
        spicy: false,
      },
    ],
  };

  return (
    <section id="menu" className="section-spacing bg-white">
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
            Fresh Daily
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 text-balance">
            Farm-Fresh Ingredients
            <span className="block text-red-700">
              Heart-Healthy Mediterranean
            </span>
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed text-balance">
            Every dish is prepared daily with the freshest ingredients,
            celebrating the proven health benefits of the Mediterranean diet.
            Experience nutrition and flavor in perfect harmony.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-red-600 text-white shadow-soft"
                  : "bg-red-50 text-foreground/70 hover:bg-red-100 hover:text-foreground",
              )}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {menuItems[activeCategory as keyof typeof menuItems].map(
            (item, index) => (
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
                          badge === "Popular" &&
                            "bg-yellow-100 text-yellow-800",
                          badge === "Spicy" && "bg-red-100 text-red-800",
                          badge === "Vegetarian" &&
                            "bg-green-100 text-green-800",
                          badge === "Vegan" &&
                            "bg-emerald-100 text-emerald-800",
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
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-red-700 transition-colors">
                      {item.name}
                    </h3>
                    <div className="text-right ml-2">
                      <span className="text-lg font-bold text-red-700">
                        {item.price}
                      </span>
                      {item.priceNote && (
                        <div className="text-xs text-foreground/60">
                          {item.priceNote}
                        </div>
                      )}
                    </div>
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
            ),
          )}
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
