import { useState, useEffect } from "react";

export function useSavedDishes() {
  const [saved, setSaved] = useState(() => {
    try {
      const data = localStorage.getItem("flavora_saved");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("flavora_saved", JSON.stringify(saved));
  }, [saved]);

  const saveDish = (dish) => {
    setSaved((prev) =>
      prev.find((d) => d.id === dish.id) ? prev : [...prev, dish]
    );
  };

  const removeDish = (id) => {
    setSaved((prev) => prev.filter((d) => d.id !== id));
  };

  const isSaved = (id) => saved.some((d) => d.id === id);

  const toggleSave = (dish) => {
    if (isSaved(dish.id)) removeDish(dish.id);
    else saveDish(dish);
  };

  return { saved, saveDish, removeDish, isSaved, toggleSave };
}
