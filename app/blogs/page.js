"use client";

import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "How to Choose the Perfect Gold Jewellery",
    excerpt:
      "A complete guide to choosing gold jewellery based on purity, occasion, and budget.",
    image: "/blog/gold-jewellery.jpg",
    date: "Jan 5, 2026",
    category: "Gold",
  },
  {
    id: 2,
    title: "Latest Bridal Jewellery Trends in 2026",
    excerpt:
      "Explore the most loved bridal jewellery designs that are trending this wedding season.",
    image: "/blog/bridal.jpg",
    date: "Jan 8, 2026",
    category: "Bridal",
  },
  {
    id: 3,
    title: "Difference Between 22K and 18K Gold",
    excerpt:
      "Understand which gold purity suits your lifestyle and daily wear needs.",
    image: "/blog/purity.jpg",
    date: "Jan 10, 2026",
    category: "Education",
  },
];

export default function Blogs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Blogs
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Insights, trends, and expert tips from the world of fine jewellery
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 border-b">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4 justify-center">
          {["All", "Gold", "Silver", "Bridal", "Education"].map((cat) => (
            <button
              key={cat}
              className="px-5 py-2 rounded-full border text-sm hover:bg-black hover:text-white transition"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Blog */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-80 rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src="/blog/featured.jpg"
              alt="Featured Blog"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-sm text-yellow-600 font-medium">
              Featured Article
            </span>
            <h2 className="text-3xl font-bold mt-2">
              Why Hallmarked Jewellery Matters
            </h2>
            <p className="mt-4 text-gray-600">
              Learn why BIS hallmarked jewellery ensures purity, trust, and long-
              term value for your investment.
            </p>
            <Link
              href="#"
              className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-10 text-center">Latest Articles</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <div className="relative h-56 bg-gray-100">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-yellow-600">
                    {blog.category}
                  </span>
                  <h4 className="text-lg font-semibold mt-2">
                    {blog.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">
                    {blog.excerpt}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xs text-gray-400">
                      {blog.date}
                    </span>
                    <Link
                      href="#"
                      className="text-sm font-medium text-black hover:underline"
                    >
                      Read
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold">Stay Updated</h3>
          <p className="mt-3 text-gray-600">
            Subscribe to receive jewellery tips, trends & exclusive updates.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 border rounded-full w-full sm:w-80 focus:outline-none"
            />
            <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold">Explore Our Jewellery</h3>
          <p className="mt-3 text-gray-300">
            Discover timeless designs crafted with love and purity.
          </p>
          <Link
            href="/shop"
            className="inline-block mt-6 px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}
