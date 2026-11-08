import React, { useId } from 'react';

export default function SeremetHeroButton({ 
  onClick, 
  text = 'Angebot anfordern', 
  className = '',
  size = 'default' 
}) {
  const rawId = useId();
  const clipId = `seremetBtnClip_${rawId.replace(/:/g, '_')}`;
  const isSm = size === 'sm';

  const containerClasses = isSm
    ? 'w-[265px] sm:w-[295px] md:w-[315px] h-[50px] sm:h-[54px]'
    : 'w-[325px] sm:w-[375px] md:w-[395px] h-[62px] sm:h-[66px]';

  const fgHeight = isSm
    ? 'h-[46px] sm:h-[50px]'
    : 'h-[58px] sm:h-[62px]';

  const textPadding = isSm
    ? 'pl-[54px] sm:pl-[62px] md:pl-[66px]'
    : 'pl-[68px] sm:pl-[76px] md:pl-[80px]';

  const textSize = isSm
    ? 'text-[12px] sm:text-[13px] md:text-[14px]'
    : 'text-[14px] sm:text-[15.5px] md:text-[16.5px]';

  const arrowSize = isSm
    ? 'w-5 h-5 sm:w-5.5 sm:h-5.5'
    : 'w-6 h-6 sm:w-7 sm:h-7';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative inline-flex items-center select-none focus:outline-none filter drop-shadow-[0_10px_20px_rgba(20,83,45,0.15)] active:drop-shadow-[0_4px_8px_rgba(20,83,45,0.25)] transition-all ${className}`}
    >
      <div className={`relative ${containerClasses} transition-transform duration-200 ease-out group-hover:-translate-y-0.5 active:translate-y-[3px]`}>
        
        {/* ============================================================== */}
        {/* UNIFIED SVG CHASSIS & NATIVE VECTOR MINI-SCENE (0 0 410 68)    */}
        {/* ============================================================== */}
        <svg 
          className="absolute inset-0 w-full h-full overflow-visible" 
          viewBox="0 0 410 68" 
          preserveAspectRatio="none"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Exakter ClipPath für das Facetten-Chassis mit eindeutiger ID */}
            <clipPath id={clipId}>
              <path d="M 22,2 L 372,2 L 402,20 L 402,44 L 372,62 L 22,62 A 20 20 0 0 1 2,42 L 2,22 A 20 20 0 0 1 22,2 Z" />
            </clipPath>
          </defs>

          {/* 1. 3D PHYSICAL EXTRUSION SOCKEL (Sichtbare 4.5px 3D-Tiefe unten) */}
          <path
            d="M 22,6.5 L 372,6.5 L 402,24.5 L 402,48.5 L 372,66.5 L 22,66.5 A 20 20 0 0 1 2,46.5 L 2,26.5 A 20 20 0 0 1 22,6.5 Z"
            className="fill-[#14532D] group-hover:fill-[#040F09] transition-colors duration-500"
          />

          {/* 2. BUTTON-FRONTFLÄCHE MIT DOPPEL-FACETTE */}
          <path
            d="M 22,2 L 372,2 L 402,20 L 402,44 L 372,62 L 22,62 A 20 20 0 0 1 2,42 L 2,22 A 20 20 0 0 1 22,2 Z"
            className="fill-white group-hover:fill-[#081D11] stroke-[#166534] group-hover:stroke-[#22C55E] transition-all duration-500"
            strokeWidth="2.0"
            strokeLinejoin="round"
          />

          {/* 3. 3D LICHTKANTE (Highlight oben) */}
          <path
            d="M 22,3.5 L 370,3.5 L 399,20.5"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="group-hover:opacity-20 transition-opacity duration-500"
          />

          {/* ============================================================ */}
          {/* 4. INNENLEBEN (SAUBER GECLIPPED IM CHASSIS)                   */}
          {/* ============================================================ */}
          <g clipPath={`url(#${clipId})`}>
            
            {/* Dezente Glanz-Sterne bei Erledigt / Hover */}
            <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
              <circle cx="50" cy="18" r="1.2" fill="#FACC15" opacity="0.8" />
              <circle cx="150" cy="12" r="1.1" fill="#FFFFFF" opacity="0.7" />
              <circle cx="265" cy="14" r="1.4" fill="#FACC15" opacity="0.8" />
              <circle cx="310" cy="14" r="1.2" fill="#86EFAC" opacity="0.8" />
              <circle cx="395" cy="12" r="1.3" fill="#FFFFFF" opacity="0.75" />
            </g>

            {/* ------------------------------------------------------------ */}
            {/* DURCHGEZOGENE GRASLINIE AM UNTEREN RAND                      */}
            {/* (Liegt unter y=48, Schrift liegt bei y=18-40 -> 100% lesbar!) */}
            {/* ------------------------------------------------------------ */}
            
            {/* A) VORHER: Wild wachsende Graslinie entlang des gesamten Bodens */}
            <g className="transition-all duration-500 ease-out group-hover:opacity-0 origin-bottom">
              {/* Unebener Wiesenboden unten */}
              <path d="M 0,57 Q 65,54 130,57 T 260,55 T 410,57 L 410,68 L 0,68 Z" fill="#86EFAC" opacity="0.3" />

              {/* Durchgezogene Grashalme unten unter der Schrift (y: 48-57) */}
              <g stroke="#15803D" strokeWidth="1.5" strokeLinecap="round">
                <path d="M 80,57 C 82,53 85,50 88,47" />
                <path d="M 84,57 C 83,53 80,51 77,48" />
                <path d="M 100,57 C 102,53 105,50 110,48" />
                <path d="M 114,57 C 113,53 110,50 106,47" />
                <path d="M 128,57 C 130,53 133,51 138,48" />
                <path d="M 142,57 C 141,53 138,50 134,47" />
                <path d="M 156,57 C 158,53 161,51 166,48" />
                <path d="M 170,57 C 169,53 166,50 162,47" />
                <path d="M 184,57 C 186,53 190,51 195,48" />
                <path d="M 198,57 C 197,53 194,50 190,47" />
                <path d="M 212,57 C 214,53 218,51 223,48" />
                <path d="M 226,57 C 225,53 222,50 218,47" />
                <path d="M 240,57 C 242,53 246,51 251,48" />
                <path d="M 254,57 C 253,53 250,50 246,47" />
              </g>

              {/* Helle Frische-Spitzen unten */}
              <g stroke="#4ADE80" strokeWidth="1.3" strokeLinecap="round">
                <path d="M 92,57 C 93,53 96,51 100,49" />
                <path d="M 120,57 C 121,53 124,51 128,49" />
                <path d="M 148,57 C 149,53 152,51 156,49" />
                <path d="M 176,57 C 177,53 180,51 184,49" />
                <path d="M 204,57 C 205,53 208,51 212,49" />
                <path d="M 232,57 C 233,53 236,51 240,49" />
              </g>
            </g>

            {/* B) NACHHER (Hover): Perfekt geschnittene englische Rasenkante */}
            <g className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out origin-bottom">
              <rect x="0" y="54" width="410" height="14" fill="#15803D" />
              <rect x="0" y="54" width="55" height="14" fill="#166534" opacity="0.45" />
              <rect x="110" y="54" width="55" height="14" fill="#166534" opacity="0.45" />
              <rect x="220" y="54" width="55" height="14" fill="#166534" opacity="0.45" />
              <rect x="330" y="54" width="55" height="14" fill="#166534" opacity="0.45" />

              {/* Frühlingsblüten entlang des Rasenrandes */}
              <circle cx="40" cy="52" r="1.8" fill="#FACC15" />
              <circle cx="85" cy="51" r="1.6" fill="#FFFFFF" />
              <circle cx="145" cy="52" r="1.8" fill="#F472B6" />
              <circle cx="210" cy="51" r="1.6" fill="#FACC15" />
              <circle cx="270" cy="52" r="1.8" fill="#FFFFFF" />
            </g>

            {/* ============================================================ */}
            {/* LINKE SEITE: KARTONS VOR MOUSEOVER                           */}
            {/* ============================================================ */}
            <g className="transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-75 group-hover:-translate-x-3 origin-bottom">
              
              {/* Karton 4: Dunkler Hintergrundkarton ganz links */}
              <g transform="translate(8, 22)">
                <rect x="0" y="0" width="18" height="35" rx="1.5" fill="#92400E" stroke="#78350F" strokeWidth="1.2" />
                <line x1="0" y1="7" x2="18" y2="7" stroke="#78350F" strokeWidth="1" />
                <rect x="5" y="12" width="6" height="3" rx="1.5" fill="#78350F" />
              </g>

              {/* Karton 1: Großer Hauptkarton unten */}
              <g transform="translate(22, 28)">
                <rect x="0" y="0" width="32" height="29" rx="2" fill="#D97706" stroke="#92400E" strokeWidth="1.3" />
                <path d="M 18,0 L 32,0 L 32,29 L 18,29 Z" fill="#B45309" opacity="0.35" />
                <line x1="0" y1="11" x2="32" y2="11" stroke="#FEF3C7" strokeWidth="2.5" />
                <rect x="20" y="14" width="7" height="3.5" rx="1.75" fill="#78350F" />
                <rect x="4" y="15" width="10" height="7" rx="1" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="0.8" />
                <line x1="6" y1="17.5" x2="12" y2="17.5" stroke="#4B5563" strokeWidth="0.9" />
              </g>

              {/* Karton 2: Schräg oben auf Karton 1 gestapelt mit offenen Klappen */}
              <g transform="translate(25, 8) rotate(-6)">
                <polygon points="0,7 4,0 12,4 8,7" fill="#FBBF24" stroke="#92400E" strokeWidth="1.1" />
                <polygon points="12,7 17,1 25,3 21,7" fill="#F59E0B" stroke="#92400E" strokeWidth="1.1" />
                <path d="M 5,6 Q 11,2 18,6" fill="#FEF3C7" stroke="#D1D5DB" strokeWidth="0.9" />
                <rect x="0" y="7" width="25" height="17" rx="1.5" fill="#F59E0B" stroke="#92400E" strokeWidth="1.2" />
                <path d="M 12,7 L 25,7 L 25,24 L 12,24 Z" fill="#D97706" opacity="0.3" />
                <line x1="5" y1="12" x2="18" y2="12" stroke="#FEF3C7" strokeWidth="2" strokeDasharray="3 2" />
              </g>

              {/* Karton 3: Mittlerer Karton rechts daneben mit Umzugspfeilen (↑↑) */}
              <g transform="translate(52, 34)">
                <rect x="0" y="0" width="23" height="23" rx="1.6" fill="#D97706" stroke="#92400E" strokeWidth="1.2" />
                <path d="M 12,0 L 23,0 L 23,23 L 12,23 Z" fill="#B45309" opacity="0.35" />
                <line x1="0" y1="4.5" x2="23" y2="4.5" stroke="#FEF3C7" strokeWidth="2" />
                <rect x="13" y="10" width="5.5" height="2.8" rx="1.4" fill="#78350F" />
                <g stroke="#78350F" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="17" x2="4" y2="12" />
                  <polyline points="2.5,13.5 4,12 5.5,13.5" />
                  <line x1="8" y1="17" x2="8" y2="12" />
                  <polyline points="6.5,13.5 8,12 9.5,13.5" />
                </g>
              </g>

              {/* Grasbüschel vor den Kartons links */}
              <g stroke="#22C55E" strokeWidth="1.7" strokeLinecap="round">
                <path d="M 4,57 C 3,48 1,40 0,33" />
                <path d="M 10,57 C 12,49 16,42 21,37" />
                <path d="M 19,57 C 18,48 15,40 12,33" />
                <path d="M 48,57 C 47,47 44,38 39,31" />
                <path d="M 54,57 C 56,48 60,40 65,33" />
                <path d="M 72,57 C 74,48 78,42 83,37" />
              </g>
            </g>

            {/* ============================================================ */}
            {/* LINKE SEITE BEI MOUSEOVER:                                   */}
            {/* DREIECK-BAUM MIT BRAUNEM STAMM + DOPPELKREIS-BUSCH           */}
            {/* ============================================================ */}
            <g className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out origin-bottom transform translate-y-2 group-hover:translate-y-0">
              
              {/* 1. BAUM ALS DREIECK MIT KLEINEM BRAUNEM STAMM */}
              <g transform="translate(8, 0)">
                {/* Kleiner brauner Stamm */}
                <rect x="20" y="44" width="5.5" height="11" rx="1" fill="#78350F" stroke="#522507" strokeWidth="0.8" />
                
                {/* Dreieckige Baumkrone (geometrisch & modern strukturiert) */}
                <polygon points="22.75,10 8,44 37.5,44" fill="#15803D" stroke="#14532D" strokeWidth="1.3" />
                {/* Helles Lichtfeld auf der Krone */}
                <polygon points="22.75,10 13,32 32.5,32" fill="#22C55E" opacity="0.85" />
                <polygon points="22.75,10 17,21 28.5,21" fill="#4ADE80" opacity="0.6" />
                
                {/* Feines Glanz-Sternchen am Baum */}
                <circle cx="22.75" cy="9" r="1.3" fill="#FDE047" />
              </g>

              {/* 2. BUSCH LINKS NEBEN DEM BAUM (Doppelkreis-Busch) */}
              <g transform="translate(42, 0)">
                {/* Kreis 1 */}
                <circle cx="10" cy="45" r="7.5" fill="#15803D" stroke="#14532D" strokeWidth="1.1" />
                {/* Kreis 2 */}
                <circle cx="19" cy="43" r="9.5" fill="#22C55E" stroke="#15803D" strokeWidth="1.2" />
                {/* Highlight */}
                <circle cx="17" cy="40" r="6.5" fill="#4ADE80" opacity="0.6" />
                {/* Frische kleine Blüte */}
                <circle cx="15" cy="41" r="1.6" fill="#FACC15" />
              </g>
            </g>

            {/* ============================================================ */}
            {/* RECHTE SEITE: WILDES GRAS VOR MOUSEOVER                      */}
            {/* ============================================================ */}
            <g className="transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-90 group-hover:translate-y-4 origin-bottom">
              
              {/* Hohe Hintergrund-Halme rechts */}
              <g stroke="#14532D" strokeWidth="1.9" strokeLinecap="round">
                <path d="M 310,57 C 312,39 316,26 322,16" />
                <path d="M 318,57 C 316,42 312,30 306,19" />
                <path d="M 328,57 C 330,37 335,24 342,14" />
                <path d="M 338,57 C 340,42 344,30 351,19" />
                <path d="M 352,57 C 354,38 360,26 366,14" />
                <path d="M 364,57 C 366,42 370,31 377,19" />
                <path d="M 374,57 C 372,42 367,30 360,19" />
                <path d="M 384,57 C 386,42 390,31 395,21" />
                <path d="M 391,57 C 389,44 384,31 377,23" />
              </g>

              {/* Wilde Halme mit Samenköpfen / Dolden */}
              <g stroke="#166534" strokeWidth="1.5" strokeLinecap="round">
                <path d="M 323,57 C 325,38 328,23 334,10" />
                <circle cx="334" cy="10" r="1.4" fill="#166534" />
                <circle cx="332" cy="8" r="1.1" fill="#15803D" />
                <circle cx="336" cy="8" r="1.1" fill="#15803D" />

                <path d="M 380,57 C 378,38 375,24 370,10" />
                <circle cx="370" cy="10" r="1.4" fill="#166534" />
                <circle cx="368" cy="8" r="1.1" fill="#15803D" />
                <circle cx="372" cy="8" r="1.1" fill="#15803D" />
              </g>

              {/* Mittlere Halme */}
              <g stroke="#15803D" strokeWidth="1.8" strokeLinecap="round">
                <path d="M 305,57 C 307,44 311,33 316,25" />
                <path d="M 313,57 C 312,46 309,35 304,28" />
                <path d="M 333,57 C 335,44 340,33 347,25" />
                <path d="M 345,57 C 344,46 341,35 336,28" />
                <path d="M 358,57 C 360,44 365,33 372,25" />
                <path d="M 369,57 C 368,46 364,35 359,28" />
                <path d="M 387,57 C 389,46 392,35 396,28" />
              </g>

              {/* Frische hellgrüne Grasspitzen */}
              <g stroke="#4ADE80" strokeWidth="1.6" strokeLinecap="round">
                <path d="M 320,57 C 322,47 325,39 330,32" />
                <path d="M 342,57 C 344,48 348,40 353,33" />
                <path d="M 354,57 C 353,48 350,40 345,33" />
                <path d="M 378,57 C 380,48 383,42 388,37" />
              </g>
            </g>

            {/* ============================================================ */}
            {/* RECHTE SEITE BEI MOUSEOVER:                                  */}
            {/* DER WEISSE SEREMET TRANSPORTER MIT FIRMENLOGO!              */}
            {/* ============================================================ */}
            <g className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out origin-right transform translate-x-3 group-hover:translate-x-0">
              
              {/* DER WEISSE SEREMET TRANSPORTER (HÖHER & MIT AUTHENTISCHER GERADER FRONT - KEINE SPITZE MOTORHAUBE) */}
              <g transform="translate(315, 21)">
                {/* Bodenschatten auf dem Rasen */}
                <ellipse cx="38" cy="33.5" rx="36" ry="1.8" fill="#042F1A" opacity="0.8" />

                {/* Transporter-Karosserie: Höher gebaut, aufrechte stumpfe Front, sauber gerundet */}
                <path
                  d="M 3,33 Q 0,32 0,27 L 0,21 Q 0,19.5 2,19 L 12,17.5 L 22,3 Q 24,1.5 28,1.5 L 72,1.5 Q 75,1.5 75,4.5 L 75,31 Q 75,33 73,33 L 67,33 A 7 7 0 0 0 53,33 L 27,33 A 7 7 0 0 0 13,33 L 3,33 Z"
                  fill="#FFFFFF"
                  stroke="#334155"
                  strokeWidth="1.15"
                  strokeLinejoin="round"
                />

                {/* Getönte Fahrerkabinen-Scheibe */}
                <path d="M 13.5,16.5 L 21.5,4.5 L 30.5,4.5 L 30.5,16.5 Z" fill="#0F172A" />
                <line x1="16.5" y1="15" x2="23.5" y2="5.5" stroke="rgba(255,255,255,0.65)" strokeWidth="0.85" strokeLinecap="round" />

                {/* Fahrer-Außenspiegel */}
                <rect x="10.5" y="15" width="2.8" height="4" rx="1" fill="#1E293B" />

                {/* Offizielles Seremet-Logo auf der Seitenwand */}
                <image 
                  href="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Sermet-Dienstleistungen/seremet-logo.svg" 
                  x="32" 
                  y="2" 
                  width="41" 
                  height="27" 
                  preserveAspectRatio="xMidYMid meet" 
                />

                {/* Vorderrad */}
                <circle cx="20" cy="33" r="5.6" fill="#0F172A" />
                <circle cx="20" cy="33" r="3.2" fill="#CBD5E1" />
                <circle cx="20" cy="33" r="1.3" fill="#0F172A" />

                {/* Hinterrad */}
                <circle cx="60" cy="33" r="5.6" fill="#0F172A" />
                <circle cx="60" cy="33" r="3.2" fill="#CBD5E1" />
                <circle cx="60" cy="33" r="1.3" fill="#0F172A" />

                {/* Scheinwerfer an der aufrechten Front */}
                <polygon points="0.5,19.5 3.5,19 3,22.5 0.5,22.5" fill="#FDE047" />

                {/* Rückleuchte */}
                <rect x="73.5" y="7" width="1.4" height="7" rx="0.5" fill="#EF4444" />
              </g>

              {/* Glänzende Funkel-Sterne (Sparkles) über dem Transporter */}
              <g transform="translate(330, 14)">
                <path d="M 4,0 L 5,3 L 8,4 L 5,5 L 4,8 L 3,5 L 0,4 L 3,3 Z" fill="#FDE047" />
              </g>
              <g transform="translate(382, 12)">
                <path d="M 3,0 L 3.8,2.2 L 6,3 L 3.8,3.8 L 3,6 L 2.2,3.8 L 0,3 L 2.2,2.2 Z" fill="#FFFFFF" opacity="0.9" />
              </g>
              <g transform="translate(398, 18)">
                <path d="M 2.5,0 L 3.2,1.8 L 5,2.5 L 3.2,3.2 L 2.5,5 L 1.8,3.2 L 0,2.5 L 1.8,1.8 Z" fill="#86EFAC" />
              </g>

            </g>

          </g>
        </svg>

        {/* ============================================================== */}
        {/* 5. VORDERGRUND: TYPOGRAFIE & CTA PFEIL                         */}
        {/* ============================================================== */}
        {/*
          Optimierte Positionierung & Größe:
          - Leicht kompakter für perfekte Proportionen
          - Links: Kartons (w=~75px)
          - Mitte: Typografie "Angebot anfordern" + Arrow Circle
          - Vertikal leicht erhöht für 100% klare Lesbarkeit über der Graslinie!
        */}
        <div className={`relative z-30 flex items-center justify-between ${fgHeight} px-3 sm:px-5 pointer-events-none`}>
          <div className={`flex items-center gap-2 sm:gap-2.5 ${textPadding} pb-0.5`}>
            <span className={`font-extrabold ${textSize} tracking-tight text-neutral-900 group-hover:text-white transition-colors duration-500 whitespace-nowrap drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] group-hover:drop-shadow-none`}>
              {text}
            </span>

            {/* Action Pfeil-Kreis mit Bewegung */}
            <div className={`flex items-center justify-center ${arrowSize} rounded-full bg-emerald-600 group-hover:bg-emerald-500 text-white group-hover:translate-x-1.5 group-hover:scale-110 transition-all duration-300 flex-shrink-0 shadow-md`}>
              <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </button>
  );
}
