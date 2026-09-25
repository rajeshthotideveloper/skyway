/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          500: "#1474e6",
          600: "#0f5fd3",
          700: "#0c4db0",
          900: "#092d66",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(15, 95, 211, 0.12)",
      },
    },
  },
  plugins: [],
};
