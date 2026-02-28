import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import ServiceAreas from "./pages/ServiceAreas";
import Contact from "./pages/Contact";
import { Phone } from "lucide-react";

const PHONE_HREF = "tel:+17145550198";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />

      {/* Floating call button (mobile) */}
      <a
        href={PHONE_HREF}
        className="fixed bottom-6 right-6 z-50 md:hidden bg-blue-700 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 font-bold hover:bg-blue-800 active:scale-95 transition-all animate-bounce"
        aria-label="Call Now"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
