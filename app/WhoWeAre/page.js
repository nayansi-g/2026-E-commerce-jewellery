"use client";

export default function WhoWeAre() {
  return (
    <div className="w-full bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-rose-50">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Who We Are
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We are a modern jewellery brand blending timeless craftsmanship with contemporary elegance — designed to celebrate your everyday and forever moments.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-2xl bg-black text-white hover:bg-gray-800 transition">
                Explore Collection
              </button>
              <button className="px-6 py-3 rounded-2xl border border-gray-300 hover:bg-gray-100 transition">
                Contact Us
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-tr from-amber-200 to-rose-200" />
          </div>
        </div>
      </section>

      {/* ABOUT BRAND */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Our Story</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Founded with a passion for purity and design, our jewellery is inspired by Indian heritage and modern lifestyles. Every piece tells a story of trust, precision, and beauty.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              From sourcing ethically certified metals to handcrafted detailing, we believe jewellery should feel as special as the person wearing it.
            </p>
          </div>
          <div className="aspect-video rounded-3xl bg-gray-100" />
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center">Our Values</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Pure & Certified", desc: "Hallmarked gold and authentic silver you can trust." },
              { title: "Ethical Sourcing", desc: "Responsibly sourced metals and gemstones." },
              { title: "Craftsmanship", desc: "Designed by skilled artisans with precision." },
              { title: "Customer First", desc: "Transparent pricing and honest service." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-3xl shadow-sm hover:shadow-md transition">
                <h3 className="font-medium text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center">Why Choose Us</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Transparent Pricing", "Modern Designs", "Secure Delivery"].map((text, i) => (
            <div key={i} className="border border-gray-200 rounded-3xl p-8 text-center">
              <p className="font-medium text-lg">{text}</p>
              <p className="mt-2 text-gray-600 text-sm">
                We ensure honesty, elegance, and safety in every purchase you make.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CRAFTSMANSHIP */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Crafted With Love</h2>
            <p className="mt-4 text-gray-300">
              Each jewellery piece goes through detailed craftsmanship — from design sketches to final polish — ensuring unmatched quality.
            </p>
          </div>
          <div className="aspect-square rounded-3xl bg-gray-800" />
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {["BIS Hallmarked", "100% Authentic", "Secure Payments", "Easy Returns"].map((badge, i) => (
            <div key={i} className="p-6 rounded-2xl bg-gray-100 text-sm font-medium">
              {badge}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-100 to-rose-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Be a Part of Our Journey</h2>
          <p className="mt-4 text-gray-600">
            Discover jewellery that reflects your story and celebrates your milestones.
          </p>
          <button className="mt-6 px-8 py-4 rounded-2xl bg-black text-white hover:bg-gray-800 transition">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
}
