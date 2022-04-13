import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import svg from 'rollup-plugin-svg-import';

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
    svg()
    ]
};

export default config;