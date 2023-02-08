/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      "display-primary": ["VG", "sans-serif"],
      "display-secondary": ["FN", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "work-title":
          "linear-gradient(to right, white 0%, white 60px, black 60px, black 100%)",
      },
      spacing: {
        xxxs: ".1rem",
        xxs: ".25rem",
        xs: ".5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "6rem",
        "2.5xl": "7.5rem",
        "3xl": "9rem",
      },
    },
  },
  plugins: [],
};
