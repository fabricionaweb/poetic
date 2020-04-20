module.exports = {
  extends: [
    "./eslint-config.js",
    "airbnb",
    "airbnb/hooks",
    "prettier/react"
  ],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }] // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
  }
};
