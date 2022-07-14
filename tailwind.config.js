function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
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
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        8: "8px",
      },
      boxShadow: {
        avatar: `0 0 0px 1px rgb(23 146 255 / 0.6), 0 0 0px 3px rgb(23 146 255 / 0.2), 0 0 0px 5px rgb(23 146 255 / 0.2)`,
      },
      colors: {
        blue: {
          100: withOpacityValue("--color-blue-100"),
          200: withOpacityValue("--color-blue-200"),
          300: withOpacityValue("--color-blue-300"),
          400: withOpacityValue("--color-blue-400"),
          500: withOpacityValue("--color-blue-500"),
          600: withOpacityValue("--color-blue-600"),
          700: withOpacityValue("--color-blue-700"),
          800: withOpacityValue("--color-blue-800"),
          900: withOpacityValue("--color-blue-900"),
          DEFAULT: withOpacityValue("--color-blue-300"),
        },
        purple: {
          100: withOpacityValue("--color-purple-100"),
          200: withOpacityValue("--color-purple-200"),
          300: withOpacityValue("--color-purple-300"),
          400: withOpacityValue("--color-purple-400"),
          500: withOpacityValue("--color-purple-500"),
          600: withOpacityValue("--color-purple-600"),
          700: withOpacityValue("--color-purple-700"),
          800: withOpacityValue("--color-purple-800"),
          900: withOpacityValue("--color-purple-900"),
          DEFAULT: withOpacityValue("--color-purple-300"),
        },
        red: {
          100: withOpacityValue("--color-red-100"),
          200: withOpacityValue("--color-red-200"),
          300: withOpacityValue("--color-red-300"),
          400: withOpacityValue("--color-red-400"),
          500: withOpacityValue("--color-red-500"),
          600: withOpacityValue("--color-red-600"),
          700: withOpacityValue("--color-red-700"),
          800: withOpacityValue("--color-red-800"),
          900: withOpacityValue("--color-red-900"),
          DEFAULT: withOpacityValue("--color-red-300"),
        },
        green: {
          100: withOpacityValue("--color-green-100"),
          200: withOpacityValue("--color-green-200"),
          300: withOpacityValue("--color-green-300"),
          400: withOpacityValue("--color-green-400"),
          500: withOpacityValue("--color-green-500"),
          600: withOpacityValue("--color-green-600"),
          700: withOpacityValue("--color-green-700"),
          800: withOpacityValue("--color-green-800"),
          900: withOpacityValue("--color-green-900"),
          DEFAULT: withOpacityValue("--color-green-300"),
        },
        yellow: {
          100: withOpacityValue("--color-yellow-100"),
          200: withOpacityValue("--color-yellow-200"),
          300: withOpacityValue("--color-yellow-300"),
          400: withOpacityValue("--color-yellow-400"),
          500: withOpacityValue("--color-yellow-500"),
          600: withOpacityValue("--color-yellow-600"),
          700: withOpacityValue("--color-yellow-700"),
          800: withOpacityValue("--color-yellow-800"),
          900: withOpacityValue("--color-yellow-900"),
          DEFAULT: withOpacityValue("--color-yellow-300"),
        },
        purple: {
          100: withOpacityValue("--color-purple-100"),
          200: withOpacityValue("--color-purple-200"),
          300: withOpacityValue("--color-purple-300"),
          400: withOpacityValue("--color-purple-400"),
          500: withOpacityValue("--color-purple-500"),
          600: withOpacityValue("--color-purple-600"),
          700: withOpacityValue("--color-purple-700"),
          800: withOpacityValue("--color-purple-800"),
          900: withOpacityValue("--color-purple-900"),
          DEFAULT: withOpacityValue("--color-purple-700"),
        },
        orange: {
          100: withOpacityValue("--color-orange-100"),
          200: withOpacityValue("--color-orange-200"),
          300: withOpacityValue("--color-orange-300"),
          400: withOpacityValue("--color-orange-400"),
          500: withOpacityValue("--color-orange-500"),
          600: withOpacityValue("--color-orange-600"),
          700: withOpacityValue("--color-orange-700"),
          800: withOpacityValue("--color-orange-800"),
          900: withOpacityValue("--color-orange-900"),
          DEFAULT: withOpacityValue("--color-orange-700"),
        },
        teal: {
          100: withOpacityValue("--color-teal-100"),
          200: withOpacityValue("--color-teal-200"),
          300: withOpacityValue("--color-teal-300"),
          400: withOpacityValue("--color-teal-400"),
          500: withOpacityValue("--color-teal-500"),
          600: withOpacityValue("--color-teal-600"),
          700: withOpacityValue("--color-teal-700"),
          800: withOpacityValue("--color-teal-800"),
          900: withOpacityValue("--color-teal-900"),
          DEFAULT: withOpacityValue("--color-teal-700"),
        },
        gray: {
          100: withOpacityValue("--color-gray-100"),
          200: withOpacityValue("--color-gray-200"),
          300: withOpacityValue("--color-gray-300"),
          400: withOpacityValue("--color-gray-400"),
          500: withOpacityValue("--color-gray-500"),
          600: withOpacityValue("--color-gray-600"),
          700: withOpacityValue("--color-gray-700"),
          800: withOpacityValue("--color-gray-800"),
          900: withOpacityValue("--color-gray-900"),
          DEFAULT: withOpacityValue("--color-gray-700"),
        },
        primary: {
          light: withOpacityValue("--color-primary-light"),
          DEFAULT: withOpacityValue("--color-primary-light"),
          dark: withOpacityValue("--color-primary-dark"),
          gray: withOpacityValue("--color-gray-700"),
        },
        secondary: {
          purple: withOpacityValue("--color-purple-300"),
          reg: withOpacityValue("--color-reg-300"),
          green: withOpacityValue("--color-green-300"),
          gray: withOpacityValue("--color-gray-800"),
        },
        input: {
          primary: withOpacityValue("--color-input-primary"),
          focused: withOpacityValue("--color-input-focused"),
          DEFAULT: withOpacityValue("--color-input-primary"),
        },
      },
      textColor: {
        skin: {
          primary: withOpacityValue("--color-text-primary"),
          "primary-muted": withOpacityValue("--color-text-primary-muted"),
          secondary: withOpacityValue("--color-text-secondary"),
          "secondary-muted": withOpacityValue("--color-text-secondary-muted"),
          subtle: withOpacityValue("--color-text-subtle"),
          "subtle-muted": withOpacityValue("--color-text-subtle-muted"),
          inverted: withOpacityValue("--color-text-inverted"),
          "inverted-muted": withOpacityValue("--color-text-inverted-muted"),
        },
      },
      backgroundColor: {
        skin: {
          primary: withOpacityValue("--color-fill-primary"),
          "primary-muted": withOpacityValue("--color-fill-primary-muted"),
          secondary: withOpacityValue("--color-fill-secondary"),
          "secondary-muted": withOpacityValue("--color-fill-secondary-muted"),
          subtle: withOpacityValue("--color-fill-subtle"),
          "subtle-muted": withOpacityValue("--color-fill-subtle-muted"),
          transparent: withOpacityValue("--color-fill-transparent"),
          "transparent-muted": withOpacityValue(
            "--color-fill-transparent-muted"
          ),
          inverted: withOpacityValue("--color-fill-inverted"),
          "inverted-muted": withOpacityValue("--color-fill-inverted-muted"),
        },
      },
    },
  },
};
