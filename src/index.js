// @flow

import http from 'http';
import https from 'https';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

import app from './app';
// import logServerMessage from './utils';

dotenv.config({ path: 'variables.env' });

// Mongoose connection
// mongoose.connect(process.env.DATABASE);
// mongoose.Promise = global.Promise;
// mongoose.connection.on('error', (err) => {
//   console.log(err.message);
// });

// app.set('port', process.env.PORT || 3000);

const cert = fs.readFileSync(path.join(__dirname, '../', 'private/my.cert.pem'));
const key = fs.readFileSync(path.join(__dirname, '../', 'private/my.key.pem'));

const options = {
  cert,
  key,
  passphrase: 'asdzx',
};

if (cert && key) {
  https.createServer(options, app).listen(5000);
}

http.createServer(app).listen(3000);

// const server = app.listen(app.get('port'), () => {
//   logServerMessage(server);
// });
