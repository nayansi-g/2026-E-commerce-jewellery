"use client";

import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-50 via-orange-50 to-pink-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            We’d love to hear from you. Whether you have a question, need assistance, or want to visit us — we’re here for you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[{
            title: "Visit Our Store",
            desc: "123 Jewellery Street, City, India",
          }, {
            title: "Call Us",
            desc: "+91 98765 43210",
          }, {
            title: "Email",
            desc: "support@yourjewellery.com",
          }, {
            title: "Working Hours",
            desc: "Mon – Sat : 10 AM – 8 PM",
          }].map((item, index) => (
            <div key={index} className="border rounded-2xl p-8 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border px-4 py-3 rounded-lg focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border px-4 py-3 rounded-lg focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border px-4 py-3 rounded-lg focus:outline-none"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border px-4 py-3 rounded-lg focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Map Placeholder */}
          <div className="rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center text-gray-600">
            <span>Google Map Embed</span>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[{
              q: "Do you provide certified jewellery?",
              a: "Yes, all our jewellery is BIS hallmarked and quality certified.",
            }, {
              q: "Can I customize my jewellery?",
              a: "Absolutely! We offer customization for selected designs.",
            }, {
              q: "Do you ship all over India?",
              a: "Yes, we deliver securely across India.",
            }].map((faq, index) => (
              <div key={index} className="border rounded-xl p-6">
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="mt-2 text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Still Have Questions?</h2>
          <p className="mt-4 text-gray-300">
            Explore our collections or reach out to our support team anytime.
          </p>
          <Link
            href="/shop"
            className="inline-block mt-8 px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200"
          >
            Explore Jewellery
          </Link>
        </div>
      </section>
    </div>
  );
}
