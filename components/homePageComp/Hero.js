// "use client"
// import { motion } from "framer-motion"
// import { fadeIn } from "../../lib/motion"

// export default function Hero() {
//   return (
//     <motion.section
//       variants={fadeIn}
//       initial="hidden"
//       animate="visible"
//       transition={{ duration: 1 }}
//       className=" "
//       // style={{ backgroundImage: "url('/images/Nuwa-web-banner.jpg')" }}
//     >
//       <div className="">
//         <img src="/images/Nuwa-web-banner.jpg"/>
//       </div>
//     </motion.section>
//   )
// }


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

export default function Hero() {
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
    <div>
      {/* <div className="flex gap-2">
        <LuxuryCategoryCard
        title="MODA BEADS"
        tagline="PERFECTION IS A SPHERE"
        images=
          "/images/mangalsutras_Slider.png"
      />
      <LuxuryCategoryCard
        title="MODA BEADS"
        tagline="PERFECTION IS A SPHERE"
        images="/images/mangalsutras_Slider.png"
      />
      <LuxuryCategoryCard
        title="MODA BEADS"
        tagline="PERFECTION IS A SPHERE"
        images=
          "/images/mangalsutras_Slider.png"
      
      />
      </div> */}
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
    </div>
  );
}





const LuxuryCategoryCard = ({
  title = "MODA BEADS",
  tagline = "PERFECTION IS A SPHERE",
  images = "",
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#050b1a] via-[#08162c] to-[#020617] p-8 shadow-xl hover:scale-[1.02] transition-all duration-500">

    <div className="absolute inset-0">
      <Image
            src={images}
            alt="img"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text */}
          {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-2xl md:text-5xl font-bold mb-3">
              {title}
            </h2>
            <p className="max-w-2xl text-sm md:text-lg text-gray-200">
              {tagline}
            </p>
          </div> */}

    </div>

      {/* Brand Text */}
      <div className="text-center relative z-10">
        <h2 className="text-3xl font-serif tracking-widest text-[#d4af37]">
          {title}
        </h2>
        <p className="mt-2 text-xs tracking-[0.3em] text-gray-300">
          {tagline}
        </p>
      </div>

      {/* Glow border */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" />
    </div>
  );
};


