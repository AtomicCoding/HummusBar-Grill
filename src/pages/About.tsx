import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Users, Award, Clock } from "lucide-react";

const About = () => {
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
                Our
                <span className="block text-sage-700">Story</span>
              </h1>

              <p className="text-lg text-foreground/80 leading-relaxed mb-8 text-balance">
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
              {/* Intro */}
              <div className="text-center mb-16">
                <div className="w-24 h-24 bg-sage-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Heart className="w-12 h-12 text-sage-600" />
                </div>

                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  A Family Legacy of Mediterranean Excellence
                </h2>

                <p className="text-lg text-foreground/70 leading-relaxed text-balance">
                  Founded in 1998 by the Khalil family, Hummus Bar & Grill began
                  as a small neighborhood restaurant with a simple mission: to
                  share the authentic flavors of the Mediterranean with our
                  community. Today, we continue this tradition across multiple
                  locations, always staying true to our roots.
                </p>
              </div>

              {/* Timeline */}
              <div className="space-y-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="aspect-[4/3] bg-sage-200 rounded-2xl flex items-center justify-center">
                      <div className="text-center text-sage-700">
                        <Clock className="w-16 h-16 mx-auto mb-2" />
                        <p className="text-sm font-medium">
                          1998 - The Beginning
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      The Beginning (1998)
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Ahmad and Fatima Khalil opened the first Hummus Bar &
                      Grill in a small storefront in downtown Manhattan. With
                      family recipes passed down through generations and a
                      commitment to fresh, quality ingredients, they quickly
                      gained a loyal following.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Growth & Recognition (2005-2010)
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Word spread about our authentic Mediterranean cuisine, and
                      we expanded to our second location in Midtown. Food
                      critics and customers alike praised our commitment to
                      traditional cooking methods and the warm, family-friendly
                      atmosphere.
                    </p>
                  </div>
                  <div>
                    <div className="aspect-[4/3] bg-warm-200 rounded-2xl flex items-center justify-center">
                      <div className="text-center text-warm-700">
                        <Award className="w-16 h-16 mx-auto mb-2" />
                        <p className="text-sm font-medium">
                          2005-2010 - Growth
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="aspect-[4/3] bg-sage-200 rounded-2xl flex items-center justify-center">
                      <div className="text-center text-sage-700">
                        <Users className="w-16 h-16 mx-auto mb-2" />
                        <p className="text-sm font-medium">
                          2011-Present - Community
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Community & Innovation (2011-Present)
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Today, our family business has grown to include multiple
                      locations, catering services, and even our own line of
                      specialty products. We've embraced modern technology while
                      never losing sight of our core values: quality,
                      authenticity, and family.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-16 text-center p-8 bg-gradient-warm rounded-2xl">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Become Part of Our Story
                </h3>
                <p className="text-foreground/80 mb-6 text-balance">
                  We invite you to experience the warmth of Mediterranean
                  hospitality and taste the dishes that have brought families
                  together for over 25 years.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-sage-600 hover:bg-sage-700"
                  >
                    <Link to="/locations">Visit Us Today</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/menu">Explore Our Menu</Link>
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
