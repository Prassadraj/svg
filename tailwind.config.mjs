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
        "subTitle-gradient":
          "linear-gradient(357deg, rgba(184,183,181,1) 0%, rgba(128,128,128,1) 100%)",
        "title-gradient":
          "linear-gradient(90deg, #FF6200 0%, #FD7F2C 51%, #FD9346 100%)",
        "grey-gradient":
          "linear-gradient(180deg, #FFFFFF 0%, #C6C6C6 56%, #999999 100%)",
        // "title-gradient":
        //   "linear-gradient(90deg, rgba(237,136,28,1) 0%, rgba(190,116,66,1) 32%, rgba(194,194,194,1) 87%)",
        counter:
          "linear-gradient(90deg, rgba(154,101,10,1) 0%, rgba(233,206,165,1) 51%, rgba(149,140,140,1) 100%)",
      },
    },
  },
  plugins: [],
};
