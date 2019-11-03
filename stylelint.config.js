/**
 * @see {@link https://stylelint.io/user-guide/rules}
 */
module.exports = {
  extends: 'stylelint-config-recommended',
  rules: {
    indentation: 2,
    'color-hex-length': 'short',
    'no-empty-source': true,
    'declaration-empty-line-before': 'never'
  }
};
