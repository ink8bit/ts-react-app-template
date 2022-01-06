/* eslint-disable import/no-extraneous-dependencies */

const isLocalEnv = !process.env.CI;

if (isLocalEnv) {
  // eslint-disable-next-line global-require
  require('husky').install();
}
