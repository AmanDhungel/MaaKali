import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    rules: {
      "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "prefer-const": "warn",
      "no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      "no-duplicate-imports": [
        "error",
        {
          includeExports: true,
        },
      ],
      "no-duplicate-case": "error",
      "no-else-return": [
        "error",
        {
          allowElseIf: false,
        },
      ],
      "no-empty": [
        "error",
        {
          allowEmptyCatch: true,
        },
      ],
      "no-multi-assign": [
        "error",
        {
          ignoreNonDeclaration: false,
        },
      ],
      "no-new-func": "error",
      "react/jsx-no-bind": [
        "error",
        {
          ignoreRefs: true,
          allowArrowFunctions: true,
          allowFunctions: true,
          allowBind: false,

        },
      ],
    },
  }
]);