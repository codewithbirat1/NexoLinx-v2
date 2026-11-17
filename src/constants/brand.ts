/**
 * Official Nexo Linx Brand Constants
 * Sourced directly from nexolinx.com
 */

export const BRAND_IDENTITY = {
  name: 'Nexo Linx',
  tagline: 'Your Tech Solution',
  secondaryTagline: 'Build • Optimize • Outrank.',
  companyName: 'Nexo Linx Pvt. Ltd.',
  established: '2024',
  location: {
    street: 'Tilottama-4, Dinganagar',
    city: 'Butwal',
    district: 'Rupandehi',
    province: 'Lumbini',
    country: 'Nepal',
    postalCode: '32900',
    fullAddress: 'Tilottama-4, Dinganagar, Rupandehi, Lumbini 32900, Nepal',
    geo: {
      latitude: 27.6891,
      longitude: 83.4483,
    },
  },
  contact: {
    phone: '+977 9743406723',
    alternatePhone: '+977 9749890500',
    email: 'info@nexolinx.com',
    alternateEmail: 'nexolinxs@gmail.com',
    website: 'https://www.nexolinx.com',
    calendly: 'https://calendly.com/biratpandey9/new-meeting',
    whatsapp: 'https://wa.me/9779743406723',
  },
  socials: {
    linkedin: 'https://www.linkedin.com/company/nexolinx',
    facebook: 'https://www.facebook.com/nexolinx',
    instagram: 'https://www.instagram.com/nexolinx',
    twitter: 'https://twitter.com/nexolinx',
  },
  colors: {
    primaryBlue: '#1374DF',
    pureBlack: '#000000',
    pureWhite: '#FFFFFF',
    supporting: {
      blueHover: '#0F65C5',
      lightBlue: '#E8F2FF',
      secondaryText: '#888888',
      subtleBorder: '#252525',
    },
  },
  typography: {
    primaryFont: 'Inter Tight',
    fontStack: '"Inter Tight", sans-serif',
    baseSize: '16px',
    baseLineHeight: '21px',
    fontScale: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '20px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '48px',
      '4xl': '64px',
    },
  },
  spacingScale: [
    '4px',
    '8px',
    '12px',
    '16px',
    '24px',
    '32px',
    '48px',
    '64px',
    '80px',
    '96px',
  ],
  breakpoints: {
    mobile: '320px - 767px',
    tablet: '768px - 1023px',
    desktop: '1024px - 1439px',
    largeDesktop: '1440px and above',
  },
  containerMaxWidth: '1240px',
  assets: {
    logoSvg: '/brand/nexolinx-logo.svg',
    logoMarkPng: '/brand/nexolinx-mark.png',
    officialBannerPng: '/brand/nexolinx-official-banner.png',
  },
} as const;
