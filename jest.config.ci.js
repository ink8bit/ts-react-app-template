/**
 * Jest configuration
 * @see {@link https://jestjs.io/docs/en/configuration}
 */
module.exports = {
  notify: false,
  bail: false,
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js?x,ts?x}'],
  moduleNameMapper: {
    '\\.(jpg|png|svg)$': require.resolve('./__mocks__/images.js'),
    '\\.css$': 'identity-obj-proxy'
  }
};
