import { Link } from "react-router-dom";
import { Phone, Star, Shield, Award, Users, Clock, CheckCircle } from "lucide-react";
import CallBanner from "../components/CallBanner";

const PHONE_HREF = "tel:+17145550198";

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-blue-300 font-semibold uppercase tracking-widest text-sm mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Stanton's Most Trusted Plumbers</h1>
          <p className="text-blue-100 text-lg">Family-owned, community-driven, and dedicated to exceptional plumbing service since day one.</p>
        </div>
      </section>

      {/* Our story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-3">Our Story</p>
            <h2 className="text-3xl font-black text-gray-900 mb-5">Born and Built in Stanton, CA</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Best Stanton Plumber CA was founded with one mission: to provide the Stanton community with honest, high-quality, and affordable plumbing services. As a family-owned business, we understand what it means to be a neighbor — and we treat every customer's home like our own.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Over the years, we've built a reputation as the most trusted plumbing company in Stanton and Orange County. Our team of licensed journeyman plumbers brings decades of combined experience to every job, whether it's a small faucet repair or a complete whole-home repipe.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe in transparent pricing, clean workmanship, and standing behind everything we do. That's why we back every job with our 100% satisfaction guarantee.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-full transition-colors"
              >
                <Phone size={18} /> Call Us Today
              </a>
              <Link to="/contact" className="flex items-center gap-2 border-2 border-blue-700 text-blue-700 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">
                Get Free Estimate
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Award size={28} />, num: "10+", label: "Years in Business" },
              { icon: <Users size={28} />, num: "5,000+", label: "Satisfied Customers" },
              { icon: <Star size={28} />, num: "5.0★", label: "Google Rating" },
              { icon: <Clock size={28} />, num: "24/7", label: "Always Available" },
            ].map((s) => (
              <div key={s.label} className="bg-blue-50 rounded-2xl p-6 text-center border border-blue-100">
                <div className="text-blue-700 flex justify-center mb-2">{s.icon}</div>
                <div className="text-3xl font-black text-blue-900">{s.num}</div>
                <div className="text-gray-600 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-2">Our Values</p>
            <h2 className="text-3xl font-black text-gray-900">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Shield size={26} />, title: "Honesty", desc: "We quote upfront and never add hidden fees. What we say is what you pay." },
              { icon: <CheckCircle size={26} />, title: "Quality Workmanship", desc: "Every repair and installation is done right the first time, using only premium materials." },
              { icon: <Clock size={26} />, title: "Reliability", desc: "We show up on time, every time. When we say we'll be there, we mean it." },
              { icon: <Users size={26} />, title: "Community Focus", desc: "We live and work in Stanton. Supporting our community isn't a slogan — it's our lifestyle." },
              { icon: <Award size={26} />, title: "Certified Excellence", desc: "Our plumbers are state-licensed, background-checked, and continuously trained on the latest techniques." },
              { icon: <Star size={26} />, title: "Satisfaction Guaranteed", desc: "We don't consider a job done until you're completely satisfied with the result." },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-blue-700 bg-blue-50 p-3 rounded-xl w-fit mb-4">{v.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-8">Licensed, Certified & Google Verified</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "California State Licensed Plumber",
              "Fully Insured & Bonded",
              "Google Verified Business",
              "BBB Accredited",
              "Background-Checked Technicians",
              "EPA Certified",
            ].map(c => (
              <div key={c} className="bg-blue-800 border border-blue-600 rounded-xl px-5 py-3 flex items-center gap-2 text-sm font-semibold">
                <CheckCircle size={16} className="text-green-400" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallBanner />
    </main>
  );
}
