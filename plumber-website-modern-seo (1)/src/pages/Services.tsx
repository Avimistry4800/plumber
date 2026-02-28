import { Phone, AlertTriangle, Droplets, Flame, Wrench, Shield, CheckCircle, Home, Building2, ChevronRight } from "lucide-react";
import CallBanner from "../components/CallBanner";

const PHONE = "(714) 555-0198";
const PHONE_HREF = "tel:+17145550198";

const services = [
  {
    icon: <AlertTriangle size={36} />,
    title: "Emergency Plumbing",
    desc: "A plumbing emergency can strike at any time. Our team is on call 24 hours a day, 7 days a week, 365 days a year. Whether it's a burst pipe, severe flooding, or a gas leak, we respond within minutes. Don't let a plumbing disaster destroy your home — call us now.",
    features: ["Burst pipe repair", "Emergency leak stop", "Flooding response", "Gas line emergencies", "Sewage backups"],
  },
  {
    icon: <Droplets size={36} />,
    title: "Drain Cleaning & Unclogging",
    desc: "Slow or clogged drains are more than a nuisance — they can lead to serious pipe damage and health hazards. We use professional hydro-jetting, motorized snaking, and camera inspection to clear even the toughest blockages and restore full flow.",
    features: ["Kitchen drain cleaning", "Bathroom drain clearing", "Hydro-jetting", "Video pipe inspection", "Recurring clog prevention"],
  },
  {
    icon: <Flame size={36} />,
    title: "Water Heater Services",
    desc: "No hot water is never acceptable. We repair and replace all brands of water heaters — traditional tank and modern tankless units. Same-day service available. Our technicians are trained on all major brands and can help you choose the most energy-efficient solution.",
    features: ["Water heater repair", "Water heater replacement", "Tankless installation", "Anode rod replacement", "Thermostat repair"],
  },
  {
    icon: <Wrench size={36} />,
    title: "Leak Detection & Repair",
    desc: "Hidden leaks can silently cause thousands of dollars in damage to your walls, floors, and foundation. Using state-of-the-art acoustic and thermal detection technology, we find leaks behind walls and under slabs without unnecessary destruction.",
    features: ["Slab leak detection", "Hidden pipe leak repair", "Fixture leak repair", "Water meter testing", "Thermal imaging"],
  },
  {
    icon: <Shield size={36} />,
    title: "Pipe Repair & Repiping",
    desc: "Corroded, cracked, or aging pipes put your entire plumbing system at risk. We offer targeted pipe repairs as well as full whole-home repiping using modern copper or PEX piping. We minimize disruption and complete jobs efficiently.",
    features: ["Copper repiping", "PEX pipe installation", "Pipe relining", "Corroded pipe replacement", "Pressure testing"],
  },
  {
    icon: <CheckCircle size={36} />,
    title: "Sewer Line Services",
    desc: "Sewer problems are serious business. We offer comprehensive sewer line inspection, cleaning, repair, and replacement using trenchless technology where possible to minimize landscaping damage. Don't let sewer issues become a health hazard.",
    features: ["Sewer camera inspection", "Hydro-jetting sewer lines", "Trenchless sewer repair", "Sewer line replacement", "Root intrusion removal"],
  },
  {
    icon: <Home size={36} />,
    title: "Bathroom Plumbing",
    desc: "From leaky faucets and running toilets to full bathroom remodels, we handle all bathroom plumbing needs with precision and care. We work with all fixture brands and can help you select upgrades that improve both function and style.",
    features: ["Toilet repair & replacement", "Faucet installation", "Shower & tub plumbing", "Bathroom remodeling", "Valve replacement"],
  },
  {
    icon: <Building2 size={36} />,
    title: "Kitchen Plumbing",
    desc: "Your kitchen plumbing sees heavy daily use. We fix everything from garbage disposal issues and dishwasher connections to full kitchen sink installations and under-sink pipe repairs.",
    features: ["Garbage disposal repair", "Dishwasher installation", "Kitchen sink installation", "Faucet upgrades", "Under-sink plumbing"],
  },
];

export default function Services() {
  return (
    <main>
      {/* Page hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-blue-300 font-semibold uppercase tracking-widest text-sm mb-3">Stanton, CA Plumbing Services</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Complete Plumbing Services</h1>
          <p className="text-blue-100 text-lg mb-7">From routine maintenance to emergency repairs, Best Stanton Plumber CA handles it all. Licensed, insured, and available 24/7.</p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black text-xl px-9 py-4 rounded-full shadow-2xl transition-all hover:scale-105"
          >
            <Phone size={22} />
            Call {PHONE}
          </a>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-6 flex items-center gap-4">
                  <div className="text-white opacity-90">{s.icon}</div>
                  <h2 className="text-white font-black text-2xl">{s.title}</h2>
                </div>
                <div className="p-7">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={15} className="text-blue-600 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-sm"
                  >
                    <Phone size={15} /> Call for This Service
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallBanner />

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-2">FAQ</p>
            <h2 className="text-3xl font-black text-gray-900">Common Plumbing Questions</h2>
          </div>
          <div className="space-y-5">
            {[
              { q: "Do you offer same-day service?", a: "Yes! We offer same-day service for most plumbing issues. For emergencies, we guarantee a rapid response, often within 30–60 minutes." },
              { q: "Are you licensed and insured?", a: "Absolutely. Best Stanton Plumber CA is fully licensed by the state of California and carries comprehensive liability insurance for your peace of mind." },
              { q: "Do you offer free estimates?", a: "Yes, we provide free, no-obligation estimates for all non-emergency services. Call us or fill out our contact form." },
              { q: "What areas do you serve?", a: "We serve Stanton and all surrounding Orange County communities including Anaheim, Garden Grove, Westminster, Buena Park, Cypress, and more." },
              { q: "What payment methods do you accept?", a: "We accept cash, all major credit cards, and offer flexible financing options for larger projects." },
            ].map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <ChevronRight size={18} className="text-blue-600" /> {faq.q}
                </h3>
                <p className="text-gray-600 text-sm pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
