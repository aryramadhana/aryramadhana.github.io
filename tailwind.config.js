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
          port:    '#64748B',
          light:   '#94A3B8',
          lighter: '#E2E8F0',
          lightest:'#F8FAFC',
        },
      },
      fontFamily: {
        sans:  ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
        mono:  ['"Fira Code"', 'monospace'],
      },
      borderRadius: {
        port:   '16px',
        'port-sm': '10px',
        'port-xs': '6px',
      },
      boxShadow: {
        port:   '0 4px 24px rgba(0,0,0,0.08)',
        'port-lg': '0 12px 48px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
