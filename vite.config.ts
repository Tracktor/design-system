import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      fileName: "[name]",
      formats: ["es"],
      name: "design-system",
    },
    minify: "esbuild",
    outDir: "lib",
    rollupOptions: {
      external: ["react", "react-dom", "@mui/material", "@mui/icons-material", "@emotion/styled", "@emotion/react"],
      output: {
        esModule: false,
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        preserveModules: true,
        preserveModulesRoot: "src",
        // manualChunks: (id, GetManualChunkApi) => {
        //   console.log(GetManualChunkApi);
        //
        //   if (id.includes("node_modules")) {
        //     if (id.includes("@mui/material")) return "vendor_mui_material";
        //     if (id.includes("@mui/icons-material")) return "vendor_mui_icons_material";
        //     if (id.includes("@emotion/styled")) return "vendor_emotion_styled";
        //     if (id.includes("@emotion/styled")) return "vendor_emotion_react";
        //     return "vendor";
        //   }
        //   return null;
        // },
      },
    },
  },
  plugins: [react(), dts()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
