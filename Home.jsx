import React from "react";
import Hero from "../components/Hero";
import CategorySlider from "../components/CategorySlider";
import PopularDishes from "../components/PopularDishes";
import Features from "../components/Features";

export default function Home({ isSaved, onToggleSave }) {
  return (
    <main>
      <Hero />
      <CategorySlider />
      <PopularDishes isSaved={isSaved} onToggleSave={onToggleSave} />
      <Features />
    </main>
  );
}
