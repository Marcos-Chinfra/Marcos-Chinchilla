/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_button_color: "#295C7A",
        white: "#FFFFFF",
      },
      width: {
        AppoinmentBookw: "248px",
      },
      height: {
        AppoinmentBookh: "58px",
      },
    },
  },
  plugins: [],
};
