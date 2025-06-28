import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChefHat, Heart, Leaf, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing bg-gradient-warm">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Minimal Content */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8"
              >
                <a
                  href="https://www.toasttab.com/local/order/hummusbargrill/r-7fc07f7e-2b14-4999-8bd9-8c05a07d8e59"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order Online
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 border-red-300 text-red-700 hover:bg-red-50"
              >
                <Link to="/contact">Visit Our Restaurant</Link>
              </Button>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="col-span-2 aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
                <img
                  src="https://i.ibb.co/TBXCtZ7x/image.png"
                  alt="Restaurant Interior"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Secondary Images */}
              <div className="aspect-square rounded-2xl overflow-hidden shadow-soft">
                <img
                  src="https://i.ibb.co/bRCM5VN2/image.png"
                  alt="Kitchen"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="aspect-square rounded-2xl overflow-hidden shadow-soft">
                <img
                  src="https://i.ibb.co/sp8K7sNF/image.png"
                  alt="Fresh Ingredients"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Award Badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-soft-lg border border-warm-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-yellow-600 text-xl">🏆</span>
                </div>
                <div className="text-sm font-semibold text-foreground">
                  Best of 2024
                </div>
                <div className="text-xs text-foreground/60">Mediterranean</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
