import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["public/**/*.js", "tests/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
];
