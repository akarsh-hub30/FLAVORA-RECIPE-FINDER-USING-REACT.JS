import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dishes, categories } from "../data/dishes";
import DishCard from "./DishCard";

const catGroups = [
  { id: "veg", label: "🥗 Veg Delights" },
  { id: "nonveg", label: "🍗 Non Veg Specials" },
  { id: "chaats", label: "🫙 Street Chaats" },
  { id: "juices", label: "🥤 Fresh Juices" },
  { id: "snacks", label: "🍿 Crispy Snacks" },
  { id: "fastfood", label: "🍔 Fast Food" },
  { id: "fruits", label: "🍎 Fruits" },
];

export default function PopularDishes({ isSaved, onToggleSave }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [{ id: "all", label: "All" }, ...categories.filter(c => c.id !== "all")];

  const filtered = activeFilter === "all"
    ? dishes
    : dishes.filter(d => d.category === activeFilter);

  return (
    <section
      className="py-20"
      style={{ background: "linear-gradient(180deg, #080810, #0a0a14, #080810)" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="section-line" />
            <span
              className="text-xs tracking-[0.4em] uppercase font-semibold"
              style={{ color: "#f97316" }}
            >
              Popular Dishes
            </span>
            <div className="section-line" />
          </div>
          <h2
            className="font-bebas text-5xl md:text-6xl tracking-widest mb-4"
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            Explore Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #e63329, #f97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Menu
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            From vibrant veg dishes to rich non-veg delights, explore recipes crafted with the finest ingredients.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
              style={{
                background: activeFilter === f.id
                  ? "linear-gradient(135deg, #e63329, #f97316)"
                  : "rgba(255,255,255,0.05)",
                color: activeFilter === f.id ? "white" : "rgba(255,255,255,0.5)",
                border: activeFilter === f.id
                  ? "1px solid transparent"
                  : "1px solid rgba(255,255,255,0.08)",
                boxShadow: activeFilter === f.id
                  ? "0 0 20px rgba(230,51,41,0.3)"
                  : "none",
              }}
            >
              {f.emoji} {f.label}
            </button>
          ))}
        </motion.div>

        {/* If showing all, group by category */}
        {activeFilter === "all" ? (
          <div className="space-y-16">
            {catGroups.map((group) => {
              const groupDishes = dishes.filter(d => d.category === group.id);
              if (!groupDishes.length) return null;
              return (
                <div key={group.id} id={group.id}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4 mb-8"
                  >
                    <h3
                      className="font-bebas text-3xl tracking-widest"
                      style={{ color: "rgba(255,255,255,0.85)" }}
                    >
                      {group.label}
                    </h3>
                    <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(230,51,41,0.1)",
                        color: "#f97316",
                        border: "1px solid rgba(230,51,41,0.2)",
                      }}
                    >
                      {groupDishes.length} dishes
                    </span>
                  </motion.div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {groupDishes.map((dish, i) => (
                      <DishCard
                        key={dish.id}
                        dish={dish}
                        isSaved={isSaved(dish.id)}
                        onToggleSave={onToggleSave}
                        index={i}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              id={activeFilter}
            >
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🍽️</div>
                  <p className="text-gray-500">No dishes found in this category.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {filtered.map((dish, i) => (
                    <DishCard
                      key={dish.id}
                      dish={dish}
                      isSaved={isSaved(dish.id)}
                      onToggleSave={onToggleSave}
                      index={i}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
