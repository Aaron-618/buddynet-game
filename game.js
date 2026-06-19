/* ===========================================================
   BUDDYNET — collect every buddy
   =========================================================== */

// ---------- RARITY ----------
// Official BuddyNet sell-back values
const RARITIES = {
  common:    { name: "Common",    color: "#9ca3af", sell: 1 },
  uncommon:  { name: "Uncommon",  color: "#4ade80", sell: 5 },
  rare:      { name: "Rare",      color: "#38bdf8", sell: 15 },
  epic:      { name: "Epic",      color: "#a855f7", sell: 75 },
  legendary: { name: "Legendary", color: "#f59e0b", sell: 250 },
  chroma:    { name: "Chroma",    color: "#ff6b9d", sell: 300 },
  mystical:  { name: "Mystical",  color: "#ff5470", sell: 10000 }
};
const RARITY_ORDER = ["common", "uncommon", "rare", "epic", "legendary", "chroma", "mystical"];

// ---------- PACKS ----------
// Each drop entry: { rarity, weight (percent), buddies: [{name, emoji, sell?}] }
const PACKS = [
  {
    id: "starter", name: "Starter Pack", emoji: "🎒", price: 15, currency: "coins",
    desc: "Perfect for beginners. Build up your basic collection.",
    drops: [
      { rarity: "uncommon", weight: 60, buddies: [
        { name: "Puppy", emoji: "🐶" },
        { name: "Kitten", emoji: "🐱" },
        { name: "Hamster", emoji: "🐹" },
        { name: "Goldfish", emoji: "🐠" }
      ]},
      { rarity: "rare", weight: 30, buddies: [
        { name: "Parrot", emoji: "🦜" },
        { name: "Turtle", emoji: "🐢" },
        { name: "Bunny", emoji: "🐰" }
      ]},
      { rarity: "epic", weight: 9.5, buddies: [
        { name: "Golden Retriever", emoji: "🦮" },
        { name: "Siamese Cat", emoji: "😼" }
      ]},
      { rarity: "legendary", weight: 0.48, buddies: [
        { name: "The Dragon", emoji: "🐉" }
      ]},
      { rarity: "mystical", weight: 0.02, buddies: [
        { name: "The Phoenix Overlord", emoji: "🐦‍🔥", sell: 10000 }
      ]}
    ]
  },

  {
    id: "elemental", name: "Elemental Pack", emoji: "🌋", price: 25, currency: "coins",
    desc: "Forces of nature — including the legendary Rainbow Charmander.",
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Droplet", emoji: "💧" },
        { name: "Pebble", emoji: "🪨" },
        { name: "Leaf", emoji: "🍃" },
        { name: "Spark", emoji: "✨" }
      ]},
      { rarity: "rare", weight: 32.9, buddies: [
        { name: "Blizzard", emoji: "❄️" },
        { name: "Zap", emoji: "⚡" },
        { name: "Gale", emoji: "🌬️" }
      ]},
      { rarity: "epic", weight: 16.6, buddies: [
        { name: "Volcano", emoji: "🌋" },
        { name: "Tornado", emoji: "🌪️" },
        { name: "Earthquake", emoji: "🌐" }
      ]},
      { rarity: "legendary", weight: 0.45, buddies: [
        { name: "Flame Lizard", emoji: "🦎" }
      ]},
      { rarity: "chroma", weight: 0.04, buddies: [
        { name: "Blue Flare", emoji: "💙" }
      ]},
      { rarity: "mystical", weight: 0.01, buddies: [
        { name: "Rainbow Charmander", emoji: "🦎", sell: 100000, effect: "rainbow" }
      ]}
    ]
  },

  {
    id: "galactic", name: "Galactic Pack", emoji: "🌌", price: 20, currency: "coins",
    desc: "A mysterious space pack with glowing, futuristic alien friends.",
    drops: [
      { rarity: "uncommon", weight: 55, buddies: [
        { name: "Starry", emoji: "⭐" },
        { name: "Meteor", emoji: "☄️" },
        { name: "Comet", emoji: "💫" },
        { name: "Nebula", emoji: "🌌" }
      ]},
      { rarity: "rare", weight: 28, buddies: [
        { name: "Alien", emoji: "👽" },
        { name: "UFO", emoji: "🛸" },
        { name: "Satellite", emoji: "🛰️" }
      ]},
      { rarity: "epic", weight: 16.5, buddies: [
        { name: "Black Hole", emoji: "🕳️" },
        { name: "Alien Queen", emoji: "👾" }
      ]},
      { rarity: "legendary", weight: 0.45, buddies: [
        { name: "The Astronaut King", emoji: "👨‍🚀" }
      ]},
      { rarity: "chroma", weight: 0.03, buddies: [
        { name: "Supernova Buddy", emoji: "🌟" }
      ]},
      { rarity: "mystical", weight: 0.02, buddies: [
        { name: "Cosmic Void", emoji: "🌑", sell: 10000 }
      ]}
    ]
  },

  {
    id: "wildcamp", name: "Wild Camp Pack", emoji: "🏕️", price: 20, currency: "coins",
    desc: "Outdoor-themed box with forest and wilderness friends.",
    drops: [
      { rarity: "uncommon", weight: 51.5, buddies: [
        { name: "Squirrel", emoji: "🐿️" },
        { name: "Raccoon", emoji: "🦝" },
        { name: "Owl", emoji: "🦉" },
        { name: "Deer", emoji: "🦌" }
      ]},
      { rarity: "rare", weight: 31, buddies: [
        { name: "Grizzly Bear", emoji: "🐻" },
        { name: "Moose", emoji: "🫎" },
        { name: "Fox", emoji: "🦊" }
      ]},
      { rarity: "epic", weight: 17, buddies: [
        { name: "Bald Eagle", emoji: "🦅" },
        { name: "Wolverine", emoji: "🐺" }
      ]},
      { rarity: "legendary", weight: 0.46, buddies: [
        { name: "The Forest Spirit", emoji: "🧚" }
      ]},
      { rarity: "chroma", weight: 0.02, buddies: [
        { name: "Rainbow Campfire", emoji: "🔥", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.02, buddies: [
        { name: "Ancient Sasquatch", emoji: "🦍", sell: 10000 }
      ]}
    ]
  },

  {
    id: "dino", name: "Dino Pack", emoji: "🦖", price: 25, currency: "coins",
    desc: "Prehistoric pack of giant ancient reptiles and fossils.",
    drops: [
      { rarity: "uncommon", weight: 54, buddies: [
        { name: "Triceratops", emoji: "🦏" },
        { name: "Stegosaurus", emoji: "🦕" },
        { name: "Raptor", emoji: "🦖" },
        { name: "Pterodactyl", emoji: "🦅" }
      ]},
      { rarity: "rare", weight: 30, buddies: [
        { name: "Brachiosaurus", emoji: "🦕" },
        { name: "Ankylosaurus", emoji: "🦔" }
      ]},
      { rarity: "epic", weight: 15.7, buddies: [
        { name: "Saber-Toothed Tiger", emoji: "🐅" },
        { name: "Woolly Mammoth", emoji: "🐘" }
      ]},
      { rarity: "legendary", weight: 0.26, buddies: [
        { name: "Tyrannosaurus Rex", emoji: "🦖" }
      ]},
      { rarity: "chroma", weight: 0.02, buddies: [
        { name: "Golden Fossil", emoji: "🦴", effect: "golden" }
      ]},
      { rarity: "mystical", weight: 0.02, buddies: [
        { name: "Meteor Apocalypse", emoji: "☄️", sell: 10000 }
      ]}
    ]
  },

  {
    id: "ocean", name: "Deep Ocean Pack", emoji: "🦈", price: 20, currency: "coins",
    desc: "Dive deep to collect glowing underwater creatures.",
    drops: [
      { rarity: "uncommon", weight: 52, buddies: [
        { name: "Clownfish", emoji: "🐠" },
        { name: "Starfish", emoji: "⭐" },
        { name: "Crab", emoji: "🦀" },
        { name: "Jellyfish", emoji: "🪼" }
      ]},
      { rarity: "rare", weight: 31, buddies: [
        { name: "Dolphin", emoji: "🐬" },
        { name: "Octopus", emoji: "🐙" },
        { name: "Sea Turtle", emoji: "🐢" }
      ]},
      { rarity: "epic", weight: 16.5, buddies: [
        { name: "Orca", emoji: "🐋" },
        { name: "Hammerhead Shark", emoji: "🦈" }
      ]},
      { rarity: "legendary", weight: 0.45, buddies: [
        { name: "The Great Megalodon", emoji: "🦈" }
      ]},
      { rarity: "chroma", weight: 0.03, buddies: [
        { name: "Neon Jellyfish", emoji: "🪼" }
      ]},
      { rarity: "mystical", weight: 0.02, buddies: [
        { name: "Kraken Awakened", emoji: "🐙", sell: 10000 }
      ]}
    ]
  },

  {
    id: "medieval", name: "Medieval Quest Pack", emoji: "🏯", price: 25, currency: "coins",
    desc: "Fantasy pack full of royal knights, wizards, and mythical beasts.",
    drops: [
      { rarity: "uncommon", weight: 53, buddies: [
        { name: "Squire", emoji: "🤺" },
        { name: "Castle Guard", emoji: "🛡️" },
        { name: "Archer", emoji: "🏹" },
        { name: "Goblin", emoji: "👺" }
      ]},
      { rarity: "rare", weight: 30, buddies: [
        { name: "Royal Knight", emoji: "⚔️" },
        { name: "Wizard", emoji: "🧙" },
        { name: "Elf", emoji: "🧝" }
      ]},
      { rarity: "epic", weight: 16.5, buddies: [
        { name: "Griffin", emoji: "🦅" },
        { name: "Phoenix", emoji: "🐦‍🔥" }
      ]},
      { rarity: "legendary", weight: 0.46, buddies: [
        { name: "The King", emoji: "👑" }
      ]},
      { rarity: "chroma", weight: 0.02, buddies: [
        { name: "Rainbow Pegasus", emoji: "🦄", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.02, buddies: [
        { name: "The Dark Sorcerer", emoji: "🧙‍♂️", sell: 10000 }
      ]}
    ]
  },

  {
    id: "candy", name: "Candy Shop Pack", emoji: "🍬", price: 15, currency: "coins",
    desc: "Delicious pack of animated sweet treats and desserts.",
    drops: [
      { rarity: "uncommon", weight: 58, buddies: [
        { name: "Gummy Bear", emoji: "🍬" },
        { name: "Jelly Bean", emoji: "🫘" },
        { name: "Lollipop", emoji: "🍭" },
        { name: "Peppermint", emoji: "🍥" }
      ]},
      { rarity: "rare", weight: 28, buddies: [
        { name: "Cupcake", emoji: "🧁" },
        { name: "Cotton Candy", emoji: "🍡" },
        { name: "Ice Cream Cone", emoji: "🍦" }
      ]},
      { rarity: "epic", weight: 13.5, buddies: [
        { name: "Chocolate Bar", emoji: "🍫" },
        { name: "Gingerbread Man", emoji: "🍪" }
      ]},
      { rarity: "legendary", weight: 0.44, buddies: [
        { name: "The Gummy King", emoji: "🐻" }
      ]},
      { rarity: "chroma", weight: 0.04, buddies: [
        { name: "Rainbow Jawbreaker", emoji: "🍡", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.02, buddies: [
        { name: "Candy Castle", emoji: "🏰", sell: 10000 }
      ]}
    ]
  },

  {
    id: "cyber", name: "Cyber Robot Pack", emoji: "🤖", price: 20, currency: "coins",
    desc: "Futuristic droids and glowing mechanical buddies.",
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Microchip", emoji: "💾" },
        { name: "Battery", emoji: "🔋" },
        { name: "Drone", emoji: "🚁" },
        { name: "Gear", emoji: "⚙️" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Cyber Dog", emoji: "🐕" },
        { name: "Mech Suit", emoji: "🦾" },
        { name: "Hoverboard", emoji: "🛹" }
      ]},
      { rarity: "epic", weight: 16.5, buddies: [
        { name: "AI Brain", emoji: "🧠" },
        { name: "Supercomputer", emoji: "💻" }
      ]},
      { rarity: "legendary", weight: 0.43, buddies: [
        { name: "The Cyber Core", emoji: "💎" }
      ]},
      { rarity: "chroma", weight: 0.05, buddies: [
        { name: "Hologram Glitch", emoji: "📡" }
      ]},
      { rarity: "mystical", weight: 0.02, buddies: [
        { name: "Omega Mecha", emoji: "🤖", sell: 10000 }
      ]}
    ]
  },

  {
    id: "sports", name: "All-Stars Sports Pack", emoji: "⚽", price: 20, currency: "coins",
    desc: "Athletic pack with sports gear, balls, and mascots.",
    drops: [
      { rarity: "uncommon", weight: 51.5, buddies: [
        { name: "Baseball", emoji: "⚾" },
        { name: "Basketball", emoji: "🏀" },
        { name: "Football", emoji: "🏈" },
        { name: "Soccer Ball", emoji: "⚽" },
        { name: "Volleyball", emoji: "🏐" }
      ]},
      { rarity: "rare", weight: 31, buddies: [
        { name: "Tennis Racket", emoji: "🎾" },
        { name: "Bowling Pin", emoji: "🎳" },
        { name: "Hockey Puck", emoji: "🏒" }
      ]},
      { rarity: "epic", weight: 17, buddies: [
        { name: "Gold Medal", emoji: "🥇" },
        { name: "Championship Trophy", emoji: "🏆" }
      ]},
      { rarity: "legendary", weight: 0.46, buddies: [
        { name: "The Team Mascot", emoji: "🦁" }
      ]},
      { rarity: "chroma", weight: 0.02, buddies: [
        { name: "Rainbow Basketball", emoji: "🏀", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.02, buddies: [
        { name: "The Hall of Famer", emoji: "🏅", sell: 10000 }
      ]}
    ]
  },

  // ===========================================================
  // ENDGAME PACKS — unlock after collecting all base buddies
  // ===========================================================
  {
    id: "nebula", name: "Nebula Pack", emoji: "🌌", price: 35, currency: "coins",
    desc: "Cosmic forces beyond the galactic frontier.",
    requiresAll: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Stardust", emoji: "✨" },
        { name: "Cosmic Dust", emoji: "💫" },
        { name: "Quasar", emoji: "🌠" },
        { name: "Pulsar", emoji: "🌟" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Wormhole", emoji: "🌀" },
        { name: "Quantum Bit", emoji: "⚛️" },
        { name: "Antimatter", emoji: "☢️" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Singularity", emoji: "🕳️" },
        { name: "Cosmic Web", emoji: "🕸️" }
      ]},
      { rarity: "legendary", weight: 0.5, buddies: [
        { name: "The Multiverse", emoji: "♾️" }
      ]},
      { rarity: "chroma", weight: 0.1, buddies: [
        { name: "Aurora Streak", emoji: "🌈", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Big Bang", emoji: "💥", sell: 10000 }
      ]}
    ]
  },

  {
    id: "shadow", name: "Shadow Clan Pack", emoji: "🥷", price: 35, currency: "coins",
    desc: "Stealth assassins emerging from the shadows.",
    requiresAll: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Ninja Recruit", emoji: "🥷" },
        { name: "Shuriken", emoji: "🗡️" },
        { name: "Smoke Bomb", emoji: "💨" },
        { name: "Tanto Blade", emoji: "🔪" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Kunoichi", emoji: "🦊" },
        { name: "Shadow Walker", emoji: "👤" },
        { name: "Hidden Spy", emoji: "🕵️" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Master Ninja", emoji: "🥋" },
        { name: "Shadow Beast", emoji: "🐅" }
      ]},
      { rarity: "legendary", weight: 0.5, buddies: [
        { name: "The Shadow Lord", emoji: "👹" }
      ]},
      { rarity: "chroma", weight: 0.1, buddies: [
        { name: "Phantom Strike", emoji: "⚡", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Ghost Emperor", emoji: "👻", sell: 10000 }
      ]}
    ]
  },

  {
    id: "mythic", name: "Mythic Beasts Pack", emoji: "🐲", price: 40, currency: "coins",
    desc: "Creatures from ancient mythologies and forgotten legends.",
    requiresAll: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Faun", emoji: "🐐" },
        { name: "Centaur", emoji: "🏹" },
        { name: "Pixie", emoji: "🧚" },
        { name: "Imp", emoji: "😈" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Hydra", emoji: "🐲" },
        { name: "Minotaur", emoji: "🐂" },
        { name: "Unicorn", emoji: "🦄" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Cerberus", emoji: "🐕" },
        { name: "Medusa", emoji: "🐍" }
      ]},
      { rarity: "legendary", weight: 0.5, buddies: [
        { name: "The Titan", emoji: "🗿" }
      ]},
      { rarity: "chroma", weight: 0.1, buddies: [
        { name: "Pegasus Knight", emoji: "🦄", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "World Serpent", emoji: "🐉", sell: 10000 }
      ]}
    ]
  },

  {
    id: "demon", name: "Demon Realm Pack", emoji: "😈", price: 60, currency: "coins",
    desc: "Tear open the gates of the underworld.",
    requiresAll: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Demon Imp", emoji: "👿" },
        { name: "Shade", emoji: "👤" },
        { name: "Hellhound", emoji: "🐺" },
        { name: "Cursed Skull", emoji: "💀" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Succubus", emoji: "🦇" },
        { name: "Warlock", emoji: "🧙" },
        { name: "Demon Knight", emoji: "⚔️" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Hell Lord", emoji: "👹" },
        { name: "Soul Reaper", emoji: "💀" }
      ]},
      { rarity: "legendary", weight: 0.5, buddies: [
        { name: "The Devil", emoji: "😈" }
      ]},
      { rarity: "chroma", weight: 0.1, buddies: [
        { name: "Inferno Wing", emoji: "🔥", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "Lord of the Abyss", emoji: "🕳️", sell: 10000 }
      ]}
    ]
  },

  {
    id: "frozen", name: "Frozen Tundra Pack", emoji: "❄️", price: 40, currency: "coins",
    desc: "Creatures of eternal ice and bone-cracking cold.",
    requiresAll: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Snowball", emoji: "⚪" },
        { name: "Ice Shard", emoji: "🧊" },
        { name: "Frost Fairy", emoji: "✨" },
        { name: "Polar Pup", emoji: "🐻‍❄️" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Penguin Knight", emoji: "🐧" },
        { name: "Snow Wolf", emoji: "🐺" },
        { name: "Ice Bear", emoji: "🐻‍❄️" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Frost Giant", emoji: "🥶" },
        { name: "Snow Leopard", emoji: "🐆" }
      ]},
      { rarity: "legendary", weight: 0.5, buddies: [
        { name: "The Yeti", emoji: "🦍" }
      ]},
      { rarity: "chroma", weight: 0.1, buddies: [
        { name: "Aurora Wisp", emoji: "🌌", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Ice Empress", emoji: "👸", sell: 10000 }
      ]}
    ]
  },

  {
    id: "inferno", name: "Inferno Pack", emoji: "🌋", price: 50, currency: "coins",
    desc: "Molten beasts born from a thousand volcanoes.",
    requiresAll: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Ember", emoji: "🔥" },
        { name: "Magma Drop", emoji: "🟠" },
        { name: "Cinder", emoji: "✨" },
        { name: "Spark Imp", emoji: "💢" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Fire Spirit", emoji: "🔥" },
        { name: "Lava Slug", emoji: "🐌" },
        { name: "Phoenix Egg", emoji: "🥚" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Magma Beast", emoji: "🦏" },
        { name: "Volcano Lord", emoji: "🌋" }
      ]},
      { rarity: "legendary", weight: 0.5, buddies: [
        { name: "The Fire God", emoji: "☄️" }
      ]},
      { rarity: "chroma", weight: 0.1, buddies: [
        { name: "Solar Flare", emoji: "☀️", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "Heart of the Volcano", emoji: "❤️‍🔥", sell: 10000 }
      ]}
    ]
  },

  {
    id: "crystal", name: "Crystal Cavern Pack", emoji: "💎", price: 40, currency: "coins",
    desc: "Glittering wonders deep beneath the earth.",
    requiresAll: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Ruby Chip", emoji: "♦️" },
        { name: "Sapphire Chip", emoji: "🔷" },
        { name: "Emerald Chip", emoji: "💚" },
        { name: "Topaz", emoji: "🟡" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Amethyst", emoji: "💜" },
        { name: "Quartz Cluster", emoji: "🤍" },
        { name: "Onyx", emoji: "🖤" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Crystal Heart", emoji: "💖" },
        { name: "Gem Beast", emoji: "💎" }
      ]},
      { rarity: "legendary", weight: 0.5, buddies: [
        { name: "The Diamond Lord", emoji: "💎" }
      ]},
      { rarity: "chroma", weight: 0.1, buddies: [
        { name: "Prism Geode", emoji: "🔮", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "Crystal Overlord", emoji: "💠", sell: 10000 }
      ]}
    ]
  },

  {
    id: "storm", name: "Storm Lords Pack", emoji: "🌪️", price: 40, currency: "coins",
    desc: "Sky-shattering forces of wind and lightning.",
    requiresAll: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Drizzle", emoji: "☁️" },
        { name: "Mist", emoji: "🌫️" },
        { name: "Hail Stone", emoji: "🧊" },
        { name: "Wind Spirit", emoji: "🌬️" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Thunder", emoji: "🌩️" },
        { name: "Lightning Bolt", emoji: "⚡" },
        { name: "Hurricane", emoji: "🌀" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Tornado Beast", emoji: "🌪️" },
        { name: "Storm Caller", emoji: "⛈️" }
      ]},
      { rarity: "legendary", weight: 0.5, buddies: [
        { name: "The Storm King", emoji: "👑" }
      ]},
      { rarity: "chroma", weight: 0.1, buddies: [
        { name: "Rainbow Tempest", emoji: "🌈", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "Eye of the Storm", emoji: "👁️", sell: 10000 }
      ]}
    ]
  },

  {
    id: "dragon", name: "Dragon Den Pack", emoji: "🐉", price: 75, currency: "coins",
    desc: "The most coveted pack — dragons of every breed.",
    requiresAll: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Wyrmling", emoji: "🐍" },
        { name: "Drake", emoji: "🦎" },
        { name: "Hatchling", emoji: "🥚" },
        { name: "Wyvern", emoji: "🦅" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Frost Wyrm", emoji: "🐲" },
        { name: "Sea Serpent", emoji: "🐉" },
        { name: "Wind Drake", emoji: "🌬️" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Ancient Wyrm", emoji: "🐉" },
        { name: "Dragon Knight", emoji: "🛡️" }
      ]},
      { rarity: "legendary", weight: 0.5, buddies: [
        { name: "The Dragon King", emoji: "🐲" }
      ]},
      { rarity: "chroma", weight: 0.1, buddies: [
        { name: "Rainbow Dragon", emoji: "🐉", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Eternal Dragon", emoji: "🐲", sell: 10000 }
      ]}
    ]
  },

  {
    id: "necro", name: "Necropolis Pack", emoji: "🦴", price: 50, currency: "coins",
    desc: "The restless dead rise from forgotten tombs.",
    requiresAll: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Skull", emoji: "💀" },
        { name: "Bone", emoji: "🦴" },
        { name: "Spirit Wisp", emoji: "👻" },
        { name: "Tombstone", emoji: "🪦" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Zombie", emoji: "🧟" },
        { name: "Mummy", emoji: "🥷" },
        { name: "Skeleton Warrior", emoji: "⚔️" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Lich King", emoji: "🧙" },
        { name: "Bone Dragon", emoji: "🐉" }
      ]},
      { rarity: "legendary", weight: 0.5, buddies: [
        { name: "The Reaper", emoji: "💀" }
      ]},
      { rarity: "chroma", weight: 0.1, buddies: [
        { name: "Phantom Glow", emoji: "👻", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "Lord of the Dead", emoji: "🦴", sell: 10000 }
      ]}
    ]
  }
];

// ---------- BUILD FLAT BUDDY INDEX ----------
const BUDDIES = [];   // flat list
const BUDDY_BY_ID = {};
function buildBuddyIndex() {
  PACKS.forEach(p => {
    p.drops.forEach(d => {
      d.buddies.forEach(b => {
        const id = p.id + "_" + b.name.toLowerCase().replace(/[^a-z0-9]+/g, "_");
        const buddy = {
          id, name: b.name, emoji: b.emoji,
          rarity: d.rarity,
          pack: p.name, packId: p.id,
          sell: b.sell ?? RARITIES[d.rarity].sell,
          effect: b.effect || ""
        };
        BUDDIES.push(buddy);
        BUDDY_BY_ID[id] = buddy;
      });
    });
  });
}
buildBuddyIndex();

// ---------- DAILY WHEEL ----------
const WHEEL_SLOTS = [
  { weight: 35,  label: "20",       reward: { type: "coins", amount: 20 } },
  { weight: 25,  label: "50",       reward: { type: "coins", amount: 50 } },
  { weight: 15,  label: "100",      reward: { type: "coins", amount: 100 } },
  { weight: 10,  label: "250",      reward: { type: "coins", amount: 250 } },
  { weight: 8,   label: "500",      reward: { type: "coins", amount: 500 } },
  { weight: 5,   label: "1K",       reward: { type: "coins", amount: 1000 } },
  { weight: 1.9, label: "🎒 PACK",  reward: { type: "token", pack: "starter" } },
  { weight: 0.1, label: "❓",       reward: { type: "buddy", rarity: "uncommon" } }
];
const WHEEL_COOLDOWN_MS = 24 * 60 * 60 * 1000;

// ---------- STATE ----------
const State = {
  coins: parseInt(localStorage.getItem("bn_coins") || "100"),
  gems: parseInt(localStorage.getItem("bn_gems") || "0"),
  packsOpened: parseInt(localStorage.getItem("bn_packs") || "0"),
  owned: JSON.parse(localStorage.getItem("bn_owned") || "{}"),
  tokens: JSON.parse(localStorage.getItem("bn_tokens") || "{}"),
  lastSpin: parseInt(localStorage.getItem("bn_lastSpin") || "0"),
  endgameUnlocked: localStorage.getItem("bn_endgame") === "true",
  filterRarity: "all",
  filterPack: "all"
};

function save() {
  localStorage.setItem("bn_coins", State.coins);
  localStorage.setItem("bn_gems", State.gems);
  localStorage.setItem("bn_packs", State.packsOpened);
  localStorage.setItem("bn_owned", JSON.stringify(State.owned));
  localStorage.setItem("bn_tokens", JSON.stringify(State.tokens));
  localStorage.setItem("bn_lastSpin", State.lastSpin);
  localStorage.setItem("bn_endgame", State.endgameUnlocked ? "true" : "false");
}

// ---------- UTILS ----------
function $(id) { return document.getElementById(id); }

// Render an emoji as a polished Twemoji-style SVG (looks way better than system emoji).
// Falls back to native emoji text if the CDN fails.
// Different emoji styles per rarity tier — rarer buddies look visually distinct
const RARITY_EMOJI_STYLE = {
  common:    "microsoft",
  uncommon:  "microsoft",
  rare:      "google",
  epic:      "google",
  legendary: "samsung",
  chroma:    "samsung",
  mystical:  "samsung"
};

function buddyImg(emoji, cls = "", rarity = "", buddyId = "") {
  // Prefer hand-drawn custom SVG art when available
  if (buddyId && typeof CUSTOM_SVG !== "undefined" && CUSTOM_SVG[buddyId]) {
    return `<div class="b-img b-custom ${cls}">${CUSTOM_SVG[buddyId]}</div>`;
  }
  const style = RARITY_EMOJI_STYLE[rarity] || "microsoft";
  const url = `https://emojicdn.elk.sh/${encodeURIComponent(emoji)}?style=${style}`;
  const safe = emoji.replace(/'/g, "");
  return `<img class="b-img ${cls}" src="${url}" alt="${safe}" loading="lazy" onerror="this.outerHTML='<span class=\\'b-fallback\\'>${safe}</span>'">`;
}

// Wrap a buddy image in a rarity-themed frame (the "card art" look)
function buddyFrame(emoji, rarity, sizeClass = "", effect = "", buddyId = "") {
  const fx = effect ? `fx-${effect}` : "";
  return `<div class="b-frame border-${rarity} ${sizeClass} ${fx}">${buddyImg(emoji, "", rarity, buddyId)}</div>`;
}
function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
  document.querySelectorAll(".tab-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.nav === id);
  });
}

function floatText(text, color, x, y) {
  const t = document.createElement("div");
  t.className = "float-text";
  t.textContent = text;
  t.style.color = color || "#fff";
  t.style.left = (x || window.innerWidth/2) + "px";
  t.style.top = (y || window.innerHeight/2) + "px";
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 900);
}

function discovered(id) { return State.owned[id] !== undefined; }
function ownedCount(id) { return State.owned[id] || 0; }

// Unlock check for endgame packs (requiresAll: true)
function baseBuddies() {
  return BUDDIES.filter(b => {
    const p = PACKS.find(pk => pk.id === b.packId);
    return p && !p.requiresAll;
  });
}
function baseCollectedCount() {
  return baseBuddies().filter(b => ownedCount(b.id) > 0).length;
}
function checkEndgameUnlock() {
  if (State.endgameUnlocked) return true;
  if (baseBuddies().every(b => ownedCount(b.id) > 0)) {
    State.endgameUnlocked = true;
    save();
    return true;
  }
  return false;
}
function isPackUnlocked(pack) {
  if (!pack.requiresAll) return true;
  return State.endgameUnlocked;
}

function celebrateEndgameUnlock() {
  const overlay = document.createElement("div");
  overlay.className = "endgame-celebrate";
  overlay.innerHTML = `
    <div class="ec-card">
      <div class="ec-emoji">🎉</div>
      <h1>ENDGAME UNLOCKED!</h1>
      <p>You collected all base buddies. 10 new endgame packs are now available in the Market.</p>
      <button class="big-btn" id="ecOk">Open Endgame Market</button>
    </div>
  `;
  document.body.appendChild(overlay);
  document.getElementById("ecOk").onclick = () => {
    overlay.remove();
    show("shop");
  };
}

// ---------- HUD ----------
function updateWallet() {
  $("walletCoins").textContent = State.coins.toLocaleString();
  $("walletGems").textContent = State.gems.toLocaleString();
  const discoveredCount = Object.keys(State.owned).length;
  $("ownedCount").textContent = discoveredCount;
  $("totalCount").textContent = BUDDIES.length;
  $("packsOpened").textContent = State.packsOpened;

  const wheelReady = Date.now() - State.lastSpin >= WHEEL_COOLDOWN_MS;
  $("wheelHomeCta").style.display = wheelReady ? "flex" : "none";
}

// ---------- SHOP ----------
function renderShop() {
  // Token banner
  const totalTokens = Object.values(State.tokens).reduce((s, n) => s + n, 0);
  const banner = $("tokenBanner");
  if (totalTokens > 0) {
    banner.style.display = "block";
    const parts = Object.entries(State.tokens)
      .filter(([k, v]) => v > 0)
      .map(([k, v]) => {
        const pack = PACKS.find(p => p.id === k);
        return `${v}× ${pack ? pack.emoji + " " + pack.name : k}`;
      });
    banner.innerHTML = `🎟 Free Tokens: ${parts.join(", ")} — click that pack to open for free!`;
  } else {
    banner.style.display = "none";
  }

  const grid = $("packGrid");
  grid.innerHTML = "";

  // Show unlock progress / celebration if any endgame packs exist
  const endgamePacks = PACKS.filter(p => p.requiresAll);
  const unlocked = State.endgameUnlocked;
  if (endgamePacks.length > 0) {
    const total = baseBuddies().length;
    const collected = baseCollectedCount();
    const banner = document.createElement("div");
    banner.className = "endgame-banner" + (unlocked ? " unlocked" : "");
    banner.innerHTML = unlocked
      ? `🏆 <strong>ENDGAME MARKET</strong> — base packs are sealed. 10 endgame packs available.`
      : `🔒 Collect all base buddies to unlock endgame packs — <strong>${collected}/${total}</strong> collected`;
    grid.appendChild(banner);
  }

  // Once endgame is unlocked, hide base packs entirely
  const visiblePacks = unlocked ? PACKS.filter(p => p.requiresAll) : PACKS;
  visiblePacks.forEach(p => {
    const hasToken = (State.tokens[p.id] || 0) > 0;
    const cur = p.currency === "gems" ? State.gems : State.coins;
    const affordable = cur >= p.price;
    const unlockedPack = isPackUnlocked(p);
    const locked = !unlockedPack || (!hasToken && !affordable);
    const symbol = p.currency === "gems" ? "💎" : "🪙";

    const rarityTags = p.drops.map(d =>
      `<span class="pack-rarity-tag r-${d.rarity}" title="${d.weight}%">
         ${RARITIES[d.rarity].name} ${d.weight}%
       </span>`
    ).join("");

    const bulkQuantities = [5, 10, 20, 50, 100];
    const bulkButtons = bulkQuantities.map(n => {
      const total = p.price * n;
      const can = cur >= total && unlockedPack;
      return `<button class="bulk-btn" data-qty="${n}" ${can ? "" : "disabled"} title="${total} ${symbol}">×${n}</button>`;
    }).join("");
    const maxQty = unlockedPack ? Math.floor(cur / p.price) : 0;
    const maxButton = `<button class="bulk-btn bulk-btn-max" data-qty="${maxQty}" ${maxQty > 0 ? "" : "disabled"} title="${maxQty * p.price} ${symbol}">MAX ×${maxQty}</button>`;

    const card = document.createElement("div");
    card.className = "pack-card" + (locked ? " locked" : "") + (hasToken ? " has-token" : "") + (p.requiresAll ? " endgame" : "");
    const lockOverlay = !unlockedPack
      ? `<div class="lock-overlay">🔒<div>Collect all base buddies</div></div>`
      : "";
    card.innerHTML = `
      ${lockOverlay}
      ${hasToken ? `<div class="pack-token-badge">FREE x${State.tokens[p.id]}</div>` : ""}
      ${p.requiresAll && unlockedPack ? `<div class="pack-new-badge">⭐ ENDGAME</div>` : ""}
      <div class="pack-emoji">${p.emoji}</div>
      <div class="pack-name">${p.name}</div>
      <div class="pack-desc">${p.desc || ""}</div>
      <div class="pack-price">${hasToken ? "FREE" : symbol + " " + p.price}</div>
      <div class="pack-rarities">${rarityTags}</div>
      <div class="bulk-row">${bulkButtons}${maxButton}</div>
    `;

    // Card click (excluding bulk buttons) = single open
    card.onclick = (e) => {
      if (e.target.classList.contains("bulk-btn")) return;
      if (!locked) openPack(p);
    };
    // Bulk button clicks
    card.querySelectorAll(".bulk-btn").forEach(b => {
      b.onclick = (e) => {
        e.stopPropagation();
        if (!unlockedPack) return;
        const qty = parseInt(b.dataset.qty);
        bulkOpenPack(p, qty);
      };
    });
    grid.appendChild(card);
  });
}

function bulkOpenPack(pack, qty) {
  const totalCost = pack.price * qty;
  const cur = pack.currency === "gems" ? State.gems : State.coins;
  if (cur < totalCost) return;
  if (pack.currency === "gems") State.gems -= totalCost;
  else State.coins -= totalCost;
  State.packsOpened += qty;

  const results = {};   // id -> { buddy, count, isNew }
  let newCount = 0;
  const rarityTally = {};

  for (let i = 0; i < qty; i++) {
    const buddy = pickFromPack(pack);
    const wasNew = !discovered(buddy.id);
    State.owned[buddy.id] = (State.owned[buddy.id] || 0) + 1;
    if (wasNew) newCount++;
    if (!results[buddy.id]) results[buddy.id] = { buddy, count: 0, isNew: wasNew };
    results[buddy.id].count++;
    rarityTally[buddy.rarity] = (rarityTally[buddy.rarity] || 0) + 1;
  }

  const wasUnlocked = State.endgameUnlocked;
  checkEndgameUnlock();
  save();
  updateWallet();
  renderShop();
  renderDex();
  if (!wasUnlocked && State.endgameUnlocked) celebrateEndgameUnlock();
  showBulkResult(pack, qty, totalCost, results, newCount, rarityTally);
}

function showBulkResult(pack, qty, cost, results, newCount, rarityTally) {
  $("bulkResultTitle").textContent = `Opened ${qty}× ${pack.emoji} ${pack.name}`;
  const rarityBreakdown = RARITY_ORDER
    .filter(r => rarityTally[r])
    .map(r => `<span class="r-${r}" style="padding:2px 8px;border-radius:8px;font-size:11px;font-weight:800;margin:0 2px">${rarityTally[r]} ${RARITIES[r].name}</span>`)
    .join(" ");
  $("bulkResultStats").innerHTML = `
    Spent <span>🪙 ${cost.toLocaleString()}</span> · New buddies: <span>${newCount}</span><br>
    <div style="margin-top:8px">${rarityBreakdown}</div>
  `;

  const sorted = Object.values(results).sort((a, b) => {
    const ra = RARITY_ORDER.indexOf(a.buddy.rarity);
    const rb = RARITY_ORDER.indexOf(b.buddy.rarity);
    if (ra !== rb) return rb - ra;
    return b.count - a.count;
  });

  const grid = $("bulkResultGrid");
  grid.innerHTML = "";
  sorted.forEach(({ buddy, count, isNew }) => {
    const card = document.createElement("div");
    card.className = "bulk-buddy border-" + buddy.rarity;
    card.innerHTML = `
      ${isNew ? `<div class="bb-new">NEW</div>` : ""}
      ${count > 1 ? `<div class="bb-count">x${count}</div>` : ""}
      <div class="bb-emoji">${buddyFrame(buddy.emoji, buddy.rarity, "", buddy.effect, buddy.id)}</div>
      <div class="bb-name">${buddy.name}</div>
    `;
    grid.appendChild(card);
  });

  $("bulkResult").classList.add("show");
}

// ---------- PACK OPEN ----------
let lastPack = null;
function pickFromPack(pack) {
  // Pick a drop tier by weight
  const total = pack.drops.reduce((s, d) => s + d.weight, 0);
  let r = Math.random() * total;
  let chosenDrop = pack.drops[pack.drops.length - 1];
  for (const d of pack.drops) {
    r -= d.weight;
    if (r <= 0) { chosenDrop = d; break; }
  }
  // Pick a buddy uniformly from this tier
  const b = chosenDrop.buddies[Math.floor(Math.random() * chosenDrop.buddies.length)];
  const id = pack.id + "_" + b.name.toLowerCase().replace(/[^a-z0-9]+/g, "_");
  return BUDDY_BY_ID[id];
}

function openPack(pack) {
  lastPack = pack;
  const hasToken = (State.tokens[pack.id] || 0) > 0;
  if (hasToken) {
    State.tokens[pack.id]--;
    if (State.tokens[pack.id] <= 0) delete State.tokens[pack.id];
  } else {
    if (pack.currency === "gems") State.gems -= pack.price;
    else State.coins -= pack.price;
  }
  State.packsOpened++;

  const buddy = pickFromPack(pack);
  const isNew = !discovered(buddy.id);
  State.owned[buddy.id] = (State.owned[buddy.id] || 0) + 1;
  const wasUnlocked = State.endgameUnlocked;
  checkEndgameUnlock();
  save();
  updateWallet();
  renderShop();
  renderDex();
  if (!wasUnlocked && State.endgameUnlocked) celebrateEndgameUnlock();

  // Animation
  const overlay = $("packOpen");
  const box = $("packBox");
  const reveal = $("reveal");
  overlay.classList.add("show");
  box.style.display = "block";
  reveal.classList.remove("show");

  setTimeout(() => {
    box.style.display = "none";
    reveal.classList.add("show");
    $("revealRarity").textContent = RARITIES[buddy.rarity].name.toUpperCase();
    $("revealRarity").className = "reveal-rarity r-" + buddy.rarity;
    $("revealBuddy").innerHTML = buddyFrame(buddy.emoji, buddy.rarity, "b-frame-xl", buddy.effect, buddy.id);
    $("revealName").textContent = buddy.name;
    $("revealStatus").textContent = isNew ? "✨ NEW! ✨" : `Owned x${State.owned[buddy.id]}`;
    $("revealStatus").style.color = isNew ? "var(--accent2)" : "var(--dim)";
  }, 1500);
}

function closePackOverlay() {
  $("packOpen").classList.remove("show");
}

// ---------- DEX ----------
function renderDex() {
  const grid = $("dexGrid");
  grid.innerHTML = "";

  const visible = BUDDIES.filter(b =>
    (State.filterRarity === "all" || b.rarity === State.filterRarity) &&
    (State.filterPack === "all" || b.packId === State.filterPack)
  );

  visible.sort((a, b) => {
    const ra = RARITY_ORDER.indexOf(a.rarity);
    const rb = RARITY_ORDER.indexOf(b.rarity);
    if (ra !== rb) return ra - rb;
    return a.name.localeCompare(b.name);
  });

  if (visible.length === 0) {
    grid.innerHTML = `<div class="empty-msg">No buddies match this filter.</div>`;
  } else {
    visible.forEach(b => {
      const count = ownedCount(b.id);
      const seen = discovered(b.id);
      const card = document.createElement("div");
      card.className = "buddy-card border-" + b.rarity + (seen ? "" : " locked");
      card.innerHTML = `
        ${count > 0 ? `<div class="buddy-count">x${count}</div>` : ""}
        <div class="buddy-emoji">${seen ? buddyFrame(b.emoji, b.rarity, "", b.effect, b.id) : '<div class="b-frame locked-frame">❓</div>'}</div>
        <div class="buddy-name">${seen ? b.name : "???"}</div>
        <div class="buddy-rarity r-${b.rarity}">${RARITIES[b.rarity].name}</div>
      `;
      if (seen) card.onclick = () => showBuddyDetail(b);
      grid.appendChild(card);
    });
  }
  renderFilters();
  updateSellAllBtn();
}

function renderFilters() {
  const wrap = $("rarityFilter");
  wrap.innerHTML = "";

  // Rarity filters (only show rarities that exist)
  const usedRarities = new Set(BUDDIES.map(b => b.rarity));
  const rarityOpts = [["all", "All Rarities"], ...RARITY_ORDER.filter(r => usedRarities.has(r)).map(r => [r, RARITIES[r].name])];
  rarityOpts.forEach(([key, label]) => {
    const btn = document.createElement("button");
    btn.className = "rf-btn" + (State.filterRarity === key ? " active" : "");
    btn.textContent = label;
    btn.onclick = () => { State.filterRarity = key; renderDex(); };
    wrap.appendChild(btn);
  });

  // Spacer
  const spacer = document.createElement("span");
  spacer.style.flexBasis = "100%";
  wrap.appendChild(spacer);

  // Pack filters
  const packOpts = [["all", "All Packs"], ...PACKS.map(p => [p.id, p.emoji + " " + p.name])];
  packOpts.forEach(([key, label]) => {
    const btn = document.createElement("button");
    btn.className = "rf-btn" + (State.filterPack === key ? " active" : "");
    btn.textContent = label;
    btn.onclick = () => { State.filterPack = key; renderDex(); };
    wrap.appendChild(btn);
  });
}

// ---------- BUDDY DETAIL + SELL ----------
let currentDetailBuddy = null;
function showBuddyDetail(b) {
  currentDetailBuddy = b;
  const count = ownedCount(b.id);
  $("detailBuddy").innerHTML = buddyFrame(b.emoji, b.rarity, "b-frame-lg", b.effect, b.id);
  $("detailRarity").textContent = RARITIES[b.rarity].name.toUpperCase();
  $("detailRarity").className = "detail-rarity r-" + b.rarity;
  $("detailName").textContent = b.name;
  $("detailOwned").textContent = count;
  $("detailPack").textContent = b.pack;
  $("detailSellPrice").textContent = b.sell.toLocaleString();
  $("detailSellBtn").disabled = count <= 0;

  const extras = Math.max(0, count - 1);
  $("detailSellAllCount").textContent = extras;
  $("detailSellAllPrice").textContent = (extras * b.sell).toLocaleString();
  $("detailSellAllBtn").disabled = extras <= 0;

  $("buddyDetail").classList.add("show");
}

function sellOne() {
  if (!currentDetailBuddy) return;
  const id = currentDetailBuddy.id;
  if ((State.owned[id] || 0) <= 0) return;
  State.owned[id]--;
  if (State.owned[id] <= 0) delete State.owned[id];
  State.coins += currentDetailBuddy.sell;
  floatText("+" + currentDetailBuddy.sell.toLocaleString() + " 🪙", "#ffd93d");
  save();
  updateWallet();
  renderShop();
  renderDex();
  if ((State.owned[id] || 0) <= 0) {
    $("buddyDetail").classList.remove("show");
  } else {
    showBuddyDetail(currentDetailBuddy);
  }
}

function sellAllExceptOne() {
  if (!currentDetailBuddy) return;
  const id = currentDetailBuddy.id;
  const count = State.owned[id] || 0;
  const extras = count - 1;
  if (extras <= 0) return;
  const gain = extras * currentDetailBuddy.sell;
  State.owned[id] = 1;
  State.coins += gain;
  floatText("+" + gain.toLocaleString() + " 🪙", "#ffd93d");
  save();
  updateWallet();
  renderShop();
  renderDex();
  showBuddyDetail(currentDetailBuddy);
}

function computeSellAllSummary() {
  let totalGain = 0, totalSold = 0, types = 0;
  Object.entries(State.owned).forEach(([id, count]) => {
    const extras = count - 1;
    if (extras <= 0) return;
    const buddy = BUDDY_BY_ID[id];
    if (!buddy) return;
    totalGain += extras * buddy.sell;
    totalSold += extras;
    types++;
  });
  return { totalGain, totalSold, types };
}

function sellAllDuplicates() {
  const { totalGain, totalSold, types } = computeSellAllSummary();
  if (totalSold <= 0) {
    alert("You don't have any duplicates to sell.");
    return;
  }
  if (!confirm(`Sell ${totalSold} duplicate buddies across ${types} types for 🪙 ${totalGain.toLocaleString()} coins?\n\nYou'll keep exactly 1 of each.`)) return;
  Object.keys(State.owned).forEach(id => {
    if (State.owned[id] > 1) State.owned[id] = 1;
  });
  State.coins += totalGain;
  floatText("+" + totalGain.toLocaleString() + " 🪙", "#ffd93d");
  save();
  updateWallet();
  renderShop();
  renderDex();
}

function updateSellAllBtn() {
  const btn = $("sellAllBtn");
  if (!btn) return;
  const { totalGain, totalSold } = computeSellAllSummary();
  if (totalSold <= 0) {
    btn.disabled = true;
    btn.textContent = "💰 No Duplicates to Sell";
  } else {
    btn.disabled = false;
    btn.textContent = `💰 Sell All Duplicates (${totalSold}) for 🪙 ${totalGain.toLocaleString()}`;
  }
}

// ---------- DAILY WHEEL ----------
let wheelSpinning = false;
let wheelRotation = 0;

function renderWheelLabels() {
  const wrap = $("wheelLabels");
  wrap.innerHTML = "";
  const cx = 150, cy = 150, r = 100;
  WHEEL_SLOTS.forEach((slot, i) => {
    const angleDeg = i * 45 + 22.5;
    const rad = angleDeg * Math.PI / 180;
    const x = cx + r * Math.sin(rad);
    const y = cy - r * Math.cos(rad);
    const lbl = document.createElement("div");
    lbl.className = "wheel-label";
    lbl.style.left = x + "px";
    lbl.style.top = y + "px";
    lbl.textContent = slot.label;
    wrap.appendChild(lbl);
  });
}

function pickWheelSlot() {
  const total = WHEEL_SLOTS.reduce((s, w) => s + w.weight, 0);
  let r = Math.random() * total;
  for (let i = 0; i < WHEEL_SLOTS.length; i++) {
    r -= WHEEL_SLOTS[i].weight;
    if (r <= 0) return i;
  }
  return 0;
}

function formatCooldown(ms) {
  if (ms <= 0) return "Ready to spin!";
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return `Next spin in ${h}h ${m}m ${s}s`;
}

function updateWheelUI() {
  const remaining = WHEEL_COOLDOWN_MS - (Date.now() - State.lastSpin);
  const btn = $("wheelSpinBtn");
  const cd = $("wheelCooldown");
  if (remaining <= 0) {
    btn.disabled = false;
    cd.textContent = "Ready to spin!";
    cd.classList.add("ready");
  } else {
    btn.disabled = true;
    cd.textContent = formatCooldown(remaining);
    cd.classList.remove("ready");
  }
}

function spinWheel() {
  if (wheelSpinning) return;
  const remaining = WHEEL_COOLDOWN_MS - (Date.now() - State.lastSpin);
  if (remaining > 0) return;
  wheelSpinning = true;
  $("wheelSpinBtn").disabled = true;

  const idx = pickWheelSlot();
  // Center of segment idx is at idx*45 + 22.5 degrees clockwise from top.
  // We rotate the wheel so that segment center aligns with pointer (top).
  // That means we rotate by -(idx*45 + 22.5), plus a bunch of full spins.
  const fullSpins = 6;
  const targetSpin = wheelRotation + fullSpins * 360 + (360 - (idx * 45 + 22.5));
  wheelRotation = targetSpin;
  $("wheel").style.transform = `rotate(${wheelRotation}deg)`;

  setTimeout(() => {
    wheelSpinning = false;
    State.lastSpin = Date.now();
    applyWheelReward(WHEEL_SLOTS[idx]);
    save();
    updateWallet();
    renderShop();
    updateWheelUI();
  }, 4700);
}

function applyWheelReward(slot) {
  const r = slot.reward;
  let icon = "🎁", text = "";
  if (r.type === "coins") {
    State.coins += r.amount;
    icon = "🪙";
    text = `+${r.amount.toLocaleString()} Coins`;
  } else if (r.type === "token") {
    State.tokens[r.pack] = (State.tokens[r.pack] || 0) + 1;
    const pack = PACKS.find(p => p.id === r.pack);
    icon = pack ? pack.emoji : "🎒";
    text = `Free ${pack ? pack.name : r.pack} Token!`;
  } else if (r.type === "buddy") {
    // Pick a random buddy of given rarity across all packs
    const pool = BUDDIES.filter(b => b.rarity === r.rarity);
    const b = pool[Math.floor(Math.random() * pool.length)];
    if (b) {
      State.owned[b.id] = (State.owned[b.id] || 0) + 1;
      icon = b.emoji;
      text = `Mystery Buddy: ${b.name}!`;
    } else {
      // fallback
      State.coins += 50;
      icon = "🪙";
      text = "+50 Coins";
    }
  }
  $("wheelResultIcon").textContent = icon;
  $("wheelResultText").textContent = text;
  $("wheelResult").classList.add("show");
}

// ---------- NAV ----------
function setupNav() {
  document.querySelectorAll("[data-nav]").forEach(el => {
    el.addEventListener("click", () => show(el.dataset.nav));
  });
  $("revealDone").onclick = closePackOverlay;
  $("revealAgain").onclick = () => {
    closePackOverlay();
    if (lastPack) {
      const cur = lastPack.currency === "gems" ? State.gems : State.coins;
      if (cur >= lastPack.price) setTimeout(() => openPack(lastPack), 200);
    }
  };
  $("detailClose").onclick = () => $("buddyDetail").classList.remove("show");
  $("buddyDetail").onclick = (e) => {
    if (e.target.id === "buddyDetail") $("buddyDetail").classList.remove("show");
  };
  $("detailSellBtn").onclick = sellOne;
  $("detailSellAllBtn").onclick = sellAllExceptOne;
  $("sellAllBtn").onclick = sellAllDuplicates;
  $("wheelSpinBtn").onclick = spinWheel;
  $("wheelResultDone").onclick = () => $("wheelResult").classList.remove("show");
  $("wheelResultClose").onclick = () => $("wheelResult").classList.remove("show");
  $("wheelResult").onclick = (e) => {
    if (e.target.id === "wheelResult") $("wheelResult").classList.remove("show");
  };
  $("bulkResultDone").onclick = () => $("bulkResult").classList.remove("show");
  $("bulkResultClose").onclick = () => $("bulkResult").classList.remove("show");
  $("bulkResult").onclick = (e) => {
    if (e.target.id === "bulkResult") $("bulkResult").classList.remove("show");
  };
}

// ===========================================================
// GAME MODES — main way to earn coins
// ===========================================================

const GAME_MODES = [
  { id: "defense",  emoji: "🏰", name: "Buddy Defense",  desc: "Place buddies to stop waves of glitch monsters.",            maxReward: 250 },
  { id: "tycoon",   emoji: "💰", name: "Coin Tycoon",    desc: "Serve customers fast as they spawn. 60 seconds.",            maxReward: 400 },
  { id: "clash",    emoji: "🌋", name: "Elemental Clash",desc: "1v1 type battle. Ocean > Fire > Camp > Ocean.",              maxReward: 200 },
  { id: "incubator",emoji: "🏢", name: "The Incubator",  desc: "Place buddies in pods to auto-generate coins.",              maxReward: 300 },
  { id: "raiders",  emoji: "🏴‍☠️", name: "Island Raiders",desc: "Aim the catapult and steal treasure from the rival island.",maxReward: 250 },
  { id: "rush",     emoji: "🏃", name: "Buddy Rush",     desc: "Race across the board game. Roll dice, beat the bot.",       maxReward: 200 },
  { id: "siege",    emoji: "👑", name: "Castle Siege",   desc: "Defend the throne. Tap attackers as they swarm.",            maxReward: 250 },
  { id: "lab",      emoji: "🧪", name: "Mutation Lab",   desc: "Tap to earn DNA. Fuse buddies to defeat the boss.",          maxReward: 220 },
  { id: "glitch",   emoji: "🕵️", name: "Glitch Hunt",   desc: "Find the imposter in each round.",                            maxReward: 200 },
  { id: "feast",    emoji: "🥞", name: "The Feast",      desc: "Feed the dragon. Match its cravings in order.",              maxReward: 250 }
];

const GameRunner = {
  current: null,
  coins: 0, score: 0, time: 0,
  timer: null,
  onTick: null
};

function renderPlay() {
  const grid = $("modeGrid");
  grid.innerHTML = "";
  GAME_MODES.forEach(m => {
    const card = document.createElement("div");
    card.className = "mode-card";
    card.innerHTML = `
      <div class="mode-emoji">${m.emoji}</div>
      <div class="mode-name">${m.name}</div>
      <div class="mode-desc">${m.desc}</div>
      <div class="mode-reward">🪙 up to ${m.maxReward}</div>
    `;
    card.onclick = () => startMode(m.id);
    grid.appendChild(card);
  });
}

function startMode(id) {
  GameRunner.current = id;
  GameRunner.coins = 0; GameRunner.score = 0; GameRunner.time = 0;
  if (GameRunner.timer) clearInterval(GameRunner.timer);
  const mode = GAME_MODES.find(m => m.id === id);
  $("gameTitle").textContent = mode.emoji + " " + mode.name;
  $("gameCoins").textContent = 0;
  $("gameScore").textContent = 0;
  $("gameTimer").textContent = "—";
  $("gameCanvas").innerHTML = "";
  show("gameRunner");
  Modes[id].start($("gameCanvas"));
}

function updateGameHUD() {
  $("gameCoins").textContent = GameRunner.coins;
  $("gameScore").textContent = GameRunner.score;
}

function gameTimer(secs, onEnd) {
  GameRunner.time = secs;
  $("gameTimer").textContent = secs;
  GameRunner.timer = setInterval(() => {
    GameRunner.time--;
    $("gameTimer").textContent = GameRunner.time;
    if (GameRunner.onTick) GameRunner.onTick();
    if (GameRunner.time <= 0) {
      clearInterval(GameRunner.timer);
      GameRunner.timer = null;
      onEnd();
    }
  }, 1000);
}

function endGame({ win, title, coins, stats }) {
  if (GameRunner.timer) { clearInterval(GameRunner.timer); GameRunner.timer = null; }
  GameRunner.onTick = null;
  coins = Math.round(coins);
  State.coins += coins;
  save();
  updateWallet();
  renderShop();
  $("gameResultIcon").textContent = win ? "🏆" : "💪";
  $("gameResultTitle").textContent = title || (win ? "VICTORY!" : "GAME OVER");
  $("gameResultTitle").style.color = win ? "var(--accent2)" : "var(--pink)";
  $("gameResultCoins").textContent = coins.toLocaleString();
  $("gameResultStats").innerHTML = stats || "";
  $("gameResult").classList.add("show");
}

// ---------- Mode implementations ----------
const Modes = {};

// ====== 1. BUDDY DEFENSE ======
Modes.defense = {
  start(canvas) {
    const ROWS = 5, COLS = 8, PATH_ROW = 2;
    const state = { wave: 1, hp: 100, money: 30, selected: null, towers: [], enemies: [], spawning: false };
    GameRunner.coins = 0;
    canvas.innerHTML = `
      <div class="td-shop">
        <div class="td-shop-item" data-tower="basic"><div class="td-icon">🗼</div><div>Basic</div><div class="td-cost">10🪙</div></div>
        <div class="td-shop-item" data-tower="ice"><div class="td-icon">❄️</div><div>Ice</div><div class="td-cost">20🪙</div></div>
        <div class="td-shop-item" data-tower="laser"><div class="td-icon">⚡</div><div>Laser</div><div class="td-cost">30🪙</div></div>
      </div>
      <div class="td-board" id="tdBoard"></div>
      <div style="text-align:center;margin-top:12px;color:var(--dim)">
        HP: <span id="tdHP">100</span> · Money: <span id="tdMoney">30</span>🪙 · Wave: <span id="tdWave">1</span>/10
      </div>
    `;
    const board = $("tdBoard");
    const cells = [];
    for (let r = 0; r < ROWS; r++) {
      const row = document.createElement("div");
      row.className = "td-row";
      cells.push([]);
      for (let c = 0; c < COLS; c++) {
        const cell = document.createElement("div");
        cell.className = "td-cell";
        if (r === PATH_ROW) cell.classList.add("path");
        if (r === PATH_ROW && c === 0) cell.classList.add("base");
        if (r === PATH_ROW && c === 0) cell.textContent = "🏯";
        cell.dataset.r = r; cell.dataset.c = c;
        cell.onclick = () => placeTower(r, c, cell);
        row.appendChild(cell);
        cells[r].push(cell);
      }
      board.appendChild(row);
    }

    const TOWERS = {
      basic: { icon: "🗼", cost: 10, dmg: 1, range: 2, freeze: 0, fireMs: 800 },
      ice:   { icon: "❄️", cost: 20, dmg: 1, range: 2, freeze: 0.4, fireMs: 1200 },
      laser: { icon: "⚡", cost: 30, dmg: 2, range: 4, freeze: 0, fireMs: 1000 }
    };

    document.querySelectorAll(".td-shop-item").forEach(el => {
      el.onclick = () => {
        document.querySelectorAll(".td-shop-item").forEach(e => e.classList.remove("selected"));
        el.classList.add("selected");
        state.selected = el.dataset.tower;
      };
    });

    function placeTower(r, c, cell) {
      if (r === PATH_ROW) return;
      if (cell.classList.contains("has-tower")) return;
      if (!state.selected) return;
      const t = TOWERS[state.selected];
      if (state.money < t.cost) return;
      state.money -= t.cost;
      cell.classList.add("has-tower");
      cell.textContent = t.icon;
      state.towers.push({ r, c, ...t, lastFire: 0, cell });
      updateHUD();
    }
    function updateHUD() {
      $("tdHP").textContent = Math.max(0, state.hp);
      $("tdMoney").textContent = state.money;
      $("tdWave").textContent = state.wave;
      GameRunner.coins = (state.wave - 1) * 15;
      GameRunner.score = state.wave * 10 + state.towers.length;
      updateGameHUD();
    }

    function spawnEnemy() {
      const enemy = {
        col: COLS - 1, hp: 1 + Math.floor(state.wave / 2),
        maxHp: 1 + Math.floor(state.wave / 2),
        speed: 0.08 + state.wave * 0.005,
        slowed: 0,
        el: document.createElement("div")
      };
      enemy.el.className = "td-enemy";
      enemy.el.textContent = ["👹","👻","💀","👽"][Math.floor(Math.random()*4)];
      cells[PATH_ROW][Math.floor(enemy.col)].appendChild(enemy.el);
      state.enemies.push(enemy);
    }

    function startWave() {
      state.spawning = true;
      const count = 4 + state.wave;
      let spawned = 0;
      const sp = setInterval(() => {
        if (spawned >= count) { clearInterval(sp); state.spawning = false; return; }
        spawnEnemy(); spawned++;
      }, 800 - state.wave * 30);
    }

    function tick() {
      // Move enemies
      state.enemies.forEach(e => {
        const speed = e.slowed > 0 ? e.speed * 0.5 : e.speed;
        if (e.slowed > 0) e.slowed -= 0.1;
        e.col -= speed;
        if (e.col <= 0) {
          state.hp -= 12;
          e.el.remove();
          e.dead = true;
        } else {
          const targetCell = cells[PATH_ROW][Math.floor(e.col)];
          if (targetCell && e.el.parentElement !== targetCell) targetCell.appendChild(e.el);
        }
      });
      state.enemies = state.enemies.filter(e => !e.dead && e.hp > 0);

      // Towers fire
      const now = Date.now();
      state.towers.forEach(t => {
        if (now - t.lastFire < t.fireMs) return;
        const target = state.enemies.find(e => {
          const dx = Math.abs(e.col - t.c);
          const dy = Math.abs(PATH_ROW - t.r);
          return dx + dy <= t.range && Math.abs(PATH_ROW - t.r) <= t.range;
        });
        if (target) {
          target.hp -= t.dmg;
          t.lastFire = now;
          if (t.freeze) target.slowed = t.freeze * 10;
          if (target.hp <= 0) {
            target.el.remove(); target.dead = true;
            state.money += 5;
          }
          // flash
          t.cell.style.filter = "brightness(2)";
          setTimeout(() => t.cell.style.filter = "", 100);
        }
      });

      updateHUD();

      if (state.hp <= 0) { stop(false); return; }
      if (!state.spawning && state.enemies.length === 0) {
        if (state.wave >= 10) { stop(true); return; }
        state.wave++; state.money += 20;
        setTimeout(startWave, 1200);
      }
    }

    const gameTick = setInterval(tick, 100);

    function stop(win) {
      clearInterval(gameTick);
      const coins = (state.wave - 1) * 15 + (win ? 100 : 0);
      endGame({
        win, coins,
        title: win ? "🏰 Base Defended!" : "Base Lost",
        stats: `Waves cleared: ${state.wave - 1}/10 · Towers built: ${state.towers.length}`
      });
    }

    GameRunner.onQuit = () => clearInterval(gameTick);
    startWave();
  }
};

// ====== 2. COIN TYCOON ======
Modes.tycoon = {
  start(canvas) {
    canvas.innerHTML = `
      <div style="text-align:center;color:var(--dim);margin-bottom:10px">
        Click customers as fast as you can! They're worth more as time goes on.
      </div>
      <div id="tycoonField" class="tycoon-field"></div>
    `;
    const field = $("tycoonField");
    let total = 0, served = 0;
    const customers = [];
    const emojis = ["🧑","👨","👩","🧒","👴","👵","🧔","👱","🤴","👸"];

    function spawnCustomer() {
      const c = document.createElement("div");
      c.className = "tycoon-cust";
      c.textContent = emojis[Math.floor(Math.random()*emojis.length)];
      const w = field.offsetWidth - 60;
      const h = field.offsetHeight - 60;
      c.style.left = Math.random() * w + "px";
      c.style.top = Math.random() * h + "px";
      const value = 5 + Math.floor((60 - GameRunner.time) * 0.4);
      c.onclick = () => {
        c.classList.add("served");
        total += value;
        served++;
        GameRunner.coins = total;
        GameRunner.score = served;
        updateGameHUD();
        floatText("+" + value, "#ffd93d");
        setTimeout(() => c.remove(), 400);
      };
      field.appendChild(c);
      setTimeout(() => { if (c.parentElement) c.remove(); }, 3500);
    }

    const sp = setInterval(spawnCustomer, 600);
    spawnCustomer(); spawnCustomer();

    GameRunner.onQuit = () => { clearInterval(sp); };

    gameTimer(60, () => {
      clearInterval(sp);
      endGame({
        win: total > 100,
        coins: total,
        title: "💰 Shift Over!",
        stats: `Customers served: ${served}`
      });
    });
  }
};

// ====== 3. ELEMENTAL CLASH ======
Modes.clash = {
  start(canvas) {
    canvas.innerHTML = `
      <div class="clash-wrap">
        <div class="clash-vs">
          <div class="clash-side">
            <h3>YOU</h3>
            <div class="clash-team" id="myTeam"></div>
          </div>
          <div style="font-size:24px;font-weight:900">VS</div>
          <div class="clash-side">
            <h3>RIVAL</h3>
            <div class="clash-team" id="botTeam"></div>
          </div>
        </div>
        <h3 style="margin:10px 0">Pick your element:</h3>
        <div class="clash-types">
          <div class="clash-type-btn" data-type="ocean"><span class="ct-icon">🌊</span>Ocean</div>
          <div class="clash-type-btn" data-type="fire"><span class="ct-icon">🔥</span>Fire</div>
          <div class="clash-type-btn" data-type="camp"><span class="ct-icon">🏕️</span>Camp</div>
        </div>
        <div class="clash-log" id="clashLog">Choose a type. Ocean beats Fire, Fire beats Camp, Camp beats Ocean.</div>
      </div>
    `;
    const state = { you: 3, bot: 3, wins: 0 };
    const renderTeams = () => {
      const yt = $("myTeam"), bt = $("botTeam");
      yt.innerHTML = ""; bt.innerHTML = "";
      for (let i = 0; i < 3; i++) {
        const ys = document.createElement("div");
        ys.className = "clash-slot" + (i >= state.you ? " defeated" : "");
        ys.textContent = i < state.you ? "🐉" : "💀";
        yt.appendChild(ys);
        const bs = document.createElement("div");
        bs.className = "clash-slot" + (i >= state.bot ? " defeated" : "");
        bs.textContent = i < state.bot ? "👹" : "💀";
        bt.appendChild(bs);
      }
    };
    renderTeams();

    const beats = { ocean: "fire", fire: "camp", camp: "ocean" };
    const emoji = { ocean: "🌊", fire: "🔥", camp: "🏕️" };

    document.querySelectorAll(".clash-type-btn").forEach(btn => {
      btn.onclick = () => {
        const my = btn.dataset.type;
        const types = ["ocean","fire","camp"];
        const bot = types[Math.floor(Math.random()*3)];
        let msg = `You: ${emoji[my]} ${my.toUpperCase()} vs Rival: ${emoji[bot]} ${bot.toUpperCase()} — `;
        if (my === bot) msg += "Tie!";
        else if (beats[my] === bot) { state.bot--; state.wins++; msg += "WIN!"; }
        else { state.you--; msg += "Loss!"; }
        $("clashLog").textContent = msg;
        renderTeams();
        if (state.you <= 0 || state.bot <= 0) finish();
      };
    });

    function finish() {
      const win = state.bot <= 0;
      const coins = win ? 150 + state.you * 25 : 40 + state.wins * 15;
      endGame({
        win, coins,
        title: win ? "🌋 Arena Champion!" : "Arena Loss",
        stats: `Rounds won: ${state.wins}`
      });
    }
  }
};

// ====== 4. INCUBATOR ======
Modes.incubator = {
  start(canvas) {
    canvas.innerHTML = `
      <div style="text-align:center;color:var(--dim);margin-bottom:10px">
        Place buddies in pods. Each rarity earns different rates per second.
      </div>
      <div id="incGrid" class="inc-grid"></div>
      <div class="inc-buddy-picker" id="incPicker">
        <div class="inc-picker-inner">
          <h3>Select a Buddy</h3>
          <div id="incPickerGrid" class="inc-picker-grid"></div>
        </div>
      </div>
    `;
    const pods = Array(6).fill(null);
    const rates = { common:1, uncommon:2, rare:5, epic:12, legendary:30, chroma:60, mystical:100 };
    let activeSlot = null;

    function renderPods() {
      const grid = $("incGrid");
      grid.innerHTML = "";
      pods.forEach((b, i) => {
        const pod = document.createElement("div");
        pod.className = "inc-pod" + (b ? " filled" : "");
        if (b) {
          pod.innerHTML = `<div class="inc-pod-icon">${buddyFrame(b.emoji, b.rarity, "", b.effect, b.id)}</div><div>${b.name}</div><div class="inc-pod-rate">+${rates[b.rarity]}/s</div>`;
        } else {
          pod.innerHTML = `<div class="inc-pod-icon">➕</div><div class="dim">Empty</div>`;
        }
        pod.onclick = () => { activeSlot = i; showPicker(); };
        grid.appendChild(pod);
      });
    }
    function placedCount(buddyId) {
      // Don't count the active slot — it's about to be replaced
      return pods.filter((p, i) => p && p.id === buddyId && i !== activeSlot).length;
    }
    function showPicker() {
      const picker = $("incPickerGrid");
      picker.innerHTML = "";
      const owned = BUDDIES.filter(b => ownedCount(b.id) > 0);
      if (owned.length === 0) {
        picker.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--dim)">No buddies yet. Open a pack first!</div>`;
      }
      owned.forEach(b => {
        const own = ownedCount(b.id);
        const placed = placedCount(b.id);
        const available = own - placed;
        const card = document.createElement("div");
        card.className = "inc-picker-buddy" + (available <= 0 ? " ip-disabled" : "");
        card.innerHTML = `
          <div class="ip-emoji">${buddyFrame(b.emoji, b.rarity, "", b.effect, b.id)}</div>
          <div class="ip-name">${b.name}</div>
          <div style="font-size:10px;color:var(--accent)">+${rates[b.rarity]}/s</div>
          <div style="font-size:9px;color:${available > 0 ? 'var(--accent2)' : 'var(--red)'}">${available}/${own} free</div>
        `;
        if (available > 0) {
          card.onclick = () => {
            pods[activeSlot] = b;
            $("incPicker").classList.remove("show");
            renderPods();
          };
        }
        picker.appendChild(card);
      });
      $("incPicker").classList.add("show");
    }
    $("incPicker").onclick = (e) => {
      if (e.target.id === "incPicker") $("incPicker").classList.remove("show");
    };
    renderPods();

    GameRunner.onTick = () => {
      let total = 0;
      pods.forEach(b => { if (b) total += rates[b.rarity]; });
      GameRunner.coins += total;
      GameRunner.score = total;
      updateGameHUD();
    };

    gameTimer(30, () => {
      endGame({
        win: GameRunner.coins > 0,
        coins: GameRunner.coins,
        title: "🏢 Hatching Complete!",
        stats: `Rate: ${GameRunner.score}/s · Pods filled: ${pods.filter(Boolean).length}/6`
      });
    });
  }
};

// ====== 5. ISLAND RAIDERS ======
Modes.raiders = {
  start(canvas) {
    let shots = 5, hits = 0;
    canvas.innerHTML = `
      <div style="text-align:center;color:var(--dim);margin-bottom:10px">
        Aim and launch! Hit the rival fortress to steal treasure. <span id="rdShots">${shots}</span> shots left.
      </div>
      <div id="rdField" class="island-field">
        <div class="island-catapult">🏹</div>
        <div class="island-target">🏰</div>
      </div>
      <div class="island-controls">
        <label>Angle: <input id="rdAngle" type="range" min="15" max="75" value="45"><span id="rdAngleV">45°</span></label>
        <label>Power: <input id="rdPower" type="range" min="40" max="100" value="70"><span id="rdPowerV">70</span></label>
        <button class="big-btn" id="rdLaunch" style="padding:12px 24px;font-size:14px">LAUNCH</button>
      </div>
    `;
    $("rdAngle").oninput = e => $("rdAngleV").textContent = e.target.value + "°";
    $("rdPower").oninput = e => $("rdPowerV").textContent = e.target.value;

    $("rdLaunch").onclick = () => {
      if (shots <= 0) return;
      shots--;
      $("rdShots").textContent = shots;
      const angle = +$("rdAngle").value;
      const power = +$("rdPower").value;
      launch(angle, power);
    };

    function launch(angle, power) {
      const field = $("rdField");
      const w = field.offsetWidth, h = field.offsetHeight;
      const startX = 50, startY = h - 60;
      const targetX = w - 70;
      const proj = document.createElement("div");
      proj.className = "island-projectile";
      proj.textContent = "💣";
      field.appendChild(proj);

      const rad = angle * Math.PI / 180;
      const v = power * 0.06;
      const vx = v * Math.cos(rad);
      const vy = -v * Math.sin(rad);
      let t = 0;
      const g = 0.02;
      const anim = setInterval(() => {
        t += 1;
        const x = startX + vx * t;
        const y = startY + vy * t + 0.5 * g * t * t;
        proj.style.left = x + "px";
        proj.style.top = y + "px";
        if (y > h - 30 || x > w) {
          clearInterval(anim);
          const dist = Math.abs(x - targetX);
          if (dist < 80) {
            hits++;
            const coins = 50 + Math.floor((80 - dist) * 0.3);
            GameRunner.coins += coins;
            GameRunner.score = hits;
            updateGameHUD();
            floatText("HIT +" + coins, "#4ade80");
            $("rdField").style.boxShadow = "inset 0 0 60px var(--green)";
            setTimeout(() => $("rdField").style.boxShadow = "", 300);
          } else {
            floatText("MISS!", "#ff5470");
            $("rdField").style.boxShadow = "inset 0 0 60px var(--red)";
            setTimeout(() => $("rdField").style.boxShadow = "", 300);
          }
          proj.remove();
          if (shots <= 0) finish();
        }
      }, 20);
    }

    function finish() {
      endGame({
        win: hits >= 3,
        coins: GameRunner.coins,
        title: hits >= 3 ? "🏴‍☠️ Treasure Stolen!" : "Raid Over",
        stats: `Hits: ${hits}/5`
      });
    }
  }
};

// ====== 6. BUDDY RUSH ======
Modes.rush = {
  start(canvas) {
    const N = 30;
    const board = [];
    const specials = { trap: -3, shortcut: 5, mystery: 0 };
    for (let i = 0; i < N; i++) {
      if (i === 0) board.push("start");
      else if (i === N-1) board.push("finish");
      else {
        const r = Math.random();
        if (r < 0.1) board.push("trap");
        else if (r < 0.2) board.push("shortcut");
        else if (r < 0.27) board.push("mystery");
        else board.push("normal");
      }
    }
    let you = 0, bot = 0, rolling = false;
    canvas.innerHTML = `
      <div class="rush-board" id="rushBoard"></div>
      <div class="rush-controls">
        <span class="rush-dice" id="rushDice">🎲</span>
        <button class="big-btn" id="rushRoll" style="padding:12px 28px;font-size:15px">ROLL</button>
      </div>
      <div class="rush-log" id="rushLog">Roll to start. First to tile 30 wins!</div>
    `;
    function render() {
      const b = $("rushBoard");
      b.innerHTML = "";
      board.forEach((t, i) => {
        const tile = document.createElement("div");
        tile.className = "rush-tile " + t;
        if (you === i && bot === i) tile.classList.add("both");
        else if (you === i) tile.classList.add("you");
        else if (bot === i) tile.classList.add("bot");
        if (t === "start") tile.textContent = "S";
        else if (t === "finish") tile.textContent = "🏁";
        else tile.textContent = i;
        b.appendChild(tile);
      });
    }
    render();

    function log(msg) { $("rushLog").innerHTML = msg + "<br>" + $("rushLog").innerHTML; }
    function move(who, n) {
      let pos = who === "you" ? you : bot;
      pos = Math.min(N-1, pos + n);
      const t = board[pos];
      let extra = "";
      if (t === "trap") { pos = Math.max(0, pos - 3); extra = " — TRAP! Back 3"; }
      else if (t === "shortcut") { pos = Math.min(N-1, pos + 5); extra = " — SHORTCUT! +5"; }
      else if (t === "mystery") {
        const bonus = Math.floor(Math.random() * 30) + 10;
        GameRunner.coins += bonus;
        extra = ` — MYSTERY! +${bonus}🪙`;
      }
      if (who === "you") you = pos; else bot = pos;
      log(`${who === "you" ? "🔵 You" : "🔴 Bot"} rolled ${n}, now on ${pos}${extra}`);
      render();
    }

    $("rushRoll").onclick = () => {
      if (rolling) return; rolling = true;
      const dice = $("rushDice");
      const faces = ["⚀","⚁","⚂","⚃","⚄","⚅"];
      let spins = 8;
      const spin = setInterval(() => {
        dice.textContent = faces[Math.floor(Math.random()*6)];
        spins--;
        if (spins <= 0) {
          clearInterval(spin);
          const roll = Math.floor(Math.random()*6) + 1;
          dice.textContent = faces[roll-1];
          move("you", roll);
          if (you >= N-1) { finish(true); return; }
          setTimeout(() => {
            const botRoll = Math.floor(Math.random()*6) + 1;
            move("bot", botRoll);
            if (bot >= N-1) { finish(false); return; }
            rolling = false;
          }, 700);
        }
      }, 80);
    };

    function finish(win) {
      const coins = (win ? 150 : 50) + GameRunner.coins;
      endGame({
        win, coins,
        title: win ? "🏃 You Won the Race!" : "Bot Reached Finish First",
        stats: `Your tile: ${you} · Bot tile: ${bot}`
      });
    }
  }
};

// ====== 7. CASTLE SIEGE ======
Modes.siege = {
  start(canvas) {
    canvas.innerHTML = `
      <div style="text-align:center;color:var(--dim);margin-bottom:10px">
        Tap attackers before they reach the throne. Earn a multiplier for each second held!
      </div>
      <div id="siegeArena" class="siege-arena">
        <div class="siege-throne">👑</div>
      </div>
    `;
    const arena = $("siegeArena");
    let kills = 0, breaches = 0, mult = 1;
    const enemies = [];

    function spawn() {
      const e = document.createElement("div");
      e.className = "siege-attacker";
      e.textContent = ["👹","👺","💀","👻","🧟"][Math.floor(Math.random()*5)];
      const side = Math.floor(Math.random()*4);
      const w = arena.offsetWidth, h = arena.offsetHeight;
      let sx, sy;
      if (side === 0) { sx = Math.random()*w; sy = -30; }
      else if (side === 1) { sx = w; sy = Math.random()*h; }
      else if (side === 2) { sx = Math.random()*w; sy = h; }
      else { sx = -30; sy = Math.random()*h; }
      e.style.left = sx + "px"; e.style.top = sy + "px";
      const tx = w/2 - 18, ty = h/2 - 18;
      const dx = tx - sx, dy = ty - sy;
      const dist = Math.sqrt(dx*dx + dy*dy);
      const speed = 0.4 + Math.random() * 0.3 + GameRunner.time * 0.005;
      const vx = (dx / dist) * speed, vy = (dy / dist) * speed;
      const enemy = { el: e, x: sx, y: sy, vx, vy, dead: false };
      e.onclick = () => {
        if (enemy.dead) return;
        enemy.dead = true; e.classList.add("dying");
        kills++;
        const earn = Math.round(4 * mult);
        GameRunner.coins += earn;
        GameRunner.score = kills;
        floatText("+" + earn, "#ffd93d");
        setTimeout(() => e.remove(), 400);
        updateGameHUD();
      };
      arena.appendChild(e);
      enemies.push(enemy);
    }

    const sp = setInterval(spawn, 700);

    const move = setInterval(() => {
      enemies.forEach(en => {
        if (en.dead) return;
        en.x += en.vx; en.y += en.vy;
        en.el.style.left = en.x + "px";
        en.el.style.top = en.y + "px";
        const tx = arena.offsetWidth/2, ty = arena.offsetHeight/2;
        if (Math.abs(en.x - tx) < 30 && Math.abs(en.y - ty) < 30) {
          en.dead = true; en.el.remove();
          breaches++;
          if (breaches >= 5) { stop(false); }
        }
      });
    }, 30);

    GameRunner.onTick = () => { mult += 0.1; };

    GameRunner.onQuit = () => { clearInterval(sp); clearInterval(move); };

    gameTimer(45, () => stop(true));

    function stop(win) {
      clearInterval(sp); clearInterval(move);
      const coins = GameRunner.coins + (win ? 80 : 0);
      endGame({
        win, coins,
        title: win ? "👑 Throne Held!" : "Castle Breached",
        stats: `Kills: ${kills} · Breaches: ${breaches}/5 · Final ×: ${mult.toFixed(1)}`
      });
    }
  }
};

// ====== 8. MUTATION LAB ======
Modes.lab = {
  start(canvas) {
    let dna = 0, bossHp = 200;
    canvas.innerHTML = `
      <div class="lab-wrap">
        <div class="lab-boss" id="labBoss">👾</div>
        <div class="lab-hp-bar"><div class="lab-hp-fill" id="labHpFill" style="width:100%"></div></div>
        <div class="lab-info">HP: <span id="labHp">200</span> · DNA: <span id="labDna">0</span></div>
        <p class="dim">Tap the boss to deal damage and earn 1 DNA. Spend 10 DNA on Fusion Attack.</p>
        <div class="lab-actions">
          <button id="labFuse">🧬 Fusion Attack (10 DNA, 30 dmg)</button>
        </div>
      </div>
    `;
    function render() {
      $("labHp").textContent = bossHp;
      $("labDna").textContent = dna;
      $("labHpFill").style.width = Math.max(0, bossHp / 200 * 100) + "%";
    }
    $("labBoss").onclick = () => {
      if (bossHp <= 0) return;
      bossHp -= 1; dna += 1;
      GameRunner.score = dna;
      updateGameHUD();
      render();
      if (bossHp <= 0) finish(true);
    };
    $("labFuse").onclick = () => {
      if (dna < 10 || bossHp <= 0) return;
      dna -= 10; bossHp -= 30;
      floatText("FUSION!", "#a855f7");
      render();
      updateGameHUD();
      if (bossHp <= 0) finish(true);
    };

    gameTimer(60, () => finish(bossHp <= 0));

    function finish(win) {
      const coins = win ? 200 : Math.floor((200 - bossHp) * 0.5);
      endGame({
        win, coins,
        title: win ? "🧪 Boss Defeated!" : "Boss Survived",
        stats: `DNA earned: ${dna} · Damage dealt: ${200 - bossHp}`
      });
    }
  }
};

// ====== 9. GLITCH HUNT ======
Modes.glitch = {
  start(canvas) {
    let round = 1, correct = 0;
    canvas.innerHTML = `
      <div style="text-align:center;color:var(--dim);margin-bottom:14px" id="glitchPrompt">
        Round 1/5: Spot the glitched buddy!
      </div>
      <div class="glitch-row" id="glitchRow"></div>
    `;

    function newRound() {
      const row = $("glitchRow");
      row.innerHTML = "";
      const buddies = ["🐶","🐱","🐰","🐻","🦊","🐼","🐨","🐯"];
      const same = buddies[Math.floor(Math.random()*buddies.length)];
      const impIdx = Math.floor(Math.random() * 5);
      for (let i = 0; i < 5; i++) {
        const s = document.createElement("div");
        s.className = "glitch-suspect";
        s.textContent = same;
        if (i === impIdx) s.classList.add("imposter-anim");
        s.onclick = () => {
          if (i === impIdx) {
            s.classList.add("revealed-good");
            correct++;
            GameRunner.coins += 30;
            GameRunner.score = correct;
            floatText("+30", "#4ade80");
          } else {
            s.classList.add("revealed-bad");
            floatText("Miss!", "#ff5470");
          }
          updateGameHUD();
          setTimeout(() => {
            round++;
            if (round > 5) finish();
            else { $("glitchPrompt").textContent = `Round ${round}/5: Spot the glitched buddy!`; newRound(); }
          }, 600);
        };
        row.appendChild(s);
      }
    }
    newRound();

    function finish() {
      const coins = GameRunner.coins + (correct === 5 ? 50 : 0);
      endGame({
        win: correct >= 3,
        coins,
        title: correct === 5 ? "🕵️ Perfect Detective!" : (correct >= 3 ? "Good Hunt!" : "Hunt Failed"),
        stats: `Correct: ${correct}/5`
      });
    }
  }
};

// ====== 10. THE FEAST ======
Modes.feast = {
  start(canvas) {
    let round = 1, score = 0;
    const foods = ["🍕","🍔","🍣","🍪","🍩","🍦","🍫","🍇"];
    let craving = [];
    let answered = [];
    canvas.innerHTML = `
      <div class="feast-wrap">
        <div class="feast-dragon">🐉</div>
        <div class="feast-prompt" id="feastPrompt">Memorize the dragon's craving!</div>
        <div class="feast-cravings" id="feastCravings"></div>
        <div class="feast-foods" id="feastFoods"></div>
      </div>
    `;

    function newRound() {
      $("feastPrompt").textContent = `Round ${round}/5: Memorize the order!`;
      const len = 2 + Math.min(3, Math.floor(round / 2));
      craving = [];
      for (let i = 0; i < len; i++) craving.push(foods[Math.floor(Math.random() * foods.length)]);
      answered = [];
      const c = $("feastCravings");
      c.innerHTML = "";
      craving.forEach(f => {
        const el = document.createElement("div");
        el.className = "feast-craving";
        el.textContent = f;
        c.appendChild(el);
      });
      $("feastFoods").innerHTML = "";
      // Reveal time
      setTimeout(() => {
        c.querySelectorAll(".feast-craving").forEach(e => e.textContent = "❓");
        $("feastPrompt").textContent = "Feed in order!";
        renderFoods();
      }, 1500 + len * 400);
    }
    function renderFoods() {
      const g = $("feastFoods");
      g.innerHTML = "";
      foods.forEach(f => {
        const b = document.createElement("div");
        b.className = "feast-food";
        b.textContent = f;
        b.onclick = () => pick(f);
        g.appendChild(b);
      });
    }
    function pick(f) {
      const idx = answered.length;
      if (f === craving[idx]) {
        $("feastCravings").children[idx].textContent = f;
        $("feastCravings").children[idx].classList.add("done");
        answered.push(f);
        score += 20;
        GameRunner.coins += 20;
        GameRunner.score = score;
        updateGameHUD();
        if (answered.length === craving.length) {
          floatText("COMBO!", "#ffd93d");
          GameRunner.coins += 30;
          updateGameHUD();
          setTimeout(() => {
            round++;
            if (round > 5) finish();
            else newRound();
          }, 800);
        }
      } else {
        floatText("Wrong!", "#ff5470");
        score -= 5;
        setTimeout(() => {
          round++;
          if (round > 5) finish();
          else newRound();
        }, 600);
      }
    }
    newRound();

    function finish() {
      endGame({
        win: score >= 60,
        coins: Math.max(0, GameRunner.coins),
        title: score >= 100 ? "🥞 Dragon Feasted!" : "Feast Over",
        stats: `Score: ${score}`
      });
    }
  }
};

function quitGame() {
  if (!GameRunner.current) return;
  if (!confirm("Quit this game? Your progress will be lost.")) return;
  if (GameRunner.timer) { clearInterval(GameRunner.timer); GameRunner.timer = null; }
  if (GameRunner.onQuit) { try { GameRunner.onQuit(); } catch(e){} }
  GameRunner.onQuit = null; GameRunner.onTick = null;
  GameRunner.current = null;
  show("play");
}

function setupGameNav() {
  $("gameQuit").onclick = quitGame;
  $("gameResultDone").onclick = () => {
    $("gameResult").classList.remove("show");
    show("play");
    GameRunner.current = null;
  };
  $("gameResultAgain").onclick = () => {
    const id = GameRunner.current;
    $("gameResult").classList.remove("show");
    if (id) startMode(id);
  };
}

// ---------- BOOT ----------
// Clean up any buddies stuck at count 0 from older save data
Object.keys(State.owned).forEach(id => {
  if ((State.owned[id] || 0) <= 0) delete State.owned[id];
});
save();

setupNav();
setupGameNav();
renderPlay();
renderShop();
renderDex();
renderWheelLabels();
updateWheelUI();
updateWallet();
setInterval(() => { updateWheelUI(); updateWallet(); }, 1000);
