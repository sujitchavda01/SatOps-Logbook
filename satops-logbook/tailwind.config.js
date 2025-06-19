/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}', // Scans all JS, JSX, TS, TSX, and HTML files in src
    './src/components/**/*.{js,jsx,ts,tsx}', // Specifically for components
    './src/pages/**/*.{js,jsx,ts,tsx}', // For pages (if using a pages-based structure)
  ],
  theme: {
    extend: {}, // Add custom theme configurations here (e.g., colors, fonts)
  },
  plugins: [], // Add plugins if needed (e.g., typography, forms)
}