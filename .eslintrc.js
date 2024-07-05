module.exports = {
  settings: {
    react: {
      version: "17.0.2", // Specify the version of React
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["google", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "quotes": ["error", "double"],
    "object-curly-spacing": ["error", "always"],
  },
};
