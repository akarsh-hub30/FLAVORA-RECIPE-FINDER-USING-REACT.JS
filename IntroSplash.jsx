import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroSplash({ onComplete }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1200);
    const t3 = setTimeout(() => setPhase(3), 2200);
    const t4 = setTimeout(() => onComplete(), 3600);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onComplete]);

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 2,
    dur: Math.random() * 3 + 2,
  }));

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        style={{ background: "#04040a" }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Deep background gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(230,51,41,0.08) 0%, rgba(249,115,22,0.04) 30%, transparent 70%)",
          }}
        />

        {/* Animated particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: `rgba(${Math.random() > 0.5 ? "230,51,41" : "249,115,22"},0.7)`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: p.dur,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Cinematic light beams */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 16}%`,
                top: 0,
                width: "2px",
                height: "100%",
                background: `linear-gradient(180deg, transparent, rgba(230,51,41,0.15), transparent)`,
                transformOrigin: "top center",
              }}
              animate={{ scaleY: [0, 1, 0], opacity: [0, 0.6, 0] }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Circular ring animations */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[200, 350, 500].map((size, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border"
              style={{
                width: size,
                height: size,
                borderColor: `rgba(230,51,41,${0.15 - i * 0.04})`,
              }}
              animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.3, 0.6, 0.3] }}
              transition={{
                duration: 3 + i,
                delay: i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Smoke / fog */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`smoke-${i}`}
            className="absolute rounded-full"
            style={{
              width: 200 + i * 80,
              height: 60 + i * 20,
              background: "radial-gradient(ellipse, rgba(255,255,255,0.03), transparent)",
              filter: "blur(20px)",
              left: `${10 + i * 15}%`,
              bottom: "20%",
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.3, 0],
              scaleX: [1, 1.5, 1],
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Central content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Logo icon */}
          {/* <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={phase >= 1 ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            className="mb-6 relative"
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl"
              style={{
                background: "linear-gradient(135deg, #e63329, #f97316)",
                boxShadow: "0 0 40px rgba(230,51,41,0.6), 0 0 80px rgba(249,115,22,0.3)",
              }}
            >
              🍽️
            </div>
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                background: "transparent",
                boxShadow: "0 0 40px rgba(230,51,41,0.6)",
              }}
            />
          </motion.div> */}
          {/* Custom FLAVORA Logo */}
<motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={phase >= 1 ? { scale: 1, opacity: 1 } : {}}
  transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
  className="mb-6 relative flex items-center justify-center"
>
  <motion.img
    src="/logo.png"
    alt="Flavora Logo"
    className="w-[320px] md:w-[420px] object-contain relative z-10"
    animate={{
      scale: [1, 1.03, 1],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={{
      filter:
        "drop-shadow(0 0 25px rgba(249,115,22,0.6)) drop-shadow(0 0 60px rgba(230,51,41,0.35))",
    }}
  />

  {/* Aura Glow */}
  <motion.div
    className="absolute w-[380px] h-[380px] rounded-full"
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.25, 0.45, 0.25],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={{
      background:
        "radial-gradient(circle, rgba(249,115,22,0.35) 0%, rgba(230,51,41,0.15) 40%, transparent 75%)",
      filter: "blur(40px)",
    }}
  />
</motion.div>

          {/* FLAVORA text */}
          {/* <motion.div className="relative overflow-hidden" style={{ perspective: "1000px" }}>
            <motion.h1
              initial={{ opacity: 0, rotateX: 90, y: 50 }}
              animate={phase >= 1 ? { opacity: 1, rotateX: 0, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              className="font-bebas tracking-widest text-center"
              style={{
                fontSize: "clamp(4rem, 12vw, 9rem)",
                background: "linear-gradient(135deg, #ffffff 0%, #e63329 40%, #f97316 70%, #f59e0b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "none",
                filter: "drop-shadow(0 0 30px rgba(230,51,41,0.5))",
                letterSpacing: "0.2em",
              }}
            >
              FLAVORA
            </motion.h1>
          </motion.div> */}

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center font-inter tracking-[0.5em] uppercase text-sm mt-3"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Premium Recipe Experience
          </motion.p>

          {/* Loading bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={phase >= 2 ? { opacity: 1 } : {}}
            transition={{ duration: 0.3 }}
            className="mt-10 w-48 h-0.5 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #e63329, #f97316, #f59e0b)",
                boxShadow: "0 0 8px rgba(230,51,41,0.8)",
              }}
              initial={{ width: "0%" }}
              animate={phase >= 2 ? { width: "100%" } : {}}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* Exit overlay */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{ background: "#080810", pointerEvents: "none" }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
