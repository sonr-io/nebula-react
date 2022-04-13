import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';

const config = {
  input: './src/components/index.ts',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [babel({ 
      presets: ['@babel/preset-react'], 
      babelHelpers: 'bundled',
    }),
    typescript({ tsconfig: './tsconfig.json' }),
    url(),
    svgr({icon: true})
    ]
};

export default config;