const storyData = [
  {
    type: "line",
    text: "Level 1 – The Match: A swipe to the right. Fate takes its course.",
    image1: "/images/Level 1/level1_1.jpeg",
    image2: "/images/Level 1/level1_2.jpeg",
    background: "phone",
    objects: [
      { id: 1, emoji: "📱", x: 20, y: 30, animation: "bounce" },
      { id: 2, emoji: "💕", x: 70, y: 40, animation: "pulse" },
      { id: 3, emoji: "✨", x: 50, y: 70, animation: "spin" },
      { id: 4, emoji: "💖", x: 85, y: 20, animation: "float" },
      { id: 5, emoji: "🌟", x: 15, y: 60, animation: "pulse" }
    ]
  },
  {
    type: "choice",
    text: "Shivam, do you want to swipe Mansi to the right?",
    a: "Yes, definitely! 💕",
    b: "Hmm, let's wait and see 🤔",
    background: "phone",
    objects: [
      { id: 1, emoji: "💘", x: 25, y: 25, animation: "float" },
      { id: 2, emoji: "❤️", x: 75, y: 30, animation: "pulse" },
      { id: 3, emoji: "💕", x: 50, y: 80, animation: "bounce" }
    ],
    next_a: "match_yes_1",
    next_b: "match_no_1"
  },
  {
    id: "match_yes_1",
    type: "line",
    text: "It's a match! Butterflies flutter wildly. ✨",
    background: "phone",
    objects: [
      { id: 1, emoji: "🦋", x: 30, y: 40, animation: "float" },
      { id: 2, emoji: "💖", x: 70, y: 35, animation: "pulse" },
      { id: 3, emoji: "✨", x: 50, y: 65, animation: "spin" },
      { id: 4, emoji: "🦋", x: 20, y: 70, animation: "float" },
      { id: 5, emoji: "💫", x: 80, y: 55, animation: "spin" }
    ]
  },
  {
    id: "match_no_1",
    type: "line",
    text: "But the heart says: give him a chance! So… a swipe to the right after all. ❤️",
    background: "phone",
    objects: [
      { id: 1, emoji: "❤️", x: 50, y: 50, animation: "pulse" },
      { id: 2, emoji: "😊", x: 30, y: 60, animation: "bounce" },
      { id: 3, emoji: "💭", x: 70, y: 40, animation: "float" }
    ]
  },
  {
    type: "polaroid",
    caption: "Mansi — Fashion + glitter ✨",
    emoji: "/images/Level 1/level1_1.jpeg",
    background: "fashion",
    objects: [
      { id: 1, emoji: "💄", x: 15, y: 80, animation: "bounce" },
      { id: 2, emoji: "👠", x: 85, y: 75, animation: "shake" },
      { id: 3, emoji: "✨", x: 50, y: 20, animation: "spin" },
      { id: 4, emoji: "👜", x: 25, y: 30, animation: "bounce" }
    ]
  },
  {
    type: "polaroid",
    caption: "Shivam — pharma king + smile 😊",
    emoji: "/images/Level 1/level1_2.jpeg",
    background: "office",
    objects: [
      { id: 1, emoji: "⚗️", x: 20, y: 85, animation: "bounce" },
      { id: 2, emoji: "🎓", x: 80, y: 80, animation: "spin" },
      { id: 3, emoji: "📚", x: 30, y: 25, animation: "bounce" },
      { id: 4, emoji: "💼", x: 75, y: 30, animation: "shake" }
    ]
  },
  {
    type: "line",
    text: "Level 2 – Lockdown Love: long calls, late-night confessions.",
    image1: "/images/image15.jpeg",
    image2: "/images/image12.jpeg",
    background: "home",
    objects: [
      { id: 1, emoji: "☎️", x: 30, y: 40, animation: "shake" },
      { id: 2, emoji: "🌙", x: 70, y: 25, animation: "pulse" },
      { id: 3, emoji: "💭", x: 50, y: 65, animation: "float" },
      { id: 4, emoji: "⭐", x: 85, y: 35, animation: "pulse" },
      { id: 5, emoji: "💫", x: 20, y: 70, animation: "spin" }
    ]
  },
  {
    type: "choice",
    text: "It's 2 a.m. One more call?",
    a: "Yes, all night! 🌙",
    b: "Let's continue tomorrow 😴",
    background: "night",
    objects: [
      { id: 1, emoji: "🌙", x: 30, y: 20, animation: "pulse" },
      { id: 2, emoji: "⭐", x: 70, y: 25, animation: "pulse" },
      { id: 3, emoji: "💫", x: 50, y: 85, animation: "spin" },
      { id: 4, emoji: "✨", x: 20, y: 60, animation: "float" }
    ],
    next_a: "call_yes",
    next_b: "call_no"
  },
  {
    id: "call_yes",
    type: "line",
    text: "Hours of talking until sunrise. That's how deep bonds begin. 💫",
    background: "night",
    objects: [
      { id: 1, emoji: "💫", x: 40, y: 35, animation: "spin" },
      { id: 2, emoji: "🌅", x: 60, y: 40, animation: "pulse" },
      { id: 3, emoji: "☕", x: 25, y: 65, animation: "bounce" },
      { id: 4, emoji: "💕", x: 75, y: 70, animation: "pulse" }
    ]
  },
  {
    id: "call_no",
    type: "line",
    text: "A sweet “good night” and excitement for tomorrow. ✨",
    background: "night",
    objects: [
      { id: 1, emoji: "😴", x: 50, y: 50, animation: "pulse" },
      { id: 2, emoji: "💭", x: 35, y: 60, animation: "float" },
      { id: 3, emoji: "🌙", x: 70, y: 30, animation: "pulse" },
      { id: 4, emoji: "✨", x: 30, y: 75, animation: "spin" }
    ]
  },
  {
    type: "line",
    text: "Level 3 – First meet at Soul Garden — fairy lights and butterflies.",
    image1: "/images/Level 3/level3_1.jpeg",
    background: "garden",
    objects: [
      { id: 1, emoji: "🦋", x: 25, y: 30, animation: "float" },
      { id: 2, emoji: "💡", x: 75, y: 35, animation: "pulse" },
      { id: 3, emoji: "🌸", x: 50, y: 70, animation: "bounce" },
      { id: 4, emoji: "✨", x: 60, y: 45, animation: "spin" },
      { id: 5, emoji: "🦋", x: 85, y: 60, animation: "float" },
      { id: 6, emoji: "🌺", x: 20, y: 65, animation: "bounce" }
    ]
  },
  {
    type: "choice",
    text: "Shivam wants to hold your hand. What do you do?",
    a: "Hold hands 🤝💕",
    b: "Wait a little longer 😊",
    background: "garden",
    objects: [
      { id: 1, emoji: "🦋", x: 30, y: 25, animation: "float" },
      { id: 2, emoji: "💐", x: 70, y: 30, animation: "bounce" },
      { id: 3, emoji: "💕", x: 50, y: 80, animation: "pulse" },
      { id: 4, emoji: "🌸", x: 20, y: 70, animation: "float" }
    ],
    next_a: "hand_yes",
    next_b: "hand_no"
  },
  {
    id: "hand_yes",
    type: "line",
    text: "The first touch. Electric. Magical. Unforgettable. ⚡💕",
    background: "garden",
    objects: [
      { id: 1, emoji: "⚡", x: 50, y: 40, animation: "pulse" },
      { id: 2, emoji: "💕", x: 35, y: 55, animation: "pulse" },
      { id: 3, emoji: "💕", x: 65, y: 55, animation: "pulse" },
      { id: 4, emoji: "✨", x: 25, y: 70, animation: "spin" },
      { id: 5, emoji: "✨", x: 75, y: 70, animation: "spin" }
    ]
  },
  {
    id: "hand_no",
    type: "line",
    text: "A shy smile. Some moments need time. 😊",
    background: "garden",
    objects: [
      { id: 1, emoji: "😊", x: 50, y: 50, animation: "bounce" },
      { id: 2, emoji: "🌸", x: 35, y: 60, animation: "float" },
      { id: 3, emoji: "💭", x: 65, y: 40, animation: "float" }
    ]
  },
  {
    type: "polaroid",
    caption: "Soul Garden — the first spark 💫",
    emoji: "/images/image2.jpeg",
    background: "garden",
    objects: [
      { id: 1, emoji: "🕯️", x: 20, y: 80, animation: "pulse" },
      { id: 2, emoji: "💐", x: 80, y: 75, animation: "bounce" },
      { id: 3, emoji: "🦋", x: 50, y: 20, animation: "float" },
      { id: 4, emoji: "✨", x: 30, y: 35, animation: "spin" }
    ]
  },
  {
    type: "line",
    text: "Level 4 – Theog trip with friends — campfire and new bonds.",
    image1: "/images/Level 4/level4_1.jpeg",
    image2: "/images/Level 4/level4_2.jpeg",
    background: "mountains",
    objects: [
      { id: 1, emoji: "🔥", x: 50, y: 60, animation: "pulse" },
      { id: 2, emoji: "🏕️", x: 30, y: 45, animation: "bounce" },
      { id: 3, emoji: "🌲", x: 70, y: 40, animation: "shake" },
      { id: 4, emoji: "🌲", x: 20, y: 70, animation: "shake" },
      { id: 5, emoji: "⭐", x: 60, y: 25, animation: "pulse" }
    ]
  },
  {
    type: "choice",
    text: "At the campfire Shivam asks: “Can I sit next to you?”",
    a: "Of course! 🔥❤️",
    b: "Let's all sit together 👥",
    background: "mountains",
    objects: [
      { id: 1, emoji: "🔥", x: 50, y: 75, animation: "pulse" },
      { id: 2, emoji: "🌲", x: 25, y: 40, animation: "shake" },
      { id: 3, emoji: "🌲", x: 75, y: 35, animation: "shake" },
      { id: 4, emoji: "⭐", x: 45, y: 20, animation: "pulse" }
    ],
    next_a: "fire_close",
    next_b: "fire_group"
  },
  {
    id: "fire_close",
    type: "line",
    text: "Under the stars, side by side. The world fades away. 🌟",
    background: "mountains",
    objects: [
      { id: 1, emoji: "🌟", x: 40, y: 25, animation: "pulse" },
      { id: 2, emoji: "💑", x: 50, y: 55, animation: "pulse" },
      { id: 3, emoji: "🔥", x: 50, y: 75, animation: "pulse" },
      { id: 4, emoji: "✨", x: 30, y: 35, animation: "spin" },
      { id: 5, emoji: "✨", x: 70, y: 30, animation: "spin" }
    ]
  },
  {
    id: "fire_group",
    type: "line",
    text: "Laughing with friends. Secret glances. The heart knows. 😊",
    background: "mountains",
    objects: [
      { id: 1, emoji: "👥", x: 50, y: 50, animation: "bounce" },
      { id: 2, emoji: "😊", x: 35, y: 35, animation: "pulse" },
      { id: 3, emoji: "😊", x: 65, y: 35, animation: "pulse" },
      { id: 4, emoji: "🔥", x: 50, y: 75, animation: "pulse" }
    ]
  },
  {
    type: "polaroid",
    caption: "Theog — mountains + friends 🏔️",
    emoji: "/images/Level 4/level4_1.jpeg",
    background: "mountains",
    objects: [
      { id: 1, emoji: "🎒", x: 25, y: 75, animation: "shake" },
      { id: 2, emoji: "📸", x: 75, y: 80, animation: "bounce" },
      { id: 3, emoji: "🌲", x: 30, y: 30, animation: "shake" },
      { id: 4, emoji: "⛰️", x: 70, y: 25, animation: "pulse" }
    ]
  },
  {
    type: "line",
    text: "Level 5 – Road trips & crates of beer.",
    image1: "/images/Level 3/level3_1.jpeg",
    background: "road",
    objects: [
      { id: 1, emoji: "🚗", x: 40, y: 50, animation: "shake" },
      { id: 2, emoji: "🍺", x: 65, y: 55, animation: "bounce" },
      { id: 3, emoji: "🎵", x: 50, y: 30, animation: "float" },
      { id: 4, emoji: "🛣️", x: 25, y: 70, animation: "shake" },
      { id: 5, emoji: "☀️", x: 75, y: 25, animation: "pulse" }
    ]
  },
  {
    type: "minigame",
    minigame: "beerclink",
    text: "Clink the beers!",
    background: "bar"
  },
  {
    type: "choice",
    text: "Which drink for tonight?",
    a: "Beer 🍺",
    b: "Wine 🍷",
    background: "bar",
    objects: [
      { id: 1, emoji: "🍺", x: 30, y: 45, animation: "bounce" },
      { id: 2, emoji: "🍷", x: 70, y: 45, animation: "bounce" },
      { id: 3, emoji: "🎉", x: 50, y: 75, animation: "spin" },
      { id: 4, emoji: "✨", x: 25, y: 65, animation: "float" }
    ],
    set_flag_a: "drink",
    set_value_a: "beer",
    set_flag_b: "drink",
    set_value_b: "wine"
  },
  {
    type: "line",
    text: "Level 6 – Jaipur night — moonlight and candles.",
    image1: "/images/Level 6/level6_1.jpeg",
    image2: "/images/Level 6/level6_2.jpeg",
    background: "night",
    objects: [
      { id: 1, emoji: "🌙", x: 30, y: 25, animation: "pulse" },
      { id: 2, emoji: "🕯️", x: 50, y: 60, animation: "pulse" },
      { id: 3, emoji: "✨", x: 70, y: 40, animation: "spin" },
      { id: 4, emoji: "⭐", x: 25, y: 50, animation: "pulse" },
      { id: 5, emoji: "💫", x: 75, y: 65, animation: "spin" }
    ]
  },
  {
    type: "choice",
    text: "Under the full moon: he says “I love you” — do you say it back?",
    a: "I love you too! 💖",
    b: "Show it with a kiss 😘",
    background: "night",
    objects: [
      { id: 1, emoji: "🌙", x: 50, y: 20, animation: "pulse" },
      { id: 2, emoji: "💖", x: 35, y: 70, animation: "pulse" },
      { id: 3, emoji: "💖", x: 65, y: 70, animation: "pulse" },
      { id: 4, emoji: "⭐", x: 30, y: 35, animation: "pulse" },
      { id: 5, emoji: "⭐", x: 70, y: 30, animation: "pulse" }
    ],
    next_a: "love_words",
    next_b: "love_kiss"
  },
  {
    id: "love_words",
    type: "line",
    text: "The three magic words. Stored forever in the heart. 💖",
    background: "night",
    objects: [
      { id: 1, emoji: "💖", x: 50, y: 40, animation: "pulse" },
      { id: 2, emoji: "✨", x: 35, y: 55, animation: "spin" },
      { id: 3, emoji: "✨", x: 65, y: 55, animation: "spin" },
      { id: 4, emoji: "🌙", x: 50, y: 20, animation: "pulse" }
    ]
  },
  {
    id: "love_kiss",
    type: "line",
    text: "A kiss under the moonlight. A thousand words in one moment. 💋🌙",
    background: "night",
    objects: [
      { id: 1, emoji: "💋", x: 50, y: 45, animation: "pulse" },
      { id: 2, emoji: "🌙", x: 70, y: 30, animation: "pulse" },
      { id: 3, emoji: "💫", x: 30, y: 35, animation: "spin" },
      { id: 4, emoji: "✨", x: 50, y: 70, animation: "float" }
    ]
  },
  {
    type: "minigame",
    minigame: "candlelight",
    text: "Light all the candles!",
    background: "night"
  },
  {
    type: "line",
    text: "Level 7 – 35 km love — three drives a week.",
    background: "road",
    objects: [
      { id: 1, emoji: "🛣️", x: 35, y: 50, animation: "shake" },
      { id: 2, emoji: "❤️", x: 65, y: 50, animation: "pulse" },
      { id: 3, emoji: "🚙", x: 50, y: 35, animation: "bounce" },
      { id: 4, emoji: "💨", x: 70, y: 40, animation: "float" }
    ]
  },
  {
    type: "minigame",
    minigame: "pickleball",
    text: "Pickleball rally!",
    background: "sports"
  },
  {
    type: "line",
    text: "Level 8 – Netflix Party — apart, yet together.",
    image1: "/images/Level 8/level8_1.jpeg",
    background: "home",
    objects: [
      { id: 1, emoji: "📺", x: 50, y: 45, animation: "pulse" },
      { id: 2, emoji: "🍿", x: 30, y: 65, animation: "bounce" },
      { id: 3, emoji: "💑", x: 70, y: 60, animation: "pulse" },
      { id: 4, emoji: "🎬", x: 25, y: 35, animation: "bounce" }
    ]
  },
  {
    type: "line",
    text: "Level 9 – Phuket paradise — beaches and the police-station story.",
    image1: "/images/Level 9/level9_4.jpeg",
    background: "beach",
    objects: [
      { id: 1, emoji: "🏖️", x: 45, y: 55, animation: "float" },
      { id: 2, emoji: "🌊", x: 25, y: 70, animation: "shake" },
      { id: 3, emoji: "🌴", x: 75, y: 45, animation: "bounce" },
      { id: 4, emoji: "☀️", x: 50, y: 25, animation: "pulse" },
      { id: 5, emoji: "🐚", x: 30, y: 80, animation: "bounce" }
    ]
  },
  {
    type: "choice",
    text: "Riding a scooter without a helmet? What does Mansi say?",
    a: "Adventure! Let's go! 🛵💨",
    b: "Safety first! 🪖",
    background: "beach",
    objects: [
      { id: 1, emoji: "🛵", x: 50, y: 50, animation: "shake" },
      { id: 2, emoji: "🌴", x: 25, y: 40, animation: "bounce" },
      { id: 3, emoji: "🌴", x: 75, y: 35, animation: "bounce" },
      { id: 4, emoji: "☀️", x: 50, y: 20, animation: "pulse" }
    ],
    next_a: "scooter_wild",
    next_b: "scooter_safe"
  },
  {
    id: "scooter_wild",
    type: "line",
    text: "Too fast! The police stop you — but hey, a story for life! 😅🚨",
    background: "beach",
    objects: [
      { id: 1, emoji: "🚨", x: 50, y: 40, animation: "pulse" },
      { id: 2, emoji: "😅", x: 35, y: 60, animation: "shake" },
      { id: 3, emoji: "😅", x: 65, y: 60, animation: "shake" },
      { id: 4, emoji: "🛵", x: 50, y: 75, animation: "bounce" }
    ]
  },
  {
    id: "scooter_safe",
    type: "line",
    text: "With helmet and slow. No police — and no wild story! 😊",
    background: "beach",
    objects: [
      { id: 1, emoji: "🪖", x: 50, y: 45, animation: "bounce" },
      { id: 2, emoji: "✅", x: 50, y: 65, animation: "pulse" },
      { id: 3, emoji: "🛵", x: 35, y: 55, animation: "shake" }
    ]
  },
  {
    type: "polaroid",
    caption: "Scooter too fast 😅",
    emoji: "/images/Level 9/level9_2.jpeg",
    background: "beach",
    objects: [
      { id: 1, emoji: "🚨", x: 20, y: 80, animation: "pulse" },
      { id: 2, emoji: "😅", x: 80, y: 75, animation: "shake" },
      { id: 3, emoji: "🌴", x: 50, y: 25, animation: "bounce" }
    ]
  },
  {
    type: "line",
    text: "Level 10 – Foodie soulmates — biryani, naan, pizza, golgappa.",
    image1: "/images/image5.jpeg",
    background: "restaurant",
    objects: [
      { id: 1, emoji: "🍕", x: 25, y: 40, animation: "bounce" },
      { id: 2, emoji: "🍛", x: 50, y: 55, animation: "spin" },
      { id: 3, emoji: "🥘", x: 75, y: 45, animation: "bounce" },
      { id: 4, emoji: "🍴", x: 35, y: 70, animation: "shake" },
      { id: 5, emoji: "🥗", x: 65, y: 30, animation: "bounce" }
    ]
  },
  {
    type: "choice",
    text: "What are we eating tonight?",
    a: "Biryani 🍛",
    b: "Pizza 🍕",
    background: "restaurant",
    objects: [
      { id: 1, emoji: "🍛", x: 30, y: 50, animation: "bounce" },
      { id: 2, emoji: "🍕", x: 70, y: 50, animation: "bounce" },
      { id: 3, emoji: "🍴", x: 50, y: 30, animation: "shake" },
      { id: 4, emoji: "❤️", x: 50, y: 75, animation: "pulse" }
    ],
    set_flag_a: "food",
    set_value_a: "biryani",
    set_flag_b: "food",
    set_value_b: "pizza"
  },
  {
    type: "line",
    text: "Level 11 – Move to Gurgaon — ten minutes away feels like home.",
    image1: "/images/image3.jpeg",
    background: "city",
    objects: [
      { id: 1, emoji: "🏠", x: 50, y: 50, animation: "bounce" },
      { id: 2, emoji: "📦", x: 30, y: 65, animation: "shake" },
      { id: 3, emoji: "🔑", x: 70, y: 60, animation: "spin" },
      { id: 4, emoji: "🏢", x: 25, y: 35, animation: "bounce" },
      { id: 5, emoji: "🚚", x: 75, y: 40, animation: "shake" }
    ]
  },
  {
    type: "choice",
    text: "Move in together? Not quite. But Shivam did move closer — just to be near her.",
    a: "Yes! Let's do it! 🏡💕",
    b: "Let's wait a little 🤔",
    background: "city",
    objects: [
      { id: 1, emoji: "🏡", x: 50, y: 50, animation: "pulse" },
      { id: 2, emoji: "💕", x: 35, y: 40, animation: "pulse" },
      { id: 3, emoji: "💕", x: 65, y: 40, animation: "pulse" },
      { id: 4, emoji: "🔑", x: 50, y: 70, animation: "spin" }
    ],
    next_a: "move_together",
    next_b: "move_wait"
  },
  {
    id: "move_together",
    type: "line",
    text: "Not a shared home — but a home closer to her. A new chapter begins. 🔑🏡",
    background: "home", 
    objects: [
      { id: 1, emoji: "🔑", x: 50, y: 40, animation: "spin" },
      { id: 2, emoji: "🏡", x: 50, y: 60, animation: "bounce" },
      { id: 3, emoji: "💕", x: 35, y: 50, animation: "pulse" },
      { id: 4, emoji: "💕", x: 65, y: 50, animation: "pulse" },
      { id: 5, emoji: "✨", x: 30, y: 70, animation: "float" }
    ]
  },
  {
    id: "move_wait",
    type: "line",
    text: "Each in their own place, but only 10 minutes apart. Perfect! 😊",
    background: "city",
    objects: [
      { id: 1, emoji: "🏢", x: 30, y: 50, animation: "bounce" },
      { id: 2, emoji: "❤️", x: 50, y: 45, animation: "pulse" },
      { id: 3, emoji: "🏢", x: 70, y: 50, animation: "bounce" },
      { id: 4, emoji: "🚗", x: 50, y: 70, animation: "shake" }
    ]
  },
  {
    type: "line",
    text: "Level 12 – Beer buddies for life.",
    image1: "/images/Level 12/level12_1.jpeg",
    background: "bar",
    objects: [
      { id: 1, emoji: "🍺", x: 40, y: 50, animation: "bounce" },
      { id: 2, emoji: "🍻", x: 60, y: 50, animation: "pulse" },
      { id: 3, emoji: "🎉", x: 50, y: 30, animation: "spin" },
      { id: 4, emoji: "🥨", x: 30, y: 70, animation: "bounce" },
      { id: 5, emoji: "🎵", x: 70, y: 35, animation: "float" }
    ]
  },
  {
    type: "minigame",
    minigame: "memorypairs",
    text: "Memory Pairs!",
    background: "bar"
  },
  {
    type: "line",
    text: "Level 13 – Date nights & cozy routines.",
    image1: "/images/Level 13/level13_1.jpeg",
    image2: "/images/Level 13/level13_2.jpeg",
    background: "restaurant",
    objects: [
      { id: 1, emoji: "🍽️", x: 35, y: 55, animation: "bounce" },
      { id: 2, emoji: "🕯️", x: 50, y: 45, animation: "pulse" },
      { id: 3, emoji: "🌹", x: 65, y: 60, animation: "float" },
      { id: 4, emoji: "🍷", x: 30, y: 70, animation: "bounce" },
      { id: 5, emoji: "💕", x: 70, y: 30, animation: "pulse" }
    ]
  },
  {
    type: "minigame",
    minigame: "beerclink",
    text: "Clink the beers!",
    background: "bar"
  },
  {
    type: "line",
    text: "Level 14 – Dog diaries — Rio, Sky & Kobe.",
    image1: "/images/Level 14/level14_1.jpeg",
    image2: "/images/Level 14/level14_2.jpeg",
    background: "park",
    objects: [
      { id: 1, emoji: "🐕", x: 30, y: 50, animation: "bounce" },
      { id: 2, emoji: "🐾", x: 50, y: 65, animation: "shake" },
      { id: 3, emoji: "🦴", x: 70, y: 55, animation: "bounce" },
      { id: 4, emoji: "🌳", x: 25, y: 35, animation: "shake" },
      { id: 5, emoji: "⚽", x: 75, y: 40, animation: "bounce" }
    ]
  },
  {
    type: "choice",
    text: "Adopt a dog? Shivam is unsure, Mansi loves dogs!",
    a: "Yes! Dogs make you happy! 🐕💕",
    b: "Let's start slow 🤔",
    background: "park",
    objects: [
      { id: 1, emoji: "🐕", x: 35, y: 45, animation: "bounce" },
      { id: 2, emoji: "🐕", x: 65, y: 45, animation: "bounce" },
      { id: 3, emoji: "❤️", x: 50, y: 30, animation: "pulse" },
      { id: 4, emoji: "🐾", x: 30, y: 70, animation: "shake" },
      { id: 5, emoji: "🦴", x: 70, y: 70, animation: "bounce" }
    ],
    next_a: "dog_yes",
    next_b: "dog_wait"
  },
  {
    id: "dog_yes",
    type: "line",
    text: "Rio, Sky and Kobe join the family. A home grows. 🐕🐕🐕",
    background: "park",
    objects: [
      { id: 1, emoji: "🐕", x: 30, y: 50, animation: "bounce" },
      { id: 2, emoji: "🐕", x: 50, y: 50, animation: "bounce" },
      { id: 3, emoji: "🐕", x: 70, y: 50, animation: "bounce" },
      { id: 4, emoji: "❤️", x: 50, y: 30, animation: "pulse" },
      { id: 5, emoji: "🏡", x: 50, y: 75, animation: "bounce" }
    ]
  },
  {
    id: "dog_wait",
    type: "line",
    text: "First, dog-sitting for friends. Spoiler: soon you'll have your own! 🐾",
    background: "park",
    objects: [
      { id: 1, emoji: "🐾", x: 50, y: 50, animation: "bounce" },
      { id: 2, emoji: "⏳", x: 65, y: 55, animation: "pulse" },
      { id: 3, emoji: "🐕", x: 35, y: 60, animation: "float" }
    ]
  },
  {
    type: "polaroid",
    caption: "Dog-park Sundays 🐕",
    emoji: "/images/Level 14/level14_3.jpeg",
    background: "park",
    objects: [
      { id: 1, emoji: "⚽", x: 25, y: 80, animation: "bounce" },
      { id: 2, emoji: "🌳", x: 75, y: 75, animation: "shake" },
      { id: 3, emoji: "🐕", x: 50, y: 30, animation: "bounce" }
    ]
  },
  {
    type: "line",
    text: "Level 15 – Kashmir New Year — snow, silence, tequila.",
    image1: "/images/Level 15/level15_5.jpeg",
    background: "snow",
    objects: [
      { id: 1, emoji: "❄️", x: 25, y: 35, animation: "float" },
      { id: 2, emoji: "🥃", x: 50, y: 60, animation: "bounce" },
      { id: 3, emoji: "🏔️", x: 75, y: 40, animation: "pulse" },
      { id: 4, emoji: "⛷️", x: 60, y: 75, animation: "shake" },
      { id: 5, emoji: "☃️", x: 30, y: 70, animation: "bounce" }
    ]
  },
  {
    type: "polaroid",
    caption: "White quiet ❄️",
    emoji: "/images/Level 15/level15_1.jpeg",
    background: "snow",
    objects: [
      { id: 1, emoji: "☃️", x: 30, y: 80, animation: "bounce" },
      { id: 2, emoji: "🎿", x: 70, y: 75, animation: "shake" },
      { id: 3, emoji: "❄️", x: 50, y: 25, animation: "float" }
    ]
  },
  {
    type: "minigame",
    minigame: "candlelight",
    text: "Romantic candlelight!",
    background: "night"
  },
  {
    type: "line",
    text: "Level 16 – Matching bee tattoos & a pact for every trip.",
    image1: "/images/Level 16/level16_1.jpeg",
    background: "tattoo",
    objects: [
      { id: 1, emoji: "🐝", x: 40, y: 50, animation: "float" },
      { id: 2, emoji: "🐝", x: 60, y: 50, animation: "float" },
      { id: 3, emoji: "✈️", x: 50, y: 30, animation: "bounce" },
      { id: 4, emoji: "💛", x: 30, y: 65, animation: "pulse" },
      { id: 5, emoji: "🖤", x: 70, y: 65, animation: "pulse" }
    ]
  },
  {
    type: "choice",
    text: "Couple tattoos? Forever on the skin?",
    a: "Yes! Bees for Bumble! 🐝💛",
    b: "Rather not 🤔",
    background: "tattoo",
    objects: [
      { id: 1, emoji: "🐝", x: 35, y: 45, animation: "float" },
      { id: 2, emoji: "🐝", x: 65, y: 45, animation: "float" },
      { id: 3, emoji: "💛", x: 50, y: 70, animation: "pulse" },
      { id: 4, emoji: "✨", x: 30, y: 60, animation: "spin" }
    ],
    next_a: "tattoo_yes",
    next_b: "tattoo_no"
  },
  {
    id: "tattoo_yes",
    type: "line",
    text: "Two bees, a beginning — etched forever. 🐝🐝💛",
    background: "tattoo",
    objects: [
      { id: 1, emoji: "🐝", x: 40, y: 50, animation: "pulse" },
      { id: 2, emoji: "🐝", x: 60, y: 50, animation: "pulse" },
      { id: 3, emoji: "💛", x: 50, y: 70, animation: "pulse" },
      { id: 4, emoji: "✨", x: 30, y: 35, animation: "spin" },
      { id: 5, emoji: "✨", x: 70, y: 35, animation: "spin" }
    ]
  },
  {
    id: "tattoo_no",
    type: "line",
    text: "No tattoos, but the memory lasts forever. 💭",
    background: "tattoo",
    objects: [
      { id: 1, emoji: "💭", x: 50, y: 50, animation: "float" },
      { id: 2, emoji: "❤️", x: 50, y: 70, animation: "pulse" },
      { id: 3, emoji: "🐝", x: 35, y: 40, animation: "float" }
    ]
  },
  {
    type: "polaroid",
    caption: "Bumble beginnings 🐝",
    emoji: "/images/image6.jpeg",
    background: "tattoo",
    objects: [
      { id: 1, emoji: "💛", x: 25, y: 80, animation: "pulse" },
      { id: 2, emoji: "🖤", x: 75, y: 75, animation: "pulse" },
      { id: 3, emoji: "🐝", x: 50, y: 30, animation: "float" }
    ]
  },
  {
    type: "line",
    text: "Level 17 – Massage evenings — stress melts away.",
    image1: "/images/image9.jpeg",
    image2: "/images/image17.jpeg",
    background: "spa",
    objects: [
      { id: 1, emoji: "💆", x: 50, y: 50, animation: "pulse" },
      { id: 2, emoji: "🕯️", x: 30, y: 40, animation: "pulse" },
      { id: 3, emoji: "🌺", x: 70, y: 60, animation: "float" },
      { id: 4, emoji: "✨", x: 25, y: 70, animation: "spin" },
      { id: 5, emoji: "🧘", x: 75, y: 35, animation: "pulse" }
    ]
  },
  {
    type: "line",
    text: "Level 18 – Rummikub before bed — friendly cheating.",
    image1: "/images/image12.jpeg",
    image2: "/images/image13.jpeg",
    background: "home",
    objects: [
      { id: 1, emoji: "🎲", x: 40, y: 55, animation: "spin" },
      { id: 2, emoji: "🃏", x: 60, y: 50, animation: "bounce" },
      { id: 3, emoji: "😏", x: 50, y: 70, animation: "shake" },
      { id: 4, emoji: "🏆", x: 30, y: 35, animation: "pulse" },
      { id: 5, emoji: "☕", x: 70, y: 40, animation: "bounce" }
    ]
  },
  {
    type: "minigame",
    minigame: "beerclink",
    text: "New Year’s toast!",
    background: "bar"
  },
  {
    type: "line",
    text: "Level 19 – Speakeasy hunts — hidden doors, secret bars.",
    image1: "/images/image14.jpeg",
    image2: "/images/image19.jpeg",
    background: "speakeasy",
    objects: [
      { id: 1, emoji: "🚪", x: 50, y: 50, animation: "shake" },
      { id: 2, emoji: "🍸", x: 35, y: 60, animation: "bounce" },
      { id: 3, emoji: "🔍", x: 65, y: 40, animation: "spin" },
      { id: 4, emoji: "🔑", x: 30, y: 70, animation: "spin" },
      { id: 5, emoji: "🎩", x: 70, y: 30, animation: "bounce" }
    ]
  },
  {
    type: "line",
    text: "Level 20 – Ordinary magic — chai, hugs & playlists.",
    image1: "/images/Level 20/level20_1.jpeg",
    background: "home",
    objects: [
      { id: 1, emoji: "☕", x: 40, y: 50, animation: "pulse" },
      { id: 2, emoji: "🤗", x: 60, y: 55, animation: "bounce" },
      { id: 3, emoji: "🎶", x: 50, y: 30, animation: "float" },
      { id: 4, emoji: "💕", x: 30, y: 70, animation: "pulse" },
      { id: 5, emoji: "🏡", x: 70, y: 70, animation: "bounce" }
    ]
  },
  {
    type: "minigame",
    minigame: "pickleball",
    text: "Pickleball rally!",
    background: "sports"
  },
  {
    type: "line",
    text: "Level 21 – She cooks, he smiles like it’s the best.",
    image1: "/images/Level 21/level21_1.jpeg",
    image2: "/images/Level 21/level21_2.jpeg",
    background: "kitchen",
    objects: [
      { id: 1, emoji: "👩‍🍳", x: 40, y: 50, animation: "bounce" },
      { id: 2, emoji: "🍳", x: 50, y: 65, animation: "shake" },
      { id: 3, emoji: "😊", x: 65, y: 45, animation: "pulse" },
      { id: 4, emoji: "❤️", x: 30, y: 35, animation: "pulse" },
      { id: 5, emoji: "🍽️", x: 70, y: 70, animation: "bounce" }
    ]
  },
  {
    type: "choice",
    text: "What’s for dessert?",
    a: "Chocolate 🍫",
    b: "Ice cream 🍦",
    background: "kitchen",
    objects: [
      { id: 1, emoji: "🍫", x: 35, y: 50, animation: "bounce" },
      { id: 2, emoji: "🍦", x: 65, y: 50, animation: "bounce" },
      { id: 3, emoji: "🍰", x: 50, y: 70, animation: "pulse" },
      { id: 4, emoji: "✨", x: 50, y: 30, animation: "spin" }
    ],
    set_flag_a: "dessert",
    set_value_a: "chocolate",
    set_flag_b: "dessert",
    set_value_b: "icecream"
  },
  {
    type: "line",
    text: "Level 22 – Always flowers, always dessert.",
    image1: "/images/Level 22/level22_1.jpeg",
    image2: "/images/Level 22/level22_2.jpeg",
    background: "restaurant",
    objects: [
      { id: 1, emoji: "💐", x: 35, y: 50, animation: "bounce" },
      { id: 2, emoji: "🍰", x: 65, y: 55, animation: "pulse" },
      { id: 3, emoji: "💝", x: 50, y: 35, animation: "float" },
      { id: 4, emoji: "🌹", x: 25, y: 70, animation: "float" },
      { id: 5, emoji: "🍷", x: 75, y: 40, animation: "bounce" }
    ]
  },
  {
    type: "minigame",
    minigame: "candlelight",
    text: "Light all the candles!",
    background: "night"
  },
  {
    type: "line",
    text: "Level 23 – Bangkok New Year — fireworks & chaos.",
    image1: "/images/Level 23/level23_1.jpeg",
    background: "fireworks",
    objects: [
      { id: 1, emoji: "🎆", x: 30, y: 35, animation: "pulse" },
      { id: 2, emoji: "🎇", x: 50, y: 25, animation: "spin" },
      { id: 3, emoji: "🎉", x: 70, y: 40, animation: "bounce" },
      { id: 4, emoji: "🎊", x: 25, y: 65, animation: "spin" },
      { id: 5, emoji: "🥳", x: 75, y: 70, animation: "bounce" }
    ]
  },
  {
    type: "polaroid",
    caption: "Midnight fireworks 🎆",
    emoji: "/images/image19.jpeg",
    background: "fireworks",
    objects: [
      { id: 1, emoji: "🥂", x: 30, y: 80, animation: "bounce" },
      { id: 2, emoji: "🎊", x: 70, y: 75, animation: "spin" },
      { id: 3, emoji: "🎆", x: 50, y: 25, animation: "pulse" }
    ]
  },
  {
    type: "minigame",
    minigame: "beerclink",
    text: "New Year’s toast!",
    background: "bar"
  },
  {
    type: "line",
    text: "Level 24 – Bali adventure — bungee, laughter, trust.",
    image1: "/images/Level 24/level24_1.jpeg",
    background: "beach",
    objects: [
      { id: 1, emoji: "🪂", x: 50, y: 30, animation: "float" },
      { id: 2, emoji: "😱", x: 35, y: 55, animation: "shake" },
      { id: 3, emoji: "🤝", x: 65, y: 60, animation: "pulse" },
      { id: 4, emoji: "🏖️", x: 25, y: 75, animation: "float" },
      { id: 5, emoji: "🌴", x: 75, y: 40, animation: "bounce" }
    ]
  },
  {
    type: "choice",
    text: "Bungee jumping? Shivam is scared, Mansi wants to jump!",
    a: "Jump together! 🪂💪",
    b: "Mansi jumps alone 😎",
    background: "beach",
    objects: [
      { id: 1, emoji: "🪂", x: 50, y: 35, animation: "float" },
      { id: 2, emoji: "😱", x: 35, y: 60, animation: "shake" },
      { id: 3, emoji: "💪", x: 65, y: 60, animation: "pulse" },
      { id: 4, emoji: "🌊", x: 30, y: 80, animation: "shake" }
    ],
    next_a: "bungee_together",
    next_b: "bungee_alone"
  },
  {
    id: "bungee_together",
    type: "line",
    text: "Hand in hand into the deep. Scream, laugh, live! 🪂❤️",
    background: "beach",
    objects: [
      { id: 1, emoji: "🪂", x: 50, y: 35, animation: "float" },
      { id: 2, emoji: "❤️", x: 50, y: 55, animation: "pulse" },
      { id: 3, emoji: "😱", x: 35, y: 65, animation: "shake" },
      { id: 4, emoji: "😱", x: 65, y: 65, animation: "shake" },
      { id: 5, emoji: "💪", x: 50, y: 75, animation: "pulse" }
    ]
  },
  {
    id: "bungee_alone",
    type: "line",
    text: "Mansi bravely jumps alone. Shivam films proudly from above. 📹😊",
    background: "beach",
    objects: [
      { id: 1, emoji: "🪂", x: 50, y: 40, animation: "float" },
      { id: 2, emoji: "📹", x: 70, y: 30, animation: "bounce" },
      { id: 3, emoji: "💪", x: 50, y: 65, animation: "pulse" },
      { id: 4, emoji: "👏", x: 30, y: 35, animation: "bounce" }
    ]
  },
  {
    type: "polaroid",
    caption: "Falling & flying 🪂",
    emoji: "/images/Level 24/level24_2.jpeg",
    background: "beach",
    objects: [
      { id: 1, emoji: "🌊", x: 25, y: 80, animation: "shake" },
      { id: 2, emoji: "🏄", x: 75, y: 75, animation: "bounce" },
      { id: 3, emoji: "🪂", x: 50, y: 30, animation: "float" }
    ]
  },
  {
    type: "line",
    text: "Level 25 – Manta rays & vegan mornings.",
    image1: "/images/Level 25/level25_1.jpeg",
    background: "underwater",
    objects: [
      { id: 1, emoji: "🐠", x: 30, y: 50, animation: "float" },
      { id: 2, emoji: "🥗", x: 60, y: 55, animation: "bounce" },
      { id: 3, emoji: "🌊", x: 50, y: 70, animation: "shake" },
      { id: 4, emoji: "🐢", x: 25, y: 35, animation: "float" },
      { id: 5, emoji: "🐙", x: 75, y: 40, animation: "float" }
    ]
  },
  {
    type: "polaroid",
    caption: "Underwater wonders 🐠",
    emoji: "/images/image_water.webp",
    background: "underwater",
    objects: [
      { id: 1, emoji: "🤿", x: 30, y: 80, animation: "float" },
      { id: 2, emoji: "🐢", x: 70, y: 75, animation: "bounce" },
      { id: 3, emoji: "🐠", x: 50, y: 30, animation: "float" }
    ]
  },
  {
    type: "line",
    text: "Level 26 – Pickleball & swimming — playful competition.",
    image1: "/images/image4.jpeg",
    background: "sports",
    objects: [
      { id: 1, emoji: "🏓", x: 40, y: 50, animation: "bounce" },
      { id: 2, emoji: "🏊", x: 60, y: 55, animation: "shake" },
      { id: 3, emoji: "🏆", x: 50, y: 30, animation: "pulse" },
      { id: 4, emoji: "💪", x: 30, y: 70, animation: "pulse" },
      { id: 5, emoji: "🎯", x: 70, y: 40, animation: "bounce" }
    ]
  },
  {
    type: "minigame",
    minigame: "pickleball",
    text: "Pickleball rally!",
    background: "sports"
  },
  {
    type: "line",
    text: "Level 27 – Four years strong.",
    background: "celebration",
    objects: [
      { id: 1, emoji: "4️⃣", x: 40, y: 50, animation: "pulse" },
      { id: 2, emoji: "💪", x: 60, y: 50, animation: "bounce" },
      { id: 3, emoji: "❤️", x: 50, y: 70, animation: "pulse" },
      { id: 4, emoji: "🎉", x: 30, y: 35, animation: "spin" },
      { id: 5, emoji: "🎊", x: 70, y: 35, animation: "spin" }
    ]
  },
  {
    type: "polaroid",
    caption: "29 — memories & love 🎂",
    emoji: "/images/image2.jpeg",
    background: "celebration",
    objects: [
      { id: 1, emoji: "🎁", x: 30, y: 80, animation: "bounce" },
      { id: 2, emoji: "🎈", x: 70, y: 75, animation: "float" },
      { id: 3, emoji: "🎂", x: 50, y: 30, animation: "pulse" }
    ]
  },
  {
    type: "line",
    text: "Level 28 – His 29th birthday — the last year of the twenties.",
    image1: "/images/image7.jpeg",
    background: "celebration",
    objects: [
      { id: 1, emoji: "🎂", x: 50, y: 50, animation: "pulse" },
      { id: 2, emoji: "🎈", x: 30, y: 40, animation: "float" },
      { id: 3, emoji: "🥳", x: 70, y: 45, animation: "bounce" },
      { id: 4, emoji: "🎁", x: 35, y: 70, animation: "bounce" },
      { id: 5, emoji: "🎉", x: 65, y: 70, animation: "spin" }
    ]
  },
  {
    type: "line",
    text: "Level 29 – Mostly settled — the best kind of forever.",
    image1: "/images/image20.jpeg",
    background: "home",
    objects: [
      { id: 1, emoji: "🏡", x: 50, y: 50, animation: "pulse" },
      { id: 2, emoji: "💑", x: 35, y: 60, animation: "bounce" },
      { id: 3, emoji: "☕", x: 65, y: 55, animation: "float" },
      { id: 4, emoji: "📺", x: 30, y: 40, animation: "pulse" },
      { id: 5, emoji: "🛋️", x: 70, y: 70, animation: "bounce" }
    ]
  },
  {
    type: "polaroid",
    caption: "Mostly settled 🏡",
    emoji: "/images/image22.jpeg",
    background: "home",
    objects: [
      { id: 1, emoji: "🛋️", x: 30, y: 80, animation: "bounce" },
      { id: 2, emoji: "📺", x: 70, y: 75, animation: "pulse" },
      { id: 3, emoji: "☕", x: 50, y: 30, animation: "float" }
    ]
  },
  {
    type: "minigame",
    minigame: "memorypairs",
    text: "Memory Pairs!",
    background: "bar"
  },
  {
  type: "line",
  text: "Level 30 – Happy Birthday Shivam! Here's to celebrating all birthdays together and unlocking forever. 🎉❤️",
  image1: "/images/image16.jpeg",
  image2: "/images/image18.jpeg",
  background: "sunset",
  objects: [
    { id: 1, emoji: "🎂", x: 50, y: 50, animation: "pulse" },
    { id: 2, emoji: "🎉", x: 35, y: 40, animation: "spin" },
    { id: 3, emoji: "🎉", x: 65, y: 40, animation: "spin" },
    { id: 4, emoji: "✨", x: 50, y: 70, animation: "float" },
    { id: 5, emoji: "🌅", x: 50, y: 25, animation: "pulse" }
  ]
},
  {
    type: "choice",
    text: "text: Mansi kneels: “Will you marry me?",
    a: "YES! A thousand times yes! 💍💖",
    b: "Let me think… 🤔",
    background: "sunset",
    objects: [
      { id: 1, emoji: "💍", x: 50, y: 55, animation: "spin" },
      { id: 2, emoji: "💖", x: 35, y: 70, animation: "pulse" },
      { id: 3, emoji: "💖", x: 65, y: 70, animation: "pulse" },
      { id: 4, emoji: "🌅", x: 50, y: 25, animation: "pulse" },
      { id: 5, emoji: "✨", x: 30, y: 40, animation: "float" },
      { id: 6, emoji: "✨", x: 70, y: 40, animation: "float" }
    ],
    next_a: "marry_yes",
    next_b: "marry_wait"
  },
  {
    id: "marry_yes",
    type: "line",
    text: "YES! Forever starts now. 💍👰🤵",
    background: "sunset",
    objects: [
      { id: 1, emoji: "💍", x: 50, y: 40, animation: "spin" },
      { id: 2, emoji: "👰", x: 40, y: 60, animation: "bounce" },
      { id: 3, emoji: "🤵", x: 60, y: 60, animation: "bounce" },
      { id: 4, emoji: "❤️", x: 50, y: 75, animation: "pulse" },
      { id: 5, emoji: "🎉", x: 30, y: 50, animation: "spin" },
      { id: 6, emoji: "🎉", x: 70, y: 50, animation: "spin" }
    ]
  },
  {
    id: "marry_wait",
    type: "line",
    text: "After a brief moment: “Of course, YES!” Forever can wait a second. 💕",
    background: "sunset",
    objects: [
      { id: 1, emoji: "💕", x: 50, y: 50, animation: "pulse" },
      { id: 2, emoji: "😊", x: 35, y: 60, animation: "bounce" },
      { id: 3, emoji: "😊", x: 65, y: 60, animation: "bounce" },
      { id: 4, emoji: "💍", x: 50, y: 35, animation: "spin" }
    ]
  },
  {
    type: "end",
    text: "You unlocked forever. ❤️",
    background: "sunset"
  }
];

export default storyData;
