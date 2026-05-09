import React from "react";
import { motion } from "framer-motion";
import { FiInstagram, FiFacebook, FiTwitter, FiMail, FiPhone, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-20 pb-8"
      style={{ background: "#04040a" }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(230,51,41,0.5), rgba(249,115,22,0.3), transparent)",
        }}
      />

      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(230,51,41,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                style={{
                  background: "linear-gradient(135deg, #e63329, #f97316)",
                  boxShadow: "0 0 20px rgba(230,51,41,0.4)",
                }}
              >
                🍽️
              </div>
              <span
                className="font-bebas text-4xl tracking-widest"
                style={{
                  background: "linear-gradient(135deg, #fff, #f97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                FLAVORA
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Your cinematic gateway to premium recipes. Discover, cook, and order the finest dishes from around the world.
            </p>

            {/* Newsletter */}
            <div className="flex gap-2 max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-xl text-sm text-white bg-white/5 border border-white/10 outline-none placeholder-gray-600 focus:border-orange-500/40 transition-colors"
              />
              <button
                className="px-4 py-2.5 rounded-xl text-white flex items-center gap-1 text-sm font-semibold"
                style={{ background: "linear-gradient(135deg, #e63329, #f97316)" }}
              >
                <FiArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="font-semibold text-sm tracking-wider uppercase mb-5"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Recipes", "Saved Dishes", "Categories", "About Us"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm hover:text-orange-400 transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-semibold text-sm tracking-wider uppercase mb-5"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@flavora.com"
                className="flex items-center gap-3 text-sm hover:text-orange-400 transition-colors group"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(230,51,41,0.1)", border: "1px solid rgba(230,51,41,0.2)" }}
                >
                  <FiMail size={13} className="text-orange-400" />
                </div>
                hello@flavora.com
              </a>
              <a
                href="tel:+919986283882"
                className="flex items-center gap-3 text-sm hover:text-orange-400 transition-colors"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(230,51,41,0.1)", border: "1px solid rgba(230,51,41,0.2)" }}
                >
                  <FiPhone size={13} className="text-orange-400" />
                </div>
                +91 9986283882
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {[
                { Icon: FiInstagram, href: "https://instagram.com/ks.akarsh", label: "Instagram" },
                { Icon: FiFacebook, href: "#", label: "Facebook" },
                { Icon: FiTwitter, href: "#", label: "Twitter" },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(230,51,41,0.15)";
                    e.currentTarget.style.borderColor = "rgba(230,51,41,0.4)";
                    e.currentTarget.style.color = "#f97316";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            © 2025 Flavora. All rights reserved. Crafted with ❤️ for food lovers.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs hover:text-orange-400 transition-colors"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
