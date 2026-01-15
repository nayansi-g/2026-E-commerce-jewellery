"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";


const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
  }),
};

const slides = [
  {
    id: 1,
    image: "/images/rings_slider.png",
    title: "Elegant Rings Collection",
    description: "Discover beautifully crafted rings designed to add timeless elegance to every moment. Perfect for daily wear, special occasions, and unforgettable celebrations.",
  },
  {
    id: 2,
    image: "/images/pendents_Slider.png",
    title: "Graceful Silver Pendants",
    description: "Minimal yet mesmerizing silver pendants crafted with fine detailing. A perfect blend of modern style and everyday elegance.",
  },
  {
    id: 3,
    image: "/images/mangalsutras_Slider.png",
    title: "Classic Silver Mangalsutras",
    description: "Celebrate tradition with a modern touch. Our silver mangalsutras are delicately designed for elegance, comfort, and everyday grace.",
  },
];

export default function Banner() {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = (newDirection) => {
    setCurrent([
      (current + newDirection + slides.length) % slides.length,
      newDirection,
    ]);
  };

  // Auto play
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full h-[260px] sm:h-[360px] md:h-[450px] overflow-hidden">
      
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slides[current].id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.3}
          onDragEnd={(e, { offset }) => {
            if (offset.x > 100) paginate(-1);
            if (offset.x < -100) paginate(1);
          }}
          className="absolute inset-0"
        >
          {/* Image */}
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-2xl md:text-5xl font-bold mb-3">
              {slides[current].title}
            </h2>
            <p className="max-w-2xl text-sm md:text-lg text-gray-200">
              {slides[current].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
      >
        <ChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => paginate(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() =>
              setCurrent([index, index > current ? 1 : -1])
            }
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === current
                ? "bg-white scale-125"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
