const js = require('@eslint/js');
const globals = require('globals');
const { defineConfig } = require('eslint/config')
const stylistic = require('@stylistic/eslint-plugin');


export default defineConfig([
  stylistic.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node },
  },
])