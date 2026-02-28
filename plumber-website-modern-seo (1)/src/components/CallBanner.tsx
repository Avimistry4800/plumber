import { Phone } from "lucide-react";

const PHONE = "(714) 555-0198";
const PHONE_HREF = "tel:+17145550198";

export default function CallBanner() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-10">
      <div className="max-w-5xl mx-auto px-4 text-center text-white">
        <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">⚡ Available 24/7 — No Extra Charge on Weekends</p>
        <h2 className="text-3xl md:text-4xl font-black mb-3">Plumbing Emergency? We're Here.</h2>
        <p className="text-blue-100 mb-6 text-lg">Call Stanton's most trusted plumber right now. Fast response, fair pricing, guaranteed satisfaction.</p>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black text-xl px-10 py-4 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95"
        >
          <Phone size={24} className="animate-bounce" />
          {PHONE}
        </a>
      </div>
    </section>
  );
}
