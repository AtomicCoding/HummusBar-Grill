import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20 lg:pt-24">
        <div className="container-custom section-padding py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              Terms of Service
            </h1>

            <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
              <p className="text-lg">
                <strong>Effective Date:</strong> January 1, 2025
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Acceptance of Terms
              </h2>
              <p>
                By accessing and using the services of Hummus Bar & Grill, you
                accept and agree to be bound by the terms and provision of this
                agreement.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Restaurant Services
              </h2>
              <p>
                Hummus Bar & Grill provides Mediterranean cuisine, dine-in,
                takeout, and delivery services. Our hours of operation are:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Restaurant Hours: Monday-Saturday 9:00 AM - 11:00 PM, Sunday
                  9:00 AM - 10:00 PM
                </li>
                <li>
                  Delivery Hours: Monday-Saturday 10:30 AM - 9:30 PM, Sunday
                  10:30 AM - 8:30 PM
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Online Ordering
              </h2>
              <p>When placing orders through our online platform:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All orders are subject to availability</li>
                <li>Prices are subject to change without notice</li>
                <li>We reserve the right to refuse or cancel orders</li>
                <li>Payment is required at the time of ordering</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Delivery Policy
              </h2>
              <p>For delivery orders:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Delivery is available within our designated service area
                </li>
                <li>
                  Delivery times are estimates and may vary based on demand and
                  weather
                </li>
                <li>Minimum order requirements may apply</li>
                <li>Delivery fees are additional to food costs</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Allergies and Dietary Restrictions
              </h2>
              <p>
                Please inform our staff of any allergies or dietary restrictions
                when ordering. While we take precautions, we cannot guarantee
                that our food is free from allergens due to shared cooking and
                preparation areas.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Limitation of Liability
              </h2>
              <p>
                Hummus Bar & Grill shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages arising
                from your use of our services.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Contact Information
              </h2>
              <div className="bg-warm-50 p-4 rounded-lg mt-4">
                <p>
                  <strong>Hummus Bar & Grill</strong>
                </p>
                <p>18743 Ventura Blvd</p>
                <p>Tarzana, CA 91356</p>
                <p>Phone: (818) 344-6606</p>
                <p>Email: manager@hummusbargrill.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
