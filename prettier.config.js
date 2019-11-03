/**
 * @see {@link https://prettier.io/docs/en/configuration.html}
 */
module.exports = {
  tabWidth: 2,
  printWidth: 100,
  semi: true,
  singleQuote: true,

  overrides: [
    {
      files: '*.[j,t]sx?',
      options: {
        parser: 'typescript',
        trailingComma: 'all',
        bracketSpacing: true,
        arrowParens: 'always'
      }
    },
    {
      files: '*.css',
      options: {
        parser: 'css'
      }
    }
  ]
};
