import type { OxlintConfig } from "oxlint";

export const base: OxlintConfig = {
  plugins: ["eslint", "import"],
  env: {
    browser: true,
    es2024: true,
  },
  rules: {
    // =======
    // Error
    // =======

    // Possible Problems
    "eslint/no-self-compare": "error",
    "eslint/no-unused-vars": ["error", { vars: "local", args: "none" }],
    // TODO: "eslint/require-atomic-updates" not supported by oxlint
    "eslint/valid-typeof": ["error", { requireStringLiterals: true }],

    // Suggestions
    "eslint/default-param-last": "error",
    "eslint/no-caller": "error",
    "eslint/no-eval": "error",
    "eslint/no-extend-native": "error",
    // TODO: "eslint/no-implicit-globals" not supported by oxlint
    // TODO: "eslint/no-implied-eval" not supported by oxlint
    "eslint/no-iterator": "error",
    "eslint/no-label-var": "error",
    "eslint/no-lone-blocks": "error",
    "eslint/no-new-func": "error",
    "eslint/no-new-wrappers": "error",
    "eslint/no-object-constructor": "error",
    // TODO: "eslint/no-octal-escape" not supported by oxlint
    "eslint/no-proto": "error",
    "eslint/no-return-assign": "error",
    "eslint/no-sequences": "error",
    "eslint/no-shadow": "error",
    "eslint/no-throw-literal": "error",
    "eslint/no-unused-expressions": [
      "error",
      { allowShortCircuit: true, allowTernary: true },
    ],
    "eslint/no-useless-computed-key": "error",
    "eslint/no-useless-concat": "error",
    "eslint/no-useless-rename": "error",
    "eslint/no-var": "error",
    "eslint/no-void": "error",
    "eslint/prefer-numeric-literals": "error",
    // TODO: "eslint/prefer-regex-literals" not supported by oxlint
    "eslint/prefer-rest-params": "error",
    "eslint/radix": "error",
    "eslint/symbol-description": "error",

    // =======
    // Warn
    // =======

    // Possible Problems
    "eslint/array-callback-return": "warn",
    "eslint/no-inner-declarations": "warn",
    "eslint/no-template-curly-in-string": "warn",
    "eslint/no-unmodified-loop-condition": "warn",

    // Suggestions
    "eslint/block-scoped-var": "warn",
    // TODO: "eslint/consistent-return" not supported by oxlint
    "eslint/curly": ["warn", "multi-line"],
    // TODO: "eslint/dot-notation" not supported by oxlint
    "eslint/eqeqeq": ["warn", "always", { null: "ignore" }],
    "eslint/guard-for-in": "warn",
    "eslint/max-depth": "warn",
    "eslint/max-nested-callbacks": ["warn", 5],
    "eslint/max-params": ["warn", 7],
    "eslint/max-statements": ["warn", 40],
    "eslint/new-cap": ["warn", { capIsNewExceptions: ["Deferred"] }],
    "eslint/no-array-constructor": "warn",
    "eslint/no-div-regex": "warn",
    "eslint/no-else-return": "warn",
    "eslint/no-empty-function": [
      "warn",
      { allow: ["arrowFunctions", "functions", "methods"] },
    ],
    "eslint/no-extra-label": "warn",
    // TODO: "eslint/no-invalid-this" not supported by oxlint
    "eslint/no-lonely-if": "warn",
    "eslint/no-loop-func": "warn",
    "eslint/no-multi-str": "warn",
    "eslint/no-nested-ternary": "warn",
    "eslint/no-param-reassign": "warn",
    "eslint/no-script-url": "warn",
    // TODO: "eslint/no-undef-init" not supported by oxlint
    "eslint/no-unneeded-ternary": "warn",
    "eslint/no-useless-call": "warn",
    "eslint/no-useless-constructor": "warn",
    "eslint/no-useless-return": "warn",
    "eslint/operator-assignment": "warn",
    // TODO: "eslint/prefer-arrow-callback" not supported by oxlint
    "eslint/prefer-const": [
      "warn",
      { destructuring: "all", ignoreReadBeforeAssign: true },
    ],
    "eslint/prefer-spread": "warn",
    "eslint/vars-on-top": "warn",
    "eslint/yoda": "warn",

    // import plugin
    "import/no-duplicates": "warn",
  },
};
