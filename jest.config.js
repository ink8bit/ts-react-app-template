/**
 * Jest configuration
 * @see {@link https://jestjs.io/docs/en/configuration}
 */
module.exports = {
  bail: true,
  verbose: true,
  moduleNameMapper: {
    '\\.css$': require.resolve('./__mocks__/styles.js')
  }
};
