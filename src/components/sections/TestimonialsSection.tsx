import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Kim A.",
      role: "Regular Customer",
      content:
        "There is a large Israeli population in Tarzana and Hummus Bar & Grill could be the reason. Delicious food and kind people make HB&G a comfort and a joy. The chicken kabobs were fall-off-the-bone juicy and the seasoning perfection. The salads are delicious, authentic and satisfying. I can't wait to try the lamb and the filet. There is no doubt that it will all be scrumptious. The outdoor seating is in a parking lot but the sounds of Spanish, Hebrew and Arabic will make you feel as if you are on vacation in a cosmopolitan town. The servers treat customers like family. Dogs are welcome and a big appetite is encouraged.",
      rating: 5,
      avatar: "KA",
      location: "San Diego, CA",
    },
    {
      name: "Elena L.",
      role: "Food Enthusiast",
      content:
        "We had a fantastic experience at this place! The service was excellent, and everything was fresh and hot. The hummus was delicious, and you could tell it was made with quality ingredients. The place is very popular—we barely managed to get a spot at the bar. Highly recommend it for anyone looking for great food and a lively atmosphere! Food: 5/5 | Service: 5/5 | Atmosphere: 5/5 Recommended dishes: Pickles, Shawarma Plate Recommendation for vegetarians: Highly recommend Vegetarian offerings: Large vegetarian selection.",
      rating: 5,
      avatar: "EL",
      location: "Portland, OR",
    },
    {
      name: "Karin Z.",
      role: "Local Resident",
      content:
        "Hummus Bar never disappoints! The food is always fresh and delicious—I'm especially obsessed with their chicken thighs, flavorful appetizers, and the wide selection of tasty sides. Whether it's a casual dinner or a big group outing, they always manage to accommodate us with ease. Great vibes, easy service, and amazing food every time! Food: 5/5 | Service: 5/5 | Atmosphere: 5/5 Noise level: Moderate noise Wait time: No wait Recommendation for vegetarians: Highly recommend Vegetarian offerings: Vegetarian menu or section",
      rating: 5,
      avatar: "KZ",
      location: "Denver, CO",
    },
    {
      name: "Cameron Z.",
      role: "Business Professional",
      content:
        "Unlike most Middle Eastern places everything is way above average at this place. Fresh hot bread, freshly made humus, tasty marinated, lots of salads and it is even open on Saturdays. Food: 5/5 | Service: 5/5 | Atmosphere: 5/5 Recommendation for vegetarians: Highly recommend Vegetarian offerings: Large vegetarian selection Parking space: Plenty of parking Parking options: Free parking lot Kid-friendliness: Family friendly",
      rating: 5,
      avatar: "CZ",
      location: "Seattle, WA",
    },
    {
      name: "Jas D.",
      role: "Health Conscious Diner",
      content:
        "Humus Bar is a fantastic place to hang out with your loved ones for a vegetarian meal or loaded with meat dishes! The food is nothing short of spectacular���perfectly seasoned hummus served with fluffy, fresh-baked pita, and dishes like falafel and grilled meats bursting with authentic Middle Eastern flavors. Every bite felt homemade and full of love. The staff is attentive, friendly, and genuinely passionate about ensuring you enjoy your meal. Whether you're a hummus aficionado or just craving a wholesome, flavorful meal that includes lamb and chicken skewers—Humus Bar delivers it all. I'll definitely be back! Food: 5/5 | Service: 5/5 | Atmosphere: 5/5 Recommended dishes: Pickles, Lamb and Chicken Skewers, Babaganush, Fresh Pita, Hummus Plate, Shawarma Plate, Cucumber Salad Recommendation for vegetarians: Highly recommend Vegetarian offerings: Vegetarian menu or section",
      rating: 5,
      avatar: "JD",
      location: "Phoenix, AZ",
    },
    {
      name: "Esmeralda A.",
      role: "Family Customer",
      content:
        "The food and service here were absolutely incredible. My friends and I showed up during rush hour without a reservation, but the staff went above and beyond to accommodate us as quickly as possible. The host and waitstaff were extremely friendly and attentive, making sure we had everything we needed throughout the meal.",
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
