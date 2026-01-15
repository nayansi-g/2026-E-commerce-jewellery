"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {ShieldCheck,FileText,RefreshCcw,BadgeCheck,Gem,Scale,Users,Handshake} from "lucide-react";

const promises = [
  {
    title: "Complete Transparency",
    desc: "We provide a fully transparent and detailed invoice explaining all components of your purchase.",
    icon: FileText,
  },
  {
    title: "Complimentary Insurance",
    desc: "We provide insurance for 1 year against any loss or burglary.",
    icon: ShieldCheck,
  },
  {
    title: "Assured Lifetime Maintenance",
    desc: "Lifetime maintenance of jewellery, including polishing and stone tightening.",
    icon: RefreshCcw,
  },
  {
    title: "100% HUID Hallmarked Gold",
    desc: "We guarantee purity of our gold jewellery with BIS hallmarking.",
    icon: BadgeCheck,
  },
  {
    title: "100% Value on Gold Exchange",
    desc: "We offer 100% value on gold exchange when jewellery is purchased from us.",
    icon: Scale,
  },
  {
    title: "Responsible Sourced Products",
    desc: "Gold and diamonds are responsibly sourced following ethical practices.",
    icon: Handshake,
  },
  {
    title: "100% Value on Diamond Exchange",
    desc: "We provide 100% exchange value on diamonds purchased from us.",
    icon: Gem,
  },
  {
    title: "Fair Labour Practices",
    desc: "Fair wages, benefits, and ethical working conditions for artisans.",
    icon: Users,
  },
];


import { AnimatePresence } from "framer-motion";
 export default function PromiseSlider() {
  const [index, setIndex] = useState(0);
  const visibleCards = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % promises.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const getVisible = () => {
    let items = [];
    for (let i = 0; i < visibleCards; i++) {
      items.push(promises[(index + i) % promises.length]);
    }
    return items;
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">

      <div className="text-center mb-6 ">
    <h3 className="text-2xl font-bold text-gray-800 mb-2">
      Our Promises
    </h3>
    <p className="text-sm text-gray-600 max-w-md mx-auto">
      The promises that we'll never break
    </p>
  </div>
      {/* Cards */}
      <div className="overflow-hidden">
        <motion.div
          key={index}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {getVisible().map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white border rounded-lg p-5 text-center hover:shadow-md transition"
              >
                <div className="flex justify-center mb-3">
                  <Icon className="w-7 h-7 text-red-700" />
                </div>

                <h4 className="text-sm font-semibold text-gray-800 mb-1">
                  {item.title}
                </h4>

                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {promises.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? "bg-red-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}