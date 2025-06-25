import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const Locations = () => {
  const locations = [
    {
      name: "Downtown Manhattan",
      address: "123 Main Street",
      city: "New York, NY 10001",
      phone: "(555) 123-4567",
      hours: {
        weekdays: "11:00 AM - 10:00 PM",
        weekend: "10:00 AM - 11:00 PM",
      },
      features: ["Dine-in", "Takeout", "Delivery", "Catering"],
    },
    {
      name: "Midtown West",
      address: "456 Broadway",
      city: "New York, NY 10018",
      phone: "(555) 234-5678",
      hours: {
        weekdays: "11:00 AM - 10:00 PM",
        weekend: "10:00 AM - 11:00 PM",
      },
      features: ["Dine-in", "Takeout", "Delivery", "Private Events"],
    },
    {
      name: "Brooklyn Heights",
      address: "789 Atlantic Avenue",
      city: "Brooklyn, NY 11238",
      phone: "(555) 345-6789",
      hours: {
        weekdays: "11:00 AM - 9:00 PM",
        weekend: "10:00 AM - 10:00 PM",
      },
      features: ["Dine-in", "Takeout", "Delivery", "Outdoor Seating"],
    },
  ];

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
                Our
                <span className="block text-sage-700">Locations</span>
              </h1>

              <p className="text-lg text-foreground/80 leading-relaxed mb-8 text-balance">
                Find the Hummus Bar & Grill location nearest you. Each
                restaurant offers the same authentic Mediterranean experience
                with local touches.
              </p>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="section-spacing">
          <div className="container-custom section-padding">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <div
                  key={location.name}
                  className="bg-white rounded-2xl shadow-soft border border-warm-200 overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  {/* Map Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-sage-200 to-warm-200 flex items-center justify-center">
                    <div className="text-center text-sage-700">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm font-medium">Interactive Map</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {location.name}
                    </h3>

                    {/* Address */}
                    <div className="flex items-start mb-4">
                      <MapPin className="w-4 h-4 text-sage-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-foreground/80">{location.address}</p>
                        <p className="text-foreground/80">{location.city}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center mb-4">
                      <Phone className="w-4 h-4 text-sage-600 mr-3" />
                      <a
                        href={`tel:${location.phone}`}
                        className="text-sage-600 hover:text-sage-700 font-medium"
                      >
                        {location.phone}
                      </a>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start mb-6">
                      <Clock className="w-4 h-4 text-sage-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-foreground/80 text-sm">
                          Mon-Thu: {location.hours.weekdays}
                        </p>
                        <p className="text-foreground/80 text-sm">
                          Fri-Sun: {location.hours.weekend}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {location.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 bg-sage-100 text-sage-700 text-xs font-medium rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="flex-1 bg-sage-600 hover:bg-sage-700"
                      >
                        Get Directions
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Call Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coming Soon */}
            <div className="mt-12 text-center p-8 bg-sage-50 rounded-2xl border border-sage-200">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                More Locations Coming Soon
              </h3>
              <p className="text-foreground/70 mb-6">
                We're expanding to serve more communities with authentic
                Mediterranean cuisine. Stay tuned for new locations in your
                area!
              </p>
              <Button asChild variant="outline">
                <Link to="/contact">Request a Location</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Locations;
