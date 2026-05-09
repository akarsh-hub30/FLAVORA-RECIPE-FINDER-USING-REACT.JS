import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiBookmark, FiArrowLeft, FiTrash2 } from "react-icons/fi";
import DishCard from "../components/DishCard";

export default function SavedDishes({ saved, isSaved, onToggleSave, onRemove }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16" style={{ background: "#080810" }}>
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 10%, rgba(230,51,41,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm mb-6 hover:text-orange-400 transition-colors"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <FiArrowLeft size={15} /> Back
          </button>

          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{
                background: "rgba(230,51,41,0.1)",
                border: "1px solid rgba(230,51,41,0.25)",
              }}
            >
              <FiBookmark size={20} style={{ color: "#f97316" }} />
            </div>
            <div>
              <h1
                className="font-bebas text-4xl tracking-widest"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                Saved Recipes
              </h1>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                {saved.length} {saved.length === 1 ? "dish" : "dishes"} saved
              </p>
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {saved.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-32"
            >
              <div className="text-8xl mb-6 opacity-30">🍽️</div>
              <h3
                className="font-bebas text-2xl tracking-widest mb-3"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                No Saved Recipes Yet
              </h3>
              <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.25)" }}>
                Start exploring and save your favourite dishes
              </p>
              <button
                onClick={() => navigate("/")}
                className="px-6 py-3 rounded-xl font-semibold text-white btn-glow"
                style={{
                  background: "linear-gradient(135deg, #e63329, #f97316)",
                  boxShadow: "0 0 20px rgba(230,51,41,0.3)",
                }}
              >
                Explore Recipes
              </button>
            </motion.div>
          ) : (
            <motion.div key="grid" layout>
              {/* Clear all */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => saved.forEach(d => onRemove(d.id))}
                  className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg hover:bg-red-900/20 transition-colors"
                  style={{ color: "rgba(255,100,100,0.6)", border: "1px solid rgba(255,100,100,0.2)" }}
                >
                  <FiTrash2 size={12} />
                  Clear All
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <AnimatePresence>
                  {saved.map((dish, i) => (
                    <motion.div
                      key={dish.id}
                      layout
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <DishCard
                        dish={dish}
                        isSaved={isSaved(dish.id)}
                        onToggleSave={onToggleSave}
                        index={i}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
