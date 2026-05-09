import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHeart, FiClock, FiStar, FiArrowLeft,
  FiShoppingCart, FiBookmark, FiZap
} from "react-icons/fi";
import { dishes } from "../data/dishes";
import DishCard from "../components/DishCard";

function SmokeRing({ size, delay }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size, height: size / 4,
        bottom: 0, left: "50%",
        transform: "translateX(-50%)",
        background: "radial-gradient(ellipse, rgba(255,200,100,0.12), transparent)",
        filter: "blur(12px)",
      }}
      animate={{ y: [0, -60], opacity: [0, 0.5, 0], scaleX: [1, 1.6, 2] }}
      transition={{ duration: 3, delay, repeat: Infinity, ease: "easeOut" }}
    />
  );
}

export default function DishDetail({ isSaved, onToggleSave }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const dish = dishes.find((d) => d.id === parseInt(id));

  useEffect(() => { window.scrollTo({ top: 0 }); }, [id]);

  if (!dish) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#080810" }}>
        <div className="text-center">
          <div className="text-6xl mb-4">🍽️</div>
          <p className="text-gray-400 text-lg">Dish not found</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-2 rounded-xl text-white text-sm"
            style={{ background: "linear-gradient(135deg, #e63329, #f97316)" }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const related = dishes
    .filter((d) => d.category === dish.category && d.id !== dish.id)
    .slice(0, 4);

  const difficultyColor = { Easy: "#22c55e", Medium: "#f97316", Hard: "#e63329" };

  return (
    <div className="min-h-screen pt-16" style={{ background: "#080810" }}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-8 pb-2">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm hover:text-orange-400 transition-colors"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          <FiArrowLeft size={15} />
          Back
        </motion.button>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: "rgba(13,13,26,0.8)",
                border: "1px solid rgba(255,255,255,0.08)",
                aspectRatio: "4/3",
              }}
            >
              {dish.image ? (
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              ) : null}
              {/* Fallback emoji */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ fontSize: "8rem", opacity: dish.image ? 0.15 : 0.6 }}
              >
                {dish.emoji}
              </div>

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(8,8,16,0.7) 0%, transparent 60%)",
                }}
              />

              {/* Cinematic vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 80px rgba(0,0,0,0.5)",
                }}
              />
            </div>

            {/* Smoke particles */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full pointer-events-none">
              {[60, 100, 140].map((s, i) => (
                <SmokeRing key={i} size={s} delay={i * 0.8} />
              ))}
            </div>

            {/* Glow beneath */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 pointer-events-none"
              style={{
                width: "80%",
                height: 40,
                background: "radial-gradient(ellipse, rgba(230,51,41,0.2), transparent)",
                filter: "blur(15px)",
              }}
            />
          </motion.div>

          {/* RIGHT — details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Category badge */}
            <div className="flex items-center gap-3">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{
                  background: "rgba(230,51,41,0.1)",
                  color: "#f97316",
                  border: "1px solid rgba(230,51,41,0.25)",
                }}
              >
                {dish.category}
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    size={13}
                    style={{
                      color: i < Math.floor(dish.rating) ? "#f59e0b" : "rgba(255,255,255,0.2)",
                      fill: i < Math.floor(dish.rating) ? "#f59e0b" : "transparent",
                    }}
                  />
                ))}
                <span className="text-xs text-gray-400 ml-1">{dish.rating}</span>
              </div>
            </div>

            {/* Name */}
            <div>
              <h1
                className="font-bebas tracking-wider leading-none mb-2"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "rgba(255,255,255,0.95)" }}
              >
                {dish.name}
              </h1>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                {dish.description}
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: "⏱️", label: "Cook Time", val: dish.time },
                { icon: "👥", label: "Servings", val: `${dish.servings} people` },
                { icon: "🔥", label: "Difficulty", val: dish.difficulty, color: difficultyColor[dish.difficulty] },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center p-3 rounded-xl text-center"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span className="text-lg mb-1">{s.icon}</span>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: s.color || "rgba(255,255,255,0.85)" }}
                  >
                    {s.val}
                  </span>
                  <span className="text-[10px] text-gray-600 mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Nutrition */}
            <div>
              <h3
                className="text-xs font-semibold uppercase tracking-wider mb-3"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Nutrition per serving
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {Object.entries(dish.nutrition).map(([key, val]) => (
                  <div
                    key={key}
                    className="p-2 rounded-xl text-center"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <p
                      className="text-sm font-bold"
                      style={{
                        background: "linear-gradient(135deg, #f97316, #f59e0b)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {val}
                    </p>
                    <p className="text-[10px] text-gray-600 capitalize">{key}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Calories */}
            <div
              className="flex items-center gap-3 p-3 rounded-xl"
              style={{ background: "rgba(230,51,41,0.08)", border: "1px solid rgba(230,51,41,0.15)" }}
            >
              <span className="text-2xl">🔥</span>
              <div>
                <p
                  className="text-lg font-bold"
                  style={{ color: "#f97316" }}
                >
                  {dish.calories} kcal
                </p>
                <p className="text-xs text-gray-500">Total calories per serving</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              {/* <button
                className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-white transition-all duration-300 btn-glow"
                style={{
                  background: "linear-gradient(135deg, #e63329, #f97316)",
                  boxShadow: "0 0 20px rgba(230,51,41,0.3)",
                  minWidth: 140,
                }}
              >
                <FiShoppingCart size={16} />
                Add to Cart
              </button> */}
              {/* <button
                className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-white transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <FiZap size={16} style={{ color: "#f97316" }} />
                Order Now
              </button> */}
              <button
                onClick={() => onToggleSave(dish)}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold transition-all duration-300"
                style={{
                  // background: isSaved(dish.id)
                  //   ? "rgba(230,51,41,0.15)"
                  //   : "rgba(255,255,255,0.06)",
                  // border: isSaved(dish.id)
                  //   ? "1px solid rgba(230,51,41,0.4)"
                  //   : "1px solid rgba(255,255,255,0.12)",
                  // color: isSaved(dish.id) ? "#f97316" : "rgba(255,255,255,0.7)",
                
                  background: "linear-gradient(135deg, #e63329, #f97316)",
                  boxShadow: "0 0 20px rgba(230,51,41,0.3)",
                  minWidth: 140,
                
                }}
              >
                <FiBookmark size={16} style={{ fill: isSaved(dish.id) ? "#f97316" : "transparent" }} />
                {isSaved(dish.id) ? "Saved" : "Save"}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Ingredients & Steps */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {/* Ingredients */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="font-bebas text-3xl tracking-widest mb-6"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              🧂 Ingredients
            </h2>
            <div className="space-y-2">
              {dish.ingredients.map((ing, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-xl group hover:bg-white/3 transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.04)" }}
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #e63329, #f97316)",
                      boxShadow: "0 0 6px rgba(230,51,41,0.5)",
                    }}
                  />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                    {ing}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2
              className="font-bebas text-3xl tracking-widest mb-6"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              👨‍🍳 Cooking Steps
            </h2>
            <div className="space-y-4">
              {dish.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="flex gap-4 p-4 rounded-xl group hover:bg-white/3 transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.04)" }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold"
                    style={{
                      background: "linear-gradient(135deg, rgba(230,51,41,0.6), rgba(249,115,22,0.6))",
                      color: "white",
                    }}
                  >
                    {i + 1}
                  </div>
                  <p
                    className="text-sm leading-relaxed pt-0.5"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related dishes */}
        {related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20"
          >
            <div className="flex items-center gap-4 mb-8">
              <h2
                className="font-bebas text-3xl tracking-widest"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                You Might Also Like
              </h2>
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((d, i) => (
                <DishCard
                  key={d.id}
                  dish={d}
                  isSaved={isSaved(d.id)}
                  onToggleSave={onToggleSave}
                  index={i}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
