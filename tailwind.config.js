module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "first-main": "#8e2de2",
        "second-main": "#4a00e0",
        text: "rgba(0,0,0,0.5)",
        navbar: "#212121",
      },
      fontFamily: {
        main: ["Roboto", "sans-serif"],
        head: ["Lobster", "cursive"],
      },
      fontSize: {
        "8px": "8px",
        "7px": "7px",
        "15px": "15px",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      backgroundImage: {
        newsletter: "url('/public/images/newsletter.jpeg')",
      },
    },
  },
  plugins: [],
};
