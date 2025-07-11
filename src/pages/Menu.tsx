import { useState, useEffect } from "react";
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
  ArrowUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Menu = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const breakfastImages = [
    {
      src: "https://images.pexels.com/photos/6275217/pexels-photo-6275217.jpeg",
      alt: "Shakshuka with Eggs",
      title: "Mediterranean Shakshuka",
    },
    {
      src: "https://images.pexels.com/photos/12955763/pexels-photo-12955763.jpeg",
      alt: "Israeli Breakfast",
      title: "Israeli Breakfast Platter",
    },
    {
      src: "https://i.ibb.co/mCg8n88F/image.png",
      alt: "Hummus with Pita",
      title: "Breakfast Hummus Bowl",
    },
    {
      src: "https://images.pexels.com/photos/11161383/pexels-photo-11161383.jpeg",
      alt: "Mediterranean Meze",
      title: "Jerusalem Mix",
    },
  ];

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
      name: "Jerusalem Mix",
      description:
        "Grilled chicken hearts and livers with onions, spices, and fresh herbs",
      price: "$15.00",
    },
  ];

  const lunchDinnerCategories = [
    {
      name: "Mediterranean Salads",
      items: [
        {
          name: "Arugula Avocado Salad",
          description:
            "Fresh arugula, avocado, mixed greens, and Mediterranean herbs",
          price: "$23.00",
        },
        {
          name: "Chopped Israeli Salad",
          description:
            "Diced tomatoes, cucumbers, onions with olive oil and lemon",
          price: "$12.00",
        },
        {
          name: "Fattoush Salad",
          description: "Mixed greens with crispy pita, sumac, and pomegranate",
          price: "$16.00",
        },
      ],
    },
    {
      name: "Hummus Corner",
      items: [
        {
          name: "Classic Hummus Bowl",
          description: "Creamy hummus with olive oil, tahini, and warm pita",
          price: "$8.00",
        },
        {
          name: "Mushroom Hummus",
          description: "House hummus topped with sautéed mushrooms and herbs",
          price: "$12.00",
        },
        {
          name: "Meat Hummus",
          description: "Traditional hummus topped with seasoned ground meat",
          price: "$15.00",
        },
      ],
    },
    {
      name: "Sandwiches",
      items: [
        {
          name: "Falafel Sandwich",
          description: "Crispy falafel with tahini, salad, and pickles in pita",
          price: "$14.00",
        },
        {
          name: "Shawarma Sandwich",
          description: "Tender lamb shawarma with vegetables and tahini",
          price: "$16.00",
        },
        {
          name: "Sabich",
          description: "Hard-boiled egg, eggplant, tahini, and Israeli salad",
          price: "$13.00",
        },
      ],
    },
    {
      name: "First Bites",
      items: [
        {
          name: "Kosher Moroccan Cigars",
          description:
            "Crispy phyllo rolls filled with seasoned meat and spices",
          price: "$20.00",
        },
        {
          name: "Kibbeh",
          description: "Bulgur and meat croquettes with pine nuts",
          price: "$18.00",
        },
        {
          name: "Stuffed Grape Leaves",
          description: "Rice and herbs wrapped in tender grape leaves",
          price: "$16.00",
        },
      ],
    },
    {
      name: "Specialty Plates",
      items: [
        {
          name: "Chef's Shakshuka",
          description: "Our signature shakshuka with artisanal touches",
          price: "$25.00",
        },
        {
          name: "Mixed Grill Platter",
          description: "Combination of lamb, chicken, and beef skewers",
          price: "$35.00",
        },
        {
          name: "Pita Arrayes",
          description: "Grilled pita stuffed with seasoned meat and onions",
          price: "$29.00",
        },
      ],
    },
    {
      name: "Kosher Dishes",
      items: [
        {
          name: "Kosher Lamb Chops",
          description: "Grilled lamb chops with Mediterranean herbs",
          price: "$38.00",
        },
        {
          name: "Kosher Chicken Skewers",
          description: "Marinated chicken breast with vegetables",
          price: "$26.00",
        },
        {
          name: "Kosher Beef Kabobs",
          description: "Tender beef cubes with onions and peppers",
          price: "$32.00",
        },
      ],
    },
    {
      name: "Butcher Shop",
      items: [
        {
          name: "Ribeye Steak",
          description: "Premium grass-fed ribeye with Mediterranean vegetables",
          price: "$42.00",
        },
        {
          name: "Lamb Shoulder",
          description: "Slow-cooked lamb shoulder with herbs and spices",
          price: "$36.00",
        },
        {
          name: "Mixed Meat Platter",
          description: "Selection of premium cuts and sausages",
          price: "$45.00",
        },
      ],
    },
    {
      name: "Catch of the Day",
      items: [
        {
          name: "Grilled Branzino",
          description: "Whole Mediterranean sea bass with lemon and herbs",
          price: "$42.00",
        },
        {
          name: "Grilled Salmon",
          description: "Atlantic salmon with Mediterranean spices",
          price: "$32.00",
        },
        {
          name: "Fish & Chips",
          description: "Beer-battered fish with crispy fries",
          price: "$24.00",
        },
      ],
    },
    {
      name: "On the Side",
      items: [
        {
          name: "Basmati Rice",
          description: "Fluffy basmati rice with herbs",
          price: "$6.00",
        },
        {
          name: "French Fries",
          description: "Crispy golden fries",
          price: "$8.00",
        },
        {
          name: "Grilled Vegetables",
          description: "Seasonal vegetables with olive oil",
          price: "$10.00",
        },
      ],
    },
  ];

  const drinkItems = [
    {
      name: "Turkish Coffee",
      description: "Traditional strong coffee served in authentic style",
      price: "$4.00",
      image:
        "https://images.pexels.com/photos/17612824/pexels-photo-17612824.jpeg",
    },
    {
      name: "Fresh Mint Lemonade",
      description: "House-made lemonade with fresh mint",
      price: "$6.00",
      image:
        "https://images.pexels.com/photos/17612824/pexels-photo-17612824.jpeg",
    },
    {
      name: "Fresh Orange Juice",
      description: "Freshly squeezed orange juice",
      price: "$7.00",
      image:
        "https://images.pexels.com/photos/17612824/pexels-photo-17612824.jpeg",
    },
    {
      name: "Iced Tea",
      description: "Traditional Middle Eastern tea served over ice",
      price: "$5.00",
      image:
        "https://images.pexels.com/photos/17612824/pexels-photo-17612824.jpeg",
    },
    {
      name: "Pomegranate Juice",
      description: "100% pure pomegranate juice",
      price: "$8.00",
      image:
        "https://images.pexels.com/photos/17612824/pexels-photo-17612824.jpeg",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % breakfastImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + breakfastImages.length) % breakfastImages.length,
    );
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Sticky Section Navigation */}
      <div className="fixed top-16 lg:top-20 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-warm-200 z-40">
        <div className="container-custom">
          <div className="flex justify-center space-x-8 py-3">
            <button
              onClick={() => scrollToSection("breakfast")}
              className="text-sm font-medium text-foreground/80 hover:text-red-600 transition-colors"
            >
              Breakfast
            </button>
            <button
              onClick={() => scrollToSection("lunch-dinner")}
              className="text-sm font-medium text-foreground/80 hover:text-red-600 transition-colors"
            >
              Lunch & Dinner
            </button>
            <button
              onClick={() => scrollToSection("drinks")}
              className="text-sm font-medium text-foreground/80 hover:text-red-600 transition-colors"
            >
              Drinks
            </button>
          </div>
        </div>
      </div>

      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/6419720/pexels-photo-6419720.jpeg"
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

              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-3xl text-balance">
                Explore the rich flavors of the Mediterranean — from traditional
                breakfast to sizzling grills and refreshing drinks.
              </p>

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
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Breakfast Menu Section */}
        <section id="breakfast" className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                    <Coffee className="w-4 h-4 mr-2" />
                    Breakfast Menu
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-balance">
                    Start Your Day
                    <span className="block text-red-700">
                      Mediterranean Style
                    </span>
                  </h2>
                  <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                    Start your day with authentic Mediterranean breakfast dishes
                    featuring fresh ingredients and traditional recipes.
                  </p>
                </div>

                <div className="space-y-6">
                  {breakfastItems.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-warm-200 pb-4 last:border-b-0"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-foreground text-lg">
                          {item.name}
                        </h3>
                        <span className="text-red-600 font-bold text-lg">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-foreground/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  size="lg"
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

              {/* Right Column - Image Carousel */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
                  <img
                    src={breakfastImages[currentImageIndex].src}
                    alt={breakfastImages[currentImageIndex].alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Carousel Controls */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft hover:bg-white transition-all"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft hover:bg-white transition-all"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>

                {/* Image Title */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm text-white p-3 rounded-lg">
                  <h4 className="font-medium">
                    {breakfastImages[currentImageIndex].title}
                  </h4>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-4 space-x-2">
                  {breakfastImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        currentImageIndex === index
                          ? "bg-red-600"
                          : "bg-foreground/30",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lunch & Dinner Menu Section */}
        <section
          id="lunch-dinner"
          className="relative py-20 bg-gradient-to-r from-red-50 to-warm-50"
        >
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.pexels.com/photos/11286814/pexels-photo-11286814.jpeg"
              alt="Grilled Meats Background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 container-custom">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
                <Utensils className="w-4 h-4 mr-2" />
                Lunch & Dinner Menu
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 text-balance">
                Mediterranean
                <span className="block text-red-700">Specialties</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto text-balance">
                From fresh salads to grilled perfection, explore our complete
                selection of lunch and dinner offerings.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {lunchDinnerCategories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="bg-white rounded-2xl shadow-soft overflow-hidden border border-warm-200"
                >
                  <button
                    onClick={() => toggleSection(`category-${categoryIndex}`)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-red-50 transition-colors"
                  >
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {category.name}
                    </h3>
                    {expandedSection === `category-${categoryIndex}` ? (
                      <ChevronUp className="w-5 h-5 text-foreground/40" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-foreground/40" />
                    )}
                  </button>

                  {expandedSection === `category-${categoryIndex}` && (
                    <div className="px-6 pb-6 border-t border-warm-200 animate-slide-up">
                      <div className="grid md:grid-cols-2 gap-6 pt-6">
                        {category.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="border-b border-warm-200 pb-4 last:border-b-0"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-foreground">
                                {item.name}
                              </h4>
                              <span className="text-red-600 font-bold">
                                {item.price}
                              </span>
                            </div>
                            <p className="text-sm text-foreground/70 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
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
        </section>

        {/* Drinks Menu Section */}
        <section
          id="drinks"
          className="relative py-20 bg-gradient-to-r from-blue-50 to-green-50"
        >
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.pexels.com/photos/17612824/pexels-photo-17612824.jpeg"
              alt="Refreshing Drinks Background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    <Wine className="w-4 h-4 mr-2" />
                    Drinks Menu
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-balance">
                    Refreshing
                    <span className="block text-blue-700">Beverages</span>
                  </h2>
                  <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                    Refresh yourself with our selection of traditional and
                    modern beverages, from Turkish coffee to fresh juices.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl">
                    <h4 className="font-semibold text-foreground mb-2">
                      Turkish Coffee
                    </h4>
                    <p className="text-xs text-foreground/70">
                      Traditional & Strong
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl">
                    <h4 className="font-semibold text-foreground mb-2">
                      Fresh Juices
                    </h4>
                    <p className="text-xs text-foreground/70">Daily Squeezed</p>
                  </div>
                  <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl">
                    <h4 className="font-semibold text-foreground mb-2">
                      Soft Drinks
                    </h4>
                    <p className="text-xs text-foreground/70">International</p>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
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

              {/* Right Column - Scrollable Gallery */}
              <div className="space-y-6">
                <div className="max-h-96 overflow-y-auto space-y-4 bg-white/50 backdrop-blur-sm rounded-2xl p-6">
                  {drinkItems.map((drink, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={drink.image}
                          alt={drink.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold text-foreground">
                            {drink.name}
                          </h4>
                          <span className="text-blue-600 font-bold">
                            {drink.price}
                          </span>
                        </div>
                        <p className="text-sm text-foreground/70">
                          {drink.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default Menu;
