// @flow

import express from 'express';
import bodyParser from 'body-parser';
import { resolve } from 'path';

import routes from './routes';

const app = express();

app.set('views', resolve(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

export default app;
