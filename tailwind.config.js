/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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
    },
    colors: {
      "Red": "hsl(0, 100%, 74%)",
      "Green": "hsl(154, 59%, 51%)",

      "Blue": "hsl(248, 32%, 49%)",

      "Dark-Blue": "hsl(249, 10%, 26%)",
      "Grayish-Blue": "hsl(246, 25%, 77%)",
    },
  },
  plugins: [],
};
