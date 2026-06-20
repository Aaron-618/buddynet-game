/* ===========================================================
   BUDDYNET — TIER 3 (ULTRA) PACKS
   Unlocks after collecting every base + endgame buddy.
   20 packs × 20 buddies each = 400 new buddies.
   =========================================================== */

const TIER3_PACKS = [
  {
    id: "carnival", name: "Carnival Pack", emoji: "🎪", price: 100, currency: "coins",
    desc: "Step right up to the greatest show on Earth.",
    requiresAll: true, tier3: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Balloon", emoji: "🎈" }, { name: "Cotton Treat", emoji: "🍡" },
        { name: "Popcorn", emoji: "🍿" }, { name: "Ticket Stub", emoji: "🎫" },
        { name: "Funnel Cake", emoji: "🥞" }, { name: "Carny Mascot", emoji: "🎭" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Ferris Wheel", emoji: "🎡" }, { name: "Roller Coaster", emoji: "🎢" },
        { name: "Carousel Pony", emoji: "🐴" }, { name: "Bumper Car", emoji: "🚙" },
        { name: "Ring Toss", emoji: "💍" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Strong Man", emoji: "💪" }, { name: "Sword Swallower", emoji: "🗡️" },
        { name: "Tightrope Walker", emoji: "🤸" }, { name: "Lion Tamer", emoji: "🦁" }
      ]},
      { rarity: "legendary", weight: 0.4, buddies: [
        { name: "The Ringmaster", emoji: "🎩" }, { name: "Fire Breather", emoji: "🔥" }
      ]},
      { rarity: "chroma", weight: 0.2, buddies: [
        { name: "Rainbow Big Top", emoji: "🎪", effect: "rainbow" },
        { name: "Glow Stick Trail", emoji: "✨", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Phantom Jester", emoji: "🃏", sell: 25000 }
      ]}
    ]
  },

  {
    id: "garden", name: "Mystic Garden Pack", emoji: "🦋", price: 100, currency: "coins",
    desc: "A blooming sanctuary of magical insects and flora.",
    requiresAll: true, tier3: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Butterfly", emoji: "🦋" }, { name: "Honey Bee", emoji: "🐝" },
        { name: "Ladybug", emoji: "🐞" }, { name: "Garden Snail", emoji: "🐌" },
        { name: "Caterpillar", emoji: "🐛" }, { name: "Daisy", emoji: "🌼" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Hummingbird", emoji: "🐦" }, { name: "Dragonfly", emoji: "🪰" },
        { name: "Sunflower", emoji: "🌻" }, { name: "Rose Bloom", emoji: "🌹" },
        { name: "Tulip Field", emoji: "🌷" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Garden Gnome", emoji: "🧙" }, { name: "Flower Fairy", emoji: "🧚" },
        { name: "Hedgehog", emoji: "🦔" }, { name: "Mantis Knight", emoji: "🦗" }
      ]},
      { rarity: "legendary", weight: 0.4, buddies: [
        { name: "The Queen Bee", emoji: "👑" }, { name: "Forest Sprite", emoji: "🍃" }
      ]},
      { rarity: "chroma", weight: 0.2, buddies: [
        { name: "Rainbow Petals", emoji: "🌈", effect: "rainbow" },
        { name: "Glow Dragonfly", emoji: "🪰", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Garden Spirit", emoji: "🧚‍♀️", sell: 25000 }
      ]}
    ]
  },

  {
    id: "tropical", name: "Tropical Paradise Pack", emoji: "🏝️", price: 100, currency: "coins",
    desc: "Sun, surf, and beach-side buddies.",
    requiresAll: true, tier3: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Pineapple", emoji: "🍍" }, { name: "Coconut", emoji: "🥥" },
        { name: "Palm Tree", emoji: "🌴" }, { name: "Hibiscus", emoji: "🌺" },
        { name: "Flip Flops", emoji: "🩴" }, { name: "Shades", emoji: "🕶️" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Beach Parrot", emoji: "🦜" }, { name: "Pink Flamingo", emoji: "🦩" },
        { name: "Conch Shell", emoji: "🐚" }, { name: "Surfboard", emoji: "🏄" },
        { name: "Toucan", emoji: "🦃" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Volcano Spirit", emoji: "🌋" }, { name: "Sea Sprite", emoji: "🌊" },
        { name: "Reef Shark", emoji: "🦈" }, { name: "Macaw", emoji: "🦜" }
      ]},
      { rarity: "legendary", weight: 0.4, buddies: [
        { name: "The Tiki Lord", emoji: "🗿" }, { name: "Sun Goddess", emoji: "☀️" }
      ]},
      { rarity: "chroma", weight: 0.2, buddies: [
        { name: "Rainbow Wave", emoji: "🌊", effect: "rainbow" },
        { name: "Sunset Mirage", emoji: "🌅", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Island King", emoji: "👑", sell: 25000 }
      ]}
    ]
  },

  {
    id: "alchemy", name: "Alchemy Lab Pack", emoji: "⚗️", price: 100, currency: "coins",
    desc: "Bubbling potions and forbidden recipes.",
    requiresAll: true, tier3: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Potion Bottle", emoji: "🧪" }, { name: "Crystal Vial", emoji: "🍶" },
        { name: "Mortar & Pestle", emoji: "🥣" }, { name: "Magic Herb", emoji: "🌿" },
        { name: "Spotted Mushroom", emoji: "🍄" }, { name: "Spell Book", emoji: "📕" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Apprentice", emoji: "🧙" }, { name: "Cauldron", emoji: "🌑" },
        { name: "Crystal Ball", emoji: "🔮" }, { name: "Frog Familiar", emoji: "🐸" },
        { name: "Alchemist Robe", emoji: "🥼" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Master Alchemist", emoji: "🧙‍♂️" }, { name: "Philosopher Stone", emoji: "💎" },
        { name: "Elixir of Life", emoji: "💊" }, { name: "Liquid Gold", emoji: "🟡" }
      ]},
      { rarity: "legendary", weight: 0.4, buddies: [
        { name: "The Grand Alchemist", emoji: "🧙‍♀️" }, { name: "Transmutation Circle", emoji: "⭕" }
      ]},
      { rarity: "chroma", weight: 0.2, buddies: [
        { name: "Rainbow Potion", emoji: "🧪", effect: "rainbow" },
        { name: "Prismatic Brew", emoji: "🍶", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Eternal Elixir", emoji: "💊", sell: 25000 }
      ]}
    ]
  },

  {
    id: "masquerade", name: "Masquerade Pack", emoji: "🎭", price: 100, currency: "coins",
    desc: "Hidden faces at a haunted ballroom.",
    requiresAll: true, tier3: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Comedy Mask", emoji: "😂" }, { name: "Tragedy Mask", emoji: "😭" },
        { name: "Velvet Cape", emoji: "🧥" }, { name: "Folding Fan", emoji: "🪭" },
        { name: "Quill Pen", emoji: "✒️" }, { name: "Powdered Wig", emoji: "👨‍🦳" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Lady in Red", emoji: "👗" }, { name: "Mystery Suitor", emoji: "🤵" },
        { name: "Ballroom Dancer", emoji: "💃" }, { name: "Court Violinist", emoji: "🎻" },
        { name: "Chandelier", emoji: "💡" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Black Swan", emoji: "🦢" }, { name: "Masked Duke", emoji: "🎭" },
        { name: "White Knight", emoji: "🤍" }, { name: "Opera Phantom", emoji: "👻" }
      ]},
      { rarity: "legendary", weight: 0.4, buddies: [
        { name: "The Veiled Empress", emoji: "👸" }, { name: "The Phantom Lord", emoji: "🎭" }
      ]},
      { rarity: "chroma", weight: 0.2, buddies: [
        { name: "Rainbow Mask", emoji: "🎭", effect: "rainbow" },
        { name: "Velvet Cloak", emoji: "✨", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Forgotten Aristocrat", emoji: "👤", sell: 25000 }
      ]}
    ]
  },

  {
    id: "pantheon", name: "Pantheon Pack", emoji: "🏛️", price: 150, currency: "coins",
    desc: "Olympian gods and divine champions.",
    requiresAll: true, tier3: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Olive Branch", emoji: "🌿" }, { name: "Lyre", emoji: "🎵" },
        { name: "White Toga", emoji: "👕" }, { name: "Laurel Wreath", emoji: "🌹" },
        { name: "Marble Bust", emoji: "🗿" }, { name: "Golden Chariot", emoji: "🛺" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Pegasus", emoji: "🐴" }, { name: "Centaur Sentinel", emoji: "🏹" },
        { name: "Naiad", emoji: "🧜‍♀️" }, { name: "Satyr", emoji: "🐐" },
        { name: "Delphi Oracle", emoji: "🔮" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Athena", emoji: "🦉" }, { name: "Apollo", emoji: "☀️" },
        { name: "Artemis", emoji: "🏹" }, { name: "Hermes", emoji: "👟" }
      ]},
      { rarity: "legendary", weight: 0.4, buddies: [
        { name: "Zeus", emoji: "⚡" }, { name: "Poseidon", emoji: "🔱" }
      ]},
      { rarity: "chroma", weight: 0.2, buddies: [
        { name: "Olympus Aurora", emoji: "🌈", effect: "rainbow" },
        { name: "Divine Glow", emoji: "✨", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "Chronos", emoji: "⏳", sell: 25000 }
      ]}
    ]
  },

  {
    id: "hunter", name: "Hunter's Lodge Pack", emoji: "🎯", price: 100, currency: "coins",
    desc: "Wilderness pursuit and master archers.",
    requiresAll: true, tier3: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Long Bow", emoji: "🏹" }, { name: "Quiver", emoji: "🪶" },
        { name: "Hunting Knife", emoji: "🔪" }, { name: "Snare Trap", emoji: "🪤" },
        { name: "Antler", emoji: "🦌" }, { name: "Leather Boots", emoji: "👢" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Hound", emoji: "🐕" }, { name: "Falcon", emoji: "🦅" },
        { name: "Forest Scout", emoji: "🥾" }, { name: "Tracker", emoji: "👣" },
        { name: "Camp Tent", emoji: "⛺" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Grandmaster Archer", emoji: "🏹" }, { name: "Wild Boar", emoji: "🐗" },
        { name: "Mountain Lion", emoji: "🐆" }, { name: "Trophy Buck", emoji: "🦌" }
      ]},
      { rarity: "legendary", weight: 0.4, buddies: [
        { name: "The Huntmaster", emoji: "🧔" }, { name: "Forest Walker", emoji: "🌲" }
      ]},
      { rarity: "chroma", weight: 0.2, buddies: [
        { name: "Rainbow Arrow", emoji: "🏹", effect: "rainbow" },
        { name: "Spectral Hound", emoji: "🐕", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Eternal Hunter", emoji: "🏹", sell: 25000 }
      ]}
    ]
  },

  {
    id: "peak", name: "Mountain Peak Pack", emoji: "🏔️", price: 100, currency: "coins",
    desc: "Untouched summits and high-altitude beasts.",
    requiresAll: true, tier3: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Pebble", emoji: "🪨" }, { name: "Snowflake", emoji: "❄️" },
        { name: "Ice Pick", emoji: "⛏️" }, { name: "Compass", emoji: "🧭" },
        { name: "Pine Cone", emoji: "🌲" }, { name: "Mountain Goat", emoji: "🐐" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Snow Leopard", emoji: "🐆" }, { name: "Big Horn Sheep", emoji: "🐏" },
        { name: "Climbing Rope", emoji: "🪢" }, { name: "Crampons", emoji: "🥾" },
        { name: "Alpine Hawk", emoji: "🦅" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Yeti Bear", emoji: "🦍" }, { name: "Frost Eagle", emoji: "🦅" },
        { name: "Ibex", emoji: "🐐" }, { name: "Ice Falcon", emoji: "🦅" }
      ]},
      { rarity: "legendary", weight: 0.4, buddies: [
        { name: "The Peak Guardian", emoji: "🏔️" }, { name: "Glacier Beast", emoji: "🐻‍❄️" }
      ]},
      { rarity: "chroma", weight: 0.2, buddies: [
        { name: "Aurora Summit", emoji: "🌌", effect: "rainbow" },
        { name: "Crystal Avalanche", emoji: "❄️", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Mountain God", emoji: "⛰️", sell: 25000 }
      ]}
    ]
  },

  {
    id: "pixel", name: "Pixel World Pack", emoji: "🎮", price: 100, currency: "coins",
    desc: "8-bit heroes from a forgotten cartridge.",
    requiresAll: true, tier3: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Pixel Heart", emoji: "❤️" }, { name: "Cartridge", emoji: "💾" },
        { name: "Joystick", emoji: "🕹️" }, { name: "8-bit Coin", emoji: "🪙" },
        { name: "Pixel Cloud", emoji: "☁️" }, { name: "Block Tree", emoji: "🌲" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Pixel Hero", emoji: "🎮" }, { name: "Pixel Princess", emoji: "👸" },
        { name: "Boss Knight", emoji: "⚔️" }, { name: "Pixel Dragon", emoji: "🐉" },
        { name: "Power Star", emoji: "⭐" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Glitch Skeleton", emoji: "💀" }, { name: "Pixel Wizard", emoji: "🧙" },
        { name: "Sprite Knight", emoji: "🤖" }, { name: "Lava Worm", emoji: "🪱" }
      ]},
      { rarity: "legendary", weight: 0.4, buddies: [
        { name: "The Final Boss", emoji: "👹" }, { name: "Game Master", emoji: "🎮" }
      ]},
      { rarity: "chroma", weight: 0.2, buddies: [
        { name: "Rainbow Cartridge", emoji: "💾", effect: "rainbow" },
        { name: "Glitching Hero", emoji: "✨", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Game Architect", emoji: "👨‍💻", sell: 25000 }
      ]}
    ]
  },

  {
    id: "artist", name: "Artist's Studio Pack", emoji: "🎨", price: 100, currency: "coins",
    desc: "Brushes, marble, and inspiration.",
    requiresAll: true, tier3: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Paintbrush", emoji: "🖌️" }, { name: "Palette", emoji: "🎨" },
        { name: "Pencil", emoji: "✏️" }, { name: "Easel", emoji: "🖼️" },
        { name: "Beret", emoji: "👒" }, { name: "Charcoal", emoji: "⚫" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Sculptor", emoji: "🗿" }, { name: "Portrait", emoji: "🖼️" },
        { name: "Watercolor", emoji: "💧" }, { name: "Pastel Stick", emoji: "🖍️" },
        { name: "Sketchbook", emoji: "📔" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Renaissance Master", emoji: "👨‍🎨" }, { name: "Modern Artist", emoji: "🖌️" },
        { name: "Sculptor's Muse", emoji: "🗿" }, { name: "Mural Painter", emoji: "🎨" }
      ]},
      { rarity: "legendary", weight: 0.4, buddies: [
        { name: "The Mona Lisa", emoji: "🖼️" }, { name: "Sculptor God", emoji: "🗿" }
      ]},
      { rarity: "chroma", weight: 0.2, buddies: [
        { name: "Rainbow Splatter", emoji: "🎨", effect: "rainbow" },
        { name: "Prism Brush", emoji: "🖌️", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Lost Masterpiece", emoji: "🖼️", sell: 25000 }
      ]}
    ]
  },

  {
    id: "voltage", name: "Voltage Core Pack", emoji: "⚡", price: 100, currency: "coins",
    desc: "Pure energy buddies straight off the grid.",
    requiresAll: true, tier3: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Battery Cell", emoji: "🔋" }, { name: "Power Plug", emoji: "🔌" },
        { name: "Live Wire", emoji: "⚡" }, { name: "Switch", emoji: "🎛️" },
        { name: "Lightbulb", emoji: "💡" }, { name: "Static Spark", emoji: "✨" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Generator", emoji: "⚙️" }, { name: "Tesla Coil", emoji: "⚡" },
        { name: "Capacitor", emoji: "🔋" }, { name: "Transformer", emoji: "🔌" },
        { name: "Volt Meter", emoji: "📊" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Lightning Bolt", emoji: "⚡" }, { name: "Plasma Orb", emoji: "🔮" },
        { name: "Electric Eel", emoji: "🐍" }, { name: "Storm Cell", emoji: "⛈️" }
      ]},
      { rarity: "legendary", weight: 0.4, buddies: [
        { name: "The Voltage King", emoji: "👑" }, { name: "Storm Conductor", emoji: "⛈️" }
      ]},
      { rarity: "chroma", weight: 0.2, buddies: [
        { name: "Prism Plasma", emoji: "🔮", effect: "rainbow" },
        { name: "Aurora Bolt", emoji: "🌌", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Lightning God", emoji: "⚡", sell: 25000 }
      ]}
    ]
  },

  {
    id: "oracle", name: "Oracle Pack", emoji: "🔮", price: 100, currency: "coins",
    desc: "Seers, runes, and visions of fate.",
    requiresAll: true, tier3: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Tarot Card", emoji: "🎴" }, { name: "Quartz Shard", emoji: "💎" },
        { name: "Pendulum", emoji: "⚖️" }, { name: "Incense", emoji: "🕯️" },
        { name: "Tea Leaves", emoji: "🍵" }, { name: "Runestone", emoji: "🪨" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Mystic", emoji: "🧙‍♀️" }, { name: "Seer", emoji: "👁️" },
        { name: "Spirit Board", emoji: "🎲" }, { name: "Card Reader", emoji: "🃏" },
        { name: "Diviner", emoji: "🔮" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Fortune Teller", emoji: "🔮" }, { name: "Time Reader", emoji: "⏳" },
        { name: "Soul Whisperer", emoji: "👻" }, { name: "Dream Walker", emoji: "💤" }
      ]},
      { rarity: "legendary", weight: 0.4, buddies: [
        { name: "The All-Seeing", emoji: "👁️" }, { name: "Oracle Queen", emoji: "👸" }
      ]},
      { rarity: "chroma", weight: 0.2, buddies: [
        { name: "Rainbow Vision", emoji: "🌈", effect: "rainbow" },
        { name: "Aura Sphere", emoji: "🔮", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Eternal Oracle", emoji: "👁️", sell: 25000 }
      ]}
    ]
  },

  {
    id: "moonlight", name: "Moonlight Pack", emoji: "🌙", price: 100, currency: "coins",
    desc: "Nocturnal creatures of the silver hour.",
    requiresAll: true, tier3: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Crescent Moon", emoji: "🌙" }, { name: "Twinkle Star", emoji: "⭐" },
        { name: "Night Owl", emoji: "🦉" }, { name: "Lunar Bat", emoji: "🦇" },
        { name: "Wolf Cub", emoji: "🐺" }, { name: "Luna Moth", emoji: "🦋" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Werewolf", emoji: "🐺" }, { name: "Vampire", emoji: "🦇" },
        { name: "Moon Cat", emoji: "🐈‍⬛" }, { name: "Specter", emoji: "👻" },
        { name: "Night Hawk", emoji: "🦅" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Lunar Wolf", emoji: "🐺" }, { name: "Moonstone Bear", emoji: "🐻" },
        { name: "Vampire Lord", emoji: "🧛" }, { name: "Banshee", emoji: "👻" }
      ]},
      { rarity: "legendary", weight: 0.4, buddies: [
        { name: "The Moon Queen", emoji: "👸" }, { name: "Night Guardian", emoji: "🌃" }
      ]},
      { rarity: "chroma", weight: 0.2, buddies: [
        { name: "Lunar Eclipse", emoji: "🌑", effect: "rainbow" },
        { name: "Aurora Night", emoji: "🌌", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Moon Demon", emoji: "🌚", sell: 25000 }
      ]}
    ]
  },

  {
    id: "steampunk", name: "Steampunk Pack", emoji: "🚂", price: 100, currency: "coins",
    desc: "Brass, gears, and clockwork wonders.",
    requiresAll: true, tier3: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Brass Cog", emoji: "⚙️" }, { name: "Goggles", emoji: "🥽" },
        { name: "Top Hat", emoji: "🎩" }, { name: "Pocket Watch", emoji: "⏰" },
        { name: "Steam Lantern", emoji: "🏮" }, { name: "Brass Key", emoji: "🗝️" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Steam Locomotive", emoji: "🚂" }, { name: "Airship", emoji: "🎈" },
        { name: "Mechanical Owl", emoji: "🦉" }, { name: "Brass Spider", emoji: "🕷️" },
        { name: "Gear Crank", emoji: "⚙️" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Clockwork Knight", emoji: "🤖" }, { name: "Steam Golem", emoji: "🤖" },
        { name: "Aether Bomb", emoji: "💣" }, { name: "Time Engineer", emoji: "🔧" }
      ]},
      { rarity: "legendary", weight: 0.4, buddies: [
        { name: "The Iron Baron", emoji: "🎩" }, { name: "Steam Lord", emoji: "💨" }
      ]},
      { rarity: "chroma", weight: 0.2, buddies: [
        { name: "Brass Aurora", emoji: "⚙️", effect: "rainbow" },
        { name: "Steam Prism", emoji: "✨", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Clockwork Emperor", emoji: "⌛", sell: 25000 }
      ]}
    ]
  },

  {
    id: "dojo", name: "Dojo Pack", emoji: "🥋", price: 100, currency: "coins",
    desc: "Disciples of the martial path.",
    requiresAll: true, tier3: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Belt", emoji: "🥋" }, { name: "Bo Staff", emoji: "🥢" },
        { name: "Headband", emoji: "👲" }, { name: "Kendo Stick", emoji: "🎋" },
        { name: "Sparring Pad", emoji: "🛡️" }, { name: "Punching Bag", emoji: "🥊" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Karate Master", emoji: "🥋" }, { name: "Judo Throw", emoji: "🤼" },
        { name: "Kung Fu Stance", emoji: "🥋" }, { name: "Sensei", emoji: "🧓" },
        { name: "Monk Apprentice", emoji: "🧘" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Dragon Style", emoji: "🐲" }, { name: "Tiger Style", emoji: "🐅" },
        { name: "Crane Style", emoji: "🦢" }, { name: "Snake Style", emoji: "🐍" }
      ]},
      { rarity: "legendary", weight: 0.4, buddies: [
        { name: "The Grand Master", emoji: "🥋" }, { name: "Shaolin Monk", emoji: "🧘‍♂️" }
      ]},
      { rarity: "chroma", weight: 0.2, buddies: [
        { name: "Rainbow Strike", emoji: "🌈", effect: "rainbow" },
        { name: "Spirit Aura", emoji: "🌟", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Forgotten Sensei", emoji: "👴", sell: 25000 }
      ]}
    ]
  },

  {
    id: "sushi", name: "Sushi Bar Pack", emoji: "🍣", price: 100, currency: "coins",
    desc: "Fresh from the master chef's counter.",
    requiresAll: true, tier3: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Nigiri", emoji: "🍙" }, { name: "Maki Roll", emoji: "🍣" },
        { name: "Wasabi", emoji: "🟢" }, { name: "Pickled Ginger", emoji: "🌶️" },
        { name: "Soy Sauce", emoji: "🥫" }, { name: "Chopsticks", emoji: "🥢" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Salmon Fillet", emoji: "🐟" }, { name: "Tuna Slice", emoji: "🐟" },
        { name: "Eel Roll", emoji: "✨" }, { name: "Rice Bowl", emoji: "🍚" },
        { name: "Sake", emoji: "🍶" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Master Chef", emoji: "👨‍🍳" }, { name: "Octopus Special", emoji: "🐙" },
        { name: "Dragon Roll", emoji: "🐉" }, { name: "Sashimi Plate", emoji: "🍱" }
      ]},
      { rarity: "legendary", weight: 0.4, buddies: [
        { name: "The Sushi Sensei", emoji: "👨‍🍳" }, { name: "Golden Salmon", emoji: "🐟" }
      ]},
      { rarity: "chroma", weight: 0.2, buddies: [
        { name: "Rainbow Roll", emoji: "🍣", effect: "rainbow" },
        { name: "Sakura Sushi", emoji: "🌸", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Legendary Toro", emoji: "🐟", sell: 25000 }
      ]}
    ]
  },

  {
    id: "music", name: "Music Pack", emoji: "🎺", price: 100, currency: "coins",
    desc: "Performers, instruments, and golden notes.",
    requiresAll: true, tier3: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Trumpet", emoji: "🎺" }, { name: "Drum", emoji: "🥁" },
        { name: "Guitar", emoji: "🎸" }, { name: "Piano", emoji: "🎹" },
        { name: "Saxophone", emoji: "🎷" }, { name: "Violin", emoji: "🎻" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Conductor", emoji: "🎩" }, { name: "Rock Star", emoji: "🎸" },
        { name: "Pianist", emoji: "🎹" }, { name: "DJ", emoji: "🎧" },
        { name: "Singer", emoji: "🎤" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Music Director", emoji: "🎼" }, { name: "Orchestra Hall", emoji: "🎻" },
        { name: "Concert Pianist", emoji: "🎹" }, { name: "Jazz Lead", emoji: "🎷" }
      ]},
      { rarity: "legendary", weight: 0.4, buddies: [
        { name: "The Maestro", emoji: "🎼" }, { name: "Legendary Composer", emoji: "🎶" }
      ]},
      { rarity: "chroma", weight: 0.2, buddies: [
        { name: "Rainbow Melody", emoji: "🌈", effect: "rainbow" },
        { name: "Aurora Symphony", emoji: "✨", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Eternal Composer", emoji: "🎶", sell: 25000 }
      ]}
    ]
  },

  {
    id: "vineyard", name: "Vineyard Pack", emoji: "🍷", price: 100, currency: "coins",
    desc: "Aged cellars and sun-soaked vines.",
    requiresAll: true, tier3: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Grape Cluster", emoji: "🍇" }, { name: "Wine Bottle", emoji: "🍷" },
        { name: "Cheese Wheel", emoji: "🧀" }, { name: "Sourdough", emoji: "🥖" },
        { name: "Cork", emoji: "🍾" }, { name: "Olive", emoji: "🫒" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Sommelier", emoji: "🥂" }, { name: "Vintner", emoji: "🍇" },
        { name: "Vine", emoji: "🌿" }, { name: "Oak Barrel", emoji: "🪣" },
        { name: "Wine Glass", emoji: "🍷" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Master Winemaker", emoji: "👨‍🌾" }, { name: "Aged Cellar", emoji: "🍾" },
        { name: "Rosé Spring", emoji: "🌸" }, { name: "Champagne", emoji: "🥂" }
      ]},
      { rarity: "legendary", weight: 0.4, buddies: [
        { name: "The Vintage Lord", emoji: "🍷" }, { name: "Sommelier King", emoji: "👑" }
      ]},
      { rarity: "chroma", weight: 0.2, buddies: [
        { name: "Rainbow Vintage", emoji: "🌈", effect: "rainbow" },
        { name: "Sunset Vintner", emoji: "🌅", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Eternal Vintage", emoji: "🍷", sell: 25000 }
      ]}
    ]
  },

  {
    id: "sailor", name: "Sailor's Crew Pack", emoji: "⛵", price: 100, currency: "coins",
    desc: "Open seas, ghost ships, and salty crews.",
    requiresAll: true, tier3: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Anchor", emoji: "⚓" }, { name: "Compass", emoji: "🧭" },
        { name: "Coil of Rope", emoji: "🪢" }, { name: "Captain Hat", emoji: "🧢" },
        { name: "Spyglass", emoji: "🔭" }, { name: "Treasure Map", emoji: "🗺️" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "First Mate", emoji: "👨‍✈️" }, { name: "Lookout", emoji: "👁️" },
        { name: "Mermaid", emoji: "🧜‍♀️" }, { name: "Lifebuoy", emoji: "🛟" },
        { name: "Ship Wheel", emoji: "🛞" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "Sea Captain", emoji: "👨‍✈️" }, { name: "Schooner", emoji: "🛥️" },
        { name: "Battle Galleon", emoji: "🚢" }, { name: "Cannon Crew", emoji: "💣" }
      ]},
      { rarity: "legendary", weight: 0.4, buddies: [
        { name: "The Pirate Lord", emoji: "🏴‍☠️" }, { name: "Sea Empress", emoji: "👸" }
      ]},
      { rarity: "chroma", weight: 0.2, buddies: [
        { name: "Rainbow Sails", emoji: "⛵", effect: "rainbow" },
        { name: "Storm Compass", emoji: "🧭", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Ghost Ship", emoji: "🚢", sell: 25000 }
      ]}
    ]
  },

  {
    id: "speedway", name: "Speedway Pack", emoji: "🏎️", price: 100, currency: "coins",
    desc: "Burnouts, lap leaders, and turbocharged glory.",
    requiresAll: true, tier3: true,
    drops: [
      { rarity: "uncommon", weight: 50, buddies: [
        { name: "Tire", emoji: "🛞" }, { name: "Helmet", emoji: "🪖" },
        { name: "Trophy", emoji: "🏆" }, { name: "Pit Crew", emoji: "👷" },
        { name: "Wrench", emoji: "🔧" }, { name: "Checkered Flag", emoji: "🏁" }
      ]},
      { rarity: "rare", weight: 33, buddies: [
        { name: "Race Car Driver", emoji: "🏎️" }, { name: "Mechanic", emoji: "🔧" },
        { name: "Lap Counter", emoji: "⏱️" }, { name: "Pit Lane", emoji: "🛣️" },
        { name: "Crash Helmet", emoji: "🪖" }
      ]},
      { rarity: "epic", weight: 16.3, buddies: [
        { name: "F1 Champion", emoji: "🏎️" }, { name: "NASCAR Hero", emoji: "🏁" },
        { name: "Drift Racer", emoji: "💨" }, { name: "Turbo Engine", emoji: "⚙️" }
      ]},
      { rarity: "legendary", weight: 0.4, buddies: [
        { name: "The Speed Demon", emoji: "🏎️" }, { name: "World Champion", emoji: "🏆" }
      ]},
      { rarity: "chroma", weight: 0.2, buddies: [
        { name: "Rainbow Drift", emoji: "💨", effect: "rainbow" },
        { name: "Lightning Lap", emoji: "⚡", effect: "rainbow" }
      ]},
      { rarity: "mystical", weight: 0.1, buddies: [
        { name: "The Eternal Racer", emoji: "🏁", sell: 25000 }
      ]}
    ]
  }
];
