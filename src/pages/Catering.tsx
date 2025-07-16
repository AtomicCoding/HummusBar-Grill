import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Users, Star } from "lucide-react";

const Catering = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        {/* Header with Hero Image */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F0a0eda9784cc438c818cf02b2c391418?format=webp&width=800"
              alt="Mediterranean Catering Menu"
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
                <span className="block text-red-400">Catering Menu</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                Hosting an event? We offer generous trays of your favorite
                Mediterranean dishes—perfect for parties, holidays, and large
                gatherings. Need staff too? Give us a call to discuss
                availability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white shadow-xl catering-hero-button"
                >
                  <a href="tel:8183446606">
                    <Phone className="w-4 h-4 mr-2" />
                    Call to Order
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-black bg-white/90 hover:bg-white hover:text-black catering-hero-button"
                >
                  <Link to="/menu">View Regular Menu</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mediterranean Salads */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container-custom section-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                🥗 <span className="text-yellow-400">Mediterranean Salads</span>
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">Hummus (VG)</span>
                    <span className="text-yellow-400 font-bold">$75</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">Tahini (VG)</span>
                    <span className="text-yellow-400 font-bold">$75</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">
                      Egg Salad (V)
                    </span>
                    <span className="text-yellow-400 font-bold">$75</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">
                      Chopped Liver
                    </span>
                    <span className="text-yellow-400 font-bold">$75</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">
                      Spicy Eggplant (VG)
                    </span>
                    <span className="text-yellow-400 font-bold">$75</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">
                      Babaganush (V)
                    </span>
                    <span className="text-yellow-400 font-bold">$75</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">Tabuli (VG)</span>
                    <span className="text-yellow-400 font-bold">$75</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">
                      Carrot Salad (VG)
                    </span>
                    <span className="text-yellow-400 font-bold">$75</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">
                      Turkish Salad (VG)
                    </span>
                    <span className="text-yellow-400 font-bold">$75</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">
                      Corn Salad (V)
                    </span>
                    <span className="text-yellow-400 font-bold">$75</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">
                      Moroccan Beet (VG)
                    </span>
                    <span className="text-yellow-400 font-bold">$75</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">
                      Avram Pickles (VG)
                    </span>
                    <span className="text-yellow-400 font-bold">$65</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">Pickles (VG)</span>
                    <span className="text-yellow-400 font-bold">$65</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* First Bites */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container-custom section-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                🍢 <span className="text-red-400">First Bites</span>
              </h2>
              <div className="w-24 h-1 bg-red-400 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">Falafel (VG)</span>
                <span className="text-red-400 font-bold">$1 each</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">French Fries (V)</span>
                <span className="text-red-400 font-bold">
                  Small $50 / Large $65
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">
                  Fried Cauliflower (V)
                </span>
                <span className="text-red-400 font-bold">$60</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">
                  Unique Moroccan Cigar
                </span>
                <span className="text-red-400 font-bold">$2.50 each</span>
              </div>
            </div>
          </div>
        </section>

        {/* Salads */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container-custom section-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                🥒 <span className="text-green-400">Salads</span>
              </h2>
              <div className="w-24 h-1 bg-green-400 mx-auto rounded-full"></div>
              <p className="text-gray-300 mt-4">Small Tray / Large Tray</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">
                  Chopped Israeli Salad (VG)
                </span>
                <span className="text-green-400 font-bold">$60 / $80</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">Kale Salad (VG)</span>
                <span className="text-green-400 font-bold">$60 / $80</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">
                  Root Vegetable Salad (VG)
                </span>
                <span className="text-green-400 font-bold">$75 / $95</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">
                  "Just Beet It" Salad (VG)
                </span>
                <span className="text-green-400 font-bold">$60 / $80</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">Greek Salad (VG)</span>
                <span className="text-green-400 font-bold">$60 / $80</span>
              </div>
            </div>
          </div>
        </section>

        {/* Specialty Plates */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container-custom section-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                🍽️ <span className="text-orange-400">Specialty Plates</span>
              </h2>
              <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
              <p className="text-gray-300 mt-4">A La Carte Tray</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">Jerusalem Mix</span>
                <span className="text-orange-400 font-bold">$95</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">Liver & Onions</span>
                <span className="text-orange-400 font-bold">$95</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">Shawarma</span>
                <span className="text-orange-400 font-bold">$95</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">
                  Vegetable Siniya (VG)
                </span>
                <span className="text-orange-400 font-bold">$65</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">
                  Barbarian Mushroom Dish (VG)
                </span>
                <span className="text-orange-400 font-bold">$80</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">
                  Chef's Shakshuka (V)
                </span>
                <span className="text-orange-400 font-bold">$80</span>
              </div>
            </div>
          </div>
        </section>

        {/* Butcher Shop */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container-custom section-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                🥩 <span className="text-red-500">Butcher Shop</span>
              </h2>
              <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
              <p className="text-gray-300 mt-4">
                Per Skewer – 10 Skewers Minimum
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">
                      Chicken Thigh Skewer
                    </span>
                    <span className="text-red-500 font-bold">$18</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">
                      Marinated Chicken Breast Skewer
                    </span>
                    <span className="text-red-500 font-bold">$18</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">
                      Middle Eastern Kabab
                    </span>
                    <span className="text-red-500 font-bold">$18</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">
                      Lamb Fillet Skewer
                    </span>
                    <span className="text-red-500 font-bold">$23</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">
                      Rib Eye Skewer
                    </span>
                    <span className="text-red-500 font-bold">$23</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">
                      Beef Fillet Skewer
                    </span>
                    <span className="text-red-500 font-bold">$23</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">
                      Chicken Heart Skewer
                    </span>
                    <span className="text-red-500 font-bold">$20</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">
                      Chicken Liver Skewer
                    </span>
                    <span className="text-red-500 font-bold">$20</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">Lamb Chops</span>
                    <span className="text-red-500 font-bold">$12</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium">
                      Romanian Kabab
                    </span>
                    <span className="text-red-500 font-bold">$11</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kosher Dishes */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container-custom section-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                ✡️ <span className="text-blue-400">Kosher Dishes</span>
              </h2>
              <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
              <p className="text-gray-300 mt-4">
                Per Skewer or Piece – 10 Minimum
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">
                  Chicken Thigh Steak (K)
                </span>
                <span className="text-blue-400 font-bold">$12</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">Kalabonim (K)</span>
                <span className="text-blue-400 font-bold">$22</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">
                  Chicken Tenders Skewer (K)
                </span>
                <span className="text-blue-400 font-bold">$22</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">
                  Beef Angus Slider (K)
                </span>
                <span className="text-blue-400 font-bold">$8</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">
                  Schnitzelonim (K)
                </span>
                <span className="text-blue-400 font-bold">$22</span>
              </div>
            </div>
          </div>
        </section>

        {/* On the Side */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container-custom section-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                🍚 <span className="text-purple-400">On the Side</span>
              </h2>
              <div className="w-24 h-1 bg-purple-400 mx-auto rounded-full"></div>
              <p className="text-gray-300 mt-4">
                Small Tray – $45 / Large Tray – $60
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">French Fries</span>
                <span className="text-purple-400 font-bold">$45 / $60</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">
                  White Basmati Rice
                </span>
                <span className="text-purple-400 font-bold">$45 / $60</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">Mashed Potatoes</span>
                <span className="text-purple-400 font-bold">$45 / $60</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">
                  White or Red Cabbage
                </span>
                <span className="text-purple-400 font-bold">$45 / $60</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">
                  Grilled Vegetables
                </span>
                <span className="text-purple-400 font-bold">$45 / $60</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">Vegetables Rice</span>
                <span className="text-purple-400 font-bold">$45 / $60</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">Israeli Salad</span>
                <span className="text-purple-400 font-bold">$45 / $60</span>
              </div>
            </div>
          </div>
        </section>

        {/* Happy Endings */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container-custom section-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                🍰 <span className="text-pink-400">Happy Endings</span>
              </h2>
              <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">
                  Bavarian Cream (D)
                </span>
                <span className="text-pink-400 font-bold">$80</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">Knafe Malabi (D)</span>
                <span className="text-pink-400 font-bold">$90</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <span className="text-white font-medium">
                  Inside Out Baklava (P)
                </span>
                <span className="text-pink-400 font-bold">$80</span>
              </div>
            </div>
          </div>
        </section>

        {/* Legend */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="container-custom section-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                📘 <span className="text-gray-400">Legend</span>
              </h2>
              <div className="w-16 h-1 bg-gray-400 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                  <div className="text-green-400 font-bold text-lg">V</div>
                  <div className="text-gray-300 text-sm">Vegetarian</div>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                  <div className="text-green-500 font-bold text-lg">VG</div>
                  <div className="text-gray-300 text-sm">Vegan</div>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                  <div className="text-blue-400 font-bold text-lg">K</div>
                  <div className="text-gray-300 text-sm">Kosher</div>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                  <div className="text-orange-400 font-bold text-lg">P</div>
                  <div className="text-gray-300 text-sm">Parve</div>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                  <div className="text-yellow-400 font-bold text-lg">D</div>
                  <div className="text-gray-300 text-sm">Dairy</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container-custom section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-red-600/30">
                <div className="flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-red-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">
                    Need Help with Staffing or Custom Orders?
                  </h3>
                </div>
                <p className="text-gray-300 text-lg mb-8">
                  Call us to discuss options for your event. Our team is ready
                  to help make your gathering unforgettable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white shadow-xl"
                  >
                    <a href="tel:8183446606">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (818) 344-6606
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-red-400 text-red-400 hover:bg-red-600/10"
                  >
                    <Link to="/locations">Visit Our Location</Link>
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

export default Catering;
