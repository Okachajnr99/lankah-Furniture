import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">LANKAH HOME FURNITURE</h3>
            <p className="text-sm opacity-90">
              Crafting quality furniture for your home since 2010. We bring elegance and comfort to every space.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:opacity-80 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:opacity-80 transition-opacity">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:opacity-80 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:opacity-80 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>Living Room</li>
              <li>Bedroom</li>
              <li>Dining Room</li>
              <li>Office</li>
              <li>Storage</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@lankah.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1" />
                <span>123 Furniture Street, Design City, DC 12345</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-sm text-center opacity-80">
          <p>&copy; {new Date().getFullYear()} LANKAH HOME FURNITURE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
