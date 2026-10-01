import { defineConfig } from "oxlint";
import { reactCompiler } from "../configs/react-compiler.ts";

// Add-on preset: enables the React Compiler lint rules.
// It does not include `base`, so extend it together with a react preset:
//
//   import reactTypescript from "@cybozu/oxlint-config/presets/react-typescript";
//   import reactCompiler from "@cybozu/oxlint-config/presets/react-compiler";
//   export default defineConfig({ extends: [reactTypescript, reactCompiler] });
export default defineConfig({
  extends: [reactCompiler],
});
