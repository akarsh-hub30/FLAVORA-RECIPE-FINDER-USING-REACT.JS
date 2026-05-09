# 🍽️ FLAVORA – Premium Cinematic Recipe Finder

A **premium, futuristic, dark-themed** recipe finder website built with React JS, Tailwind CSS, and Framer Motion. Designed to feel cinematic, luxurious, and highly animated.

---

## ✨ Features

- 🎬 **Cinematic Intro Splash Animation** – Particle effects, 3D glow text, cinematic lighting
- 🔍 **Live Search** – Real-time dish search with instant results dropdown
- 📂 **Category Filtering** – Filter by Veg, Non Veg, Snacks, Chaats, Juices, etc.
- 🃏 **20+ Premium Dish Cards** – 3D hover effects, smoke animations, glow lighting
- 📖 **Full Recipe Details** – Ingredients, step-by-step cooking guide, nutrition info
- ❤️ **Save Recipes** – Persist saved dishes via LocalStorage
- 🔁 **Related Dishes** – Auto-recommend similar dishes
- ♾️ **Infinite Category Slider** – Smooth auto-scrolling category marquee
- ⚡ **Features Section** – Floating animated feature cards
- 📱 **Fully Responsive** – Mobile, tablet, and desktop optimized
- 🌑 **Dark Cinematic Theme** – Black/navy background, red-orange glow accents, glassmorphism

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16 or higher
- npm v8 or higher

### Installation

```bash
# 1. Navigate to the project folder
cd flavora

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app will open at **http://localhost:3000**

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to the `build/` folder, ready to deploy on Vercel, Netlify, or any static host.

---

## 📁 Project Structure

```
flavora/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── IntroSplash.jsx      # Cinematic intro animation
│   │   ├── Navbar.jsx           # Sticky glassmorphism navbar
│   │   ├── Hero.jsx             # Hero section with floating food
│   │   ├── CategorySlider.jsx   # Infinite scrolling category strip
│   │   ├── PopularDishes.jsx    # Dish grid with filters
│   │   ├── DishCard.jsx         # Individual dish card with effects
│   │   ├── Features.jsx         # Feature highlights section
│   │   └── Footer.jsx           # Dark cinematic footer
│   ├── pages/
│   │   ├── Home.jsx             # Home page (assembles sections)
│   │   ├── DishDetail.jsx       # Full recipe details page
│   │   └── SavedDishes.jsx      # Saved recipes collection
│   ├── hooks/
│   │   └── useSavedDishes.js    # LocalStorage save hook
│   ├── data/
│   │   └── dishes.js            # All recipe data + categories
│   ├── App.js                   # Root app with routing
│   └── index.css                # Global styles + Tailwind
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🎨 Design System

| Element | Value |
|---|---|
| Primary Background | `#080810` |
| Card Background | `rgba(13,13,26,0.8)` |
| Accent Red | `#e63329` |
| Accent Orange | `#f97316` |
| Gold | `#f59e0b` |
| Font - Display | Bebas Neue |
| Font - Serif | Cinzel |
| Font - Body | Inter |
| Effects | Glassmorphism, Glow, Smoke, Floating |

---

## 🍽️ Dish Categories

| Category | Dishes |
|---|---|
| 🥗 Veg | Veg Pulao, Rice Bath, Masala Dosa, Soft Idli |
| 🍗 Non Veg | Chicken Biryani, Seekh Kebab, Crispy Fish Fry, Mutton Sambar |
| 🫙 Chaats | Gobi Manchurian, Pani Puri, Masala Puri, Baby Corn 65 |
| 🥤 Juices | Apple Juice, Orange Juice, Ragi Malt, Lemon Ginger Juice |
| 🍿 Snacks | Mirchi Bajji, Aloo Bonda, Chakli, Masala Chips |

---

## 🛠️ Tech Stack

- **React 18** – Component-based UI
- **React Router DOM 6** – Client-side routing
- **Framer Motion 11** – Advanced animations
- **Tailwind CSS 3** – Utility-first styling
- **React Icons** – Icon library

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag & drop the build/ folder to netlify.com
```

---

## 📄 License

MIT License — Free to use and modify.

---

**FLAVORA** – *Discover. Cook. Savour.* 🍽️
