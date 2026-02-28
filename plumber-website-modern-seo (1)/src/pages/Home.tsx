import { Link } from "react-router-dom";
import {
  Phone, Star, Shield, Clock, CheckCircle, Wrench, Droplets,
  ThumbsUp, Award, Flame, AlertTriangle, ChevronRight
} from "lucide-react";
import CallBanner from "../components/CallBanner";

const PHONE = "(714) 555-0198";
const PHONE_HREF = "tel:+17145550198";

const services = [
  { icon: <AlertTriangle size={28} />, title: "Emergency Plumbing", desc: "24/7 rapid response for burst pipes, major leaks, and all plumbing emergencies." },
  { icon: <Droplets size={28} />, title: "Drain Cleaning", desc: "Clogged drains cleared fast using professional hydro-jetting and snaking equipment." },
  { icon: <Flame size={28} />, title: "Water Heater Services", desc: "Repair, replace, or install tankless and traditional water heaters of all brands." },
  { icon: <Wrench size={28} />, title: "Leak Detection & Repair", desc: "Advanced leak detection to protect your home from hidden water damage." },
  { icon: <Shield size={28} />, title: "Pipe Repair & Repiping", desc: "Full pipe repair, replacement, and whole-home repiping solutions." },
  { icon: <CheckCircle size={28} />, title: "Sewer Line Services", desc: "Sewer inspection, cleaning, repair, and replacement for residential & commercial." },
];

const reviews = [
  { name: "Maria G.", rating: 5, text: "Called at midnight with a burst pipe and they were here in 30 minutes. Absolute lifesavers! Professional, clean, and fair price." },
  { name: "James T.", rating: 5, text: "Best plumber in Stanton, hands down. Fixed our water heater same day. I'll never call anyone else." },
  { name: "Linda K.", rating: 5, text: "Our drain was completely blocked. They came the same morning and fixed it quickly. Very knowledgeable and polite." },
  { name: "David R.", rating: 5, text: "Excellent service from start to finish. No hidden fees, no nonsense. Highly recommend to everyone in the area!" },
];

const whyUs = [
  { icon: <Clock size={22} />, title: "24/7 Availability", desc: "Emergencies don't keep business hours. Neither do we." },
  { icon: <Shield size={22} />, title: "Licensed & Insured", desc: "Fully licensed California plumbers you can trust." },
  { icon: <ThumbsUp size={22} />, title: "Upfront Pricing", desc: "No surprise bills. We quote before we start." },
  { icon: <Award size={22} />, title: "5-Star Rated", desc: "Consistently rated the best plumber in Stanton on Google." },
  { icon: <CheckCircle size={22} />, title: "Satisfaction Guarantee", desc: "We're not done until you're 100% satisfied." },
  { icon: <Wrench size={22} />, title: "All Plumbing Services", desc: "From leaky faucets to full repipes — we do it all." },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}} />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-600 bg-opacity-60 border border-blue-400 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <Star size={14} className="text-yellow-400 fill-yellow-400" /> #1 Rated Plumber in Stanton, CA
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">
              Stanton's Most <span className="text-yellow-400">Trusted</span> Plumbing Experts
            </h1>
            <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-xl">
              Fast, reliable, and affordable plumbing services in Stanton, CA. Available 24/7 for emergencies. Licensed, insured, and Google-verified.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black text-xl px-8 py-4 rounded-full shadow-2xl transition-all hover:scale-105"
              >
                <Phone size={22} className="animate-pulse" />
                {PHONE}
              </a>
              <Link
                to="/services"
                className="flex items-center justify-center gap-2 bg-white bg-opacity-10 hover:bg-opacity-20 border border-white border-opacity-30 text-white font-bold text-lg px-7 py-4 rounded-full transition-all"
              >
                Our Services <ChevronRight size={18} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start text-sm">
              {["✅ Licensed & Insured", "✅ Free Estimates", "✅ Same-Day Service", "✅ No Hidden Fees"].map(b => (
                <span key={b} className="text-blue-100">{b}</span>
              ))}
            </div>
          </div>

          {/* Trust box */}
          <div className="flex-shrink-0 bg-white text-gray-800 rounded-2xl shadow-2xl p-7 w-full max-w-sm">
            <h2 className="text-xl font-black text-blue-900 mb-4 text-center">Get a Free Estimate</h2>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
              <input className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Phone Number" type="tel" />
              <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500">
                <option>Select Service</option>
                <option>Emergency Plumbing</option>
                <option>Drain Cleaning</option>
                <option>Water Heater</option>
                <option>Leak Detection</option>
                <option>Pipe Repair</option>
                <option>Sewer Services</option>
                <option>Other</option>
              </select>
              <textarea className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" rows={3} placeholder="Describe your issue..." />
              <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-xl transition-colors shadow-lg">
                Request Free Estimate
              </button>
            </form>
            <p className="text-xs text-gray-500 text-center mt-3">Or call us directly: <a href={PHONE_HREF} className="text-blue-700 font-bold">{PHONE}</a></p>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-center">
          {[
            { num: "10+", label: "Years Experience" },
            { num: "5,000+", label: "Happy Customers" },
            { num: "24/7", label: "Emergency Service" },
            { num: "100%", label: "Satisfaction Rate" },
            { num: "5★", label: "Google Rating" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-blue-700">{s.num}</div>
              <div className="text-gray-500 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-2">What We Do</p>
            <h2 className="text-4xl font-black text-gray-900 mb-3">Complete Plumbing Solutions</h2>
            <p className="text-gray-500 max-w-xl mx-auto">From minor repairs to major installations, we handle every plumbing challenge in Stanton and the surrounding areas.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all group">
                <div className="text-blue-700 bg-blue-50 p-3 rounded-xl w-fit mb-4 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg">
              View All Services <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-2">Why Choose Us</p>
            <h2 className="text-4xl font-black text-gray-900 mb-3">The Best Stanton Plumber Difference</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We're not just plumbers — we're your neighbors. Here's why thousands of Stanton residents trust us.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="flex gap-4 p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors">
                <div className="text-blue-700 bg-white p-2.5 rounded-xl h-fit shadow-sm">
                  {w.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{w.title}</h3>
                  <p className="text-gray-600 text-sm">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-2">Reviews</p>
            <h2 className="text-4xl font-black text-gray-900 mb-3">What Our Customers Say</h2>
            <div className="flex justify-center items-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={22} className="text-yellow-400 fill-yellow-400" />)}
              <span className="text-gray-700 font-bold ml-1">5.0 / 5 on Google</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-gray-600 text-sm mb-4 italic">"{r.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {r.name[0]}
                  </div>
                  <span className="font-semibold text-gray-800 text-sm">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action banner */}
      <CallBanner />

      {/* Service Areas Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-2">Where We Serve</p>
          <h2 className="text-3xl font-black text-gray-900 mb-4">Serving Stanton & Surrounding Communities</h2>
          <p className="text-gray-500 mb-8">We proudly serve Orange County and beyond, including:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Stanton", "Anaheim", "Garden Grove", "Westminster", "Buena Park", "Cypress", "La Palma", "Fullerton", "Orange", "Santa Ana"].map(c => (
              <span key={c} className="bg-blue-50 text-blue-700 font-semibold px-4 py-2 rounded-full text-sm border border-blue-100 hover:bg-blue-700 hover:text-white transition-colors cursor-default">
                {c}, CA
              </span>
            ))}
          </div>
          <Link to="/service-areas" className="inline-flex items-center gap-2 mt-8 text-blue-700 font-bold hover:underline">
            View All Service Areas <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
