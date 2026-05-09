import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import { FiHeart, FiClock, FiStar } from "react-icons/fi";
import { FiHeart, FiClock, FiStar, FiPlay } from "react-icons/fi";

export default function DishCard({ dish, isSaved, onToggleSave, index = 0 }) {
  const navigate = useNavigate();

  const difficultyColor = {
    Easy: "#22c55e",
    Medium: "#f97316",
    Hard: "#e63329",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: "rgba(13,13,26,0.8)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
      }}
      onClick={() => navigate(`/dish/${dish.id}`)}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        style={{
          background: "linear-gradient(135deg, rgba(230,51,41,0.06), rgba(249,115,22,0.04))",
          boxShadow: "inset 0 0 30px rgba(230,51,41,0.1)",
        }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0 rounded-2xl"
        style={{ border: "1px solid rgba(230,51,41,0.3)" }}
      />

      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        {dish.image ? (
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        ) : null}
        {/* Fallback emoji */}
        <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-30">
          {dish.emoji}
        </div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(13,13,26,0.9) 0%, rgba(13,13,26,0.2) 50%, transparent 100%)",
          }}
        />

        {/* Save button */}
        <button
          onClick={(e) => { e.stopPropagation(); onToggleSave(dish); }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 z-20"
          style={{
            background: isSaved
              ? "linear-gradient(135deg, #e63329, #f97316)"
              : "rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
          }}
        >
          <FiHeart
            size={13}
            style={{ fill: isSaved ? "white" : "transparent", color: "white" }}
          />
        </button>
       {/* Video Button */}
<button
  onClick={(e) => {
    e.stopPropagation();

    const query = `${dish.name} recipe`;

    window.open(
      `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
      "_blank"
    );
  }}
  className="absolute top-3 left-3 w-9 h-9 rounded-full flex items-center justify-center z-[999] hover:scale-110 transition-all duration-300"
  style={{
    background: "linear-gradient(135deg, #ff0000, #ff4d4d)",
    border: "1px solid rgba(255,255,255,0.25)",
    boxShadow: "0 0 15px rgba(255,0,0,0.5)",
    backdropFilter: "blur(10px)",
  }}
>
  <FiPlay
    size={16}
    style={{
      color: "white",
      fill: "white",
      marginLeft: "2px",
    }}
  />
</button>
        {/* Category tag */}
        <div
          className="absolute bottom-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
          style={{
            background: "rgba(0,0,0,0.6)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#f97316",
            backdropFilter: "blur(6px)",
          }}
        >
          {dish.category}
        </div>

        {/* Smoke effect on hover */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 30 + i * 15,
                height: 20,
                background: "radial-gradient(ellipse, rgba(255,255,255,0.1), transparent)",
                filter: "blur(8px)",
                left: `${i * 15 - 20}px`,
                bottom: 0,
              }}
              animate={{ y: [0, -30, 0], opacity: [0, 0.4, 0] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 relative z-10">
        <h3
          className="font-semibold text-white text-base mb-1 group-hover:text-orange-300 transition-colors duration-200 leading-tight"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {dish.name}
        </h3>
        <p
          className="text-xs leading-relaxed line-clamp-2 mb-3"
          style={{ color: "rgba(255,255,255,0.45)", fontFamily: "Inter, sans-serif" }}
        >
          {dish.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            <span className="flex items-center gap-1">
              <FiClock size={11} />
              {dish.time}
            </span>
            <span
              className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
              style={{
                background: `${difficultyColor[dish.difficulty]}18`,
                color: difficultyColor[dish.difficulty],
                border: `1px solid ${difficultyColor[dish.difficulty]}40`,
              }}
            >
              {dish.difficulty}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FiStar size={11} style={{ color: "#f59e0b", fill: "#f59e0b" }} />
            <span className="text-xs font-semibold" style={{ color: "#f59e0b" }}>
              {dish.rating}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
