import { defineConfig } from "tsup";
import tsconfig from "./tsconfig.json";


export default defineConfig((options) => ({
  entry: [
    "src/index.tsx",
    "src/Button.tsx",
    "src/Headings.tsx",
    "src/Icons.tsx",
    "style.css"
  ],

// remove the generate the dts on style.css   
  dts:{
    entry: [
      "src/index.tsx",
      "src/Button.tsx",
      "src/Headings.tsx",
      "src/Icons.tsx"
    ]
  },
  outDir: "dist",
  format: ["esm", "cjs"],
  name: "tsup-tutorial",
  splitting: true,
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    }
  },
  sourcemap: false,
  clean: true,

  // target: tsconfig.compilerOptions.target as "es2016",
  target: ['es2020'],

  /* 
  
 > target the javascript version
 target: 'es2018',
 
 > target the chrome version
 target: "chrome58",
 
 > combine the browser and javascript version
 target: [ 'es2020', 'chrome58', 'edge16', 'firefox57', 'node12', 'safari11',],
  
 */

 //  minify: false, without Conditional
   minify: !options.watch
}));
