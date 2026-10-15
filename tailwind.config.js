/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        heading: ['Manrope', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        bangla: ['Hind Siliguri', 'Inter', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#c5b396',
          deep: '#a98e63',
          bright: '#d4c4a8',
        },
        emerald: {
          accent: '#0d9488',
          'accent-deep': '#0f766e',
          'accent-soft': '#14b8a6',
        },
        amber: {
          accent: '#d97706',
          'accent-deep': '#b45309',
          'accent-soft': '#f59e0b',
        },
        rose: {
          accent: '#e11d48',
          'accent-deep': '#be123c',
        },
        indigo: {
          accent: '#4f46e5',
          'accent-deep': '#4338ca',
        },
        cyan: {
          accent: '#0891b2',
          'accent-deep': '#0e7490',
        },
        violet: {
          accent: '#7c3aed',
          'accent-deep': '#6d28d9',
        },
      },
      animation: {
        'hero-mark-fade': 'hero-mark-fade 1.2s ease forwards',
        'hero-mark-fade-delay-1': 'hero-mark-fade 1.4s ease 0.15s forwards',
        'hero-mark-fade-delay-2': 'hero-mark-fade 1.6s ease 0.3s forwards',
        'hero-mark-fade-delay-3': 'hero-mark-fade 1.8s ease 0.45s forwards',
        'scroll-pulse': 'scroll-pulse 2.5s ease-in-out infinite',
        'marquee-scroll': 'marquee-scroll 40s linear infinite',
        'marquee-scroll-partners': 'marquee-scroll 30s linear infinite',
      },
      keyframes: {
        'hero-mark-fade': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-pulse': {
          '0%, 100%': { opacity: '0.3', transform: 'translateX(-50%) translateY(0)' },
          '50%': { opacity: '0.7', transform: 'translateX(-50%) translateY(10px)' },
        },
        'marquee-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}