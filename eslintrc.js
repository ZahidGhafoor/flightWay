// {
//   "root": true,
//   "env": {
//     "browser": true,
//     "node": true,
//     "es2021": true
//   },
//   "extends": [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:react-hooks/recommended",
//     "next/core-web-vitals"
//   ],
//   "plugins": ["react", "react-hooks", "simple-import-sort"],
//   "parserOptions": {
//     "ecmaVersion": 12,
//     "sourceType": "module",
//     "ecmaFeatures": {
//       "jsx": true
//     }
//   },
//   "rules": {
//     // React specific rules
//     "react/prop-types": "off", // If you're using TypeScript, you can turn this off
//     "react/react-in-jsx-scope": "off", // Next.js handles React import automatically
//     "react/jsx-uses-react": "off", // For React 17+ where import React is not needed

//     // General rules
//     "no-console": "warn", // Warn instead of error for console logs
//     "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }], // Ignore unused variables starting with "_"
//     "no-debugger": "warn", // Warn instead of error for debugger statements

//     // Code style rules
//     "indent": ["error", 2],
//     "quotes": ["error", "single"],
//     "semi": ["error", "always"],

//     // Sorting imports
//     "simple-import-sort/imports": "error",
//     "simple-import-sort/exports": "error"
//   },
//   "overrides": [
//     {
//       "files": ["*.ts", "*.tsx"],
//       "parserOptions": {
//         "project": "./tsconfig.json"
//       },
//       "extends": [
//         "plugin:@typescript-eslint/recommended",
//         "next/core-web-vitals"
//       ],
//       "plugins": ["@typescript-eslint"],
//       "rules": {
//         // TypeScript specific rules
//         "@typescript-eslint/no-explicit-any": "warn", // Warning for usage of 'any'
//         "@typescript-eslint/explicit-module-boundary-types": "off" // Turn off if you don't want to require return types for functions
//       }
//     }
//   ]
// }

module.exports = {
  extends: ["airbnb"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      js: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    // 'import/prefer-default-export': ['off', { target: 'single' }]
    "linebreak-style": 0,
    // curly: 'off',
    // 'nonblock-statement-body-position': 'off',
    "jsx-a11y/label-has-associated-control": "off",
    "react/jsx-wrap-multilines": "off",
    "function-paren-newline": "off",
    "no-unused-expressions": "off",
    "max-len": "off",
    "consistent-return": "off",
    "no-param-reassign": "off",
    "react/jsx-curly-newline": "off",
    indent: "off",
    "react/jsx-props-no-spreading": "off",
    "no-nested-ternary": "off",
    "import/no-cycle": "off",
    "object-curly-newline": "off",
    "operator-linebreak": "off",
    "no-restricted-exports": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "comma-dangle": "off",
    "no-console": "off",
    "import/named": "off",
    "import/prefer-default-export": "off",
    "prefer-const": "warn",
    "no-unused-vars": "warn",
    "prefer-arrow-callback": "warn",
    "no-undef": "error",
    "no-use-before-define": "error",
    "react/prop-types": 0,
    "no-new-object": "warn",
    "no-loop-func": "off",
    "no-shadow": "off",
    "react/jsx-no-bind": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react/no-unstable-nested-components": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-quotes": "off",
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: ["arrow-function", "function-expression"],
        unnamedComponents: ["arrow-function", "function-expression"],
      },
    ],
    "import/extensions": ["off", "never"],
    "no-confusing-arrow": [
      "off",
      { allowParens: true, onlyOneSimpleParam: false },
    ],
    "implicit-arrow-linebreak": ["off", "beside"],
    "react/jsx-one-expression-per-line": ["off", { allow: "none" }],
    "jsx-a11y/control-has-associated-label": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-no-constructed-context-values": "off",
    "import/no-extraneous-dependencies": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "no-plusplus": ["off", { allow: "none" }],
    "no-case-declarations": ["off", { allow: "none" }],
    "no-restricted-syntax": ["off", { allow: "none" }],
    "no-underscore-dangle": ["off", { allow: "none" }],
    "react/no-array-index-key": ["off", { allow: "none" }],
    "react/jsx-curly-brace-presence": ["off", { allow: "none" }],
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@", "."],
          // Add more aliases as needed
        ],
        extensions: [".js", ".jsx", ".json"],
      },
      node: {
        extensions: [".js", ".jsx", ".json"],
        paths: [".", "./src", "./public"], // Add other paths as needed
      },
    },
  },
};
