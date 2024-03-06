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
      keyframes: {
        "show-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "show-menu": "show-menu 1s forwards",
      },
    },
  },
  plugins: [],
};
