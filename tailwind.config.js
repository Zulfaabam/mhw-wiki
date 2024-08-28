/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "elder-recess": "url('/src/assets/elder-recess.webp')",
        coral: "url('/src/assets/coral-highland.webp')",
      },
    },
  },
  plugins: [],
};
