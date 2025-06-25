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
        {/* Header */}
        <section className="section-spacing bg-gradient-warm">
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
                Get in
                <span className="block text-sage-700">Touch</span>
              </h1>

              <p className="text-lg text-foreground/80 leading-relaxed mb-8 text-balance">
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
                    className="w-full bg-sage-600 hover:bg-sage-700 group"
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
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-sage-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Phone
                      </h3>
                      <p className="text-foreground/70">
                        General: (555) 123-4567
                      </p>
                      <p className="text-foreground/70">
                        Catering: (555) 123-4568
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-sage-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Email
                      </h3>
                      <p className="text-foreground/70">info@hummusbar.com</p>
                      <p className="text-foreground/70">
                        catering@hummusbar.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-sage-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Locations
                      </h3>
                      <p className="text-foreground/70">
                        Downtown: 123 Main Street, NY
                      </p>
                      <p className="text-foreground/70">
                        Midtown: 456 Broadway, NY
                      </p>
                      <p className="text-foreground/70">
                        Brooklyn: 789 Atlantic Ave, NY
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-sage-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Hours
                      </h3>
                      <p className="text-foreground/70">
                        Mon-Thu: 11:00 AM - 10:00 PM
                      </p>
                      <p className="text-foreground/70">
                        Fri-Sat: 11:00 AM - 11:00 PM
                      </p>
                      <p className="text-foreground/70">
                        Sunday: 10:00 AM - 9:00 PM
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
                      className="w-full justify-start"
                    >
                      <Link to="/locations">
                        <MapPin className="w-4 h-4 mr-2" />
                        Find a Location
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start"
                    >
                      <Link to="/menu">
                        <Phone className="w-4 h-4 mr-2" />
                        Make a Reservation
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start"
                    >
                      <Link to="/order">
                        <Mail className="w-4 h-4 mr-2" />
                        Catering Inquiry
                      </Link>
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
