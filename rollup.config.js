import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import packageJson from "./package.json";

export default [
  {
    input: ["src/components/test.ts"],
    output: [
      {
        dir: "dist/esm",
        format: "esm",
        name: "test",
      },
      {
        dir: "dist/cjs",
        format: "cjs",
        name: "test",
      },
    ],
  },
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        name: "design-system",
      },
      {
        file: packageJson.module,
        format: "esm",
      },
    ],
    plugins: [
      typescript({ tsconfig: "./tsconfig.json" }),
      external(),
      resolve(),
      commonjs(),
      terser(),
      postcss({
        modules: true,
        plugins: [],
      }),
    ],
  },
  {
    external: [/\.css$/],
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
