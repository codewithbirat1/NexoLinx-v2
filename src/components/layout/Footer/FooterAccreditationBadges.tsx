import React from 'react';

interface BadgeProps {
  className?: string;
}

/**
 * ISO 9001:2015 Certified Company Badge
 */
export function IsoBadge({ className = 'h-14 w-auto' }: BadgeProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ISO 9001:2015 Certified Company"
    >
      {/* Outer concentric rings */}
      <circle cx="40" cy="40" r="37" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="40" cy="40" r="33.5" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="opacity-70" />
      <circle cx="40" cy="40" r="28" stroke="currentColor" strokeWidth="1.5" />

      {/* Top Arc Text */}
      <path id="isoTopArc" d="M18 40 A22 22 0 0 1 62 40" fill="none" />
      <text fill="currentColor" fontSize="5.5" fontWeight="700" letterSpacing="2.5" textAnchor="middle">
        <textPath href="#isoTopArc" startOffset="50%">
          CERTIFIED
        </textPath>
      </text>

      {/* Center ISO typography */}
      <text
        x="40"
        y="42"
        fill="currentColor"
        fontSize="17"
        fontFamily="serif"
        fontWeight="800"
        letterSpacing="1"
        textAnchor="middle"
      >
        ISO
      </text>

      {/* Sub-label 9001:2015 */}
      <text
        x="40"
        y="50"
        fill="currentColor"
        fontSize="6.5"
        fontWeight="700"
        letterSpacing="0.8"
        textAnchor="middle"
      >
        9001:2015
      </text>

      {/* Bottom Arc Text */}
      <path id="isoBottomArc" d="M62 40 A22 22 0 0 1 18 40" fill="none" />
      <text fill="currentColor" fontSize="5.5" fontWeight="700" letterSpacing="2.5" textAnchor="middle">
        <textPath href="#isoBottomArc" startOffset="50%">
          COMPANY
        </textPath>
      </text>
    </svg>
  );
}

/**
 * Clutch Top IT Services Company Badge
 */
export function ClutchBadge({ className = 'h-14 w-auto' }: BadgeProps) {
  return (
    <svg
      viewBox="0 0 88 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Clutch Top IT Services Company"
    >
      {/* Outer Hexagon */}
      <polygon
        points="44,4 82,24 82,76 44,96 6,76 6,24"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="#0c1219"
      />
      {/* Inner Hexagon Outline */}
      <polygon
        points="44,9 77,27 77,73 44,91 11,73 11,27"
        stroke="currentColor"
        strokeWidth="1"
        className="opacity-50"
      />

      {/* Top Tagline */}
      <text
        x="44"
        y="21"
        fill="currentColor"
        fontSize="5"
        fontWeight="700"
        letterSpacing="0.6"
        textAnchor="middle"
        className="opacity-90 uppercase"
      >
        TOP
      </text>
      <text
        x="44"
        y="27"
        fill="currentColor"
        fontSize="4.5"
        fontWeight="700"
        letterSpacing="0.5"
        textAnchor="middle"
        className="opacity-90 uppercase"
      >
        IT SERVICES
      </text>
      <text
        x="44"
        y="33"
        fill="currentColor"
        fontSize="4.5"
        fontWeight="700"
        letterSpacing="0.5"
        textAnchor="middle"
        className="opacity-90 uppercase"
      >
        COMPANY
      </text>

      {/* Middle Clutch Banner */}
      <rect x="12" y="38" width="64" height="25" fill="#142838" />
      <line x1="12" y1="38" x2="76" y2="38" stroke="currentColor" strokeWidth="1" />
      <line x1="12" y1="63" x2="76" y2="63" stroke="currentColor" strokeWidth="1" />
      
      {/* Clutch Wordmark */}
      <text
        x="44"
        y="55"
        fill="#FFFFFF"
        fontSize="14"
        fontWeight="800"
        letterSpacing="-0.5"
        textAnchor="middle"
      >
        Clutch
      </text>

      {/* Bottom Year / Tag */}
      <text
        x="44"
        y="75"
        fill="currentColor"
        fontSize="5.5"
        fontWeight="700"
        letterSpacing="1"
        textAnchor="middle"
        className="opacity-80 uppercase"
      >
        2025
      </text>
      <text
        x="44"
        y="82"
        fill="currentColor"
        fontSize="4.5"
        fontWeight="600"
        letterSpacing="0.8"
        textAnchor="middle"
        className="opacity-70 uppercase"
      >
        VERIFIED
      </text>
    </svg>
  );
}

/**
 * GoodFirms Logo & Badge
 */
export function GoodFirmsBadge({ className = 'h-11 w-auto' }: BadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`} aria-label="GoodFirms Accredited">
      {/* Stylized GoodFirms Icon */}
      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center p-1.5 shadow-sm">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Stylized geometric F/G shape */}
          <path
            d="M6 7C6 5.89543 6.89543 5 8 5H24C25.1046 5 26 5.89543 26 7V13C26 14.1046 25.1046 15 24 15H16V19H22C23.1046 19 24 19.8954 24 21V25C24 26.1046 23.1046 27 22 27H8C6.89543 27 6 26.1046 6 25V7Z"
            fill="#000000"
          />
          <path
            d="M12 11H20V9H12V11ZM12 23H18V21H12V23Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* Brand text */}
      <span className="text-[17px] font-bold text-white tracking-tight leading-none">
        GoodFirms
      </span>
    </div>
  );
}

/**
 * 2025 Winner Custom Software Development Laurel Wreath Badge
 */
export function WinnerBadge({ className = 'h-14 w-auto' }: BadgeProps) {
  return (
    <svg
      viewBox="0 0 110 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="2025 Winner Custom Software Development"
    >
      {/* Left Laurel Wreath */}
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M26 66C20 54 18 36 26 22" fill="none" strokeWidth="1.5" />
        {/* Leaves */}
        <path d="M25 62C21 61 17 62 14 65C17 66 22 65 24 63" fill="currentColor" />
        <path d="M23 53C18 51 14 53 11 56C15 57 19 56 22 54" fill="currentColor" />
        <path d="M22 43C16 41 12 43 9 46C13 47 18 46 21 44" fill="currentColor" />
        <path d="M22 33C17 31 13 32 10 35C14 36 18 35 21 34" fill="currentColor" />
        <path d="M24 24C19 21 16 22 13 24C17 26 20 25 23 25" fill="currentColor" />
        <path d="M27 18C23 15 20 15 18 17C21 19 24 19 26 19" fill="currentColor" />
      </g>

      {/* Right Laurel Wreath */}
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M84 66C90 54 92 36 84 22" fill="none" strokeWidth="1.5" />
        {/* Leaves */}
        <path d="M85 62C89 61 93 62 96 65C93 66 88 65 86 63" fill="currentColor" />
        <path d="M87 53C92 51 96 53 99 56C95 57 91 56 88 54" fill="currentColor" />
        <path d="M88 43C94 41 98 43 101 46C97 47 92 46 89 44" fill="currentColor" />
        <path d="M88 33C93 31 97 32 100 35C96 36 92 35 89 34" fill="currentColor" />
        <path d="M86 24C91 21 94 22 97 24C93 26 90 25 87 25" fill="currentColor" />
        <path d="M83 18C87 15 90 15 92 17C89 19 86 19 84 19" fill="currentColor" />
      </g>

      {/* Top Icon Mark */}
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <line x1="50" y1="12" x2="60" y2="12" />
        <line x1="50" y1="16" x2="60" y2="16" />
        <line x1="50" y1="20" x2="60" y2="20" />
        <line x1="55" y1="10" x2="55" y2="22" strokeWidth="2" />
      </g>

      {/* Center 2025 */}
      <text
        x="55"
        y="34"
        fill="currentColor"
        fontSize="11"
        fontWeight="800"
        letterSpacing="0.5"
        textAnchor="middle"
      >
        2025
      </text>

      {/* WINNER */}
      <text
        x="55"
        y="45"
        fill="currentColor"
        fontSize="9.5"
        fontWeight="800"
        letterSpacing="1.2"
        textAnchor="middle"
      >
        WINNER
      </text>

      {/* Custom Software Development */}
      <text
        x="55"
        y="53"
        fill="currentColor"
        fontSize="4.5"
        fontWeight="600"
        letterSpacing="0.4"
        textAnchor="middle"
        className="opacity-80"
      >
        Custom Software
      </text>
      <text
        x="55"
        y="59"
        fill="currentColor"
        fontSize="4.5"
        fontWeight="600"
        letterSpacing="0.4"
        textAnchor="middle"
        className="opacity-80"
      >
        Development
      </text>
    </svg>
  );
}
