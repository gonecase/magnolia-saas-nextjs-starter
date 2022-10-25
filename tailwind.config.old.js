const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}', 
    './stories/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      "10xl": ["12rem", { lineHeight: "13rem" }],
      "9xl": ["10rem", { lineHeight: "11rem" }],
      "8xl": ["5.5rem", { lineHeight: "6.25rem" }], // 88px
      "7xl": ["5rem", { lineHeight: "5.75rem" }], // 80px
      "6xl": ["4rem", { lineHeight: "4.5rem" }], // 64px
      "5.5xl": ["3.875rem", { lineHeight: "4.5rem" }], // 56px
      "5xl": ["3.75rem", { lineHeight: "4.5rem" }], // 56px
      "4xl": ["2.5rem", { lineHeight: "3.5rem" }], // 40px
      "3xl": ["2.25rem", { lineHeight: "2.75rem" }], // 36px
      "2xl": ["2rem", { lineHeight: "2.5rem" }], // 32px
      xl: ["1.75rem", { lineHeight: "2.25rem" }], // 28px
      lg: ["1.5rem", { lineHeight: "2rem" }], // 24px
      md: ["1.125rem", { lineHeight: "1.5rem" }], // 18px
      sm: ["1rem", { lineHeight: "1.5rem" }], // 16px
      xs: ["0.875rem", { lineHeight: "1rem" }], // 14px
      xxs: ["0.75rem", { lineHeight: "0.85rem"}],
      ts: ["0.65rem", { lineHeight: "0.80rem"}],
      tss: ["0.50rem", { lineHeight: "0.65rem"}],
    },
    spacing: {
      px: "1px",
      0: "0px",
      xs: "4px",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "32px",
      "4xl": "48px",
      "5xl": "56px",
      "6xl": "72px",
      "7xl": "120px",
    },
    colors: {
      "test": "#444444",
      transparent: "transparent",
      // black: colors.black,
      // white: colors.white,
      primary: {
        900: "#9E426C",
        100: "#D63F61",
      },
      secondary: {
        900: "#35206C",
        800: "#7E6CA1",
        700: "#A697C1",
        600: "#B3A5CC",
        500: "#BCB0D3",
        400: "#C9BEDA",
        300: "#DBD3E7",
      },
      grey: {
        900: "#19191D",
        800: "#3A3A3A",
        700: "#585858",
        600: "#6B6B6B",
        500: "#949494",
        400: "#B4B4B4",
        300: "#D7D7D7",
        200: "#E7E7E7",
        100: "#F1F1F1",
        50: "#FAFAFA",
        00: "#FFFFFF",
        Minus50: "rgba(255, 255, 255, 0.5);",
        BtnGrey: "#35206C",
      },
      cardBackground: "#F3714F",
      bulrBackground01: "#EFAFC6",
      bulrBackground02: "#FFD9AD",
      bulrBackground03: "#B7CBE3",
      bulrBackground04: "#C4ABEB",
    },
    fontFamily: {
      sans: [
        "'Oxygen'",
        '"Oxygen"',
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        '"Bitter"',
        "ui-sans-serif",
        "ui-serif",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    fontWeight: {
      thin: "100",
      light: "300",
      normal: "400",
      meduim: "500",
      semibold: "600",
      bold: "700",
    },
    linearGradientDirections: {
      // defaults to these values
      t: "to top",
      tr: "to top right",
      r: "to right",
      br: "to bottom right",
      b: "to bottom",
      bl: "to bottom left",
      l: "to left",
      tl: "to top left",
    },
    linearGradientColors: (theme) => theme("colors"),
    radialGradientShapes: {
      // defaults to this value
      default: "ellipse",
    },
    radialGradientSizes: {
      // defaults to this value
      default: "closest-side",
    },
    radialGradientPositions: {
      // defaults to these values
      default: "center",
      t: "top",
      tr: "top right",
      r: "right",
      br: "bottom right",
      b: "bottom",
      bl: "bottom left",
      l: "left",
      tl: "top left",
    },
    radialGradientColors: (theme) => theme("colors"),
    conicGradientStartingAngles: {
      // defaults to this value
      default: "0",
    },
    conicGradientPositions: {
      // defaults to these values
      default: "center",
      t: "top",
      tr: "top right",
      r: "right",
      br: "bottom right",
      b: "bottom",
      bl: "bottom left",
      l: "left",
      tl: "top left",
    },
    conicGradientColors: (theme) => theme("colors"),
    repeatingLinearGradientDirections: (theme) =>
      theme("linearGradientDirections"), // defaults to this value
    repeatingLinearGradientColors: (theme) => theme("linearGradientColors"), // defaults to {}
    repeatingLinearGradientLengths: {
      // defaults to {}
      sm: "25px",
      md: "50px",
      lg: "100px",
    },
    repeatingRadialGradientShapes: (theme) => theme("radialGradientShapes"), // defaults to this value
    repeatingRadialGradientSizes: {
      // defaults to this value
      default: "farthest-corner",
    },
    repeatingRadialGradientPositions: (theme) =>
      theme("radialGradientPositions"), // defaults to this value
    repeatingRadialGradientColors: (theme) => theme("radialGradientColors"), // defaults to {}
    repeatingRadialGradientLengths: {
      // defaults to {}
      sm: "25px",
      md: "50px",
      lg: "100px",
    },
    repeatingConicGradientStartingAngles: (theme) =>
      theme("conicGradientStartingAngles"), // defaults to this value
    repeatingConicGradientPositions: (theme) => theme("conicGradientPositions"), // defaults to this value
    repeatingConicGradientColors: {
      // defaults to {}
      red: "#f00",
      "red-blue": ["#f00", "#00f"],
      "red-green-blue": ["#f00", "#0f0", "#00f"],
      starburst: ["white 0 5deg", "blue 5deg"],
    },
    repeatingConicGradientLengths: {
      // defaults to {}
      sm: "10deg",
      md: "20deg",
      lg: "40deg",
    },
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require("tailwindcss-gradients")
  ],
}
