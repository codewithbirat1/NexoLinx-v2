import React from 'react';

interface LandmarkIconProps {
  className?: string;
}

/**
 * Statue of Liberty Line Art Icon
 */
export function StatueOfLibertyIcon({ className = 'w-12 h-14' }: LandmarkIconProps) {
  return (
    <svg
      viewBox="0 0 64 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Cloud & birds subtle backdrop */}
      <path
        d="M38 18C38 15 41 13 44 14C46 11 50 11 52 13C55 12 58 14 58 17C60 18 61 21 59 23H37C36 21 37 19 38 18Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-40"
      />
      <path
        d="M50 20C52 19 54 20 54 21"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="opacity-40"
      />
      {/* Torch & Flame */}
      <path
        d="M17 12C15 9 17 6 18 4C20 6 22 7 21 10C21 12 19 13 17 12Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 12H23V14L21 16H17L15 14V12Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Arm holding torch */}
      <path
        d="M17 16V22L20 25V30"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M21 16V22L23 25V28"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Crown & Spikes */}
      <path
        d="M32 23L30 17L34 22L36 15L38 22L42 16L41 23"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 23H44"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Face & Head Oval */}
      <path
        d="M31 23C31 29 34 32 37 32C40 32 43 29 43 23"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Neck & Robe / Stola */}
      <path
        d="M34 32V36L27 40L23 48L21 68"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39 32V36L46 41L50 51L53 68"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Robe folds */}
      <path
        d="M30 40C33 46 39 46 44 41"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M27 49C32 55 41 54 47 48"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M25 58C32 64 42 63 50 57"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M37 36V68"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="opacity-50"
      />
      {/* Base baseline */}
      <line
        x1="18"
        y1="68"
        x2="56"
        y2="68"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Big Ben / Elizabeth Tower Line Art Icon
 */
export function BigBenIcon({ className = 'w-10 h-14' }: LandmarkIconProps) {
  return (
    <svg
      viewBox="0 0 52 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Spire top tip */}
      <line
        x1="26"
        y1="4"
        x2="26"
        y2="10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Pyramid roof */}
      <path
        d="M26 10L21 21H31L26 10Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <line
        x1="26"
        y1="10"
        x2="26"
        y2="21"
        stroke="currentColor"
        strokeWidth="1"
        className="opacity-50"
      />
      {/* Belfry gallery / arch level */}
      <path
        d="M20 21V25H32V21"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Clock Chamber Section */}
      <rect
        x="18"
        y="25"
        width="16"
        height="16"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Circular Clock Dial */}
      <circle
        cx="26"
        cy="33"
        r="5.5"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      {/* Clock Hands */}
      <line
        x1="26"
        y1="33"
        x2="26"
        y2="30.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="26"
        y1="33"
        x2="28"
        y2="33"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Tower Shaft Vertical Grooves */}
      <rect
        x="19"
        y="41"
        width="14"
        height="27"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <line
        x1="22.5"
        y1="41"
        x2="22.5"
        y2="68"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <line
        x1="26"
        y1="41"
        x2="26"
        y2="68"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <line
        x1="29.5"
        y1="41"
        x2="29.5"
        y2="68"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* Horizontal decorative banding */}
      <line
        x1="19"
        y1="50"
        x2="33"
        y2="50"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line
        x1="19"
        y1="59"
        x2="33"
        y2="59"
        stroke="currentColor"
        strokeWidth="1"
      />
      {/* Ground platform line */}
      <line
        x1="14"
        y1="68"
        x2="38"
        y2="68"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <line
        x1="8"
        y1="71"
        x2="44"
        y2="71"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="opacity-50"
      />
    </svg>
  );
}

/**
 * Faisal Mosque Line Art Icon
 */
export function FaisalMosqueIcon({ className = 'w-14 h-14' }: LandmarkIconProps) {
  return (
    <svg
      viewBox="0 0 76 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Left Far Minaret */}
      <line
        x1="10"
        y1="16"
        x2="10"
        y2="68"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M8.5 28H11.5M8.5 44H11.5M7 68H13"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M8.5 20L10 14L11.5 20"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      {/* Left Inner Minaret */}
      <line
        x1="22"
        y1="22"
        x2="22"
        y2="68"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M20.5 32H23.5M20.5 48H23.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M20.5 25L22 19L23.5 25"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      {/* Right Inner Minaret */}
      <line
        x1="54"
        y1="22"
        x2="54"
        y2="68"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M52.5 32H55.5M52.5 48H55.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M52.5 25L54 19L55.5 25"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      {/* Right Far Minaret */}
      <line
        x1="66"
        y1="16"
        x2="66"
        y2="68"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M64.5 28H67.5M64.5 44H67.5M63 68H69"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M64.5 20L66 14L67.5 20"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      {/* Main Tent Roof Triangular Canopy */}
      {/* Apex Crescent */}
      <path
        d="M38 27C37.5 25.5 38.5 24 40 24C39 24.5 38.5 25.5 38.8 26.8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M38 28L18 54H58L38 28Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Central Roof Ribs */}
      <line
        x1="38"
        y1="28"
        x2="38"
        y2="54"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <line
        x1="38"
        y1="28"
        x2="28"
        y2="54"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <line
        x1="38"
        y1="28"
        x2="48"
        y2="54"
        stroke="currentColor"
        strokeWidth="1.1"
      />

      {/* Lower Arcade / Podium */}
      <rect
        x="14"
        y="54"
        width="48"
        height="14"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      {/* Archways in podium */}
      <path
        d="M24 68V62C24 60 26 59 28 59C30 59 32 60 32 62V68"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M35 68V62C35 60 37 59 39 59C41 59 43 60 43 62V68"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M46 68V62C46 60 48 59 50 59C52 59 54 60 54 62V68"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      {/* Ground Baseline */}
      <line
        x1="6"
        y1="68"
        x2="70"
        y2="68"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
