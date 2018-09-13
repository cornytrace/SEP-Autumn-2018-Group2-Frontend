module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['warn', {
      "arrays": "always",
      "objects": "always",
      "imports": "never",
      "exports": "never",
      "functions": "ignore"
    }],
    'implicit-arrow-linebreak': ['warn', 'beside'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
