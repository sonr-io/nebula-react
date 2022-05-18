import typescript from "@rollup/plugin-typescript";
import svgr from "@svgr/rollup";
import postcss from "rollup-plugin-postcss";
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
    postcss(),
    peerDepsExternal(),
  ],
};

export default config;
