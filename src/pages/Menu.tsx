import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";

const Menu = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16 lg:pt-20">
        {/* Header */}
        <section className="section-spacing bg-gradient-warm">
          <div className="container-custom section-padding">
            <div className="max-w-3xl mx-auto text-center">
              <Link
                to="/"
                className="inline-flex items-center text-sage-600 hover:text-sage-700 font-medium mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 text-balance">
                Our Complete
                <span className="block text-sage-700">Menu</span>
              </h1>

              <p className="text-lg text-foreground/80 leading-relaxed mb-8 text-balance">
                Explore our full collection of authentic Mediterranean dishes,
                crafted with traditional recipes and the finest ingredients.
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon Content */}
        <section className="section-spacing">
          <div className="container-custom section-padding">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-24 h-24 bg-sage-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Star className="w-12 h-12 text-sage-600" />
              </div>

              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Full Menu Coming Soon
              </h2>

              <p className="text-foreground/70 leading-relaxed mb-8">
                We're currently preparing our comprehensive digital menu with
                detailed descriptions, nutritional information, and beautiful
                photography of each dish. In the meantime, you can preview our
                signature dishes on our homepage.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-sage-600 hover:bg-sage-700"
                >
                  <Link to="/#menu">View Preview Menu</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Request Physical Menu</Link>
                </Button>
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
