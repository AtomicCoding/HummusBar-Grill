import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Apple,
  Smartphone,
  ArrowRight,
  Truck,
  Music,
} from "lucide-react";

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

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
    { day: "Monday - Saturday", hours: "9:00 AM - 11:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 10:00 PM" },
  ];

  const deliveryHours = [
    { day: "Monday - Saturday", hours: "10:30 AM - 9:30 PM" },
    { day: "Sunday", hours: "10:30 AM - 8:30 PM" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Catering", href: "/catering" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/hummusbarandgrill/?hl=en",
    },
    {
      name: "TikTok",
      icon: TikTokIcon,
      href: "https://www.tiktok.com/@hummusbargrill",
    },
  ];

  return (
    <footer className="bg-warm-900 text-warm-100">
      {/* Main Footer */}
      <div className="container-custom section-padding py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fef5c5c4add29486f8f779aaf4b6e1457?format=webp&width=800"
                alt="Hummus Bar & Grill Logo"
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div>
                <h3 className="text-xl font-display font-semibold text-white">
                  Hummus Bar & Grill
                </h3>
                <p className="text-warm-400 text-sm">Authentic Mediterranean</p>
              </div>
            </Link>

            <p className="text-warm-300 leading-relaxed mb-6">
              Bringing you the finest Mediterranean cuisine with traditional
              recipes and fresh ingredients since 2008. Located in Tarzana
              Village Shopping Center.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
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

          {/* Location */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Our Location
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
                <span className="font-medium">Restaurant Hours</span>
              </div>
              <div className="space-y-1 mb-4">
                {hours.map((schedule) => (
                  <div key={schedule.day} className="text-sm">
                    <span className="text-warm-300">{schedule.day}:</span>
                    <span className="text-white ml-2">{schedule.hours}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center text-white mb-3">
                <Truck className="w-4 h-4 mr-2" />
                <span className="font-medium">Delivery Hours</span>
              </div>
              <div className="space-y-1">
                {deliveryHours.map((schedule) => (
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
                <span>(818) 344-6606</span>
              </div>
              <div className="flex items-center text-warm-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>manager@hummusbargrill.com</span>
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <h5 className="font-medium text-white mb-3">Restaurant Info</h5>
              <div className="space-y-2 text-sm text-warm-300">
                <p>Located in Tarzana Village Shopping Center</p>
                <p>Plentiful parking available</p>
                <p>Children's menu available</p>
                <p>Delivery service provided daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-warm-800">
        <div className="container-custom section-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-warm-400">
            <div className="flex flex-col items-center md:items-start">
              <p>© 2025 Hummus Bar & Grill. Serving Tarzana since 2008.</p>
              <p className="text-xs mt-1">Built by MJ Website Design</p>
            </div>
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
