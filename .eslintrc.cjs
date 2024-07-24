/** @typedef { import("eslint").Linter.Config } LinterConfig */

/** @type {LinterConfig} */
const config = {
  root: true,
  plugins: [
    "@typescript-eslint",
    "unicorn",
    "react",
    "react-hooks",
    "jsx-a11y",
    "import",
    "jest",
    "prefer-arrow-functions",
    "security",
    "functional",
    "strict-dependencies",
  ],
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
    tsconfigRootDir: path.join(__dirname, "dir/to/tsconfig.json"),
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ["./tsconfig.json"],
      },
      node: true,
    },
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:unicorn/recommended",
    "plugin:react/recommended",

    // tsconfig で "jsx": "react-jsx" を設定しているので一部ルールを無効化するために使用
    "plugin:react/jsx-runtime",

    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/recommended",
    "prettier",
  ],
  rules: {
    "react/jsx-no-bind": "error",
    "@typescript-eslint/strict-boolean-expressions": [
      "warn",
      { allowString: false, allowNumber: false, allowNullableObject: false },
    ],
    "react/jsx-no-leaked-render": [
      "error",
      {
        validStrategies: ["ternary"],
      },
    ],
    "no-implicit-coercion": "error",
    "@typescript-eslint/restrict-plus-operands": [
      "error",
      {
        checkCompoundAssignments: true,
        allowBoolean: false,
        allowNullish: false,
        allowNumberAndString: false,
        allowRegExp: false,
        allowAny: false,
      },
    ],
    "prefer-template": "error",
  },
};
