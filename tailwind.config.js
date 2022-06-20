function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
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
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '8': '8px',
      },
      boxShadow: {
        'avatar': `0 0 0px 1px rgb(23 146 255 / 0.6), 0 0 0px 3px rgb(23 146 255 / 0.2), 0 0 0px 5px rgb(23 146 255 / 0.2)`,
      },
      colors: {
        blue: {
          100: withOpacityValue('--color-blue-100'),
          200: withOpacityValue('--color-blue-200'),
          300: withOpacityValue('--color-blue-300'),
          400: withOpacityValue('--color-blue-400'),
          500: withOpacityValue('--color-blue-500'),
          600: withOpacityValue('--color-blue-600'),
          700: withOpacityValue('--color-blue-700'),
          DEFAULT: withOpacityValue('--color-blue-300'),
        },
        purple: {
          100: withOpacityValue('--color-purple-100'),
          200: withOpacityValue('--color-purple-200'),
          300: withOpacityValue('--color-purple-300'),
          400: withOpacityValue('--color-purple-400'),
          500: withOpacityValue('--color-purple-500'),
          DEFAULT: withOpacityValue('--color-purple-300'),
        },
        red: {
          200: withOpacityValue('--color-red-200'),
          300: withOpacityValue('--color-red-300'),
          400: withOpacityValue('--color-red-400'),
          DEFAULT: withOpacityValue('--color-red-300'),
        },
        green: {
          200: withOpacityValue('--color-green-200'),
          300: withOpacityValue('--color-green-300'),
          400: withOpacityValue('--color-green-400'),
          DEFAULT: withOpacityValue('--color-green-300'),
        },
        gray: {
          200: withOpacityValue('--color-gray-200'),
          300: withOpacityValue('--color-gray-300'),
          400: withOpacityValue('--color-gray-400'),
          500: withOpacityValue('--color-gray-500'),
          600: withOpacityValue('--color-gray-600'),
          700: withOpacityValue('--color-gray-700'),
          800: withOpacityValue('--color-gray-800'),
          DEFAULT: withOpacityValue('--color-gray-700'),
        },
        primary: {
          light: withOpacityValue('--color-primary-light'),
          DEFAULT: withOpacityValue('--color-primary-light'),
          dark: withOpacityValue('--color-primary-dark'),
          gray: withOpacityValue('--color-gray-700'),
        },
        secondary: {
          purple: withOpacityValue('--color-purple-300'),
          reg: withOpacityValue('--color-reg-300'),
          green: withOpacityValue('--color-green-300'),
          gray: withOpacityValue('--color-gray-800'),
        },
        input: {
          primary: withOpacityValue('--color-input-primary'),
          focused: withOpacityValue('--color-input-focused'),
          DEFAULT: withOpacityValue('--color-input-primary'),
        }
      },
      textColor: {
        skin: {
          primary: withOpacityValue('--color-text-primary'),
          'primary-muted': withOpacityValue('--color-text-primary-muted'),
          secondary: withOpacityValue("--color-text-secondary"),
          'secondary-muted': withOpacityValue('--color-text-secondary-muted'),
          subtle: withOpacityValue("--color-text-subtle"),
          'subtle-muted': withOpacityValue('--color-text-subtle-muted'),
          inverted: withOpacityValue("--color-text-inverted"),
          'inverted-muted': withOpacityValue('--color-text-inverted-muted'),
        },
      },
      backgroundColor: {
        skin: {
          primary: withOpacityValue('--color-fill-primary'),
          'primary-muted': withOpacityValue('--color-fill-primary-muted'),
          secondary: withOpacityValue("--color-fill-secondary"),
          'secondary-muted': withOpacityValue('--color-fill-secondary-muted'),
          subtle: withOpacityValue("--color-fill-subtle"),
          'subtle-muted': withOpacityValue('--color-fill-subtle-muted'),
          transparent: withOpacityValue("--color-fill-transparent"),
          'transparent-muted': withOpacityValue('--color-fill-transparent-muted'),
          inverted: withOpacityValue("--color-fill-inverted"),
          'inverted-muted': withOpacityValue('--color-fill-inverted-muted'),
        },
      }
    },
  },
};
