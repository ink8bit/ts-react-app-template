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
  extends: ['airbnb', 'plugin:import/errors', 'prettier', 'eslint-config-prettier'],

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
  parser: '@babel/eslint-parser',

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
  plugins: ['react', 'import', 'prettier'],

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#disabling-rules-only-for-a-group-of-files}
   */
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint-config-prettier/@typescript-eslint',
      ],
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/user-guide/configuring#configuring-rules}
   */
  rules: {
    'arrow-parens': ['error', 'always'],
    'no-console': 'error',
    'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx'] }],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
