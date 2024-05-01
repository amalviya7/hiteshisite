/* eslint-disable no-undef */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "0px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
      xxl: "1750px",
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
    extend: {
      boxShadow: {
        custom: "0 20px 35px 0 rgba(152, 201, 60, 0.5) ",
      },
      animation: {
        "zoom-in": "zoom-in 0.5s forwards",
      },
      keyframes: {
        "zoom-in": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
  },
};
