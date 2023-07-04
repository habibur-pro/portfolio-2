/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#ff5d56",
          "secondary": "#494965",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#10101a",
        },
      },
      "light",
      "dark",
    ],
  },
}

