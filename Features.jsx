import React from "react";
import { motion } from "framer-motion";
import { features } from "../data/dishes";

export default function Features() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "#080810" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(249,115,22,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="section-line" />
            <span
              className="text-xs tracking-[0.4em] uppercase font-semibold"
              style={{ color: "#f97316" }}
            >
              Why Flavora
            </span>
            <div className="section-line" />
          </div>
          <h2
            className="font-bebas text-5xl md:text-6xl tracking-widest"
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            Premium{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #e63329, #f97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Features
            </span>
          </h2>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative p-6 rounded-2xl overflow-hidden"
              style={{
                background: "rgba(13,13,26,0.8)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(230,51,41,0.05), rgba(249,115,22,0.03))",
                  border: "1px solid rgba(230,51,41,0.25)",
                }}
              />

              {/* Icon */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-4 inline-flex"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                  style={{
                    background: "rgba(230,51,41,0.1)",
                    border: "1px solid rgba(230,51,41,0.2)",
                    boxShadow: "0 0 20px rgba(230,51,41,0.1)",
                  }}
                >
                  {f.icon}
                </div>
              </motion.div>

              {/* Text */}
              <h3
                className="font-semibold text-lg mb-2 text-white group-hover:text-orange-300 transition-colors duration-200"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {f.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {f.desc}
              </p>

              {/* Bottom glow line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(230,51,41,0.5), transparent)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
