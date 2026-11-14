import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',    // Tablet breakpoint
      lg: '1024px',   // Desktop breakpoint
      xl: '1440px',   // Large Desktop breakpoint
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: 'var(--destructive)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        brand: {
          blue: '#1374DF',
          hover: '#0F65C5',
          light: '#E8F2FF',
          glow: 'rgba(19, 116, 223, 0.35)',
          muted: 'rgba(19, 116, 223, 0.12)',
        },
        surface: {
          pureBlack: '#000000',
          pureWhite: '#FFFFFF',
          darkBase: '#070708',
          darkCard: '#0F0F11',
          darkHover: '#161619',
          borderSubtle: '#252525',
          borderMuted: 'rgba(255, 255, 255, 0.08)',
          borderGlow: 'rgba(19, 116, 223, 0.25)',
        },
        text: {
          primaryLight: '#FFFFFF',
          primaryDark: '#000000',
          secondary: '#888888',
          tertiary: '#555555',
          accent: '#1374DF',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter-tight)', '"Inter Tight"', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px', letterSpacing: '0' }],
        sm: ['14px', { lineHeight: '19px', letterSpacing: '0' }],
        base: ['16px', { lineHeight: '21px', letterSpacing: '0' }],
        lg: ['20px', { lineHeight: '26px', letterSpacing: '-0.01em' }],
        xl: ['24px', { lineHeight: '30px', letterSpacing: '-0.015em' }],
        '2xl': ['32px', { lineHeight: '38px', letterSpacing: '-0.02em' }],
        '3xl': ['48px', { lineHeight: '54px', letterSpacing: '-0.025em' }],
        '4xl': ['64px', { lineHeight: '70px', letterSpacing: '-0.03em' }],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
      },
      maxWidth: {
        container: '1240px',
      },
      borderRadius: {
        xs: '4px',
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      boxShadow: {
        'brand-glow': '0 0 24px -4px rgba(19, 116, 223, 0.35)',
        'brand-glow-lg': '0 0 40px -6px rgba(19, 116, 223, 0.45)',
        'card-dark': '0 8px 32px -8px rgba(0, 0, 0, 0.7)',
        'subtle-border': '0 0 0 1px #252525',
      },
      backdropBlur: {
        xs: '4px',
        glass: '12px',
        heavy: '24px',
      },
      transitionDuration: {
        fast: '150ms',
        normal: '250ms',
        slow: '400ms',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
