/* ===========================================================
   BUDDYNET — custom SVG buddy art
   Keyed by buddy ID (pack-id_name-snake-case).
   Used by buddyImg() in game.js when an emoji isn't a good match.
   =========================================================== */

const CUSTOM_SVG = {};

// ---------- PHOENIX (Medieval Epic) ----------
CUSTOM_SVG.medieval_phoenix = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="phB" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#FFE94E"/><stop offset="1" stop-color="#FF3000"/>
    </linearGradient>
  </defs>
  <path d="M50 58 Q22 88 30 99 L50 84 L70 99 Q78 88 50 58Z" fill="#A50027"/>
  <path d="M50 62 Q36 80 50 92 Q64 80 50 62Z" fill="#FF5C0A"/>
  <ellipse cx="50" cy="50" rx="22" ry="25" fill="url(#phB)"/>
  <path d="M28 44 Q4 32 8 58 Q22 50 30 49Z" fill="#FF3000"/>
  <path d="M72 44 Q96 32 92 58 Q78 50 70 49Z" fill="#FF3000"/>
  <circle cx="50" cy="27" r="13" fill="url(#phB)"/>
  <polygon points="44,25 56,25 50,14" fill="#FF9800"/>
  <circle cx="46" cy="26" r="3" fill="white"/>
  <circle cx="46.5" cy="26.5" r="1.5" fill="#1a1a2e"/>
  <path d="M50 14 Q44 6 50 0 Q56 6 50 14" fill="#FFE94E"/>
  <path d="M50 14 Q48 8 53 4 Q54 9 50 14" fill="#FF6B35"/>
</svg>`;

// ---------- THE PHOENIX OVERLORD (Starter Mystical) ----------
CUSTOM_SVG.starter_the_phoenix_overlord = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="poB" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#FFF59A"/><stop offset="1" stop-color="#FF1500"/>
    </linearGradient>
  </defs>
  <path d="M50 58 Q18 92 28 100 L50 84 L72 100 Q82 92 50 58Z" fill="#7A0019"/>
  <path d="M50 62 Q32 84 50 96 Q68 84 50 62Z" fill="#FF4500"/>
  <ellipse cx="50" cy="50" rx="25" ry="28" fill="url(#poB)"/>
  <path d="M25 42 Q0 26 4 60 Q20 50 27 48Z" fill="#FF2500"/>
  <path d="M75 42 Q100 26 96 60 Q80 50 73 48Z" fill="#FF2500"/>
  <circle cx="50" cy="27" r="14" fill="url(#poB)"/>
  <polygon points="44,25 56,25 50,12" fill="#FFAA00"/>
  <circle cx="46" cy="25" r="3" fill="white"/>
  <circle cx="46.5" cy="25.5" r="1.5" fill="#1a1a2e"/>
  <polygon points="38,12 44,2 50,8 56,2 62,12" fill="#FFD700" stroke="#B8860B" stroke-width="1.2"/>
  <circle cx="50" cy="6" r="2.5" fill="#FF1500"/>
</svg>`;

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
