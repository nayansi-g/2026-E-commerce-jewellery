"use client"

import { motion } from "framer-motion"
import Image from "next/image"


const rightItems= [
  {
    title: "Sleek Rings",
    subtitle: "Starting from ₹10,999",
    image: "/images/diamond-ring.jpg",
  },
  {
    title: "Elegant Bangles",
    subtitle: "Starting from ₹20,999",
    image: "/images/diamond-bangle.jpg",
  },
  {
    title: "Stunning Earrings",
    subtitle: "Starting from ₹15,999",
    image: "/images/diamond-earring.jpg",
  },
  {
    title: "Stylish Mangalsutras",
    subtitle: "Starting from ₹18,999",
    image: "/images/diamond-mangalsutra.jpg",
  },
]

export default function ProductGrid() {
  return (
    <section className="px-4 md:px-10 py-10 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-semibold">
          Mine Diamond Festival
        </h2>
        <p className="text-sm text-gray-500">
          Sparkle through the events with timeless diamonds
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* LEFT BIG BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative md:col-span-1 h-[520px] rounded-xl overflow-hidden"
        >
          <Image
            src="/images/Alia.jpg"
            alt="Diamond Festival"
            fill
            className="object-cover"
          />

          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 text-white">
            <p className="text-xs uppercase tracking-wider">
              Mine Diamond Festival
            </p>
            <h3 className="text-lg font-semibold leading-tight mt-1">
              Celebrating the Brilliance <br /> of Natural Diamonds
            </h3>

            <div className="mt-4 bg-white text-black inline-block px-4 py-2 text-xs font-semibold rounded">
              UP TO 40% OFF <br />
              <span className="text-[10px] font-normal">
                ON DIAMOND VALUE
              </span>
            </div>
          </div> */}
        </motion.div>

        {/* RIGHT GRID */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {rightItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative h-[250px] rounded-xl overflow-hidden cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black/30 p-4 flex flex-col justify-end text-white">
                <h4 className="font-semibold text-sm md:text-base">
                  {item.title}
                </h4>
                {item.subtitle && (
                  <p className="text-xs text-gray-200">
                    {item.subtitle}
                  </p>
                )}
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
