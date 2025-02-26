/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
        largeLaptop: "1440px",
      },
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(150deg, #000000, #4D4040)",
        "title-gradient":
          "linear-gradient(90deg, rgba(237,136,28,1) 0%, rgba(190,116,66,1) 32%, rgba(194,194,194,1) 87%)",
      },
    },
  },
  plugins: [],
};
