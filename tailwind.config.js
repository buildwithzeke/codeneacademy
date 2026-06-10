/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#ff5b13",
          amber: "#ff9f1c",
          purple: "#7026d9",
          violet: "#9b2cff",
          ink: "#07091f",
          navy: "#0d1233",
          mist: "#f7f8fc",
        },
      },
      boxShadow: {
        glow: "0 24px 80px rgba(112, 38, 217, 0.25)",
        soft: "0 18px 55px rgba(15, 23, 42, 0.12)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-radial":
          "radial-gradient(circle at 82% 20%, rgba(255, 91, 19, 0.28), transparent 30%), radial-gradient(circle at 20% 80%, rgba(112, 38, 217, 0.34), transparent 30%)",
      },
    },
  },
  plugins: [],
};
