import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Droplets, Star } from "lucide-react";

const PHONE = "(714) 555-0198";
const PHONE_HREF = "tel:+17145550198";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <Droplets size={22} />
            </div>
            <div>
              <div className="font-black text-white text-lg leading-tight">Best Stanton</div>
              <div className="font-semibold text-blue-400 text-sm leading-tight">Plumber CA</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Your trusted local plumbing experts in Stanton, California. Licensed, insured, and available 24/7 for all your plumbing needs.
          </p>
          <div className="flex items-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-sm text-gray-400 ml-1">5.0 on Google</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", path: "/" },
              { label: "Our Services", path: "/services" },
              { label: "About Us", path: "/about" },
              { label: "Service Areas", path: "/service-areas" },
              { label: "Contact Us", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="hover:text-blue-400 transition-colors">
                  → {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Emergency Plumbing",
              "Drain Cleaning",
              "Water Heater Repair",
              "Leak Detection",
              "Pipe Repair & Replacement",
              "Sewer Line Services",
              "Bathroom Plumbing",
              "Kitchen Plumbing",
            ].map((s) => (
              <li key={s} className="flex items-center gap-1">
                <span className="text-blue-400">✓</span> {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone size={16} className="text-blue-400 mt-0.5 shrink-0" />
              <div>
                <div className="text-gray-400 text-xs">Call Us Anytime</div>
                <a href={PHONE_HREF} className="text-white font-bold hover:text-blue-400 transition-colors text-base">
                  {PHONE}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="text-blue-400 mt-0.5 shrink-0" />
              <div>
                <div className="text-gray-400 text-xs">Email Us</div>
                <a href="mailto:info@beststantonplumber.com" className="hover:text-blue-400 transition-colors">
                  info@beststantonplumber.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-blue-400 mt-0.5 shrink-0" />
              <div>
                <div className="text-gray-400 text-xs">Location</div>
                <span>Stanton, CA 90680</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={16} className="text-blue-400 mt-0.5 shrink-0" />
              <div>
                <div className="text-gray-400 text-xs">Hours</div>
                <span>24/7 Emergency Service</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Best Stanton Plumber CA. All Rights Reserved.</p>
          <p>Licensed & Insured | Serving Stanton, CA & Surrounding Areas</p>
        </div>
      </div>
    </footer>
  );
}
