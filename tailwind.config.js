var colors = {
  blue: {
    100: "rgb(99, 182, 255)",
    200: "rgb(61, 164, 255)",
    300: "rgb(23, 146, 255)",
    400: "rgb(14, 128, 244)",
    500: "rgb(4, 109, 232)",
    600: "rgb(2, 96, 207)",
    700: "rgb(0, 83, 181)",
  },
  purple: {
    100: "rgb(186, 153, 255)",
    200: "rgb(168, 127, 254)",
    300: "rgb(150, 101, 253)",
    400: "rgb(135, 85, 240)",
    500: "rgb(119, 68, 227)",
  },
  red: {
    200: "rgb(255, 99, 143)",
    300: "rgb(255, 40, 102)",
    400: "rgb(194, 0, 55)",
  },
  green: {
    200: "rgb(105, 206, 189)",
    300: "rgb(20, 182, 154)",
    400: "rgb(0, 156, 130)",
  },
  gray: {
    200: "rgb(246, 245, 250)",
    300: "rgb(209, 206, 215)",
    400: "rgb(171, 167, 180)",
    500: "rgb(133, 128, 144)",
    600: "rgb(95, 89, 109)",
    700: "rgb(58, 50, 74)",
    800: "rgb(30, 26, 39)",
  },
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /^(.*?)/,
      variants: ["lg", "hover", "focus", "lg:hover", "opacity"],
    },
  ],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        transparent: "trasnparent",
        white: "#fff",
        neutrals1: "#1A1A1A",
        neutrals2: "#23262F",
        neutrals3: "#353945",
        neatrals4: "#777E90",
        neutrals5: "#B1B5C3",
        neutrals6: "#E6E8EC",
        neutrals7: "#F4F5F6",
        neutrals8: "#FCFCFD",
        blue: colors.blue,
        purple: colors.purple,
        red: colors.red,
        green: colors.green,
        gray: colors.gray,
        primaryLight: colors.blue[300],
        primaryDark: colors.blue[500],
        primaryGray: colors.gray[700],
        secondaryPurple: colors.purple[300],
        secondaryGray: colors.gray[800],
        tertiaryGreen: colors.green[300],
        tertiaryRed: colors.red[300],
      },
      textColor: {
        skin: {
          primary: "var(--color-text)",
          muted: "var(--color-text-muted)",
          secondary: "var(--color-text-secondary)",
          'secondary-muted': "var(--color-text-secondary-muted)",
        },
      },
      backgroundColor: {
        skin: {
          primary: "var(--color-fill)",
          highlight: "var(--color-fill-highlight)",
          muted: ({opacityValue}) => {
            if (opacityValue === undefined) return "var(--color-fill-muted)";
            return `rgba(var(--color-fill-muted), ${opacityValue})`;
          },
          secondary: "var(--color-fill-secondary)",
          'secondary-muted': "var(--color-fill-secondary-muted)",
        },
      },
      borderColor: {
        skin: {
          primary: "var(--color-border)",
          highlight: "var(--color-border-highlight)",
          muted: ({opacityValue}) => {
            if (opacityValue === undefined) return "var(--color-border-muted)";
            return `rgba(var(--color-border-muted), ${opacityValue})`;
          },
          secondary: "var(--color-border-secondary)",
          'secondary-muted': "var(--color-border-secondary-muted)",
        },
      },
    },
  },
};
