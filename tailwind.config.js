import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#22C55E',
          dark:    '#16A34A',
          darker:  '#15803D',
          light:   '#DCFCE7',
          lighter: '#F0FDF4',
        },
        dark: {
          DEFAULT: '#0F172A',
          2:       '#1E293B',
        },
        gray: {
          DEFAULT:  '#64748B',
          light:    '#94A3B8',
          lighter:  '#E2E8F0',
          lightest: '#F8FAFC',
        },
      },
      fontFamily: {
        sans:  ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
        mono:  ['"Fira Code"', 'monospace'],
      },
      // Overrides the default scale entries below (rounded/shadow default+sm+lg)
      // to match this site's design tokens; all other scale steps (md, xl, full, …)
      // stay Tailwind's defaults since nothing here used them before this migration.
      borderRadius: {
        DEFAULT: '16px',
        sm:      '10px',
        xs:      '6px',
      },
      boxShadow: {
        DEFAULT: '0 4px 24px rgba(0,0,0,0.08)',
        lg:      '0 12px 48px rgba(0,0,0,0.12)',
      },
      screens: {
        xs: '480px',
        ...defaultTheme.screens,
      },
      keyframes: {
        morphBlob: {
          '0%, 100%': { borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%' },
          '25%':      { borderRadius: '40% 60% 30% 70% / 60% 40% 60% 40%' },
          '50%':      { borderRadius: '70% 30% 50% 50% / 40% 70% 30% 60%' },
          '75%':      { borderRadius: '30% 70% 40% 60% / 70% 30% 70% 30%' },
        },
        floatTag: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        sparkleAnim: {
          '0%':   { opacity: '0', transform: 'scale(0) translateY(0)' },
          '30%':  { opacity: '1', transform: 'scale(1) translateY(-10px)' },
          '100%': { opacity: '0', transform: 'scale(0) translateY(-40px)' },
        },
      },
      animation: {
        morphBlob: 'morphBlob 8s ease-in-out infinite',
        floatTag:  'floatTag 3s ease-in-out infinite',
        sparkle:   'sparkleAnim 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
