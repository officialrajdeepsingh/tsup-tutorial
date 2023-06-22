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
  outExtension: () => ({ js: ".js" }),
  target: tsconfig.compilerOptions.target as "es2016",
});
