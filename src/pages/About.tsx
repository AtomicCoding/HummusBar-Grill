import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Users,
  Award,
  Clock,
  ChefHat,
  Utensils,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Header with Hero Image */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F05b59a2fb315497ea9f169c1793026f1?format=webp&width=800"
              alt="About Hummus Bar & Grill"
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
                Our
                <span className="block text-red-400">Story</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                From humble beginnings to a beloved Mediterranean destination,
                discover the passion and tradition behind every dish we serve.
              </p>
            </div>
          </div>
        </section>

        {/* Story Content */}
        <section className="section-spacing">
          <div className="container-custom section-padding">
            <div className="max-w-4xl mx-auto">
              {/* Main Story */}
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center">
                  Authentic Mediterranean Experience Since 2008
                </h2>

                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Welcome to Hummus Bar & Grill — Tarzana's Favorite Taste of
                    the Mediterranean
                  </p>

                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Located in the heart of the Tarzana Village Shopping Center
                    on Ventura Boulevard, Hummus Bar & Grill offers a warm and
                    inviting experience inspired by the casual dining culture of
                    Tel Aviv. With plenty of convenient parking and a relaxed
                    atmosphere, we've created a space where great food and good
                    vibes come together.
                  </p>

                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Our menu is all about freshness and flavor. Each day, we
                    prepare a colorful variety of Mediterranean salads in-house
                    and serve them with hot, fluffy pita bread baked fresh to
                    order. From sizzling grilled meats to vibrant vegetarian
                    dishes, everything is made with high-quality ingredients and
                    simple, honest cooking. This allows us to keep the food
                    delicious while offering fair and accessible pricing.
                  </p>

                  <p className="text-lg text-foreground/80 leading-relaxed">
                    We've introduced something unique to Los Angeles: a place
                    where top-quality food meets authentic Mediterranean
                    hospitality and a welcoming, upbeat vibe. Whether you're
                    grabbing a quick lunch or enjoying a relaxed dinner with
                    family and friends, Hummus Bar is your go-to destination for
                    flavorful meals and friendly service.
                  </p>

                  <p className="text-lg text-foreground/80 leading-relaxed">
                    We're open Monday through Saturday from 9 AM to 11 PM and
                    Sunday from 9 AM to 10 PM. Delivery is available every day
                    starting at 10:30 AM and ending at 9:30 PM on weekdays and
                    8:30 PM on Sundays.
                  </p>

                  <p className="text-lg text-foreground/80 leading-relaxed">
                    The energy of the restaurant changes throughout the day.
                    During lunchtime, we welcome professionals looking for a
                    fast, satisfying meal, and in the evenings, we're a favorite
                    spot for families and groups to gather and enjoy great food
                    in a lively setting. We also make sure our younger guests
                    are taken care of with a kid-friendly menu featuring crispy
                    chicken nuggets, juicy beef sliders, and mini chicken
                    sliders — all simple favorites kids love.
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center p-6 bg-red-50 rounded-2xl border border-red-200">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <ChefHat className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Fresh Ingredients Daily
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    Fresh Mediterranean ingredients prepared daily with
                    traditional recipes and authentic cooking methods.
                  </p>
                </div>

                <div className="text-center p-6 bg-red-50 rounded-2xl border border-red-200">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Tel-Aviv Experience
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    Simple unpretentious environs create the authentic
                    experience of a Tel-Aviv outing right here in Tarzana.
                  </p>
                </div>

                <div className="text-center p-6 bg-red-50 rounded-2xl border border-red-200">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Family Atmosphere
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    Welcoming everyone from quick lunch diners to families and
                    young people enjoying our diverse menu.
                  </p>
                </div>
              </div>

              {/* Hours & Service */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="p-8 bg-white rounded-2xl shadow-soft border border-red-200">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-red-600 mr-3" />
                    <h3 className="text-xl font-semibold text-foreground">
                      Hours
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <div className="text-foreground/80 space-y-1">
                      <p>
                        <strong>Monday – Saturday:</strong> 9:00 AM – 11:00 PM
                      </p>
                      <p>
                        <strong>Sunday:</strong> 9:00 AM – 10:00 PM
                      </p>
                    </div>
                    <div className="text-foreground/80 space-y-1">
                      <p>
                        <strong>Delivery Hours:</strong>
                      </p>
                      <p>Monday – Saturday: 10:30 AM – 9:30 PM</p>
                      <p>Sunday: 10:30 AM – 8:30 PM</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-white rounded-2xl shadow-soft border border-red-200">
                  <div className="flex items-center mb-4">
                    <Utensils className="w-6 h-6 text-red-600 mr-3" />
                    <h3 className="text-xl font-semibold text-foreground">
                      Special Features
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-foreground/80">
                      • Children's menu available
                    </p>
                    <p className="text-foreground/80">• Plentiful parking</p>
                    <p className="text-foreground/80">• Tel-Aviv atmosphere</p>
                    <p className="text-foreground/80">• Affordable pricing</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl border border-red-200">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Experience Mediterranean Tradition
                </h3>
                <p className="text-foreground/80 mb-6 text-balance">
                  Visit us in Tarzana Village Shopping Center and taste the
                  authentic flavors that have made us a Los Angeles favorite
                  since 2008.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-red-600 hover:bg-red-700"
                  >
                    <Link to="/locations">Visit Us Today</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-red-300 text-red-700 hover:bg-red-50"
                  >
                    <a
                      href="https://www.toasttab.com/local/order/hummusbargrill/r-7fc07f7e-2b14-4999-8bd9-8c05a07d8e59"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Order Online
                    </a>
                  </Button>
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

export default About;
