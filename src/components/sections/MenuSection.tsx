import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Star, Flame, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("signature");

  const categories = [
    { id: "signature", name: "Signature Dishes", icon: Star },
    { id: "mains", name: "Main Courses", icon: Flame },
    { id: "fresh", name: "Fresh & Light", icon: Leaf },
  ];

  const menuItems = {
    signature: [
      {
        name: "Classic Hummus Bowl",
        description:
          "Our signature hummus served with warm pita, olive oil drizzle, and fresh herbs",
        price: "$12.95",
        image: "hummus-bowl",
        badges: ["Popular", "Vegetarian"],
        spicy: false,
      },
      {
        name: "Mediterranean Lamb Platter",
        description:
          "Tender grilled lamb with tzatziki, roasted vegetables, and saffron rice",
        price: "$28.95",
        image: "lamb-platter",
        badges: ["Chef's Choice"],
        spicy: false,
      },
      {
        name: "Shakshuka Supreme",
        description:
          "Eggs poached in spiced tomato sauce with feta, herbs, and artisan bread",
        price: "$16.95",
        image: "shakshuka",
        badges: ["Spicy"],
        spicy: true,
      },
    ],
    appetizers: [
      {
        name: "Mezze Sampler",
        description:
          "Selection of hummus, baba ganoush, tabbouleh, and stuffed grape leaves",
        price: "$18.95",
        image: "mezze",
        badges: ["Vegetarian", "Share"],
        spicy: false,
      },
      {
        name: "Crispy Falafel",
        description:
          "House-made falafel with tahini sauce and pickled vegetables",
        price: "$11.95",
        image: "falafel",
        badges: ["Vegan"],
        spicy: false,
      },
    ],
    mains: [
      {
        name: "Grilled Branzino",
        description:
          "Whole Mediterranean sea bass with lemon, herbs, and seasonal vegetables",
        price: "$32.95",
        image: "branzino",
        badges: ["Fresh"],
        spicy: false,
      },
      {
        name: "Moussaka Tradition",
        description:
          "Layered eggplant, lamb, and béchamel sauce baked to perfection",
        price: "$24.95",
        image: "moussaka",
        badges: ["Traditional"],
        spicy: false,
      },
    ],
    fresh: [
      {
        name: "Greek Village Salad",
        description:
          "Tomatoes, cucumbers, olives, feta, and oregano with olive oil dressing",
        price: "$14.95",
        image: "greek-salad",
        badges: ["Vegetarian", "Gluten-Free"],
        spicy: false,
      },
      {
        name: "Quinoa Tabbouleh",
        description:
          "Fresh herbs, tomatoes, cucumbers, and quinoa with lemon dressing",
        price: "$13.95",
        image: "quinoa-tabbouleh",
        badges: ["Vegan", "Healthy"],
        spicy: false,
      },
    ],
  };

  return (
    <section id="menu" className="section-spacing bg-white">
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm font-medium mb-4">
            Our Menu
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 text-balance">
            Discover Authentic
            <span className="block text-sage-700">Mediterranean Flavors</span>
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed text-balance">
            Each dish is carefully crafted using traditional recipes and the
            finest ingredients to bring you an authentic taste of the
            Mediterranean.
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
                  ? "bg-sage-600 text-white shadow-soft"
                  : "bg-warm-50 text-foreground/70 hover:bg-warm-100 hover:text-foreground",
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
                <div className="aspect-[4/3] bg-gradient-to-br from-sage-200 to-warm-200 relative overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sage-300/50 to-warm-300/50">
                    <div className="text-center text-sage-700">
                      <Star className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm font-medium">{item.name}</p>
                    </div>
                  </div>

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
                        )}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button
                      size="sm"
                      className="bg-white text-foreground hover:bg-warm-50"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-sage-700 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-sage-700 ml-2">
                      {item.price}
                    </span>
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

                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-sage-600 hover:text-sage-700 hover:bg-sage-50 p-2"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
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
            className="bg-sage-600 hover:bg-sage-700 text-white px-8 group"
          >
            <Link to="/menu">
              View Full Menu
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
