/**
 * @see {@link https://github.com/okonet/lint-staged#configuration}
 */
module.exports = {
  '**/*.[j,t]s': ['npm run format', 'npm run lint', 'git add'],
  '**/*.[j,t]sx': ['npm run format', 'npm run lint', 'git add'],
  '**/*.css': ['npm run format', 'npm run lint:css', 'git add']
};
