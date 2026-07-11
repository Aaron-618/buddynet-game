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
  mystical:  { name: "Mystical",  color: "#ff5470", sell: 10000 },
  secret:    { name: "Secret",    color: "#ffffff", sell: 50000 }
};
const RARITY_ORDER = ["common", "uncommon", "rare", "epic", "legendary", "chroma", "mystical", "secret"];

// ---------- SECRET BUDDIES ----------
// Unlocked by playing — never come from packs.
const SECRET_BUDDIES = [
  {
    id: "secret_void_walker", name: "Void Walker", emoji: "🌑",
    rarity: "secret", sell: 50000, pack: "Secret Achievement", packId: "secret",
    unlock: { type: "packs_opened", target: 200 },
    hint: "Open 200 packs total."
  },
  {
    id: "secret_battle_hero", name: "Battle Hero", emoji: "⚔️",
    rarity: "secret", sell: 50000, pack: "Secret Achievement", packId: "secret",
    unlock: { type: "games_won", target: 25 },
    hint: "Win 25 game-mode battles."
  },
  {
    id: "secret_lucky_phantom", name: "Lucky Phantom", emoji: "🍀",
    rarity: "secret", sell: 50000, pack: "Secret Achievement", packId: "secret",
    unlock: { type: "mysticals_pulled", target: 1 },
    hint: "Pull any Mystical from a pack."
  },
  {
    id: "secret_tycoon", name: "Tycoon", emoji: "💰",
    rarity: "secret", sell: 50000, pack: "Secret Achievement", packId: "secret",
    unlock: { type: "coins_held", target: 100000 },
    hint: "Have 100,000 coins at once."
  },
  {
    id: "secret_collector_supreme", name: "Collector Supreme", emoji: "🏆",
    rarity: "secret", sell: 50000, pack: "Secret Achievement", packId: "secret",
    unlock: { type: "all_base", target: 1 },
    hint: "Collect all 80 base buddies."
  },
  {
    id: "secret_eternal", name: "The Eternal", emoji: "♾️",
    rarity: "secret", sell: 100000, pack: "Secret Achievement", packId: "secret",
    unlock: { type: "all_non_secret", target: 1 },
    hint: "Collect every base and endgame buddy."
  }
];

// ---------- HIDDEN BUDDIES ----------
// Invisible click targets scattered around the UI. No hints, no "?" placeholder.
// Discover them by clicking exactly on the right spot.
const HIDDEN_BUDDIES = [
  { id: "hidden_logo_ghost",   name: "Logo Ghost",     emoji: "👻", sell: 75000,
    screen: "home", style: "top:130px;left:50%;width:80px;height:50px;transform:translateX(-50%);" },
  { id: "hidden_corner_lurker",name: "Corner Lurker",  emoji: "🕷️", sell: 75000,
    screen: "home", style: "bottom:20px;right:20px;width:60px;height:60px;" },
  { id: "hidden_market_mole",  name: "Market Mole",    emoji: "🐀", sell: 75000,
    screen: "shop", style: "top:110px;right:30px;width:50px;height:50px;" },
  { id: "hidden_dex_eye",      name: "Dex Eye",        emoji: "👁️", sell: 75000,
    screen: "dex",  style: "top:120px;left:24px;width:54px;height:54px;" },
  { id: "hidden_play_pixie",   name: "Play Pixie",     emoji: "🧚", sell: 75000,
    screen: "play", style: "bottom:30px;left:24px;width:60px;height:60px;" }
];

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
        { name: "Flame Lizard", emoji: "🐲" }
      ]},
      { rarity: "chroma", weight: 0.04, buddies: [
        { name: "Blue Flare", emoji: "💙" }
      ]},
      { rarity: "mystical", weight: 0.01, buddies: [
        { name: "Rainbow Charmander", emoji: "🦎", sell: 100000 }
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
        { name: "Pterodactyl", emoji: "🪶" }
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
        { name: "Jelly Bean", emoji: "🟢" },
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
        { name: "Phantom Strike", emoji: "👤", effect: "rainbow" }
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
        { name: "Centaur", emoji: "🐎" },
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
        { name: "The Titan", emoji: "🗻" }
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
        { name: "Hellhound", emoji: "🐕" },
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
        { name: "Ice Shard", emoji: "🔷" },
        { name: "Frost Fairy", emoji: "🧚‍♀️" },
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
        { name: "The Yeti", emoji: "🐻‍❄️" }
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
        { name: "Magma Drop", emoji: "💧" },
        { name: "Cinder", emoji: "✨" },
        { name: "Spark Imp", emoji: "💢" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Fire Spirit", emoji: "🔥" },
        { name: "Lava Slug", emoji: "🐛" },
        { name: "Phoenix Egg", emoji: "🥚" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Magma Beast", emoji: "🦏" },
        { name: "Volcano Lord", emoji: "🌋" }
      ]},
      { rarity: "legendary", weight: 0.5, buddies: [
        { name: "The Fire God", emoji: "🌋" }
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
        { name: "Topaz", emoji: "🟨" }
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
        { name: "The Diamond Lord", emoji: "🤴" }
      ]},
      { rarity: "chroma", weight: 0.1, buddies: [
        { name: "Prism Geode", emoji: "💠", effect: "rainbow" }
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
        { name: "Drizzle", emoji: "🌧️" },
        { name: "Mist", emoji: "🌫️" },
        { name: "Hail Stone", emoji: "⚪" },
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
        { name: "The Storm King", emoji: "⛈️" }
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
        { name: "Drake", emoji: "🐊" },
        { name: "Hatchling", emoji: "🥚" },
        { name: "Wyvern", emoji: "🐲" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Frost Wyrm", emoji: "🐲" },
        { name: "Sea Serpent", emoji: "🐍" },
        { name: "Wind Drake", emoji: "🌬️" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Ancient Wyrm", emoji: "🐉" },
        { name: "Dragon Knight", emoji: "🛡️" }
      ]},
      { rarity: "legendary", weight: 0.5, buddies: [
        { name: "The Dragon King", emoji: "🐉" }
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
        { name: "Mummy", emoji: "🧟" },
        { name: "Skeleton Warrior", emoji: "⚔️" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Lich King", emoji: "☠️" },
        { name: "Bone Dragon", emoji: "🦴" }
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

// ---------- DIAMOND PACK (Gems only, always available) ----------
PACKS.push({
  id: "diamond", name: "Diamond Pack", emoji: "💎", price: 3, currency: "gems",
  desc: "Premium pack — pay with gems for guaranteed Epic+ tier buddies.",
  alwaysShow: true,
  drops: [
    { rarity: "epic", weight: 60, buddies: [
      { name: "Diamond Pup", emoji: "🐶" },
      { name: "Diamond Kitten", emoji: "🐱" },
      { name: "Diamond Knight", emoji: "🤺" },
      { name: "Diamond Eagle", emoji: "🦅" }
    ]},
    { rarity: "legendary", weight: 30, buddies: [
      { name: "Diamond Dragon", emoji: "🐉" },
      { name: "Diamond Lord", emoji: "🎩" }
    ]},
    { rarity: "chroma", weight: 8, buddies: [
      { name: "Rainbow Diamond", emoji: "💎", effect: "rainbow" }
    ]},
    { rarity: "mystical", weight: 2, buddies: [
      { name: "The Eternal Diamond", emoji: "💠", sell: 50000 }
    ]}
  ]
});

// Merge Tier 3 packs (loaded from tier3.js) into the master PACKS list
if (typeof TIER3_PACKS !== "undefined") TIER3_PACKS.forEach(p => PACKS.push(p));

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

// Register secret buddies into the same indexes so the Dex / sell / lookup all see them
SECRET_BUDDIES.forEach(s => {
  const buddy = {
    id: s.id, name: s.name, emoji: s.emoji,
    rarity: s.rarity, pack: s.pack, packId: s.packId,
    sell: s.sell, effect: "secret-shimmer", unlock: s.unlock, hint: s.hint, secret: true
  };
  BUDDIES.push(buddy);
  BUDDY_BY_ID[s.id] = buddy;
});

// Register hidden buddies as well so they integrate with sell, dex, etc.
HIDDEN_BUDDIES.forEach(h => {
  const buddy = {
    id: h.id, name: h.name, emoji: h.emoji,
    rarity: "secret", pack: "Hidden Find", packId: "hidden",
    sell: h.sell, effect: "secret-shimmer", hidden: true
  };
  BUDDIES.push(buddy);
  BUDDY_BY_ID[h.id] = buddy;
});

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
function _num(key, fallback) {
  const v = parseInt(localStorage.getItem(key));
  return Number.isFinite(v) ? v : fallback;
}
function _achievements() {
  try {
    const a = JSON.parse(localStorage.getItem("bn_achievements") || "{}") || {};
    return {
      wheel_spins:     Number.isFinite(a.wheel_spins)     ? a.wheel_spins     : 0,
      games_won:       Number.isFinite(a.games_won)       ? a.games_won       : 0,
      mysticals_pulled:Number.isFinite(a.mysticals_pulled)? a.mysticals_pulled: 0
    };
  } catch { return { wheel_spins: 0, games_won: 0, mysticals_pulled: 0 }; }
}

const State = {
  coins: _num("bn_coins", 100),
  gems: _num("bn_gems", 0),
  packsOpened: _num("bn_packs", 0),
  owned: (() => { try { return JSON.parse(localStorage.getItem("bn_owned") || "{}") || {}; } catch { return {}; } })(),
  tokens: (() => { try { return JSON.parse(localStorage.getItem("bn_tokens") || "{}") || {}; } catch { return {}; } })(),
  lastSpin: _num("bn_lastSpin", 0),
  endgameUnlocked: localStorage.getItem("bn_endgame") === "true",
  ultraUnlocked: localStorage.getItem("bn_ultra") === "true",
  playTimeSec: _num("bn_playtime", 0),
  achievements: _achievements(),
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
  localStorage.setItem("bn_ultra", State.ultraUnlocked ? "true" : "false");
  localStorage.setItem("bn_playtime", State.playTimeSec);
  localStorage.setItem("bn_achievements", JSON.stringify(State.achievements));
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
  mystical:  "samsung",
  secret:    "samsung"
};

function buddyImg(emoji, cls = "", rarity = "", buddyId = "") {
  // Prefer hand-drawn custom SVG art when available
  if (buddyId && typeof CUSTOM_SVG !== "undefined" && CUSTOM_SVG[buddyId]) {
    return `<div class="b-img b-custom ${cls}">${CUSTOM_SVG[buddyId]}</div>`;
  }
  // Lower rarities: plain colored disc (looks cleaner than the emoji stand-ins)
  if (rarity === "common" || rarity === "uncommon" || rarity === "rare" || rarity === "epic") {
    return `<div class="b-img b-disc b-disc-${rarity} ${cls}"></div>`;
  }
  // Legendary / Chroma / Mystical / Secret: keep the emoji art
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
  setTimeout(() => { try { placeHiddenSpots(); } catch(e){} }, 0);
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
    return p && !p.requiresAll && !p.alwaysShow;
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

// Tier 3 helpers
function tier3Packs() { return PACKS.filter(p => p.tier3); }
function endgameOnlyBuddies() {
  return BUDDIES.filter(b => {
    const p = PACKS.find(pk => pk.id === b.packId);
    return p && p.requiresAll && !p.tier3;
  });
}
function tier3Buddies() {
  return BUDDIES.filter(b => {
    const p = PACKS.find(pk => pk.id === b.packId);
    return p && p.tier3;
  });
}
function checkUltraUnlock() {
  if (State.ultraUnlocked) return true;
  const baseOk = baseBuddies().every(b => ownedCount(b.id) > 0);
  const endgameOk = endgameOnlyBuddies().every(b => ownedCount(b.id) > 0);
  if (baseOk && endgameOk && endgameOnlyBuddies().length > 0) {
    State.ultraUnlocked = true;
    save();
    return true;
  }
  return false;
}

function isPackUnlocked(pack) {
  if (pack.tier3) return State.ultraUnlocked;
  if (!pack.requiresAll) return true;
  return State.endgameUnlocked;
}

// ---------- SECRET BUDDIES ----------
function targetFor(unlock) {
  switch (unlock.type) {
    case "all_base":       return baseBuddies().length;
    case "all_non_secret": return BUDDIES.filter(b => !b.secret && !b.hidden).length;
    default:               return unlock.target;
  }
}

function progressFor(unlock) {
  switch (unlock.type) {
    case "packs_opened":    return State.packsOpened;
    case "wheel_spins":     return State.achievements.wheel_spins || 0;
    case "games_won":       return State.achievements.games_won || 0;
    case "mysticals_pulled":return State.achievements.mysticals_pulled || 0;
    case "coins_held":      return State.coins;
    case "all_base":        return baseCollectedCount();
    case "all_non_secret":  return BUDDIES.filter(b => !b.secret && !b.hidden && ownedCount(b.id) > 0).length;
    default: return 0;
  }
}

function checkSecretUnlocks() {
  const newlyUnlocked = [];
  SECRET_BUDDIES.forEach(s => {
    if (ownedCount(s.id) > 0) return;
    if (progressFor(s.unlock) >= targetFor(s.unlock)) {
      State.owned[s.id] = 1;
      State.gems += 3;
      newlyUnlocked.push(s);
    }
  });
  if (newlyUnlocked.length > 0) save();
  return newlyUnlocked;
}

function celebrateSecretUnlock(buddy) {
  const overlay = document.createElement("div");
  overlay.className = "endgame-celebrate secret-celebrate";
  overlay.innerHTML = `
    <div class="ec-card secret-card">
      <div class="ec-emoji">${buddy.emoji}</div>
      <h1>SECRET BUDDY UNLOCKED!</h1>
      <p><strong>${buddy.name}</strong><br>${buddy.hint}</p>
      <button class="big-btn" id="ecOkSecret">View Collection</button>
    </div>
  `;
  document.body.appendChild(overlay);
  document.getElementById("ecOkSecret").onclick = () => {
    overlay.remove();
    show("dex");
  };
}

function maybeUnlockSecrets() {
  const unlocked = checkSecretUnlocks();
  unlocked.forEach((s, i) => setTimeout(() => celebrateSecretUnlock(s), i * 400));
  if (unlocked.length > 0) {
    updateWallet();
    renderDex();
  }
}

// ---------- HIDDEN BUDDIES PLACEMENT ----------
function placeHiddenSpots() {
  document.querySelectorAll(".hidden-spot").forEach(s => s.remove());
  HIDDEN_BUDDIES.forEach(h => {
    if (ownedCount(h.id) > 0) return;
    const screenEl = document.getElementById(h.screen);
    if (!screenEl || !screenEl.classList.contains("active")) return;
    const spot = document.createElement("div");
    spot.className = "hidden-spot";
    spot.style.cssText = `position:fixed;z-index:80;${h.style}`;
    spot.dataset.hidden = h.id;
    spot.title = h.name;  // visible only when reveal mode adds tooltip
    spot.onclick = (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (ownedCount(h.id) > 0) return;
      State.owned[h.id] = 1;
      State.gems += 3;
      save();
      spot.remove();
      celebrateHiddenFind(h);
      updateWallet();
      renderDex();
    };
    document.body.appendChild(spot);
  });
}

// ---------- PERSONAL REVEAL MODE ----------
// Glow only appears on YOUR device — stored in YOUR localStorage.
// Other people opening the URL see normal invisible spots unless they enable it too.
function applyRevealMode() {
  if (localStorage.getItem("bn_reveal_hidden") === "true") {
    document.body.classList.add("reveal-spots");
  } else {
    document.body.classList.remove("reveal-spots");
  }
}
function toggleRevealMode() {
  const current = localStorage.getItem("bn_reveal_hidden") === "true";
  localStorage.setItem("bn_reveal_hidden", current ? "false" : "true");
  applyRevealMode();
  // brief flash so user knows it switched
  const flash = document.createElement("div");
  flash.className = "reveal-flash";
  flash.textContent = current ? "🔒 Reveal OFF" : "✨ Reveal ON";
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 1400);
}
document.addEventListener("keydown", (e) => {
  if (e.shiftKey && (e.key === "H" || e.key === "h")) {
    toggleRevealMode();
  }
});

function celebrateHiddenFind(h) {
  const overlay = document.createElement("div");
  overlay.className = "endgame-celebrate secret-celebrate hidden-celebrate";
  overlay.innerHTML = `
    <div class="ec-card secret-card">
      <div class="ec-emoji">${h.emoji}</div>
      <div style="font-size:13px;color:var(--accent2);letter-spacing:3px;font-weight:800">🕳 HIDDEN FIND</div>
      <h1>${h.name}</h1>
      <p>You found a hidden buddy! Sells for 🪙 ${h.sell.toLocaleString()}.</p>
      <button class="big-btn" id="ecOkHidden">Keep Exploring</button>
    </div>
  `;
  document.body.appendChild(overlay);
  document.getElementById("ecOkHidden").onclick = () => overlay.remove();
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

function celebrateUltraUnlock() {
  const overlay = document.createElement("div");
  overlay.className = "endgame-celebrate ultra-celebrate";
  const tier3Count = tier3Buddies().length;
  const tier3PackCount = tier3Packs().length;
  overlay.innerHTML = `
    <div class="ec-card ultra-card">
      <div class="ec-emoji">🏆🎊🏆</div>
      <h1>CONGRATULATIONS!</h1>
      <div style="font-size:14px;color:var(--accent2);letter-spacing:3px;font-weight:800;margin-bottom:8px">★ TIER 3 ULTRA UNLOCKED ★</div>
      <p>You collected every buddy in the game.<br>
      <strong>${tier3PackCount} new packs</strong> with <strong>${tier3Count} more buddies</strong> are now in the Market.</p>
      <button class="big-btn" id="ecOkUltra">Open Ultra Market</button>
    </div>
  `;
  document.body.appendChild(overlay);
  document.getElementById("ecOkUltra").onclick = () => {
    overlay.remove();
    show("shop");
  };
}

// ---------- HUD ----------
function updateWallet() {
  $("walletCoins").textContent = State.coins.toLocaleString();
  $("walletGems").textContent = State.gems.toLocaleString();

  const baseTotal = baseBuddies().length;
  const baseOwned = baseCollectedCount();
  $("baseProgress").textContent = `${baseOwned}/${baseTotal}` + (baseOwned >= baseTotal ? " ✓" : "");
  $("baseProgress").style.color = baseOwned >= baseTotal ? "var(--green)" : "var(--accent)";

  const endgameBuddiesAll = BUDDIES.filter(b => {
    const p = PACKS.find(pk => pk.id === b.packId);
    return p && p.requiresAll;
  });
  const endgameOwned = endgameBuddiesAll.filter(b => ownedCount(b.id) > 0).length;
  if (State.endgameUnlocked) {
    $("endgameProgress").textContent = `${endgameOwned}/${endgameBuddiesAll.length}`;
    $("endgameProgress").style.color = "var(--accent)";
  } else {
    $("endgameProgress").textContent = "🔒";
    $("endgameProgress").style.color = "var(--dim)";
  }

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

  // Top-of-grid status banner (varies by which tier the player is on)
  const ultra = State.ultraUnlocked;
  const endgameOn = State.endgameUnlocked;
  const t3Packs = PACKS.filter(p => p.tier3);

  if (ultra) {
    const banner = document.createElement("div");
    banner.className = "endgame-banner unlocked ultra-banner";
    banner.innerHTML = `★ <strong>TIER 3 ULTRA MARKET</strong> ★ — base and endgame packs are sealed. ${t3Packs.length} ultra packs available.`;
    grid.appendChild(banner);
  } else if (endgameOn) {
    const endgameBuds = endgameOnlyBuddies();
    const collectedEnd = endgameBuds.filter(b => ownedCount(b.id) > 0).length;
    const banner = document.createElement("div");
    banner.className = "endgame-banner unlocked";
    banner.innerHTML = `🏆 <strong>ENDGAME MARKET</strong> — base packs are sealed. Collect every endgame buddy to unlock Tier 3 (<strong>${collectedEnd}/${endgameBuds.length}</strong>).`;
    grid.appendChild(banner);
  } else {
    const total = baseBuddies().length;
    const collected = baseCollectedCount();
    const banner = document.createElement("div");
    banner.className = "endgame-banner";
    banner.innerHTML = `🔒 Collect all base buddies to unlock endgame packs — <strong>${collected}/${total}</strong> collected`;
    grid.appendChild(banner);
  }

  // Pack visibility cascades by tier — but diamond/gem packs are always shown
  const alwaysPacks = PACKS.filter(p => p.alwaysShow);
  let tierPacks;
  if (ultra) tierPacks = PACKS.filter(p => p.tier3);
  else if (endgameOn) tierPacks = PACKS.filter(p => p.requiresAll && !p.tier3);
  else tierPacks = PACKS.filter(p => !p.requiresAll && !p.alwaysShow);
  const visiblePacks = [...alwaysPacks, ...tierPacks];
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
    if (buddy.rarity === "mystical") {
      State.achievements.mysticals_pulled = (State.achievements.mysticals_pulled || 0) + 1;
      State.gems += 1;
    }
    if (wasNew) newCount++;
    if (!results[buddy.id]) results[buddy.id] = { buddy, count: 0, isNew: wasNew };
    results[buddy.id].count++;
    rarityTally[buddy.rarity] = (rarityTally[buddy.rarity] || 0) + 1;
  }

  const wasEnd = State.endgameUnlocked;
  const wasUltra = State.ultraUnlocked;
  checkEndgameUnlock();
  checkUltraUnlock();
  save();
  updateWallet();
  renderShop();
  renderDex();
  if (!wasEnd && State.endgameUnlocked) celebrateEndgameUnlock();
  if (!wasUltra && State.ultraUnlocked) setTimeout(celebrateUltraUnlock, wasEnd ? 0 : 600);
  maybeUnlockSecrets();
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
  if (buddy.rarity === "mystical") {
    State.achievements.mysticals_pulled = (State.achievements.mysticals_pulled || 0) + 1;
    State.gems += 1;
    floatText("+1 💎", "#6cf0c2");
  }
  const wasEnd = State.endgameUnlocked;
  const wasUltra = State.ultraUnlocked;
  checkEndgameUnlock();
  checkUltraUnlock();
  save();
  updateWallet();
  renderShop();
  renderDex();
  if (!wasEnd && State.endgameUnlocked) celebrateEndgameUnlock();
  if (!wasUltra && State.ultraUnlocked) setTimeout(celebrateUltraUnlock, wasEnd ? 0 : 600);
  maybeUnlockSecrets();

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
    const packOf = b => PACKS.find(pk => pk.id === b.packId);
    const isDiamond = b => { const p = packOf(b); return p && p.alwaysShow; };
    const isEndgame = b => { const p = packOf(b); return p && p.requiresAll && !p.tier3; };
    const isTier3  = b => { const p = packOf(b); return p && p.tier3; };
    const isSecret = b => !!b.secret;
    const isHidden = b => !!b.hidden;
    const baseVis = visible.filter(b => !isEndgame(b) && !isTier3(b) && !isSecret(b) && !isHidden(b) && !isDiamond(b));
    const endgameVis = visible.filter(b => isEndgame(b));
    const tier3Vis = visible.filter(b => isTier3(b));
    const diamondVis = visible.filter(b => isDiamond(b));
    const secretVis = visible.filter(b => isSecret(b));
    const hiddenVis = visible.filter(b => isHidden(b) && discovered(b.id));

    function renderCard(b) {
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
    }

    if (baseVis.length > 0) {
      const baseOwnedCount = baseVis.filter(b => discovered(b.id)).length;
      const h = document.createElement("div");
      h.className = "dex-section-header";
      h.innerHTML = `📚 BASE BUDDIES <span class="dex-h-count">${baseOwnedCount}/${baseVis.length}</span>`;
      grid.appendChild(h);
      baseVis.forEach(renderCard);
    }
    if (endgameVis.length > 0) {
      const endgameOwnedC = endgameVis.filter(b => discovered(b.id)).length;
      const h = document.createElement("div");
      h.className = "dex-section-header endgame-header";
      h.innerHTML = `⭐ ENDGAME BUDDIES <span class="dex-h-count">${endgameOwnedC}/${endgameVis.length}</span>${State.endgameUnlocked ? "" : " <span class=\"dex-h-locked\">🔒 Locked</span>"}`;
      grid.appendChild(h);
      endgameVis.forEach(renderCard);
    }
    if (tier3Vis.length > 0) {
      const t3OwnedC = tier3Vis.filter(b => discovered(b.id)).length;
      const h = document.createElement("div");
      h.className = "dex-section-header tier3-header";
      h.innerHTML = `★★ TIER 3 ULTRA BUDDIES ★★ <span class="dex-h-count">${t3OwnedC}/${tier3Vis.length}</span>${State.ultraUnlocked ? "" : " <span class=\"dex-h-locked\">🔒 Locked</span>"}`;
      grid.appendChild(h);
      tier3Vis.forEach(renderCard);
    }
    if (diamondVis.length > 0) {
      const dOwnedC = diamondVis.filter(b => discovered(b.id)).length;
      const h = document.createElement("div");
      h.className = "dex-section-header diamond-header";
      h.innerHTML = `💎 DIAMOND BUDDIES <span class="dex-h-count">${dOwnedC}/${diamondVis.length}</span> <span class="dex-h-hint">Gem-only</span>`;
      grid.appendChild(h);
      diamondVis.forEach(renderCard);
    }
    // HIDDEN BUDDIES section — only appears once you've found at least one
    if (hiddenVis.length > 0) {
      const h = document.createElement("div");
      h.className = "dex-section-header hidden-header";
      h.innerHTML = `🕳 HIDDEN BUDDIES <span class="dex-h-count">${hiddenVis.length} found</span>`;
      grid.appendChild(h);
      hiddenVis.forEach(b => {
        const count = ownedCount(b.id);
        const card = document.createElement("div");
        card.className = "buddy-card border-secret";
        card.innerHTML = `
          ${count > 1 ? `<div class="buddy-count">x${count}</div>` : ""}
          <div class="buddy-emoji">${buddyFrame(b.emoji, b.rarity, "", b.effect, b.id)}</div>
          <div class="buddy-name">${b.name}</div>
          <div class="buddy-rarity r-secret">HIDDEN</div>
        `;
        card.onclick = () => showBuddyDetail(b);
        grid.appendChild(card);
      });
    }

    if (secretVis.length > 0) {
      const secretOwnedC = secretVis.filter(b => discovered(b.id)).length;
      const h = document.createElement("div");
      h.className = "dex-section-header secret-header";
      h.innerHTML = `🌟 SECRET BUDDIES <span class="dex-h-count">${secretOwnedC}/${secretVis.length}</span> <span class="dex-h-hint">Unlock by playing</span>`;
      grid.appendChild(h);
      secretVis.forEach(b => {
        const seen = discovered(b.id);
        const count = ownedCount(b.id);
        const card = document.createElement("div");
        card.className = "buddy-card border-secret" + (seen ? "" : " locked");
        if (seen) {
          card.innerHTML = `
            ${count > 1 ? `<div class="buddy-count">x${count}</div>` : ""}
            <div class="buddy-emoji">${buddyFrame(b.emoji, b.rarity, "", b.effect, b.id)}</div>
            <div class="buddy-name">${b.name}</div>
            <div class="buddy-rarity r-secret">SECRET</div>
          `;
          card.onclick = () => showBuddyDetail(b);
        } else {
          // Hint card with progress bar
          const progress = progressFor(b.unlock);
          const target = targetFor(b.unlock);
          const pct = Math.min(100, Math.round((progress / target) * 100));
          card.innerHTML = `
            <div class="buddy-emoji"><div class="b-frame locked-frame secret-locked">?</div></div>
            <div class="buddy-name">???</div>
            <div class="secret-hint">${b.hint}</div>
            <div class="secret-progress"><div class="secret-progress-fill" style="width:${pct}%"></div></div>
            <div class="secret-progress-text">${Math.min(progress, target)}/${target}</div>
          `;
        }
        grid.appendChild(card);
      });
    }
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
  maybeUnlockSecrets();
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
  maybeUnlockSecrets();
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
  maybeUnlockSecrets();
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
  const fullSpins = 3;
  const targetSpin = wheelRotation + fullSpins * 360 + (360 - (idx * 45 + 22.5));
  wheelRotation = targetSpin;
  $("wheel").style.transform = `rotate(${wheelRotation}deg)`;

  setTimeout(() => {
    wheelSpinning = false;
    State.lastSpin = Date.now();
    State.achievements.wheel_spins = (State.achievements.wheel_spins || 0) + 1;
    applyWheelReward(WHEEL_SLOTS[idx]);
    save();
    updateWallet();
    renderShop();
    updateWheelUI();
    maybeUnlockSecrets();
  }, 2100);
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
  { id: "blast",   emoji: "💥", name: "Blast Combo",     desc: "Tap groups of 3+ same buddies to blast them. Chain combos for huge multipliers." },
  { id: "slots",   emoji: "🎰", name: "Jackpot Slots",   desc: "Spin the reels. Match 3 to win. Triple 7s = MEGA JACKPOT." },
  { id: "snake",   emoji: "🐍", name: "Snake",           desc: "Classic snake. Eat coins, don't hit yourself or the walls." },
  { id: "jumper",  emoji: "🦘", name: "Sky Jumper",      desc: "Auto-jumping buddy. Tap sides to steer, land on platforms, climb higher." },
  { id: "slice",   emoji: "🥷", name: "Slice Rush",      desc: "Buddies fly across the screen — swipe or tap fast to slice them. Miss = penalty." },
  { id: "break",   emoji: "🏓", name: "Buddy Break",     desc: "Paddle + bouncing ball. Smash all the blocks. Powerups appear." },
  { id: "beat",    emoji: "🎵", name: "Tap Beat",        desc: "Notes fall down 4 lanes. Tap when they hit the line. Combos multiply." },
  { id: "dig",     emoji: "💣", name: "Lucky Dig",       desc: "Reveal tiles for coins. Numbers hint at nearby bombs. Cash out or push your luck." },
  { id: "sniper",  emoji: "🎯", name: "Target Sniper",   desc: "Targets pop up all over. Click as fast as you can. Perfect shots = bullseye." },
  { id: "punch",   emoji: "👊", name: "Combo Punch",     desc: "Boss health bar. Tap the shown direction — chain the combo without missing to nuke the boss." }
];

const Modes = {};

const GameRunner = {
  current: null,
  coins: 0, score: 0, time: 0,
  timer: null,
  onTick: null,
  onQuit: null
};

function renderPlay() {
  const grid = $("modeGrid");
  if (!grid) return;
  grid.innerHTML = "";
  GAME_MODES.forEach(m => {
    const card = document.createElement("div");
    card.className = "mode-card";
    card.innerHTML = `
      <div class="mode-emoji">${m.emoji}</div>
      <div class="mode-name">${m.name}</div>
      <div class="mode-desc">${m.desc}</div>
    `;
    card.onclick = () => startMode(m.id);
    grid.appendChild(card);
  });
}

function startMode(id) {
  GameRunner.current = id;
  GameRunner.coins = 0; GameRunner.score = 0; GameRunner.time = 0;
  GameRunner.onQuit = null; GameRunner.onTick = null;
  if (GameRunner.timer) { clearInterval(GameRunner.timer); GameRunner.timer = null; }
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
  if (win) State.achievements.games_won = (State.achievements.games_won || 0) + 1;
  save();
  updateWallet();
  renderShop();
  maybeUnlockSecrets();
  $("gameResultIcon").textContent = win ? "🏆" : "💪";
  $("gameResultTitle").textContent = title || (win ? "VICTORY!" : "GAME OVER");
  $("gameResultTitle").style.color = win ? "var(--accent2)" : "var(--pink)";
  $("gameResultCoins").textContent = coins.toLocaleString();
  $("gameResultStats").innerHTML = stats || "";
  $("gameResult").classList.add("show");
}

// ---------- SHARED GAME JUICE ----------
function screenShake(el, intensity = 6) {
  if (!el) return;
  el.style.animation = "none";
  void el.offsetWidth;
  el.style.animation = `screenShake 0.3s`;
}
function popParticles(x, y, count = 8, color = "#ffd93d") {
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.className = "juice-particle";
    p.style.left = x + "px";
    p.style.top  = y + "px";
    p.style.background = color;
    const angle = (i / count) * Math.PI * 2;
    const dist = 40 + Math.random() * 30;
    p.style.setProperty("--dx", Math.cos(angle) * dist + "px");
    p.style.setProperty("--dy", Math.sin(angle) * dist + "px");
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 700);
  }
}
function bigPop(text, color = "#ffd93d") {
  const t = document.createElement("div");
  t.className = "juice-bigpop";
  t.textContent = text;
  t.style.color = color;
  t.style.left = window.innerWidth / 2 + "px";
  t.style.top = window.innerHeight / 2 + "px";
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 900);
}

// ====== 1. BLAST COMBO ======
Modes.blast = {
  start(canvas) {
    const COLS = 7, ROWS = 8;
    const emojis = ["🔴","🟠","🟡","🟢","🔵"];
    let grid = [];
    let combo = 0, comboTimer;
    canvas.innerHTML = `
      <div style="text-align:center;color:var(--dim);margin-bottom:6px">
        Tap groups of 3+ matching buddies to blast them. Combo streak = huge coins!
      </div>
      <div id="blastCombo" class="blast-combo">Combo: 0x</div>
      <div class="blast-board" id="blastBoard"></div>
    `;
    const board = $("blastBoard");
    board.style.gridTemplateColumns = `repeat(${COLS}, 1fr)`;
    function newCell() { return emojis[Math.floor(Math.random() * emojis.length)]; }
    function render() {
      board.innerHTML = "";
      for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
        const cell = document.createElement("div");
        cell.className = "blast-cell";
        cell.textContent = grid[r][c];
        cell.dataset.r = r; cell.dataset.c = c;
        cell.onclick = e => handleClick(r, c, e);
        board.appendChild(cell);
      }
    }
    function initGrid() {
      grid = Array(ROWS).fill(0).map(() => Array(COLS).fill(0).map(newCell));
    }
    function findGroup(r, c, target, visited) {
      const stack = [[r, c]];
      const result = [];
      while (stack.length) {
        const [rr, cc] = stack.pop();
        const key = rr + "," + cc;
        if (visited.has(key)) continue;
        if (rr < 0 || rr >= ROWS || cc < 0 || cc >= COLS) continue;
        if (grid[rr][cc] !== target) continue;
        visited.add(key);
        result.push([rr, cc]);
        stack.push([rr-1,cc],[rr+1,cc],[rr,cc-1],[rr,cc+1]);
      }
      return result;
    }
    function handleClick(r, c, e) {
      const group = findGroup(r, c, grid[r][c], new Set());
      if (group.length < 3) { floatText("Need 3+", "#ff5470"); return; }
      combo++;
      const base = group.length * 8;
      const earned = base * combo;
      GameRunner.coins += earned;
      GameRunner.score += group.length;
      const cx = e.clientX, cy = e.clientY;
      popParticles(cx, cy, group.length * 2, "#ffd93d");
      bigPop((combo > 1 ? "x" + combo + "  " : "") + "+" + earned, combo > 3 ? "#ff6b9d" : "#ffd93d");
      screenShake(document.body);
      group.forEach(([rr, cc]) => grid[rr][cc] = null);
      // gravity
      for (let c = 0; c < COLS; c++) {
        const col = [];
        for (let r = ROWS - 1; r >= 0; r--) if (grid[r][c]) col.push(grid[r][c]);
        for (let r = ROWS - 1; r >= 0; r--) grid[r][c] = col[ROWS - 1 - r] || newCell();
      }
      render();
      $("blastCombo").textContent = "Combo: " + combo + "x";
      updateGameHUD();
      clearTimeout(comboTimer);
      comboTimer = setTimeout(() => { combo = 0; $("blastCombo").textContent = "Combo: 0x"; }, 2000);
    }
    initGrid(); render();
    gameTimer(60, () => endGame({ win: GameRunner.coins >= 400, coins: GameRunner.coins, title: "💥 BLAST OVER!", stats: `Score: ${GameRunner.score}` }));
  }
};

// ====== 2. JACKPOT SLOTS ======
Modes.slots = {
  start(canvas) {
    const symbols = ["🍒","🔔","💎","⭐","7️⃣","🎰","🐶"];
    let spinsLeft = 15;
    canvas.innerHTML = `
      <div class="slots-wrap">
        <div class="slots-title">🎰 JACKPOT SLOTS 🎰</div>
        <div class="slots-reels">
          <div class="slots-reel" id="reel0">🎰</div>
          <div class="slots-reel" id="reel1">🎰</div>
          <div class="slots-reel" id="reel2">🎰</div>
        </div>
        <div class="slots-status" id="slotStatus">Pull the lever!</div>
        <div style="text-align:center;margin-top:10px;color:var(--dim)">Spins left: <span id="slotsLeft">15</span></div>
        <div style="text-align:center;margin-top:14px"><button class="big-btn" id="slotsBtn">🎰 SPIN 🎰</button></div>
        <div style="text-align:center;margin-top:10px;color:var(--dim);font-size:11px">
          Any match: +50 · 7️⃣7️⃣7️⃣ MEGA: +1000 · 💎💎💎 DIAMOND: +500
        </div>
      </div>
    `;
    $("slotsBtn").onclick = () => {
      if (spinsLeft <= 0) return;
      spinsLeft--;
      $("slotsLeft").textContent = spinsLeft;
      $("slotsBtn").disabled = true;
      const finals = [0,1,2].map(() => symbols[Math.floor(Math.random() * symbols.length)]);
      [0,1,2].forEach((i, k) => {
        const el = $("reel" + i);
        let ticks = 15 + i * 8;
        const spin = setInterval(() => {
          el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
          ticks--;
          if (ticks <= 0) {
            clearInterval(spin);
            el.textContent = finals[i];
            el.classList.add("slots-land");
            setTimeout(() => el.classList.remove("slots-land"), 400);
            if (i === 2) checkResult();
          }
        }, 60);
      });
      function checkResult() {
        const [a,b,c] = finals;
        let win = 0, msg = "No match. Try again!";
        if (a === b && b === c) {
          if (a === "7️⃣")      { win = 1000; msg = "💰💰💰 MEGA JACKPOT!"; }
          else if (a === "💎") { win = 500;  msg = "💎 DIAMOND WIN!"; }
          else if (a === "⭐") { win = 300;  msg = "⭐ STAR TRIPLE!"; }
          else                  { win = 150;  msg = "TRIPLE MATCH!"; }
        } else if (a === b || b === c || a === c) {
          win = 30; msg = "Double! +30";
        }
        if (win) {
          GameRunner.coins += win;
          GameRunner.score += win;
          bigPop("+" + win, win >= 500 ? "#ff6b9d" : "#ffd93d");
          popParticles(window.innerWidth/2, 240, 16, "#ffd93d");
          screenShake(document.body);
        }
        $("slotStatus").textContent = msg;
        updateGameHUD();
        $("slotsBtn").disabled = false;
        if (spinsLeft <= 0) {
          endGame({ win: GameRunner.coins >= 300, coins: GameRunner.coins, title: "🎰 Casino Closed", stats: `Best: +${Math.max(0, GameRunner.coins)}` });
        }
      }
    };
  }
};

// ====== 3. SNAKE ======
Modes.snake = {
  start(canvas) {
    const CELL = 20, COLS = 20, ROWS = 20;
    canvas.innerHTML = `
      <div style="text-align:center;color:var(--dim);margin-bottom:8px">
        Arrow keys or tap edges. Eat 🍎 = +10. Don't hit yourself!
      </div>
      <div class="snake-board" id="snakeBoard" style="width:${COLS*CELL}px;height:${ROWS*CELL}px"></div>
    `;
    const board = $("snakeBoard");
    let snake = [[10,10],[10,9],[10,8]];
    let dir = [0, 1];
    let food = [5, 5];
    function place() {
      food = [Math.floor(Math.random()*ROWS), Math.floor(Math.random()*COLS)];
      if (snake.some(([r,c]) => r === food[0] && c === food[1])) place();
    }
    function draw() {
      board.innerHTML = "";
      snake.forEach(([r,c], i) => {
        const d = document.createElement("div");
        d.className = "snake-seg" + (i === 0 ? " snake-head" : "");
        d.style.left = c*CELL + "px";
        d.style.top = r*CELL + "px";
        d.style.width = d.style.height = CELL + "px";
        board.appendChild(d);
      });
      const f = document.createElement("div");
      f.className = "snake-food";
      f.style.left = food[1]*CELL + "px";
      f.style.top = food[0]*CELL + "px";
      f.textContent = "🍎";
      board.appendChild(f);
    }
    function step() {
      const [hr, hc] = snake[0];
      const [dr, dc] = dir;
      const nr = hr + dr, nc = hc + dc;
      if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS) return die();
      if (snake.some(([r,c]) => r === nr && c === nc)) return die();
      snake.unshift([nr, nc]);
      if (nr === food[0] && nc === food[1]) {
        GameRunner.coins += 10;
        GameRunner.score++;
        floatText("+10", "#4ade80");
        popParticles(window.innerWidth/2, window.innerHeight/2, 6, "#ff5470");
        place();
      } else {
        snake.pop();
      }
      updateGameHUD();
      draw();
    }
    function die() {
      clearInterval(timer);
      screenShake(document.body, 12);
      endGame({ win: GameRunner.score >= 10, coins: GameRunner.coins, title: "🐍 Game Over", stats: `Length: ${snake.length}` });
    }
    document.addEventListener("keydown", keyHandler);
    function keyHandler(e) {
      if (e.key === "ArrowUp"    && dir[0] !==  1) dir = [-1, 0];
      if (e.key === "ArrowDown"  && dir[0] !== -1) dir = [ 1, 0];
      if (e.key === "ArrowLeft"  && dir[1] !==  1) dir = [ 0,-1];
      if (e.key === "ArrowRight" && dir[1] !== -1) dir = [ 0, 1];
    }
    board.onclick = (e) => {
      const rect = board.getBoundingClientRect();
      const x = e.clientX - rect.left, y = e.clientY - rect.top;
      const cx = rect.width/2, cy = rect.height/2;
      if (Math.abs(x - cx) > Math.abs(y - cy)) {
        if (x > cx && dir[1] !== -1) dir = [0, 1];
        else if (x < cx && dir[1] !== 1) dir = [0, -1];
      } else {
        if (y > cy && dir[0] !== -1) dir = [1, 0];
        else if (y < cy && dir[0] !== 1) dir = [-1, 0];
      }
    };
    place(); draw();
    const timer = setInterval(step, 130);
    GameRunner.onQuit = () => { clearInterval(timer); document.removeEventListener("keydown", keyHandler); };
  }
};

// ====== 4. SKY JUMPER ======
Modes.jumper = {
  start(canvas) {
    canvas.innerHTML = `
      <div style="text-align:center;color:var(--dim);margin-bottom:6px">
        Tap left/right to steer. Land on platforms to climb!
      </div>
      <div class="jumper-field" id="jumperField">
        <div class="jumper-buddy" id="jumperBuddy">🐰</div>
      </div>
      <div style="text-align:center;margin-top:6px;color:var(--dim)">Height: <span id="jumperH">0</span> m</div>
    `;
    const field = $("jumperField");
    const buddy = $("jumperBuddy");
    let x = 175, y = 350, vy = -8, height = 0;
    const platforms = [];
    for (let i = 0; i < 8; i++) platforms.push({ x: 20 + Math.random() * 300, y: 400 - i * 60, el: null });
    function drawPlats() {
      platforms.forEach(p => {
        if (!p.el) {
          p.el = document.createElement("div");
          p.el.className = "jumper-plat";
          field.appendChild(p.el);
        }
        p.el.style.left = p.x + "px";
        p.el.style.top  = p.y + "px";
      });
    }
    drawPlats();
    field.onclick = e => {
      const rect = field.getBoundingClientRect();
      x += (e.clientX - rect.left < rect.width / 2) ? -60 : 60;
      x = Math.max(0, Math.min(350, x));
    };
    let timer = setInterval(() => {
      vy += 0.35;
      y += vy;
      // hit platform (only when falling)
      if (vy > 0) {
        platforms.forEach(p => {
          if (y + 30 >= p.y && y + 30 <= p.y + 12 && x + 30 > p.x && x < p.x + 60) {
            vy = -8;
            GameRunner.coins += 3;
            updateGameHUD();
          }
        });
      }
      // scroll world down if player is high
      if (y < 150) {
        const dy = 150 - y;
        y = 150;
        height += dy * 0.1;
        platforms.forEach(p => {
          p.y += dy;
          if (p.y > 460) { p.y = -20; p.x = Math.random() * 340; }
        });
      }
      if (y > 460) return die();
      buddy.style.left = x + "px";
      buddy.style.top  = y + "px";
      $("jumperH").textContent = Math.floor(height);
      GameRunner.score = Math.floor(height);
      drawPlats();
    }, 20);
    function die() {
      clearInterval(timer);
      screenShake(document.body, 10);
      GameRunner.coins += Math.floor(height * 2);
      endGame({ win: height >= 100, coins: GameRunner.coins, title: "🦘 Splat!", stats: `Height: ${Math.floor(height)}m` });
    }
    GameRunner.onQuit = () => clearInterval(timer);
  }
};

// ====== 5. SLICE RUSH ======
Modes.slice = {
  start(canvas) {
    canvas.innerHTML = `
      <div style="text-align:center;color:var(--dim);margin-bottom:6px">
        Tap flying buddies to slice them! Bombs = penalty.
      </div>
      <div class="slice-field" id="sliceField"></div>
    `;
    const field = $("sliceField");
    const flying = [];
    const spawn = setInterval(() => {
      const isBomb = Math.random() < 0.15;
      const el = document.createElement("div");
      el.className = "slice-obj";
      el.textContent = isBomb ? "💣" : ["🐶","🐱","🦊","🐰","🍎","🍉","🍊"][Math.floor(Math.random()*7)];
      el.style.left = "-40px";
      el.style.bottom = "0px";
      const dir = Math.random() < 0.5 ? 1 : -1;
      const startX = dir === 1 ? -40 : field.offsetWidth + 40;
      const targetY = 100 + Math.random() * 150;
      const obj = { el, x: startX, y: 0, vx: dir * (0.9 + Math.random() * 0.6), vy: -6.5 - Math.random() * 1.2, gravity: 0.12, bomb: isBomb, sliced: false };
      el.style.left = startX + "px";
      field.appendChild(el);
      el.onclick = e => {
        if (obj.sliced) return;
        obj.sliced = true;
        if (obj.bomb) {
          GameRunner.coins = Math.max(0, GameRunner.coins - 30);
          floatText("-30 BOMB!", "#ff5470");
          screenShake(document.body, 10);
        } else {
          GameRunner.coins += 20;
          GameRunner.score++;
          floatText("+20", "#4ade80");
          popParticles(e.clientX, e.clientY, 8, obj.bomb ? "#ff5470" : "#4ade80");
        }
        updateGameHUD();
        el.remove();
      };
      flying.push(obj);
    }, 700);
    const mv = setInterval(() => {
      flying.forEach(f => {
        if (f.sliced) return;
        f.x += f.vx;
        f.y += f.vy;
        f.vy += f.gravity;
        f.el.style.left = f.x + "px";
        f.el.style.bottom = -f.y + "px";
        if (f.y > 20) { f.sliced = true; f.el.remove(); }
      });
    }, 20);
    GameRunner.onQuit = () => { clearInterval(spawn); clearInterval(mv); };
    gameTimer(30, () => {
      clearInterval(spawn); clearInterval(mv);
      flying.forEach(f => f.el.remove());
      endGame({ win: GameRunner.score >= 12, coins: GameRunner.coins, title: "🥷 Slice Done!", stats: `Sliced: ${GameRunner.score}` });
    });
  }
};

// ====== 6. BUDDY BREAK (Breakout) ======
Modes.break = {
  start(canvas) {
    const W = 400, H = 460;
    canvas.innerHTML = `
      <div style="text-align:center;color:var(--dim);margin-bottom:6px">
        Tap anywhere in the field to aim the paddle. Break all the blocks!
      </div>
      <div class="brk-field" id="brkField" style="width:${W}px;height:${H}px"></div>
    `;
    const field = $("brkField");
    let paddleX = W/2 - 40;
    let bx = W/2, by = H - 40, vx = 3, vy = -4;
    const blocks = [];
    for (let r = 0; r < 5; r++) for (let c = 0; c < 8; c++) {
      blocks.push({ x: c * 50 + 5, y: r * 24 + 20, w: 44, h: 18, hp: 1, color: ["#ff5470","#ffd93d","#4ade80","#38bdf8","#a855f7"][r] });
    }
    function render() {
      field.innerHTML = "";
      const p = document.createElement("div");
      p.className = "brk-paddle";
      p.style.left = paddleX + "px";
      field.appendChild(p);
      const b = document.createElement("div");
      b.className = "brk-ball";
      b.style.left = (bx-8) + "px";
      b.style.top = (by-8) + "px";
      field.appendChild(b);
      blocks.forEach(bl => {
        if (bl.hp <= 0) return;
        const d = document.createElement("div");
        d.className = "brk-block";
        d.style.left = bl.x + "px"; d.style.top = bl.y + "px";
        d.style.width = bl.w + "px"; d.style.height = bl.h + "px";
        d.style.background = bl.color;
        field.appendChild(d);
      });
    }
    field.onmousemove = e => {
      const rect = field.getBoundingClientRect();
      paddleX = Math.max(0, Math.min(W - 80, e.clientX - rect.left - 40));
    };
    field.ontouchmove = e => {
      const rect = field.getBoundingClientRect();
      paddleX = Math.max(0, Math.min(W - 80, e.touches[0].clientX - rect.left - 40));
      e.preventDefault();
    };
    const t = setInterval(() => {
      bx += vx; by += vy;
      if (bx < 8 || bx > W-8) vx = -vx;
      if (by < 8) vy = -vy;
      if (by > H - 30 && bx > paddleX && bx < paddleX + 80) {
        vy = -Math.abs(vy);
        vx += (bx - (paddleX + 40)) * 0.05;
      }
      if (by > H) return die();
      blocks.forEach(bl => {
        if (bl.hp <= 0) return;
        if (bx > bl.x && bx < bl.x + bl.w && by > bl.y && by < bl.y + bl.h) {
          bl.hp = 0;
          vy = -vy;
          GameRunner.coins += 15;
          GameRunner.score++;
          floatText("+15", bl.color);
          updateGameHUD();
        }
      });
      if (blocks.every(bl => bl.hp <= 0)) {
        clearInterval(t);
        endGame({ win: true, coins: GameRunner.coins + 200, title: "🏓 CLEARED!", stats: `Bonus: +200` });
      }
      render();
    }, 20);
    function die() {
      clearInterval(t);
      screenShake(document.body, 10);
      endGame({ win: false, coins: GameRunner.coins, title: "🏓 Ball Lost", stats: `Blocks broken: ${GameRunner.score}/40` });
    }
    render();
    GameRunner.onQuit = () => clearInterval(t);
  }
};

// ====== 7. TAP BEAT ======
Modes.beat = {
  start(canvas) {
    canvas.innerHTML = `
      <div style="text-align:center;color:var(--dim);margin-bottom:6px">
        Tap the lane when the note reaches the pink line! Combos multiply.
      </div>
      <div class="beat-combo" id="beatCombo">Combo: 0</div>
      <div class="beat-field" id="beatField">
        <div class="beat-lane" data-l="0"></div>
        <div class="beat-lane" data-l="1"></div>
        <div class="beat-lane" data-l="2"></div>
        <div class="beat-lane" data-l="3"></div>
        <div class="beat-line"></div>
      </div>
    `;
    const field = $("beatField");
    const lanes = [...field.querySelectorAll(".beat-lane")];
    const notes = [];
    let combo = 0;
    const lineY = 380;
    const colors = ["#ff5470","#38bdf8","#4ade80","#ffd93d"];
    lanes.forEach((lane, li) => {
      lane.onclick = () => {
        const hit = notes.find(n => !n.dead && n.lane === li && Math.abs(n.y - lineY) < 40);
        if (hit) {
          hit.dead = true; hit.el.remove();
          combo++;
          const earn = 10 + combo * 2;
          GameRunner.coins += earn;
          GameRunner.score = combo;
          floatText("+" + earn, "#4ade80");
          $("beatCombo").textContent = "Combo: " + combo;
          updateGameHUD();
          lane.classList.add("beat-hit");
          setTimeout(() => lane.classList.remove("beat-hit"), 100);
        } else {
          combo = 0;
          $("beatCombo").textContent = "Combo: 0";
          floatText("Miss!", "#ff5470");
        }
      };
    });
    const sp = setInterval(() => {
      const li = Math.floor(Math.random() * 4);
      const el = document.createElement("div");
      el.className = "beat-note";
      el.style.background = colors[li];
      lanes[li].appendChild(el);
      notes.push({ el, lane: li, y: -40 });
    }, 700);
    const mv = setInterval(() => {
      notes.forEach(n => {
        if (n.dead) return;
        n.y += 5;
        n.el.style.top = n.y + "px";
        if (n.y > 460) {
          n.dead = true; n.el.remove();
          combo = 0;
          $("beatCombo").textContent = "Combo: 0";
        }
      });
    }, 20);
    GameRunner.onQuit = () => { clearInterval(sp); clearInterval(mv); };
    gameTimer(60, () => {
      clearInterval(sp); clearInterval(mv);
      endGame({ win: GameRunner.score >= 15, coins: GameRunner.coins, title: "🎵 Song Over!", stats: `Best combo: ${GameRunner.score}` });
    });
  }
};

// ====== 8. LUCKY DIG ======
Modes.dig = {
  start(canvas) {
    const SIZE = 6;
    const bombCount = 5;
    let stash = 0, opened = 0, done = false;
    const grid = [];
    for (let r = 0; r < SIZE; r++) grid.push(Array(SIZE).fill(0).map(() => ({ bomb: false, revealed: false, value: 0 })));
    let placed = 0;
    while (placed < bombCount) {
      const r = Math.floor(Math.random() * SIZE), c = Math.floor(Math.random() * SIZE);
      if (!grid[r][c].bomb) { grid[r][c].bomb = true; placed++; }
    }
    for (let r = 0; r < SIZE; r++) for (let c = 0; c < SIZE; c++) {
      if (grid[r][c].bomb) continue;
      let n = 0;
      for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {
        const rr = r + dr, cc = c + dc;
        if (rr < 0 || rr >= SIZE || cc < 0 || cc >= SIZE) continue;
        if (grid[rr][cc].bomb) n++;
      }
      grid[r][c].value = n;
    }
    canvas.innerHTML = `
      <div style="text-align:center;color:var(--dim);margin-bottom:6px">
        Dig tiles for coins. Numbers = adjacent bombs. Cash out anytime!
      </div>
      <div style="text-align:center;margin-bottom:8px">
        Stash: <span id="digStash" style="color:var(--accent);font-weight:800">0</span> · <button class="big-btn secondary" id="digCash" style="padding:6px 14px;font-size:12px">CASH OUT</button>
      </div>
      <div class="dig-grid" id="digGrid" style="grid-template-columns:repeat(${SIZE},1fr)"></div>
    `;
    const gridEl = $("digGrid");
    for (let r = 0; r < SIZE; r++) for (let c = 0; c < SIZE; c++) {
      const cell = document.createElement("div");
      cell.className = "dig-cell";
      cell.dataset.r = r; cell.dataset.c = c;
      cell.onclick = () => reveal(r, c);
      gridEl.appendChild(cell);
    }
    function reveal(r, c) {
      if (done) return;
      const g = grid[r][c];
      if (g.revealed) return;
      g.revealed = true;
      const cell = gridEl.children[r * SIZE + c];
      cell.classList.add("dig-open");
      if (g.bomb) {
        cell.textContent = "💥";
        cell.classList.add("dig-bomb");
        screenShake(document.body, 12);
        bigPop("BOOM!", "#ff5470");
        done = true;
        setTimeout(() => endGame({ win: false, coins: GameRunner.coins, title: "💣 BOOM!", stats: `Lost the stash: ${stash}` }), 800);
        return;
      }
      opened++;
      const earn = 15 + g.value * 5;
      stash += earn;
      $("digStash").textContent = stash;
      cell.textContent = g.value > 0 ? g.value : "✓";
      cell.style.color = ["#4ade80","#38bdf8","#a855f7","#ff6b9d","#ff5470"][Math.min(g.value, 4)];
      floatText("+" + earn, "#4ade80");
      GameRunner.score = opened;
      updateGameHUD();
    }
    $("digCash").onclick = () => {
      if (done) return;
      done = true;
      GameRunner.coins += stash;
      bigPop("+" + stash + " 🪙", "#ffd93d");
      updateGameHUD();
      endGame({ win: stash > 100, coins: GameRunner.coins, title: "💰 Cashed Out!", stats: `Stash: +${stash} · Cells opened: ${opened}` });
    };
  }
};

// ====== 9. TARGET SNIPER ======
Modes.sniper = {
  start(canvas) {
    canvas.innerHTML = `
      <div style="text-align:center;color:var(--dim);margin-bottom:6px">
        Targets pop up all over. Tap fast! Perfect center = BULLSEYE!
      </div>
      <div class="sniper-field" id="sniperField"></div>
    `;
    const field = $("sniperField");
    const targets = [];
    const spawn = setInterval(() => {
      const el = document.createElement("div");
      el.className = "sniper-target";
      el.innerHTML = "🎯";
      el.style.left = (Math.random() * 85 + 5) + "%";
      el.style.top  = (Math.random() * 80 + 5) + "%";
      el.style.transform = "translate(-50%, -50%) scale(0.2)";
      field.appendChild(el);
      const t = { el, born: Date.now() };
      targets.push(t);
      requestAnimationFrame(() => el.style.transform = "translate(-50%, -50%) scale(1)");
      el.onclick = e => {
        e.stopPropagation();
        const age = Date.now() - t.born;
        const earn = age < 400 ? 60 : age < 900 ? 30 : 10;
        GameRunner.coins += earn;
        GameRunner.score++;
        floatText(age < 400 ? "BULLSEYE +" + earn : "+" + earn, age < 400 ? "#ffd93d" : "#4ade80");
        popParticles(e.clientX, e.clientY, 10, age < 400 ? "#ffd93d" : "#4ade80");
        updateGameHUD();
        el.remove();
        t.dead = true;
      };
      setTimeout(() => { if (!t.dead) { el.remove(); t.dead = true; } }, 1600);
    }, 750);
    GameRunner.onQuit = () => clearInterval(spawn);
    gameTimer(60, () => {
      clearInterval(spawn);
      targets.forEach(t => t.el.remove());
      endGame({ win: GameRunner.score >= 20, coins: GameRunner.coins, title: "🎯 Time's Up!", stats: `Hits: ${GameRunner.score}` });
    });
  }
};

// ====== 10. COMBO PUNCH ======
Modes.punch = {
  start(canvas) {
    let hp = 500, combo = 0;
    canvas.innerHTML = `
      <div class="punch-wrap">
        <div class="punch-boss" id="punchBoss">👹</div>
        <div class="punch-hp"><div class="punch-hp-fill" id="punchHp"></div></div>
        <div style="text-align:center;color:var(--dim);margin:8px 0">HP: <span id="punchHpN">500</span> · Combo: <span id="punchCombo">0</span></div>
        <div id="punchPrompt" class="punch-prompt">TAP the shown key!</div>
        <div class="punch-dirs">
          <button class="punch-btn" data-k="⬅">⬅</button>
          <button class="punch-btn" data-k="⬆">⬆</button>
          <button class="punch-btn" data-k="⬇">⬇</button>
          <button class="punch-btn" data-k="➡">➡</button>
        </div>
      </div>
    `;
    const keys = ["⬅","⬆","⬇","➡"];
    let target = keys[Math.floor(Math.random() * 4)];
    $("punchPrompt").textContent = target;
    document.querySelectorAll(".punch-btn").forEach(b => {
      b.onclick = () => {
        if (b.dataset.k === target) {
          combo++;
          const dmg = 20 + combo * 5;
          hp -= dmg;
          GameRunner.coins += dmg;
          GameRunner.score = Math.max(GameRunner.score, combo);
          $("punchBoss").style.animation = "punchHit 0.2s";
          setTimeout(() => $("punchBoss").style.animation = "", 200);
          popParticles(window.innerWidth/2, 200, 6, "#ff5470");
          floatText("-" + dmg, "#ff5470");
          if (combo % 5 === 0) { bigPop("x" + combo + " COMBO!", "#ffd93d"); }
        } else {
          combo = 0;
          floatText("Missed!", "#ff5470");
        }
        target = keys[Math.floor(Math.random() * 4)];
        $("punchPrompt").textContent = target;
        $("punchHpN").textContent = Math.max(0, hp);
        $("punchCombo").textContent = combo;
        $("punchHp").style.width = Math.max(0, hp / 500 * 100) + "%";
        updateGameHUD();
        if (hp <= 0) {
          endGame({ win: true, coins: GameRunner.coins + 150, title: "👊 BOSS DOWN!", stats: `Best combo: ${GameRunner.score}` });
        }
      };
    });
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
// Catch users who already have all base buddies from before the endgame system
checkEndgameUnlock();
checkUltraUnlock();
checkSecretUnlocks();
save();

// Place invisible hidden-buddy click targets after the initial render
setTimeout(() => { try { placeHiddenSpots(); } catch(e){} }, 50);
applyRevealMode();

// ---------- 15-MINUTE PLAY REWARD ----------
const PLAY_REWARD_INTERVAL = 15 * 60; // seconds
const PLAY_REWARD_AMOUNT   = 10000; // 10,000 coins

function showPlayRewardFlash(amount) {
  const flash = document.createElement("div");
  flash.className = "play-reward-flash";
  flash.innerHTML = `
    <div class="prf-icon">🎁</div>
    <div class="prf-text">
      <div class="prf-amount">+${amount.toLocaleString()} 🪙</div>
      <div class="prf-sub">15-minute play reward!</div>
    </div>
  `;
  document.body.appendChild(flash);
  setTimeout(() => flash.classList.add("prf-out"), 1100);
  setTimeout(() => flash.remove(), 1300);
}

setInterval(() => {
  if (document.visibilityState !== "visible") return;
  State.playTimeSec = (State.playTimeSec || 0) + 1;
  if (State.playTimeSec > 0 && State.playTimeSec % PLAY_REWARD_INTERVAL === 0) {
    State.coins += PLAY_REWARD_AMOUNT;
    save();
    updateWallet();
    renderShop();
    showPlayRewardFlash(PLAY_REWARD_AMOUNT);
    maybeUnlockSecrets();
  } else if (State.playTimeSec % 15 === 0) {
    // Persist every 15s so progress survives refreshes
    localStorage.setItem("bn_playtime", State.playTimeSec);
  }
}, 1000);

setupNav();
setupGameNav();
renderPlay();
renderShop();
renderDex();
renderWheelLabels();
updateWheelUI();
updateWallet();
setInterval(() => { updateWheelUI(); updateWallet(); }, 1000);
