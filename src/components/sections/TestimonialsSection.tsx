import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Kim A.",
      role: "Regular Customer",
      content:
        "Amazing Mediterranean food! The shakshuka is to die for and the staff is incredibly friendly. This place has become our go-to spot for family dinners.",
      rating: 5,
      avatar: "KA",
      location: "San Diego, CA",
    },
    {
      name: "Elena L.",
      role: "Food Enthusiast",
      content:
        "Authentic flavors that remind me of my travels through Greece and Turkey. The hummus is creamy perfection and the lamb is seasoned beautifully.",
      rating: 5,
      avatar: "EL",
      location: "Portland, OR",
    },
    {
      name: "Karin Z.",
      role: "Local Resident",
      content:
        "Fresh ingredients, generous portions, and reasonable prices. The kids menu is perfect for our little ones, and the delivery is always on time.",
      rating: 5,
      avatar: "KZ",
      location: "Denver, CO",
    },
    {
      name: "Cameron Z.",
      role: "Business Professional",
      content:
        "Great spot for lunch meetings. The atmosphere is professional yet relaxed, and the Mediterranean salads are fresh and satisfying every time.",
      rating: 5,
      avatar: "CZ",
      location: "Seattle, WA",
    },
    {
      name: "Jas D.",
      role: "Health Conscious Diner",
      content:
        "Love that they focus on heart-healthy Mediterranean cuisine. The ingredients are clearly fresh and the preparation methods are traditional and authentic.",
      rating: 5,
      avatar: "JD",
      location: "Phoenix, AZ",
    },
    {
      name: "Esmeralda A.",
      role: "Family Customer",
      content:
        "Wonderful family restaurant with something for everyone. The kids love their nuggets and sliders, while we adults enjoy the sophisticated Mediterranean dishes.",
      rating: 5,
      avatar: "EA",
      location: "Las Vegas, NV",
    },
  ];

  return (
    <section className="section-spacing bg-gradient-sage">
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-white/80 backdrop-blur-sm text-red-700 rounded-full text-sm font-medium mb-4">
            Health & Satisfaction
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 text-balance">
            Fresh Ingredients
            <span className="block text-red-700">Happy Customers</span>
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed text-balance">
            Our commitment to the freshest ingredients and heart-healthy
            Mediterranean cuisine creates satisfied customers who feel great
            about what they eat.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-700 mb-2">
              4.9
            </div>
            <div className="flex justify-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 text-yellow-500 fill-current"
                />
              ))}
            </div>
            <div className="text-sm text-foreground/70">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-700 mb-2">
              2.5K+
            </div>
            <div className="text-sm text-foreground/70">Happy Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-700 mb-2">
              98%
            </div>
            <div className="text-sm text-foreground/70">Recommend Us</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-700 mb-2">
              16
            </div>
            <div className="text-sm text-foreground/70">Years Serving</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-sage-600 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= testimonial.rating
                        ? "text-yellow-500 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-6 text-balance">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center text-sage-700 font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Platforms */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Find us on review platforms
            </h3>
            <p className="text-foreground/70">
              See what customers are saying across the web
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              {
                name: "Google",
                href: "https://www.google.com/search?sca_esv=b9187f4daeb51a28&sxsrf=AE3TifPaQiOpYopQ8wmvYGhaUvtYy7Qi1A:1752526521016&q=hummus+bar+and+grill+google&si=AMgyJEuzsz2NflaaWzrzdpjxXXRaJ2hfdMsbe_mSWso6src8s1efczvWarCM_dBuc_L1g8-v75SJS-_ufkB-CSZAoS6v2up8QPPbjsXgQqPiRpLJ23YttyB5oYUmKPr1ntjFsoKm6B3qgAK3Aoz79gRjMerWxIKyug%3D%3D&sa=X&ved=2ahUKEwjLpPqFnr2OAxWRI0QIHYkoHBkQrrQLegQIGhAA&cshid=1752526527524544&biw=1643&bih=825&dpr=1.1",
              },
              {
                name: "Yelp",
                href: "https://www.yelp.com/biz/hummus-bar-and-grill-tarzana-2",
              },
              {
                name: "TripAdvisor",
                href: "https://www.tripadvisor.com/Restaurant_Review-g32655-d1047440-Reviews-The_Hummus_Bar_Grill-Los_Angeles_California.html",
              },
              {
                name: "OpenTable",
                href: "https://www.opentable.com/r/hummus-bar-and-grill-tarzana",
              },
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 font-medium hover:text-red-600 transition-colors"
              >
                {platform.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
