const js = require('@eslint/js');
const globals = require('globals');
const { defineConfig } = require('eslint/config')
const stylistic = require('@stylistic/eslint-plugin');


module.exports = defineConfig([
  stylistic.configs.recommended,
  {
    files: ['**/*.js'],
    plugins: { 
      js,
      stylistic 
    },
    languageOptions: { 
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    rules: {
      'no-console': 'off'
    }
  },
])