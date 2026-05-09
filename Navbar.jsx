import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiBookmark, FiUser, FiChevronDown, FiX, FiMenu } from "react-icons/fi";
import { dishes, categories } from "../data/dishes";

export default function Navbar({ savedCount }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [catOpen, setCatOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearch = (val) => {
    setQuery(val);
    if (val.trim().length < 2) { setResults([]); return; }
    const filtered = dishes.filter((d) =>
      d.name.toLowerCase().includes(val.toLowerCase()) ||
      d.category.toLowerCase().includes(val.toLowerCase())
    );
    setResults(filtered.slice(0, 6));
  };

  const goToDish = (id) => {
    setQuery(""); setResults([]);
    navigate(`/dish/${id}`);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setCatOpen(false);
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(8,8,16,0.92)"
          : "rgba(8,8,16,0.6)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: scrolled
          ? "1px solid rgba(230,51,41,0.2)"
          : "1px solid rgba(255,255,255,0.06)",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0 group">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-lg transition-all duration-300 group-hover:scale-110"
            style={{
              background: "linear-gradient(135deg, #e63329, #f97316)",
              boxShadow: "0 0 15px rgba(230,51,41,0.4)",
            }}
          >
            🍽️
          </div>
          <span
            className="font-bebas text-2xl tracking-widest hidden sm:block"
            style={{
              background: "linear-gradient(135deg, #ffffff, #f97316)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            FLAVORA
          </span>
        </Link>

        {/* Search */}
        <div className="flex-1 relative max-w-md" ref={searchRef}>
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <FiSearch className="text-gray-400 flex-shrink-0" size={16} />
            <input
              type="text"
              placeholder="Search dishes..."
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              className="bg-transparent w-full text-sm text-white placeholder-gray-500 outline-none"
            />
            {query && (
              <button onClick={() => { setQuery(""); setResults([]); }}>
                <FiX size={14} className="text-gray-400 hover:text-white" />
              </button>
            )}
          </div>

          <AnimatePresence>
            {results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="absolute top-full left-0 right-0 mt-2 rounded-xl overflow-hidden z-50"
                style={{
                  background: "rgba(13,13,26,0.98)",
                  border: "1px solid rgba(230,51,41,0.2)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {results.map((dish) => (
                  <button
                    key={dish.id}
                    onClick={() => goToDish(dish.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/5 transition-colors border-b border-white/5 last:border-none"
                  >
                    <span className="text-2xl">{dish.emoji}</span>
                    <div>
                      <p className="text-white text-sm font-medium">{dish.name}</p>
                      <p className="text-gray-500 text-xs capitalize">{dish.category}</p>
                    </div>
                    <span className="ml-auto text-yellow-400 text-xs">⭐ {dish.rating}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Categories dropdown - desktop */}
        <div className="relative hidden md:block">
          <button
            onClick={() => setCatOpen(!catOpen)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm text-gray-300 hover:text-white transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            Categories
            <motion.span animate={{ rotate: catOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <FiChevronDown size={14} />
            </motion.span>
          </button>

          <AnimatePresence>
            {catOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                className="absolute right-0 top-full mt-2 w-48 rounded-xl overflow-hidden z-50"
                style={{
                  background: "rgba(13,13,26,0.98)",
                  border: "1px solid rgba(230,51,41,0.2)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
                }}
              >
                {categories.filter(c => c.id !== "all").map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => scrollToSection(cat.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5 last:border-none"
                  >
                    <span>{cat.emoji}</span>
                    <span>{cat.label}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            to="/saved"
            className="relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm text-gray-300 hover:text-white transition-all duration-200 group"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <FiBookmark size={15} className="group-hover:text-orange-400 transition-colors" />
            <span className="hidden sm:block">Saved</span>
            {savedCount > 0 && (
              <span
                className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #e63329, #f97316)" }}
              >
                {savedCount}
              </span>
            )}
          </Link>

          {/* <button
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm text-gray-300 hover:text-white transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <FiUser size={15} />
            <span>Sign In</span>
          </button>

          <button
            className="hidden sm:flex items-center px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 btn-glow"
            style={{
              background: "linear-gradient(135deg, #e63329, #f97316)",
              boxShadow: "0 0 15px rgba(230,51,41,0.3)",
            }}
          >
            Sign Up
          </button> */}
          {/* Sign In */}
<button
  onClick={() => navigate("/signin")}
  className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
  style={{
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
  }}
>
  <FiUser size={15} />
  <span>Sign In</span>
</button>

{/* Sign Up */}
<button
  onClick={() => navigate("/signup")}
  className="hidden sm:flex items-center px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
  style={{
    background: "linear-gradient(135deg, #e63329, #f97316)",
    boxShadow: "0 0 15px rgba(230,51,41,0.3)",
  }}
>
  Sign Up
</button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-white/5"
            style={{ background: "rgba(8,8,16,0.98)" }}
          >
            <div className="p-4 space-y-1">
              {categories.filter(c => c.id !== "all").map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors text-left"
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.label}</span>
                </button>
                
              ))}
              <div className="flex gap-2 pt-2">
                <button className="flex-1 py-2 rounded-lg text-sm text-gray-300 border border-white/10">Sign In</button>
                <button className="flex-1 py-2 rounded-lg text-sm font-semibold text-white" style={{ background: "linear-gradient(135deg, #e63329, #f97316)" }}>Sign Up</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
