import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16 lg:pt-20">
        {/* Header with Hero Image */}
        <section className="relative min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://i.ibb.co/chkxB0LF/image.png"
              alt="Contact Hummus Bar & Grill"
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
                Get in
                <span className="block text-red-400">Touch</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                We'd love to hear from you! Whether you have questions about our
                menu, want to make a reservation, or are interested in catering,
                we're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-spacing">
          <div className="container-custom section-padding">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input placeholder="What is this regarding?" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                    />
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700 group"
                  >
                    Send Message
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start p-6 bg-red-50 rounded-2xl border border-red-200">
                    <Phone className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Phone
                      </h3>
                      <a
                        href="tel:8183446606"
                        className="text-red-600 hover:text-red-700 font-medium text-lg"
                      >
                        (818) 344-6606
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-red-50 rounded-2xl border border-red-200">
                    <Mail className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:manager@hummusbargrill.com"
                        className="text-red-600 hover:text-red-700 font-medium"
                      >
                        manager@hummusbargrill.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-red-50 rounded-2xl border border-red-200">
                    <MapPin className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Location
                      </h3>
                      <p className="text-foreground/80">18743 Ventura Blvd</p>
                      <p className="text-foreground/80">Tarzana, CA 91356</p>
                      <p className="text-sm text-foreground/60 mt-1">
                        Tarzana Village Shopping Center
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-red-50 rounded-2xl border border-red-200">
                    <Clock className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Hours
                      </h3>
                      <p className="text-foreground/80">
                        Daily: 11:00 AM - 12:00 AM
                      </p>
                      <p className="text-sm text-foreground/60">
                        Delivery: 11:00 AM - 11:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">
                    Quick Actions
                  </h3>

                  <div className="grid gap-3">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start border-red-300 text-red-700 hover:bg-red-50"
                    >
                      <a
                        href="https://www.google.com/maps/dir//18743+Ventura+Blvd,+Tarzana,+CA+91356"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        Get Directions
                      </a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start border-red-300 text-red-700 hover:bg-red-50"
                    >
                      <a href="tel:8183446606">
                        <Phone className="w-4 h-4 mr-2" />
                        Call for Reservations
                      </a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start border-red-300 text-red-700 hover:bg-red-50"
                    >
                      <a
                        href="https://www.toasttab.com/local/order/hummusbargrill/r-7fc07f7e-2b14-4999-8bd9-8c05a07d8e59"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Order Online
                      </a>
                    </Button>
                  </div>
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

export default Contact;
