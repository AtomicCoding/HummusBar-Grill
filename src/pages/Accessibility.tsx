import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20 lg:pt-24">
        <div className="container-custom section-padding py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              Accessibility Statement
            </h1>

            <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
              <p className="text-lg">
                <strong>Last Updated:</strong> January 1, 2025
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Our Commitment
              </h2>
              <p>
                Hummus Bar & Grill is committed to ensuring that our restaurant
                and website are accessible to all individuals, including those
                with disabilities. We strive to provide an inclusive experience
                for all our guests.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Physical Accessibility
              </h2>
              <p>Our restaurant features:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Wheelchair accessible entrance and seating areas</li>
                <li>Accessible restroom facilities</li>
                <li>Wide aisles for easy navigation</li>
                <li>Accessible parking spaces in our shopping center</li>
                <li>Seating options to accommodate various mobility needs</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Digital Accessibility
              </h2>
              <p>
                We are working to ensure our website meets accessibility
                standards:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Alternative text for images</li>
                <li>Keyboard navigation support</li>
                <li>Color contrast compliance</li>
                <li>Screen reader compatibility</li>
                <li>Clear and consistent navigation</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Menu Accessibility
              </h2>
              <p>To assist guests with dietary needs:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Large print menus available upon request</li>
                <li>Staff trained to describe menu items and ingredients</li>
                <li>Dietary restriction information provided</li>
                <li>Customizable options for various dietary needs</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Service Accommodations
              </h2>
              <p>Our staff is trained to provide:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Assistance with seating and navigation</li>
                <li>Patient and clear communication</li>
                <li>Flexible service options</li>
                <li>Support for service animals</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Ongoing Improvements
              </h2>
              <p>
                We are continuously working to improve accessibility and welcome
                feedback from our guests. If you encounter any barriers or have
                suggestions for improvement, please let us know.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Contact Us
              </h2>
              <p>
                For accessibility-related questions or requests, please contact
                us:
              </p>
              <div className="bg-warm-50 p-4 rounded-lg mt-4">
                <p>
                  <strong>Hummus Bar & Grill</strong>
                </p>
                <p>18743 Ventura Blvd</p>
                <p>Tarzana, CA 91356</p>
                <p>Phone: (818) 344-6606</p>
                <p>Email: manager@hummusbargrill.com</p>
                <p className="mt-2 text-sm">
                  <em>
                    We welcome calls in advance to discuss any specific
                    accommodations you may need.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Accessibility;
