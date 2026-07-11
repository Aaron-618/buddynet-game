/* ===========================================================
   BUDDYNET — custom SVG buddy art
   Keyed by buddy ID (pack-id_name-snake-case).
   Used by buddyImg() in game.js when an emoji isn't a good match.
   =========================================================== */

const CUSTOM_SVG = {};

// ---------- PTERODACTYL (Dino Uncommon) — cartoon flying reptile ----------
CUSTOM_SVG.dino_pterodactyl = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ptBody" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0"   stop-color="#FFD93D"/>
      <stop offset="1"   stop-color="#FF8C00"/>
    </linearGradient>
    <linearGradient id="ptWing" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0"   stop-color="#FFE066"/>
      <stop offset="1"   stop-color="#E67E00"/>
    </linearGradient>
  </defs>
  <!-- Left wing (spread up and out) -->
  <path d="M40 56 Q18 34 4 8 Q10 22 16 30 Q23 42 34 48 Z"
        fill="url(#ptWing)" stroke="#8B4513" stroke-width="1.5" stroke-linejoin="round"/>
  <!-- Left wing claw tip -->
  <path d="M6 10 L2 4 L10 8 Z" fill="#E5E7EB" stroke="#4B5563" stroke-width="0.6" stroke-linejoin="round"/>
  <!-- Right wing (spread up and out) -->
  <path d="M60 56 Q82 34 96 8 Q90 22 84 30 Q77 42 66 48 Z"
        fill="url(#ptWing)" stroke="#8B4513" stroke-width="1.5" stroke-linejoin="round"/>
  <!-- Right wing claw tip -->
  <path d="M94 10 L98 4 L90 8 Z" fill="#E5E7EB" stroke="#4B5563" stroke-width="0.6" stroke-linejoin="round"/>
  <!-- Body / torso -->
  <ellipse cx="50" cy="64" rx="15" ry="19" fill="url(#ptBody)" stroke="#8B4513" stroke-width="1.5"/>
  <!-- Body spots -->
  <circle cx="55" cy="60" r="2"   fill="#E67E00" opacity="0.7"/>
  <circle cx="46" cy="70" r="2"   fill="#E67E00" opacity="0.7"/>
  <circle cx="52" cy="76" r="1.5" fill="#E67E00" opacity="0.5"/>
  <!-- Head -->
  <ellipse cx="50" cy="40" rx="14" ry="12" fill="url(#ptBody)" stroke="#8B4513" stroke-width="1.5"/>
  <!-- Head crest going back -->
  <path d="M52 30 Q62 26 65 34 Q58 34 55 36 Z"
        fill="url(#ptBody)" stroke="#8B4513" stroke-width="1.2"/>
  <!-- Beak (open, cheerful) -->
  <path d="M36 40 L20 43 L36 47 Z" fill="#FFA500" stroke="#8B4513" stroke-width="1"/>
  <path d="M36 40 L36 47 L38 43 Z" fill="#FF6B35"/>
  <!-- Tongue -->
  <ellipse cx="28" cy="44" rx="4" ry="1.2" fill="#EC4899"/>
  <!-- Eye -->
  <circle cx="47" cy="38" r="4"   fill="white" stroke="#1a1a2e" stroke-width="0.8"/>
  <circle cx="48" cy="39" r="2.2" fill="#1a1a2e"/>
  <circle cx="48.7" cy="38" r="0.7" fill="white"/>
  <!-- Cheek spot -->
  <circle cx="54" cy="44" r="2" fill="#FF8C00" opacity="0.5"/>
  <!-- Nostril -->
  <circle cx="30" cy="42" r="0.8" fill="#8B4513"/>
  <!-- Feet -->
  <path d="M43 82 L40 92 L46 92 L46 82 Z" fill="#FFA500" stroke="#8B4513" stroke-width="0.8" stroke-linejoin="round"/>
  <path d="M54 82 L54 92 L60 92 L57 82 Z" fill="#FFA500" stroke="#8B4513" stroke-width="0.8" stroke-linejoin="round"/>
  <!-- Little tail -->
  <path d="M62 76 Q70 76 74 82 Q68 80 63 80 Z" fill="url(#ptBody)" stroke="#8B4513" stroke-width="1"/>
</svg>`;

// ---------- GRIFFIN (Medieval Epic) — cartoon eagle-lion, cheerful pose ----------
CUSTOM_SVG.medieval_griffin = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grFur"  x1="0" y1="0" x2="0" y2="1">
      <stop offset="0"   stop-color="#F4C87A"/>
      <stop offset="1"   stop-color="#B87333"/>
    </linearGradient>
    <linearGradient id="grFeath" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0"   stop-color="#FFEEB0"/>
      <stop offset="1"   stop-color="#D4A144"/>
    </linearGradient>
    <linearGradient id="grWing" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0"   stop-color="#B87333"/>
      <stop offset="1"   stop-color="#7A4A1A"/>
    </linearGradient>
  </defs>
  <!-- Cast shadow -->
  <ellipse cx="50" cy="94" rx="30" ry="4" fill="#1a1a2e" opacity="0.25"/>

  <!-- Back wing (raised up-right) -->
  <path d="M55 34 Q78 12 92 18 Q90 34 82 44 Q72 42 60 42 Z"
        fill="url(#grWing)" stroke="#3B2100" stroke-width="1.4" stroke-linejoin="round"/>
  <!-- Back-wing feather lines -->
  <path d="M62 22 L64 34 M70 18 L70 33 M78 18 L76 33 M85 22 L82 35"
        stroke="#3B2100" stroke-width="0.5" fill="none"/>

  <!-- Front wing (raised up-left) -->
  <path d="M42 34 Q22 8 8 18 Q10 34 20 44 Q30 42 40 42 Z"
        fill="url(#grWing)" stroke="#3B2100" stroke-width="1.4" stroke-linejoin="round"/>
  <!-- Front-wing feather lines -->
  <path d="M14 22 L18 34 M22 18 L24 33 M30 18 L28 33 M38 22 L36 35"
        stroke="#3B2100" stroke-width="0.5" fill="none"/>

  <!-- Lion body (back haunches) -->
  <ellipse cx="62" cy="66" rx="24" ry="17" fill="url(#grFur)" stroke="#5C3200" stroke-width="1.5"/>
  <!-- Back leg -->
  <ellipse cx="72" cy="82" rx="8" ry="9" fill="url(#grFur)" stroke="#5C3200" stroke-width="1.2"/>
  <ellipse cx="72" cy="90" rx="8" ry="3" fill="url(#grFur)" stroke="#5C3200" stroke-width="1"/>
  <!-- Toes on back paw -->
  <path d="M67 90 L67 93 M72 90 L72 93 M77 90 L77 93" stroke="#5C3200" stroke-width="0.6"/>

  <!-- Feathered chest / front body -->
  <path d="M25 46 Q26 40 35 40 L48 40 L48 78 Q48 84 42 84 Q28 84 24 78 Z"
        fill="url(#grFeath)" stroke="#5C3200" stroke-width="1.4" stroke-linejoin="round"/>
  <!-- Feather ruffles on chest -->
  <path d="M28 52 Q34 55 40 52 M28 60 Q34 63 40 60 M28 68 Q34 71 40 68"
        stroke="#5C3200" stroke-width="0.6" fill="none"/>

  <!-- Front legs (bird/talon) -->
  <rect x="30" y="80" width="5" height="10" rx="2" fill="url(#grFeath)" stroke="#5C3200" stroke-width="0.8"/>
  <rect x="40" y="80" width="5" height="10" rx="2" fill="url(#grFeath)" stroke="#5C3200" stroke-width="0.8"/>
  <!-- Talons -->
  <polygon points="28,90 31,88 31,93" fill="#B87333" stroke="#3B2100" stroke-width="0.5"/>
  <polygon points="34,90 33,93 36,90" fill="#B87333" stroke="#3B2100" stroke-width="0.5"/>
  <polygon points="38,90 41,88 41,93" fill="#B87333" stroke="#3B2100" stroke-width="0.5"/>
  <polygon points="44,90 43,93 46,90" fill="#B87333" stroke="#3B2100" stroke-width="0.5"/>

  <!-- Head (eagle head) -->
  <path d="M22 30 Q22 12 40 12 Q52 12 52 30 Q52 42 40 46 Q28 44 22 38 Z"
        fill="url(#grFeath)" stroke="#5C3200" stroke-width="1.5" stroke-linejoin="round"/>

  <!-- Head feather crest -->
  <path d="M30 14 Q30 6 36 10 L36 14 Z" fill="url(#grFeath)" stroke="#5C3200" stroke-width="1" stroke-linejoin="round"/>
  <path d="M36 12 Q40 3 44 10 L44 14 Z" fill="url(#grFeath)" stroke="#5C3200" stroke-width="1" stroke-linejoin="round"/>
  <path d="M44 12 Q50 6 52 14 Z" fill="url(#grFeath)" stroke="#5C3200" stroke-width="1" stroke-linejoin="round"/>
  <!-- Ear-tuft on the side -->
  <path d="M52 22 Q60 18 56 32 Z" fill="url(#grFeath)" stroke="#5C3200" stroke-width="1"/>

  <!-- Beak -->
  <path d="M22 32 L8 30 Q10 36 15 38 L22 38 Z" fill="#E8A02D" stroke="#5C3200" stroke-width="1.3" stroke-linejoin="round"/>
  <!-- Beak hook -->
  <path d="M8 30 Q11 33 13 32" stroke="#5C3200" stroke-width="1" fill="none" stroke-linecap="round"/>
  <!-- Mouth open showing pink -->
  <path d="M14 36 Q19 40 22 38 Q19 41 15 40 Z" fill="#FF9B9B" stroke="#5C3200" stroke-width="0.8"/>

  <!-- Eye -->
  <circle cx="35" cy="26" r="4"   fill="white" stroke="#1a1a2e" stroke-width="0.9"/>
  <circle cx="36" cy="27" r="2.4" fill="#1a1a2e"/>
  <circle cx="36.8" cy="26" r="0.8" fill="white"/>
  <!-- Eyebrow curve -->
  <path d="M31 22 Q34 20 39 22" stroke="#5C3200" stroke-width="0.9" fill="none" stroke-linecap="round"/>

  <!-- Long tail -->
  <path d="M84 66 Q94 62 92 78 Q92 84 88 84"
        stroke="#B87333" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M84 66 Q94 62 92 78 Q92 84 88 84"
        stroke="#5C3200" stroke-width="0.8" fill="none" stroke-linecap="round" opacity="0.7"/>
  <!-- Tail tuft (leaf shape) -->
  <path d="M84 82 Q90 76 92 86 Q88 90 84 82 Z"
        fill="url(#grFeath)" stroke="#5C3200" stroke-width="1" stroke-linejoin="round"/>
</svg>`;

// ---------- GUMMY BEAR (Candy Shop Uncommon) — translucent blue gummy candy ----------
CUSTOM_SVG.candy_gummy_bear = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gbBody" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0"   stop-color="#7FE8FF"/>
      <stop offset="0.5" stop-color="#38BDF8"/>
      <stop offset="1"   stop-color="#0284C7"/>
    </linearGradient>
    <radialGradient id="gbHi" cx="0.35" cy="0.3" r="0.5">
      <stop offset="0"   stop-color="white"    stop-opacity="0.8"/>
      <stop offset="1"   stop-color="white"    stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Cast shadow -->
  <ellipse cx="50" cy="94" rx="26" ry="4" fill="#1a1a2e" opacity="0.25"/>
  <!-- Left ear -->
  <circle cx="27" cy="20" r="10" fill="url(#gbBody)" stroke="#0369A1" stroke-width="1.2"/>
  <!-- Right ear -->
  <circle cx="73" cy="20" r="10" fill="url(#gbBody)" stroke="#0369A1" stroke-width="1.2"/>
  <!-- Head -->
  <ellipse cx="50" cy="30" rx="22" ry="20" fill="url(#gbBody)" stroke="#0369A1" stroke-width="1.4"/>
  <!-- Body (chunky) -->
  <path d="M18 62 Q18 40 32 38 L68 38 Q82 40 82 62 Q82 88 60 90 L40 90 Q18 88 18 62 Z"
        fill="url(#gbBody)" stroke="#0369A1" stroke-width="1.4"/>
  <!-- Arms tucked in front (rounded stumps) -->
  <ellipse cx="30" cy="60" rx="9" ry="14" fill="url(#gbBody)" stroke="#0369A1" stroke-width="1.2"/>
  <ellipse cx="70" cy="60" rx="9" ry="14" fill="url(#gbBody)" stroke="#0369A1" stroke-width="1.2"/>
  <!-- Belly hint (softer paler oval) -->
  <ellipse cx="50" cy="70" rx="14" ry="16" fill="white" opacity="0.18"/>
  <!-- Feet at bottom -->
  <ellipse cx="35" cy="88" rx="9" ry="6" fill="url(#gbBody)" stroke="#0369A1" stroke-width="1.2"/>
  <ellipse cx="65" cy="88" rx="9" ry="6" fill="url(#gbBody)" stroke="#0369A1" stroke-width="1.2"/>
  <!-- Small subtle eyes (indents) -->
  <ellipse cx="41" cy="30" rx="1.8" ry="2.4" fill="#0C4A6E"/>
  <ellipse cx="59" cy="30" rx="1.8" ry="2.4" fill="#0C4A6E"/>
  <!-- Tiny snout dot -->
  <circle cx="50" cy="37" r="1.2" fill="#0C4A6E" opacity="0.5"/>
  <!-- Glossy top-left highlight over everything (translucency shine) -->
  <ellipse cx="35" cy="26" rx="18" ry="12" fill="url(#gbHi)"/>
  <!-- Small round shine on ear -->
  <circle cx="24" cy="17" r="3" fill="white" opacity="0.55"/>
  <!-- Small sparkle -->
  <circle cx="70" cy="46" r="2" fill="white" opacity="0.6"/>
  <circle cx="46" cy="64" r="1.5" fill="white" opacity="0.5"/>
</svg>`;

// ---------- JELLY BEAN (Candy Shop Uncommon) — colorful bean shape ----------
CUSTOM_SVG.candy_jelly_bean = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="jbGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0"    stop-color="#FF5470"/>
      <stop offset="0.28" stop-color="#FF8C00"/>
      <stop offset="0.5"  stop-color="#FFD93D"/>
      <stop offset="0.75" stop-color="#4ADE80"/>
      <stop offset="1"    stop-color="#38BDF8"/>
    </linearGradient>
  </defs>
  <!-- Jelly bean shape (elongated tilted oval) -->
  <ellipse cx="50" cy="50" rx="40" ry="26" fill="url(#jbGrad)" transform="rotate(-18 50 50)"
           stroke="#1a1a2e" stroke-width="1.5"/>
  <!-- Glossy highlight -->
  <ellipse cx="38" cy="36" rx="20" ry="7" fill="white" opacity="0.55" transform="rotate(-18 38 36)"/>
  <!-- Small sparkle -->
  <circle cx="62" cy="42" r="2" fill="white"/>
  <circle cx="30" cy="60" r="1.5" fill="white" opacity="0.7"/>
</svg>`;

// ---------- RAINBOW CHARMANDER (Elemental Mystical) — custom Blooket-style art ----------
CUSTOM_SVG.elemental_rainbow_charmander = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="rcBody" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0"   stop-color="#FF1F4E"/>
      <stop offset="0.2" stop-color="#FF8C00"/>
      <stop offset="0.4" stop-color="#FFD93D"/>
      <stop offset="0.6" stop-color="#4ADE80"/>
      <stop offset="0.8" stop-color="#38BDF8"/>
      <stop offset="1"   stop-color="#A855F7"/>
    </linearGradient>
    <linearGradient id="rcFlame" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0"   stop-color="#A855F7"/>
      <stop offset="0.3" stop-color="#38BDF8"/>
      <stop offset="0.5" stop-color="#4ADE80"/>
      <stop offset="0.75" stop-color="#FFD93D"/>
      <stop offset="1"   stop-color="#FF1F4E"/>
    </linearGradient>
    <radialGradient id="rcGlow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="rgba(255,255,255,0.4)"/>
      <stop offset="1" stop-color="rgba(255,255,255,0)"/>
    </radialGradient>
  </defs>

  <!-- Rainbow flame (behind body, upper right) -->
  <path d="M82 38 Q72 28 78 14 Q83 22 86 18 Q86 8 92 4 Q90 14 94 18 Q98 22 95 32 Q90 40 82 38 Z"
        fill="url(#rcFlame)"/>
  <!-- Inner flame highlight -->
  <path d="M85 32 Q82 24 86 16 Q88 22 90 18 Q88 26 92 28 Q90 34 85 32 Z"
        fill="rgba(255,255,255,0.35)"/>
  <!-- Flame sparkles -->
  <circle cx="78" cy="6"  r="1.2" fill="#FFD93D"/>
  <circle cx="96" cy="14" r="1"   fill="#FFD93D"/>
  <circle cx="95" cy="34" r="1.2" fill="#FF1F4E"/>
  <circle cx="74" cy="20" r="0.8" fill="#FFD93D"/>
  <circle cx="98" cy="42" r="1"   fill="#A855F7"/>

  <!-- Rounded square body -->
  <rect x="18" y="26" width="62" height="60" rx="15" fill="url(#rcBody)" stroke="#1A1A2E" stroke-width="1.4"/>
  <!-- Subtle top highlight to give 3D feel -->
  <rect x="22" y="29" width="54" height="14" rx="8" fill="url(#rcGlow)"/>

  <!-- Yellow belly -->
  <ellipse cx="49" cy="74" rx="20" ry="11" fill="#FFE082"/>

  <!-- Feet -->
  <rect x="22" y="80" width="12" height="9" rx="4.5" fill="#fff" stroke="#1A1A2E" stroke-width="1"/>
  <rect x="64" y="80" width="12" height="9" rx="4.5" fill="#fff" stroke="#1A1A2E" stroke-width="1"/>
  <!-- Toe lines -->
  <line x1="26" y1="83" x2="26" y2="89" stroke="#1A1A2E" stroke-width="0.6"/>
  <line x1="30" y1="83" x2="30" y2="89" stroke="#1A1A2E" stroke-width="0.6"/>
  <line x1="68" y1="83" x2="68" y2="89" stroke="#1A1A2E" stroke-width="0.6"/>
  <line x1="72" y1="83" x2="72" y2="89" stroke="#1A1A2E" stroke-width="0.6"/>

  <!-- Big eyes (whites) -->
  <ellipse cx="33" cy="46" rx="7.5" ry="9" fill="#fff" stroke="#1A1A2E" stroke-width="1.4"/>
  <ellipse cx="63" cy="46" rx="7.5" ry="9" fill="#fff" stroke="#1A1A2E" stroke-width="1.4"/>
  <!-- Iris (teal-blue) -->
  <ellipse cx="33" cy="48" rx="4.5" ry="5.5" fill="#1B4965"/>
  <ellipse cx="63" cy="48" rx="4.5" ry="5.5" fill="#1B4965"/>
  <!-- Pupil -->
  <circle cx="33" cy="49" r="2.4" fill="#0A1722"/>
  <circle cx="63" cy="49" r="2.4" fill="#0A1722"/>
  <!-- Eye shine -->
  <circle cx="34.5" cy="45" r="1.6" fill="#fff"/>
  <circle cx="64.5" cy="45" r="1.6" fill="#fff"/>

  <!-- Brow ridges (smile lines above eyes) -->
  <path d="M27 38 Q31 35 40 39" stroke="#1A1A2E" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  <path d="M56 39 Q65 35 69 38" stroke="#1A1A2E" stroke-width="1.6" fill="none" stroke-linecap="round"/>

  <!-- Nostrils -->
  <ellipse cx="44" cy="60" rx="0.7" ry="1" fill="#1A1A2E"/>
  <ellipse cx="52" cy="60" rx="0.7" ry="1" fill="#1A1A2E"/>

  <!-- Smile (open mouth) -->
  <path d="M37 65 Q48 76 59 65 Q59 73 48 74 Q37 73 37 65 Z" fill="#1A1A2E" stroke="#1A1A2E" stroke-width="1"/>
  <!-- Pink tongue -->
  <path d="M40 68 Q48 73 56 68 Q56 73 48 74 Q40 73 40 68 Z" fill="#E91E63"/>
  <!-- Teeth -->
  <path d="M41 65 L42 69 L44 65 Z" fill="#fff"/>
  <path d="M52 65 L54 69 L55 65 Z" fill="#fff"/>
</svg>`;

// (Phoenix and Phoenix Overlord intentionally use the default emoji rendering — no custom SVG.)

// ---------- CYBER DOG (Cyber Rare) ----------
CUSTOM_SVG.cyber_cyber_dog = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cdB" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#3A3D5C"/><stop offset="1" stop-color="#15172B"/>
    </linearGradient>
    <filter id="cyGlow"><feGaussianBlur stdDeviation="1.2"/></filter>
  </defs>
  <ellipse cx="50" cy="66" rx="30" ry="20" fill="url(#cdB)"/>
  <ellipse cx="50" cy="38" rx="23" ry="20" fill="url(#cdB)"/>
  <polygon points="28,22 22,4 40,22" fill="#15172B"/>
  <polygon points="72,22 78,4 60,22" fill="#15172B"/>
  <polygon points="28,22 26,12 35,21" fill="#00F2FF" opacity="0.5"/>
  <polygon points="72,22 74,12 65,21" fill="#00F2FF" opacity="0.5"/>
  <rect x="30" y="33" width="40" height="7" rx="3.5" fill="#00F2FF" filter="url(#cyGlow)"/>
  <rect x="32" y="35" width="36" height="3" rx="1.5" fill="white" opacity="0.8"/>
  <ellipse cx="50" cy="48" rx="11" ry="8" fill="#0A0C20"/>
  <circle cx="50" cy="46" r="3" fill="#00F2FF" filter="url(#cyGlow)"/>
  <path d="M38 60 L50 60 L50 70 L62 70" stroke="#00F2FF" stroke-width="1" opacity="0.7" fill="none"/>
  <path d="M30 76 L70 76" stroke="#00F2FF" stroke-width="0.7" opacity="0.5" stroke-dasharray="3 2"/>
  <path d="M76 60 Q92 50 90 36" stroke="#15172B" stroke-width="7" fill="none" stroke-linecap="round"/>
  <path d="M76 60 Q92 50 90 36" stroke="#00F2FF" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
  <rect x="32" y="80" width="6" height="14" rx="3" fill="#15172B"/>
  <rect x="62" y="80" width="6" height="14" rx="3" fill="#15172B"/>
</svg>`;

// ---------- CASTLE GUARD (Medieval Uncommon) ----------
CUSTOM_SVG.medieval_castle_guard = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cgB" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#D8DCE4"/><stop offset="1" stop-color="#5A6276"/>
    </linearGradient>
  </defs>
  <path d="M50 12 Q40 4 35 0 Q40 6 42 10 Q44 7 46 8 Q48 5 50 8 Q52 5 54 8 Q56 7 58 10 Q60 6 65 0 Q60 4 50 12" fill="#C70039"/>
  <path d="M50 14 Q46 6 50 0 Q54 6 50 14" fill="#FF1500"/>
  <path d="M25 36 Q25 16 50 14 Q75 16 75 36 L75 76 Q75 89 50 92 Q25 89 25 76 Z" fill="url(#cgB)" stroke="#3A4258" stroke-width="2"/>
  <rect x="32" y="44" width="36" height="7" rx="2" fill="#1A1A2E"/>
  <line x1="50" y1="44" x2="50" y2="51" stroke="#A0A8B8" stroke-width="0.8"/>
  <line x1="40" y1="44" x2="40" y2="51" stroke="#7A8090" stroke-width="0.6"/>
  <line x1="60" y1="44" x2="60" y2="51" stroke="#7A8090" stroke-width="0.6"/>
  <circle cx="28" cy="58" r="1.8" fill="#3A4258"/>
  <circle cx="72" cy="58" r="1.8" fill="#3A4258"/>
  <circle cx="28" cy="76" r="1.8" fill="#3A4258"/>
  <circle cx="72" cy="76" r="1.8" fill="#3A4258"/>
  <ellipse cx="50" cy="86" rx="16" ry="4" fill="#3A4258"/>
  <ellipse cx="46" cy="22" rx="6" ry="3" fill="#F0F4F8" opacity="0.6"/>
</svg>`;

// ---------- STARFISH (Ocean Uncommon) ----------
CUSTOM_SVG.ocean_starfish = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="sfB" cx="0.5" cy="0.5">
      <stop offset="0" stop-color="#FFB6C1"/><stop offset="1" stop-color="#E91E63"/>
    </radialGradient>
  </defs>
  <path d="M50 6 L60 35 L92 38 L67 58 L75 92 L50 73 L25 92 L33 58 L8 38 L40 35 Z"
        fill="url(#sfB)" stroke="#AD1457" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="50" cy="20" r="1.8" fill="#FFF0F5"/>
  <circle cx="36" cy="42" r="1.8" fill="#FFF0F5"/>
  <circle cx="64" cy="42" r="1.8" fill="#FFF0F5"/>
  <circle cx="42" cy="68" r="1.8" fill="#FFF0F5"/>
  <circle cx="58" cy="68" r="1.8" fill="#FFF0F5"/>
  <circle cx="50" cy="50" r="3" fill="#FFF0F5" opacity="0.7"/>
  <circle cx="44" cy="49" r="3" fill="white"/>
  <circle cx="56" cy="49" r="3" fill="white"/>
  <circle cx="44.5" cy="49.5" r="1.5" fill="#1A1A2E"/>
  <circle cx="56.5" cy="49.5" r="1.5" fill="#1A1A2E"/>
  <path d="M44 57 Q50 62 56 57" stroke="#AD1457" stroke-width="1.6" fill="none" stroke-linecap="round"/>
</svg>`;

// ---------- BLIZZARD (Elemental Rare) ----------
CUSTOM_SVG.elemental_blizzard = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bzB" cx="0.5" cy="0.5">
      <stop offset="0" stop-color="white"/><stop offset="1" stop-color="#D0DCEC"/>
    </radialGradient>
  </defs>
  <ellipse cx="32" cy="38" rx="20" ry="16" fill="url(#bzB)"/>
  <ellipse cx="58" cy="32" rx="24" ry="20" fill="url(#bzB)"/>
  <ellipse cx="76" cy="42" rx="18" ry="14" fill="url(#bzB)"/>
  <ellipse cx="50" cy="46" rx="38" ry="14" fill="url(#bzB)"/>
  <circle cx="42" cy="36" r="2" fill="#1A1A2E"/>
  <circle cx="58" cy="34" r="2" fill="#1A1A2E"/>
  <path d="M44 42 Q50 47 56 42" stroke="#5070A0" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <g stroke="#3070C0" stroke-linecap="round">
    <g transform="translate(22,72)">
      <line x1="0" y1="-7" x2="0" y2="7" stroke-width="1.4"/>
      <line x1="-7" y1="0" x2="7" y2="0" stroke-width="1.4"/>
      <line x1="-5" y1="-5" x2="5" y2="5" stroke-width="1.4"/>
      <line x1="5" y1="-5" x2="-5" y2="5" stroke-width="1.4"/>
      <circle cx="0" cy="0" r="2" fill="#A0D8FF" stroke="none"/>
    </g>
    <g transform="translate(50,88)">
      <line x1="0" y1="-6" x2="0" y2="6" stroke-width="1.2"/>
      <line x1="-6" y1="0" x2="6" y2="0" stroke-width="1.2"/>
      <line x1="-4" y1="-4" x2="4" y2="4" stroke-width="1.2"/>
      <line x1="4" y1="-4" x2="-4" y2="4" stroke-width="1.2"/>
    </g>
    <g transform="translate(78,74)">
      <line x1="0" y1="-7" x2="0" y2="7" stroke-width="1.4"/>
      <line x1="-7" y1="0" x2="7" y2="0" stroke-width="1.4"/>
      <line x1="-5" y1="-5" x2="5" y2="5" stroke-width="1.4"/>
      <line x1="5" y1="-5" x2="-5" y2="5" stroke-width="1.4"/>
      <circle cx="0" cy="0" r="2" fill="#A0D8FF" stroke="none"/>
    </g>
    <g transform="translate(12,90)">
      <line x1="0" y1="-4" x2="0" y2="4" stroke-width="0.9"/>
      <line x1="-4" y1="0" x2="4" y2="0" stroke-width="0.9"/>
    </g>
    <g transform="translate(88,92)">
      <line x1="0" y1="-4" x2="0" y2="4" stroke-width="0.9"/>
      <line x1="-4" y1="0" x2="4" y2="0" stroke-width="0.9"/>
    </g>
  </g>
</svg>`;

// ---------- SEA TURTLE (Ocean Rare) ----------
CUSTOM_SVG.ocean_sea_turtle = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="stB" cx="0.5" cy="0.4">
      <stop offset="0" stop-color="#7BC894"/><stop offset="1" stop-color="#3D7E54"/>
    </radialGradient>
  </defs>
  <ellipse cx="20" cy="56" rx="9" ry="6" fill="#5DAF6D"/>
  <ellipse cx="80" cy="56" rx="9" ry="6" fill="#5DAF6D"/>
  <ellipse cx="28" cy="82" rx="8" ry="5" fill="#5DAF6D"/>
  <ellipse cx="72" cy="82" rx="8" ry="5" fill="#5DAF6D"/>
  <ellipse cx="50" cy="24" rx="14" ry="12" fill="#7BC894"/>
  <ellipse cx="50" cy="60" rx="34" ry="30" fill="url(#stB)"/>
  <g fill="#2E6240" stroke="#1A4A30" stroke-width="0.7">
    <polygon points="50,38 60,50 50,62 40,50"/>
    <polygon points="40,50 50,62 40,74 30,62"/>
    <polygon points="60,50 70,62 60,74 50,62"/>
    <polygon points="50,62 60,74 50,86 40,74"/>
    <polygon points="32,46 40,50 36,58 28,54"/>
    <polygon points="68,46 60,50 64,58 72,54"/>
  </g>
  <circle cx="45" cy="22" r="3" fill="white"/>
  <circle cx="55" cy="22" r="3" fill="white"/>
  <circle cx="45.5" cy="22.5" r="1.5" fill="#1A1A2E"/>
  <circle cx="55.5" cy="22.5" r="1.5" fill="#1A1A2E"/>
  <path d="M44 30 Q50 34 56 30" stroke="#1A4A30" stroke-width="1.3" fill="none" stroke-linecap="round"/>
</svg>`;

// ---------- EARTHQUAKE (Elemental Epic) ----------
CUSTOM_SVG.elemental_earthquake = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="48" width="100" height="52" fill="#8B5A2B"/>
  <rect x="0" y="48" width="100" height="6" fill="#5C3A1C"/>
  <path d="M38 56 L48 66 L40 72 L52 80 L44 88 L54 96" stroke="#1A0E08" stroke-width="3.5" fill="none" stroke-linejoin="round"/>
  <path d="M48 66 L62 70 L56 76" stroke="#1A0E08" stroke-width="2.5" fill="none"/>
  <path d="M52 80 L66 84" stroke="#1A0E08" stroke-width="2" fill="none"/>
  <path d="M40 72 L26 78" stroke="#1A0E08" stroke-width="2" fill="none"/>
  <polygon points="20,55 28,52 30,62 18,60" fill="#A37C5B"/>
  <polygon points="75,55 88,53 86,64 74,62" fill="#A37C5B"/>
  <polygon points="14,76 22,73 22,82 14,80" fill="#7B5A40"/>
  <polygon points="80,80 90,77 90,86 80,86" fill="#7B5A40"/>
  <circle cx="65" cy="70" r="2" fill="#4A3020"/>
  <circle cx="35" cy="84" r="2.5" fill="#4A3020"/>
  <path d="M10 32 Q22 22 35 32 Q48 42 60 32 Q72 22 85 32 Q90 36 95 33" stroke="#FFC107" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.9"/>
  <path d="M14 18 Q26 8 38 18 Q50 28 62 18 Q74 8 86 18" stroke="#FF5722" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.9"/>
  <path d="M50 36 L52 43 L60 45 L52 47 L50 54 L48 47 L40 45 L48 43 Z" fill="#FFD93D"/>
</svg>`;

// ---------- GINGERBREAD MAN (Candy Epic) ----------
CUSTOM_SVG.candy_gingerbread_man = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gbB" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#C8954E"/><stop offset="1" stop-color="#7C5126"/>
    </linearGradient>
  </defs>
  <circle cx="50" cy="22" r="14" fill="url(#gbB)"/>
  <path d="M38 35 L62 35 L65 64 L62 66 L62 88 L54 92 L52 72 L48 72 L46 92 L38 88 L38 66 L35 64 Z" fill="url(#gbB)"/>
  <path d="M19 44 L37 38 L37 50 L23 58 Z" fill="url(#gbB)"/>
  <path d="M81 44 L63 38 L63 50 L77 58 Z" fill="url(#gbB)"/>
  <path d="M38 36 Q50 38 62 36" stroke="white" stroke-width="2" stroke-dasharray="2.5,2" fill="none"/>
  <path d="M19 44 Q24 42 30 46" stroke="white" stroke-width="1.5" fill="none"/>
  <path d="M81 44 Q76 42 70 46" stroke="white" stroke-width="1.5" fill="none"/>
  <path d="M38 88 Q42 92 48 90" stroke="white" stroke-width="1.5" fill="none"/>
  <path d="M62 88 Q58 92 52 90" stroke="white" stroke-width="1.5" fill="none"/>
  <circle cx="44" cy="22" r="2.5" fill="#1A0E08"/>
  <circle cx="56" cy="22" r="2.5" fill="#1A0E08"/>
  <circle cx="44.5" cy="21" r="1" fill="white"/>
  <circle cx="56.5" cy="21" r="1" fill="white"/>
  <path d="M43 28 Q50 32 57 28" stroke="#1A0E08" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <circle cx="50" cy="52" r="3.2" fill="#FF1500"/>
  <circle cx="50" cy="64" r="3.2" fill="#00CED1"/>
  <polygon points="42,38 50,42 58,38 56,42 58,46 50,42 42,46 44,42" fill="#FF1500"/>
</svg>`;

// ---------- GRIFFIN (Medieval Epic) ----------
CUSTOM_SVG.medieval_griffin = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grB" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#D8A56F"/><stop offset="1" stop-color="#8B5A2B"/>
    </linearGradient>
  </defs>
  <ellipse cx="55" cy="65" rx="28" ry="18" fill="url(#grB)"/>
  <rect x="40" y="78" width="6" height="14" rx="3" fill="#8B5A2B"/>
  <rect x="68" y="78" width="6" height="14" rx="3" fill="#8B5A2B"/>
  <path d="M82 62 Q97 58 92 46" stroke="#8B5A2B" stroke-width="5" fill="none" stroke-linecap="round"/>
  <circle cx="92" cy="44" r="4.5" fill="#5C3A1C"/>
  <path d="M40 50 Q12 24 4 48 Q14 60 38 60 Z" fill="#F0E0C0"/>
  <path d="M40 50 Q22 35 14 50" stroke="#8B5A2B" stroke-width="1" fill="none"/>
  <path d="M14 50 L20 56 M22 44 L28 56 M30 40 L36 56" stroke="#8B5A2B" stroke-width="0.7" fill="none"/>
  <ellipse cx="32" cy="40" rx="14" ry="12" fill="#F8F0E0"/>
  <polygon points="14,38 32,32 22,46" fill="#FFA500"/>
  <polygon points="14,38 32,38 22,46" fill="#FFB627"/>
  <circle cx="35" cy="36" r="3" fill="white"/>
  <circle cx="35.5" cy="36.5" r="1.5" fill="#1A1A2E"/>
  <path d="M30 26 Q26 14 30 10" stroke="#8B5A2B" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <path d="M36 28 Q42 16 38 12" stroke="#8B5A2B" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <path d="M40 30 Q48 18 46 14" stroke="#8B5A2B" stroke-width="1.5" fill="none" stroke-linecap="round"/>
</svg>`;

// ---------- THE GUMMY KING (Candy Legendary) ----------
CUSTOM_SVG.candy_the_gummy_king = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="gkB" cx="0.5" cy="0.4">
      <stop offset="0" stop-color="#FF8FAB"/><stop offset="1" stop-color="#C2185B"/>
    </radialGradient>
  </defs>
  <ellipse cx="50" cy="60" rx="26" ry="28" fill="url(#gkB)"/>
  <circle cx="50" cy="38" r="21" fill="url(#gkB)"/>
  <circle cx="30" cy="26" r="8" fill="url(#gkB)"/>
  <circle cx="70" cy="26" r="8" fill="url(#gkB)"/>
  <circle cx="30" cy="26" r="4" fill="#E91E63"/>
  <circle cx="70" cy="26" r="4" fill="#E91E63"/>
  <ellipse cx="50" cy="48" rx="11" ry="8" fill="#FFB6C1"/>
  <ellipse cx="50" cy="42" rx="3.5" ry="3" fill="#1A1A2E"/>
  <circle cx="42" cy="35" r="3" fill="#1A1A2E"/>
  <circle cx="58" cy="35" r="3" fill="#1A1A2E"/>
  <circle cx="43" cy="34" r="1.2" fill="white"/>
  <circle cx="59" cy="34" r="1.2" fill="white"/>
  <path d="M44 50 Q50 55 56 50" stroke="#1A1A2E" stroke-width="1.4" fill="none" stroke-linecap="round"/>
  <ellipse cx="50" cy="66" rx="13" ry="14" fill="#FFB6C1" opacity="0.5"/>
  <polygon points="28,16 36,4 50,12 64,4 72,16 72,20 28,20 Z" fill="#FFD700" stroke="#996515" stroke-width="1.5"/>
  <circle cx="36" cy="6" r="2.2" fill="#FF1500"/>
  <circle cx="50" cy="10" r="2.8" fill="#00CED1"/>
  <circle cx="64" cy="6" r="2.2" fill="#FF1500"/>
  <rect x="28" y="18" width="44" height="4" fill="#996515"/>
  <ellipse cx="42" cy="34" rx="2" ry="2" fill="white" opacity="0.5"/>
  <ellipse cx="32" cy="55" rx="6" ry="3" fill="white" opacity="0.4"/>
</svg>`;

// ---------- CANDY CASTLE (Candy Mystical) ----------
CUSTOM_SVG.candy_candy_castle = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ccB" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#FFB6C1"/><stop offset="1" stop-color="#FF1493"/>
    </linearGradient>
  </defs>
  <rect x="20" y="48" width="60" height="44" fill="url(#ccB)"/>
  <rect x="20" y="48" width="60" height="4" fill="white"/>
  <rect x="20" y="64" width="60" height="4" fill="white"/>
  <rect x="20" y="80" width="60" height="4" fill="white"/>
  <rect x="10" y="38" width="14" height="54" fill="#FF69B4"/>
  <rect x="76" y="38" width="14" height="54" fill="#FF69B4"/>
  <rect x="10" y="46" width="14" height="3" fill="white"/>
  <rect x="10" y="62" width="14" height="3" fill="white"/>
  <rect x="10" y="78" width="14" height="3" fill="white"/>
  <rect x="76" y="46" width="14" height="3" fill="white"/>
  <rect x="76" y="62" width="14" height="3" fill="white"/>
  <rect x="76" y="78" width="14" height="3" fill="white"/>
  <rect x="40" y="28" width="20" height="64" fill="#C71585"/>
  <rect x="40" y="38" width="20" height="3" fill="white"/>
  <rect x="40" y="54" width="20" height="3" fill="white"/>
  <rect x="40" y="70" width="20" height="3" fill="white"/>
  <polygon points="10,38 17,16 24,38" fill="#FF1500"/>
  <polygon points="76,38 83,16 90,38" fill="#FF1500"/>
  <polygon points="40,28 50,6 60,28" fill="#FF1500"/>
  <circle cx="17" cy="14" r="4.5" fill="#FFD93D" stroke="#B8860B" stroke-width="1"/>
  <circle cx="17" cy="14" r="2" fill="#FF1500"/>
  <circle cx="83" cy="14" r="4.5" fill="#FFD93D" stroke="#B8860B" stroke-width="1"/>
  <circle cx="83" cy="14" r="2" fill="#FF1500"/>
  <circle cx="50" cy="4" r="5" fill="#00FA9A" stroke="#008B45" stroke-width="1"/>
  <circle cx="50" cy="4" r="2.5" fill="#FFD93D"/>
  <path d="M41 92 L41 76 Q41 66 50 66 Q59 66 59 76 L59 92 Z" fill="#5D3A1F"/>
  <circle cx="56" cy="78" r="1.5" fill="#FFD93D"/>
  <circle cx="30" cy="36" r="1" fill="#FFD93D"/>
  <circle cx="70" cy="40" r="1" fill="#FFD93D"/>
  <circle cx="25" cy="58" r="1" fill="#FFD93D"/>
  <circle cx="75" cy="60" r="1" fill="#FFD93D"/>
</svg>`;
