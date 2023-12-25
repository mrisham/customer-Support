/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        greenish: "#03CC17",
        whitish: "#FFF",
        seaGreen: "#55D6C2",
        lighterGreen: "rgba(239, 237, 237, 0.5)",
        redBtn: "rgba(234, 0, 0, 1)",
        darkBlue: "#296EF2",
        navGrey: "rgba(106, 103, 103, 0.21);",
        cardBlue: "#2F82FF",
        cardGreen: "#0BFF68",
        cardOrange: "#FE594E",
        cardYellow: "#FCFF6C",
        blueNum: "#05386B",
        boxColor: "rgba(196, 196, 196, 0.63);",
      },
    },
  },
  plugins: [],
};
