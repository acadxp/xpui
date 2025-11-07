import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      include: ["src/**/*"],
      exclude: ["src/**/*.stories.*", "src/**/*.test.*"],
      tsconfigPath: "./tsconfig.build.json",
    }),
  ],
  build: {
    outDir: "dist",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "xpui",
      formats: ["es", "umd"],
      fileName: (format) => `xpui.${format === "es" ? "js" : "umd.cjs"}`,
    },
  },
});
