import type { OxlintConfig } from "oxlint";

export const react: OxlintConfig = {
  plugins: ["react", "jsx-a11y"],
  rules: {
    // =======
    // React / Error
    // =======
    "react/no-danger": "error",
    "react/no-multi-comp": ["error", { ignoreStateless: true }],
    "react/no-this-in-sfc": "error",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",
    "react/jsx-filename-extension": "error",

    // =======
    // React / Warn
    // =======
    "react/self-closing-comp": "warn",
    "react/jsx-boolean-value": "warn",
    "react/jsx-curly-brace-presence": [
      "warn",
      { props: "never", children: "never" },
    ],
    "react/jsx-pascal-case": ["warn", { allowAllCaps: true }],
    "react/jsx-no-useless-fragment": "warn",

    // =======
    // jsx-a11y
    // =======

    "jsx-a11y/no-noninteractive-tabindex": [
      "error",
      { tags: [], roles: ["dialog", "tabpanel"] },
    ],
    "jsx-a11y/no-static-element-interactions": [
      "error",
      {
        handlers: [
          "onClick",
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp",
        ],
      },
    ],

    // Disable rules from jsx-a11y recommended that don't fit our patterns
    "jsx-a11y/no-redundant-roles": "off",
    "jsx-a11y/click-events-have-key-events": "off",
  },
};
