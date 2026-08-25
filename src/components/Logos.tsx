import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

export function DsnluLogo({ className = "w-12 h-12", ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Damodaram Sanjivayya National Law University Logo"
      {...props}
    >
      <defs>
        {/* Curved Path for Top Text */}
        <path
          id="dsnlu-top-path"
          d="M 38 150 A 112 112 0 1 1 262 150"
          fill="none"
        />
        {/* Curved Path for Bottom Text */}
        <path
          id="dsnlu-bottom-path"
          d="M 252 158 A 105 105 0 0 1 48 158"
          fill="none"
        />
        <filter id="shadow-pot" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Outer Glow / Edge */}
      <circle cx="150" cy="150" r="148" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
      
      {/* Blue Outer Ring */}
      <circle cx="150" cy="150" r="144" fill="#3b82f6" />
      <circle cx="150" cy="150" r="144" fill="#468fe4" />
      <circle cx="150" cy="150" r="142" stroke="#ffffff" strokeWidth="2" />
      <circle cx="150" cy="150" r="102" stroke="#ffffff" strokeWidth="2.5" />

      {/* Inner Green Circle */}
      <circle cx="150" cy="150" r="100" fill="#75cf69" />

      {/* Circular Top Text */}
      <text
        fill="#ffffff"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="12.5"
        fontWeight="800"
        letterSpacing="0.06em"
      >
        <textPath href="#dsnlu-top-path" startOffset="50%" textAnchor="middle">
          DAMODARAM SANJIVAYYA NATIONAL LAW UNIVERSITY
        </textPath>
      </text>

      {/* Bottom Text and Stars */}
      <text
        fill="#ffffff"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="15"
        fontWeight="900"
        letterSpacing="0.12em"
      >
        <textPath href="#dsnlu-bottom-path" startOffset="50%" textAnchor="middle">
          VISAKHAPATNAM
        </textPath>
      </text>

      {/* Flanking Stars */}
      {/* Left Star */}
      <polygon
        points="65,228 67.5,234 74,234 68.5,238 70.5,244 65,240 59.5,244 61.5,238 56,234 62.5,234"
        fill="#facc15"
        stroke="#ca8a04"
        strokeWidth="0.5"
      />
      {/* Right Star */}
      <polygon
        points="235,228 237.5,234 244,234 238.5,238 240.5,244 235,240 229.5,244 231.5,238 226,234 232.5,234"
        fill="#facc15"
        stroke="#ca8a04"
        strokeWidth="0.5"
      />

      {/* Light Radiations behind Lady Justice */}
      <g stroke="#ffffff" strokeWidth="1.2" opacity="0.9">
        <line x1="150" y1="100" x2="118" y2="70" />
        <line x1="150" y1="100" x2="128" y2="62" />
        <line x1="150" y1="100" x2="140" y2="56" />
        <line x1="150" y1="100" x2="150" y2="54" />
        <line x1="150" y1="100" x2="160" y2="56" />
        <line x1="150" y1="100" x2="172" y2="62" />
        <line x1="150" y1="100" x2="182" y2="70" />
        <line x1="150" y1="100" x2="108" y2="88" />
        <line x1="150" y1="100" x2="192" y2="88" />
        <line x1="150" y1="100" x2="114" y2="108" />
        <line x1="150" y1="100" x2="186" y2="108" />
      </g>

      {/* Laurel Leaves (Left Branch) */}
      <g fill="#2e7d32" stroke="#1b5e20" strokeWidth="0.5">
        <path d="M 68 180 Q 72 170 80 172 Q 78 182 68 180 Z" />
        <path d="M 66 160 Q 72 152 82 156 Q 78 166 66 160 Z" />
        <path d="M 69 140 Q 78 132 86 138 Q 80 148 69 140 Z" />
        <path d="M 75 120 Q 86 114 92 122 Q 84 130 75 120 Z" />
        <path d="M 85 104 Q 96 100 100 110 Q 90 116 85 104 Z" />
        <path d="M 98 90 Q 110 88 112 100 Q 102 104 98 90 Z" />
        {/* Connecting Stem */}
        <path d="M 65 190 Q 64 140 106 88" fill="none" stroke="#2e7d32" strokeWidth="1.5" />
      </g>

      {/* Laurel Leaves (Right Branch) */}
      <g fill="#2e7d32" stroke="#1b5e20" strokeWidth="0.5">
        <path d="M 232 180 Q 228 170 220 172 Q 222 182 232 180 Z" />
        <path d="M 234 160 Q 228 152 218 156 Q 222 166 234 160 Z" />
        <path d="M 231 140 Q 222 132 214 138 Q 220 148 231 140 Z" />
        <path d="M 225 120 Q 214 114 208 122 Q 216 130 225 120 Z" />
        <path d="M 215 104 Q 204 100 200 110 Q 210 116 215 104 Z" />
        <path d="M 202 90 Q 190 88 188 100 Q 198 104 202 90 Z" />
        {/* Connecting Stem */}
        <path d="M 235 190 Q 236 140 194 88" fill="none" stroke="#2e7d32" strokeWidth="1.5" />
      </g>

      {/* Lady Justice */}
      <g fill="#ffffff" stroke="#334155" strokeWidth="0.8">
        {/* Crown / Headdress */}
        <path d="M 144 65 L 146 58 L 150 62 L 154 58 L 156 65 Z" fill="#ffffff" />
        {/* Head and Blindfold */}
        <circle cx="150" cy="72" r="7" fill="#ffffff" />
        <path d="M 143 71 H 157 V 74 H 143 Z" fill="#334155" />
        {/* Neck */}
        <path d="M 147 79 H 153 V 85 H 147 Z" fill="#ffffff" />
        {/* Robed Torso */}
        <path d="M 138 88 Q 150 84 162 88 L 168 145 H 132 Z" fill="#ffffff" />
        {/* Drapery Fold Lines */}
        <path d="M 144 88 Q 146 115 142 145" fill="none" stroke="#64748b" strokeWidth="0.8" />
        <path d="M 152 86 Q 150 115 152 145" fill="none" stroke="#64748b" strokeWidth="0.8" />
        <path d="M 158 88 Q 156 115 160 145" fill="none" stroke="#64748b" strokeWidth="0.8" />

        {/* Left Arm (holding sword or raised) */}
        <path d="M 138 88 L 112 118 L 118 122 L 142 96 Z" fill="#ffffff" />
        <line x1="112" y1="105" x2="108" y2="155" stroke="#475569" strokeWidth="2" />
        <line x1="102" y1="112" x2="118" y2="112" stroke="#475569" strokeWidth="1.5" />

        {/* Right Arm (Holding Balance Scales) */}
        <path d="M 162 88 L 188 84 L 190 90 L 164 94 Z" fill="#ffffff" />
        {/* Scale Beam */}
        <line x1="172" y1="84" x2="208" y2="86" stroke="#1e293b" strokeWidth="1.8" />
        <circle cx="190" cy="85" r="2.5" fill="#1e293b" />
        {/* Left Scale Pan */}
        <line x1="174" y1="84" x2="168" y2="108" stroke="#475569" strokeWidth="0.8" />
        <line x1="174" y1="84" x2="178" y2="108" stroke="#475569" strokeWidth="0.8" />
        <path d="M 166 108 Q 173 115 180 108 Z" fill="#f8fafc" stroke="#1e293b" strokeWidth="0.8" />
        {/* Right Scale Pan */}
        <line x1="206" y1="86" x2="200" y2="110" stroke="#475569" strokeWidth="0.8" />
        <line x1="206" y1="86" x2="210" y2="110" stroke="#475569" strokeWidth="0.8" />
        <path d="M 198 110 Q 205 117 212 110 Z" fill="#f8fafc" stroke="#1e293b" strokeWidth="0.8" />
      </g>

      {/* Open Book */}
      <g fill="#ffffff" stroke="#334155" strokeWidth="0.8">
        <path d="M 150 148 Q 120 140 94 148 L 94 175 Q 122 166 150 174 Z" fill="#f8fafc" />
        <path d="M 150 148 Q 180 140 206 148 L 206 175 Q 178 166 150 174 Z" fill="#f8fafc" />
        <line x1="150" y1="148" x2="150" y2="175" stroke="#1e293b" strokeWidth="1.5" />
        {/* Page text texture lines */}
        <line x1="102" y1="154" x2="142" y2="151" stroke="#94a3b8" strokeWidth="0.7" />
        <line x1="102" y1="160" x2="142" y2="157" stroke="#94a3b8" strokeWidth="0.7" />
        <line x1="102" y1="166" x2="142" y2="163" stroke="#94a3b8" strokeWidth="0.7" />
        <line x1="158" y1="151" x2="198" y2="154" stroke="#94a3b8" strokeWidth="0.7" />
        <line x1="158" y1="157" x2="198" y2="160" stroke="#94a3b8" strokeWidth="0.7" />
        <line x1="158" y1="163" x2="198" y2="166" stroke="#94a3b8" strokeWidth="0.7" />
      </g>

      {/* Sacred Kalash with Mango Leaves & Flame */}
      <g filter="url(#shadow-pot)">
        {/* Mango Leaves on Pot Rim */}
        <path d="M 150 142 Q 138 132 132 136 Q 140 144 150 142 Z" fill="#22c55e" stroke="#15803d" strokeWidth="0.6" />
        <path d="M 150 142 Q 162 132 168 136 Q 160 144 150 142 Z" fill="#22c55e" stroke="#15803d" strokeWidth="0.6" />
        <path d="M 150 140 Q 144 126 142 132 Q 148 142 150 140 Z" fill="#16a34a" stroke="#15803d" strokeWidth="0.6" />
        <path d="M 150 140 Q 156 126 158 132 Q 152 142 150 140 Z" fill="#16a34a" stroke="#15803d" strokeWidth="0.6" />
        <path d="M 150 138 Q 150 120 150 120 Q 153 130 150 138 Z" fill="#15803d" />

        {/* Earthen/Golden Kalash Pot */}
        <ellipse cx="150" cy="144" rx="14" ry="4" fill="#ea580c" stroke="#9a3412" strokeWidth="0.8" />
        <path
          d="M 137 145 C 130 155 128 172 138 180 C 145 184 155 184 162 180 C 172 172 170 155 163 145 Z"
          fill="#f97316"
          stroke="#9a3412"
          strokeWidth="0.8"
        />
        {/* Pot Base */}
        <path d="M 142 181 H 158 V 185 H 142 Z" fill="#c2410c" />
        {/* Traditional Pot Pattern */}
        <circle cx="150" cy="164" r="5" fill="#fef08a" stroke="#b45309" strokeWidth="0.6" />
        <path d="M 138 160 Q 150 170 162 160" fill="none" stroke="#fef08a" strokeWidth="1.2" />

        {/* Sacred Flame Emerging from Pot */}
        {/* Outer Red Flame */}
        <path
          d="M 150 140 C 142 128 140 114 150 96 C 158 112 160 126 150 140 Z"
          fill="#ef4444"
        />
        {/* Middle Orange/Yellow Flame */}
        <path
          d="M 150 138 C 144 126 144 116 150 102 C 155 114 156 126 150 138 Z"
          fill="#f59e0b"
        />
        {/* Inner Bright Yellow Flame */}
        <path
          d="M 150 136 C 146 128 146 120 150 110 C 153 120 154 128 150 136 Z"
          fill="#fef08a"
        />
      </g>

      {/* Ribbon Banner at Bottom with Sanskrit Motto */}
      <g>
        {/* Ribbon Ends */}
        <path d="M 82 208 L 74 216 L 82 224 L 92 216 Z" fill="#1b5e20" />
        <path d="M 218 208 L 226 216 L 218 224 L 208 216 Z" fill="#1b5e20" />
        {/* Main Ribbon Body */}
        <path
          d="M 86 214 Q 150 226 214 214 L 214 202 Q 150 214 86 202 Z"
          fill="#1e6b23"
          stroke="#14532d"
          strokeWidth="0.8"
        />
        {/* Motto Text */}
        <text
          x="150"
          y="214"
          fill="#ffffff"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="serif, 'Noto Sans Devanagari', 'Mangal'"
          fontSize="10"
          fontWeight="bold"
          letterSpacing="0.05em"
        >
          यतो धर्मस्ततो जयः
        </text>
      </g>
    </svg>
  );
}

export function CiladLogo({ className = "w-12 h-12", ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Centre for International Law and Allied Disciplines Logo"
      {...props}
    >
      {/* Outer Solid Black Disk */}
      <circle cx="150" cy="150" r="148" fill="#000000" />

      {/* Inner White Ring */}
      <circle cx="150" cy="150" r="138" stroke="#ffffff" strokeWidth="4" />

      {/* Globe */}
      <g stroke="#ffffff" strokeWidth="4" fill="none">
        <circle cx="160" cy="135" r="48" />
        {/* Latitude and Longitude Grid */}
        <ellipse cx="160" cy="135" rx="48" ry="18" strokeDasharray="3 2" strokeWidth="2" opacity="0.6" />
        <path d="M 160 87 C 142 105 142 165 160 183" strokeWidth="2.5" opacity="0.8" />
        <path d="M 160 87 C 178 105 178 165 160 183" strokeWidth="2.5" opacity="0.8" />
        {/* Landmass/Gear Accent Outline */}
        <path
          d="M 180 120 L 192 124 L 188 135 L 198 142 L 190 152 L 175 146"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
      </g>

      {/* Peace Dove flying to top-left */}
      <g stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Dove Body & Head */}
        <path d="M 112 96 Q 102 90 95 98 C 88 106 96 116 106 122 Q 118 116 122 106 Z" fill="#ffffff" fillOpacity="0.1" />
        <circle cx="98" cy="98" r="1.5" fill="#ffffff" />
        {/* Dove Wings */}
        <path d="M 104 108 C 96 90 85 88 80 94 C 84 104 94 112 104 112" />
        <path d="M 108 106 C 112 86 120 84 125 90 C 122 100 114 108 108 106" />
      </g>

      {/* Legal Gavel & Sound Block */}
      <g stroke="#ffffff" strokeWidth="4" fill="#000000" strokeLinecap="round" strokeLinejoin="round">
        {/* Gavel Head */}
        <path
          d="M 108 152 L 132 132 L 148 148 L 124 168 Z"
          fill="#000000"
          strokeWidth="4.5"
        />
        {/* Gavel Head Caps */}
        <path d="M 104 156 L 112 148" strokeWidth="4.5" />
        <path d="M 144 152 L 152 144" strokeWidth="4.5" />

        {/* Gavel Handle */}
        <path
          d="M 136 158 L 168 190 L 174 184 L 142 152"
          fill="#ffffff"
          strokeWidth="3.5"
        />
        <line x1="152" y1="174" x2="158" y2="168" stroke="#000000" strokeWidth="2.5" />

        {/* Acoustic Sound Block Base */}
        <path
          d="M 92 188 L 132 188 L 128 198 L 96 198 Z"
          fill="#000000"
          strokeWidth="4"
        />
        <rect x="88" y="198" width="48" height="6" rx="2" fill="#000000" strokeWidth="3.5" />
      </g>

      {/* Human Protective Hands (Left Arch) */}
      <g stroke="#ffffff" strokeWidth="3.5" fill="#ffffff" fillOpacity="0.1" strokeLinecap="round" strokeLinejoin="round">
        {/* Upper Hand reaching down */}
        <path d="M 72 78 C 60 92 52 110 52 130 C 52 145 56 160 64 175" strokeWidth="4" fill="none" />
        <path d="M 72 78 C 64 88 56 100 58 114 Q 60 126 70 120" />
        <path d="M 58 114 Q 50 135 60 148 Q 66 142 62 130" />
        
        {/* Lower Cupped Hand */}
        <path d="M 42 165 C 38 185 45 208 60 225 C 70 236 82 245 96 250" strokeWidth="4" fill="none" />
        <path d="M 42 165 Q 40 185 52 195 Q 60 185 52 175 Z" />
        <path d="M 50 190 Q 56 210 70 216" />
      </g>

      {/* Olive/Laurel Botanical Branch (Top & Right) */}
      <g stroke="#ffffff" strokeWidth="3.5" fill="#ffffff" fillOpacity="0.25" strokeLinecap="round" strokeLinejoin="round">
        {/* Main Arching Stem */}
        <path d="M 160 38 C 210 44 252 82 262 132 C 268 162 260 195 245 220" strokeWidth="4" fill="none" />
        
        {/* Berries */}
        <circle cx="182" cy="42" r="8" fill="#64748b" stroke="#ffffff" strokeWidth="3" />
        <circle cx="230" cy="68" r="6" fill="#64748b" stroke="#ffffff" strokeWidth="2.5" />
        <circle cx="245" cy="180" r="5.5" fill="#64748b" stroke="#ffffff" strokeWidth="2.5" />

        {/* Leaves */}
        <path d="M 210 88 C 225 76 240 82 244 96 C 230 102 216 98 210 88 Z" fill="#94a3b8" />
        <path d="M 238 110 C 255 104 266 115 264 130 C 248 130 238 122 238 110 Z" fill="#94a3b8" />
        <path d="M 264 126 C 280 128 288 142 284 156 C 270 152 262 140 264 126 Z" fill="#ffffff" />
        <path d="M 252 160 C 265 168 266 182 258 194 C 248 186 248 172 252 160 Z" fill="#ffffff" />
      </g>

      {/* Bold CILAD Typography */}
      <text
        x="150"
        y="255"
        fill="#ffffff"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="34"
        fontWeight="900"
        letterSpacing="0.22em"
      >
        CILAD
      </text>
    </svg>
  );
}

export function DualLogos({
  size = "md",
  className = "",
  showDivider = true,
}: {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showDivider?: boolean;
}) {
  const sizeClasses = {
    sm: "w-9 h-9",
    md: "w-14 h-14",
    lg: "w-20 h-20 md:w-24 md:h-24",
    xl: "w-28 h-28 md:w-36 md:h-36",
  }[size];

  const dividerHeight = {
    sm: "h-7",
    md: "h-10",
    lg: "h-16",
    xl: "h-24",
  }[size];

  return (
    <div className={`flex items-center gap-4 md:gap-6 ${className}`}>
      {/* 1st: DSNLU Logo */}
      <div className="relative group transition-transform hover:scale-105 duration-200">
        <DsnluLogo className={`${sizeClasses} drop-shadow-md`} />
      </div>

      {showDivider && (
        <div className={`w-px bg-heritage-accent/40 ${dividerHeight}`} />
      )}

      {/* 2nd: CILAD Logo */}
      <div className="relative group transition-transform hover:scale-105 duration-200">
        <CiladLogo className={`${sizeClasses} drop-shadow-md rounded-full ring-2 ring-heritage-accent/30`} />
      </div>
    </div>
  );
}
