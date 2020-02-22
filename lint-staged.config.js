/**
 * @see {@link https://github.com/okonet/lint-staged#configuration}
 */
module.exports = {
  '**/*.ts?x': ['tsx', 'prettier --write', 'eslint --fix'],
  '**/*.js?x': ['prettier --write', 'eslint --fix'],
  '**/*.css': ['prettier --write', 'stylelint --fix']
};
