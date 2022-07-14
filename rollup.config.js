import path from "path";
import svgr from "@svgr/rollup";
import url from "rollup-plugin-url";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

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
    url({
      sourceDir: path.join(__dirname, "src", "assets"),
    }),
    svgr({ icon: true }),
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
