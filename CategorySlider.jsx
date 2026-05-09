import React from "react";
import { motion } from "framer-motion";
import { sliderItems } from "../data/dishes";

function SliderRow({ items, direction = "left" }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #080810, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, #080810, transparent)" }}
      />

      <div className={direction === "left" ? "infinite-scroll-left" : "infinite-scroll-right"}>
        <div className="flex gap-4 py-2" style={{ width: "max-content" }}>
          {doubled.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl cursor-pointer transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${item.color.replace("from-", "").replace("to-", "").replace("/40", "").replace("/20", "")})`,
                backgroundImage: `linear-gradient(135deg, rgba(13,13,26,0.8), rgba(13,13,26,0.6))`,
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span className="text-2xl">{item.emoji}</span>
              <span
                className="text-sm font-semibold tracking-wide whitespace-nowrap"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CategorySlider() {
  const row1 = sliderItems.slice(0, 8);
  const row2 = sliderItems.slice(4);

  return (
    <section className="py-12 overflow-hidden" style={{ background: "#080810" }}>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 px-4"
      >
        <div className="inline-flex items-center gap-2 mb-3">
          <div className="section-line" />
          <span
            className="text-xs tracking-[0.4em] uppercase font-semibold"
            style={{ color: "#f97316" }}
          >
            Browse Categories
          </span>
          <div className="section-line" />
        </div>
        <h2
          className="font-bebas text-4xl md:text-5xl tracking-widest"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          What Are You Craving?
        </h2>
      </motion.div>

      <div className="space-y-4">
        <SliderRow items={row1} direction="left" />
        <SliderRow items={row2} direction="right" />
      </div>
    </section>
  );
}
