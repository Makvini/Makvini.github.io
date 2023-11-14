import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  assetsInclude: ["./new-assets/badge.png"],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: `assets/[name].[ext]`,
      },
      input: {
        main: resolve(__dirname, "index.html"),
        membership: resolve(__dirname, "membership.html"),
        contractors: resolve(__dirname, "contractors.html"),
      },
    },
  },
});
