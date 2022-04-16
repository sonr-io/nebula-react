import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from '@rollup/plugin-node-resolve';

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
    }
  ],
  plugins: [
    babel({ 
      presets: ['@babel/preset-react'], 
      babelHelpers: 'bundled',
    }),
    typescript({ 
      tsconfig: './tsconfig.json'
    }),
    url(),
    svgr({
      icon: true
    }),
    postcss(),
    peerDepsExternal(),
    nodeResolve()
  ]
};

export default config;