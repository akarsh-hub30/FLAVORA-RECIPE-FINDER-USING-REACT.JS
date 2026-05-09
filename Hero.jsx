import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const heroImages = [
  {
    image:
      "https://i.pinimg.com/736x/41/db/07/41db07bea6cae8e874b58058b0390e2a.jpg",
    label: "Biryani",
  },
  {
    image:
      "https://images.unsplash.com/photo-1593504049359-74330189a345?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8fDA%3D" ,   label: "Pizza",
  },
  {
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
    label: "Burger",
  },
  {
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzYWxhJTIwZG9zYXxlbnwwfHwwfHx8MA%3D%3D",
    label: "Dosa",
  },
  {
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
    label: "Veg Salad",
  },
  {
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&q=80",
    label: "Juice",
  },
  {
    image:
      "https://i.pinimg.com/1200x/2c/67/a7/2c67a7bb604a693d9999918c71014b7f.jpg",
    label: "Chicken",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&q=80",
    label: "Pasta",
  },
];

const floatingFoods = [
  {
    image:
      "https://i.pinimg.com/736x/41/db/07/41db07bea6cae8e874b58058b0390e2a.jpg",
    label: "Biryani",
    top: "15%",
    left: "10%",
    size: 80,
    delay: 0,
  },
  {
    image:
      "https://images.unsplash.com/photo-1593504049359-74330189a345?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8fDA%3D",
    label: "Pizza",
    top: "3%",
    left: "75%",
    size: 75,
    delay: 0.4,
  },
  {
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
    label: "Burger",
    top: "50%",
    left: "85%",
    size: 75,
    delay: 0.8,
  },
  {
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzYWxhJTIwZG9zYXxlbnwwfHwwfHx8MA%3D%3D",
    label: "Dosa",
    top: "85%",
    left: "65%",
    size: 75,
    delay: 1.2,
  },
  {
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&q=80",
    label: "Juice",
    top: "88%",
    left: "20%",
    size: 65,
    delay: 1.6,
  },
  {
    image:
      "https://i.pinimg.com/1200x/2c/67/a7/2c67a7bb604a693d9999918c71014b7f.jpg",
    label: "Chicken",
    top: "55%",
    left: "5%",
    size: 72,
    delay: 2,
  },
  {
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&q=80",
    label: "Pasta",
    top: "25%",
    left: "90%",
    size: 68,
    delay: 2.4,
  },
];

function SmokeEffect({ x, y }) {
  return (
    <div className="absolute pointer-events-none" style={{ left: x, top: y }}>
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 20 + i * 10,
            height: 20 + i * 10,
            background:
              "radial-gradient(circle, rgba(255,255,255,0.08), transparent)",
            filter: "blur(6px)",
            left: `${i * 5 - 10}px`,
          }}
          animate={{
            y: [0, -50 - i * 20],
            opacity: [0, 0.4, 0],
            scale: [0.5, 1.5, 2],
          }}
          transition={{
            duration: 3,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [activeFood, setActiveFood] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveFood((p) => (p + 1) % heroImages.length);
    }, 2500);

    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: "#080810" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(230,51,41,0.12) 0%, rgba(249,115,22,0.06) 40%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase font-semibold bg-orange-500/10 border border-orange-500/30 text-orange-400">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Premium Recipe Experience
          </div>

          <div>
            <h1
              className="font-bebas leading-none"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
            >
              <span className="block text-white">DISCOVER</span>

              <span
                className="block"
                style={{
                  background:
                    "linear-gradient(135deg, #e63329, #f97316, #f59e0b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                PREMIUM
              </span>

              <span className="block text-white">RECIPES</span>
            </h1>
          </div>

          <p className="text-gray-400 text-lg max-w-md">
            Explore a world of cinematic culinary art. From traditional Indian
            classics to gourmet creations — every dish tells a story.
          </p>

          <button
            className="group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, #e63329, #f97316)",
              boxShadow: "0 0 25px rgba(230,51,41,0.4)",
            }}
          >
            Explore Recipes
            <FiArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[500px] hidden md:block"
        >
          {/* Background Logo Blend */}
<motion.div
  className="absolute inset-0 flex items-center justify-center pointer-events-none"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2 }}
>
  <img
    src="/logo.png"
    alt="Flavora Background"
    className="w-[750px] object-contain"
    style={{
      opacity: 0.7,
      filter:
        "blur(0px) drop-shadow(0 0 80px rgba(249,115,22,0.35))",
      mixBlendMode: "screen",
      transform: "translate(9px, -20px)",
    }}
  />
</motion.div>
          {/* Center Glow */}
          <div
            className="absolute rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 300,
              height: 300,
              background:
                "radial-gradient(circle, rgba(230,51,41,0.12), rgba(249,115,22,0.06) 50%, transparent 70%)",
            }}
          />

          {/* CENTER IMAGE */}
          <motion.div
            className="absolute z-20"
            style={{
              top: "30%",
              left: "35%",
              transform: "translate(-50%, -50%)",
            }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFood}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center"
              >
                <div
                  className="w-40 h-40 rounded-3xl overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow:
                      "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(230,51,41,0.15)",
                  }}
                >
                  <img
                    src={heroImages[activeFood]?.image}
                    alt={heroImages[activeFood]?.label}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80";
                    }}
                  />
                </div>

                <span className="mt-3 text-sm font-semibold text-orange-400">
                  {heroImages[activeFood]?.label}
                </span>
              </motion.div>
            </AnimatePresence>

            <SmokeEffect x="100%" y="100%" />
          </motion.div>

          {/* Floating Foods */}
          {floatingFoods.map((food, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: food.top,
                left: food.left,
              }}
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5 + i * 0.4,
                delay: food.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  width: food.size,
                  height: food.size,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                }}
              >
                <img
                  src={food.image}
                  alt={food.label}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}