"use client"
import { motion } from "framer-motion"
// import motion from "@/lib/motion"
import { fadeUp, fadeIn, stagger } from "../../lib/motion"

export default function AboutStoreSection() {
    return (
        <section className="px-4 md:px-10 py-12 max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-xl md:text-2xl font-semibold">
                    About Our Store
                </h2>
                <p className="text-sm text-gray-500">
                    Get in touch with us for a complete jewellery shopping experience!
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* LEFT : GET IN TOUCH FORM */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-gradient-to-br from-rose-600 to-pink-700 text-white rounded-2xl p-6 md:p-8 shadow-xl"
                >
                    {/* Heading */}
                    <h3 className="text-xl font-semibold mb-1">
                        Get In Touch
                    </h3>
                    <p className="text-sm text-white/80 mb-6">
                        We’d love to hear from you
                    </p>

                    {/* Form */}
                    <form className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 bg-white/95 backdrop-blur outline-none focus:ring-2 focus:ring-white transition"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 bg-white/95 backdrop-blur outline-none focus:ring-2 focus:ring-white transition"
                            />
                        </div>

                        <div>
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 bg-white/95 backdrop-blur outline-none focus:ring-2 focus:ring-white transition"
                            />
                        </div>

                        <div>
                            <textarea
                                placeholder="Your Message"
                                rows={4}
                                className="w-full rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 bg-white/95 backdrop-blur outline-none focus:ring-2 focus:ring-white transition resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-white text-rose-700 font-semibold py-3 rounded-lg hover:bg-gray-100 active:scale-[0.98] transition-all shadow-md"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="mt-8 border-t border-white/30 pt-6">
                        <p className="text-3xl font-bold leading-none"></p>
                        <p className="text-xs tracking-widest uppercase text-white/80 mt-1">
                            Visit Our Showroom In India
                        </p>
                    </div>
                </motion.div>


                {/* RIGHT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-2 border border-gray-300 bg-gradient-to-br from-[#fdfcf9] to-[#f3efe9] rounded-2xl p-8 flex flex-col gap-8 shadow-sm"
                >
                    {/* Header */}
                    <div className="text-center ">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            Customer Support
                        </h3>
                        <p className="text-sm text-gray-600 max-w-md mx-auto">
                            We’re here to help you with store queries, schemes, pricing, and purchases.
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="text-center bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                        <p className="text-2xl font-bold text-emerald-700 tracking-wide">
                            9562-916-916
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                            Available 10 AM – 8 PM (All Days)
                        </p>
                    </div>

                    {/* Action Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* GOLD SCHEME */}
                        <motion.div
                            whileHover={{ y: -6 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-md hover:shadow-lg"
                        >
                            <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">
                                GOLD SAVINGS SCHEME
                            </h4>
                            <p className="text-sm text-gray-600 mb-4">
                                Easy monthly payments for our India stores with exciting benefits.
                            </p>
                            <button className="text-sm text-emerald-700 font-semibold hover:underline">
                                Pay Online →
                            </button>
                        </motion.div>

                        {/* GOLD RATE */}
                        <motion.div
                            whileHover={{ y: -6 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-white rounded-xl p-6 border border-gray-200 text-center  shadow-md hover:shadow-lg"
                        >
                            <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">
                                TODAY’S GOLD RATE
                            </h4>
                            <p className="text-sm text-gray-600 mb-4">
                                Transparent & best gold rate updated daily across India.
                            </p>
                            <button className="text-sm text-emerald-700 font-semibold hover:underline">
                                View Gold Rate →
                            </button>
                        </motion.div>
                    </div>

                    {/* Footer Note */}
                    <div className="text-center text-xs text-gray-500 pt-4 border-t">
                        Trusted by 4+ lakh customers across India
                    </div>
                </motion.div>

            </div>
        </section>
    )
}