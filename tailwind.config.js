/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.jsx"],
  theme: {
    extend: {
      animation: {
        run: "run 10s linear infinite",
      },
      keyframes: {
        run: {
          "0%": { transform: "translateX(50rem)" },
          "100%": { transform: "translateX(-100rem)" },
        },
      },
    },
    animation: {
      pulse: "pulse 1s linear infinite",
    },
  },
  plugins: [],
};
