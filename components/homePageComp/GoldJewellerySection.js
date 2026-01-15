import Image from "next/image";

const imagesCategories = [
  {
    title: "Elegant Chains",
    image: "/images/gold-chain-w.jpg",
  },
  {
    title: "Stunning Ring",
    image: "/images/gold-rings-w.jpg",
  },
  {
    title: "Modern Mangalsutras",
    image: "/images/gold-mangalsutra-w.jpg",
  },
  {
    title: "Trendy Pendants",
    image: "/images/gold-pendant-w.jpg",
  },
  {
    title: "Gorgeous Bangles",
    image: "/images/gold-bangles-w.jpg",
  },
  {
    title: "Stylish Earrings",
    image: "/images/gold-earring-w.jpg",
  },
];

export default function GoldJewellerySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-semibold">
          Gold Jewellery
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Fine jewellery for life's meaningful moments
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {imagesCategories.map((item, index) => (
          <div
            key={index}
            className="flex items-center hover:bg-gray-600 rounded-full p-[2px] gap-4 hover:shadow-md transition cursor-pointer"
          >
            {/* Image */}
            <div className="relative w-full h-28 rounded-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            {/* <p className="font-medium text-sm md:text-base">
              {item.title}
            </p> */}
          </div>
        ))}
      </div>
    </section>
  );
}