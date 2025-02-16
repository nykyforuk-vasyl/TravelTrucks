export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "820px" },
        ls: "480px",
        md: "821px",
      },
      colors: {
        black: " #101828",
        darkGrey: "#475467",
        grey: "#6c717b",
        red: "#e44848",
        darkRed: "#d84343",
        yellow: "#ffc531",
        lightGrey: "#dadde1",
        silver: "#f2f4f7",
        darkWhite: "#f7f7f7",
        white: "#fff",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        // Додаємо кастомні розміри шрифтів з lineHeight, letterSpacing і fontWeight
        xs: [
          "12px",
          { lineHeight: "18px", letterSpacing: "-0.02em", fontWeight: 400 },
        ],
        sm: [
          "14px",
          { lineHeight: "20px", letterSpacing: "-0.02em", fontWeight: 400 },
        ],
        base: ["16px", { lineHeight: "24px", fontWeight: 500 }],
        lg: [
          "18px",
          { lineHeight: "28px", letterSpacing: "-0.02em", fontWeight: 500 },
        ],
        custom: ["20px", { lineHeight: "1.2", fontWeight: 600 }],
        xl: ["24px", { lineHeight: "32px", fontWeight: 600 }],
        "2xl": [
          "30px",
          { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: 600 },
        ],
        "3xl": [
          "36px",
          { lineHeight: "54px", letterSpacing: "-0.02em", fontWeight: 600 },
        ],
        "4xl": [
          "48px",
          { lineHeight: "32px", letterSpacing: "-0.02em", fontWeight: 600 },
        ],
      },
    },
  },
  plugins: [],
};
