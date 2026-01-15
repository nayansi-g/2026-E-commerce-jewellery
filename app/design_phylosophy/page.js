"use client";

import Image from "next/image";
import Link from "next/link";

export default function DesignPhilosophy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-50 via-orange-50 to-pink-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Design Philosophy
          </h1>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Where timeless craftsmanship meets modern elegance — every piece tells a story of beauty, balance, and purpose.
          </p>
        </div>
      </section>

      {/* Philosophy Intro */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Jewellery with a Soul
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our design philosophy is rooted in emotion, tradition, and innovation. Each design is thoughtfully created to celebrate individuality, culture, and timeless beauty.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              From everyday elegance to statement bridal pieces, our collections are designed to resonate with your personal journey.
            </p>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden bg-gray-100">
            <Image src="/design/philosophy.jpg" alt="Design Philosophy" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">Our Core Principles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Timeless Design", "Authentic Materials", "Precision Craftsmanship", "Modern Aesthetics"].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3">{item}</h3>
                <p className="text-gray-600 text-sm">
                  Every piece is designed to remain elegant across generations while embracing contemporary sensibilities.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 rounded-2xl overflow-hidden bg-gray-100">
            <Image src="/design/craftsmanship.jpg" alt="Craftsmanship" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Crafted by Masters</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our jewellery is handcrafted by skilled artisans who bring decades of expertise to every creation. Attention to detail, balance, and finish define our process.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We believe true luxury lies in the precision of craftsmanship and the integrity of materials used.
            </p>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">Our Design Process</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {["Inspiration", "Sketching", "Crafting", "Perfection"].map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow">
                <span className="text-3xl font-bold text-yellow-600">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-semibold">{step}</h3>
                <p className="mt-3 text-gray-600 text-sm">
                  Each stage is carefully executed to transform ideas into exquisite jewellery pieces.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-bold">Responsible & Sustainable</h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            We are committed to ethical sourcing and sustainable practices. Our designs respect both the environment and the communities involved in our craftsmanship journey.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Experience Our Designs</h2>
          <p className="mt-4 text-gray-300">
            Discover jewellery that reflects artistry, purity, and timeless elegance.
          </p>
          <Link
            href="/shop"
            className="inline-block mt-8 px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200"
          >
            Explore Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
