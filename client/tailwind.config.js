/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-50": "#F9F9F9",
        "neutral-100": "#F4F4F4",
        "neutral-200": "#E4E4E4",
        "neutral-300": "#D3D3D3",
        "neutral-400": "#A2A2A2",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-700": "#404040",
        "neutral-800": "#262626",
        "neutral-900": "#171717",
        "neutral-950": "#0A0A0A",
        "neutral-1000": "#000000",
        "twitter-default": "#1D9BF0",
        "twitter-disabled": "#1E5D87",
        "twitter-hover": "#1871CA",
        "primary-400": "#75beef",
        "fill-100": "#16181C",
        "fill-200": "#212327",
        stroke: "#546A7A",
        success: "#00BE74",
        error: "#8B141A",
        transparent: "transparent",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        chirp: "chirp",
      },
      padding: {
        postPaddingY: "0.9375rem",
        postPaddingX: "5.8125rem",
      },
      height: {
        cardHeight: "22.1875rem",
      },
      width: {
        twtWidth: "37.375rem",
      },
    },
  },
  plugins: [],
};
