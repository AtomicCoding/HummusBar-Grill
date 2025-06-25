import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Phone, MapPin } from "lucide-react";

const Order = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16 lg:pt-20">
        {/* Header */}
        <section className="section-spacing bg-gradient-sage">
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
                Order
                <span className="block text-sage-700">Online</span>
              </h1>

              <p className="text-lg text-foreground/80 leading-relaxed mb-8 text-balance">
                Enjoy our delicious Mediterranean cuisine from the comfort of
                your home. Fast delivery and pickup options available.
              </p>
            </div>
          </div>
        </section>

        {/* Order Options */}
        <section className="section-spacing">
          <div className="container-custom section-padding">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Phone Order */}
              <div className="text-center p-8 bg-white rounded-2xl shadow-soft border border-warm-200">
                <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Call to Order
                </h3>
                <p className="text-foreground/70 mb-6">
                  Speak directly with our team to place your order and get
                  personalized recommendations.
                </p>
                <Button className="w-full bg-sage-600 hover:bg-sage-700">
                  (555) 123-4567
                </Button>
              </div>

              {/* Online Ordering */}
              <div className="text-center p-8 bg-white rounded-2xl shadow-soft border border-warm-200">
                <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="w-8 h-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Online Platform
                </h3>
                <p className="text-foreground/70 mb-6">
                  Our full online ordering system is coming soon with real-time
                  order tracking.
                </p>
                <Button variant="outline" className="w-full" disabled>
                  Coming Soon
                </Button>
              </div>

              {/* Visit Us */}
              <div className="text-center p-8 bg-white rounded-2xl shadow-soft border border-warm-200">
                <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Visit Our Restaurant
                </h3>
                <p className="text-foreground/70 mb-6">
                  Dine in for the full Mediterranean experience with our warm
                  hospitality.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/locations">Find Locations</Link>
                </Button>
              </div>
            </div>

            {/* Temporary Order Info */}
            <div className="max-w-2xl mx-auto mt-12 p-8 bg-warm-50 rounded-2xl border border-warm-200">
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                How to Order Right Now
              </h3>
              <div className="space-y-4 text-foreground/80">
                <p>
                  <strong>For Delivery:</strong> Call us at (555) 123-4567 and
                  we'll take your order over the phone. Delivery available
                  within a 5-mile radius.
                </p>
                <p>
                  <strong>For Pickup:</strong> Call ahead and your order will be
                  ready when you arrive. Average pickup time is 15-20 minutes.
                </p>
                <p>
                  <strong>Walk-ins:</strong> Always welcome! See our current
                  wait times and make reservations by calling any of our
                  locations.
                </p>
              </div>

              <div className="mt-6 text-center">
                <Button asChild className="bg-sage-600 hover:bg-sage-700">
                  <Link to="/locations">View All Locations & Hours</Link>
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

export default Order;
