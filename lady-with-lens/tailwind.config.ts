import type { Config } from 'tailwindcss';

const colors = {
  primary: '#CE3D51',      // LadyWithLens Brand Color
  secondary: '#FFC107',    // Accent color
  background: '#F7F7F7',   // Background color for pages
  text: '#333333',         // Primary text color
  lightText: '#888888',    // Secondary text color
  border: '#E0E0E0',       // Border color for elements
};

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors, // Directly use the `colors` object
    },
  },
  plugins: [],
};

export default config;
