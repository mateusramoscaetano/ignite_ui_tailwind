import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "MyReactComponents",
      fileName: (format) => `my-react-components.${format}.js`,
    },
  },
});
