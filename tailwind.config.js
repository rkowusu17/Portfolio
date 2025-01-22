/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      //     keyframes: {
      //       "pulse+": {
      //         "0%": { opacity: "1" },
      //         "80%": { opacity: "0.5" },
      //         "100%": { opacity: "1" },
      //       },
      //     },
      //     animation: {
      //       "pulse+": "pulse+ 1s ease-in-out infinite",
      //     },
      //   },
      // },
      gradientColorStops: {
        "custom-end": "rgb(110, 164, 164)",
      },
      colors: {
        "custom-bg": "rgba(142, 154, 154, 0.173)",
      },
      screens: {
        large: { raw: "screen and (min-width : '750px') " },
      },
      width: {
        95: " 95% ",
        70: "70%",
        75: "75%",
        88: "88%",
      },
      keyframes: {
        "show-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.05)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "show-menu": "show-menu 0.8s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
