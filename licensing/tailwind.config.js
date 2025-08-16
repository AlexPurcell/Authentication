/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glossy-red': '#DC143C',
        'deep-red': '#8B0000',
        'dark-red': '#660000',
        'light-red': '#FF6B6B',
        'black-pearl': '#0A0A0A',
        'charcoal': '#1A1A1A',
        'midnight': '#141414',
      },
      backgroundImage: {
        'glossy-gradient': 'linear-gradient(135deg, rgba(220,20,60,0.2) 0%, rgba(0,0,0,0.8) 100%)',
        'red-black-gradient': 'linear-gradient(135deg, #DC143C 0%, #0A0A0A 100%)',
        'subtle-gradient': 'linear-gradient(180deg, rgba(220,20,60,0.05) 0%, rgba(0,0,0,0.95) 100%)',
      },
      boxShadow: {
        'glossy': '0 4px 6px -1px rgba(220, 20, 60, 0.3), 0 2px 4px -1px rgba(220, 20, 60, 0.06)',
        'glossy-lg': '0 10px 15px -3px rgba(220, 20, 60, 0.3), 0 4px 6px -2px rgba(220, 20, 60, 0.05)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(220, 20, 60, 0.06)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(220, 20, 60, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(220, 20, 60, 0.8), 0 0 30px rgba(220, 20, 60, 0.4)' },
        }
      }
    },
  },
  plugins: [],
}