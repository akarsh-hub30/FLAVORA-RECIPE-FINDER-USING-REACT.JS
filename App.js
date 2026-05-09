import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import IntroSplash from "./components/IntroSplash";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DishDetail from "./pages/DishDetail";
import SavedDishes from "./pages/SavedDishes";
import { useSavedDishes } from "./hooks/useSavedDishes";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function ScrollToTop() {
  const { pathname } = window.location;
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppContent() {
  const { saved, isSaved, toggleSave, removeDish } = useSavedDishes();

  return (
    <div style={{ background: "#080810", minHeight: "100vh" }}>
      <Navbar savedCount={saved.length} />
      <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Home isSaved={isSaved} onToggleSave={toggleSave} />
              </motion.div>
            }
          />
          <Route
            path="/dish/:id"
            element={
              <motion.div
                key="dish"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <DishDetail isSaved={isSaved} onToggleSave={toggleSave} />
              </motion.div>
            }
          />
          <Route
            path="/saved"
            element={
              <motion.div
                key="saved"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <SavedDishes
                  saved={saved}
                  isSaved={isSaved}
                  onToggleSave={toggleSave}
                  onRemove={removeDish}
                />
              </motion.div>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {!introComplete && (
          <IntroSplash onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>
      {introComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AppContent />
        </motion.div>
      )}
    </BrowserRouter>
  );
}
