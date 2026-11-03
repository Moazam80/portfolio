/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#590907',
          50: '#FBF2F2',
          100: '#F5DFDE',
          200: '#E8BFBE',
          600: '#7A0D0A',
          700: '#590907', // exact user color
          800: '#430605',
          900: '#2B0403',
        },
        sand: {
          DEFAULT: '#E8D2B5', // exact user color
          50: '#FCF9F5',
          100: '#F7F0E6',
          200: '#E8D2B5',
          300: '#D9B994',
          400: '#C99E73',
          500: '#B88455',
        },
        canvas: {
          DEFAULT: '#FAF7F2', // warm elegant gallery background
          subtle: '#F3EDE4',
          card: '#FFFFFF',
        },
        charcoal: {
          DEFAULT: '#1C1917',
          muted: '#57534E',
          soft: '#78716C',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(89, 9, 7, 0.05)',
        'elevated': '0 10px 30px -4px rgba(89, 9, 7, 0.08)',
        'burgundy': '0 10px 25px -3px rgba(89, 9, 7, 0.25)',
        'glow-sand': '0 0 25px -5px rgba(232, 210, 181, 0.5)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 4s ease-in-out 2s infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        }
      }
    },
  },
  plugins: [],
}
