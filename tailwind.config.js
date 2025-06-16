import config from '@mystaline/mysta-presets/raijin/colors.config.json';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: config,
    },
  },
  plugins: [],
};
