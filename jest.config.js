/**
 * Jest configuration
 * @see {@link https://jestjs.io/docs/en/configuration}
 */
module.exports = {
  bail: true,
  verbose: true,
  moduleNameMapper: {
    '\\.(jpg|png|svg)$': require.resolve('./__mocks__/images.js'),
    '\\.css$': 'identity-obj-proxy'
  }
};
