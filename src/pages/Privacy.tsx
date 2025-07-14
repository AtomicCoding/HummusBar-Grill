import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20 lg:pt-24">
        <div className="container-custom section-padding py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
              <p className="text-lg">
                <strong>Effective Date:</strong> January 1, 2025
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Information We Collect
              </h2>
              <p>
                At Hummus Bar & Grill, we collect information you provide
                directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Make a reservation or place an order</li>
                <li>Sign up for our newsletter</li>
                <li>Contact us with questions or feedback</li>
                <li>Participate in promotions or surveys</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and our services</li>
                <li>Send you promotional materials (with your consent)</li>
                <li>Improve our services and customer experience</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Information Sharing
              </h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described in this policy or as required by law.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Data Security
              </h2>
              <p>
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and update your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>
                  Request deletion of your data (subject to legal requirements)
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
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

export default Privacy;
