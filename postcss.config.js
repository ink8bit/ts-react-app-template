/**
 * Using postcss-loader with webpack
 * @see {@link https://webpack.js.org/loaders/postcss-loader/}
 * cssnano configuration
 * @see {@link https://cssnano.co/guides/presets/}
 */
module.exports = {
  plugins: {
    cssnano: {
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    },
  },
};
