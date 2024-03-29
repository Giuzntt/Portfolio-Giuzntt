/** @type {import('tailwindcss').Config} */

const aspectRatio = require("@tailwindcss/aspect-ratio");
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "persian-indigo": "#27187E",
        "cornflower-blue-light": "#ACB9FF",
        "cornflower-blue": "#758BFD",
        "periwinkle-blue": "#AEB8FE",
        "flash-white": "#F1F2F6",
        "orange-ut": "#FF8600",
        "linkedin-blue": "#0A66C2",
        redux: "#764ABC",
      },

      spacing: {
        "3/4": "133.33%", // For a 3:4 aspect ratio
      },
    },
  },
  plugins: [aspectRatio, require("flowbite/plugin")],
};
