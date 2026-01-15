"use client"
import Image from "next/image"
import { useState } from "react"


export default function ShopByGender() {
  const [active, setActive] = useState("women");

  
const categories= {
  women: [
    { title: "Gold Ring", image: "/images/Gold-Ring.jpg" },
    { title: "Gold Earring", image: "/images/Gold-Earring.jpg" },
    { title: "Gold Pendant", image: "/images/Gold-Pendant.jpg" },
    { title: "Gold Chain", image: "/images/Gold-Chain.jpg" },
  ],
  men: [
    { title: "Men Ring", image: "/images/Gold-Ring-man.jpg" },
    { title: "Men Chain", image: "/images/Gold-Chain-man.jpg" },
    { title: "Men Bracelet", image: "/images/Gold-Kada-man.jpg" },
    { title: "Men Pendant", image: "/images/Gold-Pendant-man.jpg" },
  ],
}

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-center text-xl font-semibold mb-2">
        Shop By Category
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 text-sm mb-8">
        {(["women", "men"]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`capitalize relative pb-1 transition ${
              active === tab
                ? "text-pink-600 font-medium"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}&apos;s jewellery
            {active === tab && (
              <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-pink-600 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories[active].map((item, i) => (
          <div
            key={i}
            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="relative h-40">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <p className="text-center text-sm font-medium py-3">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}