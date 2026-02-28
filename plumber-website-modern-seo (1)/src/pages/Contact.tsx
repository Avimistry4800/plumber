import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle, Send } from "lucide-react";

const PHONE = "(714) 555-0198";
const PHONE_HREF = "tel:+17145550198";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-blue-300 font-semibold uppercase tracking-widest text-sm mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Contact Best Stanton Plumber CA</h1>
          <p className="text-blue-100 text-lg">We're ready to help with your plumbing needs. Call us anytime or fill out the form and we'll get back to you fast.</p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-6">Reach Us Directly</h2>
            <p className="text-gray-600 mb-8">The fastest way to get help is to call us. We answer every call personally — no bots, no wait music, no runaround.</p>

            <div className="space-y-6">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-5 bg-blue-700 text-white p-6 rounded-2xl hover:bg-blue-800 transition-colors shadow-lg group"
              >
                <div className="bg-white bg-opacity-20 p-3 rounded-xl group-hover:bg-opacity-30 transition-colors">
                  <Phone size={28} />
                </div>
                <div>
                  <div className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-1">24/7 Phone Line</div>
                  <div className="text-2xl font-black">{PHONE}</div>
                  <div className="text-blue-200 text-sm">Click to call now</div>
                </div>
              </a>

              <div className="flex items-center gap-5 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <Mail size={26} className="text-blue-700" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-1">Email</div>
                  <a href="mailto:info@beststantonplumber.com" className="text-lg font-bold text-gray-900 hover:text-blue-700 transition-colors">
                    info@beststantonplumber.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <MapPin size={26} className="text-blue-700" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-1">Location</div>
                  <div className="text-lg font-bold text-gray-900">Stanton, CA 90680</div>
                  <div className="text-gray-500 text-sm">Serving all of Orange County</div>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <Clock size={26} className="text-blue-700" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-1">Business Hours</div>
                  <div className="text-lg font-bold text-gray-900">24 Hours / 7 Days a Week</div>
                  <div className="text-gray-500 text-sm">No extra charge on weekends or holidays</div>
                </div>
              </div>
            </div>

            {/* Google Maps embed placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-64 bg-blue-50 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <MapPin size={40} className="mx-auto mb-2 text-blue-300" />
                <p className="font-semibold">Stanton, California</p>
                <p className="text-sm">Orange County, CA 90680</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-black text-gray-900 mb-2">Request a Free Estimate</h2>
              <p className="text-gray-500 text-sm mb-6">Fill out the form and we'll call you back within 30 minutes during business hours.</p>

              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Message Received!</h3>
                  <p className="text-gray-600 mb-5">Thank you! We'll be in touch shortly. For urgent issues, please call us directly.</p>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-7 py-3 rounded-full transition-colors"
                  >
                    <Phone size={18} /> Call {PHONE}
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name *</label>
                      <input required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name *</label>
                      <input required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                    <input required type="tel" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="(714) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                    <input type="email" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">City / ZIP Code *</label>
                    <input required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Stanton, CA 90680" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Needed *</label>
                    <select required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700">
                      <option value="">Select a service...</option>
                      <option>Emergency Plumbing</option>
                      <option>Drain Cleaning</option>
                      <option>Water Heater Repair/Replacement</option>
                      <option>Leak Detection & Repair</option>
                      <option>Pipe Repair & Repiping</option>
                      <option>Sewer Line Services</option>
                      <option>Bathroom Plumbing</option>
                      <option>Kitchen Plumbing</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Describe Your Issue *</label>
                    <textarea required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" rows={4} placeholder="Please describe the plumbing problem in as much detail as possible..." />
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500 bg-gray-50 rounded-xl p-3">
                    <CheckCircle size={16} className="text-green-500 shrink-0" />
                    <span>We typically respond within 30 minutes during business hours. For emergencies, please call us directly.</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-black py-4 rounded-xl text-lg transition-colors shadow-lg"
                  >
                    <Send size={20} /> Send My Request
                  </button>
                  <p className="text-center text-xs text-gray-400">Or call us right now: <a href={PHONE_HREF} className="text-blue-700 font-bold">{PHONE}</a></p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-red-600 py-10">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-black mb-2">🚨 Plumbing Emergency Right Now?</h2>
          <p className="text-red-100 mb-5">Don't wait — call immediately. We have technicians standing by 24/7.</p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 bg-white text-red-600 font-black text-2xl px-10 py-4 rounded-full shadow-xl hover:bg-red-50 transition-colors"
          >
            <Phone size={26} className="animate-pulse" />
            {PHONE}
          </a>
        </div>
      </section>
    </main>
  );
}
