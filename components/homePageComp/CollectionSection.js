import Image from "next/image"

export default function CollectionsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        
        {/* LEFT CARD */}
        <div className="relative group rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/Jhumkas.jpg"
            alt="Moda Beads"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* CENTER CARD */}
        <div className="relative group rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/Hoops.jpg"
            alt="Dainty Dreams"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Overlay text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/10">
            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">
              DAINTY DREAMS
            </h2>
            <p className="text-sm text-white/90 mt-2 tracking-widest">
              SOFT MOMENTS, BEAUTIFULLY CRAFTED
            </p>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="relative group rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/Drops.jpg"
            alt="Men In Bold"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* CTA BUTTON */}
      <div className="flex justify-center mt-10">
        <button className="px-10 py-4 rounded-xl bg-gray-200 text-gray-700 font-medium text-sm tracking-wide hover:bg-gray-300 transition">
          Browse all Collections
        </button>
      </div>
    </section>
  )
}
