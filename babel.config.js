module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
  env: {
    development: {
      plugins: ['@babel/plugin-proposal-class-properties'],
    },
    test: {
      presets: ['@babel/preset-react', ['@babel/preset-env']],
      plugins: ['@babel/plugin-proposal-class-properties'],
    },
  },
};
