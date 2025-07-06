import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Coffee,
  Utensils,
  Wine,
  ChevronDown,
  ChevronUp,
  Clock,
  Phone,
  MapPin,
  Truck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Menu = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const breakfastItems = [
    {
      name: "Mediterranean Shakshuka",
      description:
        "Eggs poached in spiced tomato sauce with peppers, onions, and fresh herbs served with warm pita",
      price: "$16.00",
    },
    {
      name: "Israeli Breakfast Platter",
      description:
        "Traditional spread of fresh vegetables, cheeses, olives, hummus, and warm pita bread",
      price: "$18.00",
    },
    {
      name: "Breakfast Hummus Bowl",
      description:
        "Fresh hummus topped with hard-boiled egg, olive oil, za'atar, and warm pita",
      price: "$12.00",
    },
    {
      name: "Morning Falafel Plate",
      description:
        "Crispy falafel balls with tahini, fresh salad, and pita bread",
      price: "$14.00",
    },
  ];

  const lunchDinnerItems = [
    {
      name: "Grilled Branzino",
      description:
        "Whole Mediterranean sea bass grilled to perfection with lemon, herbs, and olive oil",
      price: "$42.00",
    },
    {
      name: "Chef's Shakshuka",
      description:
        "Our signature shakshuka with spiced tomato sauce, eggs, and artisanal touches",
      price: "$25.00",
    },
    {
      name: "Pita Arrayes",
      description:
        "Grilled pita stuffed with seasoned meat, onions, and Mediterranean spices",
      price: "$29.00",
    },
    {
      name: "Classic Hummus Bowl",
      description:
        "Creamy hummus with your choice of toppings, olive oil, and fresh pita",
      price: "$8.00 - $15.00",
    },
    {
      name: "Falafel Platter",
      description:
        "House-made falafel with tahini, salad, pickles, and warm pita",
      price: "$16.00",
    },
    {
      name: "Arugula Avocado Salad",
      description:
        "Fresh arugula, avocado, mixed greens, and Mediterranean herbs with lemon vinaigrette",
      price: "$23.00",
    },
    {
      name: "Kosher Moroccan Cigars",
      description: "Crispy phyllo rolls filled with seasoned meat and spices",
      price: "$20.00",
    },
  ];

  const drinkItems = [
    {
      name: "Fresh Mint Lemonade",
      description:
        "House-made lemonade with fresh mint and Mediterranean herbs",
      price: "$6.00",
    },
    {
      name: "Turkish Coffee",
      description: "Traditional strong coffee served in authentic style",
      price: "$4.00",
    },
    {
      name: "Iced Tea Selection",
      description: "Variety of herbal and traditional teas served over ice",
      price: "$5.00",
    },
    {
      name: "Fresh Fruit Juices",
      description: "Orange, grapefruit, or pomegranate juice freshly squeezed",
      price: "$7.00",
    },
    {
      name: "Mediterranean Soda",
      description: "Imported sodas and sparkling beverages",
      price: "$4.00",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/6979280/pexels-photo-6979280.jpeg"
              alt="Mediterranean Food Spread"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          </div>

          <div className="relative z-10 container-custom section-padding">
            <div className="max-w-4xl">
              <Link
                to="/"
                className="inline-flex items-center text-white/80 hover:text-white font-medium mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-6 animate-slide-up text-balance">
                Our Full
                <span className="block text-red-400">Menu</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl text-balance">
                Explore the rich flavors of the Mediterranean. Browse our
                breakfast, lunch/dinner, and drink offerings — all crafted with
                care and tradition.
              </p>

              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-medium shadow-soft hover:shadow-md transition-all"
              >
                <a
                  href="https://www.toasttab.com/local/order/hummusbargrill/r-7fc07f7e-2b14-4999-8bd9-8c05a07d8e59"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order Online
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Menu Sections */}
        <section className="section-spacing bg-gradient-warm">
          <div className="container-custom section-padding">
            <div className="max-w-6xl mx-auto">
              {/* Breakfast Menu */}
              <div className="mb-8">
                <div
                  className="bg-white rounded-2xl shadow-soft overflow-hidden border border-warm-200 hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => toggleSection("breakfast")}
                >
                  <div className="flex items-center p-8">
                    <div className="flex-1 flex items-center gap-6">
                      <div className="w-24 h-24 rounded-xl overflow-hidden shadow-soft">
                        <img
                          src="https://images.pexels.com/photos/6275158/pexels-photo-6275158.jpeg"
                          alt="Mediterranean Breakfast"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Coffee className="w-6 h-6 text-red-600" />
                          <h3 className="text-2xl font-display font-bold text-foreground">
                            Breakfast Menu
                          </h3>
                        </div>
                        <p className="text-foreground/70 leading-relaxed">
                          Start your day with authentic Mediterranean breakfast
                          dishes, featuring fresh ingredients and traditional
                          recipes.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button
                        className="bg-red-600 hover:bg-red-700 text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSection("breakfast");
                        }}
                      >
                        View Breakfast Menu
                      </Button>
                      {expandedSection === "breakfast" ? (
                        <ChevronUp className="w-6 h-6 text-foreground/40" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-foreground/40" />
                      )}
                    </div>
                  </div>
                </div>

                {expandedSection === "breakfast" && (
                  <div className="mt-4 bg-white rounded-2xl shadow-soft border border-warm-200 p-8 animate-slide-up">
                    <div className="grid md:grid-cols-2 gap-6">
                      {breakfastItems.map((item, index) => (
                        <div
                          key={index}
                          className="border-b border-warm-200 pb-4 last:border-b-0"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-foreground">
                              {item.name}
                            </h4>
                            <span className="text-red-600 font-medium">
                              {item.price}
                            </span>
                          </div>
                          <p className="text-sm text-foreground/70 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-warm-200">
                      <Button
                        asChild
                        className="bg-red-600 hover:bg-red-700 text-white"
                      >
                        <a
                          href="https://www.toasttab.com/local/order/hummusbargrill/r-7fc07f7e-2b14-4999-8bd9-8c05a07d8e59"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Order Breakfast Online
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Lunch & Dinner Menu - Highlighted */}
              <div className="mb-8">
                <div
                  className="bg-gradient-to-r from-red-50 to-white rounded-2xl shadow-md overflow-hidden border-2 border-red-200 hover:shadow-lg transition-all duration-300 cursor-pointer relative"
                  onClick={() => toggleSection("lunch-dinner")}
                >
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    MAIN MENU
                  </div>
                  <div className="flex items-center p-8">
                    <div className="flex-1 flex items-center gap-6">
                      <div className="w-24 h-24 rounded-xl overflow-hidden shadow-soft">
                        <img
                          src="https://images.pexels.com/photos/6617983/pexels-photo-6617983.jpeg"
                          alt="Mediterranean Lunch Dinner"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Utensils className="w-6 h-6 text-red-600" />
                          <h3 className="text-2xl font-display font-bold text-foreground">
                            Lunch & Dinner Menu
                          </h3>
                        </div>
                        <p className="text-foreground/70 leading-relaxed">
                          Our signature dishes featuring the finest
                          Mediterranean ingredients, from fresh seafood to
                          traditional mezze.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button
                        className="bg-red-600 hover:bg-red-700 text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSection("lunch-dinner");
                        }}
                      >
                        View Lunch & Dinner Menu
                      </Button>
                      {expandedSection === "lunch-dinner" ? (
                        <ChevronUp className="w-6 h-6 text-foreground/40" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-foreground/40" />
                      )}
                    </div>
                  </div>
                </div>

                {expandedSection === "lunch-dinner" && (
                  <div className="mt-4 bg-white rounded-2xl shadow-soft border border-warm-200 p-8 animate-slide-up">
                    <div className="grid md:grid-cols-2 gap-6">
                      {lunchDinnerItems.map((item, index) => (
                        <div
                          key={index}
                          className="border-b border-warm-200 pb-4 last:border-b-0"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-foreground">
                              {item.name}
                            </h4>
                            <span className="text-red-600 font-medium">
                              {item.price}
                            </span>
                          </div>
                          <p className="text-sm text-foreground/70 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-warm-200">
                      <Button
                        asChild
                        className="bg-red-600 hover:bg-red-700 text-white"
                      >
                        <a
                          href="https://www.toasttab.com/local/order/hummusbargrill/r-7fc07f7e-2b14-4999-8bd9-8c05a07d8e59"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Order Lunch & Dinner Online
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Drinks Menu */}
              <div className="mb-8">
                <div
                  className="bg-white rounded-2xl shadow-soft overflow-hidden border border-warm-200 hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => toggleSection("drinks")}
                >
                  <div className="flex items-center p-8">
                    <div className="flex-1 flex items-center gap-6">
                      <div className="w-24 h-24 rounded-xl overflow-hidden shadow-soft">
                        <img
                          src="https://images.pexels.com/photos/12041678/pexels-photo-12041678.jpeg"
                          alt="Mediterranean Drinks"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Wine className="w-6 h-6 text-red-600" />
                          <h3 className="text-2xl font-display font-bold text-foreground">
                            Drinks Menu
                          </h3>
                        </div>
                        <p className="text-foreground/70 leading-relaxed">
                          Refresh yourself with our selection of traditional and
                          modern beverages, from Turkish coffee to fresh juices.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button
                        className="bg-red-600 hover:bg-red-700 text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSection("drinks");
                        }}
                      >
                        View Drink Menu
                      </Button>
                      {expandedSection === "drinks" ? (
                        <ChevronUp className="w-6 h-6 text-foreground/40" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-foreground/40" />
                      )}
                    </div>
                  </div>
                </div>

                {expandedSection === "drinks" && (
                  <div className="mt-4 bg-white rounded-2xl shadow-soft border border-warm-200 p-8 animate-slide-up">
                    <div className="grid md:grid-cols-2 gap-6">
                      {drinkItems.map((item, index) => (
                        <div
                          key={index}
                          className="border-b border-warm-200 pb-4 last:border-b-0"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-foreground">
                              {item.name}
                            </h4>
                            <span className="text-red-600 font-medium">
                              {item.price}
                            </span>
                          </div>
                          <p className="text-sm text-foreground/70 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-warm-200">
                      <Button
                        asChild
                        className="bg-red-600 hover:bg-red-700 text-white"
                      >
                        <a
                          href="https://www.toasttab.com/local/order/hummusbargrill/r-7fc07f7e-2b14-4999-8bd9-8c05a07d8e59"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Order Drinks Online
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="container-custom section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold mb-4">
                  Visit Hummus Bar & Grill
                </h2>
                <p className="text-white/80 leading-relaxed">
                  Experience authentic Mediterranean cuisine in the heart of
                  Tarzana
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Hours */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Hours</h3>
                  <div className="text-white/80 space-y-1">
                    <p>
                      <strong>Restaurant:</strong> Daily 11:00 AM - 12:00 AM
                    </p>
                    <p>
                      <strong>Delivery:</strong> Daily 11:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Contact</h3>
                  <div className="text-white/80 space-y-1">
                    <p>
                      <a
                        href="tel:8183446606"
                        className="hover:text-red-400 transition-colors"
                      >
                        (818) 344-6606
                      </a>
                    </p>
                    <p>
                      <a
                        href="mailto:manager@hummusbargrill.com"
                        className="hover:text-red-400 transition-colors"
                      >
                        manager@hummusbargrill.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Location</h3>
                  <div className="text-white/80 space-y-1">
                    <p>18743 Ventura Blvd</p>
                    <p>Tarzana, CA 91356</p>
                  </div>
                </div>
              </div>

              {/* Delivery Partners */}
              <div className="text-center border-t border-white/20 pt-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Truck className="w-5 h-5 text-red-400" />
                  <h3 className="text-lg font-semibold">Order for Delivery</h3>
                </div>
                <div className="flex justify-center gap-6 mb-6">
                  <Button
                    asChild
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    <a
                      href="https://www.toasttab.com/local/order/hummusbargrill/r-7fc07f7e-2b14-4999-8bd9-8c05a07d8e59"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Order Direct
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                    asChild
                  >
                    <a href="tel:8183446606">Call to Order</a>
                  </Button>
                </div>
                <p className="text-white/60 text-sm">
                  Also available on UberEats, DoorDash, and Grubhub
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
