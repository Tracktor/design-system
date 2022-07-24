import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import { getFiles } from "./scripts/buildUtils";

const extensions = [".js", ".ts", ".jsx", ".tsx"];

export default {
  external: ["react", "react-dom"],
  input: ["./src/index.ts", ...getFiles("./src/components", extensions)],
  output: {
    dir: "dist",
    format: "esm",
    preserveModules: true,
    preserveModulesRoot: "src",
  },
  plugins: [
    resolve(),
    commonjs(),
    external(),
    terser(),
    postcss({ modules: true }),
    typescript({
      declaration: true,
      declarationDir: "dist",
      tsconfig: "./tsconfig.build.json",
    }),
  ],
};
