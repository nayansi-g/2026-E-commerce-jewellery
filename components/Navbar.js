"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  Menu,
  Search,
  Heart,
  ShoppingCart,
  Phone,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

/* ---------------- NOTIFICATION BAR ---------------- */

const notifications = [
  "✨ Flat 20% OFF on Silver Rings – Limited Time!",
  "💍 Free Shipping on Orders Above ₹1999",
  "🎁 Complimentary Jewellery Box with Every Order",
]

function NotificationBar() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (!visible) return
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % notifications.length),
      3000
    )
    return () => clearInterval(interval)
  }, [visible])

  if (!visible) return null

  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white">
      <div className="relative flex h-10 items-center justify-center px-4 text-xs sm:text-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {notifications[index]}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => setVisible(false)}
          className="absolute right-3"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}

/* ---------------- NAVBAR ---------------- */

const categories = [
  "Rings",
  "Bracelets",
  "Earrings",
  "Pendants",
  "Solitaires",
  "Chains",
  "Necklaces",
  "Bangles",
  "Gifts",
  "Gold Coins",
  "All Jewellery",
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full border-b bg-white">
      <NotificationBar />

      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 py-1 md:px-8">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/shreeji_logo.png" width={40} height={40} alt="logo" />
          <Image src="/images/Shreeji_text.png" width={60} height={40} alt="logo" />
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:flex w-[40%] border border-gray-600 rounded-md overflow-hidden">
          <input
            placeholder="Search for jewellery..."
            className="flex-1 px-4 py-2 outline-none"
          />
          <button className="bg-gray-900 px-4 text-gray-100">
            <Search size={18} />
          </button>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Phone (desktop only) */}
          <div className="hidden lg:flex items-center gap-1 text-sm text-gray-700">
            <Phone size={16} />
            <span>18004190000</span>
          </div>

          {/* Login */}
          <div className="hidden text-gray-700 md:flex text-sm">
            <Link href="/login" className="text-red-600 hover:text-red-700">
              Login
            </Link>
            <span className="mx-1">/</span>
            <Link href="/signup">Signup</Link>
          </div>

          {/* Icons */}
          <Heart  className="text-gray-700"/>
          <ShoppingCart className="text-gray-700"/>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* DESKTOP CATEGORY BAR */}


      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white p-5 md:hidden"
          >
            <div className="flex justify-between mb-6">
              <span className="font-bold text-lg">Menu</span>
              <button onClick={() => setMenuOpen(false)}>
                <X />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="flex border rounded mb-6">
              <input
                placeholder="Search jewellery..."
                className="flex-1 px-3 py-2 outline-none"
              />
              <button className="px-3">
                <Search size={18} />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col gap-4 text-sm ">
              {categories.map((item) => (
                <Link
                  key={item}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="border-b pb-2"
                >
                  {item}
                </Link>
              ))}

              <Link href="/login" className="text-red-600">Login</Link>
              <Link href="/signup">Signup</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
        <CategoryNavbar />
    </header>
  )
}





 function CategoryNavbar() {
  
return (
    <div className=" fixed  sticky
    top-0
    z-9999">
    <div className="  sticky
    top-0
    z-9999">
         <nav
  className="
  
    bg-gray-900
    text-gray-400
  "
>
  <ul
    className="
      flex
      items-center
      text-sm
      font-medium
      py-1
      px-4
      gap-2

      overflow-x-auto
      whitespace-nowrap
      scrollbar-hide

      md:justify-center
      md:gap-6
      md:px-8
    "
  >
    {[
      "Rings",
      "Bracelets",
      "Earrings",
      "Pendants",
      "Solitaires",
      "Chains",
      "Necklaces",
      "Bangles",
      "Gifts",
      "Gold Coins",
      "All Jewellery",
    ].map((item) => (
      <li
        key={item}
        className="
          cursor-pointer
          hover:text-white
          transition
          border-r
          last:border-none
        "
      >
        <div className="px-4 py-1">{item}</div>
      </li>
    ))}
  </ul>
</nav>
      </div></div>
  )
}




