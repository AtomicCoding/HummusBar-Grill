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
        {/* Header with Hero Image */}
        <section className="relative min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://i.ibb.co/PvszB3f7/image.png"
              alt="Order from Hummus Bar & Grill"
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
                Order
                <span className="block text-red-400">Online</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
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
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Call to Order
                </h3>
                <p className="text-foreground/70 mb-6">
                  Speak directly with our team to place your order and get
                  personalized recommendations.
                </p>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                  <a href="tel:8183446606">(818) 344-6606</a>
                </Button>
              </div>

              {/* Online Ordering */}
              <div className="text-center p-8 bg-white rounded-2xl shadow-soft border border-warm-200">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Order Online Now
                </h3>
                <p className="text-foreground/70 mb-6">
                  Place your order online through our Toast ordering system for
                  pickup or delivery.
                </p>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                  <a
                    href="https://www.toasttab.com/local/order/hummusbargrill/r-7fc07f7e-2b14-4999-8bd9-8c05a07d8e59"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order Now
                  </a>
                </Button>
              </div>

              {/* Visit Us */}
              <div className="text-center p-8 bg-white rounded-2xl shadow-soft border border-warm-200">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Visit Our Restaurant
                </h3>
                <p className="text-foreground/70 mb-6">
                  Dine in for the full Mediterranean experience with our warm
                  hospitality in Tarzana.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-red-300 text-red-700 hover:bg-red-50"
                >
                  <Link to="/contact">Get Directions</Link>
                </Button>
              </div>
            </div>

            {/* Order Info */}
            <div className="max-w-2xl mx-auto mt-12 p-8 bg-red-50 rounded-2xl border border-red-200">
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                How to Order
              </h3>
              <div className="space-y-4 text-foreground/80">
                <p>
                  <strong>Online Ordering:</strong> Use our Toast ordering
                  system above for the fastest and most convenient way to place
                  your order.
                </p>
                <p>
                  <strong>Phone Orders:</strong> Call us at (818) 344-6606 for
                  orders, questions, or special requests.
                </p>
                <p>
                  <strong>Walk-ins:</strong> Always welcome! Located in Tarzana
                  Village Shopping Center with plentiful parking.
                </p>
              </div>

              <div className="mt-6 text-center">
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <Link to="/contact">Visit Our Restaurant</Link>
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
