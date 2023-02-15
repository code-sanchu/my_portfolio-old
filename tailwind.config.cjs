/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      "display-primary": ["VG", "sans-serif"],
      "body-primary": ["WS_r", "sans-serif"],
      "asatic-r": ["NM_R", "sans-serif"],
      alesh: ["IBMMono", "monospace"],
      "birch-b": ["Amatic-b", "cursive"],
      piros: ["acumin-pro", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "work-title":
          "linear-gradient(to right, white 0%, white 60px, black 60px, black 100%)",
        "work-title-sm":
          "linear-gradient(to bottom, white 0%, white 25px, black 25px, black 100%)",
      },
      spacing: {
        xxxs: ".1rem",
        xxs: ".25rem",
        xs: ".5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "1.5xl": "4.5rem",
        "2xl": "6rem",
        "2.5xl": "7.5rem",
        "3xl": "9rem",
      },
    },
  },
  plugins: [],
};
