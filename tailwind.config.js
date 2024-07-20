module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        moveAround: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(20px, 20px)" },
          "50%": { transform: "translate(-20px, 20px)" },
          "75%": { transform: "translate(-20px, -20px)" },
          "100%": { transform: "translate(20px, -20px)" },
        },
      },
      animation: {
        moveAround: "moveAround 5s infinite",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
