/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.jsx"],
  theme: {
    extend: {
      animation: {
        run: "run 5s linear infinite",
        zoomIn: "zoomIn 200ms linear",
      },
      keyframes: {
        run: {
          "100%": { transform: "translateX(-100vw)" },
        },
        zoomIn: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
    animation: {
      pulse: "pulse 1s linear infinite",
    },
  },
  plugins: [],
};
