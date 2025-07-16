import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Phone,
  ShoppingBag,
  ChevronDown,
  MapPin,
  Coffee,
  Utensils,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Order", href: "/order" },
    { name: "Catering", href: "/catering" },
    { name: "Contact", href: "/locations" },
    { name: "About", href: "/about" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-warm-200"
          : "bg-gray-900/30 backdrop-blur-sm",
      )}
    >
      <nav className="container-custom section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fef5c5c4add29486f8f779aaf4b6e1457?format=webp&width=800"
              alt="Hummus Bar & Grill Logo"
              className="w-12 h-12 rounded-xl shadow-soft group-hover:shadow-md transition-shadow object-cover"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-display font-semibold text-foreground">
                <span
                  className={cn(isScrolled ? "text-gray-900" : "text-white")}
                >
                  Hummus Bar & Grill
                </span>
              </h1>
              <p
                className={cn(
                  "text-xs -mt-0.5",
                  isScrolled ? "text-gray-600" : "text-gray-300",
                )}
              >
                Authentic Mediterranean
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => window.scrollTo(0, 0)}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-red-600 relative py-2",
                  isActive(item.href) ? "text-red-700" : "text-foreground/80",
                )}
              >
                <span
                  className={cn(isScrolled ? "text-gray-900" : "text-white")}
                >
                  {item.name}
                </span>
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className={cn(
                isScrolled
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-white/80 hover:text-white",
              )}
            >
              <a href="tel:8183446606">
                <Phone className="w-4 h-4 mr-2" />
                <span
                  className={cn(isScrolled ? "text-gray-900" : "text-white")}
                >
                  (818) 344-6606
                </span>
              </a>
            </Button>
            <Button
              asChild
              className="bg-red-600 hover:bg-red-700 text-white shadow-soft hover:shadow-md transition-all"
            >
              <a
                href="https://www.toasttab.com/local/order/hummusbargrill/r-7fc07f7e-2b14-4999-8bd9-8c05a07d8e59"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Order Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                isScrolled
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-white/80 hover:text-white",
              )}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-warm-200 mt-4 pt-4 pb-6 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-soft-lg mx-4">
            <div className="space-y-4 px-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => {
                    setIsOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className={cn(
                    "block px-4 py-2 text-base font-medium rounded-lg transition-colors",
                    isActive(item.href)
                      ? "text-red-700 bg-red-50"
                      : "text-foreground/80 hover:text-red-600 hover:bg-red-50",
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-warm-200 space-y-3">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                >
                  <a href="tel:8183446606">
                    <Phone className="w-4 h-4 mr-2" />
                    (818) 344-6606
                  </a>
                </Button>
                <Button
                  asChild
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  <a
                    href="https://www.toasttab.com/local/order/hummusbargrill/r-7fc07f7e-2b14-4999-8bd9-8c05a07d8e59"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Order Online
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
