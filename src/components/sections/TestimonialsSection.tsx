import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Food Blogger",
      content:
        "The most authentic Mediterranean experience I've had outside of Greece. Every bite transported me back to the coastal tavernas of Santorini.",
      rating: 5,
      avatar: "SM",
      location: "New York, NY",
    },
    {
      name: "David Chen",
      role: "Local Resident",
      content:
        "Their hummus is absolutely divine! The perfect blend of tahini, lemon, and garlic. I come here weekly just for their mezze platter.",
      rating: 5,
      avatar: "DC",
      location: "San Francisco, CA",
    },
    {
      name: "Maria Rodriguez",
      role: "Chef",
      content:
        "As a fellow chef, I appreciate the attention to detail and traditional techniques. The lamb is perfectly seasoned and the service is exceptional.",
      rating: 5,
      avatar: "MR",
      location: "Los Angeles, CA",
    },
    {
      name: "James Thompson",
      role: "Regular Customer",
      content:
        "Family-owned warmth with restaurant-quality food. The shakshuka is my weekend ritual, and the staff treats you like family.",
      rating: 5,
      avatar: "JT",
      location: "Austin, TX",
    },
    {
      name: "Lisa Park",
      role: "Food Critic",
      content:
        "A hidden gem that deserves recognition. The fresh ingredients, traditional recipes, and modern presentation create a perfect dining experience.",
      rating: 5,
      avatar: "LP",
      location: "Chicago, IL",
    },
    {
      name: "Michael Brown",
      role: "Business Owner",
      content:
        "Perfect for both business lunches and family dinners. The ambiance is elegant yet welcoming, and the food never disappoints.",
      rating: 5,
      avatar: "MB",
      location: "Miami, FL",
    },
  ];

  return (
    <section className="section-spacing bg-gradient-sage">
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-white/80 backdrop-blur-sm text-sage-700 rounded-full text-sm font-medium mb-4">
            Customer Reviews
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 text-balance">
            What Our Guests
            <span className="block text-sage-700">Are Saying</span>
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed text-balance">
            Don't just take our word for it. Here's what our valued customers
            have to say about their Mediterranean dining experience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-sage-700 mb-2">
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
            <div className="text-3xl md:text-4xl font-bold text-sage-700 mb-2">
              2.5K+
            </div>
            <div className="text-sm text-foreground/70">Happy Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-sage-700 mb-2">
              98%
            </div>
            <div className="text-sm text-foreground/70">Recommend Us</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-sage-700 mb-2">
              15
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
                  <div className="text-sm text-foreground/60">
                    {testimonial.role} • {testimonial.location}
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
            {["Google", "Yelp", "TripAdvisor", "OpenTable", "Zomato"].map(
              (platform) => (
                <div key={platform} className="text-foreground/80 font-medium">
                  {platform}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
