/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#fffdfa',
        'gray-blue-100': '#c5c6ce',
        'gray-blue-200': '#5d5f79',
        'dark-blue': '#00001a',

        'soft-orange': '#e9ab53',
        'soft-red': '#f15e50',
      },

      fontFamily: {
        // 'Inter-400': ['Inter', '400'],
        // 'Inter-700': ['Inter', '700'],
        // 'Inter-800': ['Inter', '800'],
        Inter: ['Inter', 'sans-serif']
      },

    },
  },
  plugins: [],
}
