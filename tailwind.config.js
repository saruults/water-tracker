/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        goalBlue: '#348ddb',
        recordBlue: '#9cdfe4',
        addGreen: '#7ed957',
        removeRed: '#ff5757',
      },
    },
  },
  plugins: [],
};
