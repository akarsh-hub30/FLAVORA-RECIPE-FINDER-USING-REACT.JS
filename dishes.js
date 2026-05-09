export const categories = [
  { id: "all", label: "All", emoji: "🍽️" },
  { id: "veg", label: "Veg", emoji: "🥗" },
  { id: "nonveg", label: "Non Veg", emoji: "🍗" },
  { id: "snacks", label: "Snacks", emoji: "🍿" },
  { id: "chaats", label: "Chaats", emoji: "🫙" },
  { id: "fastfood", label: "Fast Food", emoji: "🍔" },
  { id: "fruits", label: "Fruits", emoji: "🍎" },
  { id: "juices", label: "Juices", emoji: "🥤" },
  { id: "diet", label: "Diet Foods", emoji: "🥦" },
];

export const sliderItems = [
  { label: "Veg", emoji: "🥗", color: "from-green-900/40 to-green-700/20" },
  { label: "Non Veg", emoji: "🍗", color: "from-red-900/40 to-red-700/20" },
  { label: "Juices", emoji: "🥤", color: "from-orange-900/40 to-orange-700/20" },
  { label: "Snacks", emoji: "🍿", color: "from-yellow-900/40 to-yellow-700/20" },
  { label: "Chaats", emoji: "🫙", color: "from-amber-900/40 to-amber-700/20" },
  { label: "Pizza", emoji: "🍕", color: "from-red-900/40 to-orange-700/20" },
  { label: "Burger", emoji: "🍔", color: "from-yellow-900/40 to-amber-700/20" },
  { label: "Biryani", emoji: "🍛", color: "from-orange-900/40 to-yellow-700/20" },
  { label: "Dosa", emoji: "🫓", color: "from-amber-900/40 to-yellow-700/20" },
  { label: "Gobi Manchurian", emoji: "🥦", color: "from-green-900/40 to-yellow-700/20" },
  { label: "Pasta", emoji: "🍝", color: "from-yellow-900/40 to-red-700/20" },
  { label: "Ice Cream", emoji: "🍦", color: "from-blue-900/40 to-purple-700/20" },
];

export const heroImages = [
  { emoji: "🍛", label: "Biryani", delay: 0 },
  { emoji: "🍕", label: "Pizza", delay: 0.5 },
  { emoji: "🍔", label: "Burger", delay: 1 },
  { emoji: "🫓", label: "Dosa", delay: 1.5 },
  { emoji: "🥗", label: "Veg Salad", delay: 2 },
  { emoji: "🥤", label: "Juice", delay: 2.5 },
  { emoji: "🍱", label: "Bento", delay: 3 },
  { emoji: "🍗", label: "Chicken", delay: 3.5 },
];

export const dishes = [
  // VEG
  {
    id: 1,
    name: "Veg Pulao",
    category: "veg",
    emoji: "🍚",
    image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400&q=80",
    description: "Fragrant basmati rice cooked with mixed vegetables, whole spices, and aromatic herbs.",
    time: "30 min",
    difficulty: "Easy",
    servings: 4,
    rating: 4.7,
    calories: 320,
    ingredients: [
      "2 cups Basmati Rice",
      "1 cup Mixed Vegetables (carrot, peas, beans)",
      "1 Onion, sliced",
      "2 tbsp Ghee",
      "1 tsp Cumin seeds",
      "2 Bay leaves",
      "4 Cloves",
      "1 Cinnamon stick",
      "1 tsp Ginger-garlic paste",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    steps: [
      "Wash and soak basmati rice for 30 minutes, then drain.",
      "Heat ghee in a heavy-bottomed pan. Add cumin seeds, bay leaves, cloves, and cinnamon. Sauté until fragrant.",
      "Add sliced onions and cook until golden brown.",
      "Add ginger-garlic paste and sauté for 2 minutes.",
      "Add mixed vegetables and cook for 3-4 minutes.",
      "Add soaked rice, gently mix, and add 3.5 cups of water.",
      "Season with salt, bring to boil, then simmer on low heat covered for 18 minutes.",
      "Fluff with fork, garnish with fresh coriander and serve hot."
    ],
    nutrition: { protein: "8g", carbs: "62g", fat: "6g", fiber: "4g" },
    tags: ["vegetarian", "rice", "indian", "healthy"]
  },
  {
    id: 2,
    name: "Rice Bath",
    category: "veg",
    emoji: "🍲",
    image: "https://plus.unsplash.com/premium_photo-1723708882892-de33ff578c11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmljZSUyMGJhdGglMjBkaXNofGVufDB8fDB8fHww",
    description: "A South Indian spiced rice dish, bursting with curry leaves, mustard and turmeric.",
    time: "25 min",
    difficulty: "Easy",
    servings: 3,
    rating: 4.6,
    calories: 290,
    ingredients: [
      "2 cups cooked rice",
      "1 tsp mustard seeds",
      "1 tsp turmeric",
      "2 tbsp oil",
      "1 sprig curry leaves",
      "2 dried red chillies",
      "1 tsp urad dal",
      "1 tsp chana dal",
      "Salt to taste"
    ],
    steps: [
      "Heat oil in a wide pan over medium heat.",
      "Add mustard seeds and let them splutter.",
      "Add urad dal, chana dal, dried red chillies and curry leaves.",
      "Fry until dal turns golden.",
      "Add turmeric and salt.",
      "Add cooked rice and mix gently until well coated.",
      "Cook on low heat for 3-4 minutes, stirring occasionally.",
      "Serve hot with pickle and papad."
    ],
    nutrition: { protein: "6g", carbs: "55g", fat: "7g", fiber: "2g" },
    tags: ["vegetarian", "south indian", "rice"]
  },
  {
    id: 3,
    name: "Masala Dosa",
    category: "veg",
    emoji: "🫓",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzYWxhJTIwZG9zYXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Crispy golden crepe filled with spiced potato masala, served with sambar and chutney.",
    time: "45 min",
    difficulty: "Medium",
    servings: 4,
    rating: 4.9,
    calories: 350,
    ingredients: [
      "2 cups dosa batter (fermented)",
      "4 potatoes, boiled and mashed",
      "1 onion, chopped",
      "2 green chillies",
      "1 tsp mustard seeds",
      "1 tsp turmeric",
      "Curry leaves",
      "Oil for cooking",
      "Salt to taste"
    ],
    steps: [
      "Prepare potato filling: heat oil, add mustard, curry leaves, onion, chillies.",
      "Add turmeric and mashed potatoes, mix well and set aside.",
      "Heat a flat tawa/griddle on medium-high heat.",
      "Pour a ladle of batter in the center and spread in circular motion.",
      "Drizzle oil around edges, cook until golden and crispy.",
      "Place potato filling in center and fold dosa.",
      "Serve immediately with sambar and coconut chutney."
    ],
    nutrition: { protein: "9g", carbs: "65g", fat: "9g", fiber: "5g" },
    tags: ["vegetarian", "south indian", "breakfast", "crispy"]
  },
  {
    id: 4,
    name: "Soft Idli",
    category: "veg",
    emoji: "🍥",
    image: "https://images.unsplash.com/photo-1680359873197-c3eb21ec05c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlkbGklMjBzYW1iYXJ8ZW58MHx8MHx8fDA%3D",
    description: "Fluffy steamed rice cakes, light on the stomach and rich in flavour when served with sambar.",
    time: "20 min",
    difficulty: "Easy",
    servings: 4,
    rating: 4.5,
    calories: 180,
    ingredients: [
      "2 cups idli batter (fermented)",
      "Oil to grease moulds",
      "Sambar for serving",
      "Coconut chutney for serving",
      "Ghee to drizzle"
    ],
    steps: [
      "Grease idli moulds with a little oil.",
      "Pour batter into moulds until three-quarters full.",
      "Steam in a pressure cooker or idli steamer for 10-12 minutes.",
      "Insert a toothpick to check — it should come out clean.",
      "Let cool for 2 minutes, then unmould.",
      "Drizzle with ghee and serve hot with sambar and chutney."
    ],
    nutrition: { protein: "5g", carbs: "38g", fat: "2g", fiber: "2g" },
    tags: ["vegetarian", "south indian", "breakfast", "light"]
  },

  // NON VEG
  {
    id: 5,
    name: "Chicken Biryani",
    category: "nonveg",
    emoji: "🍛",
    image: "https://i.pinimg.com/736x/15/d6/c3/15d6c3d105e3f360379012af67397338.jpg",
    description: "Royal layered fragrant rice cooked with tender marinated chicken and exotic whole spices.",
    time: "90 min",
    difficulty: "Hard",
    servings: 6,
    rating: 4.9,
    calories: 620,
    ingredients: [
      "1 kg Chicken, cut into pieces",
      "3 cups Basmati Rice",
      "1 cup Yoghurt",
      "3 Onions, fried golden",
      "2 tbsp Biryani masala",
      "1 tsp Saffron soaked in milk",
      "Fresh mint and coriander",
      "Ghee and oil",
      "Whole spices (cardamom, cloves, cinnamon)",
      "Ginger-garlic paste",
      "Salt and red chilli powder"
    ],
    steps: [
      "Marinate chicken with yoghurt, ginger-garlic paste, biryani masala, salt for 2 hours.",
      "Cook rice until 70% done. Drain and set aside.",
      "Fry onions until deep golden brown. Set aside.",
      "Cook marinated chicken in heavy pot until half done.",
      "Layer rice over chicken, add saffron milk, fried onions, mint, coriander.",
      "Seal with dough or tight lid (dum cooking).",
      "Cook on high heat for 5 min, then very low heat for 30 min.",
      "Open gently, mix the bottom layer only, serve with raita."
    ],
    nutrition: { protein: "38g", carbs: "72g", fat: "18g", fiber: "3g" },
    tags: ["non-veg", "biryani", "chicken", "mughlai", "special"]
  },
  {
    id: 6,
    name: "Seekh Kebab",
    category: "nonveg",
    emoji: "🍢",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
    description: "Juicy minced meat skewers flavoured with aromatic spices and grilled to smoky perfection.",
    time: "40 min",
    difficulty: "Medium",
    servings: 4,
    rating: 4.8,
    calories: 380,
    ingredients: [
      "500g minced chicken or mutton",
      "1 Onion, finely grated",
      "2 tbsp fresh coriander, chopped",
      "1 tsp cumin powder",
      "1 tsp garam masala",
      "1 tsp chilli powder",
      "1 tsp ginger-garlic paste",
      "Salt to taste",
      "Oil for grilling"
    ],
    steps: [
      "Combine all ingredients in a bowl and mix thoroughly.",
      "Refrigerate the mixture for 30 minutes.",
      "Divide into equal portions and shape around skewers.",
      "Grill on high heat or in oven at 200°C for 15-20 minutes.",
      "Turn occasionally for even cooking and char.",
      "Serve with mint chutney, onion rings, and lemon wedges."
    ],
    nutrition: { protein: "32g", carbs: "8g", fat: "22g", fiber: "1g" },
    tags: ["non-veg", "kebab", "grilled", "starter"]
  },
  {
    id: 7,
    name: "Crispy Fish Fry",
    category: "nonveg",
    emoji: "🐟",
    image: "https://images.unsplash.com/photo-1765265432607-cdc1060294ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlzaCUyMHRhdmElMjBmcnl8ZW58MHx8MHx8fDA%3D",
    description: "Fresh fish marinated in bold spices and fried to a golden, crispy, irresistible finish.",
    time: "35 min",
    difficulty: "Medium",
    servings: 4,
    rating: 4.7,
    calories: 410,
    ingredients: [
      "4 fish fillets (pomfret or tilapia)",
      "2 tsp red chilli powder",
      "1 tsp turmeric",
      "2 tsp coriander powder",
      "1 tbsp ginger-garlic paste",
      "Juice of 1 lemon",
      "Salt to taste",
      "Oil for frying",
      "Rice flour for coating"
    ],
    steps: [
      "Clean and pat dry the fish fillets.",
      "Mix all spices, lemon juice, ginger-garlic paste into a paste.",
      "Coat fish thoroughly and marinate for 30 minutes.",
      "Dust lightly with rice flour for extra crispiness.",
      "Heat oil in a pan over medium-high heat.",
      "Fry fish for 4-5 minutes on each side until golden and crispy.",
      "Drain on paper towels. Serve hot with onion rings and chutney."
    ],
    nutrition: { protein: "36g", carbs: "12g", fat: "24g", fiber: "1g" },
    tags: ["non-veg", "fish", "fried", "seafood"]
  },
  {
    id: 8,
    name: "Mutton Sambar",
    category: "nonveg",
    emoji: "🥩",
    image:"https://i.pinimg.com/736x/c1/5e/e7/c15ee7ad169ae2c7641d20d1f47e6128.jpg",
    description: "Rich, hearty lentil stew with slow-cooked mutton, tamarind and robust sambar spices.",
    time: "75 min",
    difficulty: "Hard",
    servings: 6,
    rating: 4.6,
    calories: 480,
    ingredients: [
      "500g mutton, cut into pieces",
      "1 cup toor dal",
      "2 tomatoes",
      "Tamarind (lemon-sized)",
      "3 tbsp sambar powder",
      "1 tsp turmeric",
      "1 sprig curry leaves",
      "1 tsp mustard seeds",
      "2 dried red chillies",
      "Salt to taste"
    ],
    steps: [
      "Pressure cook mutton with salt and turmeric for 6-7 whistles.",
      "Cook toor dal until soft and mushy.",
      "Extract tamarind juice from soaked tamarind.",
      "Combine dal, mutton, tomatoes, tamarind juice in a pot.",
      "Add sambar powder and bring to boil.",
      "Simmer for 20 minutes until flavours meld.",
      "Prepare tempering: hot oil, mustard, curry leaves, red chillies.",
      "Pour tempering over sambar and serve with rice or idli."
    ],
    nutrition: { protein: "42g", carbs: "28g", fat: "20g", fiber: "6g" },
    tags: ["non-veg", "mutton", "sambar", "south indian"]
  },

  // CHAATS
  {
    id: 9,
    name: "Gobi Manchurian",
    category: "chaats",
    emoji: "🥦",
    image: "https://i.pinimg.com/736x/c7/2e/3f/c72e3f5d21925c01cd9454031c052ab5.jpg",
    description: "Crispy cauliflower florets tossed in a tangy, spicy Indo-Chinese sauce — simply addictive.",
    time: "35 min",
    difficulty: "Medium",
    servings: 4,
    rating: 4.8,
    calories: 290,
    ingredients: [
      "1 medium cauliflower, cut in florets",
      "1 cup all-purpose flour",
      "1/4 cup cornstarch",
      "3 tbsp soy sauce",
      "2 tbsp chilli sauce",
      "1 tbsp tomato ketchup",
      "1 tbsp vinegar",
      "1 onion, diced",
      "4 garlic cloves, minced",
      "Spring onions to garnish"
    ],
    steps: [
      "Make batter with flour, cornstarch, salt, pepper and water.",
      "Dip cauliflower in batter and deep fry until golden and crispy.",
      "In a wok, heat oil and sauté garlic and onion.",
      "Add soy sauce, chilli sauce, ketchup and vinegar.",
      "Toss fried cauliflower in the sauce.",
      "Cook on high heat for 2-3 minutes until coated well.",
      "Garnish with spring onions and serve immediately."
    ],
    nutrition: { protein: "8g", carbs: "42g", fat: "12g", fiber: "5g" },
    tags: ["vegetarian", "indo-chinese", "starter", "chaat"]
  },
  {
    id: 10,
    name: "Pani Puri",
    category: "chaats",
    emoji: "🫙",
    image: "https://images.unsplash.com/photo-1586357507341-3fbe59f2a5d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhbmklMjBwdXJpfGVufDB8fDB8fHww",
    description: "India's most beloved street food — crispy puris bursting with tangy, minty, spicy water.",
    time: "20 min",
    difficulty: "Easy",
    servings: 4,
    rating: 5.0,
    calories: 180,
    ingredients: [
      "20 ready-made puris",
      "1 cup boiled mashed potatoes",
      "1 cup boiled black chickpeas",
      "Mint leaves",
      "Coriander leaves",
      "1 tsp roasted cumin",
      "1 tsp chaat masala",
      "Tamarind chutney",
      "Black salt",
      "Green chillies"
    ],
    steps: [
      "Blend mint, coriander, green chillies, cumin into a paste.",
      "Add water, black salt, chaat masala to make pani.",
      "Chill the pani in refrigerator.",
      "Mix potatoes and chickpeas with chaat masala.",
      "Make a small hole in each puri.",
      "Fill with potato-chickpea mixture.",
      "Dip in pani and eat immediately."
    ],
    nutrition: { protein: "5g", carbs: "35g", fat: "4g", fiber: "4g" },
    tags: ["vegetarian", "street food", "chaat", "popular"]
  },
  {
    id: 11,
    name: "Masala Puri",
    category: "chaats",
    emoji: "🍜",
    image: "https://i.pinimg.com/736x/4f/67/46/4f67468cf6e43d553e085f48252955dd.jpg",
    description: "Crispy puris topped with spicy pea gravy, onions, and a medley of savoury chutneys.",
    time: "30 min",
    difficulty: "Medium",
    servings: 4,
    rating: 4.7,
    calories: 250,
    ingredients: [
      "20 small puris",
      "2 cups cooked white peas",
      "1 tomato, chopped",
      "1 onion, chopped",
      "Sev (fine chickpea noodles)",
      "Tamarind chutney",
      "Green chutney",
      "Chaat masala",
      "Coriander leaves"
    ],
    steps: [
      "Make pea gravy by cooking peas with spices until thick.",
      "Crush puris slightly and arrange on a plate.",
      "Pour hot pea gravy over puris.",
      "Top with chopped onions and tomatoes.",
      "Drizzle tamarind and green chutney generously.",
      "Add sev and sprinkle chaat masala.",
      "Garnish with coriander and serve immediately."
    ],
    nutrition: { protein: "9g", carbs: "45g", fat: "8g", fiber: "6g" },
    tags: ["vegetarian", "chaat", "street food"]
  },
  {
    id: 12,
    name: "Baby Corn 65",
    category: "chaats",
    emoji: "🌽",
    image: "https://images.unsplash.com/photo-1602253057119-44d745d9b860?w=400&q=80",
    description: "Tender baby corn fried to perfection in a spicy, tangy batter — a party starter like no other.",
    time: "25 min",
    difficulty: "Easy",
    servings: 4,
    rating: 4.6,
    calories: 220,
    ingredients: [
      "250g baby corn",
      "1/2 cup all-purpose flour",
      "1/4 cup rice flour",
      "1 tsp chilli powder",
      "1 tsp ginger-garlic paste",
      "1 tsp soy sauce",
      "1 tsp vinegar",
      "Curry leaves",
      "Oil for frying"
    ],
    steps: [
      "Blanch baby corn in salted water for 5 minutes.",
      "Make batter with flour, rice flour, chilli, ginger-garlic paste.",
      "Coat baby corn in batter.",
      "Deep fry until crispy and golden.",
      "Heat oil in a pan, add curry leaves and dried chillies.",
      "Toss fried baby corn in this seasoning.",
      "Add soy sauce and vinegar, toss well.",
      "Serve hot with sauce."
    ],
    nutrition: { protein: "6g", carbs: "32g", fat: "10g", fiber: "3g" },
    tags: ["vegetarian", "starter", "crispy", "indo-chinese"]
  },

  // JUICES
  {
    id: 13,
    name: "Fresh Apple Juice",
    category: "juices",
    emoji: "🍎",
    image: "https://images.unsplash.com/photo-1605199910378-edb0c0709ab4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Cold-pressed, pure apple juice packed with natural sweetness and antioxidants.",
    time: "10 min",
    difficulty: "Easy",
    servings: 2,
    rating: 4.6,
    calories: 120,
    ingredients: [
      "4 medium apples",
      "1 tsp lemon juice",
      "Ice cubes",
      "Pinch of black salt (optional)",
      "Mint for garnish"
    ],
    steps: [
      "Wash and core apples. Cut into chunks.",
      "Blend with a little water until smooth.",
      "Strain through a fine sieve or cheesecloth.",
      "Add lemon juice and black salt.",
      "Pour over ice and garnish with mint."
    ],
    nutrition: { protein: "1g", carbs: "28g", fat: "0g", fiber: "0g" },
    tags: ["juice", "healthy", "fresh", "breakfast"]
  },
  {
    id: 14,
    name: "Orange Juice",
    category: "juices",
    emoji: "🍊",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&q=80",
    description: "Freshly squeezed orange juice bursting with Vitamin C and tropical sunshine flavour.",
    time: "5 min",
    difficulty: "Easy",
    servings: 2,
    rating: 4.7,
    calories: 110,
    ingredients: [
      "6 oranges",
      "Ice cubes",
      "Pinch of sugar (optional)",
      "Salt pinch",
      "Mint leaves"
    ],
    steps: [
      "Halve the oranges and squeeze using a juicer.",
      "Strain to remove seeds and pulp if desired.",
      "Add sugar and salt.",
      "Pour over ice cubes.",
      "Garnish with mint and serve immediately."
    ],
    nutrition: { protein: "2g", carbs: "26g", fat: "0g", fiber: "0g" },
    tags: ["juice", "vitamin c", "breakfast", "fresh"]
  },
  {
    id: 15,
    name: "Ragi Malt",
    category: "juices",
    emoji: "🥛",
    image: "https://i.pinimg.com/736x/d5/0a/6c/d50a6c0e79a28c000e69c7e3cbe31510.jpg",
    description: "A traditional South Indian health drink made with ragi flour, a powerhouse of iron and calcium.",
    time: "15 min",
    difficulty: "Easy",
    servings: 2,
    rating: 4.5,
    calories: 200,
    ingredients: [
      "3 tbsp ragi (finger millet) flour",
      "2 cups milk or water",
      "2 tbsp jaggery",
      "1/4 tsp cardamom powder",
      "Pinch of salt"
    ],
    steps: [
      "Mix ragi flour in a little cold water to make smooth paste.",
      "Boil 2 cups of milk/water.",
      "Slowly add ragi paste, stirring continuously.",
      "Cook on medium heat for 8-10 minutes.",
      "Add jaggery and cardamom, stir until dissolved.",
      "Serve warm or chilled."
    ],
    nutrition: { protein: "7g", carbs: "42g", fat: "4g", fiber: "3g" },
    tags: ["healthy", "traditional", "iron-rich", "south indian"]
  },
  {
    id: 16,
    name: "Lemon Ginger Juice",
    category: "juices",
    emoji: "🍋",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80",
    description: "Zesty, refreshing lemon juice with a fiery ginger kick — nature's best detox drink.",
    time: "5 min",
    difficulty: "Easy",
    servings: 2,
    rating: 4.6,
    calories: 60,
    ingredients: [
      "3 lemons",
      "1 inch ginger",
      "2 cups water",
      "2 tsp honey",
      "Pinch of black salt",
      "Ice and mint to serve"
    ],
    steps: [
      "Juice the lemons.",
      "Grate or juice the ginger.",
      "Mix lemon juice, ginger juice, honey in water.",
      "Add black salt and stir well.",
      "Pour over ice and garnish with mint.",
      "Serve immediately."
    ],
    nutrition: { protein: "0g", carbs: "15g", fat: "0g", fiber: "0g" },
    tags: ["detox", "healthy", "immunity", "fresh"]
  },

  // SNACKS
  {
    id: 17,
    name: "Mirchi Bajji",
    category: "snacks",
    emoji: "🌶️",
    image: "https://i.pinimg.com/736x/c5/ae/45/c5ae4517a0287ff03d340277addbf6cb.jpg",
    description: "Large green chillies stuffed with spiced potato, dipped in gram flour batter and fried golden.",
    time: "30 min",
    difficulty: "Medium",
    servings: 4,
    rating: 4.8,
    calories: 260,
    ingredients: [
      "8 large green chillies (mild variety)",
      "1 cup gram flour (besan)",
      "1/2 tsp red chilli powder",
      "1/2 tsp turmeric",
      "1/2 tsp ajwain (carom seeds)",
      "Salt to taste",
      "Oil for frying",
      "Stuffing: mashed potato, chaat masala, lemon"
    ],
    steps: [
      "Slit chillies lengthwise, remove seeds if too spicy.",
      "Fill with seasoned mashed potato stuffing.",
      "Make batter with besan, spices, and water.",
      "Dip filled chillies in batter.",
      "Deep fry in hot oil until golden and crispy.",
      "Drain and serve hot with coconut chutney."
    ],
    nutrition: { protein: "7g", carbs: "30g", fat: "14g", fiber: "3g" },
    tags: ["snack", "street food", "fried", "spicy"]
  },
  {
    id: 18,
    name: "Aloo Bonda",
    category: "snacks",
    emoji: "⚽",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
    description: "Golden besan-coated potato dumplings, crispy outside and pillowy soft inside.",
    time: "30 min",
    difficulty: "Easy",
    servings: 4,
    rating: 4.6,
    calories: 240,
    ingredients: [
      "3 potatoes, boiled and mashed",
      "1 cup gram flour",
      "1 tsp mustard seeds",
      "Curry leaves",
      "2 green chillies",
      "1/2 tsp turmeric",
      "Salt to taste",
      "Oil for frying"
    ],
    steps: [
      "Season mashed potatoes with mustard, curry leaves, chillies and turmeric.",
      "Roll into equal-sized balls.",
      "Make a thick batter with besan and spices.",
      "Dip potato balls in batter.",
      "Deep fry in hot oil until golden.",
      "Serve hot with green chutney."
    ],
    nutrition: { protein: "8g", carbs: "35g", fat: "12g", fiber: "4g" },
    tags: ["snack", "south indian", "fried"]
  },
  {
    id: 19,
    name: "Chakli",
    category: "snacks",
    emoji: "🌀",
    image: "https://i.pinimg.com/1200x/b6/05/a2/b605a29b3f78f6f8c0efa8f5cde0a272.jpg",
    description: "Traditional crunchy spiral-shaped savoury snack, made from rice flour and spiced to perfection.",
    time: "60 min",
    difficulty: "Hard",
    servings: 6,
    rating: 4.5,
    calories: 180,
    ingredients: [
      "2 cups rice flour",
      "1/4 cup urad dal flour",
      "1 tsp sesame seeds",
      "1 tsp cumin",
      "1 tsp red chilli powder",
      "2 tbsp butter",
      "Salt to taste",
      "Water to knead"
    ],
    steps: [
      "Mix rice flour, urad dal flour with spices and sesame.",
      "Add butter and rub into flour.",
      "Add water gradually and knead into stiff dough.",
      "Fill chakli maker with dough and press into spirals.",
      "Deep fry on medium heat until golden and crispy.",
      "Cool completely before storing in airtight container."
    ],
    nutrition: { protein: "5g", carbs: "28g", fat: "9g", fiber: "2g" },
    tags: ["snack", "traditional", "festive", "crunchy"]
  },
  {
    id: 20,
    name: "Masala Chips",
    category: "snacks",
    emoji: "🍟",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&q=80",
    description: "Wafer-thin potato crisps seasoned with chaat masala, chilli and lime — dangerously addictive.",
    time: "20 min",
    difficulty: "Easy",
    servings: 4,
    rating: 4.7,
    calories: 200,
    ingredients: [
      "3 large potatoes",
      "1 tsp chaat masala",
      "1/2 tsp red chilli powder",
      "Juice of 1 lime",
      "Salt to taste",
      "Oil for frying"
    ],
    steps: [
      "Slice potatoes paper-thin using a mandoline slicer.",
      "Soak in cold water for 15 minutes, drain and dry thoroughly.",
      "Deep fry in hot oil in small batches until golden and crispy.",
      "Drain on paper towels.",
      "While hot, sprinkle with chaat masala, chilli and lime juice.",
      "Toss and serve immediately."
    ],
    nutrition: { protein: "3g", carbs: "25g", fat: "11g", fiber: "2g" },
    tags: ["snack", "crispy", "spicy", "popular"]
  },
  // FAST FOOD
{
  id: 21,
  name: "Cheese Burger",
  category: "fastfood",
  emoji: "🍔",
  image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80",
  description: "Juicy grilled burger loaded with cheese, lettuce and smoky sauces.",
  time: "20 min",
  difficulty: "Easy",
  servings: 2,
  rating: 4.8,
  calories: 540,
  ingredients: [
    "Burger buns",
    "Chicken/veg patty",
    "Cheese slices",
    "Lettuce",
    "Tomato",
    "Mayonnaise",
    "Ketchup"
  ],
  steps: [
    "Toast burger buns.",
    "Cook patties until golden.",
    "Add cheese slice on top.",
    "Assemble with veggies and sauces.",
    "Serve hot with fries."
  ],
  nutrition: { protein: "22g", carbs: "42g", fat: "28g", fiber: "3g" },
  tags: ["fastfood", "burger", "cheesy"]
},

{
  id: 22,
  name: "Pepperoni Pizza",
  category: "fastfood",
  emoji: "🍕",
  image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
  description: "Crispy crust pizza topped with cheese and spicy pepperoni.",
  time: "35 min",
  difficulty: "Medium",
  servings: 4,
  rating: 4.9,
  calories: 620,
  ingredients: [
    "Pizza dough",
    "Pizza sauce",
    "Mozzarella cheese",
    "Pepperoni",
    "Olives"
  ],
  steps: [
    "Spread sauce on pizza base.",
    "Add cheese and toppings.",
    "Bake at 220°C for 15 minutes.",
    "Slice and serve hot."
  ],
  nutrition: { protein: "24g", carbs: "58g", fat: "30g", fiber: "4g" },
  tags: ["pizza", "fastfood", "cheese"]
},
{
  id: 23,
  name: "Hakka Noodles",
  category: "fastfood",
  emoji: "🍜",
  image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500&q=80",
  description: "Spicy Indo-Chinese noodles tossed with vegetables and sauces.",
  time: "20 min",
  difficulty: "Easy",
  servings: 2,
  rating: 4.8,
  calories: 430,
  ingredients: [
    "200g noodles",
    "Capsicum",
    "Carrot",
    "Soy sauce",
    "Chilli sauce",
    "Garlic"
  ],
  steps: [
    "Boil noodles and drain.",
    "Stir fry garlic and vegetables.",
    "Add sauces and noodles.",
    "Toss on high flame and serve hot."
  ],
  nutrition: { protein: "9g", carbs: "62g", fat: "14g", fiber: "4g" },
  tags: ["fastfood", "noodles", "indo-chinese"]
},
{
  id: 35,
  name: "Masala Maggi",
  category: "fastfood",
  emoji: "🍜",
  image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=500&q=80",
  description: "India’s favorite instant noodles cooked with spicy masala and veggies.",
  time: "8 min",
  difficulty: "Easy",
  servings: 1,
  rating: 4.9,
  calories: 350,
  ingredients: [
    "1 packet Maggi noodles",
    "Maggi tastemaker",
    "Onion",
    "Tomato",
    "Capsicum",
    "Green chilli",
    "Water"
  ],
  steps: [
    "Boil water in a pan.",
    "Add chopped vegetables and cook for 2 minutes.",
    "Add Maggi noodles and tastemaker.",
    "Cook for 3-4 minutes until soft.",
    "Serve hot with chilli flakes."
  ],
  nutrition: { protein: "8g", carbs: "48g", fat: "14g", fiber: "3g" },
  tags: ["maggi", "fastfood", "instant noodles"]
},

// DIET / BREAKFAST - Egg Omelette
{
  id: 24,
  name: "Egg Omelette",
  category: "diet",
  emoji: "🍳",
  image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=500&q=80",
  description: "Fluffy protein-rich egg omelette with onions and herbs.",
  time: "10 min",
  difficulty: "Easy",
  servings: 1,
  rating: 4.7,
  calories: 190,
  ingredients: [
    "2 eggs",
    "Onion",
    "Green chilli",
    "Coriander",
    "Salt",
    "Pepper"
  ],
  steps: [
    "Beat eggs with spices.",
    "Add chopped onions and herbs.",
    "Pour into hot pan.",
    "Cook both sides until golden."
  ],
  nutrition: { protein: "13g", carbs: "3g", fat: "14g", fiber: "1g" },
  tags: ["diet", "egg", "protein", "breakfast"]
},

// FRUITS
{
  id: 25,
  name: "Fruit Salad",
  category: "fruits",
  emoji: "🍓",
  image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=500&q=80",
  description: "Fresh mixed fruits tossed with honey and mint.",
  time: "10 min",
  difficulty: "Easy",
  servings: 2,
  rating: 4.7,
  calories: 160,
  ingredients: [
    "Apple",
    "Banana",
    "Watermelon",
    "Grapes",
    "Honey",
    "Mint leaves"
  ],
  steps: [
    "Chop all fruits evenly.",
    "Mix in a large bowl.",
    "Drizzle honey.",
    "Garnish with mint and serve chilled."
  ],
  nutrition: { protein: "2g", carbs: "38g", fat: "1g", fiber: "5g" },
  tags: ["healthy", "fruits", "fresh"]
},

{
  id: 26,
  name: "Mango Bowl",
  category: "fruits",
  emoji: "🥭",
  image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&q=80",
  description: "Sweet ripe mango cubes served chilled with nuts and mint.",
  time: "8 min",
  difficulty: "Easy",
  servings: 2,
  rating: 4.8,
  calories: 190,
  ingredients: [
    "2 ripe mangoes",
    "Honey",
    "Almonds",
    "Mint"
  ],
  steps: [
    "Cut mangoes into cubes.",
    "Top with honey and almonds.",
    "Serve chilled."
  ],
  nutrition: { protein: "3g", carbs: "42g", fat: "4g", fiber: "4g" },
  tags: ["mango", "fruits", "summer"]
},
{
  id: 28,
  name: "Berry Bowl",
  category: "fruits",
  emoji: "🫐",
  image: "https://images.unsplash.com/photo-1564093497595-593b96d80180?w=500&q=80",
  description: "Fresh berries packed with antioxidants and sweetness.",
  time: "5 min",
  difficulty: "Easy",
  servings: 2,
  rating: 4.8,
  calories: 130,
  ingredients: ["Blueberries", "Strawberries", "Honey"],
  steps: [
    "Wash berries.",
    "Mix in bowl.",
    "Add honey.",
    "Serve chilled."
  ],
  nutrition: { protein: "2g", carbs: "24g", fat: "1g", fiber: "5g" },
  tags: ["fruits", "healthy"]
},

{
  id: 29,
  name: "Watermelon Plate",
  category: "fruits",
  emoji: "🍉",
  image: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=500&q=80",
  description: "Refreshing chilled watermelon slices for summer.",
  time: "5 min",
  difficulty: "Easy",
  servings: 3,
  rating: 4.7,
  calories: 90,
  ingredients: ["Watermelon", "Mint leaves"],
  steps: [
    "Cut watermelon.",
    "Arrange on plate.",
    "Serve chilled."
  ],
  nutrition: { protein: "1g", carbs: "22g", fat: "0g", fiber: "2g" },
  tags: ["fruits", "summer"]
},

// DIET FOODS
{
  id: 25,
  name: "Avocado Salad",
  category: "diet",
  emoji: "🥑",
  image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&q=80",
  description: "Healthy avocado salad packed with nutrients and freshness.",
  time: "12 min",
  difficulty: "Easy",
  servings: 2,
  rating: 4.8,
  calories: 220,
  ingredients: [
    "Avocado",
    "Lettuce",
    "Cucumber",
    "Olive oil",
    "Lemon juice"
  ],
  steps: [
    "Chop vegetables.",
    "Mix in bowl.",
    "Add olive oil and lemon dressing.",
    "Serve fresh."
  ],
  nutrition: { protein: "4g", carbs: "12g", fat: "16g", fiber: "7g" },
  tags: ["diet", "healthy", "salad"]
},

{
  id: 30,
  name: "Oats Bowl",
  category: "diet",
  emoji: "🥣",
  image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=500&q=80",
  description: "Protein-rich oats bowl with fruits and nuts for a healthy breakfast.",
  time: "10 min",
  difficulty: "Easy",
  servings: 1,
  rating: 4.7,
  calories: 250,
  ingredients: [
    "Oats",
    "Milk",
    "Banana",
    "Almonds",
    "Honey"
  ],
  steps: [
    "Cook oats in milk.",
    "Top with banana and nuts.",
    "Add honey and serve warm."
  ],
  nutrition: { protein: "8g", carbs: "38g", fat: "7g", fiber: "6g" },
  tags: ["diet", "breakfast", "healthy"]
},
{
  id: 31,
  name: "Grilled Chicken Salad",
  category: "diet",
  emoji: "🥗",
  image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&q=80",
  description: "Protein-rich grilled chicken served with fresh greens.",
  time: "25 min",
  difficulty: "Medium",
  servings: 2,
  rating: 4.9,
  calories: 280,
  ingredients: ["Chicken breast", "Lettuce", "Olive oil", "Pepper"],
  steps: [
    "Grill chicken.",
    "Prepare salad greens.",
    "Slice chicken and mix.",
    "Serve fresh."
  ],
  nutrition: { protein: "32g", carbs: "10g", fat: "12g", fiber: "4g" },
  tags: ["diet", "protein"]
},

{
  id: 32,
  name: "Smoothie Bowl",
  category: "diet",
  emoji: "🍌",
  image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=500&q=80",
  description: "Healthy smoothie bowl topped with fruits and seeds.",
  time: "10 min",
  difficulty: "Easy",
  servings: 1,
  rating: 4.8,
  calories: 210,
  ingredients: ["Banana", "Milk", "Chia seeds", "Berries"],
  steps: [
    "Blend banana and milk.",
    "Pour into bowl.",
    "Top with fruits and seeds.",
    "Serve cold."
  ],
  nutrition: { protein: "6g", carbs: "32g", fat: "5g", fiber: "6g" },
  tags: ["diet", "smoothie"]
},
];

// export const features = [
//   // { icon: "🚀", title: "Fast Delivery", desc: "Lightning-fast delivery straight to your door in under 30 minutes." },
//   // { icon: "🌿", title: "Fresh Ingredients", desc: "Hand-picked, farm-fresh ingredients sourced daily for superior taste." },
//   { icon: "💚", title: "Healthy Recipes", desc: "Nutritionist-crafted recipes that nourish and delight every meal." },
//   // { icon: "📱", title: "Easy Ordering", desc: "Order in seconds from your phone — simple, fast, seamless." },
//   { icon: "⭐", title: "Premium Taste", desc: "Chef-curated recipes delivering restaurant-quality taste at home." },
//   { icon: "🏆", title: "Best Quality", desc: "Award-winning recipes with guaranteed quality in every bite." },
// ];
export const features = [
  {
    icon: "💚",
    title: "Healthy Recipes",
    desc: "Nutritionist-crafted recipes that nourish and delight every meal."
  },

  {
    icon: "🍳",
    title: "Step-by-Step Cooking",
    desc: "Easy cooking instructions that help beginners and chefs create perfect dishes."
  },

  {
    icon: "🔍",
    title: "Smart Recipe Search",
    desc: "Quickly discover recipes by ingredients, categories, taste, or cooking style."
  },

  {
    icon: "📖",
    title: "Detailed Recipe Guide",
    desc: "Complete ingredient lists, cooking time, nutrition info, and preparation tips."
  },

  {
    icon: "⭐",
    title: "Premium Taste",
    desc: "Chef-curated recipes delivering restaurant-quality taste at home."
  },

  {
    icon: "🏆",
    title: "Best Quality",
    desc: "Award-winning recipes with guaranteed quality in every bite."
  },
];