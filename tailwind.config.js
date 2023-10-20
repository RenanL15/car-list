/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.jsx"],
  theme: {
    extend: {
      animation: {
        run: "run 3s linear infinite",
      },
      keyframes: {
        run: {
          "0%": { transform: "translateX(100vw)" },
          "100%": { transform: "translateX(-100vw)" },
        },
      },
    },
    animation: {
      pulse: "pulse 1s linear infinite",
    },
  },
  plugins: [],
};
