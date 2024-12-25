export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customTeal: '#34b4c1',
      },
      keyframes: {
        'move-left-right': {
          '0%': { transform: 'translateX(-10px)' },
          '50%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(-10px)' },
        },
        'move-top-bottom':{
          '0%': { transform: 'translateY(-5px)' },
          '50%': { transform: 'translateY(5px)' },
          '100%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        'move-left-right': 'move-left-right 2s ease-in-out infinite',
        'move-top-bottom': 'move-top-bottom 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}