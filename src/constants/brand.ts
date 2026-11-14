/**
 * Official Nexo Linx Brand Constants
 */

export const BRAND_IDENTITY = {
  name: 'Nexo Linx',
  tagline: 'Build • Optimize • Outrank.',
  companyName: 'Nexo Linx Pvt. Ltd.',
  contact: {
    phone: '+977 9743406723',
    email: 'info@nexolinx.com',
    website: 'https://www.nexolinx.com',
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
