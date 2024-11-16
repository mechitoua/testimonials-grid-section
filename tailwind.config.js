/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'moderate-violet': 'hsl(263, 55%, 52%)',
        'dark-grayish-blue': 'hsl(217, 19%, 35%)',
        'dark-blackish-blue': 'hsl(219, 29%, 14%)',
        'light-gray': 'hsl(0, 0%, 81%)',
        'light-grayish-blue': 'hsl(210, 46%, 95%)',
      },
      screens: {
        'custom': '1276px',
        'medium-lg': '1022px',
      },
    },
  },
  plugins: [],
};
