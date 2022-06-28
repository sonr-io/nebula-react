import svgr from "@svgr/rollup";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import {terser} from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

const config = {
  input: "./src/components/index.ts",
  output: [
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
  ],
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      
    }),
    svgr({
      icon: true,
    }),
    postcss({
      plugins: [require("tailwindcss"), require("autoprefixer")],
      minimize: true,
      extract: resolve('dist/app.css')
    }),
    peerDepsExternal(),
    resolve(),
    terser(),
  ],
};

export default config;
