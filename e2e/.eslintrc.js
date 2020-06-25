module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module"
    },
    root: true,
    plugins: ["prettier"],
    extends: ["plugin:prettier/recommended"],
    rules: {
        "no-trailing-spaces": ["error", { ignoreComments: true }],
        "prefer-const": "error"
    }
};
