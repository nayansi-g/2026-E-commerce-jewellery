// components/Footer.js
import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin,
  Mail,
  Smartphone,
  Shield,
  Gem,
  Gift,
  HelpCircle,
  FileText,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
   <footer className="bg-gray-900 text-gray-400">
  {/* Main Footer */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

    {/* Top Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

      {/* ABOUT US */}
      <FooterCol title="About Us">
        <FooterLink label="Who we are?" url="/WhoWeAre" />
        <FooterLink label="Our Blogs" />
        <FooterLink label="Design Philosophy" />
      </FooterCol>

      {/* CUSTOMER DELIGHT */}
      <FooterCol title="Customer Delight">
        <FooterLink label="Contact Us" />
        <FooterLink label="FAQ" />
        <FooterLink label="Ring Size Guide" />
        <FooterLink label="Bangle Size Guide" />

        {/* <div className="mt-4 space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-rose-500" />
            <span>1800 271 00000</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-rose-500" />
            <span>shreeji@info.com</span>
          </div>
          <p className="text-xs text-gray-500">
            (9am – 10pm, 7 days a week)
          </p>
        </div> */}
      </FooterCol>

      {/* POLICIES */}
      <FooterCol title="Policies">
        <FooterLink label="30-Day Returns" />
        <FooterLink label="Lifetime Exchange & Buyback" />
        <FooterLink label="Privacy Policy" />
        <FooterLink label="Shipping Policy" />
        <FooterLink label="Cancellation Policy" />
        <FooterLink label="Terms & Conditions" />
      </FooterCol>

      {/* OTHER LINKS */}
      <FooterCol title="Other Links">
        <FooterLink label="Why Buy From Us?" />
        <FooterLink label="Our Certifications" />
        <FooterLink label="Careers" />
        <FooterLink label="Testimonials" />
        <FooterLink label="Corporate Gifting" icon={<Gift className="w-4 h-4" />} />
      </FooterCol>

      {/* CUSTOMER SERVICE */}
      <div>
        <h3 className="text-sm font-semibold text-white mb-4">
          Customer Service
        </h3>

        <div className="space-y-4 text-sm leading-relaxed">
          <div className="flex gap-3">
            <Phone className="w-4 h-4 text-rose-500 mt-1" />
            <span>+91 9167780916 (10am – 7pm)</span>
          </div>

          <div className="flex gap-3">
            <Mail className="w-4 h-4 text-rose-500 mt-1" />
            <span>info@shreeji.com</span>
          </div>

          <div className="flex gap-3">
            <MapPin className="w-4 h-4 text-rose-500 mt-1" />
            <span>
              Shree Ji Gold & Silver Ltd.<br />
              Bada Bazar, Datia<br />
              Madhya Pradesh – 475661
            </span>
          </div>
        </div>
      </div>

    </div>

    {/* Divider */}
    <div className="border-t border-gray-800 my-8" />

    {/* Bottom Row */}
    <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">

      {/* Newsletter */}
      <div className="w-full lg:max-w-md">
        <p className="text-sm mb-2 text-center lg:text-left">
          Subscribe to our newsletter
        </p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-sm text-white placeholder-gray-500 focus:ring-2 focus:ring-rose-500 outline-none"
          />
          <button className="bg-rose-600 hover:bg-rose-700 px-4 py-2 rounded-lg text-sm text-white">
            Subscribe
          </button>
        </div>
      </div>

      {/* Payments */}
      <div className="flex flex-wrap gap-3 justify-center">
        {["visa","master-card","netbanking","cod"].map((img) => (
          <div
            key={img}
            className="bg-white rounded-md px-4 py-2 shadow-sm hover:shadow-md transition"
          >
            <img src={`/images/${img}.png`} className="h-6 object-contain" />
          </div>
        ))}
      </div>

      {/* Social */}
      <div className="flex gap-2">
        {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="p-2 rounded-full bg-gray-800 hover:bg-rose-600 transition"
          >
            <Icon className="w-4 h-4 text-white" />
          </a>
        ))}
      </div>
    </div>
  </div>

  {/* Copyright */}
 

  <PopularSearches />
   <div className="bg-gray-900 py-8">
    <p className="text-center text-xs text-gray-500">
      © 2026 Shree Ji Gold & Silver Limited. All Rights Reserved.
    </p>
  </div>
</footer>

  );
};

export default Footer;

const FooterCol = ({ title, children }) => (
  <div>
    <h3 className="text-sm font-semibold text-white mb-4">
      {title}
    </h3>
    <ul className="space-y-2 text-sm">{children}</ul>
  </div>
);

const FooterLink = ({ label,url, icon }) => (
  <li>
    <a
      href={url}
      className="flex items-center gap-2 hover:text-white transition"
    >
      {icon || <ChevronRight className="w-4 h-4" />}
      {label}
    </a>
  </li>
);



import Link from "next/link";

const popularSearches = [
  "Rings",
  "Earrings",
  "Mangalsutra",
  "Mangalsutra Bracelets",
  "Bangles",
  "Bracelets",
  "Pendants",
  "Necklaces",
  "Couple Bands",
  "Gold Coins",
  "Chains",
  "Watch Jewellery",
  "Nose Pin",
  "Dailywear Rings",
  "Dailywear Bracelets",
];

const goldSearches = [
  "Gold Jewellery",
  "Gold Rings",
  "Gold Earrings",
  "Gold Pendants",
  "Gold Necklaces",
  "Gold Mangalsutras",
  "Gold Bangles",
  "Women Gold Rings",
  "Men's Gold Earrings",
  "Gold Chains for Men",
  "Dailywear Gold Earrings",
  "Dailywear Gold Bangles",
];

const Men = [
  "Men's Jewellery",
  "Rings for man",
  "Earrings for man",
  "Men's Kada"
];

const womens =[
  "Jewellery for Women",
 "Pendants for Women",
  "Earrings for Women",
  "Women Gold Rings",
   "Mangalsutras for Women",
    "Bangles for Women",
  "Necklaces for Women",
]

const PopularSearches = () => {
  return (
    <section className="max-w-7xl bg-white mx-auto px-6 py-10 text-[#0a2540]">
      
      {/* 🔹 Popular Searches */}
      <div>
        <h3 className="text-lg font-semibold mb-3">
          Popular Searches
        </h3>

        <div className="text-sm leading-relaxed  tracking-light flex flex-wrap">
          {popularSearches.map((item, index) => (
            <span key={item}>
              <Link
                href={`/search/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:underline"
              >
                {item}
              </Link>
              {index !== popularSearches.length - 1 && " | "}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-300" />

      {/* 🔹 Top Searches in Gold Jewellery */}
      <div>
        <h3 className="text-lg font-semibold mb-3">
          Top Searches in Gold Jewellery
        </h3>

        <div className="text-sm leading-7 flex flex-wrap">
          {goldSearches.map((item, index) => (
            <span key={item}>
              <Link
                href={`/search/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:underline"
              >
                {item}
              </Link>
              {index !== goldSearches.length - 1 && " | "}
            </span>
          ))}
        </div>
      </div>

      <hr className="my-8 border-gray-300" />

      {/* 🔹 Top Searches in Gold Jewellery */}
      <div>
        <h3 className="text-lg font-semibold mb-3">
          Men's Gold Jewellery
        </h3>

        <div className="text-sm leading-7 flex flex-wrap">
          {Men.map((item, index) => (
            <span key={item}>
              <Link
                href={`/search/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:underline"
              >
                {item}
              </Link>
              {index !== goldSearches.length - 1 && " | "}
            </span>
          ))}
        </div>
      </div>

      <hr className="my-8 border-gray-300" />

      {/* 🔹 Top Searches in Gold Jewellery */}
      <div>
        <h3 className="text-lg font-semibold mb-3">
          Women's Gold Jewellery
        </h3>

        <div className="text-sm leading-7 flex flex-wrap">
          {womens.map((item, index) => (
            <span key={item}>
              <Link
                href={`/search/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:underline"
              >
                {item}
              </Link>
              {index !== goldSearches.length - 1 && " | "}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};


