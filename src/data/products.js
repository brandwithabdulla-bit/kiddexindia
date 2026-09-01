export const products = [
  {
    id: "1",
    name: "Magic Water Book",
    shortDescription: "Learn and paint with water, mess-free!",
    fullDescription: "The Magic Water Book is perfect for little ones to learn coloring without any mess. Just fill the pen with water and watch the colors magically appear. Once dry, the colors disappear and it can be used again!",
    price: 399,
    originalPrice: 599,
    discountPercentage: Math.round(((599 - 399) / 599) * 100),
    images: ["/product1.jpg"], // Placeholder, we will update these
    ageGroup: "3+",
    category: "Activity Kits",
    benefits: [
      "Mess-free coloring",
      "Develops fine motor skills",
      "Encourages creativity",
      "Reusable and eco-friendly"
    ],
    includes: ["1 Magic Water Book", "1 Refillable Water Pen"],
    skills: ["Creativity", "Fine Motor Skills", "Focus"],
    stockStatus: "In Stock",
    tags: ["creative", "mess-free", "art"],
    sku: "KID-MWB-001",
    featured: true
  },
  {
    id: "2",
    name: "Wooden Tic Tac Toe",
    shortDescription: "Classic strategy game in premium wood.",
    fullDescription: "A beautiful, durable wooden version of the classic Tic Tac Toe. Perfect for teaching early strategy, turn-taking, and critical thinking. The chunky wooden pieces are easy for little hands to grasp.",
    price: 499,
    originalPrice: 699,
    discountPercentage: Math.round(((699 - 499) / 699) * 100),
    images: ["/product2.jpg"],
    ageGroup: "3+",
    category: "Learning Games",
    benefits: [
      "Teaches basic strategy",
      "Improves problem-solving",
      "Develops social skills",
      "Durable wooden construction"
    ],
    includes: ["1 Wooden Board", "5 'X' Pieces", "5 'O' Pieces"],
    skills: ["Logical Thinking", "Problem Solving", "Social Play"],
    stockStatus: "In Stock",
    tags: ["wooden", "game", "strategy"],
    sku: "KID-TTT-002",
    featured: true
  },
  {
    id: "3",
    name: "Gift 5 Board Games Collection",
    shortDescription: "5 classic board games in one fun package.",
    fullDescription: "Why settle for one game when you can have five? This incredible collection includes family favorites like Ludo, Snakes & Ladders, Cricket, Zoom Bike, and Brainvita. Hours of screen-free family entertainment guaranteed.",
    price: 799,
    originalPrice: 999,
    discountPercentage: Math.round(((999 - 799) / 999) * 100),
    images: ["/product3.jpg"],
    ageGroup: "3+",
    category: "Learning Games",
    benefits: [
      "Great for family bonding",
      "Teaches counting and math",
      "Encourages healthy competition",
      "Screen-free entertainment"
    ],
    includes: ["5 Game Boards", "Dice", "Playing Tokens"],
    skills: ["Counting", "Social Skills", "Strategy"],
    stockStatus: "In Stock",
    tags: ["board games", "family", "collection"],
    sku: "KID-G5-003",
    featured: true
  },
  {
    id: "4",
    name: "Kluster Magnetic Game",
    shortDescription: "The wildly fun magnetic party game.",
    fullDescription: "Kluster is a dexterity game for 1 to 4 players, very short, easy to transport, incredibly fun, really simple, accessible to everyone and still full of strategy! Place your magnets without letting them cluster together.",
    price: 899,
    originalPrice: 1299,
    discountPercentage: Math.round(((1299 - 899) / 1299) * 100),
    images: ["/product4.jpg"],
    ageGroup: "3+",
    category: "Activity Kits",
    benefits: [
      "Develops steady hands",
      "Teaches about magnetism",
      "Exciting and unpredictable",
      "Great for groups"
    ],
    includes: ["24 Magnetic Stones", "1 String cord", "1 Storage bag"],
    skills: ["Fine Motor Skills", "Physics Basics", "Focus"],
    stockStatus: "In Stock",
    tags: ["magnetic", "game", "dexterity"],
    sku: "KID-KL-004",
    featured: true
  },
  {
    id: "5",
    name: "Tumble Tower",
    shortDescription: "Stack 'em high, but don't let it crash!",
    fullDescription: "The classic block-stacking, stack-crashing game! How will you stack up against the law of gravity? Play solo or with friends. Builds concentration and hand-eye coordination.",
    price: 599,
    originalPrice: 899,
    discountPercentage: Math.round(((899 - 599) / 899) * 100),
    images: ["/product5.jpg"],
    ageGroup: "3+",
    category: "Educational Toys",
    benefits: [
      "Improves hand-eye coordination",
      "Builds patience and focus",
      "Teaches balance and physics",
      "Made of genuine hardwood"
    ],
    includes: ["48 Hardwood Blocks"],
    skills: ["Balance", "Patience", "Fine Motor Skills"],
    stockStatus: "In Stock",
    tags: ["wooden", "blocks", "building"],
    sku: "KID-TT-005",
    featured: true
  },
  {
    id: 9,
    name: 'Creative Builder Magnetic Blocks',
    description: 'A massive 60-piece set of translucent magnetic building blocks. Let your child build castles, towers, and infinite geometric shapes while learning spatial awareness.',
    price: 1299,
    discountPercentage: 0,
    images: ['/product9.jpg'],
    category: 'Educational',
    ageGroup: '3+',
    featured: true,
    skills: ['Spatial Awareness', 'Creativity', 'Fine Motor Skills'],
    benefits: [
      'Encourages open-ended play',
      'Teaches basic geometry',
      'Strong, safe magnets',
      'Vibrant translucent colors'
    ],
    includes: [
      '60 Magnetic Tiles',
      'Idea Booklet',
      'Storage Bag'
    ]
  },
  {
    id: 10,
    name: 'Monkey Math Balance Scale',
    description: 'A fun and interactive way to learn basic math. Balance the cute monkey scale with numbers and monkey weights to solve simple equations.',
    price: 599,
    discountPercentage: 20,
    images: ['/product10.jpg'],
    category: 'Learning',
    ageGroup: '3+',
    featured: true,
    skills: ['Basic Math', 'Counting', 'Problem Solving'],
    benefits: [
      'Makes math visual and fun',
      'Introduces weight and balance',
      'Cute engaging monkey design',
      'Durable non-toxic plastic'
    ],
    includes: [
      '1 Monkey Balance Scale',
      '19 Monkey Weights',
      'Numbers 1-10',
      '30 Math Cards'
    ]
  },
  {
    id: 8,
    name: 'Pop N Play Plot 4',
    description: 'A fast-paced 2-player strategy game. Press the center button to pop the balls and try to plot 4 in a row. Quick thinking and dexterity required!',
    price: 699,
    discountPercentage: 15,
    images: ['/product8.jpg'],
    category: 'Learning Games',
    ageGroup: '3+',
    featured: true,
    skills: ['Strategy', 'Dexterity', 'Quick Thinking'],
    benefits: [
      'Fast-paced action',
      'Develops strategic planning',
      'Fun for kids and adults',
      'Premium durable plastic'
    ],
    includes: [
      '1 Game Board',
      'Black and White Balls'
    ]
  }
];
