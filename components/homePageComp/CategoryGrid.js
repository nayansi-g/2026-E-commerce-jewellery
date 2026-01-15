

import { motion } from "framer-motion"
import Image from "next/image"
import { fadeUp, stagger } from "../../lib/motion"




const categories = [
  { name: "Rings", src: "/images/solitare.jpg"},
  { name: "Mangalsutras", src: "/images/Mangalsutra.jpg" },
  { name: "Bracelets", src: "/images/bracelets.webp" },
  { name: "Gold Pendants", src: "/images/Gold-Pendant.jpg" },
  { name: "Bangles", src: "/images/banglesnew.jpg" },
  { name: "Gold Earrings", src: "/images/Gold-Jhumka.gif" },
  { name: "Chains", src: "/images/Chain-1.jpg" },
  { name: "Gold Coins", src: "/images/coin.webp" },
  { name: "Silver Coins", src: "/images/silver-bars-coins-focus.jpg" },
  { name: "Silver Pendants", src: "/images/pendants2.webp" },
  { name: "Silver Earrings", src: "/images/Offer.jpg" },
  { name: "Necklaces", src: "/images/neckleshes.webp" },
  { name: "Studs", src: "/images/Gold-Earring.jpg" },
  { name: "Kadas", src: "/images/Bangle-1.jpg" },
  { name: "Best Sellers", src: "/images/best-seller.jpg" },
  { name: "New Arrivals", src: "/images/new-arrivals.jpg" },
]

export default function CategoryGrid() {

  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="
        grid
        grid-cols-4
        sm:grid-cols-5
        md:grid-cols-6
        lg:grid-cols-8
        gap-6
        px-4
        py-10
        
      "
    >
      {categories.map((cat) => (
        <motion.div
          key={cat.name}
          variants={fadeUp}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-center cursor-pointer"
        >
          {/* Image Wrapper */}
        <div >
            <div
            className="
              relative
              mx-auto
              h-20
              w-20
              lg:h-28
              lg:w-28
               md:h-24
              md:w-24
              rounded-full
              border-[1.5px]
              border-gray-500
              overflow-hidden
              bg-white
              shadow-sm
            "
          >
            <motion.div
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-full w-full"
            >
              <Image
                src={cat.src}
                alt={cat.name}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

          {/* Label */}
          <p className="mt-3 text-xs sm:text-sm font-medium text-gray-800">
            {cat.name}
          </p>
        </motion.div>
      ))}
    </motion.section>
  )
}
