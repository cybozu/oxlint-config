import type { OxlintConfig } from "oxlint";

export const typescript: OxlintConfig = {
  plugins: ["typescript"],
  rules: {
    // =======
    // Error
    // =======
    "typescript/array-type": ["error", { default: "array-simple" }],

    // Extension rules: override base eslint rules with TypeScript equivalents
    "eslint/no-shadow": "off",
    "typescript/no-shadow": "error",
    "eslint/no-unused-vars": "off",
    "typescript/no-unused-vars": ["error", { vars: "local", args: "none" }],
    "eslint/no-unused-expressions": "off",
    "typescript/no-unused-expressions": [
      "error",
      { allowShortCircuit: true, allowTernary: true },
    ],

    // =======
    // Warn
    // =======
    "typescript/unified-signatures": "warn",
    "typescript/no-non-null-assertion": "warn",

    // Extension rule
    "eslint/no-useless-constructor": "off",
    "typescript/no-useless-constructor": "warn",

    // =======
    // Off — rules from typescript-eslint recommended/stylistic that we disable
    // =======
    "typescript/ban-ts-comment": "off",
    "typescript/no-require-imports": "off",
    "typescript/class-literal-property-style": "off",
    "typescript/consistent-generic-constructors": "off",
    "typescript/consistent-indexed-object-style": "off",
    "typescript/consistent-type-definitions": "off",
    "typescript/no-inferrable-types": "off",
    "typescript/prefer-for-of": "off",
  },
};
