import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

const Menu = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Header with Hero Image */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://i.ibb.co/dw1wYyr7/image.png"
              alt="Hummus Bar & Grill Menu"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
          </div>

          <div className="relative z-10 container-custom section-padding">
            <div className="max-w-3xl">
              <Link
                to="/"
                className="inline-flex items-center text-white/80 hover:text-white font-medium mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Our Complete
                <span className="block text-red-400">Menu</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                Explore our full collection of authentic Mediterranean dishes,
                crafted with traditional recipes and the finest ingredients.
              </p>
            </div>
          </div>
        </section>

        {/* Menu Content */}
        <section className="section-spacing">
          <div className="container-custom section-padding">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                View Our Full Menu & Order Online
              </h2>

              <p className="text-foreground/70 leading-relaxed mb-8">
                Browse our complete menu with prices, descriptions, and photos
                on our online ordering platform. Place your order for pickup or
                delivery directly through our Toast ordering system.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-red-600 hover:bg-red-700"
                >
                  <a
                    href="https://www.toasttab.com/local/order/hummusbargrill/r-7fc07f7e-2b14-4999-8bd9-8c05a07d8e59"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Full Menu & Order
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-red-300 text-red-700 hover:bg-red-50"
                >
                  <Link to="/#menu">Preview Menu</Link>
                </Button>
              </div>

              {/* Menu Highlights */}
              <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Menu Highlights
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      Signature Dishes
                    </h4>
                    <ul className="text-foreground/70 text-sm space-y-1">
                      <li>• Classic Hummus Bowl</li>
                      <li>• Fresh Falafel</li>
                      <li>• Chef's Shakshuka</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      Main Courses
                    </h4>
                    <ul className="text-foreground/70 text-sm space-y-1">
                      <li>• Grilled Branzino</li>
                      <li>• Pita Arrayes</li>
                      <li>• Mediterranean Specialties</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      Fresh & Light
                    </h4>
                    <ul className="text-foreground/70 text-sm space-y-1">
                      <li>• Arugula Avocado Salad</li>
                      <li>• Kosher Moroccan Cigars</li>
                      <li>• Daily Fresh Salads</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      Kids Menu
                    </h4>
                    <ul className="text-foreground/70 text-sm space-y-1">
                      <li>• Mini-Schnitzel</li>
                      <li>• Mini-Hamburger</li>
                      <li>• Hot Dogs & Chips</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-2xl shadow-soft border border-red-200">
                <p className="text-foreground/70 text-sm">
                  <strong>Hours:</strong> Daily 11:00 AM - 12:00 AM |{" "}
                  <strong>Delivery:</strong> 11:00 AM - 11:00 PM |{" "}
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:8183446606"
                    className="text-red-600 hover:text-red-700"
                  >
                    (818) 344-6606
                  </a>
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
