import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import reactSvg from "rollup-plugin-react-svg";

const packageJson = require("./package.json");

const config = {
  input: "./src/index.ts",
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
    reactSvg({
      // svgo options
      svgo: {
        plugins: [], // passed to svgo
        multipass: true,
      },

      // whether to output jsx
      jsx: false,

      include: null,

      exclude: null,
    }),
    peerDepsExternal(),
    resolve(),
    postcss({
      plugins: [require("tailwindcss"), require("autoprefixer")],
      minimize: true,
      extract: resolve("dist/app.css"),
    }),
    terser(),
  ],
};

export default config;
