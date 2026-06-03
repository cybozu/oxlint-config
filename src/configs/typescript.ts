import type { OxlintConfig } from "oxlint";

const tsFiles = ["**/*.{ts,cts,mts,tsx}"];

export const typescript: OxlintConfig = {
  overrides: [
    // Disable base ESLint rules that the TypeScript compiler already handles.
    {
      files: tsFiles,
      rules: {
        "constructor-super": "off",
        "getter-return": "off",
        "no-class-assign": "off",
        "no-const-assign": "off",
        "no-dupe-class-members": "off",
        "no-dupe-keys": "off",
        "no-func-assign": "off",
        "no-import-assign": "off",
        "no-new-native-nonconstructor": "off",
        "no-obj-calls": "off",
        "no-redeclare": "off",
        "no-setter-return": "off",
        "no-this-before-super": "off",
        "no-unreachable": "off",
        "no-unsafe-negation": "off",
        "no-with": "off",
      },
    },
    // Cybozu TypeScript rules
    // (Based on typescript-eslint recommended, adjusted to Cybozu's policy.)
    {
      files: tsFiles,
      plugins: ["typescript"],
      rules: {
        // Core rules: off because the TypeScript plugin version is used instead.
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
        // Core rules: kept enabled.
        "no-array-constructor": "error",
        "no-empty-function": "error",
        "no-loss-of-precision": "error",
        "no-shadow": "error",
        "no-useless-constructor": "warn",
        "no-var": "error",
        "prefer-const": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        // typescript plugin: error
        "typescript/adjacent-overload-signatures": "error",
        "typescript/array-type": ["error", { default: "array-simple" }],
        "typescript/no-empty-object-type": "error",
        "typescript/no-extra-non-null-assertion": "error",
        "typescript/no-misused-new": "error",
        "typescript/no-namespace": "error",
        "typescript/no-non-null-asserted-optional-chain": "error",
        "typescript/no-this-alias": "error",
        "typescript/no-unnecessary-type-constraint": "error",
        "typescript/no-unsafe-function-type": "error",
        "typescript/no-wrapper-object-types": "error",
        "typescript/prefer-as-const": "error",
        "typescript/triple-slash-reference": "error",
        // typescript plugin: warn
        "typescript/no-non-null-assertion": "warn",
        "typescript/unified-signatures": "warn",
        // typescript plugin: warn (type-aware; requires `options.typeAware`)
        "typescript/consistent-return": "warn",
        "typescript/dot-notation": "warn",
        // typescript plugin: off (excluded from recommended per Cybozu's policy).
        "typescript/ban-ts-comment": "off",
        "typescript/ban-tslint-comment": "off",
        "typescript/class-literal-property-style": "off",
        "typescript/consistent-generic-constructors": "off",
        "typescript/consistent-indexed-object-style": "off",
        "typescript/consistent-type-assertions": "off",
        "typescript/consistent-type-definitions": "off",
        "typescript/explicit-member-accessibility": "off",
        "typescript/no-confusing-non-null-assertion": "off",
        "typescript/no-duplicate-enum-values": "off",
        "typescript/no-empty-interface": "off",
        "typescript/no-explicit-any": "off",
        "typescript/no-inferrable-types": "off",
        "typescript/no-require-imports": "off",
        "typescript/no-unsafe-declaration-merging": "off",
        "typescript/prefer-for-of": "off",
        "typescript/prefer-function-type": "off",
        "typescript/prefer-namespace-keyword": "off",
      },
    },
  ],
};
