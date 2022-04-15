module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],  
    theme: {
      colors: {
        'transparent': 'trasnparent',
        'white': '#fff',
        'primaryLight': {  DEFAULT: '#1792FF',  '50': '#CFE8FF',  '100': '#BADFFF',  '200': '#91CCFF',  '300': '#69B8FF',  '400': '#40A5FF',  '500': '#1792FF',  '600': '#0076DE',  '700': '#0058A6',  '800': '#003A6E',  '900': '#001C36'},
        'primaryDark': {  DEFAULT: '#046DE8',  '50': '#A6CEFD',  '100': '#92C3FD',  '200': '#6AADFC',  '300': '#4297FC',  '400': '#1A82FB',  '500': '#046DE8',  '600': '#0353B1',  '700': '#02397A',  '800': '#011F43',  '900': '#00050B'},
        'secondary': {  DEFAULT: '#9665FD',  '50': '#FFFFFF',  '100': '#FFFFFF',  '200': '#E8DEFF',  '300': '#CDB6FE',  '400': '#B18DFE',  '500': '#9665FD',  '600': '#702EFC',  '700': '#4F03EF',  '800': '#3D02B7',  '900': '#2A0280'},
        'error': {  DEFAULT: '#FF2866',  '50': '#FFE0E9',  '100': '#FFCBDA',  '200': '#FFA2BD',  '300': '#FF7AA0',  '400': '#FF5183',  '500': '#FF2866',  '600': '#EF0045',  '700': '#B70035',  '800': '#7F0025',  '900': '#470014'},
        'success': {  DEFAULT: '#14B69A',  '50': '#8FF3E1',  '100': '#7DF1DD',  '200': '#58EDD3',  '300': '#33E9C9',  '400': '#18DBB9',  '500': '#14B69A',  '600': '#0E836F',  '700': '#095144',  '800': '#031E1A',  '900': '#000000'},
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      postcss: {
        plugins: [
        require('tailwindcss'), 
        require('autoprefixer')
        ]
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  }