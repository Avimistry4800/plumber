import { MapPin, Phone, CheckCircle } from "lucide-react";
import CallBanner from "../components/CallBanner";

const PHONE = "(714) 555-0198";
const PHONE_HREF = "tel:+17145550198";

const areas = [
  { city: "Stanton", zip: "90680", primary: true, desc: "Our home base. We provide the fastest response times and complete plumbing services throughout all of Stanton." },
  { city: "Anaheim", zip: "92801–92899", primary: false, desc: "Full plumbing services including emergency repairs, drain cleaning, and water heater services for Anaheim residents and businesses." },
  { city: "Garden Grove", zip: "92840–92845", primary: false, desc: "Reliable plumbing repair and installation services for all of Garden Grove, from residential homes to commercial properties." },
  { city: "Westminster", zip: "92683", primary: false, desc: "Emergency and scheduled plumbing service for Westminster homeowners and businesses." },
  { city: "Buena Park", zip: "90620–90624", primary: false, desc: "Serving Buena Park with fast drain cleaning, pipe repair, and 24/7 emergency plumbing." },
  { city: "Cypress", zip: "90630", primary: false, desc: "Trusted plumbing solutions for Cypress homes including leak detection, repiping, and water heater services." },
  { city: "La Palma", zip: "90623", primary: false, desc: "Quick, professional plumbing service for the La Palma community." },
  { city: "Fullerton", zip: "92831–92838", primary: false, desc: "Comprehensive plumbing services for Fullerton residents — from routine maintenance to emergency repairs." },
  { city: "Orange", zip: "92856–92869", primary: false, desc: "Licensed plumbers serving the City of Orange with same-day and emergency service options." },
  { city: "Santa Ana", zip: "92701–92707", primary: false, desc: "Professional plumbing services throughout Santa Ana, available 24 hours a day." },
  { city: "Huntington Beach", zip: "92646–92649", primary: false, desc: "Reliable plumbing repair and installation for Huntington Beach homes and businesses." },
  { city: "Fountain Valley", zip: "92708", primary: false, desc: "Expert plumbing services for Fountain Valley, including water heater repair and sewer services." },
];

export default function ServiceAreas() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-blue-300 font-semibold uppercase tracking-widest text-sm mb-3">Where We Work</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Service Areas</h1>
          <p className="text-blue-100 text-lg mb-7">
            Proudly serving Stanton and all surrounding Orange County communities. Not sure if we cover your area? Just call!
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black text-xl px-9 py-4 rounded-full shadow-2xl transition-all hover:scale-105"
          >
            <Phone size={22} />
            {PHONE}
          </a>
        </div>
      </section>

      {/* Areas grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Cities We Serve</h2>
            <p className="text-gray-500">We cover all of Orange County and keep expanding. Call to confirm your area.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((a) => (
              <div
                key={a.city}
                className={`rounded-2xl p-7 border transition-shadow hover:shadow-lg ${
                  a.primary
                    ? "bg-blue-700 text-white border-blue-600"
                    : "bg-white text-gray-800 border-gray-100"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={18} className={a.primary ? "text-yellow-300" : "text-blue-600"} />
                  <h3 className={`font-black text-xl ${a.primary ? "text-white" : "text-gray-900"}`}>
                    {a.city}, CA
                    {a.primary && <span className="ml-2 text-xs bg-yellow-400 text-gray-900 px-2 py-0.5 rounded-full font-semibold">PRIMARY</span>}
                  </h3>
                </div>
                <p className={`text-sm mb-3 ${a.primary ? "text-blue-100" : "text-gray-500"}`}>ZIP: {a.zip}</p>
                <p className={`text-sm leading-relaxed ${a.primary ? "text-blue-100" : "text-gray-600"}`}>{a.desc}</p>
                <a
                  href={PHONE_HREF}
                  className={`mt-4 inline-flex items-center gap-2 text-sm font-bold transition-colors ${
                    a.primary ? "text-yellow-300 hover:text-yellow-100" : "text-blue-700 hover:text-blue-900"
                  }`}
                >
                  <Phone size={14} /> Call for Service
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage note */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <CheckCircle size={36} className="text-blue-700 mx-auto mb-3" />
            <h2 className="text-2xl font-black text-gray-900 mb-3">Don't See Your City?</h2>
            <p className="text-gray-600 mb-5">
              We're constantly expanding our coverage area. Give us a call and we'll let you know if we can reach you — we often can!
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-7 py-3.5 rounded-full transition-colors"
            >
              <Phone size={18} /> Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      <CallBanner />
    </main>
  );
}
