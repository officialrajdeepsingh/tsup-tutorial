import { defineConfig } from "tsup";
import tsconfig from "./tsconfig.json";

export default defineConfig({
  entry: [
    "src/index.tsx",
    "src/Button.tsx",
    "src/Headings.tsx",
    "src/Icons.tsx",
  ],
  dts: true,
  format: ["esm", "cjs"],
  name: "tsup-tutorial",
  splitting: false,
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
  sourcemap: true,
  clean: true,
  target: tsconfig.compilerOptions.target as "es2016",
});
