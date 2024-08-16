/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_button_color: "#295C7A",
        white: "#FFFFFF",
        "second-color": "#784F33",
        "second-color-text": "#737373",
        "card-info-color": "#F6E4D7",
        "color-card-border": "#A9D6FF",
        "borwn-yellow": "#D0A144",
        "video-part": "#000000",
        "video-main": "#FAFAFA",
        "yellow-start": "#F3CD03",
        "review-background": "#F3F3F3",
        "footer-backforund": "#252B42",
        "footer-gradiant": "#0072B5",
        "footer-color": "#BDBDBD",
      },
      width: {
        AppoinmentBookw: "248px",
        AppoinmentBoowFormW: "328px",
        MakeAppointW: "285px",
        mainImageW: "1440px",
        headerWidth: "1322",
      },
      height: {
        AppoinmentBookh: "58px",
        AppoinmentBoowFormH: "619px",
        MakeAppointH: "50px",
        mainImageH: "823px",
        headerWidth: "104",
        buttonMainH: "48px",
      },
      backgroundImage: {
        "main-image": "url('/public/img/bg_main.jpeg')",
        "video-image": "url('/public/img/image.jpg')",
        "image-make": "url('/public/img/bg_form.png')",
      },
      maxWidth: {
        mobileView: "416px",
      },
      borderRadius: {
        buttonRadiues: "37px",
      },
      fontFamily: {
        martel: ["Martel", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      screens: {
        sm414: "414px",
      },
    },
  },
  plugins: [],
};
