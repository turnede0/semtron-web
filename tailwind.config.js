/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // themedarkblue: "#0E1E3E",
        // themeyellow: "#FFC700",
        // polaroid: "#f4f4f4",
        // omronblue: "#1c6ea9",
        // omronbluelight: "#3895eb",
        // headerblack: "#020D26",
        // blacklight: "rgba(0, 0, 0, 0.65)",
        // bkgroundblack: "#606060",
        // videooverlay: "#162239",
        themeblue: "#1765F6",
        themegray: "#F5F6F8",
        overlay: "#141A22",
      },
      boxShadow: {
        innerDefault: "inset 0 0 0 0 #166fc0;",
        inner: "inset 0 0 0 50px #166fc0;",
        innerDark: "inset 2000px 0 0 0 rgba(0, 0, 0, 0.5);",
      },
      fontFamily: {
        wdc: ["var(--font-anton)"],
        poppins: ["Poppins", "sans-serif"],
        sans: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-in forwards",
        LoaderFadeOut: "loadfadeOut 1s ease-in-out",
        LoaderFadeIn: "loadfadeIn 0.3s ease-in-out",
        fadeinout: "fadeInOut 1s ease-in-out",
        slidedown: "SlideDown 0.3s ease-in-out",
        FadeIn: "fadeIn 1s ease-in-out",
      },
      maxHeight: {
        content: "max-content",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        16: "4rem",
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },

      width: {
        "3/100": "3%",
      },

      minWidth: {
        0: "0",
        "1/4": "25%",
        "3/10": "30%",
        "1/3": "33%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },

      screens: {
        tablet: "568px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        loadfadeIn: {
          "0%": { opacity: 0, zIndex: "50" },
          "100%": { opacity: 1, zIndex: "50" },
        },
        loadfadeOut: {
          "0%": { opacity: 1, zIndex: "50" },
          "100%": { opacity: 0 },
        },
        fadeInOut: {
          "0%": { zIndex: "50" },
          "50%": { zIndex: "50", height: "0" },
          "100%": { zIndex: "0", height: "0" },
        },
        SlideDown: {
          "0%": { opacity: 0, width: "0%" },
          "100%": { opacity: 1, width: "100%" },
        },
        SlideUp: {
          "0%": { opacity: 1, height: "0%" },
          "100%": { opacity: 1, height: "100%" },
        },
      },
    },
  },
  plugins: [],
};
