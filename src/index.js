// @flow

import app from './app';
import logServerMessage from './utils';

const server = app.listen(3000, () => {
  logServerMessage(server);
});
