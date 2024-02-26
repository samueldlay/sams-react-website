import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import gfm from "remark-gfm"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mdx({ remarkPlugins: [gfm] }),
    react()
  ],
  build: {
    outDir: "docs"
  }
});
