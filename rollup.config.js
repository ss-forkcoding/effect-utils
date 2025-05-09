import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";

export default {
  input: { index: "src/index.ts", "array-utils": "src/array-utils.ts", "condition-utils": "src/condition-utils.ts" }, // 엔트리 파일
  output: [
    {
      dir: "dist",
      entryFileNames: "[name].cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      dir: "dist",
      entryFileNames: "[name].esm.js",
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // Node 모듈을 번들링
    commonjs(), // CommonJS 모듈을 ES 모듈로 변환
    typescript(), // TypeScript 변환
    terser(), // 코드 압축 및 난독화
  ],
};
