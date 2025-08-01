import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  Car,
  Utensils,
  Truck,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { PAGE_KEYWORDS } from "@/lib/seo-data";

const Locations = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Hummus Bar & Grill Location - Tarzana Village Shopping Center | Mediterranean Restaurant LA"
        description="Visit Hummus Bar & Grill at 18743 Ventura Blvd, Tarzana CA. Mediterranean restaurant with ample parking, dine-in, takeout, and delivery. Open daily serving authentic Middle Eastern cuisine."
        keywords={PAGE_KEYWORDS.contact}
        canonicalUrl="https://hummusbarandgrill.com/contact"
      />
      <Navigation />
      <main>
        {/* Header with Hero Image */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F01e7cbdb34d547768781c49c8e86b408?format=webp&width=800"
              alt="Hummus Bar & Grill location Tarzana Village Shopping Center - Mediterranean restaurant Los Angeles"
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
                Contact
                <span className="block text-red-400">Us</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                Visit us at our Tarzana location in the heart of Tarzana Village
                Shopping Center. Enjoy authentic Mediterranean cuisine with
                plentiful parking and easy access.
              </p>
            </div>
          </div>
        </section>

        {/* Location Details */}
        <section className="section-spacing">
          <div className="container-custom section-padding">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Location Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                    Tarzana Location
                  </h2>

                  {/* Address */}
                  <div className="flex items-start mb-6 p-6 bg-white rounded-2xl shadow-soft border border-red-200">
                    <MapPin className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Address
                      </h3>
                      <p className="text-foreground/80 text-lg">
                        18743 Ventura Blvd
                      </p>
                      <p className="text-foreground/80 text-lg">
                        Tarzana, CA 91356
                      </p>
                      <p className="text-sm text-foreground/60 mt-2">
                        Tarzana Village Shopping Center
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center mb-6 p-6 bg-white rounded-2xl shadow-soft border border-red-200">
                    <Phone className="w-6 h-6 text-red-600 mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Phone
                      </h3>
                      <a
                        href="tel:8183446606"
                        className="text-red-600 hover:text-red-700 font-medium text-lg"
                      >
                        (818) 344-6606
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start mb-6 p-6 bg-white rounded-2xl shadow-soft border border-red-200">
                    <Clock className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Hours
                      </h3>
                      <div className="space-y-1">
                        <div className="text-foreground/80 space-y-1">
                          <p>Monday – Saturday: 9:00 AM – 11:00 PM</p>
                          <p>Sunday: 9:00 AM – 10:00 PM</p>
                        </div>
                        <div className="text-sm text-foreground/60 space-y-1">
                          <p>
                            <strong>Delivery Hours:</strong>
                          </p>
                          <p>Monday – Saturday: 10:30 AM – 9:30 PM</p>
                          <p>Sunday: 10:30 AM – 8:30 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-6 bg-red-50 rounded-2xl border border-red-200">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      What We Offer
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Utensils className="w-5 h-5 text-red-600 mr-3" />
                        <span className="text-foreground/80">Dine-in</span>
                      </div>
                      <div className="flex items-center">
                        <Truck className="w-5 h-5 text-red-600 mr-3" />
                        <span className="text-foreground/80">Takeout</span>
                      </div>
                      <div className="flex items-center">
                        <Truck className="w-5 h-5 text-red-600 mr-3" />
                        <span className="text-foreground/80">Delivery</span>
                      </div>
                      <div className="flex items-center">
                        <Car className="w-5 h-5 text-red-600 mr-3" />
                        <span className="text-foreground/80">
                          Plentiful Parking
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button
                      asChild
                      size="lg"
                      className="bg-red-600 hover:bg-red-700 flex-1"
                    >
                      <a
                        href="https://www.google.com/maps/dir//18743+Ventura+Blvd,+Tarzana,+CA+91356"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Directions
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="flex-1 border-red-300 text-red-700 hover:bg-red-50"
                    >
                      <a href="tel:8183446606">Call Now</a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">
                  Find Us
                </h3>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft border border-red-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.2158!2d-118.5449!3d34.1634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2964f2b1b6f5d%3A0x8a8e1b8b6b8b8b8b!2s18743%20Ventura%20Blvd%2C%20Tarzana%2C%20CA%2091356!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hummus Bar & Grill Location"
                  />
                </div>

                <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                  <h4 className="font-semibold text-foreground mb-2">
                    Easy to Find
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Located in the Tarzana Village Shopping Center on Ventura
                    Boulevard. Look for our sign and enjoy the convenience of
                    ample free parking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Locations;
