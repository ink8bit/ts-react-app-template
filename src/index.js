// @flow

import dotenv from 'dotenv';
import app from './app';
import logServerMessage from './utils';

dotenv.config({ path: 'variables.env' });

// Mongoose connection
// mongoose.connect(process.env.DATABASE);
// mongoose.Promise = global.Promise;
// mongoose.connection.on('error', (err) => {
//   console.log(err.message);
// });

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  logServerMessage(server);
});
