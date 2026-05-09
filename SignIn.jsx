// src/pages/SignIn.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top right, rgba(230,51,41,0.15), transparent 30%), #050510",
      }}
    >
      {/* Glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{
          background: "linear-gradient(135deg, #e63329, #f97316)",
          top: "-200px",
          right: "-200px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md rounded-3xl p-8 relative z-10"
        style={{
          background: "rgba(13,13,26,0.9)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
            style={{
              background: "linear-gradient(135deg, #e63329, #f97316)",
              boxShadow: "0 0 25px rgba(230,51,41,0.4)",
            }}
          >
            🍽️
          </div>

          <h1
            className="mt-4 text-5xl font-bold tracking-widest"
            style={{
              fontFamily: "Bebas Neue, sans-serif",
              background: "linear-gradient(135deg, #fff, #f97316)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            FLAVORA
          </h1>

          <p className="text-gray-400 text-sm mt-2">
            Welcome back to premium recipes
          </p>
        </div>
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 mb-6 text-sm text-gray-400 hover:text-white transition-colors"
        >
          ← Back to Home
        </button>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Email Address
            </label>

            <div
              className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <FiMail className="text-orange-400" />

              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent w-full outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Password
            </label>

            <div
              className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <FiLock className="text-orange-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="bg-transparent w-full outline-none text-white placeholder-gray-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-white"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Forgot */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-orange-400 hover:text-orange-300"
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, #e63329, #f97316)",
              boxShadow: "0 0 25px rgba(230,51,41,0.35)",
            }}
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-xs text-gray-500">OR</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Google */}
        <button
          className="w-full py-3 rounded-xl text-white font-medium transition-all duration-300 hover:bg-white/10"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          Continue with Google
        </button>

        {/* Bottom */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-orange-400 hover:text-orange-300 font-medium"
          >
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}