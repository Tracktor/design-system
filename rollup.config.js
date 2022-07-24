import fs from "fs";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const getFiles = (entry, extensions = [], excludeExtensions = []) => {
  let fileNames = [];
  const dirs = fs.readdirSync(entry);

  dirs.forEach((dir) => {
    const path = `${entry}/${dir}`;

    if (fs.lstatSync(path).isDirectory()) {
      fileNames = [...fileNames, ...getFiles(path, extensions, excludeExtensions)];

      return;
    }

    if (!excludeExtensions.some((exclude) => dir.endsWith(exclude)) && extensions.some((ext) => dir.endsWith(ext))) {
      fileNames.push(path);
    }
  });

  return fileNames;
};

export default {
  external: ["react", "react-dom"],
  input: ["./src/index.ts", ...getFiles("./src/components", [".ts", ".tsx"])],
  output: {
    dir: "lib",
    format: "esm",
    preserveModules: true,
    preserveModulesRoot: "src",
  },
  plugins: [
    external(),
    resolve(),
    commonjs(),
    terser(),
    postcss({ modules: true }),
    typescript({
      declaration: true,
      declarationDir: "lib",
      tsconfig: "./tsconfig.build.json",
    }),
  ],
};
