import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Apple,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const locations = [
    {
      name: "Tarzana Location",
      address: "18743 Ventura Blvd",
      city: "Tarzana, CA 91356",
      phone: "(818) 344-6606",
    },
  ];

  const hours = [
    { day: "Monday - Thursday", hours: "11:00 AM - 10:00 PM" },
    { day: "Friday - Saturday", hours: "11:00 AM - 11:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 9:00 PM" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Locations", href: "/locations" },
    { name: "Catering", href: "/catering" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
  ];

  return (
    <footer className="bg-warm-900 text-warm-100">
      {/* Newsletter Section */}
      <div className="border-b border-warm-800">
        <div className="container-custom section-padding py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Stay Connected with Us
            </h3>
            <p className="text-warm-300 mb-8 text-balance">
              Get the latest updates on new menu items, special offers, and
              events. Plus, receive a 10% discount on your next order when you
              sign up!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email address"
                className="bg-warm-800 border-warm-700 text-white placeholder:text-warm-400 flex-1"
              />
              <Button className="bg-sage-600 hover:bg-sage-700 text-white px-6 group">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom section-padding py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-sage-600 to-sage-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-white">
                  Hummus Bar & Grill
                </h3>
                <p className="text-warm-400 text-sm">Authentic Mediterranean</p>
              </div>
            </Link>

            <p className="text-warm-300 leading-relaxed mb-6">
              Bringing you the finest Mediterranean cuisine with traditional
              recipes and fresh ingredients since 1998.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-warm-800 rounded-lg flex items-center justify-center text-warm-300 hover:bg-sage-600 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-warm-300 hover:text-sage-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Our Locations
            </h4>
            <div className="space-y-4">
              {locations.map((location) => (
                <div key={location.name}>
                  <h5 className="font-medium text-white mb-1">
                    {location.name}
                  </h5>
                  <p className="text-warm-300 text-sm mb-1">
                    {location.address}
                  </p>
                  <p className="text-warm-300 text-sm mb-1">{location.city}</p>
                  <p className="text-sage-400 text-sm">{location.phone}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hours & Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Hours & Contact
            </h4>

            {/* Hours */}
            <div className="mb-6">
              <div className="flex items-center text-white mb-3">
                <Clock className="w-4 h-4 mr-2" />
                <span className="font-medium">Opening Hours</span>
              </div>
              <div className="space-y-1">
                {hours.map((schedule) => (
                  <div key={schedule.day} className="text-sm">
                    <span className="text-warm-300">{schedule.day}:</span>
                    <span className="text-white ml-2">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-warm-300">
                <Phone className="w-4 h-4 mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center text-warm-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@hummusbar.com</span>
              </div>
            </div>

            {/* App Download */}
            <div>
              <h5 className="font-medium text-white mb-3">Download Our App</h5>
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="justify-start bg-transparent border-warm-700 text-warm-300 hover:bg-warm-800 hover:text-white"
                >
                  <Apple className="w-4 h-4 mr-2" />
                  App Store
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="justify-start bg-transparent border-warm-700 text-warm-300 hover:bg-warm-800 hover:text-white"
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  Google Play
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-warm-800">
        <div className="container-custom section-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-warm-400">
            <p>© 2024 Hummus Bar & Grill. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="hover:text-sage-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-sage-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/accessibility"
                className="hover:text-sage-400 transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
