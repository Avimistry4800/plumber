import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Droplets } from "lucide-react";

const PHONE = "(714) 555-0198";
const PHONE_HREF = "tel:+17145550198";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About Us", path: "/about" },
  { label: "Service Areas", path: "/service-areas" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-blue-700 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="hidden sm:block">🌟 Trusted Plumbers in Stanton, CA — Licensed & Insured</span>
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 font-bold text-yellow-300 hover:text-yellow-100 transition-colors ml-auto"
          >
            <Phone size={16} className="animate-pulse" />
            {PHONE}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-blue-700 text-white p-2 rounded-lg group-hover:bg-blue-800 transition">
            <Droplets size={24} />
          </div>
          <div>
            <div className="font-black text-blue-900 text-lg leading-tight">Best Stanton</div>
            <div className="font-semibold text-blue-600 text-sm leading-tight">Plumber CA</div>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <li key={l.path}>
              <Link
                to={l.path}
                className={`font-semibold text-sm transition-colors hover:text-blue-700 ${
                  pathname === l.path ? "text-blue-700 border-b-2 border-blue-700 pb-0.5" : "text-gray-700"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={PHONE_HREF}
          className="hidden md:flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-5 py-2.5 rounded-full shadow-lg transition-all hover:shadow-blue-300 hover:scale-105"
        >
          <Phone size={16} />
          Call Now
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-3">
            {navLinks.map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  onClick={() => setOpen(false)}
                  className={`block py-2.5 px-3 rounded-lg font-semibold transition-colors ${
                    pathname === l.path
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={PHONE_HREF}
            className="mt-4 flex items-center justify-center gap-2 bg-blue-700 text-white font-bold py-3 rounded-xl w-full text-lg"
          >
            <Phone size={20} />
            {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}
