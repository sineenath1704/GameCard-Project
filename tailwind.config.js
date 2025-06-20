// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mitr: ['Mitr', 'sans-serif'],
        khmer: ['"Konkhmer Sleokchher"', 'sans-serif'],
        happy: ['"Happy Monkey"', 'cursive'],
        grapenuts: ['"Grape Nuts"', 'cursive'],
        abeezee: ['ABeeZee', 'sans-serif'],
        averia: ['"Averia Serif Libre"', 'serif'],
      },
      zIndex: {
        '-10': '-10'
      },
      keyframes: {
  glowPulse: {
    '0%, 100%': {
      boxShadow: '0 0 30px rgba(255, 0, 255, 0.4), 0 0 60px rgba(255, 105, 180, 0.3)',
    },
    '50%': {
      boxShadow: '0 0 60px rgba(255, 0, 255, 0.6), 0 0 90px rgba(255, 105, 180, 0.5)',
    },
  },
  spinSlow: {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
  glowSpin: {
    '0%': {
      transform: 'rotate(0deg)',
      boxShadow: '0 0 30px rgba(255, 0, 255, 0.4), 0 0 60px rgba(255, 105, 180, 0.3)',
    },
    '50%': {
      transform: 'rotate(180deg)',
      boxShadow: '0 0 60px rgba(255, 0, 255, 0.6), 0 0 90px rgba(255, 105, 180, 0.5)',
    },
    '100%': {
      transform: 'rotate(360deg)',
      boxShadow: '0 0 30px rgba(255, 0, 255, 0.4), 0 0 60px rgba(255, 105, 180, 0.3)',
    },
  },
},
animation: {
  glow: 'glowPulse 2s ease-in-out infinite',
  spinSlow: 'spinSlow 20s linear infinite',
  glowSpin: 'glowSpin 20s linear infinite',
},
    }
  },
  plugins: []
}
