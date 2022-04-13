import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
const packageJson = require('./package.json');

const config = {
  input: './src/components/index.ts',
  output:[
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
    {
      dir: 'output',
      format: 'cjs'
    },
  ],
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