module.exports = {
  env: {
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["node"],
  rules: {
    indent: [2, 2],
    semi: ["error", "always"],
    "no-const-assign": "error",
    "comma-dangle": [0],
    "no-console": [0],
  },
};
