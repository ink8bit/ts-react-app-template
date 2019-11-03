/**
 * Configuring ESLint
 * @see {@link https://eslint.org/docs/user-guide/configuring}
 */
module.exports = {
  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
   */
  env: {
    browser: true,
    es6: true,
    jest: true,
  },

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#extending-configuration-files}
   */
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-globals}
   */
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  /**
   * @see {@link https://github.com/benmosher/eslint-plugin-import#importextensions}
   */
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
    },
  },

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-parser}
   */
  parser: '@typescript-eslint/parser',

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-parser-options}
   */
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#configuring-plugins}
   */
  plugins: ['react', '@typescript-eslint', 'import', 'prettier'],

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#configuring-rules}
   */
  rules: {
    'arrow-parens': ['error', 'always'],
    'no-console': 'error',
  },
};
