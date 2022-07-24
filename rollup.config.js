import path from "node:path";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import packageJson from "./package.json";

export default [
  {
    input: path.resolve(__dirname, "src/components/Button/index.ts"),
    output: {
      dir: "dist/components/Button",
    },
    plugins: [],
  },
  {
    input: "src/index.ts",
    output: {
      file: packageJson.module,
      format: "es",
    },
    plugins: [
      typescript({ tsconfig: "./tsconfig.json" }),
      external(),
      resolve(),
      terser(),
      postcss({
        modules: true,
        plugins: [],
      }),
    ],
  },
  // {
  //   external: [/\.css$/],
  //   input: "dist/types/index.d.ts",
  //   output: [{ file: "dist/index.d.ts", format: "esm" }],
  //   plugins: [dts()],
  // },
];
